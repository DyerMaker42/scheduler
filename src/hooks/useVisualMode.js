import {useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  function transition(newMode, replace=false) {
    if (replace) {
      history.pop();
      setMode(newMode);
      setHistory([...history, newMode]);
    } else {
      setMode(newMode);
      setHistory([...history, newMode])
    }
  }
  function back() {
    //returns true if hist length >1
    let histBoo = history.length > 1;
    let histSub = history.length - 1;
    if (histBoo) {
      history.pop();
      setMode(history[histSub]);
    }
  }

  return { mode, transition, back };
}