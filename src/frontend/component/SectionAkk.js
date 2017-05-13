import React from 'react';
import Redactor from './Redactor';

const Akkord = React.createClass({
  render () {
    return (
      <div className="akkord">
        adsa
      </div>
    );
  }
});

const AkkordsBlock = React.createClass({
  render: function () {
    return (
      <div className="trans__akkords">
        <Akkord />
      </div>
    );
  }
});

const Header = React.createClass({
  render: function () {
    return (
      <section className="transp">
        <h2>Попоробуй</h2>
        <p>Введите текст песни или аккорды в текстовое поле</p>
        <div className="transp__inner">
          <Redactor />
          <AkkordsBlock />
        </div>
      </section>
    );
  }
});

export default Header;
