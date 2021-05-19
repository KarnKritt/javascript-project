const btns = document.querySelectorAll("button");
const modal = document.querySelector(".modal");

btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    modal.classList.toggle("active");
  });
});
