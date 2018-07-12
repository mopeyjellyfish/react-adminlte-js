import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class Wrapper extends PureComponent {
  render() {
    const {
      children,
    } = this.props;
    return (
      <div className="wrapper" style={{ height: '100%' }}>
        {children}
      </div>
    );
  }
}
Wrapper.propTypes = {
  children: PropTypes.node,
};
Wrapper.defaultProps = {
  children: null,
};
export default { Wrapper };
