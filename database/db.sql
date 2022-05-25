-- Creando la base de datos

CREATE DATABASE crudnodejsmysql;

-- utilizando base de datos
use crudnodejsmysql;


-- creando tabla
CREATE TABLE customer (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    adress VARCHAR(100) NOT NULL,
    phone VARCHAR(15)
);

-- Mostrar tabla por medio del siguiente comando
SHOW TABLES;

-- como quedo la tabla
describe customer;