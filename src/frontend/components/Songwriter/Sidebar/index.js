import React from 'react';
import {
  List,
  ListItem,
  ListSubHeader,
  ListDivider
} from 'react-toolbox/lib/list';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
  static propTypes = {
    songs: React.PropTypes.array
  };

  render () {
    console.log(this.props.songs);
    return (
      <div className="sidebar">
        <List selectable ripple>
          <ListSubHeader caption="Super APP" />
          <ListDivider />
          <Link className="nav__link" to="/">
            <ListItem selectable caption="Главная" leftIcon="home" />
          </Link>
          <ListDivider />
          <ListSubHeader caption="Мои песни" />
          {/* {this.state.songs.map(item => {
            return (
              <Link key={item.id} to={`/list_song/${item._id}`}>
                <ListItem
                  selectable
                  key={item._id}
                  caption={item.name}
                  leftIcon="tab"
                />
              </Link>
            );
          })} */}
          <ListDivider />
          <ListItem selectable caption="Выйти" leftIcon="exit_to_app" />
        </List>
      </div>
    );
  }
}

export default Sidebar;
