import React from 'react';
import { Box, Progress } from '../lib/index';

export const DemoProgress = () => (
  <div className="row">
    <div className="col-md-6 col-sm-12 col-xs-12">
      <Box
        title="Progress"
        expanded
        expandable={false}
      >
        <Progress color="danger" active striped value="30">
                    this is a test progress
        </Progress>
        <Progress color="info" striped value="50" size="sm">
      this is a test progress
        </Progress>
        <Progress color="success" striped active value="70" size="xs">
      this is a test progress
        </Progress>
        <Progress color="warning" striped value="80" size="xxs">
      this is a test progress
        </Progress>
      </Box>
    </div>
    <div className="col-md-6 col-sm-12 col-xs-12">
      <Box
        title="Progress"
        expanded
        expandable={false}
      >
        <Progress color="danger" value="30">
                    this is a test progress
        </Progress>
        <Progress color="info" value="50">
      this is a test progress
        </Progress>
        <Progress color="success" active value="70">
      this is a test progress
        </Progress>
        <Progress color="warning" value="80">
      this is a test progress
        </Progress>
      </Box>
    </div>
  </div>
);

export default { DemoProgress };
