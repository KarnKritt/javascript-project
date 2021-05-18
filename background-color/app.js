const btn = document.querySelector("button");
const show = document.querySelector(".code");
const hexCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
randomNumb = () => {
  return Math.floor(Math.random() * hexCode.length);
};

btn.addEventListener("click", function () {
  let color = "#";
  for (i = 0; i < 6; i++) {
    color += hexCode[randomNumb()];
  }

  document.body.style.background = color;
  show.textContent = color;
});
