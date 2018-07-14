import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Avatar } from './Avatar';
import { UserMenuFooter } from './UserMenuFooter';

export class UserMenu extends Component {
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
      image,
      name,
      buttons,
      title,
      description,
      onButtonClick,
    } = this.props;
    const { expanded } = this.state;
    const RenderedButtons = buttons.map(button => (
      <div key={button.text} className={`pull-${button.align}`}>
        <button onClick={() => onButtonClick(button)} type="button" className="btn btn-default btn-flat">
          {button.text}
        </button>
      </div>
    ));
    return (
      <li className={`dropdown user user-menu ${expanded ? 'open' : ''}`}>
        <a className="dropdown-toggle user-top-image" style={{ cursor: 'pointer' }} onClick={this.onExpandClick} onKeyDown={this.onExpandClick} role="button" tabIndex={0}>
          <Avatar avatar={image} />
          <span className="hidden-xs">
            {name}
          </span>
        </a>
        <ul className="dropdown-menu">
          <li className="user-header">
            <Avatar className="img-circle" avatar={image} />
            <p>
              {title}
              <small>
                {description}
              </small>
            </p>
          </li>
          <UserMenuFooter>
            {RenderedButtons}
          </UserMenuFooter>
        </ul>
      </li>
    );
  }
}
UserMenu.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  buttons: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  description: PropTypes.string,
  onButtonClick: PropTypes.func,
  expanded: PropTypes.bool,
};
UserMenu.defaultProps = {
  image: '',
  name: '',
  buttons: [],
  title: '',
  description: '',
  onButtonClick: null,
  expanded: false,
};
export default { UserMenu };
