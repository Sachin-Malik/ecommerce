const intialState = {
  numberOfCakes: 10,
};

export const cakeReducer = (state = intialState, action) => {
  switch (action.type) {
    case "BUY_CAKE":
      return { ...state, numberOfCakes: state.numberOfCakes - 1 };
    default:
      return state;
  }
};
