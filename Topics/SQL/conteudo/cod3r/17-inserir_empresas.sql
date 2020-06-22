ALTER TABLE empresas MODIFY cnpj VARCHAR(14);

INSERT INTO empresas
    (nome, cnpj)
VALUES
    ('Bradesco', '89497541000180'),
    ('Vale', '14047643000103'),
    ('Cielo', '02017982000150');


DESC empresas; -- Descreve informações da tabela


INSERT INTO empresas_unidades
    (empresa_id, cidade_id, sede)
VALUES
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1);