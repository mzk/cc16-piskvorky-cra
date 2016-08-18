import {createStore} from 'redux';

const initialState = {
  name: ''
}

function reducer(state, action) {
  if (!state) return initialState;

  console.log('dispatched action', action);

  switch (action.type) {
    case 'START':
      return {
        ...state,
        name: action.name
      }
  }

  return state;
}

const store = createStore(reducer);

export default store;
