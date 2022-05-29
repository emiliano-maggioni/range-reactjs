"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/exercise1",{

/***/ "./components/normalRange/NormalRange.tsx":
/*!************************************************!*\
  !*** ./components/normalRange/NormalRange.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _NormalRange_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NormalRange.module.css */ \"./components/normalRange/NormalRange.module.css\");\n/* harmony import */ var _NormalRange_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_NormalRange_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var components_range_Range__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/range/Range */ \"./components/range/Range.tsx\");\n/* harmony import */ var utility_callsAPI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utility/callsAPI */ \"./utility/callsAPI.tsx\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar NormalRange = function() {\n    _s();\n    var minInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var maxInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        min: 0,\n        max: 50\n    }), inputValues = ref[0], setInputValues = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        min: 0,\n        max: 50,\n        valuesRange: 50\n    }), defValues = ref1[0], setDefValues = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        //API TO GET DEFAULT VALUES        \n        // let min = 0;\n        // let max = 100;\n        utility_callsAPI__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/limits.json\").then(function(response) {\n            console.log(\"------- response:\", response);\n            var dati = response.data;\n            var min = dati.min;\n            var max = dati.max;\n            setInputValues({\n                min: min,\n                max: max\n            });\n            setDefValues({\n                min: min,\n                max: max,\n                valuesRange: max - min\n            });\n        }).catch(function(error) {\n            console.log(\"------- ERROR:\", error);\n        });\n    }, []);\n    var changeInputValues = function(val, type) {\n        //CHANGE INPUT VALUES AND TRIGGER FUNCTION TO CHECK IF VALUES ARE CORRECT\n        var oldValues = _objectSpread({}, inputValues);\n        var newValues;\n        if (type == \"min\") newValues = {\n            min: val,\n            max: oldValues.max\n        };\n        else if (type == \"max\") newValues = {\n            min: oldValues.min,\n            max: val\n        };\n        setInputValues(newValues);\n        var checkValues = setTimeout(function() {\n            if (type == \"min\" && newValues.min == minInputRef.current.value) fixInputValues(newValues.min, type);\n            else if (type == \"max\" && newValues.max == maxInputRef.current.value) fixInputValues(newValues.max, type);\n        }, 1500);\n        return function() {\n            return clearTimeout(checkValues);\n        };\n    };\n    var updateMinValue = function(percentage) {\n        //CHANGE MIN INPUT VALUES AND TRIGGER FUNCTION TO CHECK IF VALUES ARE CORRECT\n        console.log(\"updateMinValue:\", percentage);\n        var newVal = defValues.valuesRange / 100 * percentage + defValues.min;\n        newVal = Math.floor(newVal);\n        fixInputValues(newVal, \"min\");\n    };\n    var updateMaxValue = function(percentage) {\n        //CHANGE MAX INPUT VALUES AND TRIGGER FUNCTION TO CHECK IF VALUES ARE CORRECT\n        var newVal = defValues.valuesRange / 100 * percentage + defValues.min;\n        newVal = Math.floor(newVal);\n        fixInputValues(newVal, \"max\");\n    };\n    var fixInputValues = function(val, type) {\n        //FIX VALUES IF INPUT VALUES ARE LOWER OR HIGHER THAN DEFAULT VALUES OR MIN / MAX VALUES\n        if (type == \"min\") {\n            if (val) {\n                if (val < defValues.min) setInputValues({\n                    min: defValues.min,\n                    max: inputValues.max\n                });\n                else if (val >= inputValues.max) setInputValues({\n                    min: inputValues.max,\n                    max: inputValues.max\n                });\n                else setInputValues({\n                    min: val,\n                    max: inputValues.max\n                });\n            } else {\n                setInputValues({\n                    min: defValues.min,\n                    max: inputValues.max\n                });\n            }\n        } else if (type == \"max\") {\n            if (val) {\n                if (val > defValues.max) setInputValues({\n                    min: inputValues.min,\n                    max: defValues.max\n                });\n                else if (val <= inputValues.min) setInputValues({\n                    min: inputValues.min,\n                    max: inputValues.min\n                });\n                else setInputValues({\n                    min: inputValues.min,\n                    max: val\n                });\n            } else {\n                setInputValues({\n                    min: inputValues.min,\n                    max: defValues.max\n                });\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_NormalRange_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                value: inputValues.min,\n                ref: minInputRef,\n                onChange: function(e) {\n                    return changeInputValues(e.target.value, \"min\");\n                },\n                className: (_NormalRange_module_css__WEBPACK_IMPORTED_MODULE_4___default().input),\n                placeholder: \"Min value \".concat(defValues.min)\n            }, void 0, false, {\n                fileName: \"C:\\\\inetpub\\\\wwwroot\\\\range-reactjs\\\\components\\\\normalRange\\\\NormalRange.tsx\",\n                lineNumber: 109,\n                columnNumber: 13\n            }, _this),\n            \"\\u20AC\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_NormalRange_module_css__WEBPACK_IMPORTED_MODULE_4___default().containerRange),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_range_Range__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    minValue: defValues.min,\n                    maxValue: defValues.max,\n                    minValueInput: inputValues.min,\n                    maxValueInput: inputValues.max,\n                    updateMinValue: updateMinValue,\n                    updateMaxValue: updateMaxValue\n                }, void 0, false, {\n                    fileName: \"C:\\\\inetpub\\\\wwwroot\\\\range-reactjs\\\\components\\\\normalRange\\\\NormalRange.tsx\",\n                    lineNumber: 117,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\inetpub\\\\wwwroot\\\\range-reactjs\\\\components\\\\normalRange\\\\NormalRange.tsx\",\n                lineNumber: 116,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                value: inputValues.max,\n                ref: maxInputRef,\n                onChange: function(e) {\n                    return changeInputValues(e.target.value, \"max\");\n                },\n                className: (_NormalRange_module_css__WEBPACK_IMPORTED_MODULE_4___default().input),\n                placeholder: \"Max value \".concat(defValues.max)\n            }, void 0, false, {\n                fileName: \"C:\\\\inetpub\\\\wwwroot\\\\range-reactjs\\\\components\\\\normalRange\\\\NormalRange.tsx\",\n                lineNumber: 126,\n                columnNumber: 13\n            }, _this),\n            \"\\u20AC\"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\inetpub\\\\wwwroot\\\\range-reactjs\\\\components\\\\normalRange\\\\NormalRange.tsx\",\n        lineNumber: 108,\n        columnNumber: 9\n    }, _this);\n};\n_s(NormalRange, \"LCth9eIzZfQDzf580rsSR8xvL/c=\");\n_c = NormalRange;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NormalRange);\nvar _c;\n$RefreshReg$(_c, \"NormalRange\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25vcm1hbFJhbmdlL05vcm1hbFJhbmdlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTREO0FBQ2Y7QUFDSDtBQUVGOztBQUd4QyxJQUFNTyxXQUFXLEdBQUcsV0FBTTs7SUFDdEIsSUFBTUMsV0FBVyxHQUFPTiw2Q0FBTSxFQUFFO0lBQ2hDLElBQU1PLFdBQVcsR0FBT1AsNkNBQU0sRUFBRTtJQUNoQyxJQUFzQ0QsR0FBcUMsR0FBckNBLCtDQUFRLENBQWM7UUFBQ1MsR0FBRyxFQUFDLENBQUM7UUFBQ0MsR0FBRyxFQUFDLEVBQUU7S0FBQyxDQUFDLEVBVi9FLFdBVXNCLEdBQW9CVixHQUFxQyxHQUF6RCxFQVZ0QixjQVVzQyxHQUFJQSxHQUFxQyxHQUF6QztJQUNsQyxJQUFrQ0EsSUFBdUQsR0FBdkRBLCtDQUFRLENBQWlCO1FBQUNTLEdBQUcsRUFBQyxDQUFDO1FBQUNDLEdBQUcsRUFBQyxFQUFFO1FBQUNHLFdBQVcsRUFBQyxFQUFFO0tBQUMsQ0FBQyxFQVg3RixTQVdvQixHQUFrQmIsSUFBdUQsR0FBekUsRUFYcEIsWUFXa0MsR0FBSUEsSUFBdUQsR0FBM0Q7SUFFOUJFLGdEQUFTLENBQUMsV0FBTTtRQUNaLG1DQUFtQztRQUNuQyxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCRyw0REFBWSxDQUFDLGNBQWMsQ0FBQyxDQUMzQlksSUFBSSxDQUFDLFNBQUNDLFFBQWEsRUFBSztZQUNyQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLEVBQUNGLFFBQVEsQ0FBQyxDQUFDO1lBQzFDLElBQUlHLElBQUksR0FBR0gsUUFBUSxDQUFDSSxJQUFJO1lBQ3hCLElBQUliLEdBQUcsR0FBR1ksSUFBSSxDQUFDWixHQUFHO1lBQ2xCLElBQUlDLEdBQUcsR0FBR1csSUFBSSxDQUFDWCxHQUFHO1lBQ2xCRSxjQUFjLENBQUM7Z0JBQUNILEdBQUcsRUFBQ0EsR0FBRztnQkFBQ0Ms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SyxDQUFDO2lCQUFBO2dCQUM1RFUsU0FBUyxFQUFFeEMsc0VBQVk7Z0JBQ3ZCK0MsV0FBVyxFQUFFLFlBQVcsQ0FBZ0IsT0FBZHBDLFNBQVMsQ0FBQ0osR0FBRyxDQUFFOzs7OztxQkFDM0M7WUFBQSxRQUVOOzs7Ozs7YUFBTSxDQUNSO0NBQ0w7R0FoSUtKLFdBQVc7QUFBWEEsS0FBQUEsV0FBVztBQWtJakIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25vcm1hbFJhbmdlL05vcm1hbFJhbmdlLnRzeD9lNDVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCAgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Ob3JtYWxSYW5nZS5tb2R1bGUuY3NzXCJcbmltcG9ydCBSYW5nZSBmcm9tIFwiY29tcG9uZW50cy9yYW5nZS9SYW5nZVwiXG5pbXBvcnQgeyByYW5nZURlZlZhbHVlcywgcmFuZ2VWYWx1ZXMgfSBmcm9tICd1dGlsaXR5L3R5cGVzJztcbmltcG9ydCBpbnN0YW5jZSBmcm9tICd1dGlsaXR5L2NhbGxzQVBJJztcblxuXG5jb25zdCBOb3JtYWxSYW5nZSA9ICgpID0+IHtcbiAgICBjb25zdCBtaW5JbnB1dFJlZjphbnkgPSB1c2VSZWYoKTtcbiAgICBjb25zdCBtYXhJbnB1dFJlZjphbnkgPSB1c2VSZWYoKTtcbiAgICBjb25zdCBbaW5wdXRWYWx1ZXMsIHNldElucHV0VmFsdWVzXSA9IHVzZVN0YXRlPHJhbmdlVmFsdWVzPih7bWluOjAsbWF4OjUwfSk7ICAgIFxuICAgIGNvbnN0IFtkZWZWYWx1ZXMsIHNldERlZlZhbHVlc10gPSB1c2VTdGF0ZTxyYW5nZURlZlZhbHVlcz4oe21pbjowLG1heDo1MCx2YWx1ZXNSYW5nZTo1MH0pOyAgIFxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy9BUEkgVE8gR0VUIERFRkFVTFQgVkFMVUVTICAgICAgICBcbiAgICAgICAgLy8gbGV0IG1pbiA9IDA7XG4gICAgICAgIC8vIGxldCBtYXggPSAxMDA7XG4gICAgICAgIGluc3RhbmNlLmdldCgnL2xpbWl0cy5qc29uJylcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLSByZXNwb25zZTpcIixyZXNwb25zZSk7XG4gICAgICAgICAgICBsZXQgZGF0aSA9IHJlc3BvbnNlLmRhdGFcbiAgICAgICAgICAgIGxldCBtaW4gPSBkYXRpLm1pbjtcbiAgICAgICAgICAgIGxldCBtYXggPSBkYXRpLm1heDtcbiAgICAgICAgICAgIHNldElucHV0VmFsdWVzKHttaW46bWluLG1heDptYXh9KTtcbiAgICAgICAgICAgIHNldERlZlZhbHVlcyh7bWluOm1pbixtYXg6bWF4LHZhbHVlc1JhbmdlOm1heC1taW59KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0gRVJST1I6XCIsZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG5cbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBjaGFuZ2VJbnB1dFZhbHVlcyA9ICh2YWw6bnVtYmVyLHR5cGU6c3RyaW5nKSA9PiB7XG4gICAgICAgIC8vQ0hBTkdFIElOUFVUIFZBTFVFUyBBTkQgVFJJR0dFUiBGVU5DVElPTiBUTyBDSEVDSyBJRiBWQUxVRVMgQVJFIENPUlJFQ1RcbiAgICAgICAgbGV0IG9sZFZhbHVlcyA9IHsuLi5pbnB1dFZhbHVlc307XG4gICAgICAgIGxldCBuZXdWYWx1ZXM6YW55O1xuICAgICAgICBcbiAgICAgICAgaWYodHlwZSA9PSBcIm1pblwiKVxuICAgICAgICAgICAgbmV3VmFsdWVzID0ge21pbjp2YWwsbWF4Om9sZFZhbHVlcy5tYXh9OyAgICAgICAgXG4gICAgICAgIGVsc2UgaWYodHlwZSA9PSBcIm1heFwiKVxuICAgICAgICAgICAgbmV3VmFsdWVzID0ge21pbjpvbGRWYWx1ZXMubWluLG1heDp2YWx9OyAgXG4gICAgICAgICAgICBcbiAgICAgICAgc2V0SW5wdXRWYWx1ZXMobmV3VmFsdWVzKTsgXG5cbiAgICAgICAgY29uc3QgY2hlY2tWYWx1ZXMgPSBzZXRUaW1lb3V0KCgpID0+IHsgXG4gICAgICAgICAgICBpZih0eXBlID09IFwibWluXCIgJiYgbmV3VmFsdWVzLm1pbiA9PSBtaW5JbnB1dFJlZiEuY3VycmVudCEudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIGZpeElucHV0VmFsdWVzKG5ld1ZhbHVlcy5taW4sIHR5cGUpOyAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgZWxzZSBpZih0eXBlID09IFwibWF4XCIgJiYgbmV3VmFsdWVzLm1heCA9PSBtYXhJbnB1dFJlZiEuY3VycmVudCEudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIGZpeElucHV0VmFsdWVzKG5ld1ZhbHVlcy5tYXgsIHR5cGUpOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgfSwgMTUwMCk7IFxuXG4gICAgICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQoY2hlY2tWYWx1ZXMpOyAgIFxuXG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlTWluVmFsdWUgPSAocGVyY2VudGFnZTpudW1iZXIpID0+IHtcbiAgICAgICAgLy9DSEFOR0UgTUlOIElOUFVUIFZBTFVFUyBBTkQgVFJJR0dFUiBGVU5DVElPTiBUTyBDSEVDSyBJRiBWQUxVRVMgQVJFIENPUlJFQ1RcbiAgICAgICAgY29uc29sZS5sb2coXCJ1cGRhdGVNaW5WYWx1ZTpcIixwZXJjZW50YWdlKTsgIFxuICAgICAgICBsZXQgbmV3VmFsID0gKChkZWZWYWx1ZXMudmFsdWVzUmFuZ2UgLyAxMDApICogcGVyY2VudGFnZSkgKyBkZWZWYWx1ZXMubWluO1xuICAgICAgICBuZXdWYWwgPSBNYXRoLmZsb29yKG5ld1ZhbCk7XG4gICAgICAgIGZpeElucHV0VmFsdWVzKG5ld1ZhbCwgXCJtaW5cIik7IFxuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZU1heFZhbHVlID0gKHBlcmNlbnRhZ2U6bnVtYmVyKSA9PiB7XG4gICAgICAgIC8vQ0hBTkdFIE1BWCBJTlBVVCBWQUxVRVMgQU5EIFRSSUdHRVIgRlVOQ1RJT04gVE8gQ0hFQ0sgSUYgVkFMVUVTIEFSRSBDT1JSRUNUXG4gICAgICAgIGxldCBuZXdWYWwgPSAoKGRlZlZhbHVlcy52YWx1ZXNSYW5nZSAvIDEwMCkgKiBwZXJjZW50YWdlKSArIGRlZlZhbHVlcy5taW47XG4gICAgICAgIG5ld1ZhbCA9IE1hdGguZmxvb3IobmV3VmFsKTtcbiAgICAgICAgZml4SW5wdXRWYWx1ZXMobmV3VmFsLCBcIm1heFwiKTsgXG4gICAgfVxuXG4gICAgY29uc3QgZml4SW5wdXRWYWx1ZXMgPSAodmFsOm51bWJlcix0eXBlOnN0cmluZykgPT4ge1xuICAgICAgICAvL0ZJWCBWQUxVRVMgSUYgSU5QVVQgVkFMVUVTIEFSRSBMT1dFUiBPUiBISUdIRVIgVEhBTiBERUZBVUxUIFZBTFVFUyBPUiBNSU4gLyBNQVggVkFMVUVTXG4gICAgICAgIGlmKHR5cGUgPT0gXCJtaW5cIil7XG4gICAgICAgICAgICBpZih2YWwpe1xuICAgICAgICAgICAgICAgIGlmKHZhbCA8IGRlZlZhbHVlcy5taW4pXG4gICAgICAgICAgICAgICAgICAgIHNldElucHV0VmFsdWVzKHttaW46ZGVmVmFsdWVzLm1pbixtYXg6aW5wdXRWYWx1ZXMubWF4fSk7XG4gICAgICAgICAgICAgICAgZWxzZSBpZih2YWwgPj0gaW5wdXRWYWx1ZXMubWF4KVxuICAgICAgICAgICAgICAgICAgICBzZXRJbnB1dFZhbHVlcyh7bWluOmlucHV0VmFsdWVzLm1heCxtYXg6aW5wdXRWYWx1ZXMubWF4fSk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBzZXRJbnB1dFZhbHVlcyh7bWluOnZhbCxtYXg6aW5wdXRWYWx1ZXMubWF4fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHNldElucHV0VmFsdWVzKHttaW46ZGVmVmFsdWVzLm1pbixtYXg6aW5wdXRWYWx1ZXMubWF4fSk7ICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHR5cGUgPT0gXCJtYXhcIil7XG4gICAgICAgICAgICBpZih2YWwpe1xuICAgICAgICAgICAgICAgIGlmKHZhbCA+IGRlZlZhbHVlcy5tYXgpXG4gICAgICAgICAgICAgICAgc2V0SW5wdXRWYWx1ZXMoe21pbjppbnB1dFZhbHVlcy5taW4sbWF4OmRlZlZhbHVlcy5tYXh9KTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmKHZhbCA8PSBpbnB1dFZhbHVlcy5taW4pXG4gICAgICAgICAgICAgICAgICAgIHNldElucHV0VmFsdWVzKHttaW46aW5wdXRWYWx1ZXMubWluLG1heDppbnB1dFZhbHVlcy5taW59KTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHNldElucHV0VmFsdWVzKHttaW46aW5wdXRWYWx1ZXMubWluLG1heDp2YWx9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgc2V0SW5wdXRWYWx1ZXMoe21pbjppbnB1dFZhbHVlcy5taW4sbWF4OmRlZlZhbHVlcy5tYXh9KTsgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSAgXG5cbiAgICAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSA+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWVzLm1pbn1cbiAgICAgICAgICAgICAgICByZWY9e21pbklucHV0UmVmfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTphbnkpID0+IGNoYW5nZUlucHV0VmFsdWVzKGUudGFyZ2V0LnZhbHVlLCdtaW4nKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0gXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2BNaW4gdmFsdWUgJHtkZWZWYWx1ZXMubWlufWB9XG4gICAgICAgICAgICAvPuKCrFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJSYW5nZX0+XG4gICAgICAgICAgICA8UmFuZ2UgXG4gICAgICAgICAgICAgICAgbWluVmFsdWU9e2RlZlZhbHVlcy5taW59IFxuICAgICAgICAgICAgICAgIG1heFZhbHVlPXtkZWZWYWx1ZXMubWF4fSBcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZUlucHV0PXtpbnB1dFZhbHVlcy5taW59IFxuICAgICAgICAgICAgICAgIG1heFZhbHVlSW5wdXQ9e2lucHV0VmFsdWVzLm1heH0gXG4gICAgICAgICAgICAgICAgdXBkYXRlTWluVmFsdWU9e3VwZGF0ZU1pblZhbHVlfSBcbiAgICAgICAgICAgICAgICB1cGRhdGVNYXhWYWx1ZT17dXBkYXRlTWF4VmFsdWV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWVzLm1heH1cbiAgICAgICAgICAgICAgICByZWY9e21heElucHV0UmVmfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTphbnkpID0+IGNoYW5nZUlucHV0VmFsdWVzKGUudGFyZ2V0LnZhbHVlLCdtYXgnKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0gXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2BNYXggdmFsdWUgJHtkZWZWYWx1ZXMubWF4fWB9XG4gICAgICAgICAgICAvPuKCrFxuXG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOb3JtYWxSYW5nZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsInN0eWxlcyIsIlJhbmdlIiwiaW5zdGFuY2UiLCJOb3JtYWxSYW5nZSIsIm1pbklucHV0UmVmIiwibWF4SW5wdXRSZWYiLCJtaW4iLCJtYXgiLCJpbnB1dFZhbHVlcyIsInNldElucHV0VmFsdWVzIiwidmFsdWVzUmFuZ2UiLCJkZWZWYWx1ZXMiLCJzZXREZWZWYWx1ZXMiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0aSIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY2hhbmdlSW5wdXRWYWx1ZXMiLCJ2YWwiLCJ0eXBlIiwib2xkVmFsdWVzIiwibmV3VmFsdWVzIiwiY2hlY2tWYWx1ZXMiLCJzZXRUaW1lb3V0IiwiY3VycmVudCIsInZhbHVlIiwiZml4SW5wdXRWYWx1ZXMiLCJjbGVhclRpbWVvdXQiLCJ1cGRhdGVNaW5WYWx1ZSIsInBlcmNlbnRhZ2UiLCJuZXdWYWwiLCJNYXRoIiwiZmxvb3IiLCJ1cGRhdGVNYXhWYWx1ZSIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImlucHV0IiwicmVmIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJjb250YWluZXJSYW5nZSIsIm1pblZhbHVlIiwibWF4VmFsdWUiLCJtaW5WYWx1ZUlucHV0IiwibWF4VmFsdWVJbnB1dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/normalRange/NormalRange.tsx\n");

/***/ })

});