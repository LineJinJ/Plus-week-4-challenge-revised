let dateElement = document.querySelector("#date");
let currentTime = new Date();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();

console.log(hours, minutes);
dateElement.innerHTML = "Saturday 13:55 ";
