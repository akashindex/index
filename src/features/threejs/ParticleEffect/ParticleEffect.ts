import * as THREE from "three";
import vertexShader from "./vt.glsl";
import fragmentShader from "./fm.glsl";

export class ParticleEffects {
  pointNumber: number;
  bufferGeometry: THREE.BufferGeometry;
  particle: THREE.Points<THREE.BufferGeometry, THREE.ShaderMaterial>;
  position: Float32Array;
  material: THREE.ShaderMaterial;
  toPosition: Float32Array;
  speed: Float32Array;
  toColor: Float32Array;
  color: Float32Array;
  size: Float32Array;

  constructor(pointNumber: number) {
    this.pointNumber = pointNumber;

    this.bufferGeometry = new THREE.BufferGeometry();
    this.position = new Float32Array(this.pointNumber * 3);
    this.bufferGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(this.position, 3)
    );

    this.toPosition = new Float32Array(this.pointNumber * 3);
    this.bufferGeometry.setAttribute(
      "toPosition",
      new THREE.BufferAttribute(this.toPosition, 3)
    );

    this.speed = new Float32Array(this.pointNumber);
    this.bufferGeometry.setAttribute(
      "speed",
      new THREE.BufferAttribute(this.speed, 1)
    );

    this.size = new Float32Array(this.pointNumber);
    this.bufferGeometry.setAttribute(
      "size",
      new THREE.BufferAttribute(this.size, 3)
    );

    this.color = new Float32Array(this.pointNumber * 3);
    this.bufferGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(this.color, 3)
    );

    this.toColor = new Float32Array(this.pointNumber * 3);
    this.bufferGeometry.setAttribute(
      "toColor",
      new THREE.BufferAttribute(this.toColor, 3)
    );

    this.material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        progress: { value: 1 },
      },
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthTest: false,
    });

    this.particle = new THREE.Points(this.bufferGeometry, this.material);

    this.init();
  }

  setProgress(progress: number) {
    this.material.uniforms.progress.value = progress;
  }

  init() {
    const { random } = Math;
    for (let i = 0; i < this.pointNumber; i++) {
      const i3 = i * 3;
      this.toPosition[i3] = random() * 200 - 100;
      this.toPosition[i3 + 1] = random() * 200 - 100;
      this.toPosition[i3 + 2] = random() * 200 - 100;

      this.speed[i] = 0.5 + random() * 0.5;
      this.size[i] = random();
    }
    this.bufferGeometry.attributes.toPosition.needsUpdate = true;
    this.bufferGeometry.attributes.speed.needsUpdate = true;
    this.bufferGeometry.attributes.size.needsUpdate = true;
  }

  to(geometry: THREE.BufferGeometry, color: THREE.Color) {
    const { array, count } = geometry.attributes
      .position as THREE.BufferAttribute;
    let targetIndex = 0;
    const { random } = Math;

    for (let i = 0; i < this.pointNumber; i++) {
      const i3 = i * 3;
      targetIndex %= count;
      const targetIndex3 = targetIndex * 3;

      this.position[i3] = this.toPosition[i3];
      this.position[i3 + 1] = this.toPosition[i3 + 1];
      this.position[i3 + 2] = this.toPosition[i3 + 2];

      this.toPosition[i3] = array[targetIndex3];
      this.toPosition[i3 + 1] = array[targetIndex3 + 1];
      this.toPosition[i3 + 2] = array[targetIndex3 + 2];

      this.color[i3] = this.toColor[i3];
      this.color[i3 + 1] = this.toColor[i3 + 1];
      this.color[i3 + 2] = this.toColor[i3 + 2];

      this.toColor[i3] = color.r;
      this.toColor[i3 + 1] = color.g;
      this.toColor[i3 + 2] = color.b;

      this.speed[i] = 0.5 + random() * 0.5;

      targetIndex++;
    }
    this.bufferGeometry.attributes.position.needsUpdate = true;
    this.bufferGeometry.attributes.toPosition.needsUpdate = true;
    this.bufferGeometry.attributes.color.needsUpdate = true;
    this.bufferGeometry.attributes.toColor.needsUpdate = true;
    this.bufferGeometry.attributes.speed.needsUpdate = true;
  }
}
