import React, { Component } from 'react';
import './App.css';
import Buttons from './Buttons';
import Grid from './Grid';
import {connect} from 'react-redux';


class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="name">
          <input className="name-input" type="text" value="" placeholder="Jméno hráče" />
        </div>

        {state.name}

        <Grid />

        <Buttons />

        <p className="turn">
          Na řadě je: <img className="turn-img" src={require('./cross.svg')} alt="cross" />
        </p>

      </div>
    );
  }
}

export default App;
