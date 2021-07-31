CREATE DATABASE IF NOT EXISTS person;

USE person;

CREATE TABLE persona (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) DEFAULT NULL,
  apellido VARCHAR(45) DEFAULT NULL,
  edad INT(11) DEFAULT NULL,
  fecha_nacimiento INT(11) DEFAULT NULL,
  PRIMARY KEY(id)
);

DESCRIBE persona;

INSERT INTO persona values 
  (11, 'Jose','La', 20,2001),
  (22, 'Joe','Silva', 40,1981),
  (33, 'Edwar','Ramirez', 32,1990);

SELECT * FROM persona;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
