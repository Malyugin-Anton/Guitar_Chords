import React from 'react';
import Nav from './Nav';

class Header extends React.Component {
  render () {
    return (
      <div className="header">
        <Nav />
        <div className="header__text">
          <h1>Trans Akk App</h1>
          <h3>Приложение для транспонирования музыкальных аккордов</h3>
        </div>
      </div>
    );
  }
}

export default Header;
