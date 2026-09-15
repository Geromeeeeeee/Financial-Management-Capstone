<?php

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, GET, PATCH, OPTIONS");
header("Content-Type: application/json");
header("Access-Control-Allow-Credentials: true");

$server = "localhost";
$username = "root";
$password = "";
$dbname = "finance_management";
$charset = "utf8mb4";

try {
    $dsn = "mysql:host=$server;dbname=$dbname;charset=$charset";
    $pdo = new PDO($dsn, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Connection Failed: ".$e->getMessage();
}
?>