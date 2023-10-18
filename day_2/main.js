// 當核取方塊的狀態被改變時
function click_ch(id) {
    // 抓取該核取方塊
    let catch_box = document.querySelector('#' + id);
    // 取得該核取方塊的勾選狀態
    let state = catch_box.checked;
    // 取得包裹該核取方塊的 tr
    let tr_element = catch_box.parentElement.parentElement;
    if (state) { // 有勾選的話
        // 將 tr 整列的顏色變灰
        tr_element.style.backgroundColor = "rgb(170, 170, 170)";
        // 將 tr 整列的文字反白
        tr_element.style.color = "white";
    } else {
        // 判斷此 checkbox 的底色是否為黃色，將 tr 整列回復到勾選前的顏色
        if (id == 'zs' || id == 'wo' || id == 'rain') {
            tr_element.style.backgroundColor = "rgb(255, 243, 191)";
        } else {
            tr_element.style.backgroundColor = "white";
        };
        // 將 tr 整列的文字反黑
        tr_element.style.color = "black";
    };
};
// 當單選按鈕的狀態被改變時
function click_ra(id) {
    // 逐一讀取第三部分表格所有 id
    ids = ["zs_", "ls_", "wo_", "zl_", "rain_", "maxman_"]
    for (let i = 0; i < ids.length; i++) {
        item = ids[i];
        // 抓取該單選按鈕
        let catch_radio = document.querySelector('#' + id);
        // 取得包裹該單選按鈕的 tr
        let tr_element = catch_radio.parentElement.parentElement;
        if (id === item) { // 將選擇匹配到的 id 的整列 tr 變色
            // 將 tr 整列的顏色變灰
            tr_element.style.backgroundColor = "rgb(170, 170, 170)";
            // 將 tr 整列反白
            tr_element.style.color = 'white';
        } else { // 其他未選擇到的保持原色
            // 抓取未選澤到的按鈕
            let other_radio = document.querySelector('#' + item);
            // 取得包裹該未選澤到的按鈕的 tr
            let tr_element = other_radio.parentElement.parentElement;
            // 判斷其他 radio button 的底色是否為黃色，將 tr 整列回復到勾選前的顏色
            if (item == 'zs_' || item == 'wo_' || item == 'rain_') { // 是黃色
                // 將 tr 整列的顏色變黃
                tr_element.style.backgroundColor = "rgb(255, 243, 191)";
            } else { // 除了黃色 (白色)
                // 將 tr 整列的顏色變白
                tr_element.style.backgroundColor = "white";
            };
            // 不管黃色還白色，都將 tr 整列的文字反黑
            tr_element.style.color = "black";
        };
    };
};