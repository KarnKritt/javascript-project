const show = document.querySelector("h3");
const btns = document.querySelectorAll(".btn");
let num = 0;

btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (btn.classList.contains("inc")) {
      num++;
    } else if (btn.classList.contains("dec")) {
      num--;
    } else {
      num = 0;
    }
    show.textContent = num;

    if (num > 0) {
      show.style.color = "green";
    } else if (num < 0) {
      show.style.color = "red";
    } else {
      show.style.color = "black";
    }
  });
});
