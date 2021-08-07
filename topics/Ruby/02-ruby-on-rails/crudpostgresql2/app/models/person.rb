class Person < ApplicationRecord
  validate :cpf_validate

  def cpf_validate
    raise InvalidCpfException.new unless (CpfUtils.cpf_valid?(cpf))
  end
end
