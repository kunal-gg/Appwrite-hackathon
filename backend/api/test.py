import cv2
import mediapipe as mp

# Load and preprocess the image
image = cv2.imread('your_image.jpg')
# Perform any necessary preprocessing here

# Initialize MediaPipe pose model
pose = mp.solutions.pose.Pose()

# Process the image
results = pose.process(cv2.cvtColor(image, cv2.COLOR_BGR2RGB))

# Visualize the landmarks
if results.pose_landmarks:
    # Process the landmarks here
    # Example: Draw circles at each landmark point
    for landmark in results.pose_landmarks.landmark:
        x = int(landmark.x * image.shape[1])
        y = int(landmark.y * image.shape[0])
        cv2.circle(image, (x, y), 5, (0, 255, 0), -1)

# Display the image
cv2.imshow('MediaPipe Body Landmarks', image)
cv2.waitKey(0)
cv2.destroyAllWindows()