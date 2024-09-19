from django.urls import path
from .views import (RegisterView,
                    LoginView,
                    ProfileView,
                    UserCoursesView,
                    CoursesView,
                    ModuleView,
                    EnrollmentView)

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('user/<int:pk>/courses/', UserCoursesView.as_view(), name='user_courses'),
    path('enroll/', EnrollmentView.as_view(), name='enroll_course'),
    path('courses/', CoursesView.as_view(), name='courses'),
    path('courses/<int:pk>/', CoursesView.as_view(), name='course'),
    path('courses/<int:course_id>/module/<int:module_id>/', ModuleView.as_view(), name='module'),
    path('user/<int:pk>/profile/', ProfileView.as_view(), name='profile'),

]
