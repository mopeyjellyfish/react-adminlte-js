import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class LargeLogo extends PureComponent {
  render() {
    const {
      children,
    } = this.props;
    return (
      <div className="logo-lg">
        {children}
      </div>
    );
  }
}
LargeLogo.propTypes = {
  children: PropTypes.node,
};
LargeLogo.defaultProps = {
  children: null,
};
export default { LargeLogo };
