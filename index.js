let themNumberEl = document.getElementById("themnumber")

let usNumberEl = document.getElementById("usnumber")

let ourScore = 0
let theirScore = 0


function homeOne() {
    ourScore += 1
    usnumber.innerText = ourScore
}

function homeTwo() {
    ourScore += 2
    usnumber.innerText = ourScore
}

function homeThree() {
    ourScore += 3
    usnumber.innerText = ourScore
}

function awayOne() {
    theirScore += 1
    themnumber.innerText = theirScore
}

function awayTwo() {
    theirScore += 2
    themnumber.innerText = theirScore
}

function awayThree() {
    theirScore += 3
    themnumber.innerText = theirScore
}