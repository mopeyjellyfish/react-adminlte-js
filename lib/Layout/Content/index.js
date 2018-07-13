"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PageWrapper = require("./PageWrapper");

Object.keys(_PageWrapper).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _PageWrapper[key];
    }
  });
});

var _PageHeader = require("./PageHeader");

Object.keys(_PageHeader).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _PageHeader[key];
    }
  });
});

var _PageContent = require("./PageContent");

Object.keys(_PageContent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _PageContent[key];
    }
  });
});