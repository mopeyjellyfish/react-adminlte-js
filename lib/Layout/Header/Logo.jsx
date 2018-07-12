import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Box extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: props.expanded,
    };
    this.onExpandClick = this.onExpandClick.bind(this);
  }

  onExpandClick() {
    this.setState(prevState => ({ expanded: !prevState.expanded }));
  }

  render() {
    const {
      children, onClick,
    } = this.props;
    const {
      expanded,
    } = this.state;
    return (
        <a className={} onClick={onClick}>
            {children}
        </a>
    );
  }
}
Box.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};
Box.defaultProps = {
  onClick: null,
  children: null,
};
export default { Box };
