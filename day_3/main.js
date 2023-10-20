// 創建 table 元素
let table = document.createElement('table');
// 創建 thead 元素
let thead = document.createElement('thead');
// 創建 tbody 元素
let tbody = document.createElement('tbody');
// 創建 div 元素
let container = document.createElement('div');
// 賦予 div className
container.className = 'container';
// 將 thead 跟 tbody 加到 table 中
table.appendChild(thead);
table.appendChild(tbody);
// 將 table 加到 div 中
container.appendChild(table);
// 將 div 加到 body 中
document.body.appendChild(container);

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

// 創建 select_page 下拉式選單
let select = document.createElement('select');
// 將 select 下拉式選單加入 body
document.body.appendChild(select);
// 創建 option 選單資料 * 20
for (let i = 1; i < 21; i++) {
    let option = document.createElement('option');
    // 更改 option 選項資料內容
    option.innerText = i;
    // 將 option 選單資料加入 select
    select.appendChild(option);
};

// 分組化資料
let data_quantity = 1000; // 總資料 1000
let pages = 20; // 組數 20
let datas_page = data_quantity / pages; // 一組 50 筆
// 對應到個別的資料
// 第一組 : 1-50
// 第二組 : 51-100
// 第三組 : 101-150
// 第四組 : 151-200
// 當我選擇第一組 page_number = 1
// 1 + (50 * (1 - 1)) , 50 * 1 = 1, 50
// 當我選擇第二組 page_number = 2
// 1 + (50 * (2 - 1)) , 50 * 2 = 51, 100
// 當我選擇第三組 page_number = 3
// 1 + (50 * (3 - 1)) , 50 * 3 = 101, 150
// 公式: 起始 >> 1 + (50 筆 * (第幾頁 - 1)) 結束 >> 50筆 * 第幾頁
// 起始頁面，預設頁面為第 1 頁
let select_page = 1;
// 起始資料號碼
let start_number = 1 + (datas_page * (select_page - 1));
// 結束資料號碼
let end_number = datas_page * select_page;
// 取得資料
for (let i = start_number; i < end_number + 1; i++) {
    // 增加 1 列表格
    // 創建 tr_content 內文欄
    let tr_content = document.createElement('tr');
    // 創建 td 資料
    let td_time = document.createElement('td'); // 時間
    let td_unit = document.createElement('td'); // 平均單位工時
    let td_equivalent = document.createElement('td'); // 平均等效工時
    let td_efficiency = document.createElement('td'); // 滾動式效率
    // 在時間欄加上編號 (方便辨認)
    td_time.innerText = i;
    // 將 tr_content 內文欄加入 tbody
    tbody.appendChild(tr_content);
    // 將 td 資料加入 tr_content 中
    tr_content.appendChild(td_time); // 加入時間
    tr_content.appendChild(td_unit); // 加入平均單位工時
    tr_content.appendChild(td_equivalent); // 加入平均等效工時
    tr_content.appendChild(td_efficiency); // 加入滾動式效率
};

// 當使用者選擇頁數時，新增 select 事件
select.addEventListener('change', function () {
    // 抓取當前網頁上的 tbody (remove 不知道刪除哪一個)
    let current_tbody = document.getElementsByTagName('tbody')[0];
    // 刪除當前網頁上的 tbody
    current_tbody.remove();
    // 創建新的 tbody 元素
    let new_tbody = document.createElement('tbody');
    // 將新的 tbody 加入到 table 中
    table.appendChild(new_tbody);
    // 取得使用者選擇的頁數 (option)
    let select_page = select.options[select.selectedIndex].text;
    // 起始資料號碼
    let start_number = 1 + (datas_page * (select_page - 1));
    // 結束資料號碼
    let end_number = datas_page * select_page;
    // 取得選擇頁數的資料
    for (let i = start_number; i < end_number + 1; i++) {
        // 創建 tr_content 內文欄
        let tr_content = document.createElement('tr');
        // 創建 td 資料
        let td_time = document.createElement('td'); // 時間
        let td_unit = document.createElement('td'); // 平均單位工時
        let td_equivalent = document.createElement('td'); // 平均等效工時
        let td_efficiency = document.createElement('td'); // 滾動式效率
        // 在時間欄加上編號 (方便辨認)
        td_time.innerText = i;
        // 將 tr_content 內文欄加入 tbody
        new_tbody.appendChild(tr_content);
        // 將 td 資料加入 tr_content 中
        tr_content.appendChild(td_time); // 加入時間
        tr_content.appendChild(td_unit); // 加入平均單位工時
        tr_content.appendChild(td_equivalent); // 加入平均等效工時
        tr_content.appendChild(td_efficiency); // 加入滾動式效率
    };
});

// 設定可視行 25 行
// 取得 table 的高
let table_tall = document.getElementsByTagName('table')[0].offsetHeight;
// 設定包裹住 table 的 div 的高 (scroll bar) 為 table 的高的一半再加上一半高度的 td
container.style.height = ((table_tall / 2) + 11) + "px";
