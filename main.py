'''

CW spins forward, CCW rev
M1 Left
M2 Right
'''
basic.show_icon(IconNames.HEART)
radio.set_group(30)


def on_received_value(name, value):
    value = 120
    if name == "fwd":
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.FORWARD, value)
    elif name == "rev":
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.REVERSE, value)
    elif name == "left":
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.LEFT, value)
    elif name == "right":
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.RIGHT, value)
    elif name == "stop":
        Kitronik_Move_Motor.stop()
radio.on_received_value(on_received_value)


def on_received_string(receivedString):
    pass
radio.on_received_string(on_received_string)

