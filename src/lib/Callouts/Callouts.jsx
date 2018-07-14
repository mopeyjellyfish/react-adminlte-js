import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class Callout extends PureComponent {
  render() {
    const {
      children,
      icon,
      title,
      color,
    } = this.props;
    return (
      <div className={`callout ${color ? `callout-${color}` : ''}`}>
        <h4>
          {
              icon && (
                <i className={`icon ${icon}`} />)
          }
          {' '}
          {title}
        </h4>
        {children}
      </div>
    );
  }
}
Callout.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
};
Callout.defaultProps = {
  color: 'info',
  icon: null,
  title: '',
  children: null,
};
export default { Callout };
