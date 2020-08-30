function drawRandomDots (goal: number) {
    Current = 0
    while (Current < goal) {
        x = randint(0, 4)
        y = randint(0, 4)
        if (!(led.point(x, y))) {
            led.plot(x, y)
            Current += 1
        }
    }
}
function drawDots () {
    led.plot(2, 2)
    led.plotBrightness(0, 0, 152)
}
function drawRandomDot () {
    led.plot(randint(0, 3), randint(0, 4))
}
let y = 0
let x = 0
let Current = 0
drawRandomDots(10)
