import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class SmallBoxFooter extends PureComponent {
  render() {
    const {
      children,
      href,
    } = this.props;
    return (
      <a className="small-box-footer" href={href}>
        {children}
      </a>
    );
  }
}
SmallBoxFooter.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
};
SmallBoxFooter.defaultProps = {
  href: '',
  children: null,
};
export default { SmallBoxFooter };
