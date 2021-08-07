require_relative './teste/default'
require_relative './teste/shortcut'

default = Teste::Default.new('default')
puts default.attr_1

shortcut = Teste::Shortcut.new('shortcut')
puts shortcut.attr_1
