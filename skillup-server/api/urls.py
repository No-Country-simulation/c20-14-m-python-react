from django.urls import path
from .views import (RegisterView,
                    LoginView,
                    ProfileView,
                    UserCoursesView,
                    CoursesView,
                    ModuleView,
                    EnrollmentView, UpdateProgressView, CompleteCourseView)

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('user/profile/<int:pk>/courses/', UserCoursesView.as_view(), name='user_courses'),
    path('enroll/', EnrollmentView.as_view(), name='enroll_course'),
    path('courses/', CoursesView.as_view(), name='courses'),
    path('courses/<int:pk>/', CoursesView.as_view(), name='course'),
    path('courses/<int:course_id>/module/<int:module_id>/', ModuleView.as_view(), name='module'),
    path('update-progress/', UpdateProgressView.as_view(), name='update_progress'),
    path('complete-course/<int:enrollment_id>/', CompleteCourseView.as_view(), name='complete_course'),
    path('user/<int:pk>/profile/', ProfileView.as_view(), name='profile'),

]
