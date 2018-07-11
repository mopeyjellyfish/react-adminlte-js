import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Footer } from './Footer';
import { Body } from './Body';
import { Tools } from './Tools';

export class Box extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: ('expanded' in props) ? props.expanded : true,
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
      boxColor,
      title,
      expandable,
      footer,
    } = this.props;
    const {
      expanded,
    } = this.state;
    return (
      <div className={solid ? `box box-solid box-${boxColor}` : `box box-${boxColor}`}>
        <div className="box-header with-border">
          <div className="box-title" onClick={this.onExpandClick} onKeyDown={this.onExpandClick} role="button" tabIndex={0}>
            {
                                title
                                && (
                                <h3>
                                  {title}
                                </h3>
                                )
                            }
          </div>
        </div>
        <Tools {...expanded ...expandable} />
        <Body {...expanded}>
          {children}
        </Body>
        {
          footer ? (<Footer {...this.props} />) : null

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
  boxColor: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
};
Box.defaultProps = {
  solid: false,
  footer: true,
  expanded: true,
  expandable: true,
  boxColor: 'success',
  title: '',
  children: null,
};
export default { Box };
