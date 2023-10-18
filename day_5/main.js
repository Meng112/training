// 創建包裹畫布 canvas 的 div
let div = document.createElement('div');
// 創建畫布 canvas
let ctx = document.createElement('canvas');
// 將畫布 canvas 加入 div
div.appendChild(ctx);
// 將 div 加入到 body
document.body.appendChild(div);

// 產生 1000 欄的 x 軸標籤儲存於 x_labels 裡面
let x_labels = [];
for (let i = 0; i < (1000 + 1); i++) {
    x_labels.push(i);
};
// 產生 1000 筆亂數
const datas = []; // 儲存資料空間
let prev_y = 0; // y 座標的初始數值為 0
for (let i = 1; i <= 1000; i++) {
    if (i === 1) { // 第一筆資料
        datas.push({ x: i, y: prev_y }); // 設定為 (1, 0)
    } else { // 剩餘的資料
        prev_y = Math.random() * 2 + 1; // y 座標都經由亂數產生
        datas.push({ x: i, y: prev_y }); // (1, 0) => (2, 亂數) => (3, 亂數)
    }
}


const total_duration = 1000; // 總動畫時間 (ms)
const delay_time = total_duration / datas.length; // 每筆資料的動畫時間
// 取得前一個數據點路徑到當前數據點上的所有 y 座標
const previousY = function (ctx) {
    if (ctx.index === 0) { // 如果當前的索引是 0 (第一筆資料)
        return ctx.chart.scales.y.getPixelForValue(0);
    } else { // 不是第一筆的話
        // 取得當前資料
        let current_data = ctx.chart.getDatasetMeta(ctx.datasetIndex) // ctx.datasetIndex 為當前資料的索引
        // 根據當前資料的 (索引 - 1), 取得當前數據點到前一筆數據點的 所有 y 座標
        // 前一筆數據點
        let prev_data = current_data.data[ctx.index - 1]
        // 當前數據點到前一筆數據點的 所有 y 座標
        let path_ys = prev_data.getProps(['y'], true).y
        return path_ys;
    };
};


// 圖表設置
const config = {
    type: 'line', // 資料類型
    data: {
        labels: x_labels, // x 軸標籤
        datasets: [
            {
                data: datas, // y 軸標籤
                borderColor: "rgb(5 145 85)", // 線條線色
                borderWidth: 1, // 線條寬度
                pointRadius: 0, // 點的半徑
            }
        ]
    },
    options: {
        animation: { // 動畫
            x: {
                type: 'number', // 動畫類型為 number
                easing: 'linear', // 動畫緩衝，使用線性緩衝
                duration: delay_time, // 持續時間: 每筆資料的動畫時間
                from: NaN, // 讓動畫從下一個數據點開始，而不是瞬間顯示，才有繪製的效果
                delay(ctx) { // 延遲時間
                    if (ctx.type !== 'data' || ctx.xStarted) { // 如果資料不是 data 型態，或者是剛開始的數據的話
                        return 0; // 就不要延遲
                    }
                    ctx.xStarted = true; // x 軸已經開始
                    return ctx.index * delay_time; // 每筆資料的開始動畫時間
                },
            },
            y: {
                type: 'number', // 動畫類型為 number
                easing: 'linear', // 動畫緩衝，使用線性緩衝
                duration: delay_time, // 持續時間: 每筆資料的動畫時間
                from: previousY, // 讓動畫從前一個數據點開始
                delay(ctx) { // 延遲時間
                    if (ctx.type !== 'data' || ctx.yStarted) { // 如果資料不是 data 型態，或者是剛開始的數據的話
                        return 0; // 就不要延遲
                    }
                    ctx.yStarted = true; // y 軸已經開始
                    return ctx.index * delay_time; // 每筆資料的開始動畫時間
                },
            },
        },
        interaction: { // 滑鼠回應點資料
            mode: 'nearest', // 互動模式為最近的資料點
            axis: 'x', // 互動軸為 x 軸
            intersect: false, // 關閉滑鼠移動到資料點上才顯示
        },
        plugins: {
            legend: { // 圖表標題
                display: false // 不顯示
            },
            tooltip: { // 滑鼠移動到資料點上顯示的提示
                enabled: true,
                position: 'nearest',
            },
        },
        layout: { // 此 ctx 的內距
            padding: 25 // 為 50 px
        },
        scales: { // 軸設定
            x: { // x 軸設定
                grid: { // 網格線
                    display: true, // 顯示
                    color: "white", // 顏色
                },
                ticks: { // x 軸標籤設置
                    callback: function (value, index) { // 自訂標籤設置
                        let label_x = this.getLabelForValue(value); // 取得 x 軸標籤
                        // 將偶數欄位隱藏 (不包括首末欄)
                        if (index !== 0 && index % 200 !== 0 && index !== x_labels.length) { // 索引不為百位欄 (不包括首末欄)
                            // 將標籤設置為 null
                            label_x = null;
                        }
                        return label_x;
                    }
                },
            },
            y: { // y 軸設定,
                beginAtZero: true, // 標籤從 0 開始 
                suggestedMax: 5, // 最大值為 5
                grid: { // 網格線
                    display: true, // 顯示
                    color: "white", // 顏色
                },
                ticks: { // y 軸標籤設置
                    stepSize: 1, // 間距設定為 1
                    callback: function (value) { // 自訂標籤設置
                        return value + ".00%";
                    },
                },
            },
        },
    },
};
// 創建圖表
let myCh = new Chart(ctx, config);