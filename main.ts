function 한_층_내리기 () {
    if (repeat > 0) {
        _new = randint(0, 1) * 4
    }
    if (repeat < 6) {
        _new = -1
    }
    led.unplot(_1x, 4)
    _1x = _2x
    led.plot(_1x, 4)
    led.unplot(_2x, 3)
    _2x = _3x
    led.plot(_2x, 3)
    led.unplot(_3x, 2)
    _3x = _4x
    led.plot(_3x, 2)
    led.unplot(_4x, 1)
    _4x = _5x
    led.plot(_4x, 1)
    led.unplot(_5x, 0)
    _5x = _new
    led.plot(_5x, 0)
}
input.onButtonPressed(Button.B, function () {
    if (_1x == 4 && repeat > 0) {
        한_층_내리기()
        repeat += -1
    } else {
        if (repeat > 0) {
            틀림()
            score += -1
            repeat += -1
        }
    }
})
function 틀림 () {
    for (let index = 0; index < 2; index++) {
        for (let BBx = 0; BBx <= 2; BBx++) {
            for (let BBy = 0; BBy <= 4; BBy++) {
                led.toggle(BBx + 1, BBy)
                basic.pause(1)
            }
        }
    }
    basic.pause(1000)
    한_층_내리기()
    score += -1
}
input.onButtonPressed(Button.A, function () {
    if (_1x == 0 && repeat > 0) {
        한_층_내리기()
        repeat += -1
    } else {
        if (repeat > 0) {
            틀림()
            score += -1
            repeat += -1
        }
    }
})
function 끝내기 () {
    time = input.runningTime() - timeset
    for (let index = 0; index < 4; index++) {
        for (let BBx = 0; BBx <= 4; BBx++) {
            for (let BBy = 0; BBy <= 4; BBy++) {
                led.plot(BBx, BBy)
            }
        }
        for (let BBx = 0; BBx <= 4; BBx++) {
            for (let BBy = 0; BBy <= 4; BBy++) {
                led.unplot(BBx, BBy)
            }
        }
    }
    basic.clearScreen()
    basic.showNumber(time * (score / 20))
}
/**
 * 초기 변수 선언
 */
let time = 0
let score = 0
let timeset = 0
let _1x = 0
let _2x = 0
let _3x = 0
let _4x = 0
let _5x = 0
let _new = 0
let repeat = 0
// 시도 횟수 바꿀려면 이거만 바꾸면 됨
let tries = 30
repeat = -1
_new = randint(0, 1) * 4
_5x = _new
_new = randint(0, 1) * 4
_4x = _new
_new = randint(0, 1) * 4
_3x = _new
_new = randint(0, 1) * 4
_2x = _new
_new = randint(0, 1) * 4
_1x = _new
basic.showNumber(3)
basic.pause(100)
basic.showNumber(2)
basic.pause(100)
basic.showNumber(1)
basic.pause(100)
let START = 1
basic.clearScreen()
repeat = tries
한_층_내리기()
timeset = input.runningTime()
score = tries
basic.forever(function () {
    if (repeat == 0) {
        time = input.runningTime() - timeset
        basic.clearScreen()
        for (let index = 0; index < 2; index++) {
            basic.showNumber(Math.round(1000000 / (time * (score / tries))))
        }
        repeat = -1
    }
})
