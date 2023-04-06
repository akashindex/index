import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// import Shape from "./Shape";
import { ParticleEffects } from "./ParticleEffect/ParticleEffect";
import StatsHelper from "../../helper/StatsHelper";
const statsHelper = new StatsHelper();
export default class View {
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private controls: OrbitControls;
  particleEffects: ParticleEffects;
  progress: number;
  HEIGHT: number;
  WIDTH: number;

  constructor(wrapper: HTMLDivElement) {
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
    });
    this.HEIGHT = window.innerHeight;
    this.WIDTH = window.innerWidth;

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

    this.camera.position.z = 50;
    this.particleEffects = new ParticleEffects(10000);
    this.scene.add(this.particleEffects.particle);
    this.particleEffects.to(
      new THREE.BoxGeometry(20, 20, 20, 30, 30, 30),
      new THREE.Color("#00f")
    );
    this.progress = 0;
    wrapper.appendChild(this.renderer.domElement);
  }
  private handleWindowResize() {
    this.HEIGHT = window.innerHeight;
    this.WIDTH = window.innerWidth;
    console.log(this.renderer);
    console.log(this);
    console.log(this.WIDTH, this.HEIGHT);
    this.renderer?.setSize(this.WIDTH, this.HEIGHT);
    //this.composer?.reset();
    if (this.camera != null) {
      this.camera.aspect = this.WIDTH / this.HEIGHT;
      this.camera.updateProjectionMatrix();
    }
  }

  public animate() {
    requestAnimationFrame(this.animate.bind(this));
    statsHelper.stats.update();
    this.renderer.render(this.scene, this.camera);
    this.particleEffects.setProgress(this.progress);
    if (this.progress < 1) {
      this.progress += 0.01;
    }
  }

  init() {
    window.addEventListener(
      "resize",
      this.handleWindowResize.bind(this),
      false
    );
  }
  update() {}
}
