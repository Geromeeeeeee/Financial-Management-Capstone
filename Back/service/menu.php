<?php
class Menu {
    private PDO $database;

    public function __construct(PDO $pdo)
    {
        $this->database = $pdo;
    }

    public function getAll(){
        $sql = "SELECT * FROM items";

        $statement = $this->database->prepare($sql);
        $statement->execute();

        return $statement->fetchAll(PDO::FETCH_ASSOC);
    }

    public function addItem($item_name, $item_cat, $item_price){
        $sql = "SELECT * FROM items WHERE item_name = :name";
        $statement = $this->database->prepare($sql);
        $statement->execute(['name'=>$item_name]);
        $result = $statement->fetchAll(PDO::FETCH_ASSOC);

        if($result){
            return false;
        } else {
            $insert = "INSERT INTO items (item_name, item_cat, item_price) VALUES (:name, :cat, :price)";
            $insert_stmt = $this->database->prepare($insert);
            $insert_stmt->execute(['name'=>$item_name, 'cat'=>$item_cat, 'price'=>$item_price]);
            return true;
        }
    }
}
?>