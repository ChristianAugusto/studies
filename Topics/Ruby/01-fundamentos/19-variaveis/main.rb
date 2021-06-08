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

  def a
    return @a
  end

  def b
    return @@b
  end
end

puts Teste.new.b
puts Teste.new.a
