const redux = require('redux');
const thunkMiddleware = require('redux-thunk').thunk;
const { createStore } = redux;
const applyMiddleware = redux.applyMiddleware;
const axios = require('axios');

const initialState = {
  loading: false,
  users: [],
  error: '',
};

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED';
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCEEDED,
    payload: users,
  };
};

const fetchUsersError = (error) => {
  return {
    type: FETCH_USERS_FAILED,
    payload: error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
      break;

    case FETCH_USERS_FAILED:
      console.log('FETCH_USERS_FAILED payload', action.payload);
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };

    case FETCH_USERS_SUCCEEDED:
      console.log('FETCH_USERS_SUCCEEDED payload', action.payload);
      return {
        ...state,
        loading: false,
        users: action.payload,
      };

    default:
      return state;
  }
};

// example of an action creator that uses middleware, which is helpful when
// we need to perfom asyncronous operations
// we need something to happen after the dispatch and before the reducer execution
const fetchUsers = () => {
  // in this case the action creator returns a function instead of an Action object directly
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get('http://jsonplaceholder.typicode.com/users')
      .then((response) => {
        // console.log('response', response);
        const users = response.data.map((user) => user.id);
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        // console.log('error', error);
        dispatch(fetchUsersError(error.message));
      });
  };
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

console.log('Initial State', store.getState());
const unsubscribe = store.subscribe(() => {
  console.log('State updated', store.getState());
});
store.dispatch(fetchUsers());

// unsubscribe();
