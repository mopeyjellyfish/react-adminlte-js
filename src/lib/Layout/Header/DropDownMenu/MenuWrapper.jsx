import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class DropDownMenu extends PureComponent {
  render() {
    const {
      menu,
      icon,
      label,
      labelText,
      header,
      children,
    } = this.props;
    return (
      <li className={`dropdown ${menu}-menu`}>
        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
          <i className={icon} />
          <span className={`label label-${label}`}>
            {labelText}
          </span>
        </a>
        <ul className="dropdown-menu">
          <li className="header">
            {header}
          </li>
          <li>
            <ul className="menu">
              {children}
            </ul>
          </li>
        </ul>
      </li>
    );
  }
}
DropDownMenu.propTypes = {
  menu: PropTypes.string,
  header: PropTypes.string,
  icon: PropTypes.string,
  label: PropTypes.string,
  labelText: PropTypes.string,
  children: PropTypes.node,
};
DropDownMenu.defaultProps = {
  menu: 'messsages',
  icon: '',
  label: 'success',
  labelText: '',
  header: '',
  children: null,
};
export default { DropDownMenu };
