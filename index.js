'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

require("./index.less");
var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Progress = function (_React$Component) {
    _inherits(Progress, _React$Component);

    function Progress(props) {
        _classCallCheck(this, Progress);

        return _possibleConstructorReturn(this, _React$Component.call(this, props));
    }

    Progress.prototype.render = function render() {
        var scheduleCls = (0, _classnames2.default)('progress-schedule', this.props.className);
        var scheduleStyle = {
            "width": this.props.schedule
        };
        return _react2.default.createElement(
            'div',
            { className: 'progress' },
            _react2.default.createElement('div', { className: scheduleCls, style: scheduleStyle })
        );
    };

    return Progress;
}(_react2.default.Component);

Progress.defaultProps = {
    schedule: '0%'
};
exports.default = Progress;
module.exports = exports['default'];
