const tabBox = document.querySelector(".tabBox");
const text = document.querySelectorAll(".text");
const btns = document.querySelectorAll(".btn");
tabBox.addEventListener("click", function (e) {
  let id = e.target.dataset.id;
  if (id) {
    const acText = document.getElementById(id);
    text.forEach(function (txt) {
      txt.classList.remove("active");
    });
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    acText.classList.add("active");
    e.target.classList.add("active");
  }
});
