INSERT INTO estados (id, nome, sigla, regiao, populacao)
VALUES (1000, 'Novo', 'NV', 'Sul', 2.54);


INSERT INTO estados (nome, sigla, regiao, populacao)
VALUES ('Muito Novo', 'MV', 'Sul', 2.54);

-- Ao inserir com id e depois usar o auto incremento nas próximos, o banco irá pegar o do último e somar mais 1