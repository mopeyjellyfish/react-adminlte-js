import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class TabHeader extends PureComponent {
  render() {
    const {
      children,
    } = this.props;
    return (
      <ul className="nav nav-tabs nav-justified control-sidebar-tabs">
        {children}
      </ul>
    );
  }
}
TabHeader.propTypes = {
  children: PropTypes.node,
};
TabHeader.defaultProps = {
  children: null,
};
export default { TabHeader };
