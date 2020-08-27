### Exercicio 1
## a) 
O comando ``varchar`` guarda as strings em characteres e estipula a quantidade de letras.
O comando ``date`` apresenta datas no formato (YYYY-MM-DD)
O comando ``NOT NULL`` não tem restrição  

### b)

``SHOW DATABASE`` mostra uma tabela de informações do meu schema
``SHOW TABLE`` mostra a tabela que eu fiz "ACTOR"

### c)
Apresentou o erro:

"Error Code: 1064. You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'ACTOR' at line 1"

### Exercício 2 
## a) 
``INSERT INTO ACTOR (id, name, salary, birth_date, gender)
  VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);``

## b)

Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
Erro de entrada duplicada com a chave. 

## c)
Error Code: 1136. Column count doesn't match value count at row 1
A quantidade de valores não corresponde a quantidade de colunas.
deveria ser assim:

``
INSERT INTO ACTOR (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);``

Resposta: 1 row(s) affected

## d)
Error Code: 1364. Field 'name' doesn't have a default value
O campo nome não tem um valor padrão

``INSERT INTO ACTOR (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "José",
  400000,
  "1949-04-18", 
  "male"
);``

Resposta: 1 row(s) affected

## e)
Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
Valor incorreto da data: '1950' para a coluna 'data_de_natalidade' na linha 1

``INSERT INTO ACTOR (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);``

Resposta: 1 row(s) affected

## f)
``
INSERT INTO ACTOR (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Najwa Nimri",
  719333.39,
  "1972-02-14", 
  "female"
);``

`` 
INSERT INTO ACTOR (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Roberto Enríquez",
  919333.39,
  "1968-01-20", 
  "male"
);
``
### Exercício 3 

## a) 
``
SELECT id, name, salary, birth_date, gender from ACTOR WHERE gender = "female";
``
## b) 
``
SELECT salary from ACTOR WHERE name = "Tony Ramos";
``

## c)
O resultado foi "null" para todos os valores.

## d)
``
SELECT id, name, salary from ACTOR WHERE salary < "500000";
``
## e)
Error Code: 1054. Unknown column 'nome' in 'field list'
A coluna desconhece o termo nome. 

``
SELECT id, name from ACTOR WHERE id = "002";
``

### Exercício 4 

## a) 
`` SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000``

É selecionado na tabela apenas os atores que tem a letra A ou J no nome e que recebem um salario maior que 300000.

## b) 
``
SELECT * FROM ACTOR WHERE name NOT LIKE "A%" AND salary > 350000; ``

## c)
``
SELECT * FROM Actor WHERE name LIKE "%g%" OR name LIKE "%G%";``

## d) 

`` 
SELECT * FROM Actor
WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%") AND salary BETWEEN 350000 AND 900000;
``
### Exercício 5

## a)
``
CREATE TABLE MOVIE (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL UNIQUE,
    synopis TEXT NOT NULL,
    release_date DATE NOT NULL,
	rating INT NOT NULL
);
``

## b) 
``
INSERT INTO MOVIE(id, name, synopis, release_date, rating)
VALUES("001",
	   "Se Eu Fosse Você",
       "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento.
       Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
       "2006/01/06",
       "7"
);
``

## c)

``
INSERT INTO MOVIE(id, name, synopis, release_date, rating)
VALUES("002",
	   "Doce de mãe",
       "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
       "2012/12/27",
       "10"
);
``

## d)
``
INSERT INTO MOVIE(id, name, synopis, release_date, rating)
VALUES("003",
	   "Dona Flor e seus Dois Maridos",
       "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
       "2017/11/02",
       "8"
);

``

## e)
`` 
INSERT INTO MOVIE(id, name, synopis, release_date, rating)
VALUES("004",
	   "Meu nome não é Jonny",
       "João Guilherme Estrella é um jovem da classe média que se torna o rei do tráfico de drogas da zona sul do Rio de Janeiro. O rapaz inteligente e adorado pelos pais passa a ser investigado pela polícia e enfrenta a dura realidade de um criminoso.",
       "2008/01/04",
       "8"
);
``
### Exercício 6 

## a) 
`` SELECT id, name, rating  FROM MOVIE WHERE id = "002";``

## b)
`` SELECT name  FROM MOVIE WHERE name = "Meu nome não é Jonny"; ``

## c) 
`` SELECT id, name, synopis FROM MOVIE WHERE rating > 7;``

### Exercício 7
## a) 
`` SELECT * FROM MOVIE WHERE name LIKE "%vida%";``
## b) 
`` SELECT * FROM MOVIE WHERE name LIKE "%TERMO DE BUSCA%" OR synopis LIKE "%TERMO DE BUSCA%";``

## c) 
`` SELECT * FROM MOVIE WHERE release_date < "2020/01/01";``

## d) 
`` SELECT * FROM MOVIE WHERE name  < "2020/01/01" AND (name LIKE "%TERMO DE BUSCA%" OR synopis LIKE "%TERMO DE BUSCA%") AND rating > 7;`` 















