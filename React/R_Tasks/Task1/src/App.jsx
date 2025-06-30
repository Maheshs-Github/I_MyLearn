import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [PopUp, setPopUp] = useState(false);
  return (
    <div>
      <div className="Main">
        {/* <h3>Hello There</h3> */}
        <button onClick={() => setPopUp(true)}>POP UP</button>
        {PopUp && (
          <div className="Container">
            <button className="B2" onClick={() => setPopUp(false)}>
              <span>&times;</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
