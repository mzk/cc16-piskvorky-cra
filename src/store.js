import {createStore} from 'redux';

const initialState = {
  name: '',
  gameArray: [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0, //9
  ]
}


function reducer(state, action) {
  if (action.type === 'START') {
    return {
      state,
      name: action.name,
      gameArray: state.gameArray
    }
  }
  console.log(action);
  return initialState;
}

const store = createStore(reducer);


export default store;
