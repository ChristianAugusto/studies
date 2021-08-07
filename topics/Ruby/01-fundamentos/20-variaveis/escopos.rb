outra = 20

def foo
  local = 'abc'

  puts local
  # puts outra # Não consegue enxergar

  $global = 1
end

foo

puts $global
# puts local # Não consegue enxergar

class Teste
  @@b = 20

  def initialize
    @a = 4
  end

  attr_reader :a

  def b
    @@b
  end
end

puts Teste.new.b
puts Teste.new.a
