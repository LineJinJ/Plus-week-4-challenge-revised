let dateElement = document.querySelector("#date");
let currentTime = new Date();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();

dateElement.innerHTML = `Saturday ${hours}:${minutes}`;
