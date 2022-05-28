function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = date.getMinutes();
  if (minutes < 10) {
    `0${minutes}`;
  }

  let dayIndex = date.getDay();

  //Arrays are [] and objects are {} that is the difference
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[dayIndex];

  return `${days[dayIndex]} ${hours}:${minutes}`;
}

function search(event) {
  event.preventDefault();
}

let dateElement = document.querySelector("#date");
let currentTime = new Date();
let cityElement = document.querySelector("#city");
let searchForm = document.querySelector("#search-form");

searchForm.addEventListener("submit", search);

cityElement.innerHTML = "Paris";

dateElement.innerHTML = formatDate(currentTime);
