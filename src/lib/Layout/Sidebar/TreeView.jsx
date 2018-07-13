import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class TreeView extends PureComponent {
  render() {
    const {
      children,
      name,
      selected,
    } = this.props;
    return (
      <li id={`${name}-menu`} className={selected ? 'treeview menu-open active' : 'treeview'}>
        {children}
      </li>
    );
  }
}
TreeView.propTypes = {
  name: PropTypes.string,
  selected: PropTypes.bool,
  children: PropTypes.node,
};
TreeView.defaultProps = {
  name: '',
  selected: false,
  children: null,
};
export default { TreeView };
