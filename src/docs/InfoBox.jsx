import React from 'react';
import {
  InfoBox, InfoContent, InfoIcon, InfoData,
} from '../lib/index';

export const DemoInfoBox = () => (
  <div className="row">
    <div className="row">
      <div className="col-md-3 col-sm-6 col-xs-12">
        <InfoBox>
          <InfoIcon>
            <i className="ion ion-ios-gear-outline" />
          </InfoIcon>
          <InfoContent>
            <InfoData type="text">
                Some Metric here
            </InfoData>
            <InfoData type="number">
                90
              <small>
                %
              </small>
            </InfoData>
          </InfoContent>
        </InfoBox>
      </div>
      <div className="col-md-3 col-sm-6 col-xs-12">
        <InfoBox>
          <InfoIcon color="red">
            <i className="ion ion-ios-gear-outline" />
          </InfoIcon>
          <InfoContent>
            <InfoData type="text">
                Some Metric here
            </InfoData>
            <InfoData type="number">
                90
              <small>
                %
              </small>
            </InfoData>
          </InfoContent>
        </InfoBox>
      </div>
      <div className="col-md-3 col-sm-6 col-xs-12">
        <InfoBox>
          <InfoIcon color="green">
            <i className="ion ion-ios-gear-outline" />
          </InfoIcon>
          <InfoContent>
            <InfoData type="text">
                Another Metric here
            </InfoData>
            <InfoData type="number">
               545
            </InfoData>
          </InfoContent>
        </InfoBox>
      </div>
      <div className="col-md-3 col-sm-6 col-xs-12">
        <InfoBox>
          <InfoIcon color="yellow">
            <i className="ion ion-ios-gear-outline" />
          </InfoIcon>
          <InfoContent>
            <InfoData type="text">
                More Metric here
            </InfoData>
            <InfoData type="number">
                50,000
            </InfoData>
          </InfoContent>
        </InfoBox>
      </div>

    </div>
    <div className="row">
      <div className="col-md-3 col-sm-6 col-xs-12">
        <InfoBox color="aqua">
          <InfoIcon>
            <i className="ion ion-ios-gear-outline" />
          </InfoIcon>
          <InfoContent>
            <InfoData type="text">
                Some Metric here
            </InfoData>
            <InfoData type="number">
                90
              <small>
                %
              </small>
            </InfoData>
          </InfoContent>
        </InfoBox>
      </div>
      <div className="col-md-3 col-sm-6 col-xs-12">
        <InfoBox color="red">
          <InfoIcon>
            <i className="ion ion-ios-gear-outline" />
          </InfoIcon>
          <InfoContent>
            <InfoData type="text">
                Some Metric here
            </InfoData>
            <InfoData type="number">
                90
              <small>
                %
              </small>
            </InfoData>
          </InfoContent>
        </InfoBox>
      </div>
      <div className="col-md-3 col-sm-6 col-xs-12">
        <InfoBox color="green">
          <InfoIcon>
            <i className="ion ion-ios-gear-outline" />
          </InfoIcon>
          <InfoContent>
            <InfoData type="text">
                Another Metric here
            </InfoData>
            <InfoData type="number">
               545
            </InfoData>
          </InfoContent>
        </InfoBox>
      </div>
      <div className="col-md-3 col-sm-6 col-xs-12">
        <InfoBox color="yellow">
          <InfoIcon>
            <i className="ion ion-ios-gear-outline" />
          </InfoIcon>
          <InfoContent>
            <InfoData type="text">
                More Metric here
            </InfoData>
            <InfoData type="number">
                50,000
            </InfoData>
          </InfoContent>
        </InfoBox>
      </div>

    </div>
  </div>
);

export default { DemoInfoBox };
