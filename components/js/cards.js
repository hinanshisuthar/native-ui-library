const closeCard = document.querySelector("#close-card");
const cardDismiss = document.querySelector("#card-dismiss");

const closeCardFunction = () => {
    cardDismiss.style.display = "none"
}

closeCard.addEventListener("click", closeCardFunction);