let dateElement = document.querySelector("#date");
let currentTime = new Date();
let hours = currentTime.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}

let minutes = currentTime.getMinutes();
if (minutes < 10) {
  `0${minutes}`;
}

let dayIndex = currentTime.getDay();

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

console.log(days[dayIndex]);

dateElement.innerHTML = `${days[dayIndex]} ${hours}:${minutes}`;
