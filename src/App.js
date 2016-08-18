import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="name">
          <input className="name-input" type="text" value="" placeholder="Jméno hráče" />
        </div>

        <div className="grid">
          <div className="box is-filled">
            <img className="box-image" src={require('./circle.svg')} alt="circle" />
          </div>
          <div className="box is-filled">
            <img className="box-image" src={require('./cross.svg')} alt="cross" />
          </div>
          <div className="box">
          </div>
          <div className="box is-filled">
            <img className="box-image" src={require('./cross.svg')} alt="cross" />
          </div>
          <div className="box is-filled">
            <img className="box-image" src={require('./cross.svg')} alt="cross" />
          </div>
          <div className="box">
          </div>
          <div className="box">
          </div>
          <div className="box">
          </div>
          <div className="box is-filled">
            <img className="box-image" src={require('./cross.svg')} alt="cross" />
          </div>

          <p className="end">Konec hry</p>
        </div>

        <div className="buttons">
          <button className="button">Start</button>
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
