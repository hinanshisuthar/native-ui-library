const topBtn = document.querySelector("#go-top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

const goToTop = (e) => {
    console.log("here")
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
}

topBtn.addEventListener("click", goToTop);