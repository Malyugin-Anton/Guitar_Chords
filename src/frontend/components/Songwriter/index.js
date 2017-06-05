import React from 'react';
// import Sidebar from './Sidebar/';
import MainSong from './MainSong/';
import { Route, Link } from 'react-router-dom';
import $ from 'jquery';
import {
  List,
  ListItem,
  ListSubHeader,
  ListDivider
} from 'react-toolbox/lib/list';

class Songwriter extends React.Component {
  static propTypes = {
    songs: React.PropTypes.array
  };

  state = {
    songs: []
  };

  componentWillMount = () => {
    //-------- GET ---------
    $.ajax({
      url: 'http://dev.0xff.space:8088/api/songs/',
      type: 'GET',
      success: data => {
        this.setState({
          songs: data
        });
      },
      dataType: 'json'
    });
  };

  render () {
    const { songs } = this.state;
    return (
      <div className="songwriter">
        <div className="sidebar">
          <List selectable ripple>
            <ListSubHeader caption="Super APP" />
            <ListDivider />
            <Link className="nav__link" to="/">
              <ListItem selectable caption="Главная" leftIcon="home" />
            </Link>
            <ListDivider />
            <ListSubHeader caption="Мои песни" />

            {this.state.songs.map(item => {
              return (
                <Link key={item._id} to={`/list_song/${item._id}`}>
                  <ListItem
                    selectable
                    key={item._id}
                    caption={item.name}
                    leftIcon="tab"
                  />
                </Link>
              );
            })}

            <ListDivider />
            <ListItem selectable caption="Выйти" leftIcon="exit_to_app" />
          </List>
        </div>
        {songs
          && <Route
            path={'/list_song/:songId'}
            render={({ match }) =>
              <MainSong
                song={songs.find(s => s._id === match.params.songId)}
              />}
          />}
      </div>
    );
  }
}

export default Songwriter;
