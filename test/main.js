let start = document.getElementById("start");
let input = document.getElementById("input");
let time = input.value * 1000;
let sc;
let timer = function () {
  console.log("timer: " + time);
};
// 點擊事件
start.addEventListener("click", function () {
  time = input.value * 1000;
  clearInterval(sc);
  setInterval(timer, time);
});

// 在載入 html 後不必等待載入元件直接執行這裡的 javascript
document.addEventListener("DOMContentLoaded", function () {
  sc = setInterval(timer, time);
});