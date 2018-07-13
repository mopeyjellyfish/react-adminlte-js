import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class Nav extends PureComponent {
  render() {
    const {
      children,
    } = this.props;
    return (
      <div className="navbar navbar-static-top" role="navigation">
        <div className="sidebar-toggle" onClick={this.togglesidebar} style={{ cursor: 'pointer' }} onKeyDown={this.togglesidebar} role="button" tabIndex={0}>
          <span className="sr-only">
Toggle navigation
          </span>
        </div>
        <span className="icon-bar" />
        <span className="icon-bar" />
        <span className="icon-bar" />
        <div className="navbar-custom-menu">
          <ul className="nav navbar-nav">
            {children}
            <li>
              <a style={{ cursor: 'pointer' }} onClick={this.togglecontrol} onKeyDown={this.togglecontrol} role="button" tabIndex={0}>
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
