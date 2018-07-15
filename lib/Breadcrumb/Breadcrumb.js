"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Breadcrumb = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Breadcrumb =
/*#__PURE__*/
function (_Component) {
  _inherits(Breadcrumb, _Component);

  function Breadcrumb(props) {
    var _this;

    _classCallCheck(this, Breadcrumb);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Breadcrumb).call(this, props));
    _this.state = {};
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Breadcrumb, [{
    key: "onClick",
    value: function onClick(item) {
      var onBreadcrumbClick = this.props.onBreadcrumbClick;

      if (item && item.url && onBreadcrumbClick) {
        onBreadcrumbClick(item.url);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var items = this.props.items;
      return _react.default.createElement("ol", {
        className: "breadcrumb"
      }, items.map(function (item) {
        return _react.default.createElement("li", {
          className: "breadcrumb_list",
          key: item.key
        }, _react.default.createElement("a", {
          onClick: function onClick() {
            return _this2.onClick(item);
          },
          onKeyDown: function onKeyDown() {
            return _this2.onClick(item);
          },
          role: "button",
          tabIndex: 0
        }, item.icon && _react.default.createElement("i", {
          className: item.icon
        }), item.title));
      }));
    }
  }]);

  return Breadcrumb;
}(_react.Component);

exports.Breadcrumb = Breadcrumb;
Breadcrumb.propTypes = {
  items: _propTypes.default.arrayOf(_propTypes.default.object),
  onBreadcrumbClick: _propTypes.default.func
};
Breadcrumb.defaultProps = {
  items: null,
  onBreadcrumbClick: null
};
var _default = {
  Breadcrumb: Breadcrumb
};
exports.default = _default;