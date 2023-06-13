/** 

CW spins forward, CCW rev
M1 Left
M2 Right

 */
radio.setGroup(10)
radio.onReceivedValue(function on_received_value(name: string, value: number) {
    value = 120
    if (name == "fwd") {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, value)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CW, value)
    } else if (name == "rev") {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, value)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, value)
    } else if (name == "left") {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, value)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CW, value)
    } else if (name == "right") {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, value)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, value)
    } else {
        motor.motorStopAll()
    }
    
})
radio.onReceivedString(function on_received_string(receivedString: string) {
    
})
