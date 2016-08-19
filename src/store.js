import {createStore} from 'redux';

const initialState = {
  name: ''
}


function reducer(state, action) {
  if (action.type === 'START') {
    return {
      state,
      name: action.name
    }
  }
  console.log(action);
  return initialState;
}

const store = createStore(reducer);


export default store;
