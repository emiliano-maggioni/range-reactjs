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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Range_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Range.module.css */ \"./components/range/Range.module.css\");\n/* harmony import */ var _Range_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Range_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar Range = function(param) {\n    var minValue = param.minValue, maxValue = param.maxValue, minValueInput = param.minValueInput, maxValueInput = param.maxValueInput, updateMinValue = param.updateMinValue, updateMaxValue = param.updateMaxValue;\n    _s();\n    var firstMarker = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var secondMarker = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var rangeBar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var markerSize = 14;\n    var barLength = 400;\n    var maxRightPos = barLength - markerSize;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), coords = ref[0], setCoords = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), marker1Pos = ref1[0], setMarker1Pos = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), marker2Pos = ref2[0], setMarker2Pos = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (coords) {\n            //UPDATING RANGE BAR COORDS\n            var minPos = getPositionFromValue(minValueInput);\n            var maxPos = getPositionFromValue(maxValueInput);\n            setMarker1Pos(minPos);\n            setMarker2Pos(maxPos);\n        }\n    }, [\n        minValueInput,\n        maxValueInput\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        //SETTING RANGE BAR COORDS FOR THE FIRST TIME\n        var bar = rangeBar.current.getBoundingClientRect();\n        setCoords({\n            barLeft: bar.left,\n            barRight: bar.right\n        });\n        var minPos = getPositionFromValue(minValue);\n        var maxPos = getPositionFromValue(maxValue);\n        setMarker1Pos(minPos);\n        setMarker2Pos(maxPos);\n    }, [\n        minValue,\n        maxValue\n    ]);\n    var dragStart = function(event, markerId) {\n        console.log(\"1) clientX:\", event.clientX);\n        // firstMarker.current.classList.add('markerHover');\n        // rangeBar.current.style.cursor = 'grab';\n        event.current.style.cursor = \"grab\";\n    };\n    var dragEnd = function(event, markerId) {\n        // console.log(\"coords.barLeft:\", coords!.barLeft);\n        // console.log(\"2) clientX :\", event.clientX);\n        var newPos = event.clientX - coords.barLeft;\n        if (newPos >= maxRightPos) newPos = maxRightPos;\n        if (newPos < 0) newPos = 0;\n        if (markerId == 1) {\n            if (newPos >= marker2Pos) newPos = marker2Pos - markerSize;\n            var percentage = getRangeValue(newPos);\n            firstMarker.current.classList.remove(\"markerHover\");\n            updateMinValue(percentage);\n            setMarker1Pos(newPos);\n        } else {\n            if (newPos <= marker1Pos) newPos = marker1Pos + markerSize;\n            var percentage1 = getRangeValue(newPos);\n            secondMarker.current.classList.remove(\"markerHover\");\n            updateMaxValue(percentage1);\n            setMarker2Pos(newPos);\n        }\n    };\n    var getRangeValue = function(pos) {\n        //CALCULATE RANGE VALUE FROM MARKER POSITION\n        var percentage = maxRightPos / 100;\n        percentage = pos / percentage;\n        return percentage;\n    };\n    var getPositionFromValue = function(val) {\n        //CALCULATE MARKER POSITION FROM RANGE VALUE\n        var percentage = (maxValue - minValue) / 100;\n        percentage = (val - minValue) / percentage;\n        var pos = maxRightPos / 100 * percentage;\n        return pos;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Range_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        // onDragEnter={(e) => dragEnter(e)}\n        ref: rangeBar,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                draggable: \"true\",\n                ref: firstMarker,\n                onDragStart: function(e) {\n                    return dragStart(e, 1);\n                },\n                onDragEnd: function(e) {\n                    return dragEnd(e, 1);\n                },\n                className: (_Range_module_css__WEBPACK_IMPORTED_MODULE_2___default().firstMarker),\n                style: {\n                    left: marker1Pos + \"px\"\n                },\n                children: \" \"\n            }, void 0, false, {\n                fileName: \"C:\\\\inetpub\\\\wwwroot\\\\range-reactjs\\\\components\\\\range\\\\Range.tsx\",\n                lineNumber: 95,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                draggable: \"true\",\n                ref: secondMarker,\n                onDragStart: function(e) {\n                    return dragStart(e, 2);\n                },\n                onDragEnd: function(e) {\n                    return dragEnd(e, 2);\n                },\n                className: (_Range_module_css__WEBPACK_IMPORTED_MODULE_2___default().secondMarker),\n                style: {\n                    left: marker2Pos + \"px\"\n                },\n                children: \" \"\n            }, void 0, false, {\n                fileName: \"C:\\\\inetpub\\\\wwwroot\\\\range-reactjs\\\\components\\\\range\\\\Range.tsx\",\n                lineNumber: 103,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\inetpub\\\\wwwroot\\\\range-reactjs\\\\components\\\\range\\\\Range.tsx\",\n        lineNumber: 91,\n        columnNumber: 9\n    }, _this);\n};\n_s(Range, \"N7AbMTJ6mp9FqBBNdLXXqB35p3M=\");\n_c = Range;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Range);\nvar _c;\n$RefreshReg$(_c, \"Range\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NUdLakIsS0FBSztBQUFMQSxLQUFBQSxLQUFLO0FBOEdYLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yYW5nZS9SYW5nZS50c3g/NDY2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9SYW5nZS5tb2R1bGUuY3NzXCJcbmltcG9ydCB7IGNvb3Jkc1JhbmdlLCByYW5nZVByb3BzIH0gZnJvbSAndXRpbGl0eS90eXBlcyc7XG5cbmNvbnN0IFJhbmdlID0gKHttaW5WYWx1ZSwgbWF4VmFsdWUsIG1pblZhbHVlSW5wdXQsIG1heFZhbHVlSW5wdXQsIHVwZGF0ZU1pblZhbHVlLCB1cGRhdGVNYXhWYWx1ZX06IHJhbmdlUHJvcHMpID0+IHtcbiAgICBjb25zdCBmaXJzdE1hcmtlcjphbnkgPSB1c2VSZWYoKTtcbiAgICBjb25zdCBzZWNvbmRNYXJrZXI6YW55ID0gdXNlUmVmKCk7XG4gICAgY29uc3QgcmFuZ2VCYXI6YW55ID0gdXNlUmVmKCk7XG4gICAgY29uc3QgbWFya2VyU2l6ZSA9IDE0O1xuICAgIGNvbnN0IGJhckxlbmd0aCA9IDQwMDtcbiAgICBjb25zdCBtYXhSaWdodFBvcyA9IGJhckxlbmd0aC1tYXJrZXJTaXplO1xuICAgIGNvbnN0IFtjb29yZHMsIHNldENvb3Jkc10gPSB1c2VTdGF0ZTxjb29yZHNSYW5nZT4oKTtcbiAgICBjb25zdCBbbWFya2VyMVBvcywgc2V0TWFya2VyMVBvc10gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbbWFya2VyMlBvcywgc2V0TWFya2VyMlBvc10gPSB1c2VTdGF0ZSgwKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmKGNvb3Jkcyl7XG4gICAgICAgICAgICAvL1VQREFUSU5HIFJBTkdFIEJBUiBDT09SRFNcbiAgICAgICAgICAgIGxldCBtaW5Qb3MgPSBnZXRQb3NpdGlvbkZyb21WYWx1ZShtaW5WYWx1ZUlucHV0KTtcbiAgICAgICAgICAgIGxldCBtYXhQb3MgPSBnZXRQb3NpdGlvbkZyb21WYWx1ZShtYXhWYWx1ZUlucHV0KTtcbiAgICAgICAgICAgIHNldE1hcmtlcjFQb3MobWluUG9zKTtcbiAgICAgICAgICAgIHNldE1hcmtlcjJQb3MobWF4UG9zKTtcbiAgICAgICAgfVxuICAgIH0sIFttaW5WYWx1ZUlucHV0LG1heFZhbHVlSW5wdXRdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vU0VUVElORyBSQU5HRSBCQVIgQ09PUkRTIEZPUiBUSEUgRklSU1QgVElNRVxuICAgICAgICBsZXQgYmFyID0gcmFuZ2VCYXIhLmN1cnJlbnQhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBzZXRDb29yZHMoe2JhckxlZnQ6YmFyLmxlZnQsYmFyUmlnaHQ6YmFyLnJpZ2h0fSk7XG4gICAgICAgIGxldCBtaW5Qb3MgPSBnZXRQb3NpdGlvbkZyb21WYWx1ZShtaW5WYWx1ZSk7XG4gICAgICAgIGxldCBtYXhQb3MgPSBnZXRQb3NpdGlvbkZyb21WYWx1ZShtYXhWYWx1ZSk7XG4gICAgICAgIHNldE1hcmtlcjFQb3MobWluUG9zKTtcbiAgICAgICAgc2V0TWFya2VyMlBvcyhtYXhQb3MpO1xuXG4gICAgfSwgW21pblZhbHVlLG1heFZhbHVlXSk7XG5cblxuICAgIGNvbnN0IGRyYWdTdGFydCA9IChldmVudDogYW55LG1hcmtlcklkOm51bWJlcikgPT4ge1xuICBcbiAgICAgICAgY29uc29sZS5sb2coXCIxKSBjbGllbnRYOlwiLCBldmVudC5jbGllbnRYKTtcbiAgICAgICAgLy8gZmlyc3RNYXJrZXIuY3VycmVudC5jbGFzc0xpc3QuYWRkKCdtYXJrZXJIb3ZlcicpO1xuICAgICAgICAvLyByYW5nZUJhci5jdXJyZW50LnN0eWxlLmN1cnNvciA9ICdncmFiJztcbiAgICAgICAgZXZlbnQuY3VycmVudC5zdHlsZS5jdXJzb3IgPSAnZ3JhYic7IFxuICAgIH1cblxuICAgIGNvbnN0IGRyYWdFbmQgPSAoZXZlbnQ6IFJlYWN0LkRyYWdFdmVudDxIVE1MRGl2RWxlbWVudD4sbWFya2VySWQ6bnVtYmVyKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY29vcmRzLmJhckxlZnQ6XCIsIGNvb3JkcyEuYmFyTGVmdCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiMikgY2xpZW50WCA6XCIsIGV2ZW50LmNsaWVudFgpO1xuXG4gICAgICAgIGxldCBuZXdQb3MgPSBldmVudC5jbGllbnRYIC0gY29vcmRzIS5iYXJMZWZ0O1xuICAgICAgICBpZihuZXdQb3MgPj0gbWF4UmlnaHRQb3MpXG4gICAgICAgICAgICBuZXdQb3MgPSBtYXhSaWdodFBvczsgXG4gICAgICAgIGlmKG5ld1BvcyA8IDApXG4gICAgICAgICAgICBuZXdQb3MgPSAwOyAgICAgICAgICAgICBcblxuICAgICAgICBpZihtYXJrZXJJZCA9PSAxKXtcbiAgICAgICAgICAgIGlmKG5ld1BvcyA+PSBtYXJrZXIyUG9zKVxuICAgICAgICAgICAgICAgIG5ld1BvcyA9IG1hcmtlcjJQb3MtbWFya2VyU2l6ZTsgXG4gICAgICAgICAgICBsZXQgcGVyY2VudGFnZSA9IGdldFJhbmdlVmFsdWUobmV3UG9zKTtcbiAgICAgICAgICAgIGZpcnN0TWFya2VyIS5jdXJyZW50IS5jbGFzc0xpc3QhLnJlbW92ZSgnbWFya2VySG92ZXInKTtcbiAgICAgICAgICAgIHVwZGF0ZU1pblZhbHVlKHBlcmNlbnRhZ2UpO1xuICAgICAgICAgICAgc2V0TWFya2VyMVBvcyhuZXdQb3MpO1xuICAgICAgICB9ICBcbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGlmKG5ld1BvcyA8PSBtYXJrZXIxUG9zKVxuICAgICAgICAgICAgICAgIG5ld1BvcyA9IG1hcmtlcjFQb3MrbWFya2VyU2l6ZTsgXG4gICAgICAgICAgICBsZXQgcGVyY2VudGFnZSA9IGdldFJhbmdlVmFsdWUobmV3UG9zKTtcbiAgICAgICAgICAgIHNlY29uZE1hcmtlciEuY3VycmVudCEuY2xhc3NMaXN0IS5yZW1vdmUoJ21hcmtlckhvdmVyJyk7XG4gICAgICAgICAgICB1cGRhdGVNYXhWYWx1ZShwZXJjZW50YWdlKTtcbiAgICAgICAgICAgIHNldE1hcmtlcjJQb3MobmV3UG9zKTtcbiAgICAgICAgfSAgXG5cbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0UmFuZ2VWYWx1ZSA9IChwb3M6bnVtYmVyKSA9PiB7XG4gICAgICAgIC8vQ0FMQ1VMQVRFIFJBTkdFIFZBTFVFIEZST00gTUFSS0VSIFBPU0lUSU9OXG4gICAgICAgIGxldCBwZXJjZW50YWdlID0gbWF4UmlnaHRQb3MvMTAwO1xuICAgICAgICBwZXJjZW50YWdlID0gcG9zIC8gcGVyY2VudGFnZTtcbiAgICAgICAgcmV0dXJuIHBlcmNlbnRhZ2U7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFBvc2l0aW9uRnJvbVZhbHVlID0gKHZhbDpudW1iZXIpID0+IHtcbiAgICAgICAgLy9DQUxDVUxBVEUgTUFSS0VSIFBPU0lUSU9OIEZST00gUkFOR0UgVkFMVUVcbiAgICAgICAgbGV0IHBlcmNlbnRhZ2UgPSAobWF4VmFsdWUtbWluVmFsdWUpIC8gMTAwO1xuICAgICAgICBwZXJjZW50YWdlID0gKHZhbCAtIG1pblZhbHVlKSAvIHBlcmNlbnRhZ2U7XG4gICAgICAgIGxldCBwb3MgPSAobWF4UmlnaHRQb3MgLyAxMDApICogcGVyY2VudGFnZTsgXG4gICAgICAgIHJldHVybiBwb3M7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfVxuICAgICAgICAgICAgLy8gb25EcmFnRW50ZXI9eyhlKSA9PiBkcmFnRW50ZXIoZSl9XG4gICAgICAgICAgICByZWY9e3JhbmdlQmFyfVxuICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgIGRyYWdnYWJsZT1cInRydWVcIlxuICAgICAgICAgICAgICAgIHJlZj17Zmlyc3RNYXJrZXJ9XG4gICAgICAgICAgICAgICAgb25EcmFnU3RhcnQ9eyhlKSA9PiBkcmFnU3RhcnQoZSwxKX0gXG4gICAgICAgICAgICAgICAgb25EcmFnRW5kPXsoZSkgPT4gZHJhZ0VuZChlLDEpfSBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5maXJzdE1hcmtlcn1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBsZWZ0OiBtYXJrZXIxUG9zICsgJ3B4JyB9fVxuICAgICAgICAgICAgPiA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgZHJhZ2dhYmxlPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgcmVmPXtzZWNvbmRNYXJrZXJ9XG4gICAgICAgICAgICAgICAgb25EcmFnU3RhcnQ9eyhlKSA9PiBkcmFnU3RhcnQoZSwyKX0gXG4gICAgICAgICAgICAgICAgb25EcmFnRW5kPXsoZSkgPT4gZHJhZ0VuZChlLDIpfSBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zZWNvbmRNYXJrZXJ9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbGVmdDogbWFya2VyMlBvcyArICdweCcgfX1cbiAgICAgICAgICAgID4gPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSYW5nZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsInN0eWxlcyIsIlJhbmdlIiwibWluVmFsdWUiLCJtYXhWYWx1ZSIsIm1pblZhbHVlSW5wdXQiLCJtYXhWYWx1ZUlucHV0IiwidXBkYXRlTWluVmFsdWUiLCJ1cGRhdGVNYXhWYWx1ZSIsImZpcnN0TWFya2VyIiwic2Vjb25kTWFya2VyIiwicmFuZ2VCYXIiLCJtYXJrZXJTaXplIiwiYmFyTGVuZ3RoIiwibWF4UmlnaHRQb3MiLCJjb29yZHMiLCJzZXRDb29yZHMiLCJtYXJrZXIxUG9zIiwic2V0TWFya2VyMVBvcyIsIm1hcmtlcjJQb3MiLCJzZXRNYXJrZXIyUG9zIiwibWluUG9zIiwiZ2V0UG9zaXRpb25Gcm9tVmFsdWUiLCJtYXhQb3MiLCJiYXIiLCJjdXJyZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYmFyTGVmdCIsImxlZnQiLCJiYXJSaWdodCIsInJpZ2h0IiwiZHJhZ1N0YXJ0IiwiZXZlbnQiLCJtYXJrZXJJZCIsImNvbnNvbGUiLCJsb2ciLCJjbGllbnRYIiwic3R5bGUiLCJjdXJzb3IiLCJkcmFnRW5kIiwibmV3UG9zIiwicGVyY2VudGFnZSIsImdldFJhbmdlVmFsdWUiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJwb3MiLCJ2YWwiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJyZWYiLCJkcmFnZ2FibGUiLCJvbkRyYWdTdGFydCIsImUiLCJvbkRyYWdFbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/range/Range.tsx\n");

/***/ })

});