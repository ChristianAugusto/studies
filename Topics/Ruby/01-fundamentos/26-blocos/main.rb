# blocos são como funcões anônimas ou lambdas, ex: function() {}

def chama_bloco
  puts 'Inicio do método'
  # você pode chamar o método com a palavra-chave yield
  yield
  yield
  puts 'Fim do metodo'
end

# Os blocos de código podem aparecer apenas no código adjacente a uma chamada de método
chama_bloco {puts 'Dentro do bloco'}

puts '-----------------------'

def chama_bloco2
  yield('ola', 99)
end

chama_bloco2 {|str, num| puts str + ' ' + num.to_s}
