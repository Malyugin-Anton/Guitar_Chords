import React from 'react';
import Sidebar from './Sidebar/';
import MainSong from './MainSong/';

class Songwriter extends React.Component {
  render () {
    return (
      <div className="songwriter">
        <Sidebar />
        <MainSong />
      </div>
    );
  }
}

export default Songwriter;
