import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class Nav extends PureComponent {
  render() {
    const {
      children,
    } = this.props;
    return (
      <div className="navbar navbar-static-top" role="navigation">
        <a className="sidebar-toggle" style={{ cursor: 'pointer' }} data-toggle="push-menu">
          <span className="sr-only">
Toggle navigation
          </span>
        </a>
        <span className="icon-bar" />
        <span className="icon-bar" />
        <span className="icon-bar" />
        <div className="navbar-custom-menu">
          <ul className="nav navbar-nav">
            {children}
            <li>
              <a style={{ cursor: 'pointer' }} data-toggle="control-sidebar">
                <i className="fa fa-server" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
Nav.propTypes = {
  children: PropTypes.node,
};
Nav.defaultProps = {
  children: null,
};
export default { Nav };
