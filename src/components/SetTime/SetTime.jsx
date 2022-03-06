import TimeModes from "./TimeModes/TimeModes";
import "./SetTime.css";

export default function SetTime({state, handleState}) {
  return (
    <section className="set-time">
      <form onSubmit={(evt) => {
        evt.preventDefault();
      }}>
        <label htmlFor="setTime" id="inputLabel">Set Time</label>
        <input type="number" id="setTime" onChange={(evt) => {
          handleState({
            ...state,
            time: Number(evt.target.value)
          });
        }}/>
      </form>
      <TimeModes state = {state} handleState = {handleState}/>
    </section>
  );
}