const { CAKE_ORDER, CAKE_RESTOCK } =
  require('./cakeActions').actions;

const initialCakeState = {
  numCakes: 10,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDER:
      return { ...state, numCakes: state.numCakes - action.payload };

    case CAKE_RESTOCK:
      return { ...state, numCakes: state.numCakes + action.payload };

    default:
      return state;
  }
};

module.exports = { cakeReducer };
