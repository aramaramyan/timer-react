import icon from "../../img/play-24.png"

export default function PlayIcon({handlePlay}) {
  return (
    <img src={icon} alt="play icon" onClick={handlePlay}/>
  );
}