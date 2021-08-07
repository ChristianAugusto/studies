var1 = 'Alguma coisa'
var2 = var1

puts var1.object_id
puts var2.object_id

var1[0] = 'Z'

puts "#{var1.object_id}, #{var1}"
puts "#{var2.object_id}, #{var2}"
