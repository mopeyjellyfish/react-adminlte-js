import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class TabHeaderItem extends PureComponent {
  render() {
    const {
      children,
      active,
    } = this.props;
    return (
      <li className={`${active ? 'active' : ''}`}>
        {children}
      </li>
    );
  }
}
TabHeaderItem.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
};
TabHeaderItem.defaultProps = {
  children: null,
  active: false,
};
export default { TabHeaderItem };
