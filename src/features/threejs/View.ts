import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

// import Shape from "./Shape";
import { ParticleEffects } from "./ParticleEffect/ParticleEffect";

export default class View {
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private controls: OrbitControls;

  constructor(canvasElem: HTMLCanvasElement) {
    this.renderer = new THREE.WebGLRenderer({
      canvas: canvasElem,
      antialias: true,
    });

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    this.camera.position.z = 25;

    const particleEffects = new ParticleEffects(10000);
    this.scene.add(particleEffects.particle);
    particleEffects.to(new THREE.SphereGeometry(20, 64, 64));
    // this.camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    // this.camera.position.z = 15;
    // this.scene = new THREE.Scene();
    // this.scene.background = new THREE.TextureLoader().load(
    //   "./textures/bgnd.png"
    // );
    // this.torus = new Shape(this.scene);

    // // Set initial sizes
    // this.onWindowResize(window.innerWidth, window.innerHeight);
  }

  public animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.renderer.render(this.scene, this.camera);
  }
}
