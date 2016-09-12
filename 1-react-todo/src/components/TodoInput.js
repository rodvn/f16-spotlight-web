import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';

import {
  setTodoInputValue,
} from 'actions/ui';

import {
  addTodo,
} from 'actions/todos';

import styles from 'styles';

const mapStateToProps = state => ({
  value: state.ui.inputValue,
});

const mapDispatchToProps = {
  setTodoInputValue,
  addTodo,
};

@connect(mapStateToProps, mapDispatchToProps)
@Radium
export default class TodoInput extends Component {
  static propTypes = {
    value: PropTypes.string,
    setTodoInputValue: PropTypes.func,
    addTodo: PropTypes.func,
  }

  handleChange = (e) => {
    this.props.setTodoInputValue(e.target.value);
  }

  handleKeyPress = (e) => {
    if (e.charCode === 13 && this.props.value.length) {
      this.props.addTodo(this.props.value);
      this.props.setTodoInputValue('');
    }
  }

  render() {
    const {
      value,
    } = this.props;
    return (
      <input
        style={styles.input}
        type="text"
        placeholder="Hit enter to add a todo"
        value={value}
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
      />
    );
  }
}
