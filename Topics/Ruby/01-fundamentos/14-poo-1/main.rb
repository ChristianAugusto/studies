class Computer
  def turn_on
    'turn on the computer'
  end

  def shutdown
    'shutdown the computer'
  end
end

computer_1 = Computer.new

puts computer_1.shutdown
