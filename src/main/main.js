import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// 场景
const scene = new THREE.Scene();

// 相机
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight
);

// 设置相机位置
camera.position.set(0, 0, 10);
scene.add(camera);

for (let i = 0; i < 50; i++) {
  // 添加物体
  const geometry = new THREE.BufferGeometry();
  // 9 开辟缓冲区大小
  const positionArray = new Float32Array(9);
  // 三角形三个顶点 每个顶点三个点
  for (let j = 0; j < 9; j++) {
    // -5, 5
    positionArray[j] = Math.random() * 10 - 5;
  }
  // 设置属性position 3个点为一组
  geometry.setAttribute(
    "position",
    new THREE.BufferAttribute(positionArray, 3)
  );
  let color = new THREE.Color(Math.random(), Math.random(), Math.random());
  const materail = new THREE.MeshBasicMaterial({
    color: color,
    transparent: true,
    opacity: 0.5,
  });
  // 根据几何体和材质创建物体
  const mesh = new THREE.Mesh(geometry, materail);
  scene.add(mesh);
}

// 坐标轴辅助器
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

// 渲染器
const render = new THREE.WebGLRenderer();
render.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(render.domElement);
render.render(scene, camera);

// 控制器
const controls = new OrbitControls(camera, render.domElement);
// 设置控制器阻尼，让控制器更具有真实效果
controls.enableDamping = true;

function animate() {
  render.render(scene, camera);
  controls.update();
  requestAnimationFrame(animate);
}

animate();

// 监听画面变化
window.addEventListener("resize", function () {
  // 更新摄像头
  camera.aspect = window.innerWidth / window.innerHeight;
  // 更新投影矩阵
  camera.updateProjectionMatrix();

  // 更新渲染器
  render.setSize(window.innerWidth, window.innerHeight);

  // 设置渲染器像素比   电脑上的iphone是2
  render.setPixelRatio(window.devicePixelRatio);
});
