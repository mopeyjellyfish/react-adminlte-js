import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class TabPane extends PureComponent {
  render() {
    const {
      children,
      id,
    } = this.props;
    return (
      <div className="tab-pane" id={id}>
        {children}
      </div>
    );
  }
}
TabPane.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
};
TabPane.defaultProps = {
  children: null,
  id: '',
};
export default { TabPane };
