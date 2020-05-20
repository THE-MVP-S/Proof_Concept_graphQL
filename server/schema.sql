DROP DATABASE IF EXISTS mvps;

CREATE DATABASE mvps;


USE mvps;


CREATE TABLE employee (
    id INT AUTO_INCREMENT,
    first_name TEXT,
    last_name TEXT,
    date  TEXT,
    city, TEXT,
    state TEXT,
    position_id NUMBER
)


CREATE TABLE position (
    id INT AUTO_INCREMENT,
    title TEXT,
    department TEXT,
    description TEXT,
    salary NUMBER

)


CREATE TABLE department (
    id INT AUTO_INCREMENT,
    electronics TEXT,
    automotive TEXT,
    sporting_good, TEXT,

)
