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

function reset() {
  return {
    type: 'RESET'
  }
}

class App extends Component {
  handleStartClick = () => {
    const name = this.refs.nameInput.value;
    store.dispatch(start(name));
    console.log(store.getState().gameArray);
  }

  handleResetClick = () => {
    store.dispatch(reset());
  }

  render() {
    // console.log('render');
    const state = store.getState();

    var nextOnComponent;
    if (state.nextOn === 2) {
      nextOnComponent = <p className="turn">
        Na řadě je: <img className="turn-img" src={require('./cross.svg')} alt="cross" />
      </p>;
    } else {
      nextOnComponent = <p className="turn">
       Na řadě je: <img className="turn-img" src={require('./circle.svg')} alt="circle" />
     </p>;
    }

    return (
      <div className="App">

        <div className="name">
          <input ref="nameInput" className="name-input" type="text" placeholder="Jméno hráče" />
        </div>

        {state.name && <Grid gameArray={store.getState().gameArray}/>}

        <div className="buttons">
          <button className="button" onClick={this.handleStartClick}>Start</button>
          <button className="button" onClick={this.handleResetClick}>Restart</button>
        </div>


        {nextOnComponent}

      </div>
    );
  }
}



export default App;
