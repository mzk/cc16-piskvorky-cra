import React from 'react';

class Grid extends React.Component {
  render() {
    const circle = require('../circle.svg');
    const cross = require('../cross.svg');

    return (
      <div className="grid">
        <div className="box is-filled">
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

        <p className="end">Konec hry</p>
      </div>
    )
  }
}

export default Grid;
