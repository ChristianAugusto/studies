DROP DATABASE IF EXISTS `burgerking`;


CREATE DATABASE IF NOT EXISTS `burgerking`;


CREATE TABLE IF NOT EXISTS `burgerking`.`categories` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(20) NOT NULL,
  `slug` VARCHAR(20) NOT NULL,
  `imagesPath` VARCHAR(100),
  `isActive` TINYINT(1) NOT NULL,
  `releaseDate` DATETIME NOT NULL,

  PRIMARY KEY (`id`),
  UNIQUE KEY (`slug`)
);


CREATE TABLE IF NOT EXISTS `burgerking`.`products` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(75) NOT NULL,
  `oldPrice` INT UNSIGNED NOT NULL,
  `price` INT UNSIGNED NOT NULL,
  `qtdStock` INT UNSIGNED NOT NULL,
  `imagesPath` VARCHAR(100) NOT NULL,
  `isActive` TINYINT(1) NOT NULL,
  `categoryId` INT UNSIGNED NOT NULL,
  `releaseDate` DATETIME NOT NULL,

  PRIMARY KEY (`id`),
  FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`)
);


CREATE TABLE IF NOT EXISTS `burgerking`.`products_characts` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `label` VARCHAR(20) NOT NULL,

  PRIMARY KEY (`id`),
  UNIQUE KEY (`label`)
);


CREATE TABLE IF NOT EXISTS `burgerking`.`product_characts` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `productId` INT UNSIGNED NOT NULL,
  `charactId` INT UNSIGNED NOT NULL,

  PRIMARY KEY (`id`),
  FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  FOREIGN KEY (`charactId`) REFERENCES `products_characts` (`id`)
);


CREATE TABLE IF NOT EXISTS `burgerking`.`users` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `password` VARCHAR(50) NOT NULL,
  `privileges` ENUM('master', 'admin', 'regular') NOT NULL,
  `registerDate` DATETIME NOT NULL,

  PRIMARY KEY (`id`),
  UNIQUE KEY (`email`)
);


CREATE TABLE IF NOT EXISTS `burgerking`.`clients` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `password` VARCHAR(50) NOT NULL,
  `cpf` VARCHAR(20) NOT NULL,
  `birthDate` DATETIME NOT NULL,
  `registerDate` DATETIME NOT NULL,

  PRIMARY KEY (`id`),
  UNIQUE KEY (`email`)
);


CREATE TABLE IF NOT EXISTS `burgerking`.`address` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `address` VARCHAR(150) NOT NULL,
  `city` VARCHAR(10) NOT NULL,
  `state` VARCHAR(10) NOT NULL,
  `country` VARCHAR(30) NOT NULL,
  `cep` VARCHAR(20) NOT NULL,
  `label` VARCHAR(20) NOT NULL,
  `clientId` INT UNSIGNED NOT NULL,

  PRIMARY KEY (`id`),
  FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`)
);