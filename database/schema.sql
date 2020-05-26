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
    department_id NUMBER
)


CREATE TABLE position (
    id INT AUTO_INCREMENT,
    title TEXT,
    department TEXT,
    description TEXT,
    salary NUMBER
    department_id NUMBER

)


CREATE TABLE department (
    id INT AUTO_INCREMENT,
    department_id NUMBER

)

INSERT INTO employee (first_name, last_name, date, city,  state, department_id) VALUES ('Ray', 'Dunning', 'May 21st', 'Killeen', 'Texas', 1);
INSERT INTO employee (first_name, last_name, date, city,  state, department_id) VALUES ('Zach', 'Yusuf', 'Jun 3rd', 'Austin', 'Texas', 2);
INSERT INTO employee (first_name, last_name, date, city,  state, department_id) VALUES ('Martin', 'Ramos', 'April 21st', 'Killeen', 'Texas', 3);
INSERT INTO employee (first_name, last_name, date, city,  state, department_id) VALUES ('Aaron', 'Evans', 'April 1st', 'Killeen', 'Texas', 2);
INSERT INTO employee (first_name, last_name, date, city,  state, department_id) VALUES ('Josh', 'Halsey', 'June 5th', 'Killeen', 'Texas', 1);

INSERT INTO position (title, department, description, salary, department_id) VALUES ('Store associate','electronics','assists the elecronics cumstomers', '$45,000', 1);
INSERT INTO position (title, department, description, salary, department_id) VALUES ('Cashier','automotive','assists the elecronics cumstomers', '$90,000', 2);
INSERT INTO position (title, department, description, salary, department_id) VALUES ('Cashier','sporting goods','Checks out the customer', '$24,000', 3);
INSERT INTO position (title, department, description, salary, department_id) VALUES ('Store associate','automotive','Handles the customer returns', '$31,000', 2);
INSERT INTO position (title, department, description, salary, department_id) VALUES ('Store associate','electronics','Stocks shevles and assists customers', '$21,000', 1);

INSERT INTO department (department_id) VALUES (1);
INSERT INTO department (department_id) VALUES (2);
INSERT INTO department (department_id) VALUES (3);



