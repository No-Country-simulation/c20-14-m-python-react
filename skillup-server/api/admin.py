from django.contrib import admin
from .models import Profile, Course, Module, Category, Enrollment, Progress, Certificate

# Register your models here.


admin.site.register(Profile)
admin.site.register(Course)
admin.site.register(Module)
admin.site.register(Category)
admin.site.register(Enrollment)
admin.site.register(Progress)
admin.site.register(Certificate)

