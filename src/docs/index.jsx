import React from 'react';
import { render } from 'react-dom';
import {
  Box, InfoBox, InfoContent, InfoIcon, InfoData,
} from '../lib/index';
import './styles.css';

function Demo() {
  return (
    <div>
      <h1>
      Demo with examples of the component
      </h1>
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
    </div>
  );
}

render(<Demo />, document.getElementById('app'));
