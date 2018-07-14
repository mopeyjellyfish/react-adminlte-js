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
            <i className="fa fa-envelope-o" />
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
            <i className="fa fa-flag-o" />
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
            <i className="fa fa-star-o" />
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
            <i className="fa fa-comments-o" />
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
            <i className="fa fa-bookmark-o" />
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
            <i className="fa fa-thumbs-o-up" />
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
            <i className="fa fa-shopping-cart" />
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
      <div className="col-md-3 col-sm-3 col-xs-12">
        <InfoBox color="yellow">
          <InfoIcon>
            <i className="fa fa-calendar" />
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
