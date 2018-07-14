import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class SmallBoxIcon extends PureComponent {
  render() {
    const {
      children,
    } = this.props;
    return (
      <div className="icon">
        {children}
      </div>
    );
  }
}
SmallBoxIcon.propTypes = {
  children: PropTypes.node,
};
SmallBoxIcon.defaultProps = {
  children: null,
};
export default { SmallBoxIcon };
