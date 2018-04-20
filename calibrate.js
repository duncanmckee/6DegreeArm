const makePwmDriver = require('adafruit-i2c-pwm-driver')
const pwmDriver = makePwmDriver({address: 0x40, device: '/dev/i2c-1'})

pwmDriver.setPWMFreq(40);

//Servo Angles
var angle0 = 90;
var angle1 = 90;
var angle2 = 135;
var angle3 = 135; 
var angle4 = 20;
var angle5 = 115;

//Convert an angle to pwm off value
function AngleToOff(angle){
    var cycle = 1000/freq;
    var tickTime = 1000 * cycle / 4096;
    var ms = (angle * 100 / 9) + 500;
    return ms / tickTime;
}

pwmDriver.setPWM(0, 0, AngleToOff(angle0));
pwmDriver.setPWM(1, 0, AngleToOff(angle1));
pwmDriver.setPWM(2, 0, AngleToOff(angle2));
pwmDriver.setPWM(3, 0, AngleToOff(angle3));
pwmDriver.setPWM(4, 0, AngleToOff(angle4));
pwmDriver.setPWM(5, 0, AngleToOff(angle5));