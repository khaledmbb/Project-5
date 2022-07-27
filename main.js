let counterDown = new Date("dec 2022, 23:59:59").getTime();

let allCase = setInterval(function () {
  let dateNow = new Date().getTime();
  let diffTime = counterDown - dateNow;

  let days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
  let secondes = Math.floor((diffTime % (1000 * 60)) / 1000);

  document.querySelector("#days").innerHTML = days;
  document.querySelector("#hours").innerHTML = hours;
  document.querySelector("#minutes").innerHTML = minutes;
  document.querySelector("#secondes").innerHTML = secondes;
}, 1000);
