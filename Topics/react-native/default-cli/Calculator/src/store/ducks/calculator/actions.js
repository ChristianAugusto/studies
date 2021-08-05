export function setNumber(number) {
  return {
    type: 'SET_NUMBER',
    number,
  };
}

export function setDecimal() {
  return {
    type: 'SET_DECIMAL',
  };
}

export function setOperator(operator) {
  return {
    type: 'SET_OPERATOR',
    operator,
  };
}

export function result() {
  return {
    type: 'RESULT',
  };
}

export function eraseNumber() {
  return {
    type: 'ERASE_NUMBER',
  };
}
