DROP DATABASE IF EXISTS `test-database`;


CREATE DATABASE IF NOT EXISTS `test-database`;


CREATE TABLE IF NOT EXISTS `test-database`.`users` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `password` VARCHAR(128) NOT NULL,
    `telephone` VARCHAR(30) NOT NULL,
    `document` VARCHAR(50) NOT NULL,
    `documentType` VARCHAR(50) NOT NULL,
    `nationality` VARCHAR(75) NOT NULL,
    `register` VARCHAR(20) NOT NULL,
    `roleType` ENUM('admin', 'master') NOT NULL,

    PRIMARY KEY (`id`),
    UNIQUE KEY (`email`)
);
