res = 20

puts "res = #{res}"
puts 'res = ' + res.to_s
puts 'res = '.concat(res.to_s)
puts 'res = ' << res.to_s

nome = 'Eustaquio '
sobrenome = 'Rangel'

puts nome << sobrenome # realoca a memória
puts nome
puts sobrenome
