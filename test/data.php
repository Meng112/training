<?php
$data = array(
    "name" => "John",
    "age" => 30,
    "city" => "New York"
);

// 将 PHP 数组编码为 JSON 字符串
$jsonData = json_encode($data);

// 指定 JSON 文件的路径
$filename = "data.json";

// 打开文件以进行写入，如果文件不存在则创建
$handle = fopen($filename, "w");

if ($handle) {
    // 写入 JSON 数据到文件
    if (fwrite($handle, $jsonData) !== false) {
        echo "JSON 数据已成功写入文件。";
        fclose($handle); // 关闭文件句柄
    } else {
        echo "写入文件时出错。";
    }
} else {
    echo "无法打开文件以进行写入。";
}
// 文件路径
$filename = "data.json";

// 读取文件内容
$jsonData = file_get_contents($filename);

// 解码 JSON 数据
$data = json_decode($jsonData, true);

if ($data !== null) {
    // JSON 解码成功
    echo $data["name"];
} else {
    // JSON 解码失败
    echo "JSON 解码失败";
}





?>