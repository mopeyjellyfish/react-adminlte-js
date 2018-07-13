import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class SidebarMenuHeader extends PureComponent {
  render() {
    const {
      children,
    } = this.props;
    return (
      <li className="header">
        {children}
      </li>
    );
  }
}
SidebarMenuHeader.propTypes = {
  children: PropTypes.node,
};
SidebarMenuHeader.defaultProps = {
  children: null,
};
export default { SidebarMenuHeader };
