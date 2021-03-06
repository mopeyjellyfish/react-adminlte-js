"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Nav = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Nav =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Nav, _PureComponent);

  function Nav() {
    _classCallCheck(this, Nav);

    return _possibleConstructorReturn(this, _getPrototypeOf(Nav).apply(this, arguments));
  }

  _createClass(Nav, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return _react.default.createElement("div", {
        className: "navbar navbar-static-top",
        role: "navigation"
      }, _react.default.createElement("a", {
        className: "sidebar-toggle",
        style: {
          cursor: 'pointer'
        },
        "data-toggle": "push-menu"
      }, _react.default.createElement("span", {
        className: "sr-only"
      }, "Toggle navigation")), _react.default.createElement("span", {
        className: "icon-bar"
      }), _react.default.createElement("span", {
        className: "icon-bar"
      }), _react.default.createElement("span", {
        className: "icon-bar"
      }), _react.default.createElement("div", {
        className: "navbar-custom-menu"
      }, _react.default.createElement("ul", {
        className: "nav navbar-nav"
      }, children, _react.default.createElement("li", null, _react.default.createElement("a", {
        style: {
          cursor: 'pointer'
        },
        "data-toggle": "control-sidebar"
      }, _react.default.createElement("i", {
        className: "fa fa-server"
      }))))));
    }
  }]);

  return Nav;
}(_react.PureComponent);

exports.Nav = Nav;
Nav.propTypes = {
  children: _propTypes.default.node
};
Nav.defaultProps = {
  children: null
};
var _default = {
  Nav: Nav
};
exports.default = _default;