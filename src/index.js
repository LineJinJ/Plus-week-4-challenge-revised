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
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
}

//Feature 1#
let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

//Feature #2
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

//Feature #3 Bonus point

let temperatureElement = document.querySelector("#temperature");
let temperature = temperatureElement.innerHTML;
