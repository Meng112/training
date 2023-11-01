<?php
// 解析 config.ini 文檔
$ini = parse_ini_file("config.ini", true);
// 將 ini 陣列轉換成 json
$json_ini = json_encode($ini);
// 設置標頭
header("Content-Type: application/json");
// 回傳資料 (json 格式)
echo $json_ini;
?>