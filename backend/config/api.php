<?php
// API Configuration
define('GROQ_API_KEY', ''); // Groq AI API Key
define('WHATSAPP_API_KEY', ''); // WhatsApp Business API Key
define('SMTP_HOST', 'smtp.gmail.com');
define('SMTP_USERNAME', '');
define('SMTP_PASSWORD', '');
define('SMTP_PORT', 587);

class ApiConfig {
    public static function getGroqConfig() {
        return [
            'api_key' => GROQ_API_KEY,
            'base_url' => 'https://api.groq.com/v1'
        ];
    }

    public static function getWhatsAppConfig() {
        return [
            'api_key' => WHATSAPP_API_KEY,
            'base_url' => 'https://graph.facebook.com/v17.0'
        ];
    }

    public static function getSmtpConfig() {
        return [
            'host' => SMTP_HOST,
            'username' => SMTP_USERNAME,
            'password' => SMTP_PASSWORD,
            'port' => SMTP_PORT
        ];
    }
}
?>