<?php
$data = [10, 60, 80, "我好帥"];
// 將 data 陣列轉換成 json
$json_data = json_encode($data);
// 設置標頭
header("Content-Type: application/json");
// 回傳資料 (json 格式)
echo $json_data;
?>