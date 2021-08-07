class User
  @@user_count = 0

  def initialize(name)
    @name = name

    puts "User #{@name} adicionado"
    @@user_count += 1
    puts @@user_count
  end

  # get personalizado
  def name
    @name = "O nome é: #{@name}"
  end

  # set personalizado
  def name=(name)
    @name = name.capitalize
  end
end

first_user = User.new('João')

first_user = User.new('Mario')

first_user = User.new('José')
