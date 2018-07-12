import React from 'react';
import { render } from 'react-dom';
import { DemoBox } from './Box';
import './styles.css';
import { DemoInfoBox } from './InfoBox';
import { Wrapper } from '../lib';
import { DemoFooter } from './Footer';
import { DemoHeader } from './DemoHeader';
import { DemoSidebar } from './Sidebar';
import { DemoControlbar } from './Control';

function Demo() {
  return (
    <div>
      <Wrapper>
        <DemoHeader />
        <DemoSidebar />
        <DemoControlbar />
        <DemoInfoBox />
        <DemoBox />
        <DemoFooter />
      </Wrapper>
    </div>
  );
}

render(<Demo />, document.getElementById('app'));
