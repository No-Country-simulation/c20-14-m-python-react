from django.contrib import admin
from .models import Profile, Course, Module, Category

# Register your models here.


admin.site.register(Profile)
admin.site.register(Course)
admin.site.register(Module)
admin.site.register(Category)

