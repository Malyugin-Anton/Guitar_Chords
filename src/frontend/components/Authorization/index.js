import React from 'react';
import Input from 'react-toolbox/lib/input';
import { Button } from 'react-toolbox/lib/button';
import { Link } from 'react-router-dom';
import Dialog from 'react-toolbox/lib/dialog';

class Authorization extends React.Component {
  state = { phone: '', password: '', code: '', active: false };

  handleChange = (name, value) => {
    this.setState({ ...this.state, [name]: value });
  };

  hangleClick = () => {
    this.setState({ active: !this.state.active });
  };

  render () {
    return (
      <div className="login">
        <div className="login__wrapper">
          <div className="login__form">
            <h1>Авторизация</h1>
            <form>
              <Input
                type="tel"
                label="Введите номер телефона"
                hint="+7(906)821-45-78"
                name="phone"
                required
                value={this.state.phone}
                onChange={this.handleChange.bind(this, 'phone')}
              />
              <Link to="/">
                <Button label="Главная" flat />
              </Link>
              <Button label="Далее" flat onClick={this.hangleClick} />
              <Dialog
                active={this.state.active}
                onEscKeyDown={this.hangleClick}
                onOverlayClick={this.hangleClick}
                title="Введите код"
              >
                <Input
                  type="password"
                  label="Введите код"
                  name="code"
                  value={this.state.code}
                  onChange={this.handleChange.bind(this, 'code')}
                />
                <Button label="OK" onClick={this.hangleClick} />
              </Dialog>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Authorization;
