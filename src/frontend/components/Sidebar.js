import React from 'react';
import {
  List,
  ListItem,
  ListSubHeader,
  ListDivider
} from 'react-toolbox/lib/list';

class Sidebar extends React.Component {
  render () {
    return (
      <div className="sidebar">
        <List selectable ripple>
          <ListSubHeader caption="Super APP" />
          <ListDivider />
          <ListItem caption="Home" leftIcon="home" />
          <ListItem caption="Delete" leftIcon="delete" />
          <ListDivider />
          <ListItem caption="Выйти" leftIcon="exit_to_app" />
        </List>
      </div>
    );
  }
}

export default Sidebar;
