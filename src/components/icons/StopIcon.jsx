import icon from "../../img/stop-24.png";

export default function StopIcon({handleState}) {
  return (
    <img src={icon} alt="stop icon" onClick={handleState}/>
  );
}