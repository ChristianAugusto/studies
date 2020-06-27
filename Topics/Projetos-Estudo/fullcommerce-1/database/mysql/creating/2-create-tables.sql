CREATE TABLE IF NOT EXISTS burgerking.categories (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    slug VARCHAR(50) NOT NULL,
    image_path VARCHAR(100),

    PRIMARY KEY (id),
    UNIQUE KEY (name)
);


CREATE TABLE IF NOT EXISTS burgerking.products (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(75) NOT NULL,
    price INT UNSIGNED NOT NULL,
    qtd_stock INT UNSIGNED NOT NULL,
    category_id INT UNSIGNED NOT NULL,
    image_path VARCHAR(100),

    PRIMARY KEY (id),
    FOREIGN KEY (category_id) REFERENCES categories (id)
);


CREATE TABLE IF NOT EXISTS burgerking.users (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(200) NOT NULL,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    privileges ENUM('master', 'admin', 'regular') NOT NULL,

    PRIMARY KEY (id)
);


CREATE TABLE IF NOT EXISTS burgerking.address (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    local VARCHAR(200) NOT NULL,
    complement VARCHAR(50),
    number VARCHAR(20) NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    cep VARCHAR(20),
    user_id INT UNSIGNED NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users (id)
);


CREATE TABLE IF NOT EXISTS burgerking.orders (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    date_time DATETIME NOT NULL,
    user_id INT UNSIGNED NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users (id)
);


-- CREATE TABLE IF NOT EXISTS burgerking.order_user (
--     id INT UNSIGNED NOT NULL AUTO_INCREMENT,
--     order_id INT UNSIGNED NOT NULL,
--     user_id INT UNSIGNED NOT NULL,

--     PRIMARY KEY (id),
--     FOREIGN KEY (order_id) REFERENCES orders (id),
--     FOREIGN KEY (user_id) REFERENCES users (id)
-- );



CREATE TABLE IF NOT EXISTS burgerking.order_product (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    order_id INT UNSIGNED NOT NULL,
    product_id INT UNSIGNED NOT NULL,
    product_qtd INT UNSIGNED NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (order_id) REFERENCES orders (id),
    FOREIGN KEY (product_id) REFERENCES products (id)
);


-- CREATE TABLE IF NOT EXISTS burgerking.header_links (
--     id INT UNSIGNED NOT NULL AUTO_INCREMENT,
--     destination VARCHAR(50) NOT NULL,
--     target VARCHAR(10) NOT NULL,
--     text VARCHAR(50) NOT NULL,
--     rel VARCHAR(20),

--     PRIMARY KEY (id)
-- );