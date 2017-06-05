import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-toolbox/lib/button';
import Dialog from 'react-toolbox/lib/dialog';
// import { Link } from 'react-router-dom';
import Input from 'react-toolbox/lib/input';
import $ from 'jquery';

class AkkordsList extends React.Component {
  static propTypes = {
    addText: PropTypes.string,
    akkords: PropTypes.array,
    akkordsList: PropTypes.array,
    dispatch: PropTypes.func,
    tone: PropTypes.number
  };

  state = {
    active: false,
    name: ''
  };

  hangleClick = () => {
    this.setState({ active: !this.state.active });
  };

  handleChange = (name, value) => {
    this.setState({ ...this.state, [name]: value });
  };

  hangleClickAdd = () => {
    $.ajax({
      url: 'http://dev.0xff.space:8088/api/songs/',
      contentType: 'application/json',
      type: 'POST',
      data: JSON.stringify({
        name: this.state.name,
        text: this.props.addText,
        user: '592c336c152b3b18c7d98e83'
      }),
      success: function (data) {
        console.log('data ', data);
      },
      dataType: 'json'
    });
    //-------- GET ---------5935a1c81ad06761ec04228e
    // $.ajax({
    //   url:
    //     'http://dev.0xff.space:8088/api/songs/?criteria={"_id": "5935a1c81ad06761ec04228e"}',
    //   type: 'GET',
    //   success: function (data) {
    //     console.log('data ', data);
    //   },
    //   dataType: 'json'
    // });
    // --- DELETE ----
    // $.ajax({
    //   url:
    //     'http://dev.0xff.space:8088/api/songs/?citeria={"_id": "59359f1580ae4e614c3f4f34"}',
    //   type: 'DELETE',
    //   contentType: 'application/json',
    //   success: function (data) {
    //     console.log('data ', data);
    //   },
    //   dataType: 'json'
    // });
    this.setState({ active: !this.state.active });
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
            onClick={this.hangleClick}
          />
          {/* <Dialog
            active={this.state.active}
            onEscKeyDown={this.hangleClick}
            onOverlayClick={this.hangleClick}
            title="Предупреждение"
          >
            <p>
              Для того чтобы сохранить песню нужно войти в систему
            </p>
            <nav className="dialog__nav">
              <Button
                icon="cancel"
                label="Отмена"
                flat
                onClick={this.hangleClick}
              />
              <Link to="/login">
                <Button
                  icon="perm_identity"
                  label="Войти"
                  flat
                  onClick={this.hangleClick}
                />
              </Link>
            </nav>
          </Dialog> */}
          <Dialog
            active={this.state.active}
            onEscKeyDown={this.hangleClick}
            onOverlayClick={this.hangleClick}
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
      </div>
    );
  }
}

//mapStateToProps - это функция, которая должна возвращать объект.
//Поля этого объекта станут свойствами компонента
// function mapStateToProps (state) {
//   return {
//     akkords: state.akkords,
//     tone: state.tone
//     // click: state.buttonClick
//   };
// }
//export default connect(mapStateToProps, {})(AkkordsList);

export default connect()(AkkordsList);
