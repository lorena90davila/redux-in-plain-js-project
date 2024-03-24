const produce = require('immer').produce;
const { STREET_UPDATED } = require('./userActions').actions;

const initialState = {
  name: 'Test User',
  address: {
    street: 'Calle 123',
    city: 'Santiago de Cuba',
    province: 'Santiago de Cuba',
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      // return {
      //   ...state,
      //   address: {
      //     ...state.address,
      //     street: action.payload,
      //   },
      // };
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default: {
      return state;
    }
  }
};

module.exports = { reducer };
