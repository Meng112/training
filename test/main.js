// 初始化資料
let datas;
// 建立 ajax 新連線
let request = new XMLHttpRequest();
request.onreadystatechange = function () { // 當連線的狀態改變時
  if (request.readyState == 4 && request.status == 200) {
    let json_data = request.responseText; // 取得資料
    // 將 json 字串解析為 javascript 物件
    datas = JSON.parse(json_data);
  }
}
// 指定連線路徑與傳送方式，關閉同步: false (程式會等完連線取得完回應才會進行下一步)
request.open("GET", "data.php", false);
// 發送請求
request.send();

// 使用者名子
let user_name = datas["user_information"]["user_name"];
// 使用者電話
let phone_number = datas["user_information"]["phone_number"];
// 使用者地址
let address = datas["user_address"]["user_address"];
// 結果顯示
let result = user_name + " 的電話號碼是: " + phone_number + "\n" + "地址是: " + address;
console.log(result);