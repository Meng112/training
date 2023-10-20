<?php
// 連線至 MySQL
$server_name = "localhost"; // MySQL 伺服器名稱
$user_name = "root"; // MySQL 用戶名稱
$password = ""; // MySQL 密碼
$database = "test"; // 資料庫名稱
// 建立與 MySQL 的連線
$connect = new mysqli($server_name, $user_name, $password, $database);

// 檢查連接是否成功
if ($connect->connect_error) { // 若連接出問題 (connect_error)
    die("連接失敗: " . $connect->connect_error); // dio() 停止執行，並顯示具體錯誤訊息
}

// 選擇要指定的資料表
$table_name = "db_test";

// 執行 SQL 查詢
$sql = "SELECT * FROM $table_name";
// // 執行結果
$result = $connect->query($sql);

if (!$result) { // 如果執行結果 result 失敗
    die("查詢失敗：" . $connect->error); // 停止執行，並顯示具體錯誤訊息
}
$datas = array(); // 分組 row 的空間
if ($result->num_rows > 0) { // 如果有資料的話
    while ($row = $result->fetch_assoc()) { // 當還有資料時，將查詢結果 (result) 以列 (row) 的方式分段 (fetch_assoc())
        $data = array(); // 儲存 row 的空間
        // 取出各欄位的資料
        $time = $row['Time']; // 時間
        $item_1 = $row['item1']; // 項目1
        $item_2 = $row['item2']; // 項目1
        $item_3 = $row['item3']; // 項目1
        $item_4 = $row['item4']; // 項目1
        $item_5 = $row['item5']; // 項目1
        $item_6 = $row['item6']; // 項目1
        $item_7 = $row['item7']; // 項目1
        $item_8 = $row['item8']; // 項目1
        $item_9 = $row['item9']; // 項目1
        $item_10 = $row['item10']; // 項目1
        // 將各資料新增至 row 的儲存空間 (data)
        array_push($data, $time, $item_1, $item_2, $item_3, $item_4, $item_5, $item_6, $item_7, $item_8, $item_9, $item_10);
        array_push($datas, $data);
    }
} else {
    echo "沒有資料了";
}

// 將 data 陣列轉換成 json
$datas = json_encode($datas);
header("Content-Type: application/json");
echo $datas;

// 關閉資料庫連線
$connect->close();
?>