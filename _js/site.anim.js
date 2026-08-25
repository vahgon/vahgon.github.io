import { WebGLRenderer, PerspectiveCamera, Color, Scene, HemisphereLight, BoxGeometry, MeshStandardMaterial, Mesh } from 'three';

const container = document.getElementById("title-graphic");
const w  = container.offsetWidth;
const h = container.offsetHeight;

const renderer = new WebGLRenderer({ antialias: true, alpha: true, premultipliedAlpha: true });
renderer.domElement.style.background = 'transparent';
renderer.setSize(w, h);
container.appendChild(renderer.domElement);

const fov = 75;
const aspect = w / h;
const near = 0.1;
const far = 10;

const camera = new PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;

const scene = new Scene();
scene.background = new Color( 0x000000 );

const hlight = new HemisphereLight(
  0xffffff,
  0xff000f,
  2
);

const geometry = new BoxGeometry( 1, 1, 1 );
const material = new MeshStandardMaterial( { color: 0x00ffff } );
const cube = new Mesh( geometry, material );

scene.add( cube );
scene.add(hlight);

window.addEventListener('resize', () => {
  const newW = container.offsetWidth;
  const newH = container.offsetHeight;

  camera.aspect = newW / newH;
  camera.updateProjectionMatrix();
  renderer.setSize(newW, newH);
})

function animate(t = 0) {
  requestAnimationFrame(animate);
  cube.rotation.y = t * 0.0001;
  cube.rotation.x = t * 0.0002;
  renderer.render(scene, camera);
}
animate();

