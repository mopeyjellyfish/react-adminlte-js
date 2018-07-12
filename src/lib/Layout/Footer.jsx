import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class Footer extends PureComponent {
  render() {
    const {
      children,
    } = this.props;
    return (
      <div className="main-footer">
        {children}
      </div>
    );
  }
}
Footer.propTypes = {
  children: PropTypes.node,
};
Footer.defaultProps = {
  children: null,
};
export default { Footer };
