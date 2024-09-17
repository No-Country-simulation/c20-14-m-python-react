import uuid
from django.contrib.auth.models import User
from django.db import models
from django.utils import timezone
from django.utils.text import slugify

class SoftDeleteManager(models.Manager):
    def get_queryset(self):
        # Ensure only non-deleted objects are returned
        return super().get_queryset().filter(deleted_at__isnull=True)

class SoftDeleteModel(models.Model):
    is_deleted = models.BooleanField(default=False)  # Added field for soft delete status
    objects = SoftDeleteManager()
    all_objects = models.Manager()
    deleted_at = models.DateTimeField(null=True, default=None, blank=True)

    def soft_delete(self):
        self.deleted_at = timezone.now()
        self.is_deleted = True  # Mark as deleted
        self.save()

    def restore(self):
        self.deleted_at = None
        self.is_deleted = False  # Mark as not deleted
        self.save()

    class Meta:
        abstract = True

class Profile(SoftDeleteModel):
    STUDENT = 'ST'
    INSTRUCTOR = 'IN'
    ADMINISTRATOR = 'ADMIN'

    PROFILE_ROLE_CHOICES = {
        STUDENT: 'Student',
        INSTRUCTOR: 'Instructor',
        ADMINISTRATOR: 'Admin',
    }

    user = models.OneToOneField(User, on_delete=models.DO_NOTHING, related_name='profile')
    profile_picture = models.ImageField(upload_to='profile_pictures/', blank=True)
    role = models.CharField(max_length=50, choices=PROFILE_ROLE_CHOICES, default=STUDENT)
    social_networks_links = models.JSONField(default=dict, blank=True)

    # Index on 'role' for faster querying
    class Meta:
        indexes = [models.Index(fields=['role'])]

    def __str__(self):
        return f'{self.user.username} - {self.role}'

    def as_dict(self):
        return {
            'profile_id': self.id,
            'user_id': self.user_id,
            'first_name': self.user.first_name,
            'last_name': self.user.last_name,
            'profile_picture': self.profile_picture.url if self.profile_picture else None,
            'role': self.role,
            'social_networks_links': self.social_networks_links,
        }

class Category(SoftDeleteModel):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)

    # Index on 'name' for faster querying
    class Meta:
        indexes = [models.Index(fields=['name'])]

    def __str__(self):
        return self.name

    def as_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
        }

class Course(SoftDeleteModel):
    title = models.CharField(max_length=255, null=False, blank=False)
    description = models.TextField()
    category = models.ManyToManyField('Category', related_name='courses')
    duration = models.PositiveIntegerField()
    date_created = models.DateTimeField(auto_now_add=True)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    slug = models.SlugField(unique=True, blank=True, editable=False)
    instructor = models.ForeignKey('Profile', on_delete=models.DO_NOTHING, related_name='courses_taught')
    cover_image = models.URLField(max_length=200, blank=True, null=True)

    # Index on 'slug' for faster querying
    class Meta:
        indexes = [models.Index(fields=['slug'])]

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = self.generate_unique_slug()  # Generate unique slug
        super().save(*args, **kwargs)

    def generate_unique_slug(self):
        original_slug = slugify(self.title)
        slug = original_slug
        counter = 1
        while Course.objects.filter(slug=slug).exists():
            slug = f"{original_slug}-{counter}"
            counter += 1
        return slug

    def as_dict(self):
        # Use select_related to reduce number of queries
        instructor_profile = Profile.objects.select_related('user').get(user_id=self.instructor.id, role='IN')
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'category': list(self.category.values('id', 'name')),
            'duration': self.duration,
            'date_created': self.date_created,
            'price': self.price,
            'slug': self.slug,
            'instructor': instructor_profile.as_dict(),
            'cover_image': self.cover_image,
            'modules': list(self.modules.values('id', 'title', 'order', 'video_url')),
        }

class Module(SoftDeleteModel):
    title = models.CharField(max_length=50, null=False, blank=False)
    order = models.PositiveIntegerField()
    video_url = models.URLField()
    course = models.ForeignKey('Course', on_delete=models.DO_NOTHING, related_name='modules', null=True)

    # Index on 'title' and 'course' for faster querying
    class Meta:
        indexes = [models.Index(fields=['title']), models.Index(fields=['course'])]

    def __str__(self):
        return self.title

    def as_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'order': self.order,
            'video_url': self.video_url,
        }

class Enrollment(SoftDeleteModel):
    enrollment_date = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey('Profile', on_delete=models.DO_NOTHING, related_name='enrollments')
    course = models.ForeignKey('Course', on_delete=models.DO_NOTHING, related_name='enrollments')

    # Index on 'user' and 'course' for faster querying
    class Meta:
        indexes = [models.Index(fields=['user']), models.Index(fields=['course'])]

    def __str__(self):
        return f"Enrollment for {self.user}"

    def as_dict(self):
        return {
            'id': self.id,
            'enrollment_date': self.enrollment_date,
            'user': self.user_id,
            'course': self.course_id,
        }

class Progress(SoftDeleteModel):
    progress_percentage = models.PositiveIntegerField()  # A percentage value (0-100)
    updated_at = models.DateTimeField(default=timezone.now)
    enrollment = models.ForeignKey('Enrollment', on_delete=models.CASCADE, related_name='progresses')

    # Index on 'enrollment' for faster querying
    class Meta:
        indexes = [models.Index(fields=['enrollment'])]

    def __str__(self):
        return f"Progress: {self.progress_percentage}% - Enrollment ID: {self.enrollment.id}"

    def as_dict(self):
        return {
            'id': self.id,
            'progress_percentage': self.progress_percentage,
            'updated_at': self.updated_at,
            'enrollment': self.enrollment_id,
        }

class Certificate(SoftDeleteModel):
    code = models.CharField(max_length=100, unique=True)
    url = models.URLField()
    enrollment = models.ForeignKey('Enrollment', on_delete=models.DO_NOTHING, related_name='certificates')

    # Index on 'code' for faster querying
    class Meta:
        indexes = [models.Index(fields=['code'])]

    def __str__(self):
        return f"{self.code} - {self.enrollment.course.title}"

    def generate_code(self):
        """Generate a unique code for the certificate."""
        self.code = f'CERT-{uuid.uuid4().hex[:10].upper()}'
        self.save()

    def as_dict(self):
        return {
            'id': self.id,
            'code': self.code,
            'url': self.url,
            'enrollment': self.enrollment_id,
        }

class Rating(SoftDeleteModel):
    value = models.IntegerField()
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    enrollment = models.ForeignKey('Enrollment', on_delete=models.DO_NOTHING, related_name='ratings')

    # Index on 'enrollment' for faster querying
    class Meta:
        indexes = [models.Index(fields=['enrollment'])]

    def __str__(self):
        return f"{self.value} stars"

    def as_dict(self):
        return {
            'id': self.id,
            'value': self.value,
            'comment': self.comment,
            'created_at': self.created_at,
            'enrollment': self.enrollment_id,
        }

# Uncomment and optimize if you decide to use WishList in the future
# class WishList(SoftDeleteModel):
#     user = models.ForeignKey('Profile', on_delete=models.DO_NOTHING, related_name='wishlists')
#     course = models.ManyToManyField('Course', related_name='wishlists')
#     created_at = models.DateTimeField(auto_now_add=True)
#
#     # Index on 'user' for faster querying
#     class Meta:
#         indexes = [models.Index(fields=['user'])]
#
#     def __str__(self):
#         return f"{self.user_id} - {self.course}"
#
#     def as_dict(self):
#         return {
#             'id': self.id,
#             'course_id': self.course.id,
#             'created_at': self.created_at,
#         }


class Payment(models.Model):
    user = models.ForeignKey('Profile', on_delete=models.CASCADE, related_name='payments')
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    transaction_id = models.CharField(max_length=255, unique=True)
    status = models.CharField(max_length=50, choices=[('pending', 'Pending'), ('completed', 'Completed'), ('failed', 'Failed')])
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f'Payment {self.transaction_id} - {self.status}'