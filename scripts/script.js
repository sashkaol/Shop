const burger = document.querySelector(".burger");
const closebtn = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
const menu = document.querySelector(".overlay .menu");


let isOpen = false;
burger.addEventListener("click", () => {
    isOpen = !isOpen;
    overlay.classList.toggle("open");
    menu.classList.toggle("open");
    if (isOpen) {
        document.body.style.overflow = "hidden";
        document.body.style.height = "100vh"
        document.body.parentNode.style.overflowY = "scroll"
    }
    if (!isOpen) {
        document.body.style.overflow = null;
        document.body.style.height = null
        document.body.parentNode.style.overflowY = null
    }
});
closebtn.addEventListener("click", () => {
    isOpen = !isOpen;
    overlay.classList.remove("open");
    menu.classList.remove("open");
    document.body.style.overflow = null;
});
overlay.addEventListener("click", () => {
    isOpen = !isOpen;
    overlay.classList.remove("open");
    menu.classList.remove("open");
    document.body.style.overflow = null;
});


const marker = document.querySelector(".marker");
const summary = document.querySelector(".filter__summary");

let isFill = false;
        summary.addEventListener("click", () => {
            isFill = !isFill;
            marker.classList.toggle("fill");
        });