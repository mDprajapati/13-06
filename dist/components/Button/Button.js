"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Button = function Button(_ref) {
  var onClick = _ref.onClick,
    children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onClick
  }, children);
};
exports.Button = Button;
Button.propTypes = {
  onClick: _propTypes["default"].func.isRequired,
  children: _propTypes["default"].string.isRequired
};