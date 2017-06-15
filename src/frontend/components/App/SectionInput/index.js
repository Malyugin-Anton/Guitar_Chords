import React from 'react';
import PropTypes from 'prop-types';
import { Button, IconButton } from 'react-toolbox/lib/button';
import Dialog from 'react-toolbox/lib/dialog';
import { connect } from 'react-redux';
import { addAkkords, addClick, addTone, addText } from '../../../actions/';

const obj_akkords = [
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
  for (let i = 0; i < obj_akkords.length; i++) {
    if (obj_akkords[i].name === chord) {
      return obj_akkords[i].value;
    }
  }
}

function unique (arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    const str = arr[i];
    obj[str] = true;
  }
  return Object.keys(obj);
}

class SectionInput extends React.Component {
  static propTypes = {
    akkords: PropTypes.array,
    dispatch: PropTypes.func,
    text: PropTypes.string
  };
  state = {
    text: '',
    chords_list: [],
    click_ok: false,
    active: false
  };

  handleToggle = () => {
    this.setState({ active: !this.state.active });
  };

  hangleClickGo = () => {
    const str = this.props.text;
    const regex = /([A-H][b#]?[m]?[\(]?(2|5|6|7|9|11|13|6\/9|7\-5|7\-9|7 \#5|7\#9|7\+5|7\+9|7b5|7b9|7sus2|7sus4|add2|add4|add9|aug|dim|dim 7|m\|maj7|m6|m7|m7b5|m9|m11|m13|maj|maj7|maj9|maj11|maj13|mb5|m|s us|sus2|sus4){0,2}(\/[A-H])?(\))?)(?=\s|\.|\)|-|\/)/g;
    //Получаем массив аккордов
    const newArrAkkords = str.match(regex);
    //Фильтруем их чтобы не повторялись
    const unique_arr = unique(newArrAkkords);
    this.setState({
      chords_list: unique_arr,
      click_ok: !this.state.click_ok
    });
    //Заносим массив в store
    this.props.dispatch(addAkkords(unique_arr));
    this.props.dispatch(addClick(true));
    this.props.dispatch(addTone(getTone([unique_arr[0]])));
    //this.props.dispatch(addText(this.state.text));
  };

  hangleClickClear = () => {
    this.setState({
      click_ok: !this.state.click_ok,
      text: ''
    });
    this.props.dispatch(addClick(false));
    this.props.dispatch(addAkkords(this.state.chords_list));
  };

  handleTextChange = event => {
    //this.setState({ text: event.target.value });
    this.props.dispatch(addText(event.target.value));
  };

  render () {
    let button = null;
    if (!this.state.click_ok) {
      button = (
        <Button
          label="Готово"
          raised
          className="transp__button"
          onClick={this.hangleClickGo}
        />
      );
    } else {
      button = (
        <Button
          label="Очистить"
          raised
          className="transp__button"
          onClick={this.hangleClickClear}
        />
      );
    }
    return (
      <section className="section__input">
        <h2>Попробуй</h2>
        <p>
          Введите текст песни или аккорды в текстовое поле
          <span className="button__help">
            <IconButton
              icon="help_outline"
              floating
              onClick={this.handleToggle}
            />
          </span>
        </p>
        <Dialog
          actions={this.actions}
          active={this.state.active}
          onEscKeyDown={this.handleToggle}
          onOverlayClick={this.handleToggle}
          title="Привет текста"
        >
          <div className="example-text">
            <p>Em Am C D Em</p>
            <p>Я сижу и смотрю в чужое небо из чужого окна,</p>
            <p>Am C D Em</p>
            <p>И не вижу ни одной знакомой звезды.</p>
            <p>Am C D Em</p>
            <p>Я ходил по всем дорогам и туда и сюда,</p>
            <p>Am C D Em</p>
            <p>Обернулся и не смог разглядеть следы.</p>
            <p>Припев:</p>
            <p>Am C D Em</p>
            <p>Но если есть в кармане пачка сигарет,</p>
            <p>Am C D Em</p>
            <p>Значит, всё не так уж плохо на сегодняшний день.</p>
            <p>Am C D Em</p>
            <p>И билет на самолёт с серебристым крылом,</p>
            <p>Am C D Em</p>
            <p>Что, взлетая, оставляет земле лишь тень.</p>
          </div>

        </Dialog>
        <textarea
          className="textarea"
          rows="20"
          placeholder="Вот сюда вводим..."
          value={this.props.text}
          onChange={this.handleTextChange}
        />
        <div className="transp__redactor-button">
          {button}
        </div>
      </section>
    );
  }
}

export default connect()(SectionInput);
