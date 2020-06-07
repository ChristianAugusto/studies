SELECT e.nome, c.nome
FROM empresas e, empresas_unidades eu, cidades c
WHERE e.id = eu.empresa_id
and c.id = eu.cidade_id;


SELECT e.nome, c.nome
FROM empresas e, empresas_unidades eu, cidades c
WHERE e.id = eu.empresa_id
and c.id = eu.cidade_id
and sede;

SELECT e.nome `Empresa`, c.nome AS Cidade
FROM empresas e, empresas_unidades eu, cidades c
WHERE e.id = eu.empresa_id
and c.id = eu.cidade_id
and sede;