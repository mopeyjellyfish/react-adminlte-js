import React from 'react';
import {
  SidebarLeft, SidebarMenu, SidebarMenuHeader, TreeView, TreeViewMenu, TreeViewItem,
} from '../lib/index';

export const DemoSidebar = () => (
  <SidebarLeft>
    <SidebarMenu>
      <SidebarMenuHeader>
      SIDEBAR ITEMS
      </SidebarMenuHeader>
      <TreeView name="test">
        <a className="active" href="#test">
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
