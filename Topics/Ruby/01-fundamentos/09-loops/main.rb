puts 'each:'

fruits = %w[Maçã Uva Morango]

fruits.each do |fruit|
  puts fruit
end

(0..5).each do |i|
  puts "Value of local variable is #{i}"
end

puts '----------------------------'

puts 'while:'

x = 0
while x < 10
  puts x
  x += 1
end

puts '----------------------------'

puts 'until:'

i = 0

until i == 5
  puts i
  i += 1
end
