(function() {
  /* 
  Is there a way that I can make the 'options' variable non-global? I use it three different spots so I'm not sure it's possible without re-declaring it in every function (that sounds like a bad practice).

  Can you 'return' a variable?

  One wonders...
   */

  const options = Array.from(document.querySelectorAll(".options__option"));
  const toggleClock = function() {
    options.forEach(function(option) {
      option.addEventListener("click", toggleFormat);
    });
  };

  const toggleFormat = function(event) {
    const target = event.currentTarget;
    options.forEach(function(option) {
      option.classList.remove("active");
    });
    target.classList.add("active");
    updateTime();
  };

  const updateTime = function() {
    const twelveHour = options[0];
    const time = document.querySelector(".time");
    const hours = time.querySelector(".time__hour");
    const minutes = time.querySelector(".time__minutes");
    const seconds = time.querySelector(".time__seconds");

    const currentTime = new Date();
    let currentHour = currentTime.getHours();

    if (twelveHour.classList.contains("active")) {
      if (currentHour >= 12) {
        currentHour = currentHour - 12;
      }
    }
    const currentMinutes = currentTime.getMinutes();
    const currentSeconds = currentTime.getSeconds();

    hours.textContent = currentHour;
    minutes.textContent = formatTime(currentMinutes);
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

  const updateDay = function() {
    const days = document.querySelectorAll(".days__day");
    const day = new Date();
    const currentDay = day.getDay();

    days.forEach(function(day) {
      day.classList.remove("active");
    });

    days[currentDay].classList.add("active");
  };

  const init = function() {
    updateDay();
    toggleClock();
    setInterval(updateTime, 1000);
  };
  window.onload = init;
})();
