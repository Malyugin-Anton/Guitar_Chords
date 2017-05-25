import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import theme from './navigation.css';

class Nav extends React.Component {
  render () {
    return <AppBar title="My Project" theme={theme} fixed leftIcon="menu" />;
  }
}

export default Nav;
