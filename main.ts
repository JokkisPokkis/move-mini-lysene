input.onButtonPressed(Button.A, function () {
    lysene.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    lysene.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    lysene.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    lysene.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
    lysene.setPixelColor(4, neopixel.colors(NeoPixelColors.Purple))
    lysene.show()
})
input.onButtonPressed(Button.B, function () {
    lysene.clear()
    lysene.show()
})
let lysene: neopixel.Strip = null
lysene = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
basic.forever(function () {
    basic.pause(100)
    lysene.rotate(1)
    lysene.show()
})
