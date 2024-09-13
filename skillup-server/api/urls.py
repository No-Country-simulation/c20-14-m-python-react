from django.urls import path
from .views import RegisterView, LoginView, ProfileView, UserCoursesView, AllCoursesView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('user/<int:pk>/courses/', UserCoursesView.as_view(), name='user_courses'),
    path('courses/', AllCoursesView.as_view(), name='courses'),
    path('courses/<int:pk>/', AllCoursesView.as_view(), name='courses'),
    path('user/profile/<int:pk>/', ProfileView.as_view(), name='profile'),


]
