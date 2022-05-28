let dateElement = document.querySelector("#date");
let currentTime = new Date();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let day = currentTime.getDay();

console.log(day);

dateElement.innerHTML = `Saturday ${hours}:${minutes}`;
