CREATE TABLE IF NOT EXISTS categories (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    slug VARCHAR(50) NOT NULL,
    imagePath VARCHAR(100),
    isActive TINYINT(1) NOT NULL,

    PRIMARY KEY (id),
    UNIQUE KEY (slug)
);



CREATE TABLE IF NOT EXISTS products (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(75) NOT NULL,
    price INT UNSIGNED NOT NULL,
    qtdStock INT UNSIGNED NOT NULL,
    categoryId INT UNSIGNED NOT NULL,
    imagePath VARCHAR(100),
    isActive TINYINT(1) NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (categoryId) REFERENCES categories (id)
);



CREATE TABLE IF NOT EXISTS prodscharacts (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    label VARCHAR(50) NOT NULL,

    PRIMARY KEY (id),
    UNIQUE KEY (label)
);



CREATE TABLE IF NOT EXISTS prods_prodscharacts (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    productdId INT UNSIGNED NOT NULL,
    prodcharactId INT UNSIGNED NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (productdId) REFERENCES products (id),
    FOREIGN KEY (prodcharactId) REFERENCES prodscharacts (id)
);



CREATE TABLE IF NOT EXISTS users (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(200) NOT NULL,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    privileges ENUM('master', 'admin', 'regular') NOT NULL,

    PRIMARY KEY (id)
);



CREATE TABLE IF NOT EXISTS address (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    local VARCHAR(200) NOT NULL,
    complement VARCHAR(50),
    number VARCHAR(20) NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    cep VARCHAR(20),
    userId INT UNSIGNED NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (userId) REFERENCES users (id)
);



CREATE TABLE IF NOT EXISTS orders (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    dateTime DATETIME NOT NULL,
    userId INT UNSIGNED NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (userId) REFERENCES users (id)
);



CREATE TABLE IF NOT EXISTS order_product (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    orderId INT UNSIGNED NOT NULL,
    productId INT UNSIGNED NOT NULL,
    productQtd INT UNSIGNED NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (orderId) REFERENCES orders (id),
    FOREIGN KEY (productId) REFERENCES products (id)
);