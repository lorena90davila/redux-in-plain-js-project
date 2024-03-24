const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const { cakeReducer } = require('./features/cake/cakeReducer');
const { iceCreamReducer } = require('./features/iceCream/iceCreamReducer');
const { orderCake, restockCake } = require('./features/cake/cakeActions');
const { orderIceCream, restockIceCream } = require('./features/iceCream/iceCreamActions');

// rootReducer is a standard naming convention for the main reducer
const rootReducer = combineReducers({ cakeReducer, iceCreamReducer });
const store = createStore(rootReducer);

const bindActionCreators = redux.bindActionCreators;

const actions = bindActionCreators(
  { orderCake, restockCake, orderIceCream, restockIceCream },
  store.dispatch
);

console.log('Initial State', store.getState());
const unsuscribe = store.subscribe(() =>
  console.log('State updated ', store.getState())
);

// leaving these as a reminder of the basic syntax without using bindActionCreators
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(3));

actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(3);

actions.orderIceCream();
actions.orderIceCream();
actions.restockIceCream(2);
unsuscribe();
