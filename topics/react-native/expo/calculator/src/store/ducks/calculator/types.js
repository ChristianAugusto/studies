import { DECIMAL_CHAR } from '@Constants';
import calcOperation from '@Functions/calc-operation';

function SET_NUMBER(oldState, action) {
  if (!oldState.operator) {
    return {
      ...oldState,
      firstNumber: `${oldState.firstNumber}${action.number}`,
    };
  }

  return {
    ...oldState,
    secondNumber: `${oldState.secondNumber}${action.number}`,
  };
}

function SET_DECIMAL(oldState, action) {
  if (!oldState.operator) {
    if (
      oldState.firstNumber &&
      oldState.firstNumber.indexOf(DECIMAL_CHAR) === -1
    ) {
      return {
        ...oldState,
        firstNumber: `${oldState.firstNumber}${DECIMAL_CHAR}`,
      };
    }
  } else {
    if (
      oldState.secondNumber &&
      oldState.secondNumber.indexOf(DECIMAL_CHAR) === -1
    ) {
      return {
        ...oldState,
        secondNumber: `${oldState.secondNumber}${DECIMAL_CHAR}`,
      };
    }
  }

  return {
    ...oldState,
  };
}

function SET_OPERATOR(oldState, action) {
  if (
    action.operator &&
    oldState.firstNumber &&
    oldState.operator &&
    oldState.secondNumber
  ) {
    return {
      ...RESULT(oldState, null),
      operator: action.operator,
    };
  }

  if (oldState.operator || !action.operator) {
    return {
      ...oldState,
    };
  }

  return {
    ...oldState,
    operator: action.operator,
  };
}

function RESULT(oldState, action) {
  if (oldState.firstNumber && oldState.operator && oldState.secondNumber) {
    return {
      ...oldState,
      firstNumber: calcOperation(
        oldState.firstNumber,
        oldState.operator,
        oldState.secondNumber
      ),
      operator: '',
      secondNumber: '',
    };
  }

  return {
    ...oldState,
  };
}

function ERASE_NUMBER(oldState, action) {
  if (!oldState.operator) {
    return {
      ...oldState,
      firstNumber: oldState.firstNumber.slice(
        0,
        oldState.firstNumber.length - 1
      ),
    };
  }

  if (!oldState.secondNumber) {
    return {
      ...oldState,
      operator: '',
    };
  }

  return {
    ...oldState,
    secondNumber: oldState.secondNumber.slice(
      0,
      oldState.secondNumber.length - 1
    ),
  };
}

export default {
  SET_NUMBER,
  SET_DECIMAL,
  SET_OPERATOR,
  RESULT,
  ERASE_NUMBER,
};
