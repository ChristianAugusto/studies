puts 'Ler arquivo:'

file1 = File.open './files/read.txt', 'r' # coloca o arquivo inteiro na memória?

for line in file1
  puts line
end

puts '------------------------'

puts 'Adicionar no arquivo'

file2 = File.open './files/add.txt', 'a'
file2.puts 'a'
file2.puts 'b'
file2.print 'c'
file2.print 'd'
file2.puts 'e'

file2.close

puts '------------------------'

puts 'Escrever no arquivo'

file3 = File.open './files/write.txt', 'w'
file3.puts 'a'
file3.puts 'b'
file3.print 'c'
file3.print 'd'
file3.puts 'e'

file3.close
