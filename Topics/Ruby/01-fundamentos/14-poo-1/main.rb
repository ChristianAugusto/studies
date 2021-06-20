class Computer
  attr_reader :cpu_cores, :ram_total

  def initialize(cpu_cores, ram_total)
    @cpu_cores = cpu_cores
    @ram_total = ram_total
  end

  def turn_on
    'turn on the computer'
  end

  def shutdown
    'shutdown the computer'
  end
end

computer = Computer.new(8, 24)

puts computer.shutdown

puts "The computer has #{computer.cpu_cores} cores and #{computer.ram_total} Gb RAM"
