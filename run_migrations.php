<?php
// ============================================================
// One-time migration runner for cPanel/Namecheap environments
// Upload to public_html/whatsway/ and visit via browser ONCE.
// DELETE this file immediately after running!
// ============================================================

// --- CONFIGURATION ---
$db_host = 'localhost';
$db_name = 'lxianbym_whatsway';
$db_user = 'lxianbym_salebot';
$db_pass = '#A0103589653a#';
// ----------------------

set_time_limit(300); // allow up to 5 minutes

$conn = pg_connect("host=$db_host dbname=$db_name user=$db_user password=$db_pass");

if (!$conn) {
    // Try with lxianbym_info user as fallback
    $db_user2 = 'lxianbym_info';
    $db_pass2 = '07JXA8Rn.(Ry';
    $conn = pg_connect("host=$db_host dbname=$db_name user=$db_user2 password=$db_pass2");
    if (!$conn) {
        die('<h1 style="color:red">❌ Could not connect to PostgreSQL. Check credentials.</h1><p>' . pg_last_error() . '</p>');
    }
    echo '<p style="color:orange">⚠️ Connected with fallback user: ' . $db_user2 . '</p>';
} else {
    echo '<p style="color:green">✅ Connected as: ' . $db_user . '</p>';
}

$sql_file = __DIR__ . '/all_migrations_clean.sql';
if (!file_exists($sql_file)) {
    die('<h1 style="color:red">❌ Migration file not found: ' . $sql_file . '</h1>');
}

$sql = file_get_contents($sql_file);

// Split on semicolons at end of line, keeping multi-line statements intact
$statements = array_filter(
    array_map('trim', preg_split('/;\s*\n/', $sql)),
    fn($s) => !empty($s)
);

$total = count($statements);
$success = 0;
$errors = [];

echo "<h2>Running $total SQL statements...</h2><pre style='font-family:monospace;font-size:13px'>";
flush();

foreach ($statements as $i => $stmt) {
    $stmt = trim($stmt);
    if (empty($stmt)) continue;

    $result = @pg_query($conn, $stmt);
    if ($result === false) {
        $err = pg_last_error($conn);
        // Ignore "already exists" errors gracefully
        if (strpos($err, 'already exists') !== false || strpos($err, 'duplicate') !== false) {
            echo "[SKIP " . ($i+1) . "] Already exists — skipped\n";
        } else {
            $errors[] = "[ERROR " . ($i+1) . "] " . $err . "\nSQL: " . substr($stmt, 0, 100) . "...\n";
            echo "<span style='color:red'>[ERROR " . ($i+1) . "] " . htmlspecialchars($err) . "</span>\n";
        }
    } else {
        $success++;
        echo "[OK " . ($i+1) . "/" . $total . "]\n";
    }
    flush();
}

pg_close($conn);

echo "</pre>";
echo "<hr>";
echo "<h2 style='color:" . ($success > 0 ? 'green' : 'red') . "'>✅ Done: $success/" . $total . " statements executed.</h2>";

if (!empty($errors)) {
    echo "<h3 style='color:red'>⚠️ " . count($errors) . " Errors:</h3><pre style='color:red'>";
    echo htmlspecialchars(implode("\n", $errors));
    echo "</pre>";
}

echo "<p style='color:red'><strong>⚠️ IMPORTANT: Delete this file (run_migrations.php) from your server immediately after running!</strong></p>";
?>
