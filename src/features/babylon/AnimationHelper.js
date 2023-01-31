import { Animation, TransformNode } from "@babylonjs/core"
import { camera } from "./BabylonScene";
import { ANIMATION_FORCUS_RADIUS } from "./const";

//zoom camera to the fornt face of the object
const zoomToModel = (target, angle, distance) => {
    var tempNode = new TransformNode('root');
    tempNode.position = camera.position;
    tempNode.lookAt(target.position);
    let targetRotation = tempNode.rotation;
    Animation.CreateAndStartAnimation(
        'rotate',
        camera,
        'rotation',
        30,
        30,
        camera.rotation,
        targetRotation,
        Animation.ANIMATIONLOOPMODE_RELATIVE,
        undefined,
        () => {

        }
    ); 
}


export {
    zoomToModel
}