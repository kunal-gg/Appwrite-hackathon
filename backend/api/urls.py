from rest_framework import routers
from django.urls import path, include
from .views import VideoToImage



urlpatterns = [
    path('link/', VideoToImage.as_view(), name='video_to_image'),
]
