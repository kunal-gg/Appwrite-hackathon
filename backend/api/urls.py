from rest_framework import routers
from django.urls import path, include
from .views import PreviewView, GoogleLensView, CropView


urlpatterns = [
    path('preview/', PreviewView.as_view(), name='preview'),
    path('googlelens/', GoogleLensView.as_view(), name='googlelens'),
    path('crop/', CropView.as_view(), name='crop')
]

