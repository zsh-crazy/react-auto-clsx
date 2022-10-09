'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxDevRuntime = require('react/jsx-dev-runtime');
var clsx = require('clsx');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var clsx__default = /*#__PURE__*/_interopDefaultLegacy(clsx);

const hasOwnProperty = Object.prototype.hasOwnProperty;
const transformProps = function(props)  {
  if (props  && hasOwnProperty.call(props, 'className')) {
    return {...props, className:clsx__default["default"](props.className)};
  }
  return props || {};
};

function jsxDEV(type, props, key){
  return jsxDevRuntime.jsxDEV(type,transformProps(props),key)
}

Object.defineProperty(exports, 'Fragment', {
  enumerable: true,
  get: function () { return jsxDevRuntime.Fragment; }
});
exports.jsxDEV = jsxDEV;
//# sourceMappingURL=index.js.map
