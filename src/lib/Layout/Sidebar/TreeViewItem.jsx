import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class TreeViewItem extends PureComponent {
  render() {
    const {
      children,
    } = this.props;
    return (

      <li>
        {children}
      </li>
    );
  }
}
TreeViewItem.propTypes = {
  children: PropTypes.node,
};
TreeViewItem.defaultProps = {
  children: null,
};
export default { TreeViewItem };
