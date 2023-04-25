radio.onReceivedNumber(function (receivedNumber) {
    action = receivedNumber
})
function back () {
    wuKong.setAllMotor(-20, -20)
}
function fork_up () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 60)
}
function forward () {
    wuKong.setAllMotor(20, 20)
}
function fork_don () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
}
let action = 0
joystickbit.initJoystickBit()
radio.setGroup(3)
basic.showIcon(IconNames.Chessboard)
