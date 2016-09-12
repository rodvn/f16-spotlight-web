import React from 'react';
import styles from 'styles';

import SwitcherLink from 'components/SwitcherLink';

const TodoSwitcher = () => (
  <div style={styles.switcher}>
    <SwitcherLink
      to="/"
      title="All"
    />
    <SwitcherLink
      to="/incomplete"
      title="Incomplete"
    />
    <SwitcherLink
      to="/completed"
      title="Completed"
    />
  </div>
);

export default TodoSwitcher;
