import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class InfoData extends PureComponent {
  render() {
    const {
      type,
      children,
    } = this.props;
    return (
      <span className={`info-box-${type}`}>
        {children}
      </span>
    );
  }
}
InfoData.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
};
InfoData.defaultProps = {
  type: 'text',
  children: null,
};
export default { InfoData };
