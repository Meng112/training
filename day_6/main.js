document.addEventListener("DOMContentLoaded", function () {
    let res = function () {
        // 使用 ajax 從 php 取得資料
        // 建立新的 ajax 請求
        let request = new XMLHttpRequest();
        request.onreadystatechange = function () { // 當 readyState 改變時 (readyState 表示 XMLHttpRequest 的狀態)
            if (this.readyState == 4 && this.status == 200) { // 當連線成功
                console.log("發送請求");
            };
        };
        // 指定請求的方法、路徑
        request.open("GET", "create_data.php", true);
        // 發送請求
        request.send();
    };

    setInterval(function() { // 每隔兩秒
        res(); // 建立 ajax 連線請求，呼叫 php 檔案
    }, 2000);

});