capitais1 = Hash.new # hash vazio

puts capitais1

puts '------------------------'

capitais2 = { acre: 'Rio Branco', sao_paulo: 'São Paulo' } # hash com chaves

puts capitais2

puts '------------------------'

puts capitais2[:acre] # acessar chave e obter valor

puts '------------------------'

capitais2[:minas_gerais] = 'Belo Horizonte' # adicionar chave

puts capitais2

puts '------------------------'

puts capitais2.keys # obter chaves do hash

puts '------------------------'

puts capitais2.values # obter valores do hash

puts '------------------------'

capitais2.delete :acre # deletar chave

puts capitais2

puts '------------------------'

puts capitais2.size # tamanho do hash

puts '------------------------'

puts capitais2.empty? # o hash está vazio?

puts '------------------------'

puts 'Other way'

hash2 = { "nome": "add" }

puts hash2
puts hash2[:nome]
