import React from 'react';
import { render } from 'react-dom';
import { DemoBox } from './Box';
import './styles.css';
import { DemoInfoBox } from './InfoBox';
import {
  Wrapper, PageWrapper, PageHeader, PageContent,
} from '../lib';
import { DemoFooter } from './Footer';
import { DemoHeader } from './DemoHeader';
import { DemoSidebar } from './DemoSidebar';
import { DemoControlbar } from './DemoControl';
import { DemoSmallBox } from './DemoSmallBox';

function Demo() {
  return (
    <div>
      <Wrapper>
        <DemoHeader />
        <DemoSidebar />
        <DemoControlbar />
        <PageWrapper>
          <PageHeader />
          <PageContent>
            <DemoInfoBox />
            <DemoSmallBox />
            <DemoBox />
          </PageContent>
        </PageWrapper>
        <DemoFooter />
      </Wrapper>
    </div>
  );
}

render(<Demo />, document.getElementById('app'));
