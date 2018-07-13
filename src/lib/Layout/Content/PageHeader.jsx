import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class PageHeader extends PureComponent {
  render() {
    const {
      children,
    } = this.props;
    return (
      <div className="content-header">
        {children}
      </div>
    );
  }
}
PageHeader.propTypes = {
  children: PropTypes.node,
};
PageHeader.defaultProps = {
  children: null,
};
export default { PageHeader };
