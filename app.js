const boom = document.getElementById("boom")
const clap = document.getElementById("clap")
const hihat = document.getElementById("hihat")
const kick = document.getElementById("kick")
const openhat = document.getElementById("openhat")
const ride = document.getElementById("ride")
const snare = document.getElementById("snare")
const tink = document.getElementById("tink")
const tom = document.getElementById("tom")

document.addEventListener("keypress", (event) => {
    if (event.key == "a") {
        boom.play()
    }
    else if (event.key == "s") {
        clap.play()
    }
    else if (event.key == "d") {
        hihat.play()
    }
    else if (event.key == "f") {
        kick.play()
    }
    else if (event.key == "g") {
        openhat.play()
    }
    else if (event.key == "h") {
        ride.play()
    }
    else if (event.key == "j") {
        snare.play()
    }
    else if (event.key == "k") {
        tink.play()
    }
    else if (event.key == "l") {
        tom.play()
    }
})