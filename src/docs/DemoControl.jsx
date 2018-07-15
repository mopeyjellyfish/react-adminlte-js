import React from 'react';
import {
  ControlBarRight, TabHeader, TabContent, TabPane, TabHeaderItem,
} from '../lib/index';

export const DemoControlbar = () => (
  <ControlBarRight>
    <TabHeader>
      <TabHeaderItem active>
        <a>
          <i className="fa fa-server" />
        </a>
      </TabHeaderItem>
      <TabHeaderItem>
        <a>
          <i className="fa fa-gear" />
        </a>
      </TabHeaderItem>
      <TabHeaderItem>
        <a>
          <i className="fa fa-plus" />
        </a>
      </TabHeaderItem>
    </TabHeader>
    <div className="tab-content">
      <div className="tab-pane" id="control-sidebar-home-tab">
        <p>
        test content here
        </p>
      </div>
    </div>
  </ControlBarRight>
);

export default { DemoControlbar };
