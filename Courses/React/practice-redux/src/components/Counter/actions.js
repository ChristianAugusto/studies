export const inc = () => {
  return { type: "INC" }
};

export const dec = () => {
  return { type: "DEC" }
};

export const stepChange = (event) => {
  return {
    type: "STEP_CHANGED",
    payload: event.target.value
  }
};