import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class InfoBox extends PureComponent {
  render() {
    const {
      children,
    } = this.props;
    return (
      <div className="info-box">
        {children}
      </div>
    );
  }
}
InfoBox.propTypes = {
  children: PropTypes.node,
};
InfoBox.defaultProps = {
  children: null,
};
export default { InfoBox };
