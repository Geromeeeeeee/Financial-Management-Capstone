<?php
require_once '../db_connect.php';
require_once '../service/menu.php';

$menu = new Menu($pdo);

if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $data = json_decode(file_get_contents("php://input"), true);
   
    $name = $data['item_name'];
    $cat = $data['item_category'];
    $price = $data['item_price'];

    $result = $menu->addItem($name, $cat, $price);

    if($result){
        echo json_encode([
            'stat' => 'success',
            'msg' => 'Item Added'
        ]);
    } else {
        echo json_encode([
            'stat' => 'fail',
            'msg' => 'Item Exists'
        ]);
    }
    
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET'){
    $result = $menu->getAll();

    echo json_encode($result);
}
?>