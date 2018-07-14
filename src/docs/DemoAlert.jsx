import React from 'react';
import { Box, Alert } from '../lib/index';

export const DemoAlertBox = () => (
  <div className="col-md-6 col-sm-12 col-xs-12">
    <Box
      title="Alerts"
      expanded
      expandable={false}
      icon="fa fa-warning"
    >
      <Alert dismissible color="danger" icon="fa fa-ban" title="error">
                    this is a test alert
      </Alert>
      <Alert dismissible color="info" icon="fa fa-info" title="info">
                    this is a test alert
      </Alert>
      <Alert dismissible color="success" icon="fa fa-check" title="success">
                    this is a test alert
      </Alert>
      <Alert dismissible color="warning" icon="fa fa-warning" title="warning">
                    this is a test alert
      </Alert>
    </Box>
  </div>
);

export default { DemoAlertBox };
