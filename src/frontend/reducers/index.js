import { combineReducers } from 'redux';
import akkords from './akkords';
import tone from './tone_music';
import buttonClick from './button_click';

const rootReducers = combineReducers({
  akkords,
  tone,
  buttonClick
});

export default rootReducers;
