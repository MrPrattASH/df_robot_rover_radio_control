/** 

CW spins forward, CCW rev
M1 Left
M2 Right

 */
basic.showIcon(IconNames.Heart)
radio.setGroup(30)
radio.onReceivedValue(function on_received_value(name: string, value: number) {
    value = 120
    if (name == "fwd") {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, value)
    } else if (name == "rev") {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, value)
    } else if (name == "left") {
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, value)
    } else if (name == "right") {
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Right, value)
    } else if (name == "stop") {
        Kitronik_Move_Motor.stop()
    }
    
})
radio.onReceivedString(function on_received_string(receivedString: string) {
    
})
