import React from 'react';
import AkkordsBlock from './AkkordsBlock';

class Akkord extends React.Component {
  render () {
    return (
      <div className="akkord">
        {this.props.akk.map(item => <li key={item.id}>{item.text}</li>)}
        <h3>Название</h3>
        <p>Картника</p>
      </div>
    );
  }
}

export default Akkord;
