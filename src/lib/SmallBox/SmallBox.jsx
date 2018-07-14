import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class SmallBox extends PureComponent {
  render() {
    const {
      children,
      color,
    } = this.props;
    return (
      <div className={`small-box ${color ? `bg-${color}` : ''}`}>
        {children}
      </div>
    );
  }
}
SmallBox.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node,
};
SmallBox.defaultProps = {
  color: null,
  children: null,
};
export default { SmallBox };
