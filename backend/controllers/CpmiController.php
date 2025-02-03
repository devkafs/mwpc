<?php
require_once 'BaseController.php';
require_once __DIR__ . '/../models/Cpmi.php';

class CpmiController extends BaseController {
    private $cpmiModel;

    public function __construct() {
        $this->cpmiModel = new Cpmi();
    }

    public function index() {
        try {
            $cpmi = $this->cpmiModel->getAll();
            $this->jsonResponse($cpmi);
        } catch (Exception $e) {
            $this->errorResponse($e->getMessage());
        }
    }

    public function show($id) {
        try {
            $cpmi = $this->cpmiModel->getById($id);
            if (!$cpmi) {
                $this->errorResponse('CPMI not found', 404);
                return;
            }
            $this->jsonResponse($cpmi);
        } catch (Exception $e) {
            $this->errorResponse($e->getMessage());
        }
    }
}
?>