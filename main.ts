basic.forever(function () {
    basic.showNumber(input.temperature())
    while (input.temperature() < 26) {
        basic.showNumber(input.temperature())
        basic.showIcon(IconNames.Skull)
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    while (input.temperature() > 34) {
        basic.showNumber(input.temperature())
        basic.showIcon(IconNames.Skull)
        music.playTone(294, music.beat(BeatFraction.Whole))
    }
    basic.showIcon(IconNames.Heart)
    music.playTone(330, music.beat(BeatFraction.Whole))
})
