from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

from .utils import downloadVideo, getVideoFrames, hostImage, deleteVideo, getGoogleImage

class VideoToImage(APIView):

    def get(self, request, format=None):
        # link = request.data['link']
        # timestamp = request.data['timestamp']
        link = "https://www.youtube.com/watch?v=rrlY04Hmb4U&list=RDrrlY04Hmb4U&start_radio=1"
        timestamp = 90
        video_path = downloadVideo(link)
        image_path = getVideoFrames(video_path, timestamp)
        image_link = hostImage(image_path)
        if video_path:
            deleteVideo(video_path)
        data = getGoogleImage(image_link)
        return Response({'response': data})


