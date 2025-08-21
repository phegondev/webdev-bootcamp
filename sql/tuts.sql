--CREATE DATABASE
CREATE DATABASE user_db;


--CREATE TABLE STATEMENT

CREATE TABLE `user_db`.`users` (
 `id` INT NOT NULL AUTO_INCREMENT,
 `name` VARCHAR(45) NOT NULL,
 `age` INT NOT NULL,
 `is_student` TINYINT NOT NULL,
 `course` VARCHAR(45) NULL,
 PRIMARY KEY (`id`));




--INSERT STATEMENT


INSERT INTO `user_db`.`users` (`name`, `age`, `is_student`, `course`)
VALUES ('Alice Johnson', 21, 1, 'Computer Science');




INSERT INTO `user_db`.`users` (`name`, `age`, `is_student`, `course`)
VALUES ('Bob Smith', 30, 0, NULL);




-- RETREIVE DATA
--SELECT STATEMENT
SELECT * FROM `user_db`.`users`;


SELECT `name`, `age` from `users_db`.`users`;


--SORTING
SELECT * FROM `user_db`.`users`
ORDER BY `is_student` DESC, `age` ASC;




-- LIMITING RESULT
SELECT * FROM `users_db`.`users`
LIMIT 10;


select * from users_db.users order by age desc LIMIT 5;




-- UPDATING RESULT
UPDATE `users_db`.`users`
SET `age` = 10, `name` = 'Jeff'
WHERE `id` = 1;




-- DELETING DATA
DELETE FROM `users_db`.`users`
WHERE `id` = 20;




-- FILTERING DATA
SELECT * FROM `users_db`.`users`
WHERE `is_student` = 3;




select * from users_db.users where `course` = 'Engineering'
and `is_student` = 0
order by id desc;




-- Wildcard Search
SELECT * FROM `users_db`.`users`
WHERE `name` LIKE '%sam%';





-- FUNCTIONs Using COUNT() Function
SELECT COUNT(*) AS total_users
FROM `users_db`.`users`;




-- Using SUM() Function
SELECT SUM(`age`) AS total_age
FROM `users_db`.`users`;




-- Using AVG() Function
SELECT AVG(`age`) AS avg_student_age
FROM `users_db`.`users`
WHERE `is_student` = 1;





--DELETE DATABASE
DROP DATABASE user_db;

