import React from 'react';
import Header from './Header/';
import SectionInput from './SectionInput/';
import SectionOutput from './SectionOutput/';
import { connect } from 'react-redux';

class App extends React.Component {
  static propTypes = {
    akkords: React.PropTypes.array
  };

  render () {
    return (
      <div>
        <Header />
        <SectionInput akkords={this.props.akkords} />
        <SectionOutput />
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    akkords: state.akkords
  };
}

export default connect(mapStateToProps, {})(App);
