import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Alert extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dismissed: false,
    };
    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState(prevState => ({ dismissed: !prevState.dismissed }));
  }

  render() {
    const {
      children,
      dismissible,
      icon,
      title,
      color,
    } = this.props;
    const {
      dismissed,
    } = this.state;
    return !dismissed && (
      <div className={`alert ${color ? `alert-${color}` : ''} ${dismissible ? 'alert-dismissible' : ''}`}>
        {
          dismissible && (
          <button type="button" className="close" data-dismiss="alert" aria-hidden="true" onClick={this.onDismiss}>
          ×
          </button>
          )
      }
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
Alert.propTypes = {
  dismissible: PropTypes.bool,
  color: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
};
Alert.defaultProps = {
  dismissible: false,
  color: 'info',
  icon: null,
  title: '',
  children: null,
};
export default { Alert };
