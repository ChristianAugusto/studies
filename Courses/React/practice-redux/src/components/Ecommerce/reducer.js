const INITIAL_STATE = {
   productName: ""
};

export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case "SET_LIGHTBOX":
         return {
            ...state, number: state.number + state.step
         };
      default:
         return state;
   }
};