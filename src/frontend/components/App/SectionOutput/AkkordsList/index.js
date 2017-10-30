import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class AkkordsList extends React.Component {
  static propTypes = {
    akkords: PropTypes.array
  };

  render () {
    let name_chords = '';
    const akkordsList = this.props.akkords.map((item, idx) => {
      name_chords = item.replace('#', 'd');
      return (
        <li key={idx}>
          <p>{item}</p>
          <img src={'/images/akkords/' + name_chords + '.png'} />
        </li>
      );
    });

    return (
      <div className="section__output-сhords">
        <h3>Список аккордов</h3>
        <ul className="akkord__list">{akkordsList}</ul>
      </div>
    );
  }
}

export default connect()(AkkordsList);
