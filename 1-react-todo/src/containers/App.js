import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import styles from 'styles';

import TodoInput from 'components/TodoInput';
import TodoSwitcher from 'components/TodoSwitcher';
import TodoList from 'components/TodoList';

const mapStateToProps = state => ({
  hydrated: state.ui.hydrated,
});

@connect(mapStateToProps)
export default class App extends Component {
  static propTypes = {
    hydrated: PropTypes.bool,
  }

  render() {
    if (!this.props.hydrated) return null;

    return (
      <div style={styles.app}>
        <TodoInput />
        <TodoSwitcher />
        <TodoList />
      </div>
    );
  }
}
