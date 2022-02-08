const openToast = document.querySelector("#btn-demo-toast");
const dismissToast = document.querySelector("#cancel-toast");
const closeToast = document.querySelector("#demo-toast");

openToast.addEventListener("click", () => {
    console.log("here");
    closeToast.style.display = "flex";
});

dismissToast.addEventListener("click", () => {
    console.log("here2");
    closeToast.style.display = "none";
});

