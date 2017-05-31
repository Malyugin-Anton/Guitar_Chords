import React from 'react';
import {
  List,
  ListItem,
  ListSubHeader,
  ListDivider
} from 'react-toolbox/lib/list';
import { Link } from 'react-router-dom';

const solg_list = [
  {
    id: 1,
    name: 'Песня 1',
    text: 'hadkjh ahskd hashakjshd ahsk hasdh ajshd kahsdkj haksdhakjhd'
  },
  {
    id: 2,
    name: 'Песня 2',
    text: 'hadkjh ahskd hashakjshd ahsk hasdh ajshd kahsdkj haksdhakjhd'
  },
  {
    id: 3,
    name: 'Песня 3',
    text: 'hadkjh ahskd hashakjshd ahsk hasdh ajshd kahsdkj haksdhakjhd'
  },
  {
    id: 4,
    name: 'Песня 4',
    text: 'hadkjh ahskd hashakjshd ahsk hasdh ajshd kahsdkj haksdhakjhd'
  },
  {
    id: 5,
    name: 'Песня 5',
    text: 'hadkjh ahskd hashakjshd ahsk hasdh ajshd kahsdkj haksdhakjhd'
  }
];

class Sidebar extends React.Component {
  render () {
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
          {solg_list.map(item => {
            return <ListItem selectable caption={item.name} leftIcon="tab" />;
          })}
          <ListDivider />
          <ListItem selectable caption="Выйти" leftIcon="exit_to_app" />
        </List>
      </div>
    );
  }
}

export default Sidebar;
