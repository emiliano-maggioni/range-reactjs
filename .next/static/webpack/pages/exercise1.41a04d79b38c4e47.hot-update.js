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

/***/ "./components/range/Range.tsx":
/*!************************************!*\
  !*** ./components/range/Range.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Range_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Range.module.css */ \"./components/range/Range.module.css\");\n/* harmony import */ var _Range_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Range_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar Range = function(param) {\n    var minValue = param.minValue, maxValue = param.maxValue, minValueInput = param.minValueInput, maxValueInput = param.maxValueInput, updateMinValue = param.updateMinValue, updateMaxValue = param.updateMaxValue;\n    _s();\n    var firstMarker = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var secondMarker = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var rangeBar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var markerSize = 14;\n    var barLength = 400;\n    var maxRightPos = barLength - markerSize;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), coords = ref[0], setCoords = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), marker1Pos = ref1[0], setMarker1Pos = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), marker2Pos = ref2[0], setMarker2Pos = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (coords) {\n            //SETTING RANGE BAR COORDS\n            var minPos = getPositionFromValue(minValueInput);\n            var maxPos = getPositionFromValue(maxValueInput);\n            setMarker1Pos(minPos);\n            setMarker2Pos(maxPos);\n        }\n    }, [\n        minValueInput,\n        maxValueInput\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        //SETTING RANGE BAR COORDS\n        var bar = rangeBar.current.getBoundingClientRect();\n        //setCoords({barLeft:bar.left,barRight:bar.right,minPercentage:minPercentage,maxPercentage:maxPercentage});\n        setCoords({\n            barLeft: bar.left,\n            barRight: bar.right\n        });\n        var minPos = getPositionFromValue(minValue);\n        var maxPos = getPositionFromValue(maxValue);\n        setMarker1Pos(minPos);\n        setMarker2Pos(maxPos);\n    }, [\n        minValue,\n        maxValue\n    ]);\n    var dragStart = function(event, markerId) {\n        console.log(\"1) clientX:\", event.clientX);\n    // firstMarker.current.classList.add('markerHover');\n    };\n    var dragEnd = function(event, markerId) {\n        console.log(\"coords.barLeft:\", coords.barLeft);\n        console.log(\"2) clientX :\", event.clientX);\n        // rangeBar.current.style.cursor = 'grab';\n        var newPos = event.clientX - coords.barLeft;\n        if (newPos >= maxRightPos) newPos = maxRightPos;\n        if (newPos < 0) newPos = 0;\n        // let percentage = getRangeValue(newPos);\n        // console.log(\"newPos:\",newPos+\" - percentage:\",percentage);\n        if (markerId == 1) {\n            if (newPos >= marker2Pos) newPos = marker2Pos - markerSize;\n            var percentage = getRangeValue(newPos);\n            firstMarker.current.classList.remove(\"markerHover\");\n            updateMinValue(percentage);\n            setMarker1Pos(newPos);\n        } else {\n            if (newPos <= marker1Pos) newPos = marker1Pos + markerSize;\n            var percentage1 = getRangeValue(newPos);\n            secondMarker.current.classList.remove(\"markerHover\");\n            updateMaxValue(percentage1);\n            setMarker2Pos(newPos);\n        }\n    };\n    var getRangeValue = function(pos) {\n        //CALCULATE RANGE VALUE FROM MARKER POSITION\n        var percentage = maxRightPos / 100;\n        percentage = pos / percentage;\n        return percentage;\n    };\n    var getPositionFromValue = function(val) {\n        //CALCULATE MARKER POSITION FROM RANGE VALUE\n        var percentage = (maxValue - minValue) / 100;\n        percentage = (val - minValue) / percentage;\n        var pos = maxRightPos / 100 * percentage;\n        console.log(\"pos:\", pos);\n        return pos;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Range_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        // onDragEnter={(e) => dragEnter(e)}\n        ref: rangeBar,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                draggable: \"true\",\n                ref: firstMarker,\n                onDragStart: function(e) {\n                    return dragStart(e, 1);\n                },\n                onDragEnd: function(e) {\n                    return dragEnd(e, 1);\n                },\n                className: (_Range_module_css__WEBPACK_IMPORTED_MODULE_2___default().firstMarker),\n                style: {\n                    left: marker1Pos + \"px\"\n                },\n                children: \" \"\n            }, void 0, false, {\n                fileName: \"C:\\\\inetpub\\\\wwwroot\\\\range-reactjs\\\\components\\\\range\\\\Range.tsx\",\n                lineNumber: 98,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                draggable: \"true\",\n                ref: secondMarker,\n                onDragStart: function(e) {\n                    return dragStart(e, 2);\n                },\n                onDragEnd: function(e) {\n                    return dragEnd(e, 2);\n                },\n                className: (_Range_module_css__WEBPACK_IMPORTED_MODULE_2___default().secondMarker),\n                style: {\n                    left: marker2Pos + \"px\"\n                },\n                children: \" \"\n            }, void 0, false, {\n                fileName: \"C:\\\\inetpub\\\\wwwroot\\\\range-reactjs\\\\components\\\\range\\\\Range.tsx\",\n                lineNumber: 106,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\inetpub\\\\wwwroot\\\\range-reactjs\\\\components\\\\range\\\\Range.tsx\",\n        lineNumber: 94,\n        columnNumber: 9\n    }, _this);\n};\n_s(Range, \"N7AbMTJ6mp9FqBBNdLXXqB35p3M=\");\n_c = Range;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Range);\nvar _c;\n$RefreshReg$(_c, \"Range\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDO2lCQUFBO2dCQUM5QkwsU0FBUyxFQUFFN0MsdUVBQW1CO2dCQUM5Qm9ELEtBQUssRUFBRTtvQkFBRXpCLElBQUksRUFBRVQsVUFBVSxHQUFHLElBQUk7aUJBQUU7MEJBQ3JDLEdBQUM7Ozs7O3FCQUFNOzs7Ozs7YUFDTixDQUNSO0NBQ0w7R0EvR0tqQixLQUFLO0FBQUxBLEtBQUFBLEtBQUs7QUFpSFgsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3JhbmdlL1JhbmdlLnRzeD80NjY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1JhbmdlLm1vZHVsZS5jc3NcIlxuaW1wb3J0IHsgY29vcmRzUmFuZ2UsIHJhbmdlUHJvcHMgfSBmcm9tICd1dGlsaXR5L3R5cGVzJztcblxuY29uc3QgUmFuZ2UgPSAoe21pblZhbHVlLCBtYXhWYWx1ZSwgbWluVmFsdWVJbnB1dCwgbWF4VmFsdWVJbnB1dCwgdXBkYXRlTWluVmFsdWUsIHVwZGF0ZU1heFZhbHVlfTogcmFuZ2VQcm9wcykgPT4ge1xuICAgIGNvbnN0IGZpcnN0TWFya2VyOmFueSA9IHVzZVJlZigpO1xuICAgIGNvbnN0IHNlY29uZE1hcmtlcjphbnkgPSB1c2VSZWYoKTtcbiAgICBjb25zdCByYW5nZUJhcjphbnkgPSB1c2VSZWYoKTtcbiAgICBjb25zdCBtYXJrZXJTaXplID0gMTQ7XG4gICAgY29uc3QgYmFyTGVuZ3RoID0gNDAwO1xuICAgIGNvbnN0IG1heFJpZ2h0UG9zID0gYmFyTGVuZ3RoLW1hcmtlclNpemU7XG4gICAgY29uc3QgW2Nvb3Jkcywgc2V0Q29vcmRzXSA9IHVzZVN0YXRlPGNvb3Jkc1JhbmdlPigpO1xuICAgIGNvbnN0IFttYXJrZXIxUG9zLCBzZXRNYXJrZXIxUG9zXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFttYXJrZXIyUG9zLCBzZXRNYXJrZXIyUG9zXSA9IHVzZVN0YXRlKDApO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYoY29vcmRzKXtcbiAgICAgICAgICAgIC8vU0VUVElORyBSQU5HRSBCQVIgQ09PUkRTXG4gICAgICAgICAgICBsZXQgbWluUG9zID0gZ2V0UG9zaXRpb25Gcm9tVmFsdWUobWluVmFsdWVJbnB1dCk7XG4gICAgICAgICAgICBsZXQgbWF4UG9zID0gZ2V0UG9zaXRpb25Gcm9tVmFsdWUobWF4VmFsdWVJbnB1dCk7XG4gICAgICAgICAgICBzZXRNYXJrZXIxUG9zKG1pblBvcyk7XG4gICAgICAgICAgICBzZXRNYXJrZXIyUG9zKG1heFBvcyk7XG4gICAgICAgIH1cbiAgICB9LCBbbWluVmFsdWVJbnB1dCxtYXhWYWx1ZUlucHV0XSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAvL1NFVFRJTkcgUkFOR0UgQkFSIENPT1JEU1xuICAgICAgICBsZXQgYmFyOmFueSA9IHJhbmdlQmFyIS5jdXJyZW50IS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgLy9zZXRDb29yZHMoe2JhckxlZnQ6YmFyLmxlZnQsYmFyUmlnaHQ6YmFyLnJpZ2h0LG1pblBlcmNlbnRhZ2U6bWluUGVyY2VudGFnZSxtYXhQZXJjZW50YWdlOm1heFBlcmNlbnRhZ2V9KTtcbiAgICAgICAgc2V0Q29vcmRzKHtiYXJMZWZ0OmJhci5sZWZ0LGJhclJpZ2h0OmJhci5yaWdodH0pO1xuICAgICAgICBsZXQgbWluUG9zID0gZ2V0UG9zaXRpb25Gcm9tVmFsdWUobWluVmFsdWUpO1xuICAgICAgICBsZXQgbWF4UG9zID0gZ2V0UG9zaXRpb25Gcm9tVmFsdWUobWF4VmFsdWUpO1xuICAgICAgICBzZXRNYXJrZXIxUG9zKG1pblBvcyk7XG4gICAgICAgIHNldE1hcmtlcjJQb3MobWF4UG9zKTtcblxuICAgIH0sIFttaW5WYWx1ZSxtYXhWYWx1ZV0pO1xuXG5cbiAgICBjb25zdCBkcmFnU3RhcnQgPSAoZXZlbnQ6IFJlYWN0LkRyYWdFdmVudDxIVE1MRGl2RWxlbWVudD4sbWFya2VySWQ6bnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiMSkgY2xpZW50WDpcIiwgZXZlbnQuY2xpZW50WCk7XG4gICAgICAgLy8gZmlyc3RNYXJrZXIuY3VycmVudC5jbGFzc0xpc3QuYWRkKCdtYXJrZXJIb3ZlcicpO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYWdFbmQgPSAoZXZlbnQ6IFJlYWN0LkRyYWdFdmVudDxIVE1MRGl2RWxlbWVudD4sbWFya2VySWQ6bnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29vcmRzLmJhckxlZnQ6XCIsIGNvb3JkcyEuYmFyTGVmdCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiMikgY2xpZW50WCA6XCIsIGV2ZW50LmNsaWVudFgpO1xuICAgICAgICAvLyByYW5nZUJhci5jdXJyZW50LnN0eWxlLmN1cnNvciA9ICdncmFiJztcblxuICAgICAgICBsZXQgbmV3UG9zID0gZXZlbnQuY2xpZW50WCAtIGNvb3JkcyEuYmFyTGVmdDtcbiAgICAgICAgaWYobmV3UG9zID49IG1heFJpZ2h0UG9zKVxuICAgICAgICAgICAgbmV3UG9zID0gbWF4UmlnaHRQb3M7IFxuICAgICAgICBpZihuZXdQb3MgPCAwKVxuICAgICAgICAgICAgbmV3UG9zID0gMDsgXG5cbiAgICAgICAgLy8gbGV0IHBlcmNlbnRhZ2UgPSBnZXRSYW5nZVZhbHVlKG5ld1Bvcyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibmV3UG9zOlwiLG5ld1BvcytcIiAtIHBlcmNlbnRhZ2U6XCIscGVyY2VudGFnZSk7XG5cbiAgICAgICAgaWYobWFya2VySWQgPT0gMSl7XG4gICAgICAgICAgICBpZihuZXdQb3MgPj0gbWFya2VyMlBvcylcbiAgICAgICAgICAgICAgICBuZXdQb3MgPSBtYXJrZXIyUG9zLW1hcmtlclNpemU7IFxuICAgICAgICAgICAgbGV0IHBlcmNlbnRhZ2UgPSBnZXRSYW5nZVZhbHVlKG5ld1Bvcyk7XG4gICAgICAgICAgICBmaXJzdE1hcmtlciEuY3VycmVudCEuY2xhc3NMaXN0IS5yZW1vdmUoJ21hcmtlckhvdmVyJyk7XG4gICAgICAgICAgICB1cGRhdGVNaW5WYWx1ZShwZXJjZW50YWdlKTtcbiAgICAgICAgICAgIHNldE1hcmtlcjFQb3MobmV3UG9zKTtcbiAgICAgICAgfSAgXG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBpZihuZXdQb3MgPD0gbWFya2VyMVBvcylcbiAgICAgICAgICAgICAgICBuZXdQb3MgPSBtYXJrZXIxUG9zK21hcmtlclNpemU7IFxuICAgICAgICAgICAgbGV0IHBlcmNlbnRhZ2UgPSBnZXRSYW5nZVZhbHVlKG5ld1Bvcyk7XG4gICAgICAgICAgICBzZWNvbmRNYXJrZXIhLmN1cnJlbnQhLmNsYXNzTGlzdCEucmVtb3ZlKCdtYXJrZXJIb3ZlcicpO1xuICAgICAgICAgICAgdXBkYXRlTWF4VmFsdWUocGVyY2VudGFnZSk7XG4gICAgICAgICAgICBzZXRNYXJrZXIyUG9zKG5ld1Bvcyk7XG4gICAgICAgIH0gIFxuXG4gICAgfTtcblxuICAgIGNvbnN0IGdldFJhbmdlVmFsdWUgPSAocG9zOm51bWJlcikgPT4ge1xuICAgICAgICAvL0NBTENVTEFURSBSQU5HRSBWQUxVRSBGUk9NIE1BUktFUiBQT1NJVElPTlxuICAgICAgICBsZXQgcGVyY2VudGFnZSA9IG1heFJpZ2h0UG9zLzEwMDtcbiAgICAgICAgcGVyY2VudGFnZSA9IHBvcyAvIHBlcmNlbnRhZ2U7XG4gICAgICAgIHJldHVybiBwZXJjZW50YWdlO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRQb3NpdGlvbkZyb21WYWx1ZSA9ICh2YWw6bnVtYmVyKSA9PiB7XG4gICAgICAgIC8vQ0FMQ1VMQVRFIE1BUktFUiBQT1NJVElPTiBGUk9NIFJBTkdFIFZBTFVFXG4gICAgICAgIGxldCBwZXJjZW50YWdlID0gKG1heFZhbHVlLW1pblZhbHVlKSAvIDEwMDtcbiAgICAgICAgcGVyY2VudGFnZSA9ICh2YWwgLSBtaW5WYWx1ZSkgLyBwZXJjZW50YWdlO1xuICAgICAgICBsZXQgcG9zID0gKG1heFJpZ2h0UG9zIC8gMTAwKSAqIHBlcmNlbnRhZ2U7IFxuICAgICAgICBjb25zb2xlLmxvZyhcInBvczpcIixwb3MpO1xuICAgICAgICByZXR1cm4gcG9zO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn1cbiAgICAgICAgICAgIC8vIG9uRHJhZ0VudGVyPXsoZSkgPT4gZHJhZ0VudGVyKGUpfVxuICAgICAgICAgICAgcmVmPXtyYW5nZUJhcn1cbiAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgICBkcmFnZ2FibGU9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICByZWY9e2ZpcnN0TWFya2VyfVxuICAgICAgICAgICAgICAgIG9uRHJhZ1N0YXJ0PXsoZSkgPT4gZHJhZ1N0YXJ0KGUsMSl9IFxuICAgICAgICAgICAgICAgIG9uRHJhZ0VuZD17KGUpID0+IGRyYWdFbmQoZSwxKX0gXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZmlyc3RNYXJrZXJ9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbGVmdDogbWFya2VyMVBvcyArICdweCcgfX1cbiAgICAgICAgICAgID4gPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgIGRyYWdnYWJsZT1cInRydWVcIlxuICAgICAgICAgICAgICAgIHJlZj17c2Vjb25kTWFya2VyfVxuICAgICAgICAgICAgICAgIG9uRHJhZ1N0YXJ0PXsoZSkgPT4gZHJhZ1N0YXJ0KGUsMil9IFxuICAgICAgICAgICAgICAgIG9uRHJhZ0VuZD17KGUpID0+IGRyYWdFbmQoZSwyKX0gXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2Vjb25kTWFya2VyfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGxlZnQ6IG1hcmtlcjJQb3MgKyAncHgnIH19XG4gICAgICAgICAgICA+IDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmFuZ2U7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJSYW5nZSIsIm1pblZhbHVlIiwibWF4VmFsdWUiLCJtaW5WYWx1ZUlucHV0IiwibWF4VmFsdWVJbnB1dCIsInVwZGF0ZU1pblZhbHVlIiwidXBkYXRlTWF4VmFsdWUiLCJmaXJzdE1hcmtlciIsInNlY29uZE1hcmtlciIsInJhbmdlQmFyIiwibWFya2VyU2l6ZSIsImJhckxlbmd0aCIsIm1heFJpZ2h0UG9zIiwiY29vcmRzIiwic2V0Q29vcmRzIiwibWFya2VyMVBvcyIsInNldE1hcmtlcjFQb3MiLCJtYXJrZXIyUG9zIiwic2V0TWFya2VyMlBvcyIsIm1pblBvcyIsImdldFBvc2l0aW9uRnJvbVZhbHVlIiwibWF4UG9zIiwiYmFyIiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImJhckxlZnQiLCJsZWZ0IiwiYmFyUmlnaHQiLCJyaWdodCIsImRyYWdTdGFydCIsImV2ZW50IiwibWFya2VySWQiLCJjb25zb2xlIiwibG9nIiwiY2xpZW50WCIsImRyYWdFbmQiLCJuZXdQb3MiLCJwZXJjZW50YWdlIiwiZ2V0UmFuZ2VWYWx1ZSIsImNsYXNzTGlzdCIsInJlbW92ZSIsInBvcyIsInZhbCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInJlZiIsImRyYWdnYWJsZSIsIm9uRHJhZ1N0YXJ0IiwiZSIsIm9uRHJhZ0VuZCIsInN0eWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/range/Range.tsx\n");

/***/ })

});