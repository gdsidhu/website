const hamburger = document.querySelector(".lines_container")
const menu = document.querySelector("#slider")
const scroll = document.querySelector(".scroll_down")
const projectCont1 = document.querySelector("#pro_photo_container1")
const projectCont2 = document.querySelector("#pro_photo_container2")
const projectCont3 = document.querySelector("#pro_photo_container3")


hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    menu.classList.toggle("slide");

})

const tl = gsap.timeline();

tl.from("nav", {
    translateY: "-150px",
    duration:1
})
// tl.from("h1", {
//     translateX: "-800px",
// })

// tl.from("h2", {
//     translateX: "-700px",
// })

tl.from("button", {
    translateX: "-600px",

})
tl.to(scroll, {
    translateY:"-20px",
    repeat:4,
    delay:3,
    yoyo:true,
})
tl.to(scroll, {
opacity:0,
})
tl.from(projectCont1,{
    scrollTrigger:{
        trigger:"#pro_photo_container1",
        scroller: "body",
        end : "top 75%",
        scrub:1.5,

    },
    
    translateX: 1100,


})
tl.from(projectCont2,{
    scrollTrigger:{
        trigger:"#pro_photo_container2",
        scroller: "body",
        end : "top 75%",
        scrub:1.5,

    },
    translateX: -1100,

})
tl.from(projectCont3,{
    scrollTrigger:{
        trigger:"#pro_photo_container3",
        scroller: "body",
        end : "top 75%",
        scrub:1.5,

    },
    translateX: 1100,

})


