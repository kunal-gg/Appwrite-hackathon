from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

from .utils import downloadVideo, getVideoFrames, hostImage, deleteVideo, getGoogleImage


class PreviewView(APIView):

    def post(self,request,*args,**kwargs):
        link = request.data['link']
        timestamp = request.data['timestamp']
        video_path = downloadVideo(link)
        image_path = getVideoFrames(video_path, timestamp)
        image_link = hostImage(image_path)
        if video_path:
            deleteVideo(video_path)
        return Response({'preview_link': image_link})
