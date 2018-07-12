import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class MiniLogo extends PureComponent {
  render() {
    const {
      children,
    } = this.props;
    return (
      <div className="logo-mini">
        {children}
      </div>
    );
  }
}
MiniLogo.propTypes = {
  children: PropTypes.node,
};
MiniLogo.defaultProps = {
  children: null,
};
export default { MiniLogo };
