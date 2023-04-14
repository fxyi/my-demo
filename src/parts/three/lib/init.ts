import { Scene, WebGLRenderer, Light, PerspectiveCamera, AxesHelper, AmbientLight, PointLight, Color } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export class ThreeEnv {
  public _scene!: Scene;
  public _renderer!: WebGLRenderer;
  private _canvas!: HTMLCanvasElement;
  public _camera!: PerspectiveCamera;
  // private _orbitControls!: OrbitControls;
  private _lightList!: Light[];

  constructor() {
    this._scene = ThreeEnv.initScene();
    this._renderer = ThreeEnv.initRenderer();
    this._canvas = this._renderer.domElement;
    document.body.appendChild(this._canvas);
    this._camera = ThreeEnv.initCamera();
    this._scene.add(ThreeEnv.initAxesHelper());
    this._lightList = ThreeEnv.initLight();
    this._lightList.forEach(light => this._scene.add(light));
    this.initOrbitControls();
    // this._orbitControls = this.initOrbitControls();
    this.initResize();

    // this.render();
  }

  static initScene() {
    const scene = new Scene();
    scene.background = new Color(0xdddddd);
    // scene.background = new TextureLoader().load("/img/bg.jpg");
    return scene;
  }

  static initRenderer() {
    const renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    return renderer;
  }

  static initCamera() {
    const camera = new PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(50, 50, 50);
    return camera;
  }

  static initAxesHelper() {
    return new AxesHelper(200);
  }

  static initLight() {
    const ambientLight = new AmbientLight(0xffffff, 0.3);
    const pointLight = new PointLight(0xffffff, 1);
    pointLight.position.set(200, 150, 150);
    return [ambientLight, pointLight];
  }

  private initOrbitControls() {
    if (!this._camera || !this._canvas) {
      throw new Error("Please init camera and canvas first!");
    }
    const orbitControls = new OrbitControls(this._camera, this._canvas);
    orbitControls.maxDistance = 400; // control缩放
    orbitControls.minDistance = 50;
    orbitControls.maxPolarAngle = Math.PI / 2; // 垂直旋转角度
    orbitControls.minPolarAngle = 0;
    // orbitControls.autoRotateSpeed = false; // 不自动旋转
    orbitControls.rotateSpeed = 0.4; // 旋转速度
    orbitControls.enableDamping = false; // 是否启用惯性
    orbitControls.enableZoom = true; // 是否允许放大
    orbitControls.enablePan = false; // 启用或禁用摄像机平移
    orbitControls.minAzimuthAngle = 0; // 水平旋转角度
    orbitControls.maxAzimuthAngle = Math.PI / 2;
    return orbitControls;
  }

  private initResize() {
    if (!this._camera || !this._renderer) {
      throw new Error("Please init camera and renderer first!");
    }
    window.addEventListener(
      "resize",
      () => {
        this._camera.aspect = window.innerWidth / window.innerHeight;
        this._camera.updateProjectionMatrix();
        this._renderer.setSize(window.innerWidth, window.innerHeight);
      },
      false
    );
  }

  public render(callback: Function) {
    if (!this._camera || !this._renderer || !this._scene) {
      throw new Error("Please init camera, renderer, scene first!");
    }
    const loop = callback(this);
    this._renderer.setAnimationLoop(loop);
    // this._renderer.setAnimationLoop(loop.bind(this))
  }

  getScene() {
    return this._scene;
  }
}
