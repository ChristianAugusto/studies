puts 'for:'

fruits = ['Maçã', 'Uva', 'Morango']

for fruit in fruits
  puts fruit
end

for i in 0..5
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

until i==5
  puts i
  i += 1
end
