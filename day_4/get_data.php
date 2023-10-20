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
$table_name = "efficiency";

// 執行 SQL 查詢
$sql = "SELECT * FROM $table_name";
// 執行結果
$result = $connect->query($sql);

if (!$result) { // 如果執行結果 result 失敗
    die("查詢失敗：" . $connect->error); // 停止執行，並顯示具體錯誤訊息
}
$datas = array(); // 分組 row 的空間
if ($result->num_rows > 0) { // 如果有資料的話
    while ($row = $result->fetch_assoc()) { // 當還有資料時，將查詢結果 (result) 以列 (row) 的方式分段 (fetch_assoc())
        // // 取出各欄位的資料
        // $mid = $row["mid"];
        // $line = $row["line"];
        // $machine_name = $row["MachineName"];
        // $log_time = $row['logTime'];
        // $iane_no = $row['laneNo'];
        // $cnt = $row['cnt'];
        // $lot_name = $row['lot_name'];
        // $avg_unt_time = $row['avgUnitTime'];
        // $avg_equtime = $row['avgEquTime'];
        // $rolling = $row['rollingEff'];
        // 將各資料新增至 row 的儲存空間 (data)
        // array_push($data, $mid, $line, $machine_name, $log_time, $iane_no, $cnt, $lot_name, $avg_unt_time, $avg_equtime, $rolling);
        $data = array(); // 儲存 row 的空間
        // 取出各欄位的資料
        $log_time = substr($row['logTime'], 10, -4); // 時間 (取中間的字串)
        $avg_unt_time = $row['avgUnitTime']; // 平均單位工時
        $avg_equtime = $row['avgEquTime']; // 平均等效工時
        $rolling = $row['rollingEff']; // 滾動效率
        // 將各資料新增至 row 的儲存空間 (data)
        array_push($data, $log_time, $avg_unt_time, $avg_equtime, $rolling);
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