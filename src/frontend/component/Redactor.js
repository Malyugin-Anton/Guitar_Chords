import React from 'react';
import { Button } from 'react-toolbox/lib/button';

class Redactor extends React.Component {
  render () {
    return (
      <div className="transp__redactor">
        <textarea className="textarea" rows="20">
          Вот сюда
        </textarea>
        <div className="transp__redactor-button">
          <Button label="Готово" raised className="transp__button" />
        </div>
      </div>
    );
  }
}

export default Redactor;
