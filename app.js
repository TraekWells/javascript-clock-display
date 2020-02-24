const time = document.querySelector(".time");
const hours = time.querySelector(".time__hour");
const minutes = time.querySelector(".time__minutes");
const seconds = time.querySelector(".time__seconds");

const updateTime = function() {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const currentMinutes = currentTime.getMinutes();
  const currentSeconds = currentTime.getSeconds();

  formatTime(currentSeconds);

  hours.textContent = currentHour;
  minutes.textContent = currentMinutes;
  seconds.textContent = currentSeconds;
  // console.log(currentHour, currentMinutes, currentSeconds);
};

const formatTime = function(time) {
  // time.toString(16).split("");
  console.log(time.toString(8).split(""));
  return time;
};

// setInterval(updateTime, 1000);
