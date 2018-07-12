import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class UserMenuFooter extends PureComponent {
  render() {
    const {
      children,
    } = this.props;
    return (
      <li className="user-footer">
        {children}
      </li>
    );
  }
}
UserMenuFooter.propTypes = {
  children: PropTypes.node,
};
UserMenuFooter.defaultProps = {
  children: null,
};
export default { UserMenuFooter };

/* user-footer */
