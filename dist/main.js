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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/page-load */ \"./src/js/page-load.js\");\n/* harmony import */ var _js_pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/pages/home */ \"./src/js/pages/home.js\");\n/* harmony import */ var _js_pages_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/pages/menu */ \"./src/js/pages/menu.js\");\n/* harmony import */ var _js_pages_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/pages/contact */ \"./src/js/pages/contact.js\");\n\r\n\r\n\r\n\r\n\r\nconst header = new _js_page_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\nconst home = new _js_pages_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\nconst menu = new _js_pages_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\nconst contact = new _js_pages_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\r\n\r\nconst $content = document.querySelector(\"#content\");\r\n\r\n$content.appendChild(header.content);\r\n$content.querySelector(\".container\").appendChild(home.content);\r\n\r\nconst $nav = document.querySelector(\"nav\");\r\n\r\n$nav.addEventListener(\"click\", handleNavClicks);\r\n\r\nfunction handleNavClicks(event) {\r\n  if (\r\n    event.target.className.includes(\"wrapper\") ||\r\n    event.target.tagName === \"NAV\"\r\n  )\r\n    return;\r\n  removeContent();\r\n  removeAnchorUnderlines();\r\n  if (event.target.textContent === \"Home\") {\r\n    event.target.classList.add(\"underline\");\r\n    $content.querySelector(\".container\").appendChild(home.content);\r\n  } else if (event.target.textContent === \"Menu\") {\r\n    event.target.classList.add(\"underline\");\r\n    $content.querySelector(\".container\").appendChild(menu.content);\r\n  } else if (event.target.textContent === \"Contact\") {\r\n    event.target.classList.add(\"underline\");\r\n    $content.querySelector(\".container\").appendChild(contact.content);\r\n  }\r\n}\r\n\r\nfunction removeContent() {\r\n  $nav.nextElementSibling?.remove();\r\n}\r\n\r\nfunction removeAnchorUnderlines() {\r\n  for (let i = 0; i < $nav.children.length; i++)\r\n    $nav.children[i].firstElementChild.classList.remove(\"underline\");\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PageLoad)\n/* harmony export */ });\n/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builder */ \"./src/js/builder.js\");\n\r\n\r\nclass PageLoad extends _builder__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor() {\r\n    super();\r\n    this.content = this.headerCreation();\r\n  }\r\n\r\n  headerCreation() {\r\n    return this.buildElement(\"div\", { class: \"container m-auto pos-rel\" }, [\r\n      this.buildElement(\"div\", { class: \"headline\" }, [\r\n        this.buildElement(\r\n          \"h1\",\r\n          {\r\n            class: \"w-100 text-center m-0\",\r\n            textContent: \"Veggie Kabob & Grill\",\r\n          },\r\n          []\r\n        ),\r\n        this.buildElement(\r\n          \"p\",\r\n          {\r\n            class: \"text-center w-100 sub-headline\",\r\n            textContent:\r\n              \"Healthy and delicious vegetable kabobs along with grain bowls\",\r\n          },\r\n          []\r\n        ),\r\n      ]),\r\n      this.buildElement(\"nav\", { class: \"p-1r text-center\" }, [\r\n        this.buildElement(\"div\", { class: \"wrapper inline-block\" }, [\r\n          this.buildElement(\"a\", {\r\n            class: \"p-05r fs-1pt25r underline\",\r\n            textContent: \"Home\",\r\n          }),\r\n        ]),\r\n        this.buildElement(\"div\", { class: \"wrapper inline-block\" }, [\r\n          this.buildElement(\"a\", {\r\n            class: \"p-05r fs-1pt25r\",\r\n            textContent: \"Menu\",\r\n          }),\r\n        ]),\r\n        this.buildElement(\"div\", { class: \"wrapper inline-block\" }, [\r\n          this.buildElement(\"a\", {\r\n            class: \"p-05r fs-1pt25r\",\r\n            textContent: \"Contact\",\r\n          }),\r\n        ]),\r\n      ]),\r\n    ]);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/js/page-load.js?");

/***/ }),

/***/ "./src/js/pages/contact.js":
/*!*********************************!*\
  !*** ./src/js/pages/contact.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Contact)\n/* harmony export */ });\n/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../builder */ \"./src/js/builder.js\");\n\r\n\r\nclass Contact extends _builder__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor() {\r\n    super();\r\n    this.content = this.pageCreation();\r\n  }\r\n\r\n  pageCreation() {\r\n    return this.buildElement(\"div\", {}, [\r\n      this.buildElement(\"div\", { class: \"contact m-auto w-80 p-05r\" }, [\r\n        this.buildElement(\"h2\", { textContent: \"Contact\" }),\r\n      ]),\r\n    ]);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/js/pages/contact.js?");

/***/ }),

/***/ "./src/js/pages/home.js":
/*!******************************!*\
  !*** ./src/js/pages/home.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../builder */ \"./src/js/builder.js\");\n\r\n\r\nclass Home extends _builder__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor() {\r\n    super();\r\n    this.content = this.pageCreation();\r\n  }\r\n\r\n  pageCreation() {\r\n    return this.buildElement(\"div\", { class: \"home p-2r\" }, [\r\n      this.buildElement(\r\n        \"div\",\r\n        {\r\n          class:\r\n            \"hours ph-2r pv-1r br-05r flex flex-dir-col align-items-center\",\r\n        },\r\n        [\r\n          this.buildElement(\"h2\", { class: \"mb-1r\", textContent: \"Hours\" }),\r\n          this.createHoursForDay(\"Sunday\", \"10am - 9pm\"),\r\n          this.createHoursForDay(\"Monday\", \"11am - 8pm\"),\r\n          this.createHoursForDay(\"Tuesday\", \"11am - 8pm\"),\r\n          this.createHoursForDay(\"Wednesday\", \"11am - 8pm\"),\r\n          this.createHoursForDay(\"Thursday\", \"11am - 8pm\"),\r\n          this.createHoursForDay(\"Friday\", \"11am - 8pm\"),\r\n          this.createHoursForDay(\"Saturday\", \"10am - 9pm\"),\r\n        ]\r\n      ),\r\n    ]);\r\n  }\r\n\r\n  createHoursForDay(day, time) {\r\n    return this.buildElement(\"div\", { class: \"row gap-1r\" }, [\r\n      this.buildElement(\"div\", { class: \"col\" }, [\r\n        this.buildElement(\"p\", {\r\n          textContent: day + \":\",\r\n          class: \"text-right\",\r\n        }),\r\n      ]),\r\n      this.buildElement(\"div\", { class: \"col\" }, [\r\n        this.buildElement(\"p\", { textContent: time }),\r\n      ]),\r\n    ]);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/js/pages/home.js?");

/***/ }),

/***/ "./src/js/pages/menu.js":
/*!******************************!*\
  !*** ./src/js/pages/menu.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Menu)\n/* harmony export */ });\n/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../builder */ \"./src/js/builder.js\");\n\r\n\r\nclass Menu extends _builder__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor() {\r\n    super();\r\n    this.content = this.pageCreation();\r\n  }\r\n\r\n  pageCreation() {\r\n    return this.buildElement(\"div\", {}, [\r\n      this.buildElement(\"div\", { class: \"menu m-auto w-80 p-05r\" }, [\r\n        this.buildElement(\"h2\", { textContent: \"Menu\" }),\r\n      ]),\r\n    ]);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/js/pages/menu.js?");

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