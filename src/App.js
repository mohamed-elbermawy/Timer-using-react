import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import Seconds from "./Components/Second/SecondsComponent";
import Button from "./Components/button/Button";

function App() {
  const [minutes, setminutes] = useState(0);
  const handleIncrease = () => {
    if (minutes < 10) {
      setminutes(minutes + 1);
    }
  };
  const handleDecrease = () => {
    if (minutes > 0) {
      setminutes(minutes - 1);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="row">
          <div className="col-3">
            <Button text="-" handleonClick={handleDecrease} />
          </div>
          <div className="col-6">
            <span>{minutes} minutes</span>
          </div>
          <div className="col-3">
            <Button text="+" handleonClick={handleIncrease} />
          </div>
        </div>

        <div style={{marginTop:"300px"}}>
          {minutes > 0 ? (
            <Seconds minutes={minutes} setminutes={setminutes} />
          ) : null}
        </div>
      </header>
    </div>
  );
}

export default App;
