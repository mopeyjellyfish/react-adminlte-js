import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class ControlBarRight extends PureComponent {
  render() {
    const {
      children,
      color,
    } = this.props;
    return (
      <div>
        <aside className={`control-sidebar control-sidebar-${color}`}>
          {children}
        </aside>

        <div className="control-sidebar-bg" />
      </div>
    );
  }
}
ControlBarRight.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
};
ControlBarRight.defaultProps = {
  children: null,
  color: 'dark',
};
export default { ControlBarRight };
