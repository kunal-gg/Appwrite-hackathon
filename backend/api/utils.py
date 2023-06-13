from decouple import config

from pytube import YouTube
from imgurpython import ImgurClient
from moviepy.editor import VideoFileClip
from PIL import Image
from serpapi import GoogleSearch

import os


def downloadVideo(link):
    yt = YouTube(link)
    video_path = yt.streams.filter(progressive=True, file_extension='mp4').order_by('resolution').desc().first().download()
    return video_path

def getVideoFrames(video_path, timestamp):
    timestamp = timestamp
    # Load the video
    video = VideoFileClip(video_path)
    # Get the frame at the specified timestamp
    frame = video.get_frame(timestamp)
    # Save the frame as an image
    image = Image.fromarray(frame)
    image_path = "screenshot.png"
    image.save(image_path)
    return image_path

def hostImage(image_path):
    client_id = config('IMGUR_CLIENT_ID')
    client_secret = config('IMGUR_CLIENT_SECRET')
    client = ImgurClient(client_id, client_secret)
    response = client.upload_from_path(image_path, anon=True)
    image_link = response['link']
    print("Image uploaded successfully! Link:", image_link)
    return image_link

def getGoogleImage(image_link):
    params = {
    "engine": "google_lens",
    "url": image_link,
    "api_key": config('GOOGLELENS_API_KEY'),
    }

    search = GoogleSearch(params)
    results = search.get_dict()
    visual_matches = results["visual_matches"]  
    return visual_matches 

def deleteVideo(path):
    file_path =path
    if os.path.isfile(file_path):
        os.remove(file_path)
        print("File has been deleted")
        return "File has been deleted"
    else:
        print("File does not exist")
        return "File does not exist"