const openMenu = document.querySelector(".menu")
const hamIcon = document.querySelector("#index-ham")

hamIcon.addEventListener("click", menu);

    function menu() {
        // console.log("here");
        if(openMenu.style.display === "block") {
            openMenu.style.display = "none";
        } else {
        openMenu.style.display = "block";
        }
    }