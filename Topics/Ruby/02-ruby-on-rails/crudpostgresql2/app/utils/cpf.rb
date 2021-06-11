class CpfUtils
  @@DENY_LIST = [
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999',
    '12345678909',
    '01234567890',
    nil
  ].freeze

  def self.DENY_LIST
    @@DENY_LIST
  end

  def self.cpf_valid?(cpf)
    return false if (@@DENY_LIST.include?(cpf))

    soma = 0
    resto = nil

    for i in 1..9
      soma = soma + cpf[i-1,1].to_i * (11 - i)
    end

    resto = (soma * 10) % 11

    if (resto == 10 || resto == 11)
      resto = 0
    end

    return false if (resto != cpf[9, 1].to_i)

    soma = 0

    for i in 1..10
      soma = soma + cpf[i-1,1].to_i * (12 - i)
    end

    resto = (soma * 10) % 11

    if ((resto == 10) || (resto == 11))
      resto = 0
    end

    return false if (resto != cpf[10,1].to_i)

    return true
  end
end
