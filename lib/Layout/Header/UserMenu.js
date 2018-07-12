"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.UserMenu = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Avatar = require("./Avatar");

var _UserMenuFooter = require("./UserMenuFooter");

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

var UserMenu =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(UserMenu, _PureComponent);

  function UserMenu() {
    _classCallCheck(this, UserMenu);

    return _possibleConstructorReturn(this, _getPrototypeOf(UserMenu).apply(this, arguments));
  }

  _createClass(UserMenu, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          image = _this$props.image,
          name = _this$props.name,
          buttons = _this$props.buttons,
          title = _this$props.title,
          description = _this$props.description,
          onButtonClick = _this$props.onButtonClick;
      var RenderedButtons = buttons.map(function (button) {
        return _react.default.createElement("div", {
          key: button.text,
          className: "pull-".concat(button.align)
        }, _react.default.createElement("button", {
          onClick: function onClick() {
            return onButtonClick(button);
          }
        }, button.text));
      });
      return _react.default.createElement("li", {
        className: "dropdown user user-menu"
      }, _react.default.createElement("a", {
        className: "dropdown-toggle user-top-image",
        style: {
          cursor: 'pointer'
        },
        "data-toggle": "dropdown"
      }, _react.default.createElement(_Avatar.Avatar, {
        avatar: image
      }), _react.default.createElement("span", {
        className: "hidden-xs"
      }, name)), _react.default.createElement("ul", {
        className: "dropdown-menu"
      }, _react.default.createElement("li", {
        className: "user-header"
      }, _react.default.createElement(_Avatar.Avatar, {
        className: "img-circle",
        avatar: image
      }), _react.default.createElement("p", null, title, _react.default.createElement("small", null, description))), _react.default.createElement(_UserMenuFooter.UserMenuFooter, null, RenderedButtons)));
    }
  }]);

  return UserMenu;
}(_react.PureComponent);

exports.UserMenu = UserMenu;
UserMenu.propTypes = {
  image: _propTypes.default.string,
  name: _propTypes.default.string,
  buttons: _propTypes.default.arrayOf(_propTypes.default.object),
  title: _propTypes.default.string,
  description: _propTypes.default.string,
  onButtonClick: _propTypes.default.func
};
UserMenu.defaultProps = {
  image: '',
  name: '',
  buttons: [],
  title: '',
  description: '',
  onButtonClick: null
};
var _default = {
  UserMenu: UserMenu
};
exports.default = _default;