import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Avatar } from './Avatar';
import { UserMenuFooter } from './UserMenuFooter';

export class UserMenu extends PureComponent {
  render() {
    const {
      image,
      name,
      buttons,
      title,
      description,
      onButtonClick,
    } = this.props;

    const RenderedButtons = buttons.map(button => (
      <div key={button.text} className={`pull-${button.align}`}>
        <button onClick={() => onButtonClick(button)}>
          {button.text}
        </button>
      </div>
    ));
    return (
      <li className="dropdown user user-menu">
        <a className="dropdown-toggle user-top-image" style={{ cursor: 'pointer' }} data-toggle="dropdown">
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
};
UserMenu.defaultProps = {
  image: '',
  name: '',
  buttons: [],
  title: '',
  description: '',
  onButtonClick: null,
};
export default { UserMenu };
