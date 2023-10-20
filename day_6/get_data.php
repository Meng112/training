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
    die("連接失敗: " . $connect->connect_error . "<br>"); // dio() 停止執行，並顯示具體錯誤訊息
}
echo "連接成功<br>";

// 創建 SQL 資料表
// 資料庫名稱: db_test
// 欄位: id: (自動賦值), name, email
$createTableSQL = "CREATE TABLE  IF NOT EXISTS db_test (
    Time INT AUTO_INCREMENT PRIMARY KEY
)";
// 查詢 SQL 是否有剛剛創建的資料表
if (mysqli_query($connect, $createTableSQL)) {
    echo "創建成功<br>";
} else { // 創建失敗，傳回錯誤訊息
    echo "創建失敗: " . mysqli_error($connect) . "<br>";
}

// 刪除  欄位名為  時間欄位
$drop_column = "ALTER TABLE db_test DROP COLUMN name";
// 查詢 SQL 是否有更改欄位成功
if (mysqli_query($connect, $drop_column)) {
    echo "刪除成功<br>";
} else {
    echo "刪除失敗: " . mysqli_error($connect) ."<br>";
}

// 關閉資料庫連線
$connect->close();