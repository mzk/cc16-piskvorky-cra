import React, { Component } from 'react';
import store from './store';


function takeField(key) {
  return {
    type: 'UPDATE',
    gameKey: key,
  }
}

class Grid extends Component {

  handleTakeClick = (itemId) => {
    console.log(itemId);
    store.dispatch(takeField(itemId));
  }

  render() {
    const circle = require('./circle.svg');
    const cross = require('./cross.svg');

    var gameArray = this.props.gameArray;
    return (
      <div className="grid">
        {gameArray.map((item,i) => {
            if (item === 0) {
              return <div className="box" key={i} onClick={() => this.handleTakeClick(i)}></div>
            }
            else if (item === 1) {
              return <div className="box is-filled" key={i}>
                <img className="box-image" src={circle} alt="circle" />
              </div>
            }
            else if (item === 2) {
              return <div className="box is-filled" key={i}>
                <img className="box-image" src={cross} alt="cross" />
              </div>
            }
        })}
        <p className="end">Konec hry</p>
      </div>
    );
  }
}

export default Grid;
