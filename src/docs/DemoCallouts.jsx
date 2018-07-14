import React from 'react';
import { Box, Callout } from '../lib/index';

export const DemoCallouts = () => (
  <div className="col-md-6 col-sm-12 col-xs-12">
    <Box
      title="Callouts"
      expanded
      expandable={false}
      icon="fa fa-bullhorn"
    >
      <Callout color="danger" icon="fa fa-ban" title="Error">
                     this is a test alert
      </Callout>
      <Callout color="info" title="Info">
                    this is a test alert
      </Callout>
      <Callout color="success" title="success">
                    this is a test alert
      </Callout>
      <Callout color="warning" title="warning">
                    this is a test alert
      </Callout>
    </Box>
  </div>
);

export default { DemoCallouts };
