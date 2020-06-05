SELECT * FROM estados;


SELECT sigla, nome as 'Nome Estado' FROM estados WHERE regiao = 'Sul';


SELECT nome, regiao FROM estados;


SELECT nome, regiao, populacao FROM estados
WHERE populacao >= 10;


SELECT nome, regiao, populacao FROM estados
WHERE populacao >= 10
ORDER BY populacao DESC;