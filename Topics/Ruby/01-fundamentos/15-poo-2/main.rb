# A simple animal
class Animal
  def pular
    puts 'Toing! tóim! bóim! póim!'
  end

  def dormir
    puts 'zzzzzzzzz!'
  end
end

# A simple dog
class Cachorro < Animal
  def latir
    puts 'Au Au'
  end
end

cachorro = Cachorro.new

cachorro.pular
cachorro.dormir
cachorro.latir
