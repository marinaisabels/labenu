### Exercício 1
## a) 
``ALTER TABLE Actors DROP COLUMN salary;``
Esse comando altera a tabela ACTOR removendo a coluna SALARY.

## b) 
`` ALTER TABLE Actors CHANGE gender sex VARCHAR(6);`` 
Esse comando altera a tabela ACTOR modificando a coluna GENDER

## c) 

`` ALTER TABLE Actors CHANGE gender gender VARCHAR(255);``
Esse comando altera a tabela ACTORS para modificar a coluna Gender e a quantidade de characteres que ele deve receber.

## d)
`` ALTER TABLE ACTOR CHANGE gender gender VARCHAR(100);`` 

### Exercício 2 

## a) 
``UPDATE ACTOR 
SET name = "Moacyr Franco", 
birth_date = "2020/05/05"
WHERE id = "003";``


## b) 
 ``UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";``

## C) 

`` 
UPDATE ACTOR SET name = "Moacyr Franco",
birth_date = "2020-05-05", 
salary = 60000, 
gender = "male" 
WHERE id = "005";
``

## d) 
`` 
UPDATE ACTOR SET id = "012"
WHERE id = "010";``

0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
Nada foi atualizado.

### Exercício 3

## a) 
``
DELETE FROM ACTOR WHERE name = "Fernanda Montenegro";``

## b) 
``DELETE FROM ACTOR WHERE gender = "male" AND salary > "1000000";``

### Exercício 4

## a) 
`` SELECT MAX(salary) FROM ACTOR;``
## b) 
`` SELECT MIN(salary) FROM ACTOR WHERE gender = "female";``
## c)
`` SELECT COUNT(*) FROM ACTOR WHERE gender = "female";``

## d) 
`` SELECT SUM(salary) FROM ACTOR;``
### Exercício 5 

## a)
A query retornou a quantidade de atores e atrizes.

## b) 
`` SELECT name, id
FROM ACTOR
ORDER BY name, id DESC;``

## c)
`` SELECT *
FROM ACTOR
ORDER BY salary;
``

## d) 
`` 
SELECT *
FROM ACTOR
ORDER BY salary
LIMIT 3;
``

## e) 
`` SELECT AVG(salary), gender
FROM ACTOR
GROUP BY gender;
``

### Exercício 6 

## a) 
``
ALTER TABLE MOVIE 
ADD playing_limit_date VARCHAR(255);``

## b) 
``
ALTER TABLE MOVIE 
CHANGE rating 
rating FLOAT;
``
## c) 
`` UPDATE MOVIE 
SET playing_limit_date = "2020-05-06"
WHERE id = "001";
``

`` 
UPDATE MOVIE 
SET playing_limit_date = "2020-05-01"
WHERE id = "002";``

## d) 
``
DELETE FROM MOVIE WHERE id = "002";
``

`` 
DELETE FROM MOVIE WHERE id = "001";
``

### Exercício 7 

## a) 
``
SELECT COUNT(*) FROM MOVIE WHERE rating > 7.5;``

## b)
``
SELECT AVG(rating) FROM MOVIE; ``

## c) 
``
SELECT COUNT(*) FROM MOVIE WHERE playing_limit_date > CURDATE();
``
0
## d) 
``
SELECT COUNT(*) FROM MOVIE WHERE release_date < CURDATE();
``
2
## e) 
`` 
SELECT MAX(rating) FROM MOVIE;
``
8 

## f)
``
SELECT MIN(rating) FROM MOVIE; ``
8 


### Exercício 8 
## a) 
``
SELECT * FROM MOVIE Order By name ASC;``

## b) 
``
SELECT * FROM MOVIE Order By name DESC
LIMIT 5;
``

## c) 
``SELECT * FROM Movie 
WHERE release_date < CURDATE() 
ORDER BY release_date DESC 
LIMIT 3; ``

## d) 
``
SELECT * FROM MOVIE Order By rating DESC
LIMIT 3;
``






