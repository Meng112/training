// 創建包裹 canvas 的 div
let div = document.createElement('div');
// 創建 canvas
let ctx = document.createElement('canvas');
// 將 canvas 加入 div
div.appendChild(ctx);
// 將 div 加入到 body
document.body.appendChild(div);
// 計時器
let timer;
// 測試用
let button_container = document.createElement("div");
// 新增開始按鈕
let start = document.createElement("button");
start.innerText = "開始";
// 新增暫停按鈕
let sto = document.createElement("button");
sto.innerText = "暫停";
sto.style.display = "none";
// 增加到 div 中
button_container.appendChild(start);
button_container.appendChild(sto);
// 增加到 body 中
document.body.appendChild(button_container);


// 呼叫 create_data.php 產生資料給 SQL
let call_create_data = function () {
    // 建立 ajax 新連線
    let request_c = new XMLHttpRequest();
    request_c.onreadystatechange = function () { // 當連線的狀態改變時
        if (request_c.readyState == 4 && request_c.status == 200) { // 成功連線時
        }
    }
    // 指定連線路徑與傳送方式
    request_c.open("GET", "create_data.php", true);
    // 發送請求
    request_c.send();
};
// 呼叫 get_data.php 取得從 SQL 拿來的資料
let call_get_data = function () {
    // 建立 ajax 新連線
    let request_g = new XMLHttpRequest();
    request_g.onreadystatechange = function () { // 當連線的狀態改變時
        if (request_g.readyState == 4 && request_g.status == 200) {
            let json_data = request_g.responseText; // 取得資料
            // 將 json 字串解析為 javascript 格式
            let data = JSON.parse(json_data);
            // console.log(data);
        }
    }
    // 指定連線路徑與傳送方式
    request_g.open("GET", "get_data.php", true);
    // 發送請求
    request_g.send();
};
// 計算 x 軸標題與各資料區間的數量
let labels_and_counts = function (datas) {
    // 建立 x 軸標題
    // 取得 x 軸的最大值
    let max_value = Math.max(...datas);
    // 取得 x 軸的最小值
    let min_value = Math.min(...datas);
    // 取得 x 軸的間距 ( 10 等分)
    let step = (max_value - min_value) / 10;
    // 計步器
    let count = 1;
    // x 軸標題的儲存空間
    let x_label = [];
    // 資料區間資料量計算儲存空間
    let datas_count = [];
    for (let i = 0; i < 10; i++) {
        // x 軸標題的 (x, y) 的 x 與 y
        // 將欄位範圍都取到小數第 1 位
        let x = (min_value + i * step).toFixed(1);
        let y = (min_value + step * (count++)).toFixed(1);
        let xy = x + "~" + y;
        // 增加到 x 軸標題儲存空間
        x_label.push(xy);
        // 資料區間資料量計算值
        let data_count = 0;
        // 資料區間計數
        for (let j = 0; j < datas.length; j++) {
            if (Number(datas[j]) <= y && Number(datas[j]) > x) { // 逐一比對 datas 的資料
                data_count += 1; // 有在範圍內就 ++
            }
        };

        // 將計算值結果存進來
        let result = (data_count / datas.length * 100).toFixed(2);
        datas_count.push(result);
    };
    return { "x_label": x_label, "datas_count": datas_count, };
};

// 圖表配置
let config = {
    type: 'bar', // 圖表類型
    data: { // 資料
        labels: x_label, // x 軸標籤資料
        datasets: [{ // 資料集設置
            label: '眾數', // 圖表標題
            data: datas_count, // 資料
            backgroundColor: 'rgb(254 99 131)', // 資料顏色
            borderWidth: 1, // 資料外框線
        }]
    },
    options: {
        plugins: { // 插件
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return context.formattedValue + "%";
                    },
                }
            }
        },
        scales: { // 軸配置
            x: { // x 軸
                grid: { // 網格線
                    display: true, // 顯示
                }
            },
            y: { // y 軸
                beginAtZero: true, // 資料從 0 開始
                suggestedMax: 100, // 最大值為 100
                grid: { // 網格線
                    display: true, // 顯示
                },
                ticks: { // y 軸標籤設置
                    stepSize: 10, // 間距設定為 10
                    callback: function (value) { // 自訂標籤設置
                        return value + "%";
                    },
                },
            },
        }

    }
}

// 創建圖表
let myCh = new Chart(ctx, config);

// // 點集開始按鈕
// start.addEventListener("click", function () {
//     sto.style.display = "block";
//     start.disabled = true;
//     sto.disabled = false;
//     // 每秒呼叫 create_data
//     timer = setInterval(constantly_updated, 1000);
// });

// // 點集暫停按鈕
// sto.addEventListener("click", function () {
//     sto.disabled = true;
//     start.disabled = false;
//     // 清除計時器
//     clearInterval(timer);
// });