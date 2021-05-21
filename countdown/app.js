const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const fixed = document.querySelector(".fixedDate");
const countdownDate = document.querySelectorAll(".date span h1");

const fixedDate = new Date(2021, 4, 24, 15, 30, 0);
let fxYr = fixedDate.getFullYear();
let fxDay = weekdays[fixedDate.getDay()];
let fxDate = fixedDate.getDate();
let fxMonth = months[fixedDate.getMonth()];
let fxHr = fixedDate.getHours();
let fxMin = fixedDate.getMinutes();

function remainTime() {
  const today = new Date().getTime();
  const future = fixedDate.getTime();

  let interval = future - today;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHr = 60 * 60 * 1000;
  const oneMin = 60 * 1000;

  let intDay = Math.floor(interval / oneDay);
  let intHr = Math.floor((interval % oneDay) / oneHr);
  let intMin = Math.floor((interval % oneHr) / oneMin);
  let intSec = Math.floor((interval % oneMin) / 1000);

  fixed.textContent = `${fxDay} ${fxDate} ${fxMonth} ${fxYr}, ${fxHr}:${fxMin}`;

  const value = [intDay, intHr, intMin, intSec];

  function format(itm) {
    if (itm < 10) {
      return `0${itm}`;
    }
    return itm;
  }

  countdownDate.forEach(function (item, index) {
    item.innerHTML = format(value[index]);
  });

  const timeout = document.querySelector(".timeout");

  if (interval < 0) {
    clearInterval(remainTime);
    countdownDate.forEach(function (itm) {
      itm.innerHTML = `00`;
    });
    timeout.innerHTML = `<h2>Sorry! Promotion is now end</h2>`;
  }
}

let t = setInterval(remainTime, 1000);
