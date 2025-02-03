<?php
// System Settings Configuration
class Settings {
    private static $default_settings = [
        'system_name' => 'MWPC System',
        'company_name' => 'Your Company',
        'timezone' => 'Asia/Jakarta',
        'date_format' => 'Y-m-d',
        'time_format' => 'H:i:s',
        'currency' => 'IDR',
        'language' => 'id',
        'theme' => 'light',
        'logo_path' => '/assets/images/logo.png',
        'favicon_path' => '/assets/images/favicon.ico'
    ];

    public static function get($key) {
        return self::$default_settings[$key] ?? null;
    }

    public static function getAll() {
        return self::$default_settings;
    }
}
?>