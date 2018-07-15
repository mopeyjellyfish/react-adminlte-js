import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class PageHeader extends PureComponent {
  render() {
    const {
      children,
      title,
      subTitle,
    } = this.props;
    return (
      <div className="content-header">
        <h1>
          {title}
          <small>
            {subTitle}
          </small>
        </h1>
        {children}
      </div>
    );
  }
}
PageHeader.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  children: PropTypes.node,
};
PageHeader.defaultProps = {
  title: '',
  subTitle: '',
  children: null,
};
export default { PageHeader };
