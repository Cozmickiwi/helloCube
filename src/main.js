import {
  BoxGeometry,
  Color,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from '../node_modules/three/build/three.module.js';

// Scene container
const container = document.getElementById('scene-container');
// Create scene
const scene = new Scene();
// Scene background color
scene.background = new Color('skyblue');
// Create camera
const fov = 35;
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1;
const far = 100;

const camera = new PerspectiveCamera(fov, aspect, near, far);
camera.position.set (0, 0, 10);

// Create geometry
const geometry = new BoxGeometry(2, 2, 2)

// Create default (white) Basic material
const material = new MeshBasicMaterial();

// Create mesh
const cube = new Mesh(geometry, material);

// Add mesh to scene
scene.add(cube);

// Create renderer
const renderer = new WebGLRenderer();
renderer.setSize(container.clientWidth, container.clientHeight);

// Set pixel ratio
renderer.setPixelRatio(window.devicePixelRatio);

// Add canvas to page
container.append(renderer.domElement);

// Render scene
renderer.render(scene, camera);