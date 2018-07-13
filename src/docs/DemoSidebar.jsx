import React from 'react';
import {
  SidebarLeft, SidebarMenu, SidebarMenuHeader, TreeView, TreeViewMenu,
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
          <li className="" href="#test">
            <a className="active" href="#test">
              <span>
Test
              </span>
            </a>
          </li>
        </TreeViewMenu>
      </TreeView>
    </SidebarMenu>
  </SidebarLeft>
);

export default { DemoSidebar };
