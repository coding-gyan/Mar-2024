
let btn = document.querySelector(".btn");
let drawer = document.querySelector(".drawer");
let overlay = document.querySelector(".overlay");

function openDrawer() {
    drawer.classList.add("active");
    overlay.classList.add("active");
}

function closeDrawer() {
    drawer.classList.remove("active");
    overlay.classList.remove("active");
}

btn.addEventListener("click", openDrawer);
overlay.addEventListener("click", closeDrawer);