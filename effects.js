let hello = "U r Gay"
console.log(hello)

const sound = new Audio()
sound.src = "/sounds/Nice.mp3"
const audio = new Audio()
audio.src = "/sounds/weed.mp3"
const devilmp3 = new Audio()
devilmp3.src = "/sounds/jumpscare.mp3"
let count = 0
const click = document.querySelector(".click")
function buttonclick() {
    count++
    click.innerHTML = 'clicked ' + count + ' times'
    switch (count) {
        case 69:
            sound.volume = 0.2
            sound.play()
            click.style.backgroundColor = "#35ff68"
            break
        case 70:
            click.style.backgroundColor = "rgb(37, 38, 39)"
            break
        case 100:
            click.style.backgroundColor = "#f1e67d"
            click.style.color = "rgb(37, 38, 39)"
            break
        case 200:
            click.style.backgroundColor = "#ee2e6e"
            break
        case 420:
            click.style.backgroundColor = "#0a5523"
            click.style.color = "#e6e6e6"
            audio.volume = 0.08
            audio.play()
            break
        case 421:
            click.style.backgroundColor = "#ee2e6e"
            click.style.color = "rgb(37, 38, 39)"
            break
        case 666:
            devilmp3.play()
            click.style.backgroundColor = "#ee0f0f"
            document.querySelector(".jeff").style.visibility = "visible"
            setTimeout(() => {
                document.querySelector(".jeff").style.visibility = "hidden"
            }, 150)
            break
        case 667:
            click.style.backgroundColor = "#ee2e6e"
            click.style.color = "rgb(37, 38, 39)"
            break
        case 1000:
            document.querySelector("body").innerHTML = "<div class='gay'>You expect too much</div>"
            break
    }
}

let count2 = 0
let event = document.querySelector(".introduction")
function event1() {
    count2++
    if (count2 === 5) {
        document.querySelector("html").style.filter = "invert(1)"
    }
    else if (count2 === 10) {
        document.querySelector("html").style.filter = "invert(0)"
        count2 = 0
    }
}

let count3 = 0
function st() {
    count3++
    console.log("yay")


    if (count3 === 1) {

        document.querySelector(".image").style.visibility = "visible"

    }
    if (count3 === 2) {

        document.querySelector(".image").style.visibility = "hidden"
        count3 = 0

    }
}