def test(_lambda)
  _lambda.call
end

first_lambda = -> { puts 'My first lambda' }

first_lambda.call

test first_lambda
