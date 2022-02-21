const darkModeBtn = document.querySelectorAll(".dark-mode-button")

const applyDarkMode = (e) => {
    const element = document.body;
    element.classList.toggle("dark-mode");
}

darkModeBtn.forEach(btn => {
    btn.addEventListener("click", applyDarkMode);
})