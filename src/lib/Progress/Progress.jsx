import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class Progress extends PureComponent {
  render() {
    const {
      size,
      active,
      color,
      striped,
      max,
      min,
      value,
      vertical,
      children,
    } = this.props;
    return (
      <div className={`progress ${size ? `progress-${size}` : ''} ${active ? 'active' : ''} ${vertical ? 'vertical' : ''}`}>
        <div
          className={`progress-bar ${color ? `progress-bar-${color}` : ''} ${striped ? 'progress-bar-striped' : ''}`}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={min}
          aria-valuemax={max}
          style={{ width: `${value}%` }}
        >
          <span className="sr-only">
            {children}
          </span>
        </div>
      </div>
    );
  }
}
Progress.propTypes = {
  size: PropTypes.string,
  active: PropTypes.bool,
  vertical: PropTypes.bool,
  color: PropTypes.string,
  striped: PropTypes.bool,
  max: PropTypes.string,
  min: PropTypes.string,
  value: PropTypes.string,
  children: PropTypes.node,
};
Progress.defaultProps = {
  color: 'success',
  striped: false,
  active: false,
  vertical: false,
  max: '100',
  min: '0',
  value: '0',
  size: null,
  children: null,
};
export default { Progress };


/**/
