import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Progbar from "./components/Progbar";

function App() {
  const [percentage, setPercentage] = useState(35);
  return (
    <div className="App">
      <Progbar percentage={percentage} circleWidth="200" />
      <input
        type="range"
        min="1"
        max="100"
        step="1"
        value={percentage}
        onChange={(ev) => setPercentage(ev.target.value)}
        className="progressinput"
      />
    </div>
  );
}

export default App;
