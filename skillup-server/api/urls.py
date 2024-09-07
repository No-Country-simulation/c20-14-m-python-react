from django.urls import path
from .views import RegisterView, HomeView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('home/', HomeView.as_view(), name='home'),
]
