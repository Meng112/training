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
$table_name = "create_random";

// 執行 SQL 查詢
$sql = "SELECT * FROM $table_name";
// // 執行結果
$result = $connect->query($sql);

if (!$result) { // 如果執行結果 result 失敗
    die("查詢失敗：" . $connect->error); // 停止執行，並顯示具體錯誤訊息
}

$data = array(); // 分組 row 的空間
if ($result->num_rows > 0) { // 如果有資料的話
    while ($row = $result->fetch_assoc()) { // 當還有資料時，將查詢結果 (result) 以列 (row) 的方式分段 (fetch_assoc())
        // 取出各欄位的資料
        $item = $row['item'];
        // 將各資料新增至 row 的儲存空間 (data)
        array_push($data, $item);
    }
} else {
    echo "沒有資料了<br>";
}

// 將 data 陣列轉換成 json
$json_data = json_encode($data);
// 設置標頭
header("Content-Type: application/json");
// 回傳資料 (json 格式)
echo $json_data;

// 關閉資料庫連線
$connect->close();
?>