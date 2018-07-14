import React from 'react';
import {
  SmallBox, SmallBoxFooter, SmallBoxInner, SmallBoxIcon,
} from '../lib/index';

export const DemoSmallBox = () => (
  <div>
    <div className="row">
      <div className="col-md-3 col-sm-3 col-xs-3">
        <SmallBox color="aqua">
          <SmallBoxInner />
          <h3>
150
          </h3>

          <p>
New Test Orders
          </p>
          <SmallBoxIcon>
            <i className="fa fa-shopping-cart" />
          </SmallBoxIcon>
          <SmallBoxFooter href="#testaqua">
              More info
            {' '}
            <i className="fa fa-arrow-circle-right" />
          </SmallBoxFooter>
        </SmallBox>
      </div>
      <div className="col-md-3 col-sm-3 col-xs-3">
        <SmallBox color="red">
          <SmallBoxInner />
          <h3>
150
          </h3>

          <p>
New Test Orders
          </p>
          <SmallBoxIcon>
            <i className="fa fa-shopping-cart" />
          </SmallBoxIcon>
          <SmallBoxFooter href="#testred">
              More info
            {' '}
            <i className="fa fa-arrow-circle-right" />
          </SmallBoxFooter>
        </SmallBox>
      </div>
      <div className="col-md-3 col-sm-3 col-xs-3">
        <SmallBox color="green">
          <SmallBoxInner />
          <h3>
150
          </h3>

          <p>
New Test Orders
          </p>
          <SmallBoxIcon>
            <i className="fa fa-shopping-cart" />
          </SmallBoxIcon>
          <SmallBoxFooter href="#testgreen">
              More info
            {' '}
            <i className="fa fa-arrow-circle-right" />
          </SmallBoxFooter>
        </SmallBox>
      </div>
      <div className="col-md-3 col-sm-3 col-xs-3">
        <SmallBox color="yellow">
          <SmallBoxInner />
          <h3>
150
          </h3>

          <p>
New Test Orders
          </p>
          <SmallBoxIcon>
            <i className="fa fa-shopping-cart" />
          </SmallBoxIcon>
          <SmallBoxFooter href="#testyellow">
              More info
            {' '}
            <i className="fa fa-arrow-circle-right" />
          </SmallBoxFooter>
        </SmallBox>
      </div>
    </div>
  </div>
);

export default { DemoSmallBox };
