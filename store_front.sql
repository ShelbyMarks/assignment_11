DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_title VARCHAR(45) NULL,
  dept_title VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_title, dept_title, price, stock_quantity)
VALUES ("Keyboard","Tech", 25, 10);

INSERT INTO products (product_title, dept_title, price, stock_quantity)
VALUES ("Headphones","Tech", 30, 20);

INSERT INTO products (product_title, dept_title, price, stock_quantity)
VALUES ("Wallet","Apparel", 50, 5);

INSERT INTO products (product_title, dept_title, price, stock_quantity)
VALUES ("Jeans","Apparel", 40, 60);

INSERT INTO products (product_title, dept_title, price, stock_quantity)
VALUES ("Screwdriver","Hardware", 10, 30);

INSERT INTO products (product_title, dept_title, price, stock_quantity)
VALUES ("Drill","Hardware", 100, 10);

INSERT INTO products (product_title, dept_title, price, stock_quantity)
VALUES ("Advil","Pharmacy", 22, 50);

INSERT INTO products (product_title, dept_title, price, stock_quantity)
VALUES ("Allegra","Pharmacy", 27, 45);

INSERT INTO products (product_title, dept_title, price, stock_quantity)
VALUES ("Carseat","Auto", 150, 15);

INSERT INTO products (product_title, dept_title, price, stock_quantity)
VALUES ("Windshield Wipers","Auto", 45, 5);
