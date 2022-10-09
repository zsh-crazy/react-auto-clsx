
import { Fragment, jsxDEV as _jsxDEV } from 'react/jsx-dev-runtime';

import {transformProps} from "./utils/index"
function jsxDEV(type, props, key){
  return _jsxDEV(type,transformProps(props),key)
}
export { Fragment, jsxDEV };
