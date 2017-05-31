import React from 'react';
import { Button } from 'react-toolbox/lib/button';

class MainSong extends React.Component {
  render () {
    return (
      <div className="main">
        <div className="main__header">
          <h1>Песня 1</h1>
          <Button icon="delete" floating mini />
        </div>
        <div className="main__text">
          <pre>
            Em<br />
            Карабас-Барабас опрокинул бас<br />
            C<br />
            Дуремар убежал в кусты<br />
            Am<br />
            Пикассо и Дали были на мели<br />
            Em<br />
            Продавали свои холсты<br /><br />

            Em<br />
            Короли и шуты открывали рты<br />
            C<br />
            Округляли в глазах нули<br />
            Am<br />
            А Матисс и Ван Гог распивали грог<br />
            B<br />
            Светотени свои плели<br />
          </pre>
        </div>
        <div className="main__chords">
          <h2>Аккорды</h2>
          <ul className="akkord__list">
            <li>
              <p>Em</p>
              <img src="/images/akkords/Em.png" />
            </li>
            <li>
              <p>C</p>
              <img src="/images/akkords/C.png" />
            </li>
            <li>
              <p>Am</p>
              <img src="/images/akkords/Am.png" />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MainSong;
