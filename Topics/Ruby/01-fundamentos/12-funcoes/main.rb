def hello(name)
  puts "Olá #{name}"
end

hello 'Christian'

puts '----------------'

def mensagem
  puts 'Mensagem secreta'
end

mensagem

puts '----------------'

def opcional(a = 'a')
  puts a
end

opcional '20'
opcional

puts '----------------'

def retorno1
  'dasdas'
end

puts retorno1

puts '----------------'

def retorno2
  'dasdas'
  'aaaaa'
end

puts retorno2

puts '----------------'

def retorno3
  return '1'
  '2'
end

puts retorno3

puts '----------------'

def foo
  puts 'foo'
end

def test1(function)
  function
end

test1 foo
