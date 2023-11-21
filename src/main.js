import {
  BoxBufferGeometry,
  Color,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three';

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