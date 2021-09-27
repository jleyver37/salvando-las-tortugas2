basic.forever(function () {
    basic.showNumber(input.temperature())
    while (input.temperature() < 26) {
        basic.showNumber(input.temperature())
        basic.showIcon(IconNames.Skull)
        music.playTone(784, music.beat(BeatFraction.Whole))
        music.playTone(880, music.beat(BeatFraction.Whole))
    }
    while (input.temperature() > 34) {
        basic.showNumber(input.temperature())
        basic.showIcon(IconNames.Skull)
        music.playTone(880, music.beat(BeatFraction.Whole))
        music.playTone(988, music.beat(BeatFraction.Whole))
    }
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            # . # . #
            . # # # .
            . # # # .
            # # # # #
            . . # . .
            `)
        basic.showLeds(`
            . . # . .
            # # # # #
            . # # # .
            . # # # .
            # . # . #
            `)
        music.playTone(175, music.beat(BeatFraction.Double))
        music.playTone(185, music.beat(BeatFraction.Double))
    }
})
