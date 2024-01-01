module.exports = {
    "up": `CREATE TABLE IF NOT EXISTS test(
        id INT AUTO_INCREMENT PRIMARY KEY,
        title varchar(225) NULL,
        created_at timestamp DEFAULT CURRENT_TIMESTAMP,
        updated_at timestamp ON UPDATE CURRENT_TIMESTAMP
    )`,
    "down": "DROP TABLE IF EXISTS test"
}