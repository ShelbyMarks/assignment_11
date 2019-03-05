DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  item VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (item, price, quantity)
VALUES ("Keyboard", 25, 10);

INSERT INTO products (item, price, quantity)
VALUES ("Headphones", 30, 20);

INSERT INTO products (item, price, quantity)
VALUES ("Wallet", 50, 5);


