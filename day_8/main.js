// 創建包裹 canvas 的 div
let bar_div = document.createElement('div');
// 創建 canvas
let ctx = document.createElement('canvas');
// 將 canvas 加入 div
bar_div.appendChild(ctx);
// 將 bar_div 加入到 body
document.body.appendChild(bar_div);

// 創建 text 的 div
let text_div = document.createElement("div");
// 第一列
let p_1 = document.createElement("p");
let top1_persent = "top1"; // 第一大的值
let top1_range = ""; // 第一大的欄位
let top1_top2_persent = ""; // 第一大跟第二大相減的百分比
p_1.innerHTML = "第一名 佔整體 " + top1_persent + "% 範圍為 " + top1_range + " 與第二名相差 " + top1_top2_persent + "%";
// 第二列
let p_2 = document.createElement("p");
let top2_persent = ""; // 第二大的值
let top2_range = ""; // 第二大的欄位
let top2_top3_persent = ""; // 第二大跟第三大相減的百分比
p_2.innerHTML = "第二名 佔整體 " + top2_persent + "% 範圍為 " + top2_range + " 與第三名相差 " + top2_top3_persent + "%";
// 第三列
let p_3 = document.createElement("p");
let top3_persent = ""; // 第三大的值
let top3_range = ""; // 第三大的欄位
p_3.innerHTML = "第三名 佔整體 " + top3_persent + "% 範圍為" + top3_range + "%";
// 第四列
let p_4 = document.createElement("p");
let top1_top2_5_persent = ""; // 判斷第一大減第二大有沒有相差 5 %
p_4.innerHTML = "若第一名與第二名相差 5 % 為眾數 第一名 " + top1_top2_5_persent;
// 第五列
let p_5 = document.createElement("p");
let top1_top3_5_persent = ""; // 判斷第一大減第二大有沒有相差 5 %
p_5.innerHTML = "若第一名與第三名相差 5 % 為眾數 第一名 " + top1_top3_5_persent;

// 將所有列加入到 text_div
text_div.appendChild(p_1);
text_div.appendChild(p_2);
text_div.appendChild(p_3);
text_div.appendChild(p_4);
text_div.appendChild(p_5);

// 將 text_div 加入到 body
document.body.appendChild(text_div);

// 計時器
let timer;
// 資料
let datas;
// top 3 最大值
let maxs = [];
// top3 最大值的索引編號儲存空間
let maxs_index = [];
// 測試用
let count = 0;
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
            datas = JSON.parse(json_data);
            // 計算 x 軸標題與各資料區間的數量
            datas = labels_and_counts(datas);
        }
    }
    // 指定連線路徑與傳送方式，關閉同步 (程式會等完連線取得完回應才會進行下一步)
    request_g.open("GET", "get_data.php", false);
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

// 計算 TOP 3 的各個百分比及範圍，並連動 Text 值
let top3 = function () {
    let original_datas = datas["datas_count"]; // 原始的資料
    let copy_datas = original_datas.slice(0); // 拷貝 bar 圖的資料
    for (let j = 0; j < 3; j++) { // 找出 top 3 (3次)
        // 找出該陣列的最大值
        let max = Math.max(...copy_datas);
        for (let i = 0; i < copy_datas.length; i++) { // 在此陣列找最大值 (從左邊開始)
            if (copy_datas[i] == max) { // 如果在陣列中找到最大值
                maxs.push(max); // 把這個最大值存入 maxs
                maxs_index.push(i); // 接著把最大值的位置 (index) 存入 maxs_index
                copy_datas[i] = 0; // 然後讓該最大值變成 0 (這樣就不用刪掉，index 也不會跑掉)
                break; // 不用再找下去，跳出迴圈
            }
        }
    }

    // 第一列
    top1_persent = maxs[0]; // 第一大的值
    top1_range = datas["x_label"][maxs_index[0]]; // 第一大的欄位
    top1_top2_persent = (maxs[0] - maxs[1]).toFixed(2); // 第一大跟第二大相減的百分比
    p_1.innerHTML = "第一名 佔整體 " + top1_persent + "% 範圍為 " + top1_range + " 與第二名相差 " + top1_top2_persent + "%";

    // 第二列
    top2_persent = maxs[1]; // 第二大的值
    top2_range = datas["x_label"][maxs_index[1]]; // 第二大的欄位
    top2_top3_persent = (maxs[1] - maxs[2]).toFixed(2); // 第二大跟第三大相減的百分比
    p_2.innerHTML = "第二名 佔整體 " + top2_persent + "% 範圍為 " + top2_range + " 與第三名相差 " + top2_top3_persent + "%";

    // 第三列
    top3_persent = maxs[2]; // 第三大的值
    top3_range = datas["x_label"][maxs_index[2]]; // 第三大的欄位
    p_3.innerHTML = "第三名 佔整體 " + top3_persent + "% 範圍為 " + top3_range;

    // 第四列
    top1_top2_5_persent = (Number(top1_top2_persent) > 5); // 判斷第一大減第二大有沒有相差 5 %

    // 如果第一大減第二大有相差到 5 %
    if (top1_top2_5_persent) {
        // 第一大為眾數
        p_4.innerHTML = "若第一名與第二名相差 5 % 為眾數 第一名 " + "是眾數";
    } else { // 沒有相差 5 %
        // 第一大不為眾數
        p_4.innerHTML = "若第一名與第二名相差 5 % 為眾數 第一名 " + "不是眾數";
    }
    // 第五列
    top1_top3_5_persent = (Number((maxs[0] - maxs[2]).toFixed(2)) > 5); // 判斷第一大減第三大有沒有相差 5 %
    p_5.innerHTML = "若第一名與第三名相差 5 % 為眾數 第一名 " + top1_top3_5_persent;

    // 如果第一大減第三大有相差到 5 %
    if (top1_top2_5_persent) {
        // 第一大為眾數
        p_5.innerHTML = "若第一名與第三名相差 5 % 為眾數 第一名 " + "是眾數";
    } else { // 沒有相差 5 %
        // 第一大不為眾數
        p_5.innerHTML = "若第一名與第三名相差 5 % 為眾數 第一名 " + "不是眾數";
    }

};

// 不斷更新
let constantly_updated = function () {
    call_create_data();
    call_get_data();
    top3();
    console.log(maxs);
    // 更新 myCh 的資料
    myCh.config._config.data.datasets[0].data = datas.datas_count;
    // 更新 myCh 的 x 軸標籤
    myCh.config._config.data.labels = datas.x_label;
    // 更新 myCh
    myCh.update();
};

call_create_data();
call_get_data();
top3();

// 圖表配置
let config = {
    type: 'bar', // 圖表類型
    data: { // 資料
        labels: datas["x_label"], // x 軸標籤資料
        datasets: [{ // 資料集設置
            label: '眾數', // 圖表標題
            data: datas["datas_count"], // 資料
            backgroundColor: 'rgb(254 99 131)', // 資料顏色
            borderWidth: 1, // 資料外框線
            fontSize: "14px"
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
            },
        },
        scales: { // 軸配置
            x: { // x 軸
                grid: { // 網格線
                    display: true, // 顯示
                },
                ticks: {
                    font: { // 文字設置
                        size: 16 // 文字大小
                    }
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

// 點集開始按鈕
start.addEventListener("click", function () {
    sto.style.display = "block";
    start.disabled = true;
    sto.disabled = false;
    // 每秒呼叫 create_data，並自動更新圖表資料 (每秒增加亂數資料)
    timer = setInterval(constantly_updated, 1000);
});

// 點集暫停按鈕
sto.addEventListener("click", function () {
    sto.disabled = true;
    start.disabled = false;
    // 清除計時器
    clearInterval(timer);
});