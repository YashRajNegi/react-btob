import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {/* count should not go negative */}
      <button
        onClick={() => {
          setCount(() => {
            if (count <= 0) return 0;
            return count - 1;
          });
        }}
      >
        Decrement
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
      {/* button to toggle light on or off*/}
      <button onClick={() => setIsOn(!isOn)}>{isOn ? "On" : "Off"}</button>
      {isOn && <p>Light is on</p>}
      {!isOn && <p>Light is off</p>}
    </div>
  );
}

export default App;
