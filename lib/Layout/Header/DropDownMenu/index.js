"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MenuWrapper = require("./MenuWrapper");

Object.keys(_MenuWrapper).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _MenuWrapper[key];
    }
  });
});