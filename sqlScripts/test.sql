CREATE DATABASE IF NOT EXISTS `test_db` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `test_db`;

CREATE TABLE IF NOT EXISTS accounts111 (
  id int(11) NOT NULL AUTO_INCREMENT,
  username varchar(50) NOT NULL UNIQUE,
  password varchar(255) NOT NULL,
  email varchar(50) NOT NULL UNIQUE,
  fname varchar(50),
  lname varchar(50),
  PRIMARY KEY (id)
)ENGINE=InnoDB;

SELECT 1+1;
SELECT 1+2;

INSERT INTO accounts111 (username, password, email, fname, lname) 
VALUES ('admin', 'es0ap', 'admin@blah.com', 'eSOAP', 'administrator'),
('mbroderick11', 'dsfsdfsdfsd!', 'michael.broderick11@blah.ie', 'Michael', 'Broderick'),
('a', 'b', 'a@blah.com', 'eSOAP', 'administrator');

SELECT * FROM accounts111;