const bar = document.querySelectorAll(".fas");
const menu = document.querySelector(".menu");
const li = document.querySelectorAll(".menu > li");
bar.forEach(function (btn) {
  btn.addEventListener("click", function () {
    bar[0].classList.toggle("active");
    bar[1].classList.toggle("active");
    menu.classList.toggle("active");
  });
});

li.forEach(function (lis) {
  lis.addEventListener("click", function () {
    menu.classList.toggle("active");
  });
});
