import { Matrix } from "@babylonjs/core";
import { zoomToModel } from "./AnimationHelper";
import { camera } from "./BabylonScene";

const registerUserInput = (scene) => {

    let drag = false
    scene.onPointerMove = (event) => {
        if (event.movementX > 2 || event.movementY > 2) {
            drag = true;
        }
    };
    scene.onPointerUp = async (event) => {
        if (drag) return
        else {
            //This mouse down/up event is a click event
            if (event.button === 0) {
                //prevent double trigger on double click
                let ray = scene.createPickingRay(
                    scene.pointerX,
                    scene.pointerY,
                    Matrix.Identity(),
                    camera
                );
                var hit = scene.pickWithRay(ray);

                if (hit.pickedMesh) {
                    zoomToModel(hit.pickedMesh);
                }
            }
        };
    }
    scene.onPointerDown = (event) => {
        drag = false;
    };
}

export {
    registerUserInput
}