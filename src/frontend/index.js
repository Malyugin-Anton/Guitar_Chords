import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Components
import App from './components/App/';
import Songwriter from './components/Songwriter/';
import Authorization from './components/Authorization/';

import Example from './components/Example/';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/list_song" component={Songwriter} />
        <Route path="/authorization" component={Authorization} />
        <Route path="/example" component={Example} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
