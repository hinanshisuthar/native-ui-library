const modalBtn = document.querySelector("#live-modal-btn");
const modalCon = document.querySelector("#live-modal-con");
const modalDismissBtn = document.querySelector(".modal-dismiss-btn");

const showModal = (e) => {
    modalCon.style.display = "grid";
}

const closeModal = (e) => {
    modalCon.style.display = "none"
}

modalBtn.addEventListener("click", showModal);
modalDismissBtn.addEventListener("click", closeModal);