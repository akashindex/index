import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { ThreeJsCanvas } from "./features/threejs/ThreeJsCanvas";

function App() {
  return (
    <div className="App">
      <ThreeJsCanvas />
    </div>
  );
}

export default App;
