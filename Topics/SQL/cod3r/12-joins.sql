SELECT * FROM estados est, cidades cid; -- Produto cartesiano


SELECT * FROM estados est, cidades cid
WHERE est.id = cid.estado_id;

SELECT est.nome, regiao, cid.nome FROM estados est, cidades cid
WHERE est.id = cid.estado_id;

SELECT 
    est.nome AS Estado,
    regiao AS Regiao,
    cid.nome AS Cidade 
FROM estados est, cidades cid
WHERE est.id = cid.estado_id;


SELECT 
    est.nome AS Estado,
    regiao AS Regiao,
    cid.nome AS Cidade 
FROM estados est
INNER JOIN cidades cid ON est.id = cid.estado_id;