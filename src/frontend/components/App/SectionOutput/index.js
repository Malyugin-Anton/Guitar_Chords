import React from 'react';
import SliderTone from './SliderTone/';
import AkkordsList from './AkkordsList/';
import { connect } from 'react-redux';

class SectionOutput extends React.Component {
  static propTypes = {
    addText: React.PropTypes.string,
    akkords: React.PropTypes.array,
    click: React.PropTypes.bool,
    tone: React.PropTypes.number
  };

  render () {
    //className={this.props.click ? 'section__output' : 'none'}
    //className="section__output"
    return (
      <section className={this.props.click ? 'section__output' : ' none'}>
        <SliderTone
          tone={this.props.tone}
          click={this.props.click}
          akkords={this.props.akkords}
        />
        <AkkordsList
          tone={this.props.tone}
          akkords={this.props.akkords}
          text={this.props.addText}
        />
      </section>
    );
  }
}
//mapStateToProps - это функция, которая должна возвращать объект.
//Поля этого объекта станут свойствами компонента
function mapStateToProps (state) {
  return {
    akkords: state.akkords,
    click: state.buttonClick,
    tone: state.tone,
    addText: state.addText
  };
}

export default connect(mapStateToProps, {})(SectionOutput);
