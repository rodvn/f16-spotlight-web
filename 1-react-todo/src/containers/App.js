import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import TodoInput from 'components/TodoInput';
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
      <div>
        <TodoInput />
        <TodoList />
      </div>
    );
  }
}
