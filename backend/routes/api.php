<?php
class Router {
    private $routes = [];

    public function get($path, $callback) {
        $this->routes['GET'][$path] = $callback;
    }

    public function post($path, $callback) {
        $this->routes['POST'][$path] = $callback;
    }

    public function put($path, $callback) {
        $this->routes['PUT'][$path] = $callback;
    }

    public function delete($path, $callback) {
        $this->routes['DELETE'][$path] = $callback;
    }

    public function handle($method, $uri) {
        if (isset($this->routes[$method][$uri])) {
            $callback = $this->routes[$method][$uri];
            call_user_func($callback);
        } else {
            header("HTTP/1.0 404 Not Found");
            echo json_encode(['error' => 'Route not found']);
        }
    }
}

$router = new Router();

// CPMI Routes
$router->get('/api/cpmi', function() {
    require_once __DIR__ . '/../controllers/CpmiController.php';
    $controller = new CpmiController();
    $controller->index();
});

$router->get('/api/cpmi/{id}', function($id) {
    require_once __DIR__ . '/../controllers/CpmiController.php';
    $controller = new CpmiController();
    $controller->show($id);
});

$router->post('/api/cpmi', function() {
    require_once __DIR__ . '/../controllers/CpmiController.php';
    $controller = new CpmiController();
    $controller->create();
});

// Handle the request
$method = $_SERVER['REQUEST_METHOD'];
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$router->handle($method, $uri);
?>