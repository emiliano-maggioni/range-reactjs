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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Range_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Range.module.css */ \"./components/range/Range.module.css\");\n/* harmony import */ var _Range_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Range_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar Range = function(param) {\n    var minValue = param.minValue, maxValue = param.maxValue, minValueInput = param.minValueInput, maxValueInput = param.maxValueInput, updateMinValue = param.updateMinValue, updateMaxValue = param.updateMaxValue;\n    _s();\n    var firstMarker = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var secondMarker = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var rangeBar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var markerSize = 14;\n    var barLength = 400;\n    var maxRightPos = barLength - markerSize;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), coords = ref[0], setCoords = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), marker1Pos = ref1[0], setMarker1Pos = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), marker2Pos = ref2[0], setMarker2Pos = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (coords) {\n            //UPDATING RANGE BAR COORDS\n            var minPos = getPositionFromValue(minValueInput);\n            var maxPos = getPositionFromValue(maxValueInput);\n            setMarker1Pos(minPos);\n            setMarker2Pos(maxPos);\n        }\n    }, [\n        minValueInput,\n        maxValueInput\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        //SETTING RANGE BAR COORDS FOR THE FIRST TIME\n        var bar = rangeBar.current.getBoundingClientRect();\n        setCoords({\n            barLeft: bar.left,\n            barRight: bar.right\n        });\n        var minPos = getPositionFromValue(minValue);\n        var maxPos = getPositionFromValue(maxValue);\n        setMarker1Pos(minPos);\n        setMarker2Pos(maxPos);\n    }, [\n        minValue,\n        maxValue\n    ]);\n    var dragStart = function(event, markerId) {\n        console.log(\"1) clientX:\", event.clientX);\n    // firstMarker.current.classList.add('markerHover');\n    // rangeBar.current.style.cursor = 'grab';\n    };\n    var dragEnd = function(event, markerId) {\n        // console.log(\"coords.barLeft:\", coords!.barLeft);\n        // console.log(\"2) clientX :\", event.clientX);\n        var newPos = event.clientX - coords.barLeft;\n        if (newPos >= maxRightPos) newPos = maxRightPos;\n        if (newPos < 0) newPos = 0;\n        if (markerId == 1) {\n            if (newPos >= marker2Pos) newPos = marker2Pos - markerSize;\n            var percentage = getRangeValue(newPos);\n            firstMarker.current.classList.remove(\"markerHover\");\n            updateMinValue(percentage);\n            setMarker1Pos(newPos);\n        } else {\n            if (newPos <= marker1Pos) newPos = marker1Pos + markerSize;\n            var percentage1 = getRangeValue(newPos);\n            secondMarker.current.classList.remove(\"markerHover\");\n            updateMaxValue(percentage1);\n            setMarker2Pos(newPos);\n        }\n    };\n    var getRangeValue = function(pos) {\n        //CALCULATE RANGE VALUE FROM MARKER POSITION\n        var percentage = maxRightPos / 100;\n        percentage = pos / percentage;\n        return percentage;\n    };\n    var getPositionFromValue = function(val) {\n        //CALCULATE MARKER POSITION FROM RANGE VALUE\n        var percentage = (maxValue - minValue) / 100;\n        percentage = (val - minValue) / percentage;\n        var pos = maxRightPos / 100 * percentage;\n        return pos;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Range_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        // onDragEnter={(e) => dragEnter(e)}\n        ref: rangeBar,\n        onDragOver: function(event) {\n            return event.preventDefault();\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                draggable: \"true\",\n                ref: firstMarker,\n                onDragStart: function(e) {\n                    return dragStart(e, 1);\n                },\n                onDragEnd: function(e) {\n                    return dragEnd(e, 1);\n                },\n                className: (_Range_module_css__WEBPACK_IMPORTED_MODULE_2___default().firstMarker),\n                style: {\n                    left: marker1Pos + \"px\"\n                },\n                children: \" \"\n            }, void 0, false, {\n                fileName: \"C:\\\\inetpub\\\\wwwroot\\\\range-reactjs\\\\components\\\\range\\\\Range.tsx\",\n                lineNumber: 95,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                draggable: \"true\",\n                ref: secondMarker,\n                onDragStart: function(e) {\n                    return dragStart(e, 2);\n                },\n                onDragEnd: function(e) {\n                    return dragEnd(e, 2);\n                },\n                className: (_Range_module_css__WEBPACK_IMPORTED_MODULE_2___default().secondMarker),\n                style: {\n                    left: marker2Pos + \"px\"\n                },\n                children: \" \"\n            }, void 0, false, {\n                fileName: \"C:\\\\inetpub\\\\wwwroot\\\\range-reactjs\\\\components\\\\range\\\\Range.tsx\",\n                lineNumber: 103,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\inetpub\\\\wwwroot\\\\range-reactjs\\\\components\\\\range\\\\Range.tsx\",\n        lineNumber: 90,\n        columnNumber: 9\n    }, _this);\n};\n_s(Range, \"N7AbMTJ6mp9FqBBNdLXXqB35p3M=\");\n_c = Range;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Range);\nvar _c;\n$RefreshReg$(_c, \"Range\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1I7Q0FDTDtHQTVHS2pCLEtBQUs7QUFBTEEsS0FBQUEsS0FBSztBQThHWCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcmFuZ2UvUmFuZ2UudHN4PzQ2NjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vUmFuZ2UubW9kdWxlLmNzc1wiXG5pbXBvcnQgeyBjb29yZHNSYW5nZSwgcmFuZ2VQcm9wcyB9IGZyb20gJ3V0aWxpdHkvdHlwZXMnO1xuXG5jb25zdCBSYW5nZSA9ICh7bWluVmFsdWUsIG1heFZhbHVlLCBtaW5WYWx1ZUlucHV0LCBtYXhWYWx1ZUlucHV0LCB1cGRhdGVNaW5WYWx1ZSwgdXBkYXRlTWF4VmFsdWV9OiByYW5nZVByb3BzKSA9PiB7XG4gICAgY29uc3QgZmlyc3RNYXJrZXI6YW55ID0gdXNlUmVmKCk7XG4gICAgY29uc3Qgc2Vjb25kTWFya2VyOmFueSA9IHVzZVJlZigpO1xuICAgIGNvbnN0IHJhbmdlQmFyOmFueSA9IHVzZVJlZigpO1xuICAgIGNvbnN0IG1hcmtlclNpemUgPSAxNDtcbiAgICBjb25zdCBiYXJMZW5ndGggPSA0MDA7XG4gICAgY29uc3QgbWF4UmlnaHRQb3MgPSBiYXJMZW5ndGgtbWFya2VyU2l6ZTtcbiAgICBjb25zdCBbY29vcmRzLCBzZXRDb29yZHNdID0gdXNlU3RhdGU8Y29vcmRzUmFuZ2U+KCk7XG4gICAgY29uc3QgW21hcmtlcjFQb3MsIHNldE1hcmtlcjFQb3NdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW21hcmtlcjJQb3MsIHNldE1hcmtlcjJQb3NdID0gdXNlU3RhdGUoMCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZihjb29yZHMpe1xuICAgICAgICAgICAgLy9VUERBVElORyBSQU5HRSBCQVIgQ09PUkRTXG4gICAgICAgICAgICBsZXQgbWluUG9zID0gZ2V0UG9zaXRpb25Gcm9tVmFsdWUobWluVmFsdWVJbnB1dCk7XG4gICAgICAgICAgICBsZXQgbWF4UG9zID0gZ2V0UG9zaXRpb25Gcm9tVmFsdWUobWF4VmFsdWVJbnB1dCk7XG4gICAgICAgICAgICBzZXRNYXJrZXIxUG9zKG1pblBvcyk7XG4gICAgICAgICAgICBzZXRNYXJrZXIyUG9zKG1heFBvcyk7XG4gICAgICAgIH1cbiAgICB9LCBbbWluVmFsdWVJbnB1dCxtYXhWYWx1ZUlucHV0XSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAvL1NFVFRJTkcgUkFOR0UgQkFSIENPT1JEUyBGT1IgVEhFIEZJUlNUIFRJTUVcbiAgICAgICAgbGV0IGJhciA9IHJhbmdlQmFyIS5jdXJyZW50IS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgc2V0Q29vcmRzKHtiYXJMZWZ0OmJhci5sZWZ0LGJhclJpZ2h0OmJhci5yaWdodH0pO1xuICAgICAgICBsZXQgbWluUG9zID0gZ2V0UG9zaXRpb25Gcm9tVmFsdWUobWluVmFsdWUpO1xuICAgICAgICBsZXQgbWF4UG9zID0gZ2V0UG9zaXRpb25Gcm9tVmFsdWUobWF4VmFsdWUpO1xuICAgICAgICBzZXRNYXJrZXIxUG9zKG1pblBvcyk7XG4gICAgICAgIHNldE1hcmtlcjJQb3MobWF4UG9zKTtcblxuICAgIH0sIFttaW5WYWx1ZSxtYXhWYWx1ZV0pO1xuXG5cbiAgICBjb25zdCBkcmFnU3RhcnQgPSAoZXZlbnQ6IFJlYWN0LkRyYWdFdmVudDxIVE1MRGl2RWxlbWVudD4sbWFya2VySWQ6bnVtYmVyKSA9PiB7XG4gIFxuICAgICAgICBjb25zb2xlLmxvZyhcIjEpIGNsaWVudFg6XCIsIGV2ZW50LmNsaWVudFgpO1xuICAgICAgICAvLyBmaXJzdE1hcmtlci5jdXJyZW50LmNsYXNzTGlzdC5hZGQoJ21hcmtlckhvdmVyJyk7XG4gICAgICAgIC8vIHJhbmdlQmFyLmN1cnJlbnQuc3R5bGUuY3Vyc29yID0gJ2dyYWInO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYWdFbmQgPSAoZXZlbnQ6IFJlYWN0LkRyYWdFdmVudDxIVE1MRGl2RWxlbWVudD4sbWFya2VySWQ6bnVtYmVyKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY29vcmRzLmJhckxlZnQ6XCIsIGNvb3JkcyEuYmFyTGVmdCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiMikgY2xpZW50WCA6XCIsIGV2ZW50LmNsaWVudFgpO1xuXG4gICAgICAgIGxldCBuZXdQb3MgPSBldmVudC5jbGllbnRYIC0gY29vcmRzIS5iYXJMZWZ0O1xuICAgICAgICBpZihuZXdQb3MgPj0gbWF4UmlnaHRQb3MpXG4gICAgICAgICAgICBuZXdQb3MgPSBtYXhSaWdodFBvczsgXG4gICAgICAgIGlmKG5ld1BvcyA8IDApXG4gICAgICAgICAgICBuZXdQb3MgPSAwOyAgICAgICAgICAgICBcblxuICAgICAgICBpZihtYXJrZXJJZCA9PSAxKXtcbiAgICAgICAgICAgIGlmKG5ld1BvcyA+PSBtYXJrZXIyUG9zKVxuICAgICAgICAgICAgICAgIG5ld1BvcyA9IG1hcmtlcjJQb3MtbWFya2VyU2l6ZTsgXG4gICAgICAgICAgICBsZXQgcGVyY2VudGFnZSA9IGdldFJhbmdlVmFsdWUobmV3UG9zKTtcbiAgICAgICAgICAgIGZpcnN0TWFya2VyIS5jdXJyZW50IS5jbGFzc0xpc3QhLnJlbW92ZSgnbWFya2VySG92ZXInKTtcbiAgICAgICAgICAgIHVwZGF0ZU1pblZhbHVlKHBlcmNlbnRhZ2UpO1xuICAgICAgICAgICAgc2V0TWFya2VyMVBvcyhuZXdQb3MpO1xuICAgICAgICB9ICBcbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGlmKG5ld1BvcyA8PSBtYXJrZXIxUG9zKVxuICAgICAgICAgICAgICAgIG5ld1BvcyA9IG1hcmtlcjFQb3MrbWFya2VyU2l6ZTsgXG4gICAgICAgICAgICBsZXQgcGVyY2VudGFnZSA9IGdldFJhbmdlVmFsdWUobmV3UG9zKTtcbiAgICAgICAgICAgIHNlY29uZE1hcmtlciEuY3VycmVudCEuY2xhc3NMaXN0IS5yZW1vdmUoJ21hcmtlckhvdmVyJyk7XG4gICAgICAgICAgICB1cGRhdGVNYXhWYWx1ZShwZXJjZW50YWdlKTtcbiAgICAgICAgICAgIHNldE1hcmtlcjJQb3MobmV3UG9zKTtcbiAgICAgICAgfSAgXG5cbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0UmFuZ2VWYWx1ZSA9IChwb3M6bnVtYmVyKSA9PiB7XG4gICAgICAgIC8vQ0FMQ1VMQVRFIFJBTkdFIFZBTFVFIEZST00gTUFSS0VSIFBPU0lUSU9OXG4gICAgICAgIGxldCBwZXJjZW50YWdlID0gbWF4UmlnaHRQb3MvMTAwO1xuICAgICAgICBwZXJjZW50YWdlID0gcG9zIC8gcGVyY2VudGFnZTtcbiAgICAgICAgcmV0dXJuIHBlcmNlbnRhZ2U7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFBvc2l0aW9uRnJvbVZhbHVlID0gKHZhbDpudW1iZXIpID0+IHtcbiAgICAgICAgLy9DQUxDVUxBVEUgTUFSS0VSIFBPU0lUSU9OIEZST00gUkFOR0UgVkFMVUVcbiAgICAgICAgbGV0IHBlcmNlbnRhZ2UgPSAobWF4VmFsdWUtbWluVmFsdWUpIC8gMTAwO1xuICAgICAgICBwZXJjZW50YWdlID0gKHZhbCAtIG1pblZhbHVlKSAvIHBlcmNlbnRhZ2U7XG4gICAgICAgIGxldCBwb3MgPSAobWF4UmlnaHRQb3MgLyAxMDApICogcGVyY2VudGFnZTsgXG4gICAgICAgIHJldHVybiBwb3M7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfVxuICAgICAgICAgICAgLy8gb25EcmFnRW50ZXI9eyhlKSA9PiBkcmFnRW50ZXIoZSl9XG4gICAgICAgICAgICByZWY9e3JhbmdlQmFyfVxuICAgICAgICAgICAgb25EcmFnT3Zlcj17KGV2ZW50KSA9PiAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpfSBcbiAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgICBkcmFnZ2FibGU9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICByZWY9e2ZpcnN0TWFya2VyfVxuICAgICAgICAgICAgICAgIG9uRHJhZ1N0YXJ0PXsoZSkgPT4gZHJhZ1N0YXJ0KGUsMSl9IFxuICAgICAgICAgICAgICAgIG9uRHJhZ0VuZD17KGUpID0+IGRyYWdFbmQoZSwxKX0gXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZmlyc3RNYXJrZXJ9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbGVmdDogbWFya2VyMVBvcyArICdweCcgfX1cbiAgICAgICAgICAgID4gPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgIGRyYWdnYWJsZT1cInRydWVcIlxuICAgICAgICAgICAgICAgIHJlZj17c2Vjb25kTWFya2VyfVxuICAgICAgICAgICAgICAgIG9uRHJhZ1N0YXJ0PXsoZSkgPT4gZHJhZ1N0YXJ0KGUsMil9IFxuICAgICAgICAgICAgICAgIG9uRHJhZ0VuZD17KGUpID0+IGRyYWdFbmQoZSwyKX0gXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2Vjb25kTWFya2VyfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGxlZnQ6IG1hcmtlcjJQb3MgKyAncHgnIH19XG4gICAgICAgICAgICA+IDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmFuZ2U7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJSYW5nZSIsIm1pblZhbHVlIiwibWF4VmFsdWUiLCJtaW5WYWx1ZUlucHV0IiwibWF4VmFsdWVJbnB1dCIsInVwZGF0ZU1pblZhbHVlIiwidXBkYXRlTWF4VmFsdWUiLCJmaXJzdE1hcmtlciIsInNlY29uZE1hcmtlciIsInJhbmdlQmFyIiwibWFya2VyU2l6ZSIsImJhckxlbmd0aCIsIm1heFJpZ2h0UG9zIiwiY29vcmRzIiwic2V0Q29vcmRzIiwibWFya2VyMVBvcyIsInNldE1hcmtlcjFQb3MiLCJtYXJrZXIyUG9zIiwic2V0TWFya2VyMlBvcyIsIm1pblBvcyIsImdldFBvc2l0aW9uRnJvbVZhbHVlIiwibWF4UG9zIiwiYmFyIiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImJhckxlZnQiLCJsZWZ0IiwiYmFyUmlnaHQiLCJyaWdodCIsImRyYWdTdGFydCIsImV2ZW50IiwibWFya2VySWQiLCJjb25zb2xlIiwibG9nIiwiY2xpZW50WCIsImRyYWdFbmQiLCJuZXdQb3MiLCJwZXJjZW50YWdlIiwiZ2V0UmFuZ2VWYWx1ZSIsImNsYXNzTGlzdCIsInJlbW92ZSIsInBvcyIsInZhbCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInJlZiIsIm9uRHJhZ092ZXIiLCJwcmV2ZW50RGVmYXVsdCIsImRyYWdnYWJsZSIsIm9uRHJhZ1N0YXJ0IiwiZSIsIm9uRHJhZ0VuZCIsInN0eWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/range/Range.tsx\n");

/***/ })

});