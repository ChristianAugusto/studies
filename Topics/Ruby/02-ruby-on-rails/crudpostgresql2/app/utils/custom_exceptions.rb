class InvalidCpfException < Exception
  def initializer()
    super('invalid CPF')
  end
end
