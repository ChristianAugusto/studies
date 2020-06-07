SELECT
    regiao AS 'Região',
    sum(populacao) AS Total
FROM estados
GROUP BY regiao
ORDER BY Total DESC;


SELECT
    sum(populacao) AS Total
FROM estados;


SELECT
    sum(populacao) AS `Media por estado`
FROM estados;