class User
    @name = 0

    def add name
        @name = name
        puts "User adicionando: #{name}"
    end
end

first_user = User.new
first_user.add('João')

first_user = User.new
first_user.add('Mario')

first_user = User.new
first_user.add('José')
