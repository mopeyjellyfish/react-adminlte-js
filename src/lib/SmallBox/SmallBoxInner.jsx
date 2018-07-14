import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class SmallBoxInner extends PureComponent {
  render() {
    const {
      children,
    } = this.props;
    return (
      <div className="inner">
        {children}
      </div>
    );
  }
}
SmallBoxInner.propTypes = {
  children: PropTypes.node,
};
SmallBoxInner.defaultProps = {
  children: null,
};
export default { SmallBoxInner };
