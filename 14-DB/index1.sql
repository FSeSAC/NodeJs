-- 데이터베이스: 데이터의 집합
-- DBMS: Database Management System, 데이터베이스를 운영/관리하는 프로그램
	-- ex. MySQL
-- SQL: 데이터베이스를 구축, 관리하고 활용하기 위해 사용하는 언어
-- 참고) 스키마 == 데이터베이스

-- DDL (Data Definition Language)
-- : DB, table을 `정의`하는 언어

-- 1. DB 생성
create database codingon default character set utf8mb4 collate utf8mb4_unicode_ci;

-- 2. DB 목록
show databases;

-- 3. DB 사용 선언
use codingon;

-- 4. DB 삭제
drop database codingon;


-- [테이블] 관련 명령어
-- <제약 조건>
-- not null: null 허용 x, 필수로 값 존재
-- auto_increment: 자동 숫자 증가
-- primary key: 기본키(중복x, null x)
-- 		pk설정된 컬럼은 null값 x -> not null을 적지 않아도 자동으로 설정
-- default [xx]: 기본값
-- unique: 중복 허용x, null 허용 -> 한테이블에 여러 개 설정 가능
-- 

-- 1. 테이블 생성 
create table products (
	id int auto_increment primary key,
    name varchar(50) not null,
    model_number varchar(15) not null,
    series varchar(30) not null
);


-- 2. 테이블 목록 확인
show tables;

-- 3. 테이블 구조 확인
desc products;

-- 4. 테이블 삭제
drop table products;

-- 5. 테이블 수정
-- 이미 생성된 테이블에 데이터가 추가됬는데, 테이블 구조가 수정되야하는 경우

-- 5-1. 컬럼 수정
-- 		기존 테이터들은 new_column이 갑자기 생겼으니 null 할당
alter table products add new_column varchar(20);
-- 5-2. 컬럼 타입 수정
alter table products modify new_column int;
-- 5-3. 컬럼 삭제
alter table products drop new_column;




