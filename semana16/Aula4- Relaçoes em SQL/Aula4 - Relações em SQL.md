### Exercício 1

## a) 
Chava estrangeira (Foreigh Key) serve para relacionar tabelas, pega os elementos de uma para outra.

## b) 
``
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
    MOVIE_id VARCHAR(255),
    FOREIGN KEY (MOVIE_id) REFERENCES MOVIE(id)
);

ALTER TABLE Rating ADD rate INT NOT NULL;

INSERT INTO Rating(id, comment, rate, MOVIE_id)
VALUES("003", "É engraçado", 10, "003"); 

SELECT * FROM Rating;
``
## c)
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`sagan_marina_db`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`MOVIE_id`) REFERENCES `MOVIE` (`id`))

A chave não tem acesso a essa informação na outra tabela. 

## d) 
`` ALTER TABLE MOVIE DROP COLUMN rating;``

## e) 
 Error Code: 1175. You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column. Cannot use range access on index 'PRIMARY' due to type or collation conversion on field 'id' To disable safe mode, toggle the option in Preferences -> SQL Editor and reconnect.
 
 Não entendi o erro (?)
 
 ### Exercício 2
 
 ## a) 
  A tabela tem duas colunas que tem referências(pelo id) de outras duas tabelas (MOVIE E ACTOR), e a chave as relaciona nesta tabela, apresentando as informações.
  
  ## b) 
  `` INSERT INTO MovieCast(movie_id, actor_id) 
VALUES("004", "003");``

## c) 
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`sagan_marina_db`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `MOVIE` (`id`))

## d)
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`sagan_marina_db`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `ACTOR` (`id`))

Para deletar um item devemos detelar todas as referências. 

### Exercício 3

## a) 
Mostra a referência de onde está pegando as informações para o JOIN.
## b)

``
SELECT m.id as movie_id, m.name as movie_name, r.rate as rating FROM MOVIE m
INNER JOIN Rating ON m.id = Rating.MOVIE_id;
``

Certo --->
``
SELECT m.id as movie_id, r.rate as rating FROM MOVIE m
INNER JOIN Rating r ON m.id = r.movie_id;
``

### Exercício 4

## a) 

`` 
SELECT m.id as movie_id, r.rate as rating FROM MOVIE m
LEFT JOIN Rating r ON m.id = r.movie_id;
``

certo --->
`` SELECT m.id as movie_id, m.title, r.rate as rating, r.comment as rating_comment FROM Movie m
LEFT JOIN Rating r ON m.id = r.movie_id;``

## b)
`` 
SELECT m.id as movie_id, m.name, mc.id as actor_id FROM MOVIE m
LEFT JOIN MovieCast mc ON mc.movie_id = m.id;
``

Certo --->

``
SELECT m.id as movie_id, m.title, mc.actor_id FROM Movie m
RIGHT JOIN MovieCast mc ON mc.movie_id = m.id;
``









