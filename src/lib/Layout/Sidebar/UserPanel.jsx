import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import noAvatar from '../../images/no-avatar.png';

export class UserPanel extends PureComponent {
  render() {
    const {
      children,
      avatar,
    } = this.props;
    return (
      <div className="user-panel">
        <div className="pull-left image">
          <img src={avatar || noAvatar} className="img-circle" alt="User" />
        </div>
        <div className="pull-left info">
          {children}
        </div>
      </div>
    );
  }
}
UserPanel.propTypes = {
  avatar: PropTypes.string,
  children: PropTypes.node,
};
UserPanel.defaultProps = {
  avatar: null,
  children: null,
};
export default { UserPanel };
