'''

CW spins forward, CCW rev
M1 Left
M2 Right
'''

radio.set_group(10)

def on_received_value(name, value):
    value = 120
    if name == "fwd":
        motor.motor_run(motor.Motors.M1, motor.Dir.CW, value)
        motor.motor_run(motor.Motors.M2, motor.Dir.CW, value)
    elif name == "rev":
        motor.motor_run(motor.Motors.M1, motor.Dir.CCW, value)
        motor.motor_run(motor.Motors.M2, motor.Dir.CCW, value)
    elif name == "left":
        motor.motor_run(motor.Motors.M1, motor.Dir.CCW, value)
        motor.motor_run(motor.Motors.M2, motor.Dir.CW, value)
    elif name == "right":
        motor.motor_run(motor.Motors.M1, motor.Dir.CW, value)
        motor.motor_run(motor.Motors.M2, motor.Dir.CCW, value)
    else:
        motor.motor_stop_all()
radio.on_received_value(on_received_value)


def on_received_string(receivedString):
    pass
radio.on_received_string(on_received_string)

