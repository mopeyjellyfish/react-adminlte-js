import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Breadcrumb extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(item) {
    const { onBreadcrumbClick } = this.props;
    if (item && item.url && onBreadcrumbClick) {
      onBreadcrumbClick(item.url);
    }
  }

  render() {
    const { items } = this.props;
    return (
      <ol className="breadcrumb">
        {
                items.map(item => (
                  <li className="breadcrumb_list" key={item.key}>
                    <a onClick={() => this.onClick(item)} onKeyDown={() => this.onClick(item)} role="button" tabIndex={0}>
                      {
                                item.icon
                                && <i className={item.icon} />
                            }
                      {item.title}
                    </a>
                  </li>
                ))
           }
      </ol>
    );
  }
}
Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  onBreadcrumbClick: PropTypes.func,
};
Breadcrumb.defaultProps = {
  items: null,
  onBreadcrumbClick: null,
};
export default { Breadcrumb };
