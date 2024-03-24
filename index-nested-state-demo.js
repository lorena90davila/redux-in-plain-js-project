const redux = require('redux');
const { reducer } = require('./features/users/usersReducer')
const { updateStreet } = require('./features/users/userActions')
const applyMiddleware = redux.applyMiddleware;

const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();

const store = redux.createStore(reducer, applyMiddleware(logger));
console.log('Initial State', store.getState());
const unsubscribe = store.subscribe(() => {
  // console.log('State updated', store.getState());
});

store.dispatch(updateStreet('Calle 456'));
unsubscribe();
