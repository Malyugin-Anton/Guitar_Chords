import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import theme from './Nav.css';
import { IconMenu, MenuItem, MenuDivider } from 'react-toolbox/lib/menu';
import Navigation from 'react-toolbox/lib/navigation';

class MenuTest extends React.Component {
  render () {
    return (
      <IconMenu icon="more_vert" position="topRight" menuRipple>
        <MenuItem value="download" icon="get_app" caption="Download" />
        <MenuItem value="help" icon="favorite" caption="Favorite" />
        <MenuItem
          value="settings"
          icon="open_in_browser"
          caption="Open in app"
        />
        <MenuDivider />
        <MenuItem value="signout" icon="delete" caption="Delete" disabled />
      </IconMenu>
    );
  }
}

class Nav extends React.Component {
  render () {
    return (
      <AppBar title="My Project" theme={theme} fixed leftIcon="menu">
        <Navigation type="horizontal">
          <MenuTest />
        </Navigation>
      </AppBar>
    );
  }
}

export default Nav;
