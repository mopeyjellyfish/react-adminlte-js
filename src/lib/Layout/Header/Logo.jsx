import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class Logo extends PureComponent {
  render() {
    const {
      children, onClick,
    } = this.props;
    return (
      <div className="logo" onClick={onClick} onKeyDown={onClick} role="button" tabIndex={0}>
        {children}
      </div>
    );
  }
}
Logo.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};
Logo.defaultProps = {
  onClick: null,
  children: null,
};
export default { Logo };
