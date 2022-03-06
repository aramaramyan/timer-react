import icon from "../../img/refresh-24.png"
import {useState} from "react";


export default function ResetIcon() {
  const [resetClass, setResetClass] = useState('')
  return (
    <img className={resetClass} src={icon} alt="reset icon" onClick={() => {

       setResetClass('rotate')

      const id = setTimeout(()=> {
        setResetClass('');
        clearTimeout(id);
      }, 1000);
    }}/>
  );
}