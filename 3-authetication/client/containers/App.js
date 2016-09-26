import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import {
  setUserName,
  setPassword,
} from 'actions/user';

import {
  login,
} from 'actions/ui';

const mapStateToProps = (state) => ({
  username: state.user.username,
  password: state.user.password,
});

const mapDispatchToProps = {
  setUserName,
  setPassword,
  login,
}

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {
  static propTypes = {
    username: PropTypes.string,
    password: PropTypes.string,
    setUserName: PropTypes.func,
    setPassword: PropTypes.func,
    login: PropTypes.func,
  }

  setUsername = (e) => {
    this.props.setUserName(e.target.value);
  }

  setPassword = (e) => {
    this.props.setPassword(e.target.value);
  }

  login = (e) => {
    this.props.login();
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.username}
          onChange={this.setUsername}
          placeholder="username"
        />
        <input
          type="password"
          value={this.props.password}
          onChange={this.setPassword}
          placeholder="password"
        />
        <button
          onClick={this.login}
        >Login</button>
      </div>
    );
  }
}
