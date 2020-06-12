-- Lanches

INSERT INTO products 
    (name, price, qtd_stock, category_id)
VALUES 
    ('Whopper Duplo', 1800, 100, 1);


INSERT INTO products 
    (name, price, qtd_stock, category_id)
VALUES 
    ('Whopper', 1500, 120, 1);


INSERT INTO products 
    (name, price, qtd_stock, category_id)
VALUES 
    ('Whopper Furioso', 1500, 70, 1);



-- Bebidas

INSERT INTO products 
    (name, price, qtd_stock, category_id)
VALUES 
    ('Coca Cola', 800, 200, 2);

INSERT INTO products 
    (name, price, qtd_stock, category_id)
VALUES 
    ('Coca Cola zero', 800, 200, 2);



-- Sobremesas

INSERT INTO products 
    (name, price, qtd_stock, category_id)
VALUES 
    ('Casquinha', 250, 200, 3);

INSERT INTO products 
    (name, price, qtd_stock, category_id)
VALUES 
    ('Sundae', 550, 150, 3);



SELECT * FROM products;