const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 64);
});
const navLink = document.querySelectorAll(".link");

navLink.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const id = e.currentTarget.dataset.id;
    const element = document.getElementById(id);
    let position = element.offsetTop - 64;
    window.scrollTo(0, position);
    console.log(position);
  });
});
