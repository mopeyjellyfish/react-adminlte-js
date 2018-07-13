import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class SidebarMenu extends PureComponent {
  render() {
    const {
      children,
    } = this.props;
    return (
      <ul className="sidebar-menu tree" data-widget="tree">
        {children}
      </ul>
    );
  }
}
SidebarMenu.propTypes = {
  children: PropTypes.node,
};
SidebarMenu.defaultProps = {
  children: null,
};
export default { SidebarMenu };
