"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/tynadmin/page",{

/***/ "(app-pages-browser)/./src/app/components/SemiCircularGauge.tsx":
/*!**************************************************!*\
  !*** ./src/app/components/SemiCircularGauge.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chartjs-2 */ \"(app-pages-browser)/./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ \"(app-pages-browser)/./node_modules/chart.js/dist/chart.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_2__.ArcElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_2__.Legend, chart_js__WEBPACK_IMPORTED_MODULE_2__.Title);\nconst SemiCircularGauge = (param)=>{\n    let { endpoint, labels, backgroundColors, hoverBackgroundColors, size = 300, cutoutPercentage = \"70%\", statusKeys } = param;\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                var _result_find, _result_find1;\n                const response = await fetch(endpoint);\n                const result = await response.json();\n                const accepted = ((_result_find = result.find((item)=>{\n                    var _item_statusKeys_acceptedKey, _item_statusKeys_acceptedKey1;\n                    return ((_item_statusKeys_acceptedKey = item[statusKeys.acceptedKey]) === null || _item_statusKeys_acceptedKey === void 0 ? void 0 : _item_statusKeys_acceptedKey.toLowerCase()) === \"accepted\" || ((_item_statusKeys_acceptedKey1 = item[statusKeys.acceptedKey]) === null || _item_statusKeys_acceptedKey1 === void 0 ? void 0 : _item_statusKeys_acceptedKey1.toLowerCase()) === \"active\";\n                })) === null || _result_find === void 0 ? void 0 : _result_find.count) || 0;\n                const received = ((_result_find1 = result.find((item)=>{\n                    var _item_statusKeys_receivedKey, _item_statusKeys_receivedKey1;\n                    return ((_item_statusKeys_receivedKey = item[statusKeys.receivedKey]) === null || _item_statusKeys_receivedKey === void 0 ? void 0 : _item_statusKeys_receivedKey.toLowerCase()) === \"received\" || ((_item_statusKeys_receivedKey1 = item[statusKeys.receivedKey]) === null || _item_statusKeys_receivedKey1 === void 0 ? void 0 : _item_statusKeys_receivedKey1.toLowerCase()) === \"inactive\";\n                })) === null || _result_find1 === void 0 ? void 0 : _result_find1.count) || 0;\n                setData({\n                    accepted,\n                    received\n                });\n            } catch (error) {\n                console.error(\"Error fetching data:\", error);\n            }\n        };\n        fetchData();\n    }, [\n        endpoint,\n        statusKeys\n    ]);\n    const chartData = {\n        labels,\n        datasets: [\n            {\n                label: \"\",\n                data: data ? [\n                    data.accepted,\n                    data.received\n                ] : [\n                    0,\n                    0\n                ],\n                backgroundColor: backgroundColors,\n                hoverBackgroundColor: hoverBackgroundColors,\n                borderWidth: 0,\n                cutout: cutoutPercentage,\n                rotation: 270,\n                circumference: 180\n            }\n        ]\n    };\n    const options = {\n        plugins: {\n            legend: {\n                display: false,\n                position: \"right\",\n                labels: {\n                    usePointStyle: true\n                }\n            },\n            tooltip: {\n                enabled: true\n            },\n            datalabels: {\n                color: \"#f1f3f5\",\n                borderRadius: 5,\n                padding: {\n                    top: 6,\n                    right: 6,\n                    bottom: 6,\n                    left: 6\n                },\n                font: {\n                    weight: \"bold\",\n                    size: 12\n                },\n                formatter: (value)=>value,\n                anchor: \"center\",\n                align: \"center\"\n            }\n        },\n        maintainAspectRatio: false,\n        responsive: true,\n        layout: {\n            padding: {\n                bottom: 10\n            }\n        },\n        cutout: cutoutPercentage\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative\",\n                style: {\n                    width: \"\".concat(size, \"px\"),\n                    height: \"\".concat(size, \"px\")\n                },\n                children: data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Doughnut, {\n                    data: chartData,\n                    options: options\n                }, void 0, false, {\n                    fileName: \"A:\\\\TYN Dashboard\\\\Frontend\\\\src\\\\app\\\\components\\\\SemiCircularGauge.tsx\",\n                    lineNumber: 117,\n                    columnNumber: 11\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Loading...\"\n                }, void 0, false, {\n                    fileName: \"A:\\\\TYN Dashboard\\\\Frontend\\\\src\\\\app\\\\components\\\\SemiCircularGauge.tsx\",\n                    lineNumber: 119,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"A:\\\\TYN Dashboard\\\\Frontend\\\\src\\\\app\\\\components\\\\SemiCircularGauge.tsx\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-around w-full mt-4 text-sm font-semibold text-gray-600\",\n                children: labels.map((label, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center space-x-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"w-3 h-3 rounded-full\",\n                                style: {\n                                    backgroundColor: backgroundColors[index]\n                                }\n                            }, void 0, false, {\n                                fileName: \"A:\\\\TYN Dashboard\\\\Frontend\\\\src\\\\app\\\\components\\\\SemiCircularGauge.tsx\",\n                                lineNumber: 125,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: label\n                            }, void 0, false, {\n                                fileName: \"A:\\\\TYN Dashboard\\\\Frontend\\\\src\\\\app\\\\components\\\\SemiCircularGauge.tsx\",\n                                lineNumber: 129,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"A:\\\\TYN Dashboard\\\\Frontend\\\\src\\\\app\\\\components\\\\SemiCircularGauge.tsx\",\n                        lineNumber: 124,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"A:\\\\TYN Dashboard\\\\Frontend\\\\src\\\\app\\\\components\\\\SemiCircularGauge.tsx\",\n                lineNumber: 122,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"A:\\\\TYN Dashboard\\\\Frontend\\\\src\\\\app\\\\components\\\\SemiCircularGauge.tsx\",\n        lineNumber: 114,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SemiCircularGauge, \"fQZRxy/+nAZ7NLS1X4dVhrlp8Go=\");\n_c = SemiCircularGauge;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SemiCircularGauge);\nvar _c;\n$RefreshReg$(_c, \"SemiCircularGauge\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9TZW1pQ2lyY3VsYXJHYXVnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBbUQ7QUFDUjtBQU96QjtBQUVsQkssMkNBQU9BLENBQUNLLFFBQVEsQ0FBQ0osZ0RBQVVBLEVBQUVDLDZDQUFPQSxFQUFFQyw0Q0FBTUEsRUFBRUMsMkNBQUtBO0FBWW5ELE1BQU1FLG9CQUFzRDtRQUFDLEVBQzNEQyxRQUFRLEVBQ1JDLE1BQU0sRUFDTkMsZ0JBQWdCLEVBQ2hCQyxxQkFBcUIsRUFDckJDLE9BQU8sR0FBRyxFQUNWQyxtQkFBbUIsS0FBSyxFQUN4QkMsVUFBVSxFQUNYOztJQUNDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHbEIsK0NBQVFBLENBQW1EO0lBRW5GRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1vQixZQUFZO1lBQ2hCLElBQUk7b0JBSWVDLGNBSUFBO2dCQVBqQixNQUFNQyxXQUFXLE1BQU1DLE1BQU1aO2dCQUM3QixNQUFNVSxTQUFTLE1BQU1DLFNBQVNFLElBQUk7Z0JBRWxDLE1BQU1DLFdBQVdKLEVBQUFBLGVBQUFBLE9BQU9LLElBQUksQ0FDMUIsQ0FBQ0M7d0JBQWNBLDhCQUE4REE7MkJBQTlEQSxFQUFBQSwrQkFBQUEsSUFBSSxDQUFDVixXQUFXVyxXQUFXLENBQUMsY0FBNUJELG1EQUFBQSw2QkFBOEJFLFdBQVcsUUFBTyxjQUFjRixFQUFBQSxnQ0FBQUEsSUFBSSxDQUFDVixXQUFXVyxXQUFXLENBQUMsY0FBNUJELG9EQUFBQSw4QkFBOEJFLFdBQVcsUUFBTztnQ0FEOUdSLG1DQUFBQSxhQUVkUyxLQUFLLEtBQUk7Z0JBRVosTUFBTUMsV0FBV1YsRUFBQUEsZ0JBQUFBLE9BQU9LLElBQUksQ0FDMUIsQ0FBQ0M7d0JBQWNBLDhCQUE4REE7MkJBQTlEQSxFQUFBQSwrQkFBQUEsSUFBSSxDQUFDVixXQUFXZSxXQUFXLENBQUMsY0FBNUJMLG1EQUFBQSw2QkFBOEJFLFdBQVcsUUFBTyxjQUFjRixFQUFBQSxnQ0FBQUEsSUFBSSxDQUFDVixXQUFXZSxXQUFXLENBQUMsY0FBNUJMLG9EQUFBQSw4QkFBOEJFLFdBQVcsUUFBTztnQ0FEOUdSLG9DQUFBQSxjQUVkUyxLQUFLLEtBQUk7Z0JBRVpYLFFBQVE7b0JBQUVNO29CQUFXTTtnQkFBVTtZQUNqQyxFQUFFLE9BQU9FLE9BQU87Z0JBQ2RDLFFBQVFELEtBQUssQ0FBQyx3QkFBd0JBO1lBQ3hDO1FBQ0Y7UUFFQWI7SUFDRixHQUFHO1FBQUNUO1FBQVVNO0tBQVc7SUFFekIsTUFBTWtCLFlBQVk7UUFDaEJ2QjtRQUNBd0IsVUFBVTtZQUNSO2dCQUNFQyxPQUFPO2dCQUNQbkIsTUFBTUEsT0FBTztvQkFBQ0EsS0FBS08sUUFBUTtvQkFBR1AsS0FBS2EsUUFBUTtpQkFBQyxHQUFHO29CQUFDO29CQUFHO2lCQUFFO2dCQUNyRE8saUJBQWlCekI7Z0JBQ2pCMEIsc0JBQXNCekI7Z0JBQ3RCMEIsYUFBYTtnQkFDYkMsUUFBUXpCO2dCQUNSMEIsVUFBVTtnQkFDVkMsZUFBZTtZQUNqQjtTQUNEO0lBQ0g7SUFFQSxNQUFNQyxVQUFVO1FBQ2RDLFNBQVM7WUFDUEMsUUFBUTtnQkFDTkMsU0FBUztnQkFDVEMsVUFBVTtnQkFDVnBDLFFBQVE7b0JBQ05xQyxlQUFlO2dCQUNqQjtZQUNGO1lBQ0FDLFNBQVM7Z0JBQ1BDLFNBQVM7WUFDWDtZQUNBQyxZQUFZO2dCQUNWQyxPQUFPO2dCQUNQQyxjQUFjO2dCQUNkQyxTQUFTO29CQUNQQyxLQUFLO29CQUNMQyxPQUFPO29CQUNQQyxRQUFRO29CQUNSQyxNQUFNO2dCQUNSO2dCQUNBQyxNQUFNO29CQUNKQyxRQUFRO29CQUNSOUMsTUFBTTtnQkFDUjtnQkFDQStDLFdBQVcsQ0FBQ0MsUUFBa0JBO2dCQUM5QkMsUUFBUTtnQkFDUkMsT0FBTztZQUNUO1FBQ0Y7UUFDQUMscUJBQXFCO1FBQ3JCQyxZQUFZO1FBQ1pDLFFBQVE7WUFDTmIsU0FBUztnQkFDUEcsUUFBUTtZQUNWO1FBQ0Y7UUFDQWpCLFFBQVF6QjtJQUNWO0lBRUEscUJBQ0UsOERBQUNxRDtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7Z0JBQVdDLE9BQU87b0JBQUVDLE9BQU8sR0FBUSxPQUFMekQsTUFBSztvQkFBSzBELFFBQVEsR0FBUSxPQUFMMUQsTUFBSztnQkFBSTswQkFDeEVHLHFCQUNDLDhEQUFDaEIscURBQVFBO29CQUFDZ0IsTUFBTWlCO29CQUFXUyxTQUFTQTs7Ozs7OENBRXBDLDhEQUFDOEI7OEJBQUU7Ozs7Ozs7Ozs7OzBCQUdQLDhEQUFDTDtnQkFBSUMsV0FBVTswQkFDWjFELE9BQU8rRCxHQUFHLENBQUMsQ0FBQ3RDLE9BQU91QyxzQkFDbEIsOERBQUNQO3dCQUFnQkMsV0FBVTs7MENBQ3pCLDhEQUFDTztnQ0FDQ1AsV0FBVTtnQ0FDVkMsT0FBTztvQ0FBRWpDLGlCQUFpQnpCLGdCQUFnQixDQUFDK0QsTUFBTTtnQ0FBQzs7Ozs7OzBDQUVwRCw4REFBQ0M7MENBQU14Qzs7Ozs7Ozt1QkFMQ3VDOzs7Ozs7Ozs7Ozs7Ozs7O0FBV3BCO0dBaEhNbEU7S0FBQUE7QUFrSE4sK0RBQWVBLGlCQUFpQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvU2VtaUNpcmN1bGFyR2F1Z2UudHN4PzdhZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IERvdWdobnV0IH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJztcclxuaW1wb3J0IHtcclxuICBDaGFydCBhcyBDaGFydEpTLFxyXG4gIEFyY0VsZW1lbnQsXHJcbiAgVG9vbHRpcCxcclxuICBMZWdlbmQsXHJcbiAgVGl0bGUsXHJcbn0gZnJvbSAnY2hhcnQuanMnO1xyXG5cclxuQ2hhcnRKUy5yZWdpc3RlcihBcmNFbGVtZW50LCBUb29sdGlwLCBMZWdlbmQsIFRpdGxlKTtcclxuXHJcbnR5cGUgU2VtaUNpcmN1bGFyR2F1Z2VQcm9wcyA9IHtcclxuICBlbmRwb2ludDogc3RyaW5nO1xyXG4gIGxhYmVsczogc3RyaW5nW107XHJcbiAgYmFja2dyb3VuZENvbG9yczogc3RyaW5nW107XHJcbiAgaG92ZXJCYWNrZ3JvdW5kQ29sb3JzOiBzdHJpbmdbXTtcclxuICBzaXplPzogbnVtYmVyO1xyXG4gIGN1dG91dFBlcmNlbnRhZ2U/OiBzdHJpbmc7XHJcbiAgc3RhdHVzS2V5czogeyByZWNlaXZlZEtleTogc3RyaW5nOyBhY2NlcHRlZEtleTogc3RyaW5nIH07XHJcbn07XHJcblxyXG5jb25zdCBTZW1pQ2lyY3VsYXJHYXVnZTogUmVhY3QuRkM8U2VtaUNpcmN1bGFyR2F1Z2VQcm9wcz4gPSAoe1xyXG4gIGVuZHBvaW50LFxyXG4gIGxhYmVscyxcclxuICBiYWNrZ3JvdW5kQ29sb3JzLFxyXG4gIGhvdmVyQmFja2dyb3VuZENvbG9ycyxcclxuICBzaXplID0gMzAwLFxyXG4gIGN1dG91dFBlcmNlbnRhZ2UgPSAnNzAlJyxcclxuICBzdGF0dXNLZXlzLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8eyBhY2NlcHRlZDogbnVtYmVyICwgcmVjZWl2ZWQ6IG51bWJlcjsgIH0gfCBudWxsPihudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGVuZHBvaW50KTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGFjY2VwdGVkID0gcmVzdWx0LmZpbmQoXHJcbiAgICAgICAgICAoaXRlbTogYW55KSA9PiBpdGVtW3N0YXR1c0tleXMuYWNjZXB0ZWRLZXldPy50b0xvd2VyQ2FzZSgpID09PSAnYWNjZXB0ZWQnIHx8IGl0ZW1bc3RhdHVzS2V5cy5hY2NlcHRlZEtleV0/LnRvTG93ZXJDYXNlKCkgPT09ICdhY3RpdmUnXHJcbiAgICAgICAgKT8uY291bnQgfHwgMDtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCByZWNlaXZlZCA9IHJlc3VsdC5maW5kKFxyXG4gICAgICAgICAgKGl0ZW06IGFueSkgPT4gaXRlbVtzdGF0dXNLZXlzLnJlY2VpdmVkS2V5XT8udG9Mb3dlckNhc2UoKSA9PT0gJ3JlY2VpdmVkJyB8fCBpdGVtW3N0YXR1c0tleXMucmVjZWl2ZWRLZXldPy50b0xvd2VyQ2FzZSgpID09PSAnaW5hY3RpdmUnXHJcbiAgICAgICAgKT8uY291bnQgfHwgMDtcclxuXHJcbiAgICAgICAgc2V0RGF0YSh7IGFjY2VwdGVkICwgcmVjZWl2ZWQgIH0pO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtlbmRwb2ludCwgc3RhdHVzS2V5c10pO1xyXG5cclxuICBjb25zdCBjaGFydERhdGEgPSB7XHJcbiAgICBsYWJlbHMsXHJcbiAgICBkYXRhc2V0czogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWw6ICcnLFxyXG4gICAgICAgIGRhdGE6IGRhdGEgPyBbZGF0YS5hY2NlcHRlZCAsIGRhdGEucmVjZWl2ZWRdIDogWzAsIDBdLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZENvbG9ycyxcclxuICAgICAgICBob3ZlckJhY2tncm91bmRDb2xvcjogaG92ZXJCYWNrZ3JvdW5kQ29sb3JzLFxyXG4gICAgICAgIGJvcmRlcldpZHRoOiAwLFxyXG4gICAgICAgIGN1dG91dDogY3V0b3V0UGVyY2VudGFnZSxcclxuICAgICAgICByb3RhdGlvbjogMjcwLFxyXG4gICAgICAgIGNpcmN1bWZlcmVuY2U6IDE4MCxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIHBsdWdpbnM6IHtcclxuICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgZGlzcGxheTogZmFsc2UsXHJcbiAgICAgICAgcG9zaXRpb246ICdyaWdodCcsXHJcbiAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICB1c2VQb2ludFN0eWxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHRvb2x0aXA6IHtcclxuICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICBkYXRhbGFiZWxzOiB7XHJcbiAgICAgICAgY29sb3I6ICcjZjFmM2Y1JyxcclxuICAgICAgICBib3JkZXJSYWRpdXM6IDUsXHJcbiAgICAgICAgcGFkZGluZzoge1xyXG4gICAgICAgICAgdG9wOiA2LFxyXG4gICAgICAgICAgcmlnaHQ6IDYsXHJcbiAgICAgICAgICBib3R0b206IDYsXHJcbiAgICAgICAgICBsZWZ0OiA2LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZm9udDoge1xyXG4gICAgICAgICAgd2VpZ2h0OiAnYm9sZCcsXHJcbiAgICAgICAgICBzaXplOiAxMixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZvcm1hdHRlcjogKHZhbHVlOiBudW1iZXIpID0+IHZhbHVlLFxyXG4gICAgICAgIGFuY2hvcjogJ2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ246ICdjZW50ZXInLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxyXG4gICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgIGxheW91dDoge1xyXG4gICAgICBwYWRkaW5nOiB7XHJcbiAgICAgICAgYm90dG9tOiAxMCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBjdXRvdXQ6IGN1dG91dFBlcmNlbnRhZ2UsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiIHN0eWxlPXt7IHdpZHRoOiBgJHtzaXplfXB4YCwgaGVpZ2h0OiBgJHtzaXplfXB4YCB9fT5cclxuICAgICAgICB7ZGF0YSA/IChcclxuICAgICAgICAgIDxEb3VnaG51dCBkYXRhPXtjaGFydERhdGF9IG9wdGlvbnM9e29wdGlvbnN9IC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxwPkxvYWRpbmcuLi48L3A+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWFyb3VuZCB3LWZ1bGwgbXQtNCB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTYwMFwiPlxyXG4gICAgICAgIHtsYWJlbHMubWFwKChsYWJlbCwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yXCI+XHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0zIGgtMyByb3VuZGVkLWZ1bGxcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZENvbG9yc1tpbmRleF0gfX1cclxuICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+e2xhYmVsfTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZW1pQ2lyY3VsYXJHYXVnZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJEb3VnaG51dCIsIkNoYXJ0IiwiQ2hhcnRKUyIsIkFyY0VsZW1lbnQiLCJUb29sdGlwIiwiTGVnZW5kIiwiVGl0bGUiLCJyZWdpc3RlciIsIlNlbWlDaXJjdWxhckdhdWdlIiwiZW5kcG9pbnQiLCJsYWJlbHMiLCJiYWNrZ3JvdW5kQ29sb3JzIiwiaG92ZXJCYWNrZ3JvdW5kQ29sb3JzIiwic2l6ZSIsImN1dG91dFBlcmNlbnRhZ2UiLCJzdGF0dXNLZXlzIiwiZGF0YSIsInNldERhdGEiLCJmZXRjaERhdGEiLCJyZXN1bHQiLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsImFjY2VwdGVkIiwiZmluZCIsIml0ZW0iLCJhY2NlcHRlZEtleSIsInRvTG93ZXJDYXNlIiwiY291bnQiLCJyZWNlaXZlZCIsInJlY2VpdmVkS2V5IiwiZXJyb3IiLCJjb25zb2xlIiwiY2hhcnREYXRhIiwiZGF0YXNldHMiLCJsYWJlbCIsImJhY2tncm91bmRDb2xvciIsImhvdmVyQmFja2dyb3VuZENvbG9yIiwiYm9yZGVyV2lkdGgiLCJjdXRvdXQiLCJyb3RhdGlvbiIsImNpcmN1bWZlcmVuY2UiLCJvcHRpb25zIiwicGx1Z2lucyIsImxlZ2VuZCIsImRpc3BsYXkiLCJwb3NpdGlvbiIsInVzZVBvaW50U3R5bGUiLCJ0b29sdGlwIiwiZW5hYmxlZCIsImRhdGFsYWJlbHMiLCJjb2xvciIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJmb250Iiwid2VpZ2h0IiwiZm9ybWF0dGVyIiwidmFsdWUiLCJhbmNob3IiLCJhbGlnbiIsIm1haW50YWluQXNwZWN0UmF0aW8iLCJyZXNwb25zaXZlIiwibGF5b3V0IiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsInAiLCJtYXAiLCJpbmRleCIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/SemiCircularGauge.tsx\n"));

/***/ })

});