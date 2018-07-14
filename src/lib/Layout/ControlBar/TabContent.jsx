import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class TabContent extends PureComponent {
  render() {
    const {
      children,
    } = this.props;
    return (
      <div className="tab-content">
        {children}
      </div>
    );
  }
}
TabContent.propTypes = {
  children: PropTypes.node,
};
TabContent.defaultProps = {
  children: null,
};
export default { TabContent };
