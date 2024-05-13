"use strict";
import { convert } from "./functions.js";

const time = document.querySelector(".time");

function getCurrentTime() {
  const date = new Date;
  const currentTime = convert(date.getHours()) + ":" + convert(date.getMinutes()) + ":" + convert(date.getSeconds());
  time.innerHTML = currentTime; 
  time.dateTime = currentTime;
}

setInterval(getCurrentTime,1000); 