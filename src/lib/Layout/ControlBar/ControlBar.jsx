import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class ControlBarRight extends PureComponent {
  render() {
    const {
      children,
    } = this.props;
    return (
      <aside className="control-sidebar control-sidebar-dark">
        {children}
      </aside>
    );
  }
}
ControlBarRight.propTypes = {
  children: PropTypes.node,
};
ControlBarRight.defaultProps = {
  children: null,
};
export default { ControlBarRight };
