// 下载
const el = document.getElementById("save");
const canvas = document.getElementById("canvas");
el.addEventListener("click", function () {
  const canvas1 = document.getElementById("canvas");
  const a = document.createElement("a");
  a.href = canvas1.toDataURL("image/png");
  a.download = "下载图片";
  // 创建一个点击事件并对 a 标签进行触发
  const event = new MouseEvent("click");
  a.dispatchEvent(event);
});

// 全屏
const el2 = document.getElementById("fullScreen");
el2.addEventListener("click", function () {
  // fullscreenElement 属性提供了当前在 DOM（或者 shadow DOM）里被展示为全屏模式的 Element，
  // 如果这个值为 null，文档不处于全屏模式
  const fullScreen = document.fullscreenElement;
  if (!fullScreen) {
    canvas.requestFullscreen(); // 全屏
  } else {
    document.exitFullscreen(); // 退出
  }
});
