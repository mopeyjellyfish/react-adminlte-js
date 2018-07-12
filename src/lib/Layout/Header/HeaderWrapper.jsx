import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class HeaderWrapper extends PureComponent {
  render() {
    const {
      children,
    } = this.props;
    return (
      <div className="main-header">
        {children}
      </div>
    );
  }
}
HeaderWrapper.propTypes = {
  children: PropTypes.node,
};
HeaderWrapper.defaultProps = {
  children: null,
};
export default { HeaderWrapper };
