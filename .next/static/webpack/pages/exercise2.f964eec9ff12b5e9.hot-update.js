"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/exercise2",{

/***/ "./components/fixedRange/FixedRange.tsx":
/*!**********************************************!*\
  !*** ./components/fixedRange/FixedRange.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FixedRange_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FixedRange.module.css */ \"./components/fixedRange/FixedRange.module.css\");\n/* harmony import */ var _FixedRange_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_FixedRange_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var components_range_Range__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/range/Range */ \"./components/range/Range.tsx\");\n/* harmony import */ var utility_callsAPI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utility/callsAPI */ \"./utility/callsAPI.tsx\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar FixedRange = function() {\n    _s();\n    var minInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var maxInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        min: 0,\n        max: 50\n    }), inputValues = ref[0], setInputValues = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        min: 0,\n        max: 50,\n        valuesRange: 50\n    }), defValues = ref1[0], setDefValues = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        //API TO GET DEFAULT VALUES \n        utility_callsAPI__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/rangeValues.json\").then(function(response) {\n            console.log(\"response:\", response);\n            var dati = response.data;\n            var min = dati.min;\n            var max = dati.max;\n            setInputValues({\n                min: min,\n                max: max\n            });\n            setDefValues({\n                min: min,\n                max: max,\n                valuesRange: max - min\n            });\n        }).catch(function(error) {\n            console.log(\"------- ERROR:\", error);\n        });\n    }, []);\n    var changeInputValues = function(val, type) {\n        //CHANGE INPUT VALUES AND TRIGGER FUNCTION TO CHECK IF VALUES ARE CORRECT\n        var oldValues = _objectSpread({}, inputValues);\n        var newValues;\n        if (type == \"min\") newValues = {\n            min: val,\n            max: oldValues.max\n        };\n        else if (type == \"max\") newValues = {\n            min: oldValues.min,\n            max: val\n        };\n        setInputValues(newValues);\n        var checkValues = setTimeout(function() {\n            if (type == \"min\" && newValues.min == minInputRef.current.value) fixInputValues(newValues.min, type);\n            else if (type == \"max\" && newValues.max == maxInputRef.current.value) fixInputValues(newValues.max, type);\n        }, 1500);\n        return function() {\n            return clearTimeout(checkValues);\n        };\n    };\n    var updateMinValue = function(percentage) {\n        //CHANGE MIN INPUT VALUES AND TRIGGER FUNCTION TO CHECK IF VALUES ARE CORRECT\n        var newVal = defValues.valuesRange / 100 * percentage + defValues.min;\n        newVal = Math.floor(newVal);\n        fixInputValues(newVal, \"min\");\n    };\n    var updateMaxValue = function(percentage) {\n        //CHANGE MAX INPUT VALUES AND TRIGGER FUNCTION TO CHECK IF VALUES ARE CORRECT\n        var newVal = defValues.valuesRange / 100 * percentage + defValues.min;\n        newVal = Math.floor(newVal);\n        fixInputValues(newVal, \"max\");\n    };\n    var fixInputValues = function(val, type) {\n        //FIX VALUES IF INPUT VALUES ARE LOWER OR HIGHER THAN DEFAULT VALUES OR MIN / MAX VALUES\n        if (type == \"min\") {\n            if (val) {\n                if (val < defValues.min) setInputValues({\n                    min: defValues.min,\n                    max: inputValues.max\n                });\n                else if (val >= inputValues.max) setInputValues({\n                    min: inputValues.max,\n                    max: inputValues.max\n                });\n                else setInputValues({\n                    min: val,\n                    max: inputValues.max\n                });\n            } else {\n                setInputValues({\n                    min: defValues.min,\n                    max: inputValues.max\n                });\n            }\n        } else if (type == \"max\") {\n            if (val) {\n                if (val > defValues.max) setInputValues({\n                    min: inputValues.min,\n                    max: defValues.max\n                });\n                else if (val <= inputValues.min) setInputValues({\n                    min: inputValues.min,\n                    max: inputValues.min\n                });\n                else setInputValues({\n                    min: inputValues.min,\n                    max: val\n                });\n            } else {\n                setInputValues({\n                    min: inputValues.min,\n                    max: defValues.max\n                });\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_FixedRange_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        style: {\n            cursor: \"default\"\n        },\n        onDragOver: function(event) {\n            event.preventDefault();\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: inputValues.min,\n                ref: minInputRef,\n                onChange: function(e) {\n                    return changeInputValues(e.target.value, \"min\");\n                },\n                className: (_FixedRange_module_css__WEBPACK_IMPORTED_MODULE_4___default().input),\n                placeholder: \"Min value \".concat(defValues.min)\n            }, void 0, false, {\n                fileName: \"C:\\\\inetpub\\\\wwwroot\\\\range-reactjs\\\\components\\\\fixedRange\\\\FixedRange.tsx\",\n                lineNumber: 107,\n                columnNumber: 13\n            }, _this),\n            \"\\u20AC\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FixedRange_module_css__WEBPACK_IMPORTED_MODULE_4___default().containerRange),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_range_Range__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    minValue: defValues.min,\n                    maxValue: defValues.max,\n                    minValueInput: inputValues.min,\n                    maxValueInput: inputValues.max,\n                    updateMinValue: updateMinValue,\n                    updateMaxValue: updateMaxValue\n                }, void 0, false, {\n                    fileName: \"C:\\\\inetpub\\\\wwwroot\\\\range-reactjs\\\\components\\\\fixedRange\\\\FixedRange.tsx\",\n                    lineNumber: 115,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\inetpub\\\\wwwroot\\\\range-reactjs\\\\components\\\\fixedRange\\\\FixedRange.tsx\",\n                lineNumber: 114,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: inputValues.max,\n                ref: maxInputRef,\n                onChange: function(e) {\n                    return changeInputValues(e.target.value, \"max\");\n                },\n                className: (_FixedRange_module_css__WEBPACK_IMPORTED_MODULE_4___default().input),\n                placeholder: \"Max value \".concat(defValues.max)\n            }, void 0, false, {\n                fileName: \"C:\\\\inetpub\\\\wwwroot\\\\range-reactjs\\\\components\\\\fixedRange\\\\FixedRange.tsx\",\n                lineNumber: 124,\n                columnNumber: 13\n            }, _this),\n            \"\\u20AC\"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\inetpub\\\\wwwroot\\\\range-reactjs\\\\components\\\\fixedRange\\\\FixedRange.tsx\",\n        lineNumber: 104,\n        columnNumber: 9\n    }, _this);\n};\n_s(FixedRange, \"LCth9eIzZfQDzf580rsSR8xvL/c=\");\n_c = FixedRange;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FixedRange);\nvar _c;\n$RefreshReg$(_c, \"FixedRange\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2ZpeGVkUmFuZ2UvRml4ZWRSYW5nZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0RDtBQUNoQjtBQUNGO0FBRUY7O0FBRXhDLElBQU1PLFVBQVUsR0FBRyxXQUFNOztJQUNyQixJQUFNQyxXQUFXLEdBQU9OLDZDQUFNLEVBQUU7SUFDaEMsSUFBTU8sV0FBVyxHQUFPUCw2Q0FBTSxFQUFFO0lBQ2hDLElBQXNDRCxHQUFxQyxHQUFyQ0EsK0NBQVEsQ0FBYztRQUFDUyxHQUFHLEVBQUMsQ0FBQztRQUFDQyxHQUFHLEVBQUMsRUFBRTtLQUFDLENBQUMsRUFUL0UsV0FTc0IsR0FBb0JWLEdBQXFDLEdBQXpELEVBVHRCLGNBU3NDLEdBQUlBLEdBQXFDLEdBQXpDO0lBQ2xDLElBQWtDQSxJQUF1RCxHQUF2REEsK0NBQVEsQ0FBaUI7UUFBQ1MsR0FBRyxFQUFDLENBQUM7UUFBQ0MsR0FBRyxFQUFDLEVBQUU7UUFBQ0csV0FBVyxFQUFDLEVBQUU7S0FBQyxDQUFDLEVBVjdGLFNBVW9CLEdBQWtCYixJQUF1RCxHQUF6RSxFQVZwQixZQVVrQyxHQUFJQSxJQUF1RCxHQUEzRDtJQUU5QkUsZ0RBQVMsQ0FBQyxXQUFNO1FBQ1osNEJBQTRCO1FBQzVCRyw0REFBWSxDQUFDLG1CQUFtQixDQUFDLENBQ2hDWSxJQUFJLENBQUMsU0FBQ0MsUUFBYSxFQUFLO1lBQ3JCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxXQUFXLEVBQUNGLFFBQVEsQ0FBQyxDQUFDO1lBQ2xDLElBQUlHLElBQUksR0FBR0gsUUFBUSxDQUFDSSxJQUFJO1lBQ3hCLElBQUliLEdBQUcsR0FBR1ksSUFBSSxDQUFDWixHQUFHO1lBQ2xCLElBQUlDLEdBQUcsR0FBR1csSUFBSSxDQUFDWCxHQUFHO1lBQ2xCRSxjQUFjLENBQUM7Z0JBQUNILEdBQUcsRUFBQ0EsR0FBRztnQkFBQ0MsR0FBRyxFQUFDQSxHQUFHO2FBQUMsQ0FB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Q0MsTUFBTSxDQUFDckIsS0FBSyxFQUFDLEtBQUssQ0FBQztpQkFBQTtnQkFDNURVLFNBQVMsRUFBRXhDLHFFQUFZO2dCQUN2Qm9ELFdBQVcsRUFBRSxZQUFXLENBQWdCLE9BQWR6QyxTQUFTLENBQUNKLEdBQUcsQ0FBRTs7Ozs7cUJBQzNDO1lBQUEsUUFFTjs7Ozs7O2FBQU0sQ0FDUjtDQUNMO0dBL0hLSixVQUFVO0FBQVZBLEtBQUFBLFVBQVU7QUFpSWhCLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9maXhlZFJhbmdlL0ZpeGVkUmFuZ2UudHN4P2NlMzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsICB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0ZpeGVkUmFuZ2UubW9kdWxlLmNzc1wiXG5pbXBvcnQgUmFuZ2UgZnJvbSBcImNvbXBvbmVudHMvcmFuZ2UvUmFuZ2VcIlxuaW1wb3J0IHsgcmFuZ2VEZWZWYWx1ZXMsIHJhbmdlVmFsdWVzIH0gZnJvbSAndXRpbGl0eS90eXBlcyc7XG5pbXBvcnQgaW5zdGFuY2UgZnJvbSAndXRpbGl0eS9jYWxsc0FQSSc7XG5cbmNvbnN0IEZpeGVkUmFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgbWluSW5wdXRSZWY6YW55ID0gdXNlUmVmKCk7XG4gICAgY29uc3QgbWF4SW5wdXRSZWY6YW55ID0gdXNlUmVmKCk7XG4gICAgY29uc3QgW2lucHV0VmFsdWVzLCBzZXRJbnB1dFZhbHVlc10gPSB1c2VTdGF0ZTxyYW5nZVZhbHVlcz4oe21pbjowLG1heDo1MH0pOyAgICBcbiAgICBjb25zdCBbZGVmVmFsdWVzLCBzZXREZWZWYWx1ZXNdID0gdXNlU3RhdGU8cmFuZ2VEZWZWYWx1ZXM+KHttaW46MCxtYXg6NTAsdmFsdWVzUmFuZ2U6NTB9KTsgICBcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vQVBJIFRPIEdFVCBERUZBVUxUIFZBTFVFUyBcbiAgICAgICAgaW5zdGFuY2UuZ2V0KCcvcmFuZ2VWYWx1ZXMuanNvbicpXG4gICAgICAgIC50aGVuKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlOlwiLHJlc3BvbnNlKTtcbiAgICAgICAgICAgIGxldCBkYXRpID0gcmVzcG9uc2UuZGF0YVxuICAgICAgICAgICAgbGV0IG1pbiA9IGRhdGkubWluO1xuICAgICAgICAgICAgbGV0IG1heCA9IGRhdGkubWF4O1xuICAgICAgICAgICAgc2V0SW5wdXRWYWx1ZXMoe21pbjptaW4sbWF4Om1heH0pO1xuICAgICAgICAgICAgc2V0RGVmVmFsdWVzKHttaW46bWluLG1heDptYXgsdmFsdWVzUmFuZ2U6bWF4LW1pbn0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLSBFUlJPUjpcIixlcnJvcik7XG4gICAgICAgIH0pO1xuICAgICAgICBcblxuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IGNoYW5nZUlucHV0VmFsdWVzID0gKHZhbDpudW1iZXIsdHlwZTpzdHJpbmcpID0+IHtcbiAgICAgICAgLy9DSEFOR0UgSU5QVVQgVkFMVUVTIEFORCBUUklHR0VSIEZVTkNUSU9OIFRPIENIRUNLIElGIFZBTFVFUyBBUkUgQ09SUkVDVFxuICAgICAgICBsZXQgb2xkVmFsdWVzID0gey4uLmlucHV0VmFsdWVzfTtcbiAgICAgICAgbGV0IG5ld1ZhbHVlczphbnk7XG4gICAgICAgIFxuICAgICAgICBpZih0eXBlID09IFwibWluXCIpXG4gICAgICAgICAgICBuZXdWYWx1ZXMgPSB7bWluOnZhbCxtYXg6b2xkVmFsdWVzLm1heH07ICAgICAgICBcbiAgICAgICAgZWxzZSBpZih0eXBlID09IFwibWF4XCIpXG4gICAgICAgICAgICBuZXdWYWx1ZXMgPSB7bWluOm9sZFZhbHVlcy5taW4sbWF4OnZhbH07ICBcbiAgICAgICAgICAgIFxuICAgICAgICBzZXRJbnB1dFZhbHVlcyhuZXdWYWx1ZXMpOyBcblxuICAgICAgICBjb25zdCBjaGVja1ZhbHVlcyA9IHNldFRpbWVvdXQoKCkgPT4geyBcbiAgICAgICAgICAgIGlmKHR5cGUgPT0gXCJtaW5cIiAmJiBuZXdWYWx1ZXMubWluID09IG1pbklucHV0UmVmIS5jdXJyZW50IS52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgZml4SW5wdXRWYWx1ZXMobmV3VmFsdWVzLm1pbiwgdHlwZSk7ICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBlbHNlIGlmKHR5cGUgPT0gXCJtYXhcIiAmJiBuZXdWYWx1ZXMubWF4ID09IG1heElucHV0UmVmIS5jdXJyZW50IS52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgZml4SW5wdXRWYWx1ZXMobmV3VmFsdWVzLm1heCwgdHlwZSk7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICB9LCAxNTAwKTsgXG5cbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dChjaGVja1ZhbHVlcyk7ICAgXG5cbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVNaW5WYWx1ZSA9IChwZXJjZW50YWdlOm51bWJlcikgPT4ge1xuICAgICAgICAvL0NIQU5HRSBNSU4gSU5QVVQgVkFMVUVTIEFORCBUUklHR0VSIEZVTkNUSU9OIFRPIENIRUNLIElGIFZBTFVFUyBBUkUgQ09SUkVDVFxuICAgICAgICBsZXQgbmV3VmFsID0gKChkZWZWYWx1ZXMudmFsdWVzUmFuZ2UgLyAxMDApICogcGVyY2VudGFnZSkgKyBkZWZWYWx1ZXMubWluO1xuICAgICAgICBuZXdWYWwgPSBNYXRoLmZsb29yKG5ld1ZhbCk7XG4gICAgICAgIGZpeElucHV0VmFsdWVzKG5ld1ZhbCwgXCJtaW5cIik7IFxuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZU1heFZhbHVlID0gKHBlcmNlbnRhZ2U6bnVtYmVyKSA9PiB7XG4gICAgICAgIC8vQ0hBTkdFIE1BWCBJTlBVVCBWQUxVRVMgQU5EIFRSSUdHRVIgRlVOQ1RJT04gVE8gQ0hFQ0sgSUYgVkFMVUVTIEFSRSBDT1JSRUNUXG4gICAgICAgIGxldCBuZXdWYWwgPSAoKGRlZlZhbHVlcy52YWx1ZXNSYW5nZSAvIDEwMCkgKiBwZXJjZW50YWdlKSArIGRlZlZhbHVlcy5taW47XG4gICAgICAgIG5ld1ZhbCA9IE1hdGguZmxvb3IobmV3VmFsKTtcbiAgICAgICAgZml4SW5wdXRWYWx1ZXMobmV3VmFsLCBcIm1heFwiKTsgXG4gICAgfVxuXG4gICAgY29uc3QgZml4SW5wdXRWYWx1ZXMgPSAodmFsOm51bWJlcix0eXBlOnN0cmluZykgPT4ge1xuICAgICAgICAvL0ZJWCBWQUxVRVMgSUYgSU5QVVQgVkFMVUVTIEFSRSBMT1dFUiBPUiBISUdIRVIgVEhBTiBERUZBVUxUIFZBTFVFUyBPUiBNSU4gLyBNQVggVkFMVUVTXG4gICAgICAgIGlmKHR5cGUgPT0gXCJtaW5cIil7XG4gICAgICAgICAgICBpZih2YWwpe1xuICAgICAgICAgICAgICAgIGlmKHZhbCA8IGRlZlZhbHVlcy5taW4pXG4gICAgICAgICAgICAgICAgICAgIHNldElucHV0VmFsdWVzKHttaW46ZGVmVmFsdWVzLm1pbixtYXg6aW5wdXRWYWx1ZXMubWF4fSk7XG4gICAgICAgICAgICAgICAgZWxzZSBpZih2YWwgPj0gaW5wdXRWYWx1ZXMubWF4KVxuICAgICAgICAgICAgICAgICAgICBzZXRJbnB1dFZhbHVlcyh7bWluOmlucHV0VmFsdWVzLm1heCxtYXg6aW5wdXRWYWx1ZXMubWF4fSk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBzZXRJbnB1dFZhbHVlcyh7bWluOnZhbCxtYXg6aW5wdXRWYWx1ZXMubWF4fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHNldElucHV0VmFsdWVzKHttaW46ZGVmVmFsdWVzLm1pbixtYXg6aW5wdXRWYWx1ZXMubWF4fSk7ICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHR5cGUgPT0gXCJtYXhcIil7XG4gICAgICAgICAgICBpZih2YWwpe1xuICAgICAgICAgICAgICAgIGlmKHZhbCA+IGRlZlZhbHVlcy5tYXgpXG4gICAgICAgICAgICAgICAgc2V0SW5wdXRWYWx1ZXMoe21pbjppbnB1dFZhbHVlcy5taW4sbWF4OmRlZlZhbHVlcy5tYXh9KTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmKHZhbCA8PSBpbnB1dFZhbHVlcy5taW4pXG4gICAgICAgICAgICAgICAgICAgIHNldElucHV0VmFsdWVzKHttaW46aW5wdXRWYWx1ZXMubWluLG1heDppbnB1dFZhbHVlcy5taW59KTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHNldElucHV0VmFsdWVzKHttaW46aW5wdXRWYWx1ZXMubWluLG1heDp2YWx9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgc2V0SW5wdXRWYWx1ZXMoe21pbjppbnB1dFZhbHVlcy5taW4sbWF4OmRlZlZhbHVlcy5tYXh9KTsgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSAgXG5cbiAgICAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSBzdHlsZT17e2N1cnNvcjpcImRlZmF1bHRcIn19ICBvbkRyYWdPdmVyPXsoZXZlbnQ6YW55KSA9PiAgICB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9ICAgfSAgPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZXMubWlufVxuICAgICAgICAgICAgICAgIHJlZj17bWluSW5wdXRSZWZ9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlOmFueSkgPT4gY2hhbmdlSW5wdXRWYWx1ZXMoZS50YXJnZXQudmFsdWUsJ21pbicpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fSBcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YE1pbiB2YWx1ZSAke2RlZlZhbHVlcy5taW59YH1cbiAgICAgICAgICAgIC8+4oKsXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lclJhbmdlfT5cbiAgICAgICAgICAgIDxSYW5nZSBcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZT17ZGVmVmFsdWVzLm1pbn0gXG4gICAgICAgICAgICAgICAgbWF4VmFsdWU9e2RlZlZhbHVlcy5tYXh9IFxuICAgICAgICAgICAgICAgIG1pblZhbHVlSW5wdXQ9e2lucHV0VmFsdWVzLm1pbn0gXG4gICAgICAgICAgICAgICAgbWF4VmFsdWVJbnB1dD17aW5wdXRWYWx1ZXMubWF4fSBcbiAgICAgICAgICAgICAgICB1cGRhdGVNaW5WYWx1ZT17dXBkYXRlTWluVmFsdWV9IFxuICAgICAgICAgICAgICAgIHVwZGF0ZU1heFZhbHVlPXt1cGRhdGVNYXhWYWx1ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWVzLm1heH1cbiAgICAgICAgICAgICAgICByZWY9e21heElucHV0UmVmfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTphbnkpID0+IGNoYW5nZUlucHV0VmFsdWVzKGUudGFyZ2V0LnZhbHVlLCdtYXgnKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0gXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2BNYXggdmFsdWUgJHtkZWZWYWx1ZXMubWF4fWB9XG4gICAgICAgICAgICAvPuKCrFxuXG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaXhlZFJhbmdlOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiUmFuZ2UiLCJpbnN0YW5jZSIsIkZpeGVkUmFuZ2UiLCJtaW5JbnB1dFJlZiIsIm1heElucHV0UmVmIiwibWluIiwibWF4IiwiaW5wdXRWYWx1ZXMiLCJzZXRJbnB1dFZhbHVlcyIsInZhbHVlc1JhbmdlIiwiZGVmVmFsdWVzIiwic2V0RGVmVmFsdWVzIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImRhdGkiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNoYW5nZUlucHV0VmFsdWVzIiwidmFsIiwidHlwZSIsIm9sZFZhbHVlcyIsIm5ld1ZhbHVlcyIsImNoZWNrVmFsdWVzIiwic2V0VGltZW91dCIsImN1cnJlbnQiLCJ2YWx1ZSIsImZpeElucHV0VmFsdWVzIiwiY2xlYXJUaW1lb3V0IiwidXBkYXRlTWluVmFsdWUiLCJwZXJjZW50YWdlIiwibmV3VmFsIiwiTWF0aCIsImZsb29yIiwidXBkYXRlTWF4VmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJzdHlsZSIsImN1cnNvciIsIm9uRHJhZ092ZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJyZWYiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsImNvbnRhaW5lclJhbmdlIiwibWluVmFsdWUiLCJtYXhWYWx1ZSIsIm1pblZhbHVlSW5wdXQiLCJtYXhWYWx1ZUlucHV0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/fixedRange/FixedRange.tsx\n");

/***/ })

});