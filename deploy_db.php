<?php
// Database deployment script for cPanel
// This script runs the full_schema.sql file directly to avoid memory/UI issues in phpPgAdmin.

$host = 'localhost';
$db   = 'whatsway';
$user = 'lxianbym_info';
$pass = '8Co8zI+sVZ34';
$port = '5432';

try {
    $dsn = "pgsql:host=$host;port=$port;dbname=$db";
    $pdo = new PDO($dsn, $user, $pass, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);

    echo "<html><body style='font-family:sans-serif; padding:40px; line-height:1.6;'>";
    echo "<h1 style='color:#333;'>Database Deployment</h1>";
    echo "<div style='background:#f4f4f4; padding:20px; border-radius:8px;'>";
    echo "Connecting to database... <span style='color:green;'>SUCCESS</span><br>";

    $sqlFile = __DIR__ . '/full_schema.sql';
    if (!file_exists($sqlFile)) {
        throw new Exception("SQL file not found at: <b>$sqlFile</b>. Please upload full_schema.sql to the same folder.");
    }

    $sql = file_get_contents($sqlFile);
    echo "Reading full_schema.sql... <span style='color:green;'>SUCCESS</span> (" . number_format(strlen($sql)) . " bytes)<br>";

    echo "Executing script... (this may take 10-20 seconds)<br>";
    
    // Split the SQL into statements by the drizzle delimiter if present, or run as one
    // But for simplicity and reliability in PHP, we execute the whole block.
    $pdo->exec($sql);

    echo "<h2 style='color:green;'>DB SYNC COMPLETED SUCCESSFULLY!</h2>";
    echo "<p style='color:#666;'>Your database tables have been created/updated.</p>";
    echo "</div>";
    echo "<p style='margin-top:20px; color:red; font-weight:bold;'>CRITICAL SECURITY WARNING: Delete this file (deploy_db.php) and full_schema.sql from your server now.</p>";
    echo "</body></html>";

} catch (Exception $e) {
    echo "<html><body style='font-family:sans-serif; padding:40px;'>";
    echo "<h2 style='color:red;'>DEPLOYMENT FAILED</h2>";
    echo "<div style='background:#fff0f0; padding:20px; border:1px solid #ffcccc;'>";
    echo "Error: " . htmlspecialchars($e->getMessage());
    echo "</div>";
    echo "</body></html>";
}
