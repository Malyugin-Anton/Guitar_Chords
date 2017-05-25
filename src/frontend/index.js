import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducers';

import Songwriter from './components/Songwriter';

const store = createStore(reducer);

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('app')
// );

ReactDOM.render(<Songwriter />, document.getElementById('app'));
