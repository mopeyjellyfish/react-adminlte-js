import React from 'react';
import { Footer } from '../lib/index';

export const DemoFooter = () => (
  <Footer>
    <div className="pull-right hidden-xs">
      <b>
Version
      </b>
      {' '}
0.0.1
    </div>
    <strong>
      <span>
&copy; Copyright
        {' '}
        {(new Date().getFullYear())}
        {' '}
David Hall
      </span>
    </strong>
  </Footer>
);

export default { DemoFooter };
