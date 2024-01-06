const hamburger = document.querySelector(".lines_container")
const menu = document.querySelector("#slider")
hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    menu.classList.toggle("slide");

})

const tl = gsap.timeline();

tl.from("nav", {
    translateY: "-150px",
    duration:1
})
tl.from("h1", {
    translateX: "-800px",
})

tl.from("h2", {
    translateX: "-700px",
})

tl.from("button", {
    translateX: "-600px",

})

