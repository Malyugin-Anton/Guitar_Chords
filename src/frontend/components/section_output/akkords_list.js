import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-toolbox/lib/button';

class AkkordsList extends React.Component {
  static propTypes = {
    akkords: PropTypes.array,
    akkordsList: PropTypes.array,
    dispatch: PropTypes.func,
    tone: PropTypes.number
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
        <div className="section__output-button">
          <Button
            icon="done"
            label="Сохранить"
            raised
            className="transp__button"
            onClick={this.hangleClick}
          />
        </div>
      </div>
    );
  }
}

//mapStateToProps - это функция, которая должна возвращать объект.
//Поля этого объекта станут свойствами компонента
// function mapStateToProps (state) {
//   return {
//     akkords: state.akkords,
//     tone: state.tone
//     // click: state.buttonClick
//   };
// }
//export default connect(mapStateToProps, {})(AkkordsList);

export default connect()(AkkordsList);
