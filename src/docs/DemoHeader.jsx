import React from 'react';
import {
  HeaderWrapper, Logo, MiniLogo, LargeLogo, Nav, UserMenu,
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
