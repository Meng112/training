<?php
// 設定時區為亞洲台北
date_default_timezone_set('Asia/Taipei');
// 連線至 MySQL
$server_name = "localhost"; // MySQL 伺服器名稱
$user_name = "root"; // MySQL 用戶名稱
$password = ""; // MySQL 密碼
$database = "test"; // 資料庫名稱
// 建立與 MySQL 的連線
$connect = new mysqli($server_name, $user_name, $password, $database);

// 檢查連接是否成功
if ($connect->connect_error) { // 若連接出問題 (connect_error)
    die("連接失敗: " . $connect->connect_error . "<br>"); // dio() 停止執行，並顯示具體錯誤訊息
}
echo "連接成功<br>";

// 創建 SQL 資料表與  Time 欄位
$create_table = "CREATE TABLE  IF NOT EXISTS db_test (
    Time TIME
)";
// 查詢 SQL 是否有剛剛創建的資料表
if (mysqli_query($connect, $create_table)) {
    echo "創建成功<br>";
} else { // 創建失敗，傳回錯誤訊息
    echo "創建失敗: " . mysqli_error($connect) . "<br>";
}

// 新增欄位名稱
for ($i = 1; $i < 11; $i++) { // 建立 item 1-10
    $column_name = "item" . $i;
    // 檢查是否有相同的欄位
    $check_column = "SHOW COLUMNS FROM db_test LIKE '$column_name'";
    $check_result = $connect->query($check_column);
    // 如果沒有的話
    if ($check_result->num_rows == 0) { // 找不到，可以新增
        // 新增欄位
        $insert_column = "ALTER TABLE db_test ADD COLUMN $column_name VARCHAR(255)";

        // 查詢 SQL 是否有更改欄位成功
        if (mysqli_query($connect, $insert_column)) {
            echo "新增成功<br>";
        } else {
            echo "新增失敗: " . mysqli_error($connect) . "<br>";
        }
    } else {
        echo "已經存在此欄位<br>";
    }
}

// 新增資料到欄位中
// 格式化時間
$current_time = date("H:i:s");
// SQL 插入資料值進欄位
$insert_query = "INSERT INTO db_test (Time, item1, item2, item3, item4, item5, item6, item7, item8, item9, item10) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
// 使用 prepared statement
if ($join = $connect->prepare($insert_query)) {
    // 連結參數、綁定參數 (資料型態 s: 字串, i: 整數)
    $join->bind_param("siiiiiiiiii", $time, $item1, $item2, $item3, $item4, $item5, $item6, $item7, $item8, $item9, $item10);
    // 產生亂數資料
    $data = array($current_time); // 先把時間放進來
    for ($i = 0; $i < 10; $i++) { // 產生 10 筆亂數
        $random_number = mt_rand(1, 999);
        array_push($data, $random_number);
    }
    // 資料空間
    $datas = array();
    array_push($datas, $data);

    foreach ($datas as $record) { // 讀取 data 中的每筆資料
        // 比對 record 的資料，分別指派變數
        list($time, $item1, $item2, $item3, $item4, $item5, $item6, $item7, $item8, $item9, $item10) = $record;
        // 使用 prepared statement 一次插入資料
        $join->execute();
    }
    // 關閉 prepared statement
    $join->close();
    // 關閉資料庫連線
    $connect->close();
}


// // 刪除資料表
// $drop_table = "DROP TABLE IF EXISTS db_test";
// if ($connect->query($drop_table) === TRUE) {
//     echo "删除成功<br>";
// } else {
//     echo "錯誤: " . $connect->error . "<br>";
// }

// // 關閉資料庫連線
// $connect->close();