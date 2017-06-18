import React from 'react';
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

  componentDidMount = () => {
    //-------- GET ---------
    $.ajax({
      url: 'http://localhost:3000/api/songs/',
      type: 'GET',
      success: data => {
        this.setState({
          songs: data
        });
      },
      dataType: 'json'
    });
  };

  componentWillReceiveProps = () => {
    $.ajax({
      url: 'http://localhost:3000/api/songs/',
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
            <Link className="nav__link" to="/list_song">
              <ListItem selectable caption="Список" leftIcon="list" />
            </Link>
            <ListDivider />
            <ListSubHeader caption="Мои песни" />

            {this.state.songs.map(item => {
              return (
                <Link
                  className="nav__link"
                  key={item._id}
                  to={`/list_song/${item._id}`}
                >
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
        <Route
          exact
          path={'/list_song/'}
          render={() =>
            <div className="main">
              <div className="main__root">
                <h1>Избранное</h1>
                <p>
                  На данной странице вы можете просматривать и удалять свои
                  песни:)
                </p>
              </div>
            </div>}
        />
        <Route
          path={'/list_song/:songId'}
          render={({ match }) =>
            <MainSong song={songs.find(s => s._id === match.params.songId)} />}
        />
      </div>
    );
  }
}

export default Songwriter;
