import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-toolbox/lib/button';
import { connect } from 'react-redux';
import { addAkkords, addClick, addTone } from '../../actions/';

const arr_major = [
  { name: 'C', value: 1 },
  { name: 'C#', value: 2 },
  { name: 'D', value: 3 },
  { name: 'D#', value: 4 },
  { name: 'E', value: 5 },
  { name: 'F', value: 6 },
  { name: 'F#', value: 7 },
  { name: 'G', value: 8 },
  { name: 'G#', value: 9 },
  { name: 'A', value: 10 },
  { name: 'A#', value: 11 },
  { name: 'H', value: 12 }
];

function getTone (el) {
  const chord = el[0][el.length] === 'm'
    ? el[0].substring(0, el[0].length - 1)
    : el[0];
  console.log(chord);
  for (let i = 0; i < arr_major.length; i++) {
    if (arr_major[i].name === chord) {
      console.log('getTone', arr_major[i].value);
      return arr_major[i].value;
    }
  }
}

function unique (arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    const str = arr[i];
    obj[str] = true;
  }
  console.log(Object.keys(obj));
  return Object.keys(obj);
}

class SectionInput extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    text: PropTypes.string
  };
  state = {
    text: ''
  };

  hangleClick = () => {
    const str = this.state.text;
    //Получаем массив аккордов
    const newArrAkkords = str.match(
      /\b(C#m)|(D#m)|(F#m)|(G#m)|(A#m)|(Cm)|(Dm)|(Em)|(Fm)|(Gm)|(Am)|(Hm)|(C)|(D)|(E)|(F)|(G)|(A)|(H)\b/g
    );
    //Фильтруем их чтобы не повторялись
    const unique_arr = unique(newArrAkkords);
    //Заносим массив в store
    this.props.dispatch(addAkkords(unique_arr));
    this.props.dispatch(addClick());
    console.log('---', unique_arr[0]);
    this.props.dispatch(addTone(getTone([unique_arr[0]])));
  };

  handleTextChange = event => {
    this.setState({ text: event.target.value });
  };

  render () {
    return (
      <section className="section__input">
        <h2>Попробуй</h2>
        <p>Введите текст песни или аккорды в текстовое поле</p>
        <textarea
          className="textarea"
          rows="20"
          placeholder="Вот сюда вводим..."
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <div className="transp__redactor-button">
          <Button
            label="Готово"
            raised
            className="transp__button"
            onClick={this.hangleClick}
          />
        </div>
      </section>
    );
  }
}

export default connect()(SectionInput);
