import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routing } from "./Routing";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routing />
      </div>
    </BrowserRouter>
  );
}

export default App;
