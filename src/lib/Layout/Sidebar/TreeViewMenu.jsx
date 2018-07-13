import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class TreeViewMenu extends PureComponent {
  render() {
    const {
      children,
    } = this.props;
    return (
      <ul className="treeview-menu">
        {children}
      </ul>
    );
  }
}
TreeViewMenu.propTypes = {
  children: PropTypes.node,
};
TreeViewMenu.defaultProps = {
  children: null,
};
export default { TreeViewMenu };
