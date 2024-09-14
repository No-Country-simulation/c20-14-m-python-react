from django.urls import path
from .views import (RegisterView,
                    LoginView,
                    ProfileView,
                    UserCoursesView,
                    AllCoursesView,
                    ModuleView,
                    EnrollmentView)

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('user/<int:pk>/courses/', UserCoursesView.as_view(), name='user_courses'),
    path('enroll/', EnrollmentView.as_view(), name='enroll_course'),
    path('courses/', AllCoursesView.as_view(), name='courses'),
    path('courses/<int:pk>/', AllCoursesView.as_view(), name='courses'),
    path('courses/<int:course_id>/module/<int:module_id>/', ModuleView.as_view(), name='course'),
    path('user/profile/<int:pk>/', ProfileView.as_view(), name='profile'),


]
