<?php
require_once 'BaseModel.php';

class Cpmi extends BaseModel {
    protected $table = 'cpmi';

    public function create($data) {
        $query = "INSERT INTO cpmi (name, passport_number, birth_date, address, phone, status) 
                 VALUES (?, ?, ?, ?, ?, ?)";
        $stmt = $this->conn->prepare($query);
        return $stmt->execute([
            $data['name'],
            $data['passport_number'],
            $data['birth_date'],
            $data['address'],
            $data['phone'],
            $data['status']
        ]);
    }

    public function update($id, $data) {
        $query = "UPDATE cpmi SET 
                 name = ?, 
                 passport_number = ?,
                 birth_date = ?,
                 address = ?,
                 phone = ?,
                 status = ?
                 WHERE id = ?";
        $stmt = $this->conn->prepare($query);
        return $stmt->execute([
            $data['name'],
            $data['passport_number'],
            $data['birth_date'],
            $data['address'],
            $data['phone'],
            $data['status'],
            $id
        ]);
    }
}
?>