import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Snackbar, Dialog } from 'react-toolbox';
import Input from 'react-toolbox/lib/input';
import $ from 'jquery';

class AkkordsList extends React.Component {
  static propTypes = {
    akkords: PropTypes.array,
    akkordsList: PropTypes.array,
    dispatch: PropTypes.func,
    text: PropTypes.string,
    tone: PropTypes.number
  };

  state = {
    active: false,
    name: '',
    snackbarClick: false
  };

  handleSnackbarClick = () => {
    this.setState({ snackbarClick: false });
  };

  handleSnackbarTimeout = () => {
    this.setState({ snackbarClick: false });
  };

  hangleClickShow = () => {
    this.setState({ active: !this.state.active });
  };

  handleChange = (name, value) => {
    this.setState({ ...this.state, [name]: value });
  };

  hangleClickAdd = () => {
    $.ajax({
      url: 'http://localhost:3000/api/songs/',
      contentType: 'application/json',
      type: 'POST',
      data: JSON.stringify({
        chords: this.props.akkords,
        name: this.state.name,
        text: this.props.text,
        user: '592c336c152b3b18c7d98e83'
      }),
      dataType: 'json'
    });
    this.setState({ active: !this.state.active });
    this.setState({ snackbarClick: !this.state.snackbarClick });
  };

  render () {
    let name_chords = '';
    const akkordsList = this.props.akkords.map((item, idx) => {
      name_chords = item.replace('#', 'd');
      return (
        <li key={idx}>
          <p>{item}</p>
          <img src={'/images/akkords/' + name_chords + '.png'} />
        </li>
      );
    });

    return (
      <div className="section__output-сhords">
        <h3>Список аккордов</h3>
        <ul className="akkord__list">{akkordsList}</ul>
        <div className="section__output-button">
          <Button
            icon="add"
            label="Сохранить"
            raised
            className="transp__button"
            onClick={this.hangleClickShow}
          />
          <Dialog
            active={this.state.active}
            onEscKeyDown={this.hangleClickShow}
            onOverlayClick={this.hangleClickShow}
            title="Добавить в избранное"
          >
            <Input
              type="text"
              label="Введите название"
              name="name"
              value={this.state.name}
              onChange={this.handleChange.bind(this, 'name')}
            />
            <Button label="Добавить" onClick={this.hangleClickAdd} />
          </Dialog>
        </div>
        <Snackbar
          active={this.state.snackbarClick}
          label="Песня успешно добавлена!"
          timeout={2000}
          onClick={this.handleSnackbarClick}
          onTimeout={this.handleSnackbarTimeout}
          type="accept"
        />
      </div>
    );
  }
}

export default connect()(AkkordsList);
