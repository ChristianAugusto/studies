def cpf_valid?(cpf)
  soma = 0
  resto = nil

  deny_list = [
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
    '01234567890'
  ]
  deny_list.freeze

  if (deny_list.include?(cpf))
    return false
  end

  for i in 1..9
    soma = soma + cpf[i-1,1].to_i * (11 - i)
  end

  resto = (soma * 10) % 11

  if (resto == 10 || resto == 11)
    resto = 0
  end

  if (resto != cpf[9, 1].to_i)
    return false
  end

  soma = 0

  for i in 1..10
    soma = soma + cpf[i-1,1].to_i * (12 - i)
  end

  resto = (soma * 10) % 11

  if ((resto == 10) || (resto == 11))
    resto = 0
  end

  if (resto != cpf[10,1].to_i)
    return false
  end

  return true
end
