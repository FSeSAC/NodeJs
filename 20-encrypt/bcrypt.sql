show databases;

create database bcrypt default character set utf8mb4 collate utf8mb4_unicode_ci;
 
use bcrypt;

create table member (
	id int primary key auto_increment,
    pw varchar(511) not null,
    name varchar(15) not null,
    userid varchar(15) not null
);

desc member;

-- 데이터 추가
insert into visitor values
	(null, '홍길동', '내가 왔다.'), 
    (null, '이찬혁', '으라차차');

select * from visitor;

-- user 계정 생성
create user 'user'@'%' identified by '1234'; -- 계정 추가
grant all privileges on *.* to 'user'@'%' with grant option; -- 새로운 계정에 권한 부여
flush privileges; -- 캐시 지우고 새로운 설정 적용

alter user 'user'@'%' identified with mysql_native_password by '1234'; -- 인증 방식 변경

select * from mysql.user; -- 계정 생성 확인




