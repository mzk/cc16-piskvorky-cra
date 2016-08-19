import React, { Component } from 'react';
import './App.css';
import Buttons from './Buttons';
import Grid from './Grid';

import store from './store';

function start(name) {
  return {
    type: 'START',
    name
  }
}

class App extends Component {
  handleStartClick = () => {
    const name = this.refs.nameInput.value;
    store.dispatch(start(name));
    console.log(store.getState());
  }

  render() {
    console.log('render');
    const state = store.getState();

    return (
      <div className="App">

        <div className="name">
          <input ref="nameInput" className="name-input" type="text" placeholder="Jméno hráče" />
        </div>

        {state.name && <Grid />}

        <div className="buttons">
          <button className="button" onClick={this.handleStartClick}>Start</button>
          <button className="button">Reset</button>
        </div>


        <p className="turn">
          Na řadě je: <img className="turn-img" src={require('./cross.svg')} alt="cross" />
        </p>

      </div>
    );
  }
}



export default App;
