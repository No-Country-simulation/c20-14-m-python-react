from django.urls import path
from .views import ProfileView

urlpatterns = [
    path ('register/', ProfileView.as_view(), name='register'),

]
