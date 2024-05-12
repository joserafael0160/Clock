"use strict";
const time = document.querySelector(".time");

const convert = n => n.toString().padStart(2,"0");

function getCurrentTime() {
  const date = new Date;
  const currentTime = convert(date.getHours()) + ":" + convert(date.getMinutes()) + ":" + convert(date.getSeconds());
  time.innerHTML = currentTime; 
  time.dateTime = currentTime;
}

setInterval(getCurrentTime,1000); 