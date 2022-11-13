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

// function timer() {
//   const nextYear = new Date(`Jan 1 ${new Date().getFullYear() + 1} 00:00:00`);
//   let timeLeft = nextYear - new Date();

//   console.log(nextYear);

//   let days = Math.floor(timeLeft / 1000 / 60 / 60 / 24);
//   let hours = Math.floor(timeLeft / 1000 / 60 / 60) % 24;
//   let minutes = Math.floor(timeLeft / 1000 / 60) % 60;
//   let seconds = Math.floor(timeLeft / 1000) % 60;

//   days < 10
//       ? (document.querySelector('.days').textContent = '0' + days)
//       : (document.querySelector('.days').textContent = days);
//   document.querySelector('.hours').textContent = ('0' + hours).slice(-2);
//   document.querySelector('.minutes').textContent = ('0' + minutes).slice(-2);
//   document.querySelector('.seconds').textContent = ('0' + seconds).slice(-2);

//   // оптимальнее будет использовать textContent вместо innerHTML
//   // чтобы на каждый тик не перекомпоновывать html разметку и заново не парсить DOM html
//   days === 1
//       ? (document.querySelector('.days-title').textContent = 'day')
//       : (document.querySelector('.days-title').textContent = 'days');
//   hours === 1
//       ? (document.querySelector('.hours-title').textContent = 'hour')
//       : (document.querySelector('.hours-title').textContent = 'hours');
//   minutes === 1
//       ? (document.querySelector('.minutes-title').textContent = 'minute')
//       : (document.querySelector('.minutes-title').textContent = 'minutes');
//   seconds === 1
//       ? (document.querySelector('.seconds-title').textContent = 'second')
//       : (document.querySelector('.seconds-title').textContent = 'seconds');

//   const timerId = setInterval(timer, 1000);

//   if (timeLeft <= 0) {
//     //  по достижению деадлайна (нового года) нам неободимо перезапустить таймер. начать новый отсчет
//     //  начать отсчет до новой даты
//     //  удалим старый таймер сперва.
//     clearInterval(timerId);
//     // и по хорошему нужно просто вызвать timer()
//     // твой подход с переопределением timeLeft тоже должен отработать так как у нас есть setInterval
//     // но это не самый лучший подход. если бы у нас не было интервала, то ты бы просто поменял
//     // timeLeft, но не days, hours, minutes, seconds. они бы не пересчитались автоматом сразу.
//     // они пересчитаются при запуске setInterval -ом функции timer
//     // просто для чистоты лучше перезапустить timer, вместо дублирования
//     // new Date(`Jan 1 ${new Date().getFullYear() + 1} 00:00:00`) - new Date();
//     timer();
//   }
// }

// timer();

// console.log(new Date().getFullYear());
