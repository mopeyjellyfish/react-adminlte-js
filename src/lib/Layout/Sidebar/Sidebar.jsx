import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class SidebarLeft extends PureComponent {
  render() {
    const {
      children,
    } = this.props;
    return (
      <aside className="main-sidebar">
        <section className="sidebar">
          {children}
        </section>
      </aside>
    );
  }
}
SidebarLeft.propTypes = {
  children: PropTypes.node,
};
SidebarLeft.defaultProps = {
  children: null,
};
export default { SidebarLeft };
