let counter = 0
loops.everyInterval(1000, function () {
    led.toggle(counter / 5, counter % 5)
    if (counter == 24) {
        counter = 0
    } else {
        counter += 1
    }
})
