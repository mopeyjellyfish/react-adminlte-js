import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class InfoIcon extends PureComponent {
  render() {
    const {
      children,
      color,
    } = this.props;
    return (
      <span className={`info-box-icon ${color ? `bg-${color}` : null}`}>
        {children}
      </span>
    );
  }
}
InfoIcon.propTypes = {
  color: PropTypes.bool,
  children: PropTypes.node,
};
InfoIcon.defaultProps = {
  color: null,
  children: null,
};
export default { InfoIcon };
