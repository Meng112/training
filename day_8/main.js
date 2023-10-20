// 創建包裹 canvas 的 div
let div = document.createElement('div');
// 創建 canvas
let ctx = document.createElement('canvas');
// 將 canvas 加入 div
div.appendChild(ctx);
// 將 div 加入到 body
document.body.appendChild(div);

let total_records = 1000;
// 產生 1000 筆亂數資料
let datas = []; // 儲存資料空間
for (let i = 0; i < total_records; i++) {
    // 產生亂數值
    let rand = Math.floor(Math.random() * 1001);
    // 將亂數存入資料儲存空間
    datas.push(rand);
}
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
        if (datas[j] <= y && datas[j] > x) { // 逐一比對 datas 的資料
            data_count += 1; // 有在範圍內就 ++
        }
    };
    // 將計算值結果存進來
    datas_count.push(data_count / total_records * 100);
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