"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=exports.useLoadingValue=void 0;var _react=require("react");const useLoadingValue=(value,error)=>{const[loading,setLoading]=(0,_react.useState)(!value&&!error);const[val,setVal]=(0,_react.useState)(value);const[err,setErr]=(0,_react.useState)(error);(0,_react.useEffect)(()=>{setLoading(!val&&!err)},[val,err]);const startLoading=()=>{if(loading)return;setVal(null);setErr(null)};return{loading,startLoading,value:val,setValue:setVal,error:err,setError:setErr}};exports.useLoadingValue=useLoadingValue;var _default=useLoadingValue;exports.default=_default;
//# sourceMappingURL=useLoadingValue.js.map