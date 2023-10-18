// 創建 table 元素
let table = document.createElement('table');
// 創建 thead 元素
let thead = document.createElement('thead');
// 創建 tbody 元素
let tbody = document.createElement('tbody');
// 將 thead 跟 tbody 加到 table 中
table.appendChild(thead);
table.appendChild(tbody);
// 將 table 加到 body 中
document.body.appendChild(table);

// 創建 tr_header 標題欄
let tr_header = document.createElement('tr');
// 創建 th 標題
let th_time = document.createElement('th'); // 時間
let th_unit = document.createElement('th'); // 平均單位工時
let th_equivalent = document.createElement('th'); // 平均等效工時
let th_efficiency = document.createElement('th'); // 滾動式效率
// 更改 th 標題內文
th_time.innerText = "時間";
th_unit.innerText = "平均單位工時";
th_equivalent.innerText = "平均等效工時";
th_efficiency.innerText = "滾動式效率";
// 將 tr_header 標題欄 加入 thead 中
thead.appendChild(tr_header);
// 將 th 標題 加入 tr_header 標題欄
tr_header.appendChild(th_time); // 加入時間
tr_header.appendChild(th_unit); // 加入平均單位工時
tr_header.appendChild(th_equivalent); // 加入平均等效工時
tr_header.appendChild(th_efficiency); // 加入滾動式效率

// 建立內文欄
for (let i = 0; i < 20; i++) {
    // 創建 tr_content 內文欄
    let tr_content = document.createElement('tr');
    // 創建 td 資料
    let td_time = document.createElement('td'); // 時間
    let td_unit = document.createElement('td'); // 平均單位工時
    let td_equivalent = document.createElement('td'); // 平均等效工時
    let td_efficiency = document.createElement('td'); // 滾動式效率
    // 給予 td class屬性
    td_time.className = "time";
    td_unit.className = "unit";
    td_equivalent.className = "equ";
    td_efficiency.className = "eff";
    // 將 tr_content 內文欄加入 tbody
    tbody.appendChild(tr_content);
    // 將 td 資料加入 tr_content 中
    tr_content.appendChild(td_time); // 加入時間
    tr_content.appendChild(td_unit); // 加入平均單位工時
    tr_content.appendChild(td_equivalent); // 加入平均等效工時
    tr_content.appendChild(td_efficiency); // 加入滾動式效率
};

// 當 DOM 元件加載完後，不必等樣式與圖片等其他元素加載完畢觸發 javasciprt
document.addEventListener("DOMContentLoaded", function () {
    // 使用 ajax 從 php 取得資料
    // 建立新的 ajax 請求
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () { // 當 readyState 改變時 (readyState 表示 XMLHttpRequest 的狀態)
        if (this.readyState == 4 && this.status == 200) {
            // 取得從 get_data.php 得到的資料
            let get_data = request.responseText;
            // 將得到的資料轉換為 json 格式
            let data = JSON.parse(get_data);
            // 起始資料
            for (let i = 0; i < 20; i++) {
                // 抓取所有的 td
                let time = document.getElementsByClassName('time')[i]; // 時間
                let unit = document.getElementsByClassName('unit')[i]; // 平均單位工時
                let equ = document.getElementsByClassName('equ')[i]; // 平均等效時間
                let eff = document.getElementsByClassName('eff')[i]; // 滾動式效率
                // 從 php 取得的資料 (data) 賦予值
                // 根據 i (組數編號) 賦予各組的值
                time.innerText = data[i][0];
                unit.innerText = data[i][1];
                equ.innerText = data[i][2];
                eff.innerText = data[i][3];
            };

            // 增加計數值
            let count = 20;
            // 更新資料
            window.setInterval(function () { // 2 秒自動更新
                if (count > data.length) { // 大於資料的總數的話
                    count = 0; // 回到第一筆資料
                };
                for (let i = 0; i < 20; i++) {
                    // 抓取所有的 td
                    let time = document.getElementsByClassName('time')[i]; // 時間
                    let unit = document.getElementsByClassName('unit')[i]; // 平均單位工時
                    let equ = document.getElementsByClassName('equ')[i]; // 平均等效時間
                    let eff = document.getElementsByClassName('eff')[i]; // 滾動式效率
                    // 從 php 取得的資料 (data) 賦予值
                    // 根據 count (組數編號) 賦予各組的值
                    time.innerText = data[count][0];
                    unit.innerText = data[count][1];
                    equ.innerText = data[count][2];
                    eff.innerText = data[count][3];
                    count += 1; // 往下一組 (更正)
                };
                // conunt += 20; 錯誤: (更新後資料都相同)
            }, 2000);
        };
    };
    // 指定請求的方法、路徑
    request.open("GET", "get_data.php", true);
    // 發送請求
    request.send();
});

