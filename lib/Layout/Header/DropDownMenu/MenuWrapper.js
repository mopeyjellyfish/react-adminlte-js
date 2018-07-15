"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DropDownMenu = void 0;

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

var DropDownMenu =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(DropDownMenu, _PureComponent);

  function DropDownMenu() {
    _classCallCheck(this, DropDownMenu);

    return _possibleConstructorReturn(this, _getPrototypeOf(DropDownMenu).apply(this, arguments));
  }

  _createClass(DropDownMenu, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          menu = _this$props.menu,
          icon = _this$props.icon,
          label = _this$props.label,
          labelText = _this$props.labelText,
          header = _this$props.header,
          children = _this$props.children;
      return _react.default.createElement("li", {
        className: "dropdown ".concat(menu, "-menu")
      }, _react.default.createElement("a", {
        href: "#",
        className: "dropdown-toggle",
        "data-toggle": "dropdown",
        "aria-expanded": "false"
      }, _react.default.createElement("i", {
        className: icon
      }), _react.default.createElement("span", {
        className: "label label-".concat(label)
      }, labelText)), _react.default.createElement("ul", {
        className: "dropdown-menu"
      }, _react.default.createElement("li", {
        className: "header"
      }, header), _react.default.createElement("li", null, _react.default.createElement("ul", {
        className: "menu"
      }, children))));
    }
  }]);

  return DropDownMenu;
}(_react.PureComponent);

exports.DropDownMenu = DropDownMenu;
DropDownMenu.propTypes = {
  menu: _propTypes.default.string,
  header: _propTypes.default.string,
  icon: _propTypes.default.string,
  label: _propTypes.default.string,
  labelText: _propTypes.default.string,
  children: _propTypes.default.node
};
DropDownMenu.defaultProps = {
  menu: 'messsages',
  icon: '',
  label: 'success',
  labelText: '',
  header: '',
  children: null
};
var _default = {
  DropDownMenu: DropDownMenu
};
exports.default = _default;