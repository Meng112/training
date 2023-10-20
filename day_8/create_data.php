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
$create_table = "CREATE TABLE  IF NOT EXISTS create_random (
    item float
)";
// 查詢 SQL 是否有剛剛創建的資料表
if (mysqli_query($connect, $create_table)) {
    echo "創建成功<br>";
} else { // 創建失敗，傳回錯誤訊息
    echo "創建失敗: " . mysqli_error($connect) . "<br>";
}

// 亂數最大最小值
$max = 1000;
$min = 0;
// 產生亂數資料 (範圍 0 ~ 1000，取小數第 1 位)
$random_number =number_format($min + mt_rand()/mt_getrandmax() * ($max - $min), 1);


// 新增資料到欄位中
// SQL 插入資料值進欄位
$insert_query = "INSERT INTO create_random  VALUES ($random_number)";
// 查詢資料是否成功
if ($connect -> query($insert_query) === true) {
    echo "資料新增成功<br>";
} else {
    echo "資料新增失敗<br>";
}

// 關閉資料庫連線
$connect->close();

// // 使用 prepared statement
// if ($join = $connect->prepare($insert_query)) {
//     // 連結參數、綁定參數 (資料型態 s: 字串, i: 整數)
//     $join->bind_param("siiiiiiiiii", $time, $item1, $item2, $item3, $item4, $item5, $item6, $item7, $item8, $item9, $item10);

//     // 是否有 POST 請求 (更新上下限值)
//     if ($_SERVER["REQUEST_METHOD"] === "POST") { // 有 POST 請求
//         echo "有";
//         // 向 POST 請求原始資料
//         $json_data = file_get_contents("php://input");
//         // 將 json 轉換為 php 資料
//         $data = json_decode($json_data, true);
//         // 更新上限值
//         $upper_value = $data["upper_limit"];
//         // 更新下限值
//         $lower_value = $data["lower_limit"];
//         // 將更新後的資料寫入檔案
//         // 更新後的資料
//         // $data = array(
//         //     "upper" => $upper_value,
//         //     "lower" => $lower_value
//         // );
//         // // 將更新後資料轉換為 json 格式
//         // $json_data = json_encode($data);
//         // // 寫入檔案
//         // $file = fopen($path_file_name, "w");
//         // fwrite($file, $json_data);
//         // // 關閉檔案
//         // fclose($file);
//     }
//     // 產生亂數資料
//     $data = array($current_time); // 先把時間放進來
//     for ($i = 0; $i < 10; $i++) { // 產生 10 筆亂數
//         $random_number = mt_rand($lower_value, $upper_value);
//         array_push($data, $random_number);
//     }
//     // 資料空間
//     $datas = array();
//     array_push($datas, $data);

//     foreach ($datas as $record) { // 讀取 data 中的每筆資料
//         // 比對 record 的資料，分別指派變數
//         list($time, $item1, $item2, $item3, $item4, $item5, $item6, $item7, $item8, $item9, $item10) = $record;
//         // 使用 prepared statement 一次插入資料
//         $join->execute();
//     }
//     // 關閉 prepared statement
//     $join->close();
//     // 關閉資料庫連線
//     $connect->close();
// }

// // // 刪除資料表
// // $drop_table = "DROP TABLE IF EXISTS db_test";
// // if ($connect->query($drop_table) === TRUE) {
// //     echo "删除成功<br>";
// // } else {
// //     echo "錯誤: " . $connect->error . "<br>";
// // }

// // // 關閉資料庫連線
// // $connect->close();
?>