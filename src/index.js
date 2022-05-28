let dateElement = document.querySelector("#date");
let currentTime = new Date();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
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
