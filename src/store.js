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
  ],
  nextOn: 1
}


function reducer(state, action) {
  console.log(action);
  if (action.type === 'START') {
    return {
      state,
      name: action.name,
      nextOn: state.nextOn,
      gameArray: state.gameArray
    }
  }

  if (action.type === 'RESET') {
    console.log('action reset');
    console.log(initialState.gameArray);
    return {
      state,
      name: state.name,
      nextOn: 1,
      gameArray: [0,0,0,0,0,0,0,0,0]
    }
  }

  if (action.type === 'UPDATE') {
    console.log(state.nextOn);
    state.gameArray[action.gameKey] = state.nextOn;
    if (state.nextOn === 1) {
      state.nextOn = 2;
    } else {
      state.nextOn = 1
    }
    return {
      state,
      name: state.name,
      nextOn: state.nextOn,
      gameArray: state.gameArray
    }
  }
  console.log(action);
  return initialState;
}


const store = createStore(reducer);


export default store;
