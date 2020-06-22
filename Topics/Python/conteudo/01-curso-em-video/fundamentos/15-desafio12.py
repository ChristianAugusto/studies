desconto = 5

precoProduto = float( input("Digite o preco do produto: ") )

precoComDesconto = precoProduto - (precoProduto * desconto / 100)

print("O produto com {}% desconto eh: R$ {:.2f}".format(desconto, precoComDesconto))