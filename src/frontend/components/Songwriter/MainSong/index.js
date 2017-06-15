import React from 'react';
import { Button } from 'react-toolbox/lib/button';
import $ from 'jquery';

class MainSong extends React.Component {
  static propTypes = {
    song: React.PropTypes.object
  };
  //{"_id": " + song._id + "}'
  hangleClickDelete = () => {
    const { song } = this.props;
    console.log('DELETE - ', song._id);
    $.ajax({
      url: `http://localhost:3000/api/songs/?criteria={"_id": "${song._id}"}`,
      type: 'DELETE',
      contentType: 'application/json',
      success: function (data) {
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
          <Button
            icon="delete"
            floating
            mini
            onClick={this.hangleClickDelete}
          />
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
