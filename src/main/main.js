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

const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);

// 基础材质
const materail = new THREE.MeshBasicMaterial({
  color: "#ffff00",
});
// 根据几何体和材质创建物体
const mesh = new THREE.Mesh(cubeGeometry, materail);
scene.add(mesh);

// 坐标轴辅助器
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

// 渲染器
const render = new THREE.WebGLRenderer();
render.setSize(window.innerWidth, window.innerHeight);
render.domElement.id = "canvas"; // 给canvas添加id
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
