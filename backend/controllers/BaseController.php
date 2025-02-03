<?php
class BaseController {
    protected function jsonResponse($data, $status = 200) {
        header('Content-Type: application/json');
        http_response_code($status);
        echo json_encode($data);
    }

    protected function errorResponse($message, $status = 400) {
        $this->jsonResponse(['error' => $message], $status);
    }
}
?>