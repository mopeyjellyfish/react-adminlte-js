import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import noAvatar from '../../../images/no-avatar.png';

export class Avatar extends PureComponent {
  render() {
    const {
      avatar,
    } = this.props;
    return (
      <img src={avatar || noAvatar} className="user-avatar" alt="User" />
    );
  }
}
Avatar.propTypes = {
  avatar: PropTypes.string,
};
Avatar.defaultProps = {
  avatar: null,
};
export default { Avatar };
