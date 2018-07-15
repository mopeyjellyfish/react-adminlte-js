import React from 'react';
import { render } from 'react-dom';
import { DemoBox } from './Box';
import './styles.css';
import { DemoInfoBox } from './InfoBox';
import {
  Wrapper, PageWrapper, PageHeader, PageContent, Breadcrumb,
} from '../lib';
import { DemoFooter } from './Footer';
import { DemoHeader } from './DemoHeader';
import { DemoSidebar } from './DemoSidebar';
import { DemoControlbar } from './DemoControl';
import { DemoSmallBox } from './DemoSmallBox';
import { DemoAlertBox } from './DemoAlert';
import { DemoCallouts } from './DemoCallouts';
import { DemoProgress } from './DemoProgress';

function Demo() {
  return (
    <div>
      <Wrapper>
        <DemoHeader />
        <DemoSidebar />
        <DemoControlbar />
        <PageWrapper>
          <PageHeader title="Demo Page" subTitle="Page to test components">
            <Breadcrumb
              items={[
                { key: 1, title: 'Demo Page' },
                {
                  key: 2, icon: 'fa fa-dashboard', title: 'Users', url: '/',
                },
              ]}
            />
          </PageHeader>
          <PageContent>
            <DemoInfoBox />
            <DemoSmallBox />
            <DemoBox />
            <div className="row">
              <DemoAlertBox />
              <DemoCallouts />
            </div>
            <DemoProgress />
          </PageContent>
        </PageWrapper>
        <DemoFooter />
      </Wrapper>
    </div>
  );
}

render(<Demo />, document.getElementById('app'));
