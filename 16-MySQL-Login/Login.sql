show databases;

create database Login default character set utf8mb4 collate utf8mb4_unicode_ci;

use Login;


create table user (
	id int primary key auto_increment,
    userid varchar(20) not null,
    pw varchar(20) not null,
    name varchar(10) not null
);

desc user;
show tables;

INSERT INTO user (userid, name, pw) VALUES ('sean', 'sean', '1234');

SELECT * FROM user;
