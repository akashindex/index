import * as THREE from "three";
import vertexShader from "./vt.glsl";
import fragmentShader from "./fm.glsl";

export class ParticleEffects {
  pointNumber: number;
  bufferGeometry: THREE.BufferGeometry;
  particle: THREE.Points<THREE.BufferGeometry, THREE.ShaderMaterial>;
  position: Float32Array;
  material: THREE.ShaderMaterial;

  constructor(pointNumber: number) {
    this.pointNumber = pointNumber;

    this.bufferGeometry = new THREE.BufferGeometry();
    this.position = new Float32Array(this.pointNumber * 3);
    this.bufferGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(this.position, 3)
    );

    this.material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
    });

    this.particle = new THREE.Points(this.bufferGeometry, this.material);

    this.init();
  }

  init() {
    const { random } = Math;
    for (let i = 0; i < this.pointNumber; i++) {
      const i3 = i * 3;
      this.position[i3] = random() * 10 - 5;
      this.position[i3 + 1] = random() * 10 - 5;
      this.position[i3 + 2] = random() * 10 - 5;
    }
    this.bufferGeometry.attributes.position.needsUpdate = true;
  }

  to(geometry: THREE.BufferGeometry) {
    const { array, count } = geometry.attributes
      .position as THREE.BufferAttribute;
    let targetIndex = 0;
    const target = new Float32Array(count * 3);

    for (let i = 0; i < this.pointNumber; i++) {
      const i3 = i * 3;
      targetIndex %= count;
      const targetIndex3 = targetIndex * 3;
      this.position[i3] = array[targetIndex3];
      this.position[i3 + 1] = array[targetIndex3 + 1];
      this.position[i3 + 2] = array[targetIndex3 + 2];
      targetIndex++;
    }
    this.bufferGeometry.attributes.position.needsUpdate = true;
  }
}
