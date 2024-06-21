create database member default character set utf8mb4 collate utf8mb4_unicode_ci;

show databases;

use member;

create table member (
	id varchar(20) primary key,
    name varchar(5) not null,
    age int,
    gender varchar(2) not null,
    email varchar(50),
    promotion varchar(2) default 'x'
);

create table user (
	id varchar(10) not null primary key,
    pw varchar(20) not null,
    name varchar(5) not null,
    gender ENUM('F', 'M', '' ) default'',
    birthday DATE not null,
    age int not null default 0

);

desc user;

drop table member;

show tables;

desc member;


Alter table member MODIFY COLUMN id varchar(10);
create database member default character set utf8mb4 collate utf8mb4_unicode_ci;

show databases;

use member;

create table member (
	id varchar(20) primary key,
    name varchar(5) not null,
    age int,
    gender varchar(2) not null,
    email varchar(50),
    promotion varchar(2) default 'x'
);
drop table member;

show tables;

desc member;


Alter table member MODIFY COLUMN id varchar(10);
Alter table member drop column age;
Alter table member add COLUMN interest VARCHAR(100);
Alter table member MODIFY COLUMN promotion VARCHAR(2) default 'x';