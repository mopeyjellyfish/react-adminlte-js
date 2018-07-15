import React from 'react';
import {
  HeaderWrapper, Logo, MiniLogo, LargeLogo, Nav, UserMenu, DropDownMenu,
} from '../lib/index';

export function DemoHeader() {
  return (
    <HeaderWrapper>
      <Logo>
        <MiniLogo>
          <b>
Test
          </b>
        </MiniLogo>
        <LargeLogo>
          <b>
Test
          </b>
          {' '}
Page
        </LargeLogo>
      </Logo>
      <Nav>
        <DropDownMenu menu="messages" icon="fa fa-envelope-o" label="success" labelText="1" header="Test Header">
          <li>
            <p>
            test data
            </p>
          </li>
        </DropDownMenu>
        <DropDownMenu menu="notifications" icon="fa fa-bell-o" label="warning" labelText="90" header="Test Header">
          <li>
            <p>
            test data
            </p>
          </li>
        </DropDownMenu>
        <DropDownMenu menu="tasks" icon="fa fa-flag-o" label="danger" labelText="100+" header="Test Header">
          <li>
            <p>
            test data
            </p>
          </li>
        </DropDownMenu>

        <UserMenu
          name="Test User"
          title="Admin"
          description="The test user"
          buttons={[
            { key: 1, text: 'Profile', align: 'left' },
            { key: 2, text: 'Logout', align: 'right' },
          ]}
        />
      </Nav>
    </HeaderWrapper>
  );
}

export default { DemoHeader };
