import { combineReducers } from 'redux';
import akkords from './akkords';
import tone from './tone_music';
import buttonClick from './button_click';
import addText from './text.js';

const rootReducers = combineReducers({
  akkords,
  tone,
  buttonClick,
  addText
});

export default rootReducers;
