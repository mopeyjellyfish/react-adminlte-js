import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class InfoContent extends PureComponent {
  render() {
    const {
      children,
      color
    } = this.props;
    return (
      <span className={`info-box-icon ${color ? `bg-${color}` : null}`}>
        {children}
      </span>
    );
  }
}
InfoContent.propTypes = {
    color: PropTypes.bool
    children: PropTypes.node,
};
InfoContent.defaultProps = {
    color: 'aqua',
    children: null,
};
export default { InfoContent };

/* <div class="info-box">
            <i class="ion ion-ios-gear-outline"></i></span>

            <div class="info-box-content">
              <span class="info-box-text">CPU Traffic</span>
              <span class="info-box-number">90<small>%</small></span>
            </div>
</div> */
