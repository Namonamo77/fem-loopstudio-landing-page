//Menu hamburger animation
const hamburger = document.querySelector(".hamburger")
const lineOne = document.querySelector(".line1")
const lineTwo = document.querySelector(".line2")
const lineThree = document.querySelector(".line3")

const menu = document.querySelector(".nav-menu")
const header = document.querySelector("header")

const linesArray = [lineOne, lineTwo, lineThree]

let tl = new TimelineMax({})
const toggleMenu = new TimelineMax({paused: true, reversed: true})

hamburger.addEventListener("mouseenter", ()=>{
    console.log("enter")
    if(hamburger.classList.contains("toggle")){
        return
    }

    tl.staggerTo(linesArray, .25, {transformOrigin:"100%", scaleX: 1.5, repeat:1, yoyo: true}, .1)
    
})

toggleMenu
    .to(lineTwo, .25, {scaleX: 0}, 0)
    .to(lineOne, .25, {rotation: 45, transformOrigin: "50% 50%", y:7 }, 0)
    .to(lineThree, .25, {rotation: -45, transformOrigin: "50% 50%", y:-7 }, 0)

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("toggle")
    toggleMenu.reversed() ? toggleMenu.play() : toggleMenu.reverse()
    menu.classList.toggle("nav-open")
    header.classList.toggle("fixed")
})


