import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class PageContent extends PureComponent {
  render() {
    const {
      children,
    } = this.props;
    return (
      <div className="content">
        {children}
      </div>
    );
  }
}
PageContent.propTypes = {
  children: PropTypes.node,
};
PageContent.defaultProps = {
  children: null,
};
export default { PageContent };
