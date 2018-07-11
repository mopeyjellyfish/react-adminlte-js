import React, { Component } from 'react';
import PropTypes from 'prop-types';

export Footer () => {
  render() {
    const {
      solid,
      boxColor,
    } = this.props;
    return (
      <div className={solid ? `box-footer box-footer-solid ${boxColor}` : `box-footer ${boxColor}`}>
        {this.props.children}
      </div>

    );
  }
}
Footer.propTypes = {
  solid: PropTypes.bool,
  boxColor: PropTypes.string,
  children: PropTypes.node,
};
Footer.defaultProps = {
  solid: false,
  boxColor: 'success',
  children: null,
};
export default { Footer };
