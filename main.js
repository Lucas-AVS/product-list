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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* RESET */\n*,*::before,*::after{box-sizing:border-box;margin:0}body{line-height:1.5;-webkit-font-smoothing:antialiased}img,picture,video,canvas,svg{display:block;max-width:100%}input,button,textarea,select{font:inherit}p,h1,h2,h3,h4,h5,h6{overflow-wrap:break-word}p{text-wrap:pretty}h1,h2,h3,h4,h5,h6{text-wrap:balance}#root,#__next{isolation:isolate}\n\n/* MAIN */\n.content {\n    font-family: Arial, sans-serif;\n    background-color: #f9f9f9;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n  }\n  \n  .product-container {\n    background-color: #fff;\n    padding: 20px;\n    border-radius: 8px;\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n    width: 100%;\n    max-width: 400px;\n    box-sizing: border-box;\n  }\n  \n  .product-container label {\n    font-size: 14px;\n    color: #333;\n    margin-bottom: 8px;\n    display: block;\n  }\n  \n  .product-container .form-input,\n  .product-container .form-textarea {\n    width: 100%;\n    padding: 10px;\n    margin-bottom: 16px;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n    font-size: 14px;\n    box-sizing: border-box;\n  }\n  \n  .product-container .form-textarea {\n    resize: vertical;\n  }\n  \n  .form-fieldset {\n    border: none;\n    margin: 0;\n    padding: 0;\n    margin-bottom: 16px;\n  }\n  \n  .form-fieldset legend {\n    font-size: 14px;\n    color: #333;\n    margin-bottom: 8px;\n  }\n  \n  .radio-row {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    margin-bottom: 8px;\n  }\n  \n  .radio-row input[type=\"radio\"] {\n    appearance: none;\n    width: 12px;\n    height: 12px;\n    border: 1px solid #007BFF;\n    border-radius: 50%;\n    outline: none;\n    cursor: pointer;\n    transition: background-color 0.3s ease, border-color 0.3s ease;\n  }\n  \n  .radio-row input[type=\"radio\"]:checked {\n    background-color: #007BFF;\n    border-color: #0056b3;\n  }\n  \n  .radio-row label {\n    font-size: 14px;\n    color: #333;\n    cursor: pointer;\n  }\n  \n  .new-product-button {\n    width: 100%;\n    padding: 12px;\n    background-color: #007BFF;\n    color: #fff;\n    border: none;\n    border-radius: 4px;\n    font-size: 16px;\n    cursor: pointer;\n    transition: background-color 0.3s ease;\n  }\n  \n  .new-product-button:hover {\n    background-color: #0056b3;\n  }\n  \n  /* HEADER */\n  .header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #007BFF;\n    padding: 0 20px;\n    color: white;\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: 1000;\n  }\n  \n  /* Logo */\n  .logo {\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n  }\n  \n  .logo-img {\n    height: 80px;\n  }\n  \n  /* Navegação */\n  .nav-links {\n    display: flex;\n    gap: 10px;\n  }\n  \n  .nav-button {\n    padding: 10px 15px;\n    background-color: white;\n    color: #007BFF;\n    border: none;\n    border-radius: 4px;\n    font-size: 14px;\n    cursor: pointer;\n    transition: background-color 0.3s ease, color 0.3s ease;\n  }\n\n  .nav-button#active {\n    background-color: #0056b3;\n    color: white;\n    border: 1px solid #0056b3;\n  }\n  \n  .nav-button:hover {\n    background-color: #0056b3;\n    color: white;\n  }\n  \n  #disable {\n    display: none;\n  }\n\n  /* Lista */\n  .product-table {\n    width: 100%;\n    border-collapse: collapse;\n    padding: 0;\n  }\n  \n  .product-table thead tr {\n    background-color: #007BFF;\n    color: white;\n  }\n  \n  .product-table th,\n  .product-table td {\n    border: 1px solid #ddd;\n    padding: 7px;\n    text-align: left;\n  }\n  \n  .product-table th {\n    font-size: 14px;\n  }\n  \n  .product-table td {\n    font-size: 14px;\n  }\n  \n  .product-row:nth-child(even) {\n    background-color: #f9f9f9;\n  }\n  \n  .product-row:hover {\n    background-color: #f1f1f1;\n  }\n\n  .delete-button {\n  background-color: #ff4d4d;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  padding: 8px 12px;\n  font-size: 14px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n\n.delete-button:hover {\n  background-color: #e60000;\n}\n\n#footer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 2.5rem;            /* Footer height */\n}\n\n#footer a{\n  font-weight: bold;\n  color: #007BFF;\n  text-decoration: none;\n}\n\n#footer a:hover{\n  font-weight: bolder;\n  color: #0056b3;\n}\n\n\n  /* Responsividade */\n  @media (max-width: 480px) {\n    /* MAIN */\n    .product-container {\n      padding: 15px;\n    }\n  \n    /* HEADER */\n    .header {\n      flex-direction: column;\n      align-items: flex-start;\n    }\n  \n    .nav-links {\n      margin-top: 10px;\n      width: 100%;\n      justify-content: space-between;\n    }\n  \n    .nav-button {\n      flex-grow: 1;\n      text-align: center;\n    }\n\n    .product-table th,\n    .product-table td {\n      display: block;\n      text-align: right;\n    }\n  \n    .product-table th::after {\n      content: \":\";\n    }\n  }`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://super-todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://super-todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://super-todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/logo-placeholder.png":
/*!*****************************************!*\
  !*** ./src/assets/logo-placeholder.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"355ea9139f62456eef09546166aa74cf.png\");\n\n//# sourceURL=webpack://super-todo-list/./src/assets/logo-placeholder.png?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://super-todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://super-todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://super-todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://super-todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://super-todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://super-todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://super-todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ header)\n/* harmony export */ });\n/* harmony import */ var _functions_changePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/changePage */ \"./src/functions/changePage.js\");\n/* harmony import */ var _assets_logo_placeholder_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/logo-placeholder.png */ \"./src/assets/logo-placeholder.png\");\n\n\n\nfunction header() {\n  const header = document.querySelector(\"header\");\n\n  // logo\n  const logo = document.createElement(\"a\");\n  logo.className = \"logo\";\n  logo.href = \"#\";\n\n  const logoImg = document.createElement(\"img\");\n  logoImg.className = \"logo-img\";\n  logoImg.src = _assets_logo_placeholder_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n  logoImg.alt = \"Logo do Sistema\";\n\n  // navbar\n  const nav = document.createElement(\"nav\");\n  nav.className = \"nav-links\";\n\n  const cadastroBtn = document.createElement(\"button\");\n  cadastroBtn.className = \"nav-button\";\n  cadastroBtn.textContent = \"Cadastro de Produtos\";\n  cadastroBtn.id = \"active\";\n\n  const listaBtn = document.createElement(\"button\");\n  listaBtn.className = \"nav-button\";\n  listaBtn.textContent = \"Lista de Produtos\";\n\n  nav.appendChild(cadastroBtn);\n  nav.appendChild(listaBtn);\n\n  logo.appendChild(logoImg);\n  header.appendChild(logo);\n  header.appendChild(nav);\n\n  cadastroBtn.addEventListener(\"click\", () => (0,_functions_changePage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Form\"));\n  listaBtn.addEventListener(\"click\", () => (0,_functions_changePage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"List\"));\n}\n\n\n//# sourceURL=webpack://super-todo-list/./src/components/header.js?");

/***/ }),

/***/ "./src/functions/changePage.js":
/*!*************************************!*\
  !*** ./src/functions/changePage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ changePage)\n/* harmony export */ });\nfunction changePage(page) {\n  const cadastroBtn = document.querySelector(\".nav-button:nth-child(1)\");\n  const listaBtn = document.querySelector(\".nav-button:nth-child(2)\");\n\n  const productForm = document.querySelector(\".product-form\");\n  const productTable = document.querySelector(\".product-table\");\n\n  if (page === \"Form\") {\n    productForm.id = \"active\";\n    productTable.id = \"disable\";\n    cadastroBtn.id = \"active\";\n    listaBtn.id = \"\";\n  } else if (page === \"List\") {\n    productTable.id = \"active\";\n    productForm.id = \"disable\";\n    cadastroBtn.id = \"\";\n    listaBtn.id = \"active\";\n  }\n}\n\n\n//# sourceURL=webpack://super-todo-list/./src/functions/changePage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header */ \"./src/components/header.js\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list */ \"./src/list.js\");\n\n\n\n\n\n(0,_components_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nconst productForm = document.querySelector(\".product-form\");\n(0,_list__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n// Nome do Produto\nconst nameLabel = document.createElement(\"label\");\nnameLabel.textContent = \"Nome do Produto:\";\nnameLabel.htmlFor = \"product-name\";\n\nconst nameInput = document.createElement(\"input\");\nnameInput.className = \"form-input\";\nnameInput.id = \"product-name\";\nnameInput.placeholder = \"Ex: Smartphone X\";\nnameInput.type = \"text\";\nnameInput.required = true;\nnameInput.ariaRequired = \"true\";\n\n// Descrição do Produto\nconst descriptionLabel = document.createElement(\"label\");\ndescriptionLabel.textContent = \"Descrição do Produto:\";\ndescriptionLabel.htmlFor = \"product-description\";\n\nconst descriptionInput = document.createElement(\"textarea\");\ndescriptionInput.className = \"form-textarea\";\ndescriptionInput.id = \"product-description\";\ndescriptionInput.placeholder =\n  \"Ex: Um produto inovador, feito com material X, na cor Y.\";\ndescriptionInput.rows = 4;\n\n// Valor do Produto\nconst valueLabel = document.createElement(\"label\");\nvalueLabel.textContent = \"Valor do Produto (R$):\";\nvalueLabel.htmlFor = \"product-value\";\n\nconst valueInput = document.createElement(\"input\");\nvalueInput.className = \"form-input\";\nvalueInput.id = \"product-value\";\nvalueInput.placeholder = \"Ex: 199.99\";\nvalueInput.type = \"number\";\nvalueInput.step = \"0.01\";\nvalueInput.min = \"0\";\nvalueInput.required = true;\nvalueInput.ariaRequired = \"true\";\n\n// Disponível para Venda\nconst availabilityFieldset = document.createElement(\"fieldset\");\navailabilityFieldset.className = \"form-fieldset\";\n\nconst availabilityLegend = document.createElement(\"legend\");\navailabilityLegend.textContent = \"Disponível para venda?\";\navailabilityFieldset.appendChild(availabilityLegend);\n\n// Radio Button \"Sim\"\nconst availableRow = document.createElement(\"div\");\navailableRow.className = \"radio-row\";\n\nconst availableInput = document.createElement(\"input\");\navailableInput.name = \"product-availability\";\navailableInput.id = \"available\";\navailableInput.type = \"radio\";\navailableInput.value = \"yes\";\navailableInput.checked = true;\n\nconst availableLabel = document.createElement(\"label\");\navailableLabel.textContent = \"Sim\";\navailableLabel.htmlFor = \"available\";\n\navailableRow.appendChild(availableInput);\navailableRow.appendChild(availableLabel);\n\n// Radio Button \"Não\"\nconst notAvailableRow = document.createElement(\"div\");\nnotAvailableRow.className = \"radio-row\";\n\nconst notAvailableInput = document.createElement(\"input\");\nnotAvailableInput.name = \"product-availability\";\nnotAvailableInput.id = \"not-available\";\nnotAvailableInput.type = \"radio\";\nnotAvailableInput.value = \"no\";\n\nconst notAvailableLabel = document.createElement(\"label\");\nnotAvailableLabel.textContent = \"Não\";\nnotAvailableLabel.htmlFor = \"not-available\";\n\nnotAvailableRow.appendChild(notAvailableInput);\nnotAvailableRow.appendChild(notAvailableLabel);\n\navailabilityFieldset.appendChild(availableRow);\navailabilityFieldset.appendChild(notAvailableRow);\n\n// Botão de Adicionar Produto\nconst newProductBtn = document.createElement(\"button\");\nnewProductBtn.className = \"new-product-button\";\nnewProductBtn.textContent = \"Adicionar Produto\";\nnewProductBtn.type = \"submit\";\n\n// Recupera os produtos do localStorage\nlet products = [];\nconst fetchProducts = localStorage.getItem(\"products\");\n\nif (fetchProducts) {\n  products = JSON.parse(fetchProducts); // Faz o parse apenas se existir algo no localStorage\n}\n\n// Atualiza a exibição inicial da lista de produtos\n(0,_list__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(products);\n\n// Evento de submissão do formulário\nproductForm.addEventListener(\"submit\", (event) => {\n  event.preventDefault();\n\n  const name = nameInput.value.trim();\n  const id = (0,uuid__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  const description = descriptionInput.value.trim();\n  const price = parseFloat(valueInput.value.replace(\",\", \".\"));\n  const available = availableInput.checked;\n\n  if (!name || !description || isNaN(price)) {\n    alert(\"Preencha todos os campos corretamente.\");\n    return;\n  }\n\n  const newProduct = { name, id, description, price, available };\n\n  const fetchProducts = localStorage.getItem(\"products\");\n\n  let products = fetchProducts ? JSON.parse(fetchProducts) : [];\n\n  products.push(newProduct);\n\n  localStorage.setItem(\"products\", JSON.stringify(products));\n\n  (0,_list__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  productForm.reset();\n  availableInput.checked = true;\n});\n\n// Adiciona os elementos ao form\nproductForm.appendChild(nameLabel);\nproductForm.appendChild(nameInput);\n\nproductForm.appendChild(descriptionLabel);\nproductForm.appendChild(descriptionInput);\n\nproductForm.appendChild(valueLabel);\nproductForm.appendChild(valueInput);\n\nproductForm.appendChild(availabilityFieldset);\n\nproductForm.appendChild(newProductBtn);\n\n\n//# sourceURL=webpack://super-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/list.js":
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ list)\n/* harmony export */ });\nfunction list() {\n  const table = document.querySelector(\".product-table\");\n\n  const fetchProducts = localStorage.getItem(\"products\");\n  let products = fetchProducts ? JSON.parse(fetchProducts) : [];\n\n  if (products.length === 0) {\n    table.innerHTML = `\n        <tr>\n          <td colspan=\"4\">\n            <p>\n              Sem produtos disponíveis, por favor cadastre um produto na aba \"Cadastro de Produtos\".\n            </p>\n          </td>\n        </tr>\n      `;\n    return;\n  }\n\n  // Ordena os produtos pelo menor preço\n  const orderedProducts = products.sort((a, b) => a.price - b.price);\n\n  // Limpa a tabela antes de renderizar\n  table.innerHTML = \"\";\n\n  // Tabela\n  const thead = document.createElement(\"thead\");\n  thead.innerHTML = `\n      <tr>\n        <th>Nome</th>\n        <th>Preço (R$)</th>\n        <th>À Venda</th>\n        <th>Ações</th>\n      </tr>\n    `;\n  table.appendChild(thead);\n  const tbody = document.createElement(\"tbody\");\n\n  orderedProducts.forEach((product, index) => {\n    const row = document.createElement(\"tr\");\n    row.className = \"product-row\";\n\n    // Nome\n    const nameCell = document.createElement(\"td\");\n    nameCell.className = \"product-name\";\n    nameCell.textContent = product.name;\n\n    // Preço\n    const priceCell = document.createElement(\"td\");\n    priceCell.className = \"product-price\";\n    priceCell.textContent = product.price.toLocaleString(\"pt-BR\", {\n      style: \"currency\",\n      currency: \"BRL\",\n    });\n\n    // Disponibilidade\n    const availabilityCell = document.createElement(\"td\");\n    availabilityCell.className = \"product-availability\";\n    availabilityCell.textContent = product.available ? \"Sim\" : \"Não\";\n\n    // Botão de exclusão\n    const actionsCell = document.createElement(\"td\");\n    actionsCell.className = \"product-actions\";\n    const deleteButton = document.createElement(\"button\");\n    deleteButton.textContent = \"Excluir\";\n    deleteButton.className = \"delete-button\";\n    deleteButton.addEventListener(\"click\", () => deleteProduct(product.id));\n    actionsCell.appendChild(deleteButton);\n\n    row.appendChild(nameCell);\n    row.appendChild(priceCell);\n    row.appendChild(availabilityCell);\n    row.appendChild(actionsCell);\n\n    tbody.appendChild(row);\n  });\n\n  table.appendChild(tbody);\n}\n\n// Função para deletar um produto com confirmação\nfunction deleteProduct(id) {\n  const confirmation = confirm(\"Tem certeza que deseja excluir este produto?\");\n  if (confirmation) {\n    // Recupera os produtos do localStorage\n    const fetchProducts = localStorage.getItem(\"products\");\n    let products = fetchProducts ? JSON.parse(fetchProducts) : [];\n\n    // Remove o produto pelo ID\n    products = products.filter((product) => product.id !== id);\n\n    // Atualiza o localStorage\n    localStorage.setItem(\"products\", JSON.stringify(products));\n\n    // Atualiza a lista na interface\n    list();\n  }\n}\n\n\n//# sourceURL=webpack://super-todo-list/./src/list.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ randomUUID });\n\n\n//# sourceURL=webpack://super-todo-list/./node_modules/uuid/dist/esm-browser/native.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i);\n\n\n//# sourceURL=webpack://super-todo-list/./node_modules/uuid/dist/esm-browser/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rng)\n/* harmony export */ });\nlet getRandomValues;\nconst rnds8 = new Uint8Array(16);\nfunction rng() {\n    if (!getRandomValues) {\n        if (typeof crypto === 'undefined' || !crypto.getRandomValues) {\n            throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n        }\n        getRandomValues = crypto.getRandomValues.bind(crypto);\n    }\n    return getRandomValues(rnds8);\n}\n\n\n//# sourceURL=webpack://super-todo-list/./node_modules/uuid/dist/esm-browser/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\nconst byteToHex = [];\nfor (let i = 0; i < 256; ++i) {\n    byteToHex.push((i + 0x100).toString(16).slice(1));\n}\nfunction unsafeStringify(arr, offset = 0) {\n    return (byteToHex[arr[offset + 0]] +\n        byteToHex[arr[offset + 1]] +\n        byteToHex[arr[offset + 2]] +\n        byteToHex[arr[offset + 3]] +\n        '-' +\n        byteToHex[arr[offset + 4]] +\n        byteToHex[arr[offset + 5]] +\n        '-' +\n        byteToHex[arr[offset + 6]] +\n        byteToHex[arr[offset + 7]] +\n        '-' +\n        byteToHex[arr[offset + 8]] +\n        byteToHex[arr[offset + 9]] +\n        '-' +\n        byteToHex[arr[offset + 10]] +\n        byteToHex[arr[offset + 11]] +\n        byteToHex[arr[offset + 12]] +\n        byteToHex[arr[offset + 13]] +\n        byteToHex[arr[offset + 14]] +\n        byteToHex[arr[offset + 15]]).toLowerCase();\n}\nfunction stringify(arr, offset = 0) {\n    const uuid = unsafeStringify(arr, offset);\n    if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n        throw TypeError('Stringified UUID is invalid');\n    }\n    return uuid;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n\n//# sourceURL=webpack://super-todo-list/./node_modules/uuid/dist/esm-browser/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ \"./node_modules/uuid/dist/esm-browser/native.js\");\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n\n\nfunction v4(options, buf, offset) {\n    if (_native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID && !buf && !options) {\n        return _native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID();\n    }\n    options = options || {};\n    const rnds = options.random ?? options.rng?.() ?? (0,_rng_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    if (rnds.length < 16) {\n        throw new Error('Random bytes length must be >= 16');\n    }\n    rnds[6] = (rnds[6] & 0x0f) | 0x40;\n    rnds[8] = (rnds[8] & 0x3f) | 0x80;\n    if (buf) {\n        offset = offset || 0;\n        if (offset < 0 || offset + 16 > buf.length) {\n            throw new RangeError(`UUID byte range ${offset}:${offset + 15} is out of buffer bounds`);\n        }\n        for (let i = 0; i < 16; ++i) {\n            buf[offset + i] = rnds[i];\n        }\n        return buf;\n    }\n    return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n\n//# sourceURL=webpack://super-todo-list/./node_modules/uuid/dist/esm-browser/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-browser/regex.js\");\n\nfunction validate(uuid) {\n    return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].test(uuid);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n\n//# sourceURL=webpack://super-todo-list/./node_modules/uuid/dist/esm-browser/validate.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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