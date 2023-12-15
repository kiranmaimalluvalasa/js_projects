This project aims to detect drowsiness in a person.

How it works?
1) FACIAL LANDMARK DETECTION
2) EXTRACT EYES STRUCTURE
3) DETERMINE THE EYE-ASPECT-RATIO(EAR)
4) IDENTIFY THE BLINKS
5) DIFFERENTIATE A NORMAL BLINK FROM A DROWSY EYE BLINK


Requirements
    numpy==1.15.2
	dlib==19.16.0
	pygame==1.9.4
	imutils==0.5.1
	opencv_python==3.4.3.18
	scipy==1.1.0
Use `pip install -r requirements.txt` to install the given requirements.

## Usage

### Detect Face and Eyes in a Single Image
Put your file to be detected in **images** folder with name **test.jpeg** or change the file path in `Line : 14 face_and_eye_detector_single_image.py` to your image file.                     
Run script using:

    python face_and_eye_detector_single_image.py

### Detect Face and Eyes in a Webcam Feed
Run script using:

    python face_and_eye_detector_webcam_video.py
### Drowsiness Detection
Run script using:

    python drowsiness_detect.py

