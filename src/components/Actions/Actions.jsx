import "./Actions.css";
import PlayIcon from "../icons/PlayIcon";
import StopIcon from "../icons/StopIcon";
import ResetIcon from "../icons/ResetIcon";

export default function Actions({isPlay, handleStop, handlePlay}) {

  return (
    <section className="actions">

      {
        isPlay
        ? <StopIcon handleState={handleStop}/>
        :  <PlayIcon handlePlay={handlePlay} />
      }
      <ResetIcon handleState={handleStop} />

    </section>
  );
}