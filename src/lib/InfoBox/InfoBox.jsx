import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class InfoBox extends PureComponent {
  render() {
    const {
      children,
      color,
    } = this.props;
    return (
      <div className={`info-box ${color ? `bg-${color}` : null}`}>
        {children}
      </div>
    );
  }
}
InfoBox.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node,
};
InfoBox.defaultProps = {
  color: null,
  children: null,
};
export default { InfoBox };
