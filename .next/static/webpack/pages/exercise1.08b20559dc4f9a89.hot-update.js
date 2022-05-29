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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Range_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Range.module.css */ \"./components/range/Range.module.css\");\n/* harmony import */ var _Range_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Range_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar Range = function(param) {\n    var minValue = param.minValue, maxValue = param.maxValue, minValueInput = param.minValueInput, maxValueInput = param.maxValueInput, updateMinValue = param.updateMinValue, updateMaxValue = param.updateMaxValue;\n    _s();\n    var firstMarker = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var secondMarker = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var rangeBar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var markerSize = 14;\n    var barLength = 400;\n    var maxRightPos = barLength - markerSize;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), coords = ref[0], setCoords = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), marker1Pos = ref1[0], setMarker1Pos = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), marker2Pos = ref2[0], setMarker2Pos = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (coords) {\n            //UPDATING RANGE BAR COORDS\n            var minPos = getPositionFromValue(minValueInput);\n            var maxPos = getPositionFromValue(maxValueInput);\n            setMarker1Pos(minPos);\n            setMarker2Pos(maxPos);\n        }\n    }, [\n        minValueInput,\n        maxValueInput\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        //SETTING RANGE BAR COORDS FOR THE FIRST TIME\n        var bar = rangeBar.current.getBoundingClientRect();\n        //setCoords({barLeft:bar.left,barRight:bar.right,minPercentage:minPercentage,maxPercentage:maxPercentage});\n        setCoords({\n            barLeft: bar.left,\n            barRight: bar.right\n        });\n        var minPos = getPositionFromValue(minValue);\n        var maxPos = getPositionFromValue(maxValue);\n        setMarker1Pos(minPos);\n        setMarker2Pos(maxPos);\n    }, [\n        minValue,\n        maxValue\n    ]);\n    var dragStart = function(event, markerId) {\n        console.log(\"1) clientX:\", event.clientX);\n    // firstMarker.current.classList.add('markerHover');\n    };\n    var dragEnd = function(event, markerId) {\n        console.log(\"coords.barLeft:\", coords.barLeft);\n        console.log(\"2) clientX :\", event.clientX);\n        // rangeBar.current.style.cursor = 'grab';\n        var newPos = event.clientX - coords.barLeft;\n        if (newPos >= maxRightPos) newPos = maxRightPos;\n        if (newPos < 0) newPos = 0;\n        if (markerId == 1) {\n            if (newPos >= marker2Pos) newPos = marker2Pos - markerSize;\n            var percentage = getRangeValue(newPos);\n            firstMarker.current.classList.remove(\"markerHover\");\n            updateMinValue(percentage);\n            setMarker1Pos(newPos);\n        } else {\n            if (newPos <= marker1Pos) newPos = marker1Pos + markerSize;\n            var percentage1 = getRangeValue(newPos);\n            secondMarker.current.classList.remove(\"markerHover\");\n            updateMaxValue(percentage1);\n            setMarker2Pos(newPos);\n        }\n    };\n    var getRangeValue = function(pos) {\n        //CALCULATE RANGE VALUE FROM MARKER POSITION\n        var percentage = maxRightPos / 100;\n        percentage = pos / percentage;\n        return percentage;\n    };\n    var getPositionFromValue = function(val) {\n        //CALCULATE MARKER POSITION FROM RANGE VALUE\n        var percentage = (maxValue - minValue) / 100;\n        percentage = (val - minValue) / percentage;\n        var pos = maxRightPos / 100 * percentage;\n        console.log(\"pos:\", pos);\n        return pos;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Range_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        // onDragEnter={(e) => dragEnter(e)}\n        ref: rangeBar,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                draggable: \"true\",\n                ref: firstMarker,\n                onDragStart: function(e) {\n                    return dragStart(e, 1);\n                },\n                onDragEnd: function(e) {\n                    return dragEnd(e, 1);\n                },\n                className: (_Range_module_css__WEBPACK_IMPORTED_MODULE_2___default().firstMarker),\n                style: {\n                    left: marker1Pos + \"px\"\n                },\n                children: \" \"\n            }, void 0, false, {\n                fileName: \"C:\\\\inetpub\\\\wwwroot\\\\range-reactjs\\\\components\\\\range\\\\Range.tsx\",\n                lineNumber: 96,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                draggable: \"true\",\n                ref: secondMarker,\n                onDragStart: function(e) {\n                    return dragStart(e, 2);\n                },\n                onDragEnd: function(e) {\n                    return dragEnd(e, 2);\n                },\n                className: (_Range_module_css__WEBPACK_IMPORTED_MODULE_2___default().secondMarker),\n                style: {\n                    left: marker2Pos + \"px\"\n                },\n                children: \" \"\n            }, void 0, false, {\n                fileName: \"C:\\\\inetpub\\\\wwwroot\\\\range-reactjs\\\\components\\\\range\\\\Range.tsx\",\n                lineNumber: 104,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\inetpub\\\\wwwroot\\\\range-reactjs\\\\components\\\\range\\\\Range.tsx\",\n        lineNumber: 92,\n        columnNumber: 9\n    }, _this);\n};\n_s(Range, \"N7AbMTJ6mp9FqBBNdLXXqB35p3M=\");\n_c = Range;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Range);\nvar _c;\n$RefreshReg$(_c, \"Range\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRTdDLHVFQUFtQjtnQkFDOUJvRCxLQUFLLEVBQUU7b0JBQUV6QixJQUFJLEVBQUVULFVBQVUsR0FBRyxJQUFJO2lCQUFFOzBCQUNyQyxHQUFDOzs7OztxQkFBTTs7Ozs7O2FBQ04sQ0FDUjtDQUNMO0dBNUdLakIsS0FBSztBQUFMQSxLQUFBQSxLQUFLO0FBOEdYLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yYW5nZS9SYW5nZS50c3g/NDY2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9SYW5nZS5tb2R1bGUuY3NzXCJcbmltcG9ydCB7IGNvb3Jkc1JhbmdlLCByYW5nZVByb3BzIH0gZnJvbSAndXRpbGl0eS90eXBlcyc7XG5cblxuY29uc3QgUmFuZ2UgPSAoe21pblZhbHVlLCBtYXhWYWx1ZSwgbWluVmFsdWVJbnB1dCwgbWF4VmFsdWVJbnB1dCwgdXBkYXRlTWluVmFsdWUsIHVwZGF0ZU1heFZhbHVlfTogcmFuZ2VQcm9wcykgPT4ge1xuICAgIGNvbnN0IGZpcnN0TWFya2VyOmFueSA9IHVzZVJlZigpO1xuICAgIGNvbnN0IHNlY29uZE1hcmtlcjphbnkgPSB1c2VSZWYoKTtcbiAgICBjb25zdCByYW5nZUJhcjphbnkgPSB1c2VSZWYoKTtcbiAgICBjb25zdCBtYXJrZXJTaXplID0gMTQ7XG4gICAgY29uc3QgYmFyTGVuZ3RoID0gNDAwO1xuICAgIGNvbnN0IG1heFJpZ2h0UG9zID0gYmFyTGVuZ3RoLW1hcmtlclNpemU7XG4gICAgY29uc3QgW2Nvb3Jkcywgc2V0Q29vcmRzXSA9IHVzZVN0YXRlPGNvb3Jkc1JhbmdlPigpO1xuICAgIGNvbnN0IFttYXJrZXIxUG9zLCBzZXRNYXJrZXIxUG9zXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFttYXJrZXIyUG9zLCBzZXRNYXJrZXIyUG9zXSA9IHVzZVN0YXRlKDApO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYoY29vcmRzKXtcbiAgICAgICAgICAgIC8vVVBEQVRJTkcgUkFOR0UgQkFSIENPT1JEU1xuICAgICAgICAgICAgbGV0IG1pblBvcyA9IGdldFBvc2l0aW9uRnJvbVZhbHVlKG1pblZhbHVlSW5wdXQpO1xuICAgICAgICAgICAgbGV0IG1heFBvcyA9IGdldFBvc2l0aW9uRnJvbVZhbHVlKG1heFZhbHVlSW5wdXQpO1xuICAgICAgICAgICAgc2V0TWFya2VyMVBvcyhtaW5Qb3MpO1xuICAgICAgICAgICAgc2V0TWFya2VyMlBvcyhtYXhQb3MpO1xuICAgICAgICB9XG4gICAgfSwgW21pblZhbHVlSW5wdXQsbWF4VmFsdWVJbnB1dF0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy9TRVRUSU5HIFJBTkdFIEJBUiBDT09SRFMgRk9SIFRIRSBGSVJTVCBUSU1FXG4gICAgICAgIGxldCBiYXIgPSByYW5nZUJhciEuY3VycmVudCEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIC8vc2V0Q29vcmRzKHtiYXJMZWZ0OmJhci5sZWZ0LGJhclJpZ2h0OmJhci5yaWdodCxtaW5QZXJjZW50YWdlOm1pblBlcmNlbnRhZ2UsbWF4UGVyY2VudGFnZTptYXhQZXJjZW50YWdlfSk7XG4gICAgICAgIHNldENvb3Jkcyh7YmFyTGVmdDpiYXIubGVmdCxiYXJSaWdodDpiYXIucmlnaHR9KTtcbiAgICAgICAgbGV0IG1pblBvcyA9IGdldFBvc2l0aW9uRnJvbVZhbHVlKG1pblZhbHVlKTtcbiAgICAgICAgbGV0IG1heFBvcyA9IGdldFBvc2l0aW9uRnJvbVZhbHVlKG1heFZhbHVlKTtcbiAgICAgICAgc2V0TWFya2VyMVBvcyhtaW5Qb3MpO1xuICAgICAgICBzZXRNYXJrZXIyUG9zKG1heFBvcyk7XG5cbiAgICB9LCBbbWluVmFsdWUsbWF4VmFsdWVdKTtcblxuXG4gICAgY29uc3QgZHJhZ1N0YXJ0ID0gKGV2ZW50OiBSZWFjdC5EcmFnRXZlbnQ8SFRNTERpdkVsZW1lbnQ+LG1hcmtlcklkOm51bWJlcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIjEpIGNsaWVudFg6XCIsIGV2ZW50LmNsaWVudFgpO1xuICAgICAgIC8vIGZpcnN0TWFya2VyLmN1cnJlbnQuY2xhc3NMaXN0LmFkZCgnbWFya2VySG92ZXInKTtcbiAgICB9XG5cbiAgICBjb25zdCBkcmFnRW5kID0gKGV2ZW50OiBSZWFjdC5EcmFnRXZlbnQ8SFRNTERpdkVsZW1lbnQ+LG1hcmtlcklkOm51bWJlcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNvb3Jkcy5iYXJMZWZ0OlwiLCBjb29yZHMhLmJhckxlZnQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIjIpIGNsaWVudFggOlwiLCBldmVudC5jbGllbnRYKTtcbiAgICAgICAgLy8gcmFuZ2VCYXIuY3VycmVudC5zdHlsZS5jdXJzb3IgPSAnZ3JhYic7XG5cbiAgICAgICAgbGV0IG5ld1BvcyA9IGV2ZW50LmNsaWVudFggLSBjb29yZHMhLmJhckxlZnQ7XG4gICAgICAgIGlmKG5ld1BvcyA+PSBtYXhSaWdodFBvcylcbiAgICAgICAgICAgIG5ld1BvcyA9IG1heFJpZ2h0UG9zOyBcbiAgICAgICAgaWYobmV3UG9zIDwgMClcbiAgICAgICAgICAgIG5ld1BvcyA9IDA7ICAgICAgICAgICAgIFxuXG4gICAgICAgIGlmKG1hcmtlcklkID09IDEpe1xuICAgICAgICAgICAgaWYobmV3UG9zID49IG1hcmtlcjJQb3MpXG4gICAgICAgICAgICAgICAgbmV3UG9zID0gbWFya2VyMlBvcy1tYXJrZXJTaXplOyBcbiAgICAgICAgICAgIGxldCBwZXJjZW50YWdlID0gZ2V0UmFuZ2VWYWx1ZShuZXdQb3MpO1xuICAgICAgICAgICAgZmlyc3RNYXJrZXIhLmN1cnJlbnQhLmNsYXNzTGlzdCEucmVtb3ZlKCdtYXJrZXJIb3ZlcicpO1xuICAgICAgICAgICAgdXBkYXRlTWluVmFsdWUocGVyY2VudGFnZSk7XG4gICAgICAgICAgICBzZXRNYXJrZXIxUG9zKG5ld1Bvcyk7XG4gICAgICAgIH0gIFxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgaWYobmV3UG9zIDw9IG1hcmtlcjFQb3MpXG4gICAgICAgICAgICAgICAgbmV3UG9zID0gbWFya2VyMVBvcyttYXJrZXJTaXplOyBcbiAgICAgICAgICAgIGxldCBwZXJjZW50YWdlID0gZ2V0UmFuZ2VWYWx1ZShuZXdQb3MpO1xuICAgICAgICAgICAgc2Vjb25kTWFya2VyIS5jdXJyZW50IS5jbGFzc0xpc3QhLnJlbW92ZSgnbWFya2VySG92ZXInKTtcbiAgICAgICAgICAgIHVwZGF0ZU1heFZhbHVlKHBlcmNlbnRhZ2UpO1xuICAgICAgICAgICAgc2V0TWFya2VyMlBvcyhuZXdQb3MpO1xuICAgICAgICB9ICBcblxuICAgIH07XG5cbiAgICBjb25zdCBnZXRSYW5nZVZhbHVlID0gKHBvczpudW1iZXIpID0+IHtcbiAgICAgICAgLy9DQUxDVUxBVEUgUkFOR0UgVkFMVUUgRlJPTSBNQVJLRVIgUE9TSVRJT05cbiAgICAgICAgbGV0IHBlcmNlbnRhZ2UgPSBtYXhSaWdodFBvcy8xMDA7XG4gICAgICAgIHBlcmNlbnRhZ2UgPSBwb3MgLyBwZXJjZW50YWdlO1xuICAgICAgICByZXR1cm4gcGVyY2VudGFnZTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0UG9zaXRpb25Gcm9tVmFsdWUgPSAodmFsOm51bWJlcikgPT4ge1xuICAgICAgICAvL0NBTENVTEFURSBNQVJLRVIgUE9TSVRJT04gRlJPTSBSQU5HRSBWQUxVRVxuICAgICAgICBsZXQgcGVyY2VudGFnZSA9IChtYXhWYWx1ZS1taW5WYWx1ZSkgLyAxMDA7XG4gICAgICAgIHBlcmNlbnRhZ2UgPSAodmFsIC0gbWluVmFsdWUpIC8gcGVyY2VudGFnZTtcbiAgICAgICAgbGV0IHBvcyA9IChtYXhSaWdodFBvcyAvIDEwMCkgKiBwZXJjZW50YWdlOyBcbiAgICAgICAgY29uc29sZS5sb2coXCJwb3M6XCIscG9zKTtcbiAgICAgICAgcmV0dXJuIHBvcztcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9XG4gICAgICAgICAgICAvLyBvbkRyYWdFbnRlcj17KGUpID0+IGRyYWdFbnRlcihlKX1cbiAgICAgICAgICAgIHJlZj17cmFuZ2VCYXJ9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgZHJhZ2dhYmxlPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgcmVmPXtmaXJzdE1hcmtlcn1cbiAgICAgICAgICAgICAgICBvbkRyYWdTdGFydD17KGUpID0+IGRyYWdTdGFydChlLDEpfSBcbiAgICAgICAgICAgICAgICBvbkRyYWdFbmQ9eyhlKSA9PiBkcmFnRW5kKGUsMSl9IFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmZpcnN0TWFya2VyfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGxlZnQ6IG1hcmtlcjFQb3MgKyAncHgnIH19XG4gICAgICAgICAgICA+IDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgICBkcmFnZ2FibGU9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICByZWY9e3NlY29uZE1hcmtlcn1cbiAgICAgICAgICAgICAgICBvbkRyYWdTdGFydD17KGUpID0+IGRyYWdTdGFydChlLDIpfSBcbiAgICAgICAgICAgICAgICBvbkRyYWdFbmQ9eyhlKSA9PiBkcmFnRW5kKGUsMil9IFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNlY29uZE1hcmtlcn1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBsZWZ0OiBtYXJrZXIyUG9zICsgJ3B4JyB9fVxuICAgICAgICAgICAgPiA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJhbmdlOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiUmFuZ2UiLCJtaW5WYWx1ZSIsIm1heFZhbHVlIiwibWluVmFsdWVJbnB1dCIsIm1heFZhbHVlSW5wdXQiLCJ1cGRhdGVNaW5WYWx1ZSIsInVwZGF0ZU1heFZhbHVlIiwiZmlyc3RNYXJrZXIiLCJzZWNvbmRNYXJrZXIiLCJyYW5nZUJhciIsIm1hcmtlclNpemUiLCJiYXJMZW5ndGgiLCJtYXhSaWdodFBvcyIsImNvb3JkcyIsInNldENvb3JkcyIsIm1hcmtlcjFQb3MiLCJzZXRNYXJrZXIxUG9zIiwibWFya2VyMlBvcyIsInNldE1hcmtlcjJQb3MiLCJtaW5Qb3MiLCJnZXRQb3NpdGlvbkZyb21WYWx1ZSIsIm1heFBvcyIsImJhciIsImN1cnJlbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJiYXJMZWZ0IiwibGVmdCIsImJhclJpZ2h0IiwicmlnaHQiLCJkcmFnU3RhcnQiLCJldmVudCIsIm1hcmtlcklkIiwiY29uc29sZSIsImxvZyIsImNsaWVudFgiLCJkcmFnRW5kIiwibmV3UG9zIiwicGVyY2VudGFnZSIsImdldFJhbmdlVmFsdWUiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJwb3MiLCJ2YWwiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJyZWYiLCJkcmFnZ2FibGUiLCJvbkRyYWdTdGFydCIsImUiLCJvbkRyYWdFbmQiLCJzdHlsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/range/Range.tsx\n");

/***/ })

});