"use strict";

var counterDown = new Date("dec 2022, 23:59:59").getTime();
var allCase = setInterval(function () {
  var dateNow = new Date().getTime();
  var diffTime = counterDown - dateNow;
  var days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  var hours = Math.floor(diffTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var minutes = Math.floor(diffTime % (1000 * 60 * 60) / (1000 * 60));
  var secondes = Math.floor(diffTime % (1000 * 60) / 1000);
  document.querySelector("#days").innerHTML = days;
  document.querySelector("#hours").innerHTML = hours;
  document.querySelector("#minutes").innerHTML = minutes;
  document.querySelector("#secondes").innerHTML = secondes;
}, 1000);