import {useEffect, useState} from "react";
import Time from "./components/Time/Time";
import SetTime from "./components/SetTime/SetTime";
import Actions from "./components/Actions/Actions";
import Footer from "./components/Footer/Footer";
import './App.css';

function App() {

  const [ intervalId, setIntervalId ] = useState(0)
  const [state, setState] = useState({
    time: 0,
    play: false,
    mode: "seconds"
  });

  const handleState = value => {
    setState(value);
  };

  const handlePlay = () => {
    setState(({play, ...prev}) => {
      return {...prev, play: true };
    });

    const id = setInterval(()=> {
      setState((
        { time, ...prev }
      ) => ({ ...prev, time: time - 1}));
    }, 1000)

    setIntervalId(id);
  };

  const handleStop = () => {
    setState((
      { play, ...prev }
    ) => ({ ...prev, play: false}));

    clearInterval(intervalId);
  };

  useEffect(() => {
    if(state.time === 0) {
      handleStop();
    }
  },  [ state.time]);

  return (
    <>
      <Time state={state} handleStop={handleStop} />
      <SetTime state={state} handleState={handleState} />
      <Actions isPlay={state.play} handleStop={handleStop} handlePlay={handlePlay} />
      <Footer />
    </>
  );
}

export default App;
