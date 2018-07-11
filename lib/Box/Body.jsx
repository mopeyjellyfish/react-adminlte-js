import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Body extends Component {
  render() {
    const {
      expanded
      children,
    } = this.props;
    return (
        <div className={expanded ? 'box-body' : 'box_body hide'}>
          {children}
        </div>

    );
  }
}
Body.propTypes = {
    expanded: PropTypes.bool,
  children: PropTypes.node,
};
Body.defaultProps = {
  expanded: true,
  children: null,
};
export default { Body };
