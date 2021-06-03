puts 'if'

day = 'Sunday'

if day == 'Sunday'
    lunch = 'special'
end

puts "Lunch is #{lunch} today"

puts '----------------------------------'

puts 'else'

age = 18

if age >= 18
    puts 'Adult'
else
    puts 'Child'
end

puts '----------------------------------'

puts 'elsif'

value = 1

if value >= 10
    puts 'Greater or equal than 10'
elsif value >= 5
    puts 'Greater or equal than 5'
else
    puts 'Error!'
end

puts '----------------------------------'

puts 'unless'

bool = false

unless bool
    puts false
end

puts '----------------------------------'

puts 'case'

month = 20

case month
when 1..3
    puts 'Beginning of the year'
when 4..9
    puts 'Middle of the year'
else
    puts 'Others months'
end
