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

  return `${days[dayIndex]} ${hours}:${minutes}`;
}

let dateElement = document.querySelector("#date");
let currentTime = new Date();

console.log(days[dayIndex]);

dateElement.innerHTML = `${days[dayIndex]} ${hours}:${minutes}`;
