import { jsxDEV as jsxDEV$1 } from 'react/jsx-dev-runtime';
export { Fragment } from 'react/jsx-dev-runtime';
import clsx from 'clsx';

const hasOwnProperty = Object.prototype.hasOwnProperty;
const transformProps = function(props)  {
  if (props  && hasOwnProperty.call(props, 'className')) {
    return {...props, className:clsx(props.className)};
  }
  return props || {};
};

function jsxDEV(type, props, key){
  return jsxDEV$1(type,transformProps(props),key)
}

export { jsxDEV };
//# sourceMappingURL=index.mjs.map
