print 'Type your name: ' # print não pula linha igual o puts

name = gets # Recebe a entrada do teclado

puts "Hello #{name}"
puts 'Hello #{name}'
puts name.class
puts name.inspect

puts '========================='

name = name.chomp # retira o \n

puts "Hello #{name}"
puts name.inspect
