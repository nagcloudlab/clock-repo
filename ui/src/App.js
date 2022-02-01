import React, { useState } from "react";
import Clock from "./Clock";

function App() {
  const [timeZone, setTimezone] = useState("Asia/Kolkata")
  return (
    <div className="container">
      <hr />
      <h1>Clocks</h1>
      <hr />
      <div className="row">
        <div className="col-4">
          <button onClick={e => setTimezone("Asia/Kolkata")}>Asia/Kolkata</button>
        </div>
        <div className="col-8">
          <Clock timeZone={timeZone} />
        </div>
      </div>

    </div>
  );
}

export default App;
