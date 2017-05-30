import React from 'react';
import Input from 'react-toolbox/lib/input';
import { Button } from 'react-toolbox/lib/button';
import { Link } from 'react-router-dom';

class Registration extends React.Component {
  state = { login: '', phone: '', password: '' };

  handleChange = (name, value) => {
    this.setState({ ...this.state, [name]: value });
  };

  render () {
    return (
      <div className="login">
        <div className="login__wrapper">
          <div className="login__form">
            <h1>Регистрация</h1>
            <form>
              <Input
                type="text"
                label="Login"
                name="login"
                required
                value={this.state.login}
                onChange={this.handleChange.bind(this, 'login')}
                maxLength={16}
              />
              <Input
                type="tel"
                label="Phone"
                hint="+7(906)821-45-78"
                name="phone"
                required
                value={this.state.phone}
                onChange={this.handleChange.bind(this, 'phone')}
              />
              <Input
                type="password"
                label="Пароль"
                name="password"
                required
                value={this.state.password}
                onChange={this.handleChange.bind(this, 'password')}
              />
              <Link to="/login">
                <Button label="Вход" flat />
              </Link>
              <Link to="/registration">
                <Button label="Регистрация" flat />
              </Link>
              <Link to="/">
                <Button label="Главная" flat />
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Registration;
