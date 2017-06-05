import React from 'react';
import $ from 'jquery';

class Example extends React.Component {
  state = {
    login: ''
  };

  componentDidMount = () => {
    // $.ajax({
    //   type: 'GET',
    //   dataType: 'application/json',
    //   url:
    //     'http://dev.0xff.space:8080/api/auth/?criteria={%22login%22:%20%2279172060688%22}',
    //   success: data => {
    //     this.setState({
    //       login: data
    //     });
    //   }
    // });
    $.post('http://dev.0xff.space:8080/api/auth/', {
      login: '79172060688',
      password: '1234'
    });
  };

  render () {
    return <h1>{this.state.login}</h1>;
  }
}

export default Example;
