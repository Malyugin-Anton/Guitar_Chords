import React from 'react';
import Header from './Header/';
import SectionInput from './SectionInput/';
import SectionOutput from './SectionOutput/';
import { connect } from 'react-redux';

class App extends React.Component {
  static propTypes = {
    addText: React.PropTypes.string,
    akkords: React.PropTypes.array
  };

  render () {
    return (
      <div>
        <Header />
        <SectionInput akkords={this.props.akkords} text={this.props.addText} />
        <SectionOutput />
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    addText: state.addText,
    akkords: state.akkords
  };
}

export default connect(mapStateToProps, {})(App);
