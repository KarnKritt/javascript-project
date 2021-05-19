const boxs = document.querySelectorAll(".box");

boxs.forEach(function (box) {
  const btns = box.querySelectorAll(".btn");
  btns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      btns[0].classList.toggle("active");
      btns[1].classList.toggle("active");
      btn.parentElement.parentElement.parentElement.classList.toggle("active");
    });
  });
});
