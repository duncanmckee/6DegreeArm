# 6DegreeArm
Raspberry Pi Node JS project for robotic arm

This was a senior project to set up and control a 6 degree of freedom robotic arm using Node JS, with the goal of drawing on a whiteboard.

Steps to Control your Arm:
* Install the "adafruit-i2c-pwm-driver" NPM package
* Calibrate your arm to the design described below
* Download the a.js file from this repository
* Write your picture out in terms of (x, y) coordinants
* Use this https://docs.google.com/spreadsheets/d/1F2PY6dgMHq5yxhy9Q13geZ9fN8H4xQ3tgHAK-2hCPEI/edit?usp=sharing spreadsheet to convert coordinants to robot commands
* Replace the existing commands in the a.js file with your new commands
* Run a.js


Steps to Calibrate your Arm:
* Construct your arm without screwing in the servo heads
* Download and run the calibrate.js file from this repository
* This will be the position that will hold the arm vertical
* If any of the following are not true take the servo head off and rotate it to make it true
* The bottom servo (servo 0) is at its position where it is holding its servo head parralel to the surface that it will draw on
* Servo 1 should be holding its arm completly pertendicular to the surface the arm is resting on
* Servo 2 should also be holding its arm completly perpendicualr to the surface the arm is resting on
* Servo 3 should also be holding its arm completly perpendicualr to the surface the arm is resting on
* Servo 4 should hold the claw such that anything it grabs points towards the surface that will be drawn on
* Servo 5 should be clamping down such that something held in the claw tightly
