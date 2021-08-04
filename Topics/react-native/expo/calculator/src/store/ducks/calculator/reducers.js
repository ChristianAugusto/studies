import types from './types';

const INITIAL_STATE = {
  firstNumber: '',
  operator: '',
  secondNumber: '',
};

function course(oldState = INITIAL_STATE, action) {
  if (!types[action.type]) {
    return oldState;
  }

  return types[action.type](oldState, action);
}

export default course;
