const topBtn = document.querySelector("#go-top");
const mainContent = document.querySelector(".main-content");

mainContent.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (mainContent.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

const goToTop = (e) => {
    mainContent.scrollTop = 0
}

topBtn.addEventListener("click", goToTop);

