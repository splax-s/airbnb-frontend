"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/shallow-equal";
exports.ids = ["vendor-chunks/shallow-equal"];
exports.modules = {

/***/ "(ssr)/./node_modules/shallow-equal/dist/index.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/shallow-equal/dist/index.esm.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   shallowEqualArrays: () => (/* binding */ shallowEqualArrays),\n/* harmony export */   shallowEqualObjects: () => (/* binding */ shallowEqualObjects)\n/* harmony export */ });\nfunction shallowEqualObjects(objA, objB) {\n    if (objA === objB) {\n        return true;\n    }\n    if (!objA || !objB) {\n        return false;\n    }\n    var aKeys = Object.keys(objA);\n    var bKeys = Object.keys(objB);\n    var len = aKeys.length;\n    if (bKeys.length !== len) {\n        return false;\n    }\n    for(var i = 0; i < len; i++){\n        var key = aKeys[i];\n        if (objA[key] !== objB[key] || !Object.prototype.hasOwnProperty.call(objB, key)) {\n            return false;\n        }\n    }\n    return true;\n}\nfunction shallowEqualArrays(arrA, arrB) {\n    if (arrA === arrB) {\n        return true;\n    }\n    if (!arrA || !arrB) {\n        return false;\n    }\n    var len = arrA.length;\n    if (arrB.length !== len) {\n        return false;\n    }\n    for(var i = 0; i < len; i++){\n        if (arrA[i] !== arrB[i]) {\n            return false;\n        }\n    }\n    return true;\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc2hhbGxvdy1lcXVhbC9kaXN0L2luZGV4LmVzbS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLFNBQVNBLG9CQUFvQkMsSUFBSSxFQUFFQyxJQUFJO0lBQ3JDLElBQUlELFNBQVNDLE1BQU07UUFDakIsT0FBTztJQUNUO0lBRUEsSUFBSSxDQUFDRCxRQUFRLENBQUNDLE1BQU07UUFDbEIsT0FBTztJQUNUO0lBRUEsSUFBSUMsUUFBUUMsT0FBT0MsSUFBSSxDQUFDSjtJQUN4QixJQUFJSyxRQUFRRixPQUFPQyxJQUFJLENBQUNIO0lBQ3hCLElBQUlLLE1BQU1KLE1BQU1LLE1BQU07SUFFdEIsSUFBSUYsTUFBTUUsTUFBTSxLQUFLRCxLQUFLO1FBQ3hCLE9BQU87SUFDVDtJQUVBLElBQUssSUFBSUUsSUFBSSxHQUFHQSxJQUFJRixLQUFLRSxJQUFLO1FBQzVCLElBQUlDLE1BQU1QLEtBQUssQ0FBQ00sRUFBRTtRQUVsQixJQUFJUixJQUFJLENBQUNTLElBQUksS0FBS1IsSUFBSSxDQUFDUSxJQUFJLElBQUksQ0FBQ04sT0FBT08sU0FBUyxDQUFDQyxjQUFjLENBQUNDLElBQUksQ0FBQ1gsTUFBTVEsTUFBTTtZQUMvRSxPQUFPO1FBQ1Q7SUFDRjtJQUVBLE9BQU87QUFDVDtBQUVBLFNBQVNJLG1CQUFtQkMsSUFBSSxFQUFFQyxJQUFJO0lBQ3BDLElBQUlELFNBQVNDLE1BQU07UUFDakIsT0FBTztJQUNUO0lBRUEsSUFBSSxDQUFDRCxRQUFRLENBQUNDLE1BQU07UUFDbEIsT0FBTztJQUNUO0lBRUEsSUFBSVQsTUFBTVEsS0FBS1AsTUFBTTtJQUVyQixJQUFJUSxLQUFLUixNQUFNLEtBQUtELEtBQUs7UUFDdkIsT0FBTztJQUNUO0lBRUEsSUFBSyxJQUFJRSxJQUFJLEdBQUdBLElBQUlGLEtBQUtFLElBQUs7UUFDNUIsSUFBSU0sSUFBSSxDQUFDTixFQUFFLEtBQUtPLElBQUksQ0FBQ1AsRUFBRSxFQUFFO1lBQ3ZCLE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBTztBQUNUO0FBRW1EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGphbmdvYm5iLy4vbm9kZV9tb2R1bGVzL3NoYWxsb3ctZXF1YWwvZGlzdC9pbmRleC5lc20uanM/NDFlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBzaGFsbG93RXF1YWxPYmplY3RzKG9iakEsIG9iakIpIHtcbiAgaWYgKG9iakEgPT09IG9iakIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICghb2JqQSB8fCAhb2JqQikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBhS2V5cyA9IE9iamVjdC5rZXlzKG9iakEpO1xuICB2YXIgYktleXMgPSBPYmplY3Qua2V5cyhvYmpCKTtcbiAgdmFyIGxlbiA9IGFLZXlzLmxlbmd0aDtcblxuICBpZiAoYktleXMubGVuZ3RoICE9PSBsZW4pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGFLZXlzW2ldO1xuXG4gICAgaWYgKG9iakFba2V5XSAhPT0gb2JqQltrZXldIHx8ICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqQiwga2V5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBzaGFsbG93RXF1YWxBcnJheXMoYXJyQSwgYXJyQikge1xuICBpZiAoYXJyQSA9PT0gYXJyQikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKCFhcnJBIHx8ICFhcnJCKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGxlbiA9IGFyckEubGVuZ3RoO1xuXG4gIGlmIChhcnJCLmxlbmd0aCAhPT0gbGVuKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChhcnJBW2ldICE9PSBhcnJCW2ldKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCB7IHNoYWxsb3dFcXVhbEFycmF5cywgc2hhbGxvd0VxdWFsT2JqZWN0cyB9O1xuIl0sIm5hbWVzIjpbInNoYWxsb3dFcXVhbE9iamVjdHMiLCJvYmpBIiwib2JqQiIsImFLZXlzIiwiT2JqZWN0Iiwia2V5cyIsImJLZXlzIiwibGVuIiwibGVuZ3RoIiwiaSIsImtleSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInNoYWxsb3dFcXVhbEFycmF5cyIsImFyckEiLCJhcnJCIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/shallow-equal/dist/index.esm.js\n");

/***/ })

};
;