import React from 'react';
import { Button } from 'react-toolbox/lib/button';
import $ from 'jquery';

class MainSong extends React.Component {
  static propTypes = {
    song: React.PropTypes.object
  };

  hangleClickDelete = () => {
    $.ajax({
      url:
        'http://dev.0xff.space:8088/api/songs/?citeria={"_id": " + song._id + "}',
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
    console.log(song.name);
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
        {/* <div className="main__chords">
          <h2>Аккорды</h2>
        </div> */}
      </div>
    );
  }
}

export default MainSong;
