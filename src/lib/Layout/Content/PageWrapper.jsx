import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class PageWrapper extends PureComponent {
  render() {
    const {
      children,
    } = this.props;
    return (
      <div className="content-wrapper">
        {children}
      </div>
    );
  }
}
PageWrapper.propTypes = {
  children: PropTypes.node,
};
PageWrapper.defaultProps = {
  children: null,
};
export default { PageWrapper };
