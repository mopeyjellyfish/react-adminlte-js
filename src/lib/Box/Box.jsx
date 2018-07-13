import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Box extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: props.expanded,
    };
    this.onExpandClick = this.onExpandClick.bind(this);
  }

  onExpandClick() {
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
    } = this.props;
    const {
      expanded,
    } = this.state;
    return (
      <div className={`box ${solid ? 'box-solid' : null} ${color ? `box-${color}` : null}`}>
        <div className="box-header with-border" onClick={this.onExpandClick} onKeyDown={this.onExpandClick} role="button" tabIndex={0}>
          { title && (
          <h3 className="box-title">
            {title}
          </h3>
          )}
          <div className="box-tools pull-right" onClick={this.onExpandClick} onKeyDown={this.onExpandClick} role="button" tabIndex={0}>
            {
                                expandable && !expanded
                                && (<i className="fa fa-window-maximize" onClick={this.onExpandClick} onKeyDown={this.onExpandClick} role="button" tabIndex={0} />)
                            }
            {
                                expandable && expanded
                                && (<i className="fa fa-window-minimize" onClick={this.onExpandClick} onKeyDown={this.onExpandClick} role="button" tabIndex={0} />)
                            }
          </div>
        </div>
        <div className={expanded ? 'box-body' : 'box_body hide'}>
          {children}
        </div>
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
  color: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
};
Box.defaultProps = {
  solid: false,
  footer: true,
  expanded: true,
  expandable: true,
  color: null,
  title: '',
  children: null,
};
export default { Box };
