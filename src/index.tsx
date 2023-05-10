import * as THREE from "three";
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import View from "./features/threejs/View";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

//Three js code
const view = new View();
view.init();
view.animate();

//listern to store
let lastSection = 0;
store.subscribe(() => {
  const currentState = store.getState();

  if (currentState.layout.currentSection !== lastSection) {
    switch (currentState.layout.sections[currentState.layout.currentSection]) {
      case "home":
        view.progress = 0;
        view.particleEffects.to(
          new THREE.BoxGeometry(20, 20, 20, 30, 30, 30),
          new THREE.Color("#fff")
        );
        break;
      case "projects":
        view.progress = 0;
        view.particleEffects.to(
          new THREE.SphereGeometry(15, 32, 16),
          new THREE.Color("#fff")
        );
        break;

      case "contact":
        view.progress = 0;
        view.particleEffects.to(
          new THREE.CylinderGeometry(5, 5, 20, 32),
          new THREE.Color("#fff")
        );
        break;
      default:
        return;
    }
    lastSection = currentState.layout.currentSection;
  }
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
