const bar = document.querySelectorAll(".fas");
const slidebar = document.querySelector(".slidebar");
const lis = document.querySelectorAll("li");

lis.forEach(function (li) {
  li.addEventListener("click", function () {
    bar[0].classList.toggle("active");
    bar[1].classList.toggle("active");
    slidebar.classList.toggle("active");
  });
});

bar.forEach(function (btn) {
  btn.addEventListener("click", function () {
    bar[0].classList.toggle("active");
    bar[1].classList.toggle("active");
    slidebar.classList.toggle("active");
  });
});
