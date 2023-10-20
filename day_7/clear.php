<?php
$data = array(
"upper" => 100,
"lower" => 0
);
// 將更新後資料轉換為 json 格式
$json_data = json_encode($data);
// 寫入檔案
$file = fopen("data.json", "w");
fwrite($file, $json_data);
// 關閉檔案
fclose($file);
?>