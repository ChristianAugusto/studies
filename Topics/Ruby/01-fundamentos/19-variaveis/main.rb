outra = 20

def foo
    local = 'abc'

    puts local
    # puts outra # Não consegue enxergar


    $global = 1
end

foo

puts $global
# puts local # Não consegue enxergar
