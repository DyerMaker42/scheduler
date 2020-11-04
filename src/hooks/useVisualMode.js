import {useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  
  function transition(newMode, replace) {
    if (replace) {
      history.pop();
      
      setHistory([...history, newMode]);
    } else {
      setHistory([...history, newMode])
    }
    setMode(newMode);
  }
  function back() {
    //returns true if hist length >1
    // let histBoo = history.length > 1;
    // let histSub = history.length - 1;
    if ( history.length > 1) {
      history.pop();
      setMode(history[history.length - 1]);
    }
  }

  return { mode, transition, back };
}