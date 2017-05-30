import React from 'react';
import Input from 'react-toolbox/lib/input';
import { Button } from 'react-toolbox/lib/button';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  state = { name: '', password: '' };

  handleChange = (name, value) => {
    this.setState({ ...this.state, [name]: value });
  };

  render () {
    return (
      <div className="login">
        <div className="login__wrapper">
          <div className="login__form">
            <h1>Авторизация</h1>
            <form>
              <Input
                type="text"
                label="Login"
                name="name"
                required
                value={this.state.name}
                onChange={this.handleChange.bind(this, 'name')}
                maxLength={16}
              />
              <Input
                type="password"
                label="Пароль"
                name="password"
                required
                value={this.state.phone}
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

export default Login;
