let y角度 = 0
let x角度 = 0
let 蛇方向 = ""
let 蛇蛇蛇 = [[0, 0], [0, 1]]
basic.forever(function () {
    basic.clearScreen()
    蛇方向 = "w"
    for (let 蛇座標 of 蛇蛇蛇) {
        led.plot(蛇座標[0], 蛇座標[1])
    }
    if (蛇方向 == "a") {
        蛇蛇蛇.unshift([蛇蛇蛇[0][0] - 1, 蛇蛇蛇[0][1]])
    } else if (蛇方向 == "d") {
        蛇蛇蛇.unshift([蛇蛇蛇[0][0] + 1, 蛇蛇蛇[0][1]])
    } else if (蛇方向 == "w") {
        蛇蛇蛇.unshift([蛇蛇蛇[0][0], 蛇蛇蛇[0][1] - 1])
    } else if (蛇方向 == "s") {
        蛇蛇蛇.unshift([蛇蛇蛇[0][0], 蛇蛇蛇[0][1] + 1])
    }
    蛇蛇蛇.pop()
    basic.pause(100)
    x角度 = Math.round(Math.map(input.acceleration(Dimension.X), -1023, 1023, -1, 1))
    y角度 = Math.round(Math.map(input.acceleration(Dimension.Y), -1023, 1023, -1, 1))
    serial.writeValue("x", x角度)
    serial.writeValue("y", y角度)
    if (x角度 == -1) {
        basic.showString("a")
    } else if (x角度 == 1) {
        basic.showString("d")
    } else if (y角度 == -1) {
        basic.showString("w")
    } else if (y角度 == 1) {
        basic.showString("s")
    }
})
