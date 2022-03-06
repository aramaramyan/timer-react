import convertTime from "../../scripts/convertTime";
import "./Time.css";

export default function Time({state, handleStop}) {

  let timestamp;

  if(state.mode === "seconds") {
    timestamp = convertTime(state.time, state.mode);
  } else if(state.mode === "minutes") {
    timestamp = convertTime(state.time, state.mode);
  } else if(state.mode === "hours") {
    timestamp = convertTime(state.time, state.mode);
  }

  console.log(timestamp)

  return (
    <section className="time">
      <p className="hour">{timestamp.hours < 10? `0${timestamp.hours}` : timestamp.hours}</p>
      <p className="colon">:</p>
      <p className="min">{timestamp.minutes < 10? `0${timestamp.minutes}` : timestamp.minutes}</p>
      <p className="colon">:</p>
      <p className="sec">{timestamp.seconds < 10? `0${timestamp.seconds}` : timestamp.seconds}</p>
    </section>
  );
}