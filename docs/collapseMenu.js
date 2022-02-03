function openNav() {
    document.getElementById("myNav").style.width = "50%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

const arrowDown = document.querySelector(".fa-angle-double-down");
const arrowUp = document.querySelector(".fa-angle-double-up");

function openNav2() {
    document.querySelector(".overlay-down").style.height = "100%";
    arrowDown.style.display = "none";
    arrowUp.style.display = "block";
}

function closeNav2() {
    document.querySelector(".overlay-down").style.height = "0%";
    arrowDown.style.display = "block";
    arrowUp.style.display = "none";
}