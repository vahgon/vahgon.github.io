import { MeshBasicMaterial, WebGLRenderer, Color, PerspectiveCamera, Scene, HemisphereLight, BoxGeometry, Mesh } from 'three';

const renderer = new WebGLRenderer({ antialias: true, alpha: true });
const container = document.getElementById("title-graphic");

const w = container.offsetWidth;
const h = container.offsetHeight;

const fov = 70;
const aspect = w / h;
const near = 0.1;
const far = 10;

renderer.setSize(w, h);

const camera = new PerspectiveCamera(fov, aspect, near, far);

renderer.setSize(w, h);

container.appendChild(renderer.domElement);

const hlight = new HemisphereLight(
  0xffffff,
  0xff000f,
  1
);



const darkModeMql = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');

var objColor;

if (darkModeMql && darkModeMql.matches) {
  objColor = new Color(0x839bf3);
} else {
  objColor = new Color(0x9d00ab);
}

const mesh = new Mesh(
  new BoxGeometry(1.1, 1.1, 1.1),
  new MeshBasicMaterial({
    color: objColor,
  })
);

const scene = new Scene();

scene.add(hlight);
scene.add(mesh);

camera.position.z = 2;

(window.matchMedia('(prefers-color-scheme: dark)') || window.matchMedia('(prefers-color-scheme: light)')).addEventListener('change', e => {
  const newScheme = e.matches ? "dark" : "light";

  if (newScheme == 'dark') {
    mesh.material.color.set(0x839bf3);
  } else {
    mesh.material.color.set(0x9d00ab);
  }
})

window.addEventListener('resize', () => {
  const newW = container.offsetWidth;
  const newH = container.offsetHeight;

  camera.aspect = newW / newH;
  camera.updateProjectionMatrix();
  renderer.setSize(newW, newH);
})

function animate(t = 0) {
  requestAnimationFrame(animate);
  mesh.rotation.y = t * 0.0001;
  mesh.rotation.x = t * 0.0002;
  renderer.render(scene, camera);
}

animate();
