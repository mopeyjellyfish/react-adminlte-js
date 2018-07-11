import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class InfoContent extends PureComponent {
  render() {
    const {
      children,
    } = this.props;
    return (
      <div className="info-box-content">
        {children}
      </div>
    );
  }
}
InfoContent.propTypes = {
  children: PropTypes.node,
};
InfoContent.defaultProps = {
  children: null,
};
export default { InfoContent };
