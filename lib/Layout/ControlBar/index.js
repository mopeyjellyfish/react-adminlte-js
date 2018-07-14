"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ControlBar = require("./ControlBar");

Object.keys(_ControlBar).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ControlBar[key];
    }
  });
});

var _TabHeader = require("./TabHeader");

Object.keys(_TabHeader).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TabHeader[key];
    }
  });
});

var _TabContent = require("./TabContent");

Object.keys(_TabContent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TabContent[key];
    }
  });
});

var _TabPane = require("./TabPane");

Object.keys(_TabPane).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TabPane[key];
    }
  });
});

var _TabHeaderItem = require("./TabHeaderItem");

Object.keys(_TabHeaderItem).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TabHeaderItem[key];
    }
  });
});