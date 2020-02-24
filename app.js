const time = document.querySelector(".time");
const hours = time.querySelector(".time__hour");
const minutes = time.querySelector(".time__minutes");
const seconds = time.querySelector(".time__seconds");

const updateTime = function() {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const currentMinutes = currentTime.getMinutes();
  const currentSeconds = currentTime.getSeconds();

  hours.textContent = currentHour;
  minutes.textContent = currentMinutes;
  seconds.textContent = formatTime(currentSeconds);
};

const formatTime = function(time) {
  const splitTime = time.toString().split("");

  if (splitTime.length === 1) {
    splitTime.unshift("0");
  }

  const joinTime = splitTime.join("");
  return joinTime;
};

setInterval(updateTime, 1000);
