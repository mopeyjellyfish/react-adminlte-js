import React from 'react';
import {
  SidebarLeft, SidebarMenu, SidebarMenuHeader, TreeView, TreeViewMenu, TreeViewItem, UserPanel,
} from '../lib/index';

export const DemoSidebar = () => (
  <SidebarLeft>
    <UserPanel>
      <p>
Test Admin
      </p>
      <a href="#">
        <i className="fa fa-circle text-success" />
        {' '}
Online
      </a>
    </UserPanel>
    <SidebarMenu>
      <SidebarMenuHeader>
      SIDEBAR ITEMS
      </SidebarMenuHeader>
      <TreeView name="test">
        <a className="active">
          <i className="fa fa-dashboard" />
          <span>
Test
          </span>
        </a>
        <TreeViewMenu>
          <TreeViewItem>
            <a className="active" href="#test">
              <span>
Test
              </span>
            </a>
          </TreeViewItem>
        </TreeViewMenu>
      </TreeView>
      <TreeViewItem>
        <a className="active" href="#test1">
          <i className="fa fa-gamepad" />
          <span>
Test
          </span>
        </a>
      </TreeViewItem>
    </SidebarMenu>
  </SidebarLeft>
);

export default { DemoSidebar };
