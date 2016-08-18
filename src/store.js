import {createStore} from 'redux';

const initialState = {
  name: ''
}


function reducer(state, action) {
  console.log(action);
  return initialState;
}

const store = createStore(reducer);


export default store;
