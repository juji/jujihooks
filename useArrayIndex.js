"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=require("react");const useArrayIndex=function useArrayIndex(keyField){let array=arguments.length>1&&arguments[1]!==undefined?arguments[1]:[];if(!keyField||typeof keyField!=="string"||keyField.constructor!==Function)throw new Error("invalid 'keyField' in useArrayIndex. It should be a string or a function returning a string");const key=(0,_react.useMemo)(()=>{return typeof keyField==="string"?keyField:keyField()},[keyField]);if(typeof key!=="string")throw new Error("'keyField' in useArrayIndex did not return string");const index=(0,_react.useMemo)(()=>{return array.reduce((a,b)=>{a[b[key]]=b;return a},{})},[key,array]);return index};var _default=useArrayIndex;exports.default=_default;
//# sourceMappingURL=useArrayIndex.js.map