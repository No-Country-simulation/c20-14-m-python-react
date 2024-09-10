import uuid

from django.contrib.auth.models import User
from django.db import models
from django.utils import timezone
from django.utils.text import slugify


class SoftDeleteManager(models.Manager):

    def get_queryset(self):
        return super().get_queryset().filter(deleted_at__isnull=True)


class SoftDeleteModel(models.Model):
    is_deleted = models.BooleanField(default=False)
    objects = SoftDeleteManager()
    all_objects = models.Manager()
    deleted_at = models.DateTimeField(null=True, default=None)

    def soft_delete(self):
        self.deleted_at = timezone.now()
        self.save()

    def restore(self):
        self.deleted_at = None
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

    def __str__(self):
        return f'{self.user.username} - {self.role}'

    def as_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'profile_picture': self.profile_picture,
            'role': self.role,
        }


class Category(SoftDeleteModel):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)

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

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
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
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'category': self.category.name,
            'duration': self.duration,
            'date_created': self.date_created,
            'price': self.price,
            'slug': self.slug,
            'instructor': self.instructor_id,
        }


class Module(SoftDeleteModel):
    title = models.CharField(max_length=50, null=False, blank=False)
    order = models.PositiveIntegerField()
    video_url = models.URLField()

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
    course = models.ForeignKey('Course', on_delete=models.DO_NOTHING, related_name='courses')

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
