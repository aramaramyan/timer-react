import "./TimeModes.css"

export default function TimeModes({state, handleState}) {
  let mode = state.mode;

  if(mode === "seconds") {
    mode = "minutes";
  } else if(mode === "minutes") {
    mode = "hours";
  } else if(mode === "hours") {
    mode = "seconds";
  }

  return (
    <div className="mode">
      <p onClick={() => {
        handleState({
          ...state,
          mode: mode
        });
      }}>{state.mode}</p>
    </div>
  );
}


