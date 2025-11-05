let direction = 0
input.onGesture(Gesture.Shake, function () {
    direction = randint(1, 4)
    if (direction == 1) {
        basic.showNumber(direction)
        basic.showArrow(ArrowNames.North)
    } else if (direction == 2) {
        basic.showNumber(direction)
        basic.showArrow(ArrowNames.East)
    } else if (direction == 3) {
        basic.showNumber(direction)
        basic.showArrow(ArrowNames.South)
    } else {
        basic.showNumber(direction)
        basic.showArrow(ArrowNames.West)
    }
})
