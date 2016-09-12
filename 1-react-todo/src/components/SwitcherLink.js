import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';

import {
  push,
} from 'actions/routing';

import styles from 'styles';

const mapStateToProps = state => ({
  route: state.ui.route.name,
});

const mapDispatchToProps = {
  push,
};

@connect(mapStateToProps, mapDispatchToProps)
@Radium
export default class TodoInput extends Component {
  static propTypes = {
    route: PropTypes.string,
    to: PropTypes.string,
    title: PropTypes.title,
    push: PropTypes.func,
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.push(this.props.to);
  }

  render() {
    const {
      to,
      title,
    } = this.props;
    const isCurrentRoute = this.props.title.toLowerCase() === this.props.route;
    return (
      <a
        href={to}
        onClick={this.handleClick}
        style={[
          styles.link,
          isCurrentRoute && styles.active,
        ]}
      >
        {title}
      </a>
    );
  }
}
