import React from 'react';
import { Button, Dialog } from 'react-toolbox';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class MainSong extends React.Component {
  static propTypes = {
    song: React.PropTypes.object
  };

  state = {
    show: false,
    delete: false
  };

  hangleClickShow = () => {
    this.setState({
      show: !this.state.show
    });
  };

  //{"_id": " + song._id + "}'
  hangleClickDelete = () => {
    const { song } = this.props;
    $.ajax({
      url: `http://localhost:3000/api/songs/?criteria={"_id": "${song._id}"}`,
      type: 'DELETE',
      contentType: 'application/json',
      success: data => {
        console.log('data ', data);
      },
      dataType: 'json'
    });
  };

  render () {
    const { song } = this.props;

    let name_chords = '';
    const akkordsList = song.chords.map((item, idx) => {
      name_chords = item.replace('#', 'd');
      return (
        <li key={idx}>
          <p>{item}</p>
          <img src={'/images/akkords/' + name_chords + '.png'} />
        </li>
      );
    });

    return (
      <div className="main">
        <div className="main__header">
          <h1>{song.name}</h1>
          <Button icon="delete" floating mini onClick={this.hangleClickShow} />
          <div className="dialog__text">
            <Dialog
              active={this.state.show}
              onEscKeyDown={this.hangleClickShow}
              onOverlayClick={this.hangleClickShow}
              title="Предупреждение"
            >
              <p>Вы действительно хотите удалить песню?</p>
              <Link to="/list_song/">
                <Button label="Да" onClick={this.hangleClickDelete} />
              </Link>
              <Button label="Нет" onClick={this.hangleClickShow} />
            </Dialog>
          </div>
        </div>
        <div className="main__text">
          <pre>
            {song.text}
          </pre>
        </div>
        <div className="main__chords">
          <h2>Аккорды</h2>
          <ul className="akkord__list">{akkordsList}</ul>
        </div>
      </div>
    );
  }
}

export default MainSong;
