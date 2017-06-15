import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import theme from './navigation.css';
import { Link } from 'react-router-dom';
import Navigation from 'react-toolbox/lib/navigation';

class Nav extends React.Component {
  render () {
    return (
      <AppBar title="My Project" theme={theme} fixed>
        <Navigation type="horizontal">
          <Link className="nav__link nav__link-nav" to="/authorization">
            Войти
          </Link>
          <Link className="nav__link nav__link-nav" to="/list_song">
            Избранное
          </Link>
        </Navigation>
      </AppBar>
    );
  }
}

export default Nav;
