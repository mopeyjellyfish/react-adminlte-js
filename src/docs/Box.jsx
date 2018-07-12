import React from 'react';
import { Box } from '../lib/index';

export const DemoBox = () => (
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
);

export default { DemoBox };
