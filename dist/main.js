/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/page-load */ \"./src/js/page-load.js\");\n\r\n\r\nconst pageLoadHeader = new _js_page_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\nconst $content = document.querySelector(\"#content\");\r\n$content.appendChild(pageLoadHeader.content);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/js/builder.js":
/*!***************************!*\
  !*** ./src/js/builder.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Builder)\n/* harmony export */ });\nclass Builder {\r\n  buildElement(tag, attr, children) {\r\n    const el = document.createElement(tag);\r\n    for (var key in attr)\r\n      key === \"textContent\"\r\n        ? (el.textContent = attr[key])\r\n        : key.includes(\"dataset\")\r\n        ? (el.dataset[key.split(\"-\")[1]] = attr[key])\r\n        : el.setAttribute(key, attr[key]);\r\n    if (children) children.forEach((child) => child && el.appendChild(child));\r\n    return el;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/js/builder.js?");

/***/ }),

/***/ "./src/js/page-load.js":
/*!*****************************!*\
  !*** ./src/js/page-load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PageLoad)\n/* harmony export */ });\n/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builder */ \"./src/js/builder.js\");\n\r\n\r\nclass PageLoad extends _builder__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor() {\r\n    super();\r\n    this.content = this.headerCreation();\r\n  }\r\n\r\n  headerCreation() {\r\n    return this.buildElement(\"div\", { class: \"container m-auto pos-rel\" }, [\r\n      this.buildElement(\r\n        \"h1\",\r\n        {\r\n          class: \"w-100 text-center m-0 headline\",\r\n          textContent: \"Veggie Kabob & Grill\",\r\n        },\r\n        []\r\n      ),\r\n      this.buildElement(\r\n        \"p\",\r\n        {\r\n          class: \"pos-abs text-center w-100 sub-headline\",\r\n          textContent:\r\n            \"Healthy and delicious vegetable kabobs along with grain bowls\",\r\n        },\r\n        []\r\n      ),\r\n      this.buildElement(\"nav\", { class: \"p-05r text-center\" }, [\r\n        this.buildElement(\"div\", { class: \"wrapper inline-block\" }, [\r\n          this.buildElement(\"a\", {\r\n            class: \"p-05r fs-1pt25r underline\",\r\n            textContent: \"Home\",\r\n          }),\r\n        ]),\r\n        this.buildElement(\"div\", { class: \"wrapper inline-block\" }, [\r\n          this.buildElement(\"a\", {\r\n            class: \"p-05r fs-1pt25r\",\r\n            textContent: \"Menu\",\r\n          }),\r\n        ]),\r\n        this.buildElement(\"div\", { class: \"wrapper inline-block\" }, [\r\n          this.buildElement(\"a\", {\r\n            class: \"p-05r fs-1pt25r\",\r\n            textContent: \"Contact\",\r\n          }),\r\n        ]),\r\n      ]),\r\n    ]);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/js/page-load.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;