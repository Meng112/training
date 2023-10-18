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
            // echo "新增成功<br>";
        } else {
            echo "新增失敗: " . mysqli_error($connect) . "<br>";
        }
    } else {
        // echo "已經有此欄位了";
    }
}
// // 從 data.json 取得上下限值 (初始)
// // 路徑檔案名稱
// $path_file_name = "data.json";
// // 讀取檔案內容
// $data = file_get_contents($path_file_name);
// // 將 json 檔案轉回 php 格式
// $data = json_decode($data, true);
// // 取得上限值
// $upper_value = $data["upper"];
// // 取得下限值
// $lower_value = $data["lower"];

$upper_value;
$lower_value;
// 新增資料到欄位中
// 格式化時間
$current_time = date("H:i:s");
// SQL 插入資料值進欄位
$insert_query = "INSERT INTO db_test (Time, item1, item2, item3, item4, item5, item6, item7, item8, item9, item10) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
// 使用 prepared statement
if ($join = $connect->prepare($insert_query)) {
    // 連結參數、綁定參數 (資料型態 s: 字串, i: 整數)
    $join->bind_param("siiiiiiiiii", $time, $item1, $item2, $item3, $item4, $item5, $item6, $item7, $item8, $item9, $item10);

    // 是否有 POST 請求 (更新上下限值)
    if ($_SERVER["REQUEST_METHOD"] === "POST") { // 有 POST 請求
        echo "有";
        // 向 POST 請求原始資料
        $json_data = file_get_contents("php://input");
        // 將 json 轉換為 php 資料
        $data = json_decode($json_data, true);
        // 更新上限值
        $upper_value = $data["upper_limit"];
        // 更新下限值
        $lower_value = $data["lower_limit"];
        // 將更新後的資料寫入檔案
        // 更新後的資料
        // $data = array(
        //     "upper" => $upper_value,
        //     "lower" => $lower_value
        // );
        // // 將更新後資料轉換為 json 格式
        // $json_data = json_encode($data);
        // // 寫入檔案
        // $file = fopen($path_file_name, "w");
        // fwrite($file, $json_data);
        // // 關閉檔案
        // fclose($file);
    }
    echo $upper_value . "/" . $lower_value;
    // 產生亂數資料
    $data = array($current_time); // 先把時間放進來
    for ($i = 0; $i < 10; $i++) { // 產生 10 筆亂數
        $random_number = mt_rand($lower_value, $upper_value);
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