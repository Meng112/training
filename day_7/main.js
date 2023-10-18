// ------------------------------------------html_element---------------------------
// 建立包裹除了表格 table 的 div
let container = document.createElement("div");
// 指定 class 屬性 : container
container.className = "container";

// 建立第一列的 div: top_row
let top_row = document.createElement("div");
// 指定 class 屬性 div (top_row)
top_row.className = "top_row";

// 建立第二列的 div: middle_row
let middle_row = document.createElement("div");
// 指定 class 屬性 div (middle_row)
middle_row.className = "middle_row";

// 建立第三列的 div: bottom_row
let bottom_row = document.createElement("div");
// 指定 class 屬性 div (bottom_row)
bottom_row.className = "bottom_row";

// 建立標題
let course_name = document.createElement("h1");
// 更改標題內文
course_name.innerText = "製造部課";

// 建立只包裹有關上限值的 div : upper
let upper = document.createElement("div");
// 指定 class 屬性 : upper
upper.className = "upper";

// 建立上限值標題
let upper_limit = document.createElement("label");
// 更改上限值標題內文
upper_limit.innerText = "請輸入上限值 ";
// 建立上限值的輸入框
let input_upper_limit = document.createElement("input");
// 設定上限值輸入框的類型
input_upper_limit.type = "text";
// 設定上限值輸入框的預設值
input_upper_limit.value = 100;
// 設定上限值輸入框的長度
input_upper_limit.size = "10";

// 將所有上限相關的元素加入 div (upper)
upper.appendChild(upper_limit); // 加入上限標題
upper.appendChild(input_upper_limit); // 加入上限值輸入框

// 將第一列內容加入 div (top_row)
top_row.appendChild(course_name); // 加入標題
top_row.appendChild(upper); // 加入上限值

// 建立只包裹有關顯示的 div : display
let display = document.createElement("div");
// 指定 class 屬性 div : display
display.className = "display";

// 建立顯示
let display_text = document.createElement("label");
// 更改顯示內文
display_text.innerText = "顯示 ";
// 建立顯示資料輸入框
let input_display = document.createElement("input");
// 設定顯示資料輸入框的類型
input_display.type = "text";
// 設定顯示資料輸入框的預設值
input_display.value = 40;
// 設定顯示資料輸入框的長度
input_display.size = "10";
// 建立筆資料
let pieces_data = document.createElement("label");
// 更改筆資料內文
pieces_data.innerText = " 筆資料";

// 將所有顯示相關的元素加入 div (display)
display.appendChild(display_text); // 加入顯示內文
display.appendChild(input_display); // 加入顯示資料輸入框
display.appendChild(pieces_data); // 加入筆資料

// 建立只包裹下限值有關的 div (lower)
let lower = document.createElement("div");
// 指定 class 屬性 div : lower
lower.className = "lower";

// 建立下限值
let lower_limit = document.createElement("label");
// 更改下限值標題
lower_limit.innerText = "請輸入下限值 ";
// 建立下限值的輸入框
let input_lower_limit = document.createElement("input");
// 設定下限值輸入框的類型
input_lower_limit.type = "text";
// 設定下限值輸入框的預設值
input_lower_limit.value = 0;
// 設定下限值輸入框的長度
input_lower_limit.size = "10";

// 將所有下限值相關的元素加入 div (lower)
lower.appendChild(lower_limit); // 加入下限值
lower.appendChild(input_lower_limit); // 加入下限值的輸入框

// 將第二列內容加入 div (middle_row)
middle_row.appendChild(display); // 加入 display-div
middle_row.appendChild(lower); // 加入 lower-div

// 建立只包裹刷新有關的 div (refresh)
let refresh = document.createElement("div");
// 指定 class 屬性 div : refresh
refresh.className = "refresh";

// 建立刷新輸入框
let input_refresh = document.createElement("input");
// 設定刷新輸入框的類型
input_refresh.type = "text";
// 設定刷新輸入框的預設值
input_refresh.value = 2;
// 設定刷新輸入框的長度
input_refresh.size = "3";
// 建立刷新值
let refresh_text = document.createElement("label");
// 更改刷新值內文
refresh_text.innerText = " 秒刷新一次";

// 將所有刷新相關的元素加入 div (refresh)
refresh.appendChild(input_refresh); // 加入刷新輸入框
refresh.appendChild(refresh_text); // 加入刷新值

// 建立開始按鈕
let start = document.createElement("button");
// 更改開始按鈕內文
start.innerText = "開始";
// 設定開始按鈕 className
start.className = "start";
// 建立停止按鈕
let sto = document.createElement("button");
// 更改停止按鈕內文
sto.innerText = "停止";

// 將第三列內容加入 div (bottom_row)
bottom_row.appendChild(refresh); // 加入 refresh-div
bottom_row.appendChild(start); // 加入 start-button
bottom_row.appendChild(sto); // 加入 sto-button

// 將所有 row-div 加入 container-div
container.appendChild(top_row);
container.appendChild(middle_row);
container.appendChild(bottom_row);
// ---------------------------------------------table-------------------------------------------------------
// 建立包裹 table 的 div: container_table
let container_table = document.createElement("div");
// 指定 class 屬性 div (container_table)
container_table.className = "container_table";

// 建立 table
let table = document.createElement("table");
// 建立 thead
let thead = document.createElement("thead");
// 建立 tbody
let tbody = document.createElement("tbody");
// 將 thead、tbody 加入到 table 中
table.appendChild(thead);
table.appendChild(tbody);
// 將 table 加入到 container_table-div 中
container_table.appendChild(table);

// -----------------------------------------------select----------------------------------------------------
// 創建 select 下拉式選單的 div
let select_store = document.createElement("div");
// 指定 class 屬性
select_store.className = "select_store";
// 建立資料表下拉式選單
let select_datas = document.createElement("select");
// 建立資料表選項
let options_data = document.createElement("option");
// 資料表選項內文
options_data.innerText = "資料表1";
// 將 option 選項加入 select_datas 下拉式選單
select_datas.appendChild(options_data);
// 將 select_datas 加入 select_store-div
select_store.appendChild(select_datas);
// 下拉式選單的值
let options_value = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6', 'Item7', 'Item8', 'Item9', 'Item10']
// 先將 select 下拉式選單都加進 th 標題，再把 th 標題加進 tr_header 標題列
for (let i = 0; i < 5; i++) {
    // 建立 select 下拉式選單
    let select = document.createElement("select");
    // 新增 select 下拉式選單的值
    for (let j = 0; j < 10; j++) {
        // 建立 option 選項
        let options = document.createElement("option");
        // 選項的值
        options.innerText = options_value[j];
        // 將 option 選項加入 select 下拉式選單
        select.appendChild(options)
    };
    // 將選項的預設值依照順序排序
    select[i].selected = true; // 預設選項
    // 將 select 加入 select_store-div
    select_store.appendChild(select);
};

//-----------------------------------------------------thead-------------------------------------------------
// 創建 tr_header 標題列
let tr_header = document.createElement("tr");
for (let i = 0; i < 6; i++) {
    // 創建 th 標題
    let th = document.createElement("th");
    // 賦予 th 標題值
    // th.innerText = "標題";
    // 將 th 標題加入 tr_header 標題列中
    tr_header.appendChild(th);
}
// 將 tr_header 標題列加入 thead 中
thead.appendChild(tr_header);
// ----------------------------------------向 get_data.php 取得資料的函式------------------------------------
let refresh_data = function () {
    // 使用 ajax 從 php 取得資料
    // 根據初始設定值，向 get_data.php 取資料，並顯示在表格內 (資料依照 select 的 option 變動)
    // 建立新的 ajax 請求
    let request_g = new XMLHttpRequest();
    request_g.onreadystatechange = function () { // 當 readyState 改變時 (readyState 表示 XMLHttpRequest 的狀態)
        if (this.readyState == 4 && this.status == 200) {
            // 取得從 get_data.php 得到的資料
            let get_data = request_g.responseText;
            // 將得到的資料轉換為 json
            let datas = JSON.parse(get_data); // 所有資料庫的資料
            // 反轉 datas 陣列 (把最新的資料移到前面)
            datas = datas.reverse();
            // 顯示初始資料筆數
            // 取得 tbody 裡面的所有 tr
            trs = tbody.childNodes;
            // 取得所有 tr 裡面的 td
            for (let i = 0; i < trs.length; i++) { // i: 所有 tr 的列編號
                let tds = trs[i].childNodes; // 每個 tr 裡面的 td
                for (let j = 0; j < tds.length; j++) { // j: td 的 index
                    // 將取得的資料值給 td
                    tds[j].innerText = datas[i][j];
                }
            };
            // 將 select 的 option 跟資料作連動
            for (let i = 0; i < all_select.length; i++) { // 取得所有的 select
                // 取得每個 select 選擇的值
                // console.log("當前選擇的值: " + all_select[i].value);
                // 將 th 標題的內文與 select 的 option 相同
                if (i == 0) { // 如果是第一個標題 (資瞭表 1)
                    ths[i].innerText = "Time";
                } else { // 將標題連動 option 文字
                    ths[i].innerText = all_select[i].value;
                }
                // 取得使用者選擇的 option 
                let select_item = Number(all_select[i].value.substring(4));
                // 選擇 option 後將該欄的資料更新 (當自動刷新時，因為欄位值已更動，就能在更新後連動)
                // 取得該欄位編號
                // let number = all_select[i].className;
                // 取得所有的 tr
                for (let j = 0; j < trs.length; j++) {
                    // 取得該 tr
                    let tr = trs[j];
                    // 取得該 tr 裡面的 td (一整欄)
                    let tds = tr.childNodes[i];
                    // 將 td 裡面的資料更新
                    // tds.innerText = data[0-40][item?]
                    tds.innerText = datas[j][select_item];
                };
                // 偵測當每個 select 選擇的值改變時
                all_select[i].addEventListener("change", function () {
                    // console.log(all_select[i].value);
                    // 更新使用者選擇的 option
                    select_item = Number(all_select[i].value.substring(4));
                    // 將 th 標題內文與 select 的 option 連動
                    if (i == 0) { // 第一個資料表 1 固定是 Time
                        ths[i].innerText = "Time";
                    } else {
                        // 跟著 select 的 option 連動 (將標題的文字等於 option 的文字值)
                        ths[i].innerText = all_select[i].value;
                    }
                    // 選擇 option 後將該欄的資料更新
                    // 取得該欄位編號
                    // let number = all_select[i].className;
                    // 取得所有的 tr
                    for (let j = 0; j < trs.length; j++) {
                        // 取得該 tr
                        let tr = trs[j];
                        // 取得該 tr 裡面的 td (一整欄)
                        let tds = tr.childNodes[i];
                        // 將 td 裡面的資料更新
                        // tds.innerText = data[0-40][item?]
                        tds.innerText = datas[j][select_item];
                    };

                });
            };

        };

    };
    // 指定請求的方法、路徑
    request_g.open("GET", "get_data.php", true);
    // 發送請求
    request_g.send();
};
// -----------------------------------------------------tbody------------------------------------------------
// 創建多行 tr_data 資料列
// 總共想創建的 tr_data 資料行數 (預設 40 行)
let tr_data;
let total_records = 60;
for (let i = 0; i < total_records; i++) {
    // 創建 tr_data 資料列
    tr_data = document.createElement("tr");
    // 創建 td 資料格新增到 tr_data 資料列
    for (let j = 0; j < 6; j++) {
        // 創建 td 資料格
        let td = document.createElement("td");
        td.innerText = j;
        // 將 td 資料格新增到 tr_data 資料列
        tr_data.appendChild(td);
    };
    // 將 tr_data 新增到 tbody
    tbody.appendChild(tr_data);
};
// 初始資料
refresh_data();

// ---------------------------------------------add to body----------------------------------------
// 將 container 加入 body
document.body.appendChild(container);
// 將 select_store 加入 body
document.body.appendChild(select_store);
// 將 container_table 加入 body
document.body.appendChild(container_table);

// -------------------------------------------scrollbar (初始)-------------------------------------
// 動態設定 scrollbar 的高
// 設定可視行 (總行數/2) 行
// 取得 table 的高
let table_tall = document.getElementsByTagName('table')[0].offsetHeight;
// 設定包裹住 table 的 div 的高 (scroll bar) 為 table 的高的一半再加上一半高度的 td
container_table.style.height = ((table_tall / 2) + 11) + "px";

// -----------------------------------------------初始化資料-----------------------------------------
// 要傳送的資料
let data = {
    "upper_limit": input_upper_limit.value, // 資料的亂數上限值
    "lower_limit": input_lower_limit.value // 資料的亂數下限值
};
// 取得刷新的時間
let refresh_time = Number(input_refresh.value) * 1000;
// 初始化 setInterval
let set_timer;
// 初始化 tbody 裡面所有的 tr
let trs = tbody.childNodes;
// 呼叫 create_data.php 的函式
let res = function (data) {
    // 使用 ajax 從 php 取得資料
    // 將 data 轉換成 json 字串
    let json_data = JSON.stringify(data);
    // 建立新的 ajax 請求
    let request_c = new XMLHttpRequest();
    request_c.onreadystatechange = function () { // 當 readyState 改變時
        // console.log("res: " + json_data);
    };
    // 指定路徑與傳送方式
    request_c.open("POST", "create_data.php", true);
    // 設置表頭
    request_c.setRequestHeader("Content-Type", "application/json");
    // 發送請求
    request_c.send(json_data);
};

// 抓取所有的 select 下拉式選單
let all_select = document.getElementsByTagName("select");
// 抓取所有的 th 標籤
let ths = document.getElementsByTagName('th');

// 初始化計數器 (測試)
let count = 0;

// --------------------------------------------- 點擊按鈕後-------------------------------------
// 輸入條件後，按下開始按鈕取得全部輸入
// 新增開始按鈕的點擊事件
start.addEventListener("click", function () {
    console.log("按下按鈕");
    start.disabled = true;
    sto.disabled = false;
    // 抓取所有的 select 下拉式選單
    // let all_select = document.getElementsByTagName("select");
    // 第一個不要，其他都要
    // for (let i = 1; i < all_select.length; i++) {
    //     // 取得每個 select 選擇的值
    //     all_select[i].value;
    // };

    // 動態設定 scrollbar 的高 (根據 table 的高做動態更動)
    // 設定可視行 (總行數/2) 行
    // 取得 table 的高
    let table_tall = document.getElementsByTagName('table')[0].offsetHeight;
    // 設定包裹住 table 的 div 的高 (scroll bar) 為 table 的高的一半再加上一半高度的 td
    container_table.style.height = ((table_tall / 2) + 11) + "px";

    // -------------------------------------更新點擊按鈕後的刷新時間-----------------------------------------------
    refresh_time = Number(input_refresh.value) * 1000;
    // // 清除舊的計時器
    // clearInterval(set_timer);
    // 啟動新的計時器
    set_timer = setInterval(function () { // 每隔兩秒
        res(data); // 建立 ajax 連線請求，呼叫 php 檔案
        // console.log("點擊按鈕後的時間: " + refresh_time);
        // ---------------------------------------- 顯示幾筆資料-------------------------------------
        // 連動顯示幾筆資料
        // 抓取顯示幾筆資料
        // 總共想創建的 tr_data 資料行數等於使用者輸入的資料
        total_records = input_display.value;
        // 取得包裹資料表格的 tbody 與上級的 table
        let tbody = document.getElementsByTagName("tbody")[0];
        // 清除初始資料表格 (清除內容)
        table.removeChild(tbody);
        // 產生新資料
        // 創建 new_tbody
        let new_tbody = document.createElement("tbody");
        // 將 new_tobdy 加入 table
        table.appendChild(new_tbody);
        for (let i = 0; i < total_records; i++) {
            // 創建 tr_data 資料列
            let tr_data = document.createElement("tr");
            // 創建 td 資料格新增到 tr_data 資料列
            for (let j = 0; j < 6; j++) {
                // 創建 td 資料格
                let td = document.createElement("td");
                // // 賦予 td 資料格資料
                // td.innerText = j;
                // 將 td 資料格新增到 tr_data 資料列
                tr_data.appendChild(td);
            };
            // 將 tr_data 新增到 new_tbody
            new_tbody.appendChild(tr_data);
        };
        // -----------------------------------------------更新資料------------------------------------------------
        // 使用 ajax 從 php 取得資料
        // 根據初始設定值，向 get_data.php 取資料，並顯示在表格內 (資料依照 select 的 option 變動)
        // 建立新的 ajax 請求
        let request_g = new XMLHttpRequest();
        request_g.onreadystatechange = function () { // 當 readyState 改變時 (readyState 表示 XMLHttpRequest 的狀態)
            if (this.readyState == 4 && this.status == 200) {
                // 取得從 get_data.php 得到的資料
                let get_data = request_g.responseText;
                // 將得到的資料轉換為 json
                let datas = JSON.parse(get_data); // 所有資料庫的資料
                // 反轉 datas 陣列 (把最新的資料移到前面)
                datas = datas.reverse();
                // console.log(datas);
                // console.log("顯示幾筆資料: " + input_display.value);
                // console.log("上限值: " + input_upper_limit.value);
                // console.log("下限值: " + input_lower_limit.value);
                // console.log("自動刷新時間: " + input_refresh.value);

                // 顯示初始資料筆數
                // 取得 tbody 裡面的所有 tr
                trs = new_tbody.childNodes;
                // 取得 所有 tr 裡面的 td
                for (let i = 0; i < trs.length; i++) {
                    let tds = trs[i].childNodes; // 所有的 td
                    for (let j = 0; j < tds.length; j++) {
                        // 將取得的資料值給相對的 td
                        tds[j].innerText = datas[i][j];
                    }
                };
                for (let i = 0; i < all_select.length; i++) { // 取得所有的 select
                    // 取得每個 select 選擇的值
                    // console.log("當前選擇的值: " + all_select[i].value);
                    // 將 th 標題的內文與 select 的 option 相同
                    if (i == 0) {
                        ths[i].innerText = "Time";
                    } else {
                        ths[i].innerText = all_select[i].value;
                    }
                    // 使用者選擇的 option
                    let select_item = Number(all_select[i].value.substring(4));
                    // 選擇 option 後將該欄的資料更新 (當自動刷新時，因為欄位值已更動，就能在更新後連動)
                    // 取得該欄位編號
                    // let number = all_select[i].className;
                    // 取得所有的 tr
                    for (let j = 0; j < trs.length; j++) {
                        // 取得該 tr
                        let tr = trs[j];
                        // 取得該 tr 裡面的 td (一整欄)
                        let tds = tr.childNodes[i];
                        // 將 td 裡面的資料更新
                        // tds.innerText = data[0-40][item?]
                        tds.innerText = datas[j][select_item];
                    };
                    // 偵測當每個 select 選擇的值改變時
                    all_select[i].addEventListener("change", function () {
                        // console.log(all_select[i].value);
                        // 更新使用者選擇的 option
                        select_item = Number(all_select[i].value.substring(4));
                        // 將 th 標題內文與 select 的 option 連動
                        if (i == 0) { // 第一個資料表 1 固定是 Time
                            ths[i].innerText = "Time";
                        } else {
                            // 跟著 select 的 option 連動 (將標題的文字等於 option 的文字值)
                            ths[i].innerText = all_select[i].value;
                        }
                        // 選擇 option 後將該欄的資料更新
                        // 取得該欄位編號
                        // let number = all_select[i].className;
                        // 取得所有的 tr
                        for (let j = 0; j < trs.length; j++) {
                            // 取得該 tr
                            let tr = trs[j];
                            // 取得該 tr 裡面的 td (一整欄)
                            let tds = tr.childNodes[i];
                            // 將 td 裡面的資料更新
                            // tds.innerText = data[0-40][item?]
                            tds.innerText = datas[j][select_item];
                        };

                    });
                };

            };

        };
        // 指定請求的方法、路徑
        request_g.open("GET", "get_data.php", true);
        // 發送請求
        request_g.send();
    }, refresh_time);
    // -------------------------------------透過 ajax 連線到 get_data.php 請求資料---------------------------------
    // 使用 ajax 從 php 取得資料
    // 建立新的 ajax 請求
    let request_g = new XMLHttpRequest();
    request_g.onreadystatechange = function () { // 當 readyState 改變時 (readyState 表示 XMLHttpRequest 的狀態)
        if (this.readyState == 4 && this.status == 200) {
            // 取得從 get_data.php 得到的資料
            let get_data = request_g.responseText;
            // 將得到的資料轉換為 json
            let datas = JSON.parse(get_data);
            console.log(datas); // 最新的資料
        };
    };
    // 指定請求的方法、路徑
    request_g.open("GET", "get_data.php", true);
    // 發送請求
    request_g.send();

    // -------------------------------------透過 ajax 連線到 create_data.php (傳遞上下限值)--------------------------------------
    // 使用 ajax 傳遞資料給 create_data.php
    // // 取得要傳送的資料
    data = { // 取得當前資料，並將其更新給不斷呼叫函式 res()
        "upper_limit": input_upper_limit.value, // 資料的亂數上限值
        "lower_limit": input_lower_limit.value // 資料的亂數下限值
    };
    // 將 data 轉換成 json 字串
    let json_data = JSON.stringify(data);
    // 建立新的 ajax 請求
    let request_c = new XMLHttpRequest();
    request_c.onreadystatechange = function () { // 當 readyState 改變時
        // console.log("click" + json_data);
    };
    // 指定路徑與傳送方式
    request_c.open("POST", "create_data.php", true);
    // 設置表頭
    request_c.setRequestHeader("Content-Type", "application/json");
    // 發送請求
    request_c.send(json_data);
});
sto.addEventListener("click", function () {
    start.disabled = false;
    sto.disabled = true;
    // 清除舊的計時器
    clearInterval(set_timer);
});

// ---------------------------------------在載入 html 後不必等待載入元件直接執行這裡的 javascript----------------------------------
document.addEventListener("DOMContentLoaded", function () {
    // ------------------------------------ 當開啟網頁後，取得 get_data.php 的資料顯示在網頁上-----------------------------
    refresh_data(); // 初始資料
    // ------------------------------------ 當開啟網頁後，每隔兩秒呼叫 create_data.php (自動刷新時間)-----------------------------
    // 初始化計時器
    // set_timer = setInterval(function () {
    //     res(data); // 建立 ajax 連線請求，呼叫 php 檔案，並把當前的上下限值給 create_data.php
    //     // console.log("初始的計時器時間: " + refresh_time);
    //     refresh_data(); // 不斷更新資料
    // }, refresh_time);
});

// // 在網頁重新整理前，重新設定 data.json 初始值
// window.addEventListener("beforeunload", function () {
//     // 建立新的 ajax 請求
//     let request = new XMLHttpRequest();
//     request.onreadystatechange = function () { // 當 readyState 改變時 (readyState 表示 XMLHttpRequest 的狀態)
//         if (this.readyState == 4 && this.status == 200) { // 當連線成功

//         };
//     };
//     // 指定請求的方法、路徑
//     request.open("GET", "clear.php", true);
//     // 發送請求
//     request.send();
// });