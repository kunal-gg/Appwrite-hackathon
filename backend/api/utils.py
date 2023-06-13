from decouple import config

from pytube import YouTube
from imgurpython import ImgurClient
from moviepy.editor import VideoFileClip
from PIL import Image
from serpapi import GoogleSearch
from appwrite.client import Client
from appwrite.services.functions import Functions

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
    
def googleLensOnAppwrite(image_link):
    client = Client()

    (client
    .set_endpoint('https://cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('64846d81a1175c196318') # Your project ID
    .set_key('ec930e602439a6d223c772eabc350af3381ca621294e809d423744dd4be34817238884d7c35b6a731dd7c4c306165afd1b5d3f101742aac34ec9b2727e2cf0ffa3c15f1811b9b343992b97fdfc3b753c60294d1b14c1108ce9e27be02aa4c68020a279a0c6deb12c3d4477230d9de015a40410e83cf0fdb67cb25276ce8ae979') # Your secret API key
    )

    functions = Functions(client)

    result = functions.create_execution('64846d977441fb1ae8db')

    return result