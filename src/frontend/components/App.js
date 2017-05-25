import React from 'react';
import Header from './header/';
import SectionInput from './section_input/';
import SectionOutput from './section_output/';

class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <SectionInput />
        <SectionOutput />
      </div>
    );
  }
}

export default App;
