CREATE USER 'API'@'localhost' IDENTIFIED BY '';
GRANT ALL PRIVILEGES ON agimplant. * TO 'API'@'localhost';
FLUSH PRIVILEGES;
ALTER USER 'API'@'localhost' IDENTIFIED WITH mysql_native_password BY ''