const openToast = document.querySelector("#btn-demo-toast");
const dismissToast = document.querySelector("#cancel-toast");
const closeToast = document.querySelector("#demo-toast");

openToast.addEventListener("click", () => {
    closeToast.style.display = "flex";
});

dismissToast.addEventListener("click", () => {
    closeToast.style.display = "none";
});

