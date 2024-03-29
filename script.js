const hamburger = document.querySelector(".lines_container");
const menu = document.querySelector("#slider");
const scroll = document.querySelector(".scroll_down");
const projectCont1 = document.querySelector("#pro_photo_container1");
const projectCont2 = document.querySelector("#pro_photo_container2");
const projectCont3 = document.querySelector("#pro_photo_container3");
const contact_label = document.querySelector(".contact_label");
const contact_style = window.getComputedStyle(contact_label);
const contact_width = contact_style.getPropertyValue("width");
const contact_padding = contact_style.getPropertyValue("padding-right");
let width = +contact_width.slice(0, -2);
let padding = +contact_padding.slice(0, -2);

// centering contact label based on computed width
// contact_label.style.left = `calc(50% - ${+width/2}px - ${padding}px`;

function open_resume() {
  window.open("./assets/Gundeep_Resume.pdf");
}

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("slide");
});

const tl = gsap.timeline();

tl.from("nav", {
  y: "-150px",
  duration: 1,
});
// tl.from("h1", {
//     translateX: "-800px",
// })

// tl.from("h2", {
//     translateX: "-700px",
// })

tl.from("button", {
  x: "-600px",
});
tl.to(scroll, {
  y: "-20px",
  repeat: 4,
  delay: 3,
  yoyo: true,
});
tl.to(scroll, {
  opacity: 0,
});
tl.from(projectCont1, {
  scrollTrigger: {
    trigger: "#pro_photo_container1",
    scroller: "body",
    end: "top 75%",
    scrub: 1.5,
  },

  x: 1100,
});
tl.from(projectCont2, {
  scrollTrigger: {
    trigger: "#pro_photo_container2",
    scroller: "body",
    end: "top 75%",
    scrub: 3,
  },
  x: -1100,
});
tl.from(projectCont3, {
  scrollTrigger: {
    trigger: "#pro_photo_container3",
    scroller: "body",
    end: "top 75%",
    scrub: 3,
  },
  x: 1100,
});
