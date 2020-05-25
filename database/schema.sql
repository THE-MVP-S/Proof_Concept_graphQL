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

INSERT INTO employee (first_name, last_name, date, city,  state,  position_id) VALUES ('Ray', 'Dunning', 'May 21st', 'Killeen', 'Texas', 1);
INSERT INTO employee (first_name, last_name, date, city,  state,  position_id) VALUES ('Zach', 'Yusuf', 'Jun 3rd', 'Austin', 'Texas', 2);
INSERT INTO employee (first_name, last_name, date, city,  state,  position_id) VALUES ('Martin', 'Ramos', 'April 21st', 'Killeen', 'Texas', 3);
INSERT INTO employee (first_name, last_name, date, city,  state,  position_id) VALUES ('Aaron', 'Evans', 'April 1st', 'Killeen', 'Texas', 4);
INSERT INTO employee (first_name, last_name, date, city,  state,  position_id) VALUES ('Josh', 'Halsey', 'June 5th', 'Killeen', 'Texas', 5);

INSERT INTO position (title, department, description, salary) VALUES ('Sales Manager','Electronics','Oversees electronics sales staff', '$45,000');
INSERT INTO position (title, department, description, salary) VALUES ('Store Manager','All','Oversees all departments', '$90,000');
INSERT INTO position (title, department, description, salary) VALUES ('Cashier','Register','Checks out the customer', '$24,000');
INSERT INTO position (title, department, description, salary) VALUES ('Returns','Returns','Handles the customer returns', '$31,000');
INSERT INTO position (title, department, description, salary) VALUES ('Store associate','Warehouse','Stocks shevles and assists customers', '$21,000');

