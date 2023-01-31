import React from "react";
import {
  FreeCamera,
  Vector3,
  HemisphericLight,
  MeshBuilder,
} from "@babylonjs/core";
import { SceneComponent } from "./SceneComponent"; // uses above component in same directory
import { registerUserInput } from "./userInput";
// import SceneComponent from 'babylonjs-hook'; // if you install 'babylonjs-hook' NPM.
//import "./App.css";
export var camera = null;


const onSceneReady = (scene) => {
  // This creates and positions a free camera (non-mesh)
  camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);

  // This targets the camera to scene origin
  //camera.setTarget(Vector3.Zero());

  const canvas = scene.getEngine().getRenderingCanvas();

  // This attaches the camera to the canvas
  camera.attachControl(canvas, true);

  // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
  var light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

  // Default intensity is 1. Let's dim the light a small amount
  light.intensity = 0.7;

  // Our built-in 'box' shape.
  let box = MeshBuilder.CreateBox("box", { size: 2 }, scene);
  let box2 = MeshBuilder.CreateBox("box2", { size: 1 }, scene);
  let box3 = MeshBuilder.CreateBox("box3", { size: 0.5 }, scene);

  // Move the box upward 1/2 its height
  box.position.y = 1;
  box2.position.y = 0.5;
  box2.position.x = 2;
  box3.position.y = 0.25;
  box3.position.x = -2;

  // Our built-in 'ground' shape.
  MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, scene);
  registerUserInput(scene);
};

/**
 * Will run on every frame render.  We are spinning the box on y-axis.
 */
const onRender = (scene) => {
  // if (box !== undefined) {
  //   var deltaTimeInMillis = scene.getEngine().getDeltaTime();

  //   const rpm = 10;
  //   box.rotation.y += (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
  // }
};

export function BabylonScene() {
  return (
    <>
      <SceneComponent
        antialias
        onSceneReady={onSceneReady}
        onRender={onRender}
        id="my-canvas"
      />
    </>
  );
}
