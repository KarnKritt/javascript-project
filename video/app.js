const vid = document.querySelector(".vid");
const btn = document.querySelector(".btn");
const swt = document.querySelector(".switch");

btn.addEventListener("click", function () {
  if (!swt.classList.contains("slide")) {
    swt.classList.add("slide");
    vid.pause();
  } else {
    swt.classList.remove("slide");
    vid.play();
  }
});
