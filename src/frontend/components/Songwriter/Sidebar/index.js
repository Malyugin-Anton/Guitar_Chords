import React from 'react';
import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  ListSubHeader,
  ListDivider
} from 'react-toolbox/lib/list';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class Sidebar extends React.Component {
  static propTypes = {
    songs: PropTypes.array
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
    // console.log('PROPS ', this.props.songs);
    console.log('STATE ', this.state.songs);
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
          {this.state.songs.map(item => {
            return (
              <ListItem
                selectable
                key={item._id}
                caption={item.name}
                leftIcon="tab"
              />
            );
          })}
          <ListDivider />
          <ListItem selectable caption="Выйти" leftIcon="exit_to_app" />
        </List>
      </div>
    );
  }
}

export default Sidebar;
