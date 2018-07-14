import React from 'react';
import { Box } from '../lib/index';

export const DemoBox = () => (
  <div>
    <div className="row">
      <div className="col-md-6 col-sm-12 col-xs-12">
        <Box
          title="Default"
        />
      </div>
      <div className="col-md-6 col-sm-12 col-xs-12">
        <Box
          title="Filters"
          color="success"
        />
      </div>
    </div>
    <div className="row">
      <div className="col-md-6 col-sm-12 col-xs-12">
        <Box
          title="warning"
          color="warning"
          loading
        />
      </div>
      <div className="col-md-6 col-sm-12 col-xs-12">
        <Box
          title="Badge"
          color="danger"
          badge="3 Notifications"
          badgeColor="red"
          badgeMessage="3"

        />
      </div>
    </div>
    <div className="row">
      <div className="col-md-6 col-sm-12 col-xs-12">
        <Box
          title="dismissible"
          dismissible

        />
      </div>
      <div className="col-md-6 col-sm-12 col-xs-12">
        <Box
          title="dismissible"
          dismissible

        />
      </div>
    </div>
  </div>
);

export default { DemoBox };
