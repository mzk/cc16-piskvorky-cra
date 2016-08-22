import React, { Component } from 'react';

class Grid extends Component {
  render() {
    const circle = require('./circle.svg');
    const cross = require('./cross.svg');

    var gameArray = this.props.gameArray;
    return (
      <div className="grid">
        {gameArray.map(function (item,i) {
            if (item === 0) {
              return <div className="box" key={i}></div>
            }
            if (item === 1) {
              return <div className="box is-filled" key={i}>
                <img className="box-image" src={circle} alt="circle" />
              </div>
            }
            if (item === 2) {
              return <div className="box is-filled" key={i}>
                <img className="box-image" src={cross} alt="cross" />
              </div>
            }
        })}
        <p className="end">Konec hry</p>
      </div>
        /* <div className="box is-filled">
          <img className="box-image" src={circle} alt="circle" />
        </div>
        <div className="box is-filled">
          <img className="box-image" src={cross} alt="cross" />
        </div>
        <div className="box">
        </div>
        <div className="box is-filled">
          <img className="box-image" src={cross} alt="cross" />
        </div>
        <div className="box is-filled">
          <img className="box-image" src={cross} alt="cross" />
        </div>
        <div className="box">
        </div>
        <div className="box">
        </div>
        <div className="box">
        </div>
        <div className="box is-filled">
          <img className="box-image" src={cross} alt="cross" />
        </div>


      </div>
      */
    );
  }
}

export default Grid;
