function timer() {
  let timeLeft =
    new Date(`Jan 1 ${new Date().getFullYear() + 1} 00:00:00`) - new Date();

  let days = Math.floor(timeLeft / 1000 / 60 / 60 / 24);
  let hours = Math.floor(timeLeft / 1000 / 60 / 60) % 24;
  let minutes = Math.floor(timeLeft / 1000 / 60) % 60;
  let seconds = Math.floor(timeLeft / 1000) % 60;

  days < 10
    ? (document.querySelector(".days").innerHTML = "0" + days)
    : (document.querySelector(".days").innerHTML = days);
  document.querySelector(".hours").innerHTML = ("0" + hours).slice(-2);
  document.querySelector(".minutes").innerHTML = ("0" + minutes).slice(-2);
  document.querySelector(".seconds").innerHTML = ("0" + seconds).slice(-2);

  days === 1
    ? (document.querySelector(".days-title").innerHTML = "day")
    : (document.querySelector(".days-title").innerHTML = "days");
  hours === 1
    ? (document.querySelector(".hours-title").innerHTML = "hour")
    : (document.querySelector(".hours-title").innerHTML = "hours");
  minutes === 1
    ? (document.querySelector(".minutes-title").innerHTML = "minute")
    : (document.querySelector(".minutes-title").innerHTML = "minutes");
  seconds === 1
    ? (document.querySelector(".seconds-title").innerHTML = "second")
    : (document.querySelector(".seconds-title").innerHTML = "seconds");

  if (timeLeft <= 0) {
    timeLeft =
      new Date(`Jan 1 ${new Date().getFullYear() + 1} 00:00:00`) - new Date();
  }

  setInterval(timer, 1000);
}

timer();

console.log(new Date().getFullYear());

