import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import gsap from "gsap";

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

// 添加物体
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterail = new THREE.MeshBasicMaterial();
const cube = new THREE.Mesh(cubeGeometry, cubeMaterail);
// cube.position.set(5, 0, 0);
cube.position.x = 0; // 设置物体位置
// cube.scale.set(2, 1, 1); // 设置缩放
cube.scale.x = 2; // 设置缩放
cube.rotation.set(Math.PI / 4, 0, 0); // 绕x轴旋转45度
scene.add(cube);

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

// function animate(time) {
//   let t = (time / 1000) % 5;
//   cube.position.x = t * 1;
//   if (cube.position.x > 5) {
//     cube.position.x = 0;
//   }
//   render.render(scene, camera);
//   // requestAnimationFrame 会传递一个时间参数 time
//   requestAnimationFrame(animate);
// }

// 设置时钟
// const clock = new THREE.Clock();
// function animate() {
//   let delta = clock.getDelta();
//   console.log(`两次之间的时间间隔是${delta * 1000}毫秒`);
//   // let t = delta % 5;
//   cube.position.x += delta * 1;
//   if (cube.position.x > 5) {
//     cube.position.x = 0;
//   }
//   render.render(scene, camera);
//   // requestAnimationFrame 会传递一个时间参数 time
//   requestAnimationFrame(animate);
// }
gsap.to(cube.position, {
  x: 5,
  duration: 5,
  ease: "power1.inOut",
  onComplete: () => {
    console.log("动画完成！！");
  },
  onStart: () => {
    console.log("动画开始！！");
  },
  repeat: 2,
});

function animate() {
  render.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();
