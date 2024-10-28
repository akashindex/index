import React from 'react';
import "./stylesheets/main.scss";
import { Layout } from "./features/layout/Layout";
import { ThreeJsCanvas } from "./features/threejs/ThreeJsCanvas";

function App() {
  return (
    <div className="App">
      <Layout />
      {/* <ThreeJsCanvas /> */}
    </div>
  );
}

export default App;
