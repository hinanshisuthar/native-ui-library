const openMenu = document.querySelector(".menu")
const hamIcon = document.querySelector("#index-ham")
const homeMenuLinks = document.querySelectorAll(".home-menu-links");

hamIcon.addEventListener("click", menu);

function menu() {
    if (openMenu.style.display === "block") {
        openMenu.style.display = "none";
    } else {
        openMenu.style.display = "block";
    }
}

homeMenuLinks.forEach(link => {
    link.addEventListener("click", () => {
        openMenu.style.display = "none";
    })
});

