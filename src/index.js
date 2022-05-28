let dateElement = document.querySelector("#date");
let currentTime = new Date();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let day = currentTime.getDay();

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

console.log(day);

dateElement.innerHTML = `Saturday ${hours}:${minutes}`;
