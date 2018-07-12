import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class UserMenu extends PureComponent {
  render() {
    const {
      image,
      name,
      buttons,
      title,
      description,
      children,
    } = this.props;
    
    let buttons = buttons.map((button, index) => {
        return (
                <div key={index} className={'pull-' + button.align}>
                  <button onClick={() => this.props.onButtonClick(button)}>{button.text}</button>
                </div>
                );
      });
      return (
        <li className='dropdown user user-menu'>
          <a className='dropdown-toggle user-top-image' style={{ cursor: 'pointer' }} data-toggle='dropdown'>
            <Avatar avatar={image}/>
            <span className='hidden-xs'>{name}</span>
          </a>
          <ul className='dropdown-menu'>
            <li className='user-header'>
              <Avatar className='img-circle' avatar={image}/>
              <p>
                {title}
                <small>
                  {description}
                </small>
              </p>
            </li>
            <UserMenuFooter>
              {buttons}
            </UserMenuFooter>
          </ul>
        </li>
      )
    }
}
UserMenu.propTypes = {
  children: PropTypes.node,
};
UserMenu.defaultProps = {
  children: null,
};
export default { UserMenu };
