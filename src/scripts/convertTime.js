export default function convertTime(time, mode) {

  if(time < 0) {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  let hours;
  let minutes;
  let seconds;

  if(mode === "seconds") {
    hours  = Math.floor(time / 3600 );
    minutes = Math.floor((time / 60) % 60);
    seconds = Math.floor(time % 60);

    return {
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };

  } else if (mode === "minutes") {
    hours  = Math.floor((time / 60) % 60);
    minutes = Math.floor(time % 60);

    return {
      hours: hours,
      minutes: minutes,
      seconds: 0
    };
  } else if (mode === "hours") {

    return {
      hours: time,
      minutes: 0,
      seconds: 0
    };
  }

}


