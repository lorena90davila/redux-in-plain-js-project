const { ICE_CREAM_ORDER, ICE_CREAM_RESTOCK } =
  require('./iceCreamActions').actions;

const initialIceCreamState = {
  numIceCreams: 20,
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICE_CREAM_ORDER:
      return { ...state, numIceCreams: state.numIceCreams - action.payload };

    case ICE_CREAM_RESTOCK:
      return { ...state, numIceCreams: state.numIceCreams + action.payload };

    default:
      return state;
  }
};

module.exports = { iceCreamReducer };
