from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

from .utils import downloadVideo, getVideoFrames, hostImage, deleteVideo, googleLensOnAppwrite, cropImage
import json

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
    

class CropView(APIView):

    def post (self,request,*args,**kwargs):
        image_link = request.data['image_link']
        image_link_list =cropImage(image_link)
        return Response({'crop_link': image_link_list})


class GoogleLensView(APIView):

    def post(self,request,*args,**kwargs):
        image_link = request.data['image_link']
        visual_matches = googleLensOnAppwrite(image_link)
        results = json.loads(visual_matches["response"])
        results = results["areDevelopersAwesome"]
        final_result = [results[0]]
        for result in results:
            if result["source"] == "amazon.com":
                final_result.append(result)

        return Response({'visual_matches': final_result})
    