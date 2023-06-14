from decouple import config

from pytube import YouTube
from imgurpython import ImgurClient
from moviepy.editor import VideoFileClip
from PIL import Image
from serpapi import GoogleSearch
from appwrite.client import Client
from appwrite.services.functions import Functions

import os
import cv2
import mediapipe as mp
import urllib.request
import numpy as np
from imgurpython import ImgurClient
import json

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
    payload = {
        "link" : image_link
    }
    payload  = json.dumps(payload)
    
    functions = Functions(client)

    result = functions.create_execution('64846d977441fb1ae8db',payload)

    return result


def cropImage(image_link):
    # Download the image
    url = image_link 
    filename = 'image.jpeg'
    urllib.request.urlretrieve(url, filename)
    # Load and preprocess the image
    image = cv2.imread(filename)
    # Perform any necessary preprocessing here

    # Initialize MediaPipe pose model
    pose = mp.solutions.pose.Pose()

    # Process the image
    results = pose.process(cv2.cvtColor(image, cv2.COLOR_BGR2RGB))

    # Get the coordinates of the topmost eye, bottommost hip, and bottommost ankle
    eye_landmarks = [results.pose_landmarks.landmark[mp.solutions.pose.PoseLandmark.LEFT_EYE],
                    results.pose_landmarks.landmark[mp.solutions.pose.PoseLandmark.RIGHT_EYE]]
    hip_landmarks = [results.pose_landmarks.landmark[mp.solutions.pose.PoseLandmark.LEFT_HIP],
                    results.pose_landmarks.landmark[mp.solutions.pose.PoseLandmark.RIGHT_HIP]]
    ankle_landmarks = [results.pose_landmarks.landmark[mp.solutions.pose.PoseLandmark.LEFT_ANKLE],
                    results.pose_landmarks.landmark[mp.solutions.pose.PoseLandmark.RIGHT_ANKLE]]

    topmost_eye = min(eye_landmarks, key=lambda landmark: landmark.y)
    bottommost_hip = max(hip_landmarks, key=lambda landmark: landmark.y)
    bottommost_ankle = max(ankle_landmarks, key=lambda landmark: landmark.y)

    # Get the leftmost and rightmost X coordinates from all landmarks
    all_landmarks = [landmark for landmark in results.pose_landmarks.landmark]
    leftmost_x = min(all_landmarks, key=lambda landmark: landmark.x).x
    rightmost_x = max(all_landmarks, key=lambda landmark: landmark.x).x

    # Define the extra width
    extra_width = 10

    # Crop the first image (from topmost eye to bottommost hip)
    crop_top1 = int(topmost_eye.y * image.shape[0])
    crop_bottom1 = int(bottommost_hip.y * image.shape[0])
    crop_left = int(leftmost_x * image.shape[1]) - extra_width
    crop_right = int(rightmost_x * image.shape[1]) + extra_width
    crop_img1 = image[crop_top1:crop_bottom1, crop_left:crop_right]
    # Crop the second image (from topmost hip to bottommost ankle)
    crop_top2 = int(bottommost_hip.y * image.shape[0])
    crop_bottom2 = int(bottommost_ankle.y * image.shape[0])
    crop_img2 = image[crop_top2:crop_bottom2, crop_left:crop_right]

    #save images
    crop_image1 = "image1.jpeg"
    crop_image2 = "image2.jpeg"
    cv2.imwrite(crop_image1, crop_img1)
    cv2.imwrite(crop_image2, crop_img2)

    # Display the images
    image1 = cv2.imread('image1.jpeg')
    image2 = cv2.imread('image2.jpeg')
    # cv2.imshow('image1',image1)
    # cv2.imshow('image2',image2)
    # cv2.waitKey(0)
    # cv2.destroyAllWindows()

    link1 = hostImage(crop_image1)
    link2 = hostImage(crop_image2)
    response = [link1,link2]
    print("Image uploaded successfully! Link:", response)
    return response
