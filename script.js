const hamburger = document.querySelector(".lines_container")
const menu = document.querySelector("#slider")
hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    menu.classList.toggle("slide");

})
