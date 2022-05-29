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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Range_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Range.module.css */ \"./components/range/Range.module.css\");\n/* harmony import */ var _Range_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Range_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar Range = function(param) {\n    var minValue = param.minValue, maxValue = param.maxValue, minValueInput = param.minValueInput, maxValueInput = param.maxValueInput, updateMinValue = param.updateMinValue, updateMaxValue = param.updateMaxValue;\n    _s();\n    var firstMarker = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var secondMarker = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var rangeBar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var markerSize = 14;\n    var barLength = 400;\n    var maxRightPos = barLength - markerSize;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), coords = ref[0], setCoords = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), marker1Pos = ref1[0], setMarker1Pos = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), marker2Pos = ref2[0], setMarker2Pos = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (coords) {\n            //UPDATING RANGE BAR COORDS\n            var minPos = getPositionFromValue(minValueInput);\n            var maxPos = getPositionFromValue(maxValueInput);\n            setMarker1Pos(minPos);\n            setMarker2Pos(maxPos);\n        }\n    }, [\n        minValueInput,\n        maxValueInput\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        //SETTING RANGE BAR COORDS FOR THE FIRST TIME\n        var bar = rangeBar.current.getBoundingClientRect();\n        setCoords({\n            barLeft: bar.left,\n            barRight: bar.right\n        });\n        var minPos = getPositionFromValue(minValue);\n        var maxPos = getPositionFromValue(maxValue);\n        setMarker1Pos(minPos);\n        setMarker2Pos(maxPos);\n    }, [\n        minValue,\n        maxValue\n    ]);\n    var dragStart = function(event, markerId) {\n        console.log(\"2) event :\", event);\n        console.log(\"1) clientX:\", event.clientX);\n        // firstMarker.current.classList.add('markerHover');\n        firstMarker.current.style.cursor = \"grab\";\n    };\n    var dragEnd = function(event, markerId) {\n        // console.log(\"coords.barLeft:\", coords!.barLeft);\n        // console.log(\"2) clientX :\", event.clientX);\n        var newPos = event.clientX - coords.barLeft;\n        if (newPos >= maxRightPos) newPos = maxRightPos;\n        if (newPos < 0) newPos = 0;\n        if (markerId == 1) {\n            if (newPos >= marker2Pos) newPos = marker2Pos - markerSize;\n            var percentage = getRangeValue(newPos);\n            firstMarker.current.classList.remove(\"markerHover\");\n            updateMinValue(percentage);\n            setMarker1Pos(newPos);\n        } else {\n            if (newPos <= marker1Pos) newPos = marker1Pos + markerSize;\n            var percentage1 = getRangeValue(newPos);\n            secondMarker.current.classList.remove(\"markerHover\");\n            updateMaxValue(percentage1);\n            setMarker2Pos(newPos);\n        }\n    };\n    var getRangeValue = function(pos) {\n        //CALCULATE RANGE VALUE FROM MARKER POSITION\n        var percentage = maxRightPos / 100;\n        percentage = pos / percentage;\n        return percentage;\n    };\n    var getPositionFromValue = function(val) {\n        //CALCULATE MARKER POSITION FROM RANGE VALUE\n        var percentage = (maxValue - minValue) / 100;\n        percentage = (val - minValue) / percentage;\n        var pos = maxRightPos / 100 * percentage;\n        return pos;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Range_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        // onDragEnter={(e) => dragEnter(e)}\n        ref: rangeBar,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                draggable: \"true\",\n                ref: firstMarker,\n                onDragStart: function(e) {\n                    return dragStart(e, 1);\n                },\n                onDragEnd: function(e) {\n                    return dragEnd(e, 1);\n                },\n                className: (_Range_module_css__WEBPACK_IMPORTED_MODULE_2___default().firstMarker),\n                style: {\n                    left: marker1Pos + \"px\"\n                },\n                children: \" \"\n            }, void 0, false, {\n                fileName: \"C:\\\\inetpub\\\\wwwroot\\\\range-reactjs\\\\components\\\\range\\\\Range.tsx\",\n                lineNumber: 94,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                draggable: \"true\",\n                ref: secondMarker,\n                onDragStart: function(e) {\n                    return dragStart(e, 2);\n                },\n                onDragEnd: function(e) {\n                    return dragEnd(e, 2);\n                },\n                className: (_Range_module_css__WEBPACK_IMPORTED_MODULE_2___default().secondMarker),\n                style: {\n                    left: marker2Pos + \"px\"\n                },\n                children: \" \"\n            }, void 0, false, {\n                fileName: \"C:\\\\inetpub\\\\wwwroot\\\\range-reactjs\\\\components\\\\range\\\\Range.tsx\",\n                lineNumber: 102,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\inetpub\\\\wwwroot\\\\range-reactjs\\\\components\\\\range\\\\Range.tsx\",\n        lineNumber: 90,\n        columnNumber: 9\n    }, _this);\n};\n_s(Range, \"N7AbMTJ6mp9FqBBNdLXXqB35p3M=\");\n_c = Range;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Range);\nvar _c;\n$RefreshReg$(_c, \"Range\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MEJBQ3JDLEdBQUM7Ozs7O3FCQUFNOzs7Ozs7YUFDTixDQUNSO0NBQ0w7R0EzR0tqQixLQUFLO0FBQUxBLEtBQUFBLEtBQUs7QUE2R1gsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3JhbmdlL1JhbmdlLnRzeD80NjY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1JhbmdlLm1vZHVsZS5jc3NcIlxuaW1wb3J0IHsgY29vcmRzUmFuZ2UsIHJhbmdlUHJvcHMgfSBmcm9tICd1dGlsaXR5L3R5cGVzJztcblxuY29uc3QgUmFuZ2UgPSAoe21pblZhbHVlLCBtYXhWYWx1ZSwgbWluVmFsdWVJbnB1dCwgbWF4VmFsdWVJbnB1dCwgdXBkYXRlTWluVmFsdWUsIHVwZGF0ZU1heFZhbHVlfTogcmFuZ2VQcm9wcykgPT4ge1xuICAgIGNvbnN0IGZpcnN0TWFya2VyOmFueSA9IHVzZVJlZigpO1xuICAgIGNvbnN0IHNlY29uZE1hcmtlcjphbnkgPSB1c2VSZWYoKTtcbiAgICBjb25zdCByYW5nZUJhcjphbnkgPSB1c2VSZWYoKTtcbiAgICBjb25zdCBtYXJrZXJTaXplID0gMTQ7XG4gICAgY29uc3QgYmFyTGVuZ3RoID0gNDAwO1xuICAgIGNvbnN0IG1heFJpZ2h0UG9zID0gYmFyTGVuZ3RoLW1hcmtlclNpemU7XG4gICAgY29uc3QgW2Nvb3Jkcywgc2V0Q29vcmRzXSA9IHVzZVN0YXRlPGNvb3Jkc1JhbmdlPigpO1xuICAgIGNvbnN0IFttYXJrZXIxUG9zLCBzZXRNYXJrZXIxUG9zXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFttYXJrZXIyUG9zLCBzZXRNYXJrZXIyUG9zXSA9IHVzZVN0YXRlKDApO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYoY29vcmRzKXtcbiAgICAgICAgICAgIC8vVVBEQVRJTkcgUkFOR0UgQkFSIENPT1JEU1xuICAgICAgICAgICAgbGV0IG1pblBvcyA9IGdldFBvc2l0aW9uRnJvbVZhbHVlKG1pblZhbHVlSW5wdXQpO1xuICAgICAgICAgICAgbGV0IG1heFBvcyA9IGdldFBvc2l0aW9uRnJvbVZhbHVlKG1heFZhbHVlSW5wdXQpO1xuICAgICAgICAgICAgc2V0TWFya2VyMVBvcyhtaW5Qb3MpO1xuICAgICAgICAgICAgc2V0TWFya2VyMlBvcyhtYXhQb3MpO1xuICAgICAgICB9XG4gICAgfSwgW21pblZhbHVlSW5wdXQsbWF4VmFsdWVJbnB1dF0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy9TRVRUSU5HIFJBTkdFIEJBUiBDT09SRFMgRk9SIFRIRSBGSVJTVCBUSU1FXG4gICAgICAgIGxldCBiYXIgPSByYW5nZUJhciEuY3VycmVudCEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHNldENvb3Jkcyh7YmFyTGVmdDpiYXIubGVmdCxiYXJSaWdodDpiYXIucmlnaHR9KTtcbiAgICAgICAgbGV0IG1pblBvcyA9IGdldFBvc2l0aW9uRnJvbVZhbHVlKG1pblZhbHVlKTtcbiAgICAgICAgbGV0IG1heFBvcyA9IGdldFBvc2l0aW9uRnJvbVZhbHVlKG1heFZhbHVlKTtcbiAgICAgICAgc2V0TWFya2VyMVBvcyhtaW5Qb3MpO1xuICAgICAgICBzZXRNYXJrZXIyUG9zKG1heFBvcyk7XG5cbiAgICB9LCBbbWluVmFsdWUsbWF4VmFsdWVdKTtcblxuXG4gICAgY29uc3QgZHJhZ1N0YXJ0ID0gKGV2ZW50OiBSZWFjdC5EcmFnRXZlbnQ8SFRNTERpdkVsZW1lbnQ+LG1hcmtlcklkOm51bWJlcikgPT4ge1xuICAgICAgICAgY29uc29sZS5sb2coXCIyKSBldmVudCA6XCIsIGV2ZW50KTtcbiAgICAgICAgY29uc29sZS5sb2coXCIxKSBjbGllbnRYOlwiLCBldmVudC5jbGllbnRYKTtcbiAgICAgICAvLyBmaXJzdE1hcmtlci5jdXJyZW50LmNsYXNzTGlzdC5hZGQoJ21hcmtlckhvdmVyJyk7XG4gICAgICAgIGZpcnN0TWFya2VyLmN1cnJlbnQuc3R5bGUuY3Vyc29yID0gJ2dyYWInO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYWdFbmQgPSAoZXZlbnQ6IFJlYWN0LkRyYWdFdmVudDxIVE1MRGl2RWxlbWVudD4sbWFya2VySWQ6bnVtYmVyKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY29vcmRzLmJhckxlZnQ6XCIsIGNvb3JkcyEuYmFyTGVmdCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiMikgY2xpZW50WCA6XCIsIGV2ZW50LmNsaWVudFgpO1xuXG4gICAgICAgIGxldCBuZXdQb3MgPSBldmVudC5jbGllbnRYIC0gY29vcmRzIS5iYXJMZWZ0O1xuICAgICAgICBpZihuZXdQb3MgPj0gbWF4UmlnaHRQb3MpXG4gICAgICAgICAgICBuZXdQb3MgPSBtYXhSaWdodFBvczsgXG4gICAgICAgIGlmKG5ld1BvcyA8IDApXG4gICAgICAgICAgICBuZXdQb3MgPSAwOyAgICAgICAgICAgICBcblxuICAgICAgICBpZihtYXJrZXJJZCA9PSAxKXtcbiAgICAgICAgICAgIGlmKG5ld1BvcyA+PSBtYXJrZXIyUG9zKVxuICAgICAgICAgICAgICAgIG5ld1BvcyA9IG1hcmtlcjJQb3MtbWFya2VyU2l6ZTsgXG4gICAgICAgICAgICBsZXQgcGVyY2VudGFnZSA9IGdldFJhbmdlVmFsdWUobmV3UG9zKTtcbiAgICAgICAgICAgIGZpcnN0TWFya2VyIS5jdXJyZW50IS5jbGFzc0xpc3QhLnJlbW92ZSgnbWFya2VySG92ZXInKTtcbiAgICAgICAgICAgIHVwZGF0ZU1pblZhbHVlKHBlcmNlbnRhZ2UpO1xuICAgICAgICAgICAgc2V0TWFya2VyMVBvcyhuZXdQb3MpO1xuICAgICAgICB9ICBcbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGlmKG5ld1BvcyA8PSBtYXJrZXIxUG9zKVxuICAgICAgICAgICAgICAgIG5ld1BvcyA9IG1hcmtlcjFQb3MrbWFya2VyU2l6ZTsgXG4gICAgICAgICAgICBsZXQgcGVyY2VudGFnZSA9IGdldFJhbmdlVmFsdWUobmV3UG9zKTtcbiAgICAgICAgICAgIHNlY29uZE1hcmtlciEuY3VycmVudCEuY2xhc3NMaXN0IS5yZW1vdmUoJ21hcmtlckhvdmVyJyk7XG4gICAgICAgICAgICB1cGRhdGVNYXhWYWx1ZShwZXJjZW50YWdlKTtcbiAgICAgICAgICAgIHNldE1hcmtlcjJQb3MobmV3UG9zKTtcbiAgICAgICAgfSAgXG5cbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0UmFuZ2VWYWx1ZSA9IChwb3M6bnVtYmVyKSA9PiB7XG4gICAgICAgIC8vQ0FMQ1VMQVRFIFJBTkdFIFZBTFVFIEZST00gTUFSS0VSIFBPU0lUSU9OXG4gICAgICAgIGxldCBwZXJjZW50YWdlID0gbWF4UmlnaHRQb3MvMTAwO1xuICAgICAgICBwZXJjZW50YWdlID0gcG9zIC8gcGVyY2VudGFnZTtcbiAgICAgICAgcmV0dXJuIHBlcmNlbnRhZ2U7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFBvc2l0aW9uRnJvbVZhbHVlID0gKHZhbDpudW1iZXIpID0+IHtcbiAgICAgICAgLy9DQUxDVUxBVEUgTUFSS0VSIFBPU0lUSU9OIEZST00gUkFOR0UgVkFMVUVcbiAgICAgICAgbGV0IHBlcmNlbnRhZ2UgPSAobWF4VmFsdWUtbWluVmFsdWUpIC8gMTAwO1xuICAgICAgICBwZXJjZW50YWdlID0gKHZhbCAtIG1pblZhbHVlKSAvIHBlcmNlbnRhZ2U7XG4gICAgICAgIGxldCBwb3MgPSAobWF4UmlnaHRQb3MgLyAxMDApICogcGVyY2VudGFnZTsgXG4gICAgICAgIHJldHVybiBwb3M7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfVxuICAgICAgICAgICAgLy8gb25EcmFnRW50ZXI9eyhlKSA9PiBkcmFnRW50ZXIoZSl9XG4gICAgICAgICAgICByZWY9e3JhbmdlQmFyfVxuICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgIGRyYWdnYWJsZT1cInRydWVcIlxuICAgICAgICAgICAgICAgIHJlZj17Zmlyc3RNYXJrZXJ9XG4gICAgICAgICAgICAgICAgb25EcmFnU3RhcnQ9eyhlKSA9PiBkcmFnU3RhcnQoZSwxKX0gXG4gICAgICAgICAgICAgICAgb25EcmFnRW5kPXsoZSkgPT4gZHJhZ0VuZChlLDEpfSBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5maXJzdE1hcmtlcn1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBsZWZ0OiBtYXJrZXIxUG9zICsgJ3B4JyB9fVxuICAgICAgICAgICAgPiA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgZHJhZ2dhYmxlPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgcmVmPXtzZWNvbmRNYXJrZXJ9XG4gICAgICAgICAgICAgICAgb25EcmFnU3RhcnQ9eyhlKSA9PiBkcmFnU3RhcnQoZSwyKX0gXG4gICAgICAgICAgICAgICAgb25EcmFnRW5kPXsoZSkgPT4gZHJhZ0VuZChlLDIpfSBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zZWNvbmRNYXJrZXJ9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbGVmdDogbWFya2VyMlBvcyArICdweCcgfX1cbiAgICAgICAgICAgID4gPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSYW5nZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsInN0eWxlcyIsIlJhbmdlIiwibWluVmFsdWUiLCJtYXhWYWx1ZSIsIm1pblZhbHVlSW5wdXQiLCJtYXhWYWx1ZUlucHV0IiwidXBkYXRlTWluVmFsdWUiLCJ1cGRhdGVNYXhWYWx1ZSIsImZpcnN0TWFya2VyIiwic2Vjb25kTWFya2VyIiwicmFuZ2VCYXIiLCJtYXJrZXJTaXplIiwiYmFyTGVuZ3RoIiwibWF4UmlnaHRQb3MiLCJjb29yZHMiLCJzZXRDb29yZHMiLCJtYXJrZXIxUG9zIiwic2V0TWFya2VyMVBvcyIsIm1hcmtlcjJQb3MiLCJzZXRNYXJrZXIyUG9zIiwibWluUG9zIiwiZ2V0UG9zaXRpb25Gcm9tVmFsdWUiLCJtYXhQb3MiLCJiYXIiLCJjdXJyZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYmFyTGVmdCIsImxlZnQiLCJiYXJSaWdodCIsInJpZ2h0IiwiZHJhZ1N0YXJ0IiwiZXZlbnQiLCJtYXJrZXJJZCIsImNvbnNvbGUiLCJsb2ciLCJjbGllbnRYIiwic3R5bGUiLCJjdXJzb3IiLCJkcmFnRW5kIiwibmV3UG9zIiwicGVyY2VudGFnZSIsImdldFJhbmdlVmFsdWUiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJwb3MiLCJ2YWwiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJyZWYiLCJkcmFnZ2FibGUiLCJvbkRyYWdTdGFydCIsImUiLCJvbkRyYWdFbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/range/Range.tsx\n");

/***/ })

});