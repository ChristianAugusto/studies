function calcOperation(firstNumber, operator, secondNumber) {
  firstNumber = Number(firstNumber.replace(',', '.'));
  secondNumber = Number(secondNumber.replace(',', '.'));

  let result = null;

  if (operator === '+') {
    result = firstNumber + secondNumber;
  } else if (operator === '-') {
    result = firstNumber - secondNumber;
  } else if (operator === '*') {
    result = firstNumber * secondNumber;
  } else if (operator === '/') {
    result = firstNumber / secondNumber;
  }

  return `${result}`.replace('.', ',');
}

export default calcOperation;
