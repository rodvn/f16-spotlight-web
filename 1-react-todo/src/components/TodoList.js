import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import VelocityTransitionGroup from 'velocity-react/velocity-transition-group';
import velocityHelpers from 'velocity-react/velocity-helpers';

import {
  setTodoComplete,
  deleteTodo,
} from 'actions/todos';

import {
  todoSelector,
} from 'reducers/todos';

const Animations = {
  In: velocityHelpers.registerEffect({
    calls: [
      [{
        transformPerspective: [800, 800],
        transformOriginX: ['50%', '50%'],
        transformOriginY: ['100%', '100%'],
        marginBottom: 0,
        opacity: 1,
        rotateX: [0, 130],
      }, 1, {
        easing: 'ease-out',
        display: 'block',
      }],
    ],
  }),

  Out: velocityHelpers.registerEffect({
    calls: [
      [{
        transformPerspective: [800, 800],
        transformOriginX: ['50%', '50%'],
        transformOriginY: ['0%', '0%'],
        marginBottom: -30,
        opacity: 0,
        rotateX: -70,
      }, 1, {
        easing: 'ease-out',
        display: 'block',
      }],
    ],
  }),
};

const enterAnimation = {
  animation: Animations.In,
  stagger: 500,
  duration: 500,
  backwards: true,
  display: 'block',
  style: {
    // Since we're staggering, we want to keep the display at "none" until Velocity runs
    // the display attribute at the start of the animation.
    display: 'none',
  },
};

const leaveAnimation = {
  animation: Animations.Out,
  stagger: 500,
  duration: 500,
  backwards: true,
};

const mapStateToProps = state => ({
  todos: todoSelector(state),
});

const mapDispatchToProps = {
  setTodoComplete,
  deleteTodo,
};

@connect(mapStateToProps, mapDispatchToProps)
export default class TodoInput extends Component {
  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object),
    setTodoInputValue: PropTypes.func,
    deleteTodo: PropTypes.func,
  }

  render() {
    const {
      todos,
    } = this.props;

    const rows = todos.map(todo => (
      <div
        key={todo.key}
        style={{
          height: '30px',
          width: '200px',
          lineHeight: '30px',
          borderBottom: '1px solid #000',
          paddingLeft: '10px',
          background: '#ccc',
        }}
      >
        {todo.text}
      </div>
    ));
    return (
      <VelocityTransitionGroup
        component="div"
        enter={enterAnimation}
        leave={leaveAnimation}
      >
        {rows}
      </VelocityTransitionGroup>
    );
  }
}
