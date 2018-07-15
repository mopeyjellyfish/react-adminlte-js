"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Progress = require("./Progress");

Object.keys(_Progress).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Progress[key];
    }
  });
});