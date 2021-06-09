class Carro
  attr_reader :leitura
  attr_writer :escrita
  attr_accessor :escrita_e_leitura

  @@carros_criados = 0

  def initialize(marca, modelo, cor, tanque)
    @marca = marca
    @modelo = modelo
    @cor = cor
    @tanque = tanque
    @leitura = 'leitura funcionando'
    @escrita = 'teste'
    @escrita_e_leitura = 'leitura e escrita funcionando'
    @@carros_criados += 1
  end

  def to_s
    "marca:#{@marca} modelo:#{@modelo} cor:#{@cor} tanque:#{@tanque} escrita:#{@escrita}"
  end

  def self.carros_criados # self. indica método de classe
    @@carros_criados
  end
end

corsa = Carro.new('chevrolet', 'corsa', 'preto', 50)

puts corsa
# puts corsa.marca # Não tem permissão de leitura pública
# corsa.marca = 'outra' # Não tem permissão de escrita pública
puts corsa.leitura
# corsa.leitura = 'teste2' # Não tem permissão de escrita pública
corsa.escrita = 'teste2'
puts corsa
puts corsa.escrita_e_leitura
corsa.escrita_e_leitura = 'dhuahduaas'
puts corsa.escrita_e_leitura

puts "Carros criados #{Carro.carros_criados}"
