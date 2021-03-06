import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-toolbox/lib/slider';
import { connect } from 'react-redux';
import { addTone, addAkkords, addText } from '../../../../actions/';

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

function getShortName (name) {
  const new_name = name;
  return new_name.substring(0, name.length - 1);
}

function changeChord (el, tone) {
  let chord_name = el,
    minor = '',
    new_tone = 0;
  if (el[el.length - 1] === 'm') {
    chord_name = getShortName(el);
    minor = 'm';
  }
  for (let i = 0; i < obj_akkords.length; i++) {
    if (obj_akkords[i].name === chord_name) {
      new_tone = obj_akkords[i].value + tone;
      if (new_tone > 12) new_tone -= 12;
      if (new_tone <= 0) new_tone += 12;
    }
  }
  for (let i = 0; i < obj_akkords.length; i++) {
    if (obj_akkords[i].value === new_tone) {
      return obj_akkords[i].name + minor;
    }
  }
}

function getTone (old_value, new_value) {
  return new_value - old_value;
}

class SliderTone extends React.Component {
  static propTypes = {
    akkords: PropTypes.array,
    click: PropTypes.bool,
    dispatch: PropTypes.func,
    text: PropTypes.string,
    tone: PropTypes.number
  };

  state = {
    tone: 1
  };

  handleChange = (slider, value) => {
    const regex = /([A-H][b#]?[m]?[\(]?(2|5|6|7|9|11|13|6\/9|7\-5|7\-9|7 \#5|7\#9|7\+5|7\+9|7b5|7b9|7sus2|7sus4|add2|add4|add9|aug|dim|dim 7|m\|maj7|m6|m7|m7b5|m9|m11|m13|maj|maj7|maj9|maj11|maj13|mb5|m|s us|sus2|sus4){0,2}(\/[A-H])?(\))?)(?=\s|\.|\)|-|\/)/g;

    let new_text = this.props.text;
    const old_chords = this.props.akkords;

    const tone = getTone(this.props.tone, value);
    const new_array = this.props.akkords.map(el => {
      return changeChord(el, tone);
    });
    this.setState({
      tone: value
    });
    this.props.dispatch(addTone(value));
    this.props.dispatch(addAkkords(new_array));

    new_text = new_text.replace(regex, function (item) {
      for (let i = 0; i < old_chords.length; i++) {
        if (item === old_chords[i]) {
          return new_array[i];
        }
      }
    });

    this.props.dispatch(addText(new_text));
  };

  render () {
    const styles = {
      maxWidth: '600px',
      margin: '0 auto'
    };
    return (
      <div style={styles}>
        <p>Выберите тональность</p>
        <Slider
          pinned
          snaps
          min={1}
          max={12}
          step={1}
          editable
          value={this.props.click ? this.props.tone : this.state.tone}
          onChange={this.handleChange.bind(this, 'value')}
        />
      </div>
    );
  }
}

export default connect()(SliderTone);
