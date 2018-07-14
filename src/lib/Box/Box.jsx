import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Box extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: props.expanded,
      dismissed: false,
    };
    this.onExpandClick = this.onExpandClick.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    console.log(`expanded ${this.state.expanded} dismissed ${this.state.dismissed}`);
    this.setState(prevState => ({ dismissed: !prevState.dismissed }));
  }

  onExpandClick() {
    console.log(`expanded ${this.state.expanded} dismissed ${this.state.dismissed}`);
    this.setState(prevState => ({ expanded: !prevState.expanded }));
  }

  render() {
    const {
      children,
      solid,
      color,
      title,
      expandable,
      footer,
      loading,
      badge,
      badgeColor,
      badgeMessage,
      icon,
      dismissible,
    } = this.props;
    const {
      expanded,
      dismissed,
    } = this.state;
    return !dismissed && (
      <div className={`box ${solid ? 'box-solid' : ''} ${color ? `box-${color}` : ''}`}>
        <div className="box-header with-border" onClick={this.onExpandClick} onKeyDown={this.onExpandClick} role="button" tabIndex={0}>
          {
              icon && (
                <i className={`icon ${icon}`} />)
          }
          { title && (
          <h3 className="box-title">
            {title}
          </h3>
          )}
          <div className="box-tools pull-right" onClick={this.onExpandClick} onKeyDown={this.onExpandClick} role="button" tabIndex={0} data-widget="collapse">
            {
                              badge && (
                              <span data-toggle="tooltip" title={badge} className={`badge bg-${badgeColor}`}>
                                {badgeMessage}
                              </span>
                              )
                            }
            {
              expandable && (
                <button type="button" className="btn btn-box-tool" onClick={this.onExpandClick} onKeyDown={this.onExpandClick}>

                  {
                                !expanded
                                && (
                                <i className="fa fa-plus" />)
                            }
                  {
                                expanded
                                && (<i className="fa fa-minus" />)
                            }
                </button>)
            }
            {
              dismissible && (
                <button type="button" className="btn btn-box-tool" onClick={this.onDismiss} onKeyDown={this.onDismiss} data-widget="remove">
                  <i className="fa fa-times" />
                </button>
              )
          }
          </div>
        </div>
        <div className={expanded ? 'box-body' : 'box_body hide'}>
          {children}
        </div>
        {
          loading && (
          <div className="overlay">
            <i className="fa fa-refresh fa-spin" />
          </div>
          )
        }
        {
        footer && (<div className={solid ? `box-footer box-footer-solid ${color}` : `box-footer ${color}`} />)
        }
      </div>
    );
  }
}
Box.propTypes = {
  solid: PropTypes.bool,
  expanded: PropTypes.bool,
  expandable: PropTypes.bool,
  footer: PropTypes.bool,
  loading: PropTypes.bool,
  color: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
  badge: PropTypes.string,
  badgeColor: PropTypes.string,
  badgeMessage: PropTypes.string,
  icon: PropTypes.string,
  dismissible: PropTypes.bool,
};
Box.defaultProps = {
  solid: false,
  footer: true,
  expanded: true,
  expandable: true,
  color: null,
  title: '',
  loading: false,
  children: null,
  badge: null,
  badgeColor: 'green',
  badgeMessage: '',
  icon: null,
  dismissible: false,
};
export default { Box };
