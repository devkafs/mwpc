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

    public function create() {
        try {
            $data = json_decode(file_get_contents('php://input'), true);
            
            if (!$data) {
                $this->errorResponse('Invalid input data', 400);
                return;
            }

            $required_fields = ['name', 'passport_number', 'birth_date', 'address', 'phone'];
            foreach ($required_fields as $field) {
                if (!isset($data[$field]) || empty($data[$field])) {
                    $this->errorResponse("Missing required field: {$field}", 400);
                    return;
                }
            }

            $data['status'] = 'registered';
            $success = $this->cpmiModel->create($data);

            if ($success) {
                $this->jsonResponse(['message' => 'CPMI registered successfully'], 201);
            } else {
                $this->errorResponse('Failed to register CPMI');
            }
        } catch (Exception $e) {
            $this->errorResponse($e->getMessage());
        }
    }
}
?>