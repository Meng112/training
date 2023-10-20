let config;

// 建立 ajax 新連線
let request_c = new XMLHttpRequest();
request_c.onreadystatechange = function () { // 當連線的狀態改變時
  if (request_c.readyState == 4 && request_c.status == 200) { // 成功連線時
    console.log("連線成功");
    config = "changed";
  }
}
// 指定連線路徑與傳送方式
request_c.open("GET", "data.php", false);
// 發送請求
request_c.send();

console.log(config);