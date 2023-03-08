const timer = document.getElementById("timer");

const hourText = document.getElementById("hour");
const minuteText = document.getElementById("minute");
const secondText = document.getElementById("second");

const btnStart = document.getElementById("btn-start");
const btnStop = document.getElementById("btn-stop");
const btnRepeat = document.getElementById("btn-repeat");

let hour = 0;
let minute = 0;
let second = 0;

function startTimer() {
  interval = setInterval(() => {
    // secondText.innerText = ++second;
    singleDigitSecond = ++second;
    doubleDigitSecond = String(singleDigitSecond).padStart(2, "0");
    secondText.innerText = doubleDigitSecond;

    if (second === 60) {
      second = 0;
      secondText.innerText = "00";
      // minuteText.innerText = ++minute;
      signleDigitMinute = ++minute;
      doubleDigitminute = String(signleDigitMinute).padStart(2, "0");
      minuteText.innerText = doubleDigitminute;
    }

    if (minute == 60) {
      minute = 0;
      minuteText.innerText = "00";
      // hourText.innerText = ++hour;
      sigleDigitHour = ++hour;
      doubleDigitHour = String(sigleDigitHour).padStart(2, "0");
      hourText.innerText = doubleDigitHour;
    }
  }, 1000);

  btnStart.disabled = true;

  function stopTimer() {
    clearInterval(interval);
    btnStart.disabled = false;
  }
  btnStop.addEventListener("click", stopTimer);
}

function repeatTimer() {
  hour = 0;
  minute = 0;
  second = 0;
  hourText.innerText = "00";
  minuteText.innerText = "00";
  secondText.innerText = "00";
}

btnStart.addEventListener("click", startTimer);
btnRepeat.addEventListener("click", repeatTimer);
