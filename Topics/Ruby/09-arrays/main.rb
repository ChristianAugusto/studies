estados = []

estados.push 'Espírito Santo' # coloca no final 1 valor

puts "#{estados}"

puts '--------------------------'

estados.push 'São Paulo', 'Minas Gerais' # coloca no final 2 valores

puts "#{estados}"

puts '--------------------------'

estados.insert 0, 'Acre', 'Amapá' # insere em um índice

puts "#{estados}"

puts '--------------------------'

puts estados[0] # acessar posição pelo índice e resgatar o valor
puts estados[1] # acessar posição pelo índice e resgatar o valor

puts '--------------------------'

puts estados[3..4]

puts '--------------------------'

puts estados[3..5] # não existe o elemento de índice 5

puts '--------------------------'

puts estados.first

puts '--------------------------'

puts estados.last

puts '--------------------------'

puts estados.count

puts '--------------------------'

puts estados.empty?

puts '--------------------------'

puts estados.include? 'São Paulo'
puts estados.include? 'Bahia'

puts '--------------------------'

puts "#{estados}"

puts '--------------------------'

estados.delete_at 1 # remove a posição pelo índice

puts "#{estados}"

puts '--------------------------'

estados.pop # remove a última posição do array

puts "#{estados}"

puts '--------------------------'

estados.shift # remove o primeira posição do array

puts "#{estados}"
