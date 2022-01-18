/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --light: hsl(0, 0%, 92%);\n    --dark: hsl(0, 0%, 12%);\n    --tranparent1: rgba(0, 0, 0, 0.1);\n    --tranparent2: rgba(0, 0, 0, 0.2);\n    --light-carmine-pink: hsl(0, 75%, 65%);\n\n    --background: var(--light);\n    --color: var(--dark)\n}\n\n.dark-mode {\n    --tranparent1: rgba(255, 255, 255, 0.1);\n    --tranparent2: rgba(255, 255, 255, 0.2);\n\n    --background: var(--dark);\n    --color: var(--light);\n}\n\n*, *:before, *:after {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;  \n}\n\nbody {\n    font-family:Verdana, Geneva, \"DejaVu Sans\", sans-serif;\n    min-height: 100vh;\n    background-color: var(--background);\n    color: var(--color);\n}\n\nh1 {\n    font-size: clamp(2rem, 10vw, 3rem);\n    font-weight: normal;\n    text-transform:uppercase;\n}\n\nbutton {\n    cursor: pointer;\n}\n\nbutton, \ninput {\n    font-family:Verdana, Geneva, \"DejaVu Sans\", sans-serif;\n    outline: none;\n    border: none;\n    border-radius: 2px;\n}\n\nbutton:focus,\ninput:focus {\n    outline: 2px solid var(--color);\n}\n\nbutton:focus:not(:focus-visible),\ninput:focus:not(:focus-visible) {\n    outline: none;\n}\n\nbutton:focus-visible ,\ninput:focus-visible  {\n    outline: 2px solid var(--color);\n}\n\n.va-mid {\n    vertical-align: middle;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    width: 100vw;\n    padding: 1rem 0 0 0;\n}\n\n.search-div {\n    max-width: 360px;\n    margin: 0 1rem 0 auto;\n    padding: .5rem;\n    border-radius: 3px;\n    background-color: var(--tranparent1);\n}\n\n.search-div > * {\n    display: inline-block;\n    vertical-align: middle;\n}\n\n.search-input {\n    width: calc(100% - 91.97px);\n    height: 24px;\n    margin: 0 5px 0 8px;\n    padding: 5px .5rem 5px .5rem;\n    font-size: 16px;\n    color: var(--color);\n    background-color: var(--background);\n}\n\n.search-btn {\n    color: var(--color);\n    background-color: var(--tranparent1);\n}\n\n.modal {\n    display: none;\n    align-items: center;\n    justify-content: center;\n    position: absolute;\n    inset: 0;\n    background-color: var(--tranparent2);\n    z-index: 3;\n}\n\n.modal.loading {\n    cursor: wait;\n}\n\n.modal.loading,\n.modal.alert {\n    display: flex;\n}\n\n.loader {\n    display: none;\n    width: 120px;\n    height: 120px;\n    border: 16px solid var(--tranparent1);\n    border-radius: 50%;\n    border-top: 16px solid var(--color);\n    /* Safari */\n    -webkit-animation: spin 2s linear infinite;\n    animation: spin 2s linear infinite;\n}\n\n@keyframes spin {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n}\n\n@-webkit-keyframes spin {\n    /* Safari */\n    0% { -webkit-transform: rotate(0deg); }\n    100% { -webkit-transform: rotate(360deg); }\n}\n\n.error-box {\n    display: none;\n    width: 280px;\n    height: 52px;\n    border-radius: 4px;\n    background-color: var(--background);\n}\n\n.error-box > * {\n    display: inline-block;\n    vertical-align: middle;\n}\n\n.error-span {\n    font-size: 32px;\n    padding: 10px;\n    border-radius: 4px 0 0 4px;\n    background-color: var(--light-carmine-pink);\n}\n\n.error-body {\n    width: calc(100% - 112px);\n}\n\n.error-body > * {\n    display: block;\n    padding: 0 10px 0 10px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.error-body small,\n.close-error {\n    opacity: .7;\n    font-size: 11px;\n}\n\n.close-error {\n    width: 60px;\n    height: 52px;\n    border-radius: 0 4px 4px 0;\n    border-left: 2px solid var(--tranparent1);\n    color: var(--color);\n    background-color: var(--background);\n}\n\n.close-error:hover,\n.close-error:focus {\n    outline: none;\n    text-decoration: underline;\n    text-decoration-thickness: 2px;\n}\n\n.modal.loading .loader,\n.modal.alert .error-box {\n    display: block;\n}\n\n.main {\n    margin: auto auto auto 20vw;\n    max-width: 100%;\n    padding: 1rem 1rem 1rem 1rem;\n    overflow-wrap: break-word;\n    overflow-y: auto;\n}\n\n.description {\n    font-size: clamp(1.3rem, 10vw, 1.7rem);\n    opacity: .8;\n}\n\n.temperature {\n    position: relative;\n    font-size: clamp(6rem, 10vw, 8rem);\n    margin-right: 2.5rem;\n    color: var(--color);\n    background-color: transparent;\n}\n\n.temperature,\n.more-info {\n    display: inline-block;\n}\n\n.temperature.deg-c::after,\n.temperature.deg-c + .more-info .info-feels::after {\n    content: \"\\2103\";\n}\n\n.temperature.deg-f::after,\n.temperature.deg-f + .more-info .info-feels::after {\n    content: \"\\2109\";\n}\n\n.temperature.deg-c::after,\n.temperature.deg-f::after {\n    position: absolute;\n    top: 1rem;\n    font-size: 1.5rem;\n}\n\n.temperature.deg-c + .more-info .info-wind::after {\n    content: \" MPS\";\n}\n\n.temperature + .more-info .info-humid::after {\n    content: \"\\0025\";\n}\n\n.temperature.deg-f + .more-info .info-wind::after {\n    content: \" MPH\";\n}\n\n.more-info {\n    border-left: 2px solid var(--tranparent1);\n    border-radius: 3px;\n    padding: 0 0 0 1rem;\n    opacity: .8;\n}\n\n.more-info > * {\n    line-height: 2rem;\n}\n\n@media only screen and (max-width: 780px) {\n    .search-div {\n        margin: 0 1rem 0 1rem;\n        max-width: 780px;\n    }\n    .main {\n        margin: auto auto auto 0;\n    }\n    .description {\n        margin: 0 0 .5rem 0;\n    }\n}\n\n@media only screen and (max-width: 414px) {\n    .container {\n        padding: .2rem 0 0 0;\n    }\n    .search-div {\n        margin: 0 .2rem 0 .2rem;\n        max-width: 414px;\n    }\n    .main {\n        padding: .5rem .5rem .5rem .5rem;\n    }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --light: hsl(0, 0%, 92%);\n    --dark: hsl(0, 0%, 12%);\n    --tranparent1: rgba(0, 0, 0, 0.1);\n    --tranparent2: rgba(0, 0, 0, 0.2);\n    --light-carmine-pink: hsl(0, 75%, 65%);\n\n    --background: var(--light);\n    --color: var(--dark)\n}\n\n.dark-mode {\n    --tranparent1: rgba(255, 255, 255, 0.1);\n    --tranparent2: rgba(255, 255, 255, 0.2);\n\n    --background: var(--dark);\n    --color: var(--light);\n}\n\n*, *:before, *:after {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;  \n}\n\nbody {\n    font-family:Verdana, Geneva, \"DejaVu Sans\", sans-serif;\n    min-height: 100vh;\n    background-color: var(--background);\n    color: var(--color);\n}\n\nh1 {\n    font-size: clamp(2rem, 10vw, 3rem);\n    font-weight: normal;\n    text-transform:uppercase;\n}\n\nbutton {\n    cursor: pointer;\n}\n\nbutton, \ninput {\n    font-family:Verdana, Geneva, \"DejaVu Sans\", sans-serif;\n    outline: none;\n    border: none;\n    border-radius: 2px;\n}\n\nbutton:focus,\ninput:focus {\n    outline: 2px solid var(--color);\n}\n\nbutton:focus:not(:focus-visible),\ninput:focus:not(:focus-visible) {\n    outline: none;\n}\n\nbutton:focus-visible ,\ninput:focus-visible  {\n    outline: 2px solid var(--color);\n}\n\n.va-mid {\n    vertical-align: middle;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    width: 100vw;\n    padding: 1rem 0 0 0;\n}\n\n.search-div {\n    max-width: 360px;\n    margin: 0 1rem 0 auto;\n    padding: .5rem;\n    border-radius: 3px;\n    background-color: var(--tranparent1);\n}\n\n.search-div > * {\n    display: inline-block;\n    vertical-align: middle;\n}\n\n.search-input {\n    width: calc(100% - 91.97px);\n    height: 24px;\n    margin: 0 5px 0 8px;\n    padding: 5px .5rem 5px .5rem;\n    font-size: 16px;\n    color: var(--color);\n    background-color: var(--background);\n}\n\n.search-btn {\n    color: var(--color);\n    background-color: var(--tranparent1);\n}\n\n.modal {\n    display: none;\n    align-items: center;\n    justify-content: center;\n    position: absolute;\n    inset: 0;\n    background-color: var(--tranparent2);\n    z-index: 3;\n}\n\n.modal.loading {\n    cursor: wait;\n}\n\n.modal.loading,\n.modal.alert {\n    display: flex;\n}\n\n.loader {\n    display: none;\n    width: 120px;\n    height: 120px;\n    border: 16px solid var(--tranparent1);\n    border-radius: 50%;\n    border-top: 16px solid var(--color);\n    /* Safari */\n    -webkit-animation: spin 2s linear infinite;\n    animation: spin 2s linear infinite;\n}\n\n@keyframes spin {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n}\n\n@-webkit-keyframes spin {\n    /* Safari */\n    0% { -webkit-transform: rotate(0deg); }\n    100% { -webkit-transform: rotate(360deg); }\n}\n\n.error-box {\n    display: none;\n    width: 280px;\n    height: 52px;\n    border-radius: 4px;\n    background-color: var(--background);\n}\n\n.error-box > * {\n    display: inline-block;\n    vertical-align: middle;\n}\n\n.error-span {\n    font-size: 32px;\n    padding: 10px;\n    border-radius: 4px 0 0 4px;\n    background-color: var(--light-carmine-pink);\n}\n\n.error-body {\n    width: calc(100% - 112px);\n}\n\n.error-body > * {\n    display: block;\n    padding: 0 10px 0 10px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.error-body small,\n.close-error {\n    opacity: .7;\n    font-size: 11px;\n}\n\n.close-error {\n    width: 60px;\n    height: 52px;\n    border-radius: 0 4px 4px 0;\n    border-left: 2px solid var(--tranparent1);\n    color: var(--color);\n    background-color: var(--background);\n}\n\n.close-error:hover,\n.close-error:focus {\n    outline: none;\n    text-decoration: underline;\n    text-decoration-thickness: 2px;\n}\n\n.modal.loading .loader,\n.modal.alert .error-box {\n    display: block;\n}\n\n.main {\n    margin: auto auto auto 20vw;\n    max-width: 100%;\n    padding: 1rem 1rem 1rem 1rem;\n    overflow-wrap: break-word;\n    overflow-y: auto;\n}\n\n.description {\n    font-size: clamp(1.3rem, 10vw, 1.7rem);\n    opacity: .8;\n}\n\n.temperature {\n    position: relative;\n    font-size: clamp(6rem, 10vw, 8rem);\n    margin-right: 2.5rem;\n    color: var(--color);\n    background-color: transparent;\n}\n\n.temperature,\n.more-info {\n    display: inline-block;\n}\n\n.temperature.deg-c::after,\n.temperature.deg-c + .more-info .info-feels::after {\n    content: \"\\2103\";\n}\n\n.temperature.deg-f::after,\n.temperature.deg-f + .more-info .info-feels::after {\n    content: \"\\2109\";\n}\n\n.temperature.deg-c::after,\n.temperature.deg-f::after {\n    position: absolute;\n    top: 1rem;\n    font-size: 1.5rem;\n}\n\n.temperature.deg-c + .more-info .info-wind::after {\n    content: \" MPS\";\n}\n\n.temperature + .more-info .info-humid::after {\n    content: \"\\0025\";\n}\n\n.temperature.deg-f + .more-info .info-wind::after {\n    content: \" MPH\";\n}\n\n.more-info {\n    border-left: 2px solid var(--tranparent1);\n    border-radius: 3px;\n    padding: 0 0 0 1rem;\n    opacity: .8;\n}\n\n.more-info > * {\n    line-height: 2rem;\n}\n\n@media only screen and (max-width: 780px) {\n    .search-div {\n        margin: 0 1rem 0 1rem;\n        max-width: 780px;\n    }\n    .main {\n        margin: auto auto auto 0;\n    }\n    .description {\n        margin: 0 0 .5rem 0;\n    }\n}\n\n@media only screen and (max-width: 414px) {\n    .container {\n        padding: .2rem 0 0 0;\n    }\n    .search-div {\n        margin: 0 .2rem 0 .2rem;\n        max-width: 414px;\n    }\n    .main {\n        padding: .5rem .5rem .5rem .5rem;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const loadData = async (loc = 'Cabanatuan') => {
    const key = 'eeec839a4d9973095fd520b438167720';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${loc}&APPID=${key}&units=metric`;
    const response = await fetch(url, { mode: 'cors' });

    if (response.status === 200) {
        const data = await response.json();
        return data;
    }

    return Promise.reject(response);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadData);


/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _grey_cloud_1_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grey-cloud-1.svg */ "./src/grey-cloud-1.svg");


const setLanguage = () => document.querySelector('html').setAttribute('lang', 'en');

const setupHeadTag = () => {
    const headElement = document.querySelector('head');
    const titleElement = document.querySelector('title');

    const newMetaEdge = document.createElement('meta');
    const newLinkMaterialIcon = document.createElement('link');
    const newLinkFavicon = document.createElement('link');

    newMetaEdge.setAttribute('http-equiv', 'X-UA-Compatible');
    newMetaEdge.setAttribute('content', 'IE=edge');
    newLinkMaterialIcon.setAttribute('rel', 'stylesheet');
    newLinkMaterialIcon
        .setAttribute('href', 'https://fonts.googleapis.com/icon?family=Material+Icons+Outlined');
    newLinkFavicon.setAttribute('rel', 'icon');
    newLinkFavicon.setAttribute('type', 'image/png');
    newLinkFavicon.setAttribute('href', _grey_cloud_1_svg__WEBPACK_IMPORTED_MODULE_0__);

    headElement.insertBefore(newMetaEdge, titleElement);
    headElement.insertBefore(newLinkMaterialIcon, titleElement);
    headElement.appendChild(newLinkFavicon);
};

const isDay = () => {
    const hours = (new Date()).getHours();
    return (hours >= 6 && hours < 18);
};

const setBackground = () => {
    if (!isDay()) {
        document.querySelector('body').classList.add('dark-mode');
    }
};

const createContainer = () => {
    const div = document.createElement('div');
    div.classList.add('container');
    document.querySelector('body').insertBefore(div, document.querySelector('body script'));
};

const createSearch = () => {
    const form = document.createElement('form');
    const div = document.createElement('div');
    const label = document.createElement('label');
    const search = document.createElement('input');
    const btn = document.createElement('button');

    form.setAttribute('novalidate', true);
    label.setAttribute('for', 'searchInput');
    search.setAttribute('type', 'search');
    search.setAttribute('id', 'searchInput');
    search.setAttribute('placeholder', 'Location');
    btn.setAttribute('type', 'submit');

    div.className = 'search-div';
    search.className = 'search-input';
    btn.className = 'search-btn';

    label.textContent = 'Search';
    btn.innerHTML = '<span class="material-icons-outlined va-mid">search</span>';

    div.appendChild(label);
    div.appendChild(search);
    div.appendChild(btn);
    form.appendChild(div);
    document.querySelector('.container').appendChild(form);
};

const createMain = () => {
    const main = document.createElement('main');

    main.className = 'main';

    document.querySelector('.container').appendChild(main);
};

const createModalContainer = () => {
    const divContainer = document.createElement('div');
    divContainer.className = 'modal';
    divContainer.setAttribute('id', 'modal');
    document.querySelector('.container').appendChild(divContainer);
};

const createModalLoading = () => {
    const divLoader = document.createElement('div');
    divLoader.className = 'loader';
    document.querySelector('.modal').appendChild(divLoader);
};

const createModalError = () => {
    const errorBox = document.createElement('div');
    const bigIcon = document.createElement('span');
    const errorBody = document.createElement('div');
    const label = document.createElement('label');
    const small = document.createElement('small');
    const closeBtn = document.createElement('button');

    errorBox.className = 'error-box';
    bigIcon.className = 'material-icons-outlined va-mid error-span';
    errorBody.className = 'error-body';
    closeBtn.className = 'close-error';

    small.setAttribute('id', 'errorMessage');
    closeBtn.setAttribute('id', 'closeError');

    bigIcon.innerText = 'error_outline';
    label.innerText = 'Error';
    closeBtn.innerHTML = 'CLOSE';

    errorBody.appendChild(label);
    errorBody.appendChild(small);
    errorBox.appendChild(bigIcon);
    errorBox.appendChild(errorBody);
    errorBox.appendChild(closeBtn);
    document.querySelector('.modal').appendChild(errorBox);
};

const createModals = () => {
    createModalContainer();
    createModalLoading();
    createModalError();
};

const createForecastTemplate = () => {
    const header = document.createElement('h1');
    const paraDescription = document.createElement('p');
    const btnTemp = document.createElement('button');
    const div = document.createElement('div');
    const paraFeelsLike = document.createElement('p');
    const paraWind = document.createElement('p');
    const paraHumid = document.createElement('p');

    btnTemp.className = 'temperature deg-c';
    paraDescription.className = 'description';
    div.className = 'more-info';
    paraFeelsLike.className = 'info-feels';
    paraWind.className = 'info-wind';
    paraHumid.className = 'info-humid';

    header.setAttribute('id', 'header');
    paraDescription.setAttribute('id', 'description');
    btnTemp.setAttribute('id', 'temperature');
    paraFeelsLike.setAttribute('id', 'infoFeels');
    paraWind.setAttribute('id', 'infoWind');
    paraHumid.setAttribute('id', 'infoHumid');

    header.innerText = 'city name, country';
    paraDescription.innerText = 'description';
    btnTemp.innerHTML = 69;
    paraFeelsLike.innerHTML = 'Feels like: <span>69<span>';
    paraWind.innerHTML = 'Wind Speed: <span>69<span>';
    paraHumid.innerHTML = 'Humidity: <span>69<span>';

    div.appendChild(paraFeelsLike);
    div.appendChild(paraWind);
    div.appendChild(paraHumid);

    document.querySelector('main').appendChild(header);
    document.querySelector('main').appendChild(paraDescription);
    document.querySelector('main').appendChild(btnTemp);
    document.querySelector('main').appendChild(div);
};

const createApp = () => {
    createContainer();
    createSearch();
    createMain();
    createModals();
    createForecastTemplate();
};

const setup = () => {
    setLanguage();
    setupHeadTag();
    setBackground();
    createApp();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setup);


/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "processInput": () => (/* binding */ processInput),
/* harmony export */   "events": () => (/* binding */ events)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/api.js");


const variable = (() => {
    let keyboardEventKey;
    let temp;
    let feels;
    let wind;

    return {
        keyboardEventKey,
        temp,
        feels,
        wind,
    };
})();

const preventKeydownExcept = (event) => {
    if (variable.keyboardEventKey !== event.key) {
        event.preventDefault();
    }
};

const addKeydownPreventionExcept = (key) => {
    variable.keyboardEventKey = key;
    window.addEventListener('keydown', preventKeydownExcept);
};

const removeKeydownPrevention = () => {
    window.removeEventListener('keydown', preventKeydownExcept);
};

const focusElement = (element) => {
    document.querySelector(element).focus();
};

const toggleLoading = () => {
    document.querySelector('#modal').classList.toggle('loading');
};

const toggleError = () => {
    document.querySelector('#modal').classList.toggle('alert');
    if (!document.querySelector('#modal').classList.contains('alert')) {
        removeKeydownPrevention();
        focusElement('#searchInput');
    } else {
        addKeydownPreventionExcept('Enter');
        focusElement('#closeError');
    }
};

const errorHandler = (error) => {
    toggleError();
    document.querySelector('#errorMessage').innerText = error;
};

const capitalizeFirstLetter = (string) => {
    if (typeof string !== 'string') return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const celsiusToFahrenheit = (celsius) => {
    let num = celsius * 9;
    num /= 5;
    num += 32;
    return Math.round(num);
};

const meterPerSecondToMilesPerHour = (mps) => {
    const num = mps * 2.23694;
    return Math.round(num * 10) / 10;
};

const displayInCelsius = () => {
    document.querySelector('#temperature').innerText = variable.temp;
    document.querySelector('#infoFeels span').innerText = variable.feels;
    document.querySelector('#infoWind span').innerText = variable.wind;
};

const displayInFahrenheit = () => {
    document.querySelector('#temperature').innerText = celsiusToFahrenheit(variable.temp);
    document.querySelector('#infoFeels span').innerText = celsiusToFahrenheit(variable.feels);
    document.querySelector('#infoWind span').innerText = meterPerSecondToMilesPerHour(variable.wind);
};

const toggleUnit = () => {
    const temperature = document.querySelector('#temperature');

    if (temperature.classList.contains('deg-c')) {
        temperature.className = 'temperature deg-f';
        displayInFahrenheit();
    } else {
        temperature.className = 'temperature deg-c';
        displayInCelsius();
    }
};

const displayForecast = (data) => {
    const header = document.querySelector('#header');
    const description = document.querySelector('#description');
    const temperature = document.querySelector('#temperature');
    const infoFeels = document.querySelector('#infoFeels span');
    const infoWind = document.querySelector('#infoWind span');
    const infoHumid = document.querySelector('#infoHumid span');

    variable.temp = Math.round(data.main.temp);
    variable.feels = Math.round(data.main.feels_like);
    variable.wind = Math.round(data.wind.speed * 10) / 10;

    header.innerText = `${data.name}, ${data.sys.country}`;
    description.innerText = capitalizeFirstLetter(data.weather[0].description);
    temperature.innerText = variable.temp;
    infoFeels.innerText = variable.feels;
    infoWind.innerText = variable.wind;
    infoHumid.innerText = data.main.humidity;

    if (temperature.classList.contains('deg-f')) {
        displayInFahrenheit();
    }
};

const processInput = async (loc) => {
    try {
        toggleLoading();
        document.activeElement.blur();
        addKeydownPreventionExcept();
        const data = await (0,_api__WEBPACK_IMPORTED_MODULE_0__.default)(loc);
        displayForecast(data);
        removeKeydownPrevention();
        document.querySelector('#searchInput').focus();
    } catch (error) {
        errorHandler(error.statusText);
    } finally {
        toggleLoading();
    }
};

const submitHandler = (e) => {
    e.preventDefault();
    const searchInput = document.querySelector('#searchInput');

    if (!searchInput.value) {
        return errorHandler('Input field empty!');
    }

    if (typeof searchInput.value !== 'string') {
        return errorHandler('Input is not a string!');
    }

    if (searchInput.value.length <= 2) {
        return errorHandler('Input too short!');
    }

    if (searchInput.value.length > 20) {
        return errorHandler('Input too long!');
    }

    return processInput(searchInput.value);
};

const events = () => {
    document.querySelector('form').addEventListener('submit', submitHandler);
    document.querySelector('#closeError').addEventListener('click', toggleError);
    document.querySelector('#temperature').addEventListener('click', toggleUnit);
};




/***/ }),

/***/ "./src/grey-cloud-1.svg":
/*!******************************!*\
  !*** ./src/grey-cloud-1.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1fcfb56bc4b57ea1e625.svg";

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
/******/ 		__webpack_require__.p = "/weather-app/";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events */ "./src/events.js");




const onload = async () => {
    try {
        (0,_dom__WEBPACK_IMPORTED_MODULE_1__.default)();
        await (0,_events__WEBPACK_IMPORTED_MODULE_2__.processInput)('Talavera, ph');
        (0,_events__WEBPACK_IMPORTED_MODULE_2__.events)();
    } catch (error) {
        document.body.innerHTML = '<h1>Oops! Something went wrong.</h1>';
    }
};

onload();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQzdCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSxpREFBaUQsK0JBQStCLDhCQUE4Qix3Q0FBd0Msd0NBQXdDLDZDQUE2QyxtQ0FBbUMsNkJBQTZCLGdCQUFnQiw4Q0FBOEMsOENBQThDLGtDQUFrQyw0QkFBNEIsR0FBRywwQkFBMEIsNkJBQTZCLGlCQUFpQixrQkFBa0IsR0FBRyxVQUFVLCtEQUErRCx3QkFBd0IsMENBQTBDLDBCQUEwQixHQUFHLFFBQVEseUNBQXlDLDBCQUEwQiwrQkFBK0IsR0FBRyxZQUFZLHNCQUFzQixHQUFHLHFCQUFxQiwrREFBK0Qsb0JBQW9CLG1CQUFtQix5QkFBeUIsR0FBRyxnQ0FBZ0Msc0NBQXNDLEdBQUcsd0VBQXdFLG9CQUFvQixHQUFHLGtEQUFrRCxzQ0FBc0MsR0FBRyxhQUFhLDZCQUE2QixHQUFHLGdCQUFnQixvQkFBb0IsNkJBQTZCLG9CQUFvQixtQkFBbUIsMEJBQTBCLEdBQUcsaUJBQWlCLHVCQUF1Qiw0QkFBNEIscUJBQXFCLHlCQUF5QiwyQ0FBMkMsR0FBRyxxQkFBcUIsNEJBQTRCLDZCQUE2QixHQUFHLG1CQUFtQixrQ0FBa0MsbUJBQW1CLDBCQUEwQixtQ0FBbUMsc0JBQXNCLDBCQUEwQiwwQ0FBMEMsR0FBRyxpQkFBaUIsMEJBQTBCLDJDQUEyQyxHQUFHLFlBQVksb0JBQW9CLDBCQUEwQiw4QkFBOEIseUJBQXlCLGVBQWUsMkNBQTJDLGlCQUFpQixHQUFHLG9CQUFvQixtQkFBbUIsR0FBRyxtQ0FBbUMsb0JBQW9CLEdBQUcsYUFBYSxvQkFBb0IsbUJBQW1CLG9CQUFvQiw0Q0FBNEMseUJBQXlCLDBDQUEwQyxtRUFBbUUseUNBQXlDLEdBQUcscUJBQXFCLFdBQVcsMEJBQTBCLGFBQWEsNEJBQTRCLEdBQUcsNkJBQTZCLDZCQUE2QixrQ0FBa0MsYUFBYSxvQ0FBb0MsR0FBRyxnQkFBZ0Isb0JBQW9CLG1CQUFtQixtQkFBbUIseUJBQXlCLDBDQUEwQyxHQUFHLG9CQUFvQiw0QkFBNEIsNkJBQTZCLEdBQUcsaUJBQWlCLHNCQUFzQixvQkFBb0IsaUNBQWlDLGtEQUFrRCxHQUFHLGlCQUFpQixnQ0FBZ0MsR0FBRyxxQkFBcUIscUJBQXFCLDZCQUE2QiwwQkFBMEIsdUJBQXVCLDhCQUE4QixHQUFHLHNDQUFzQyxrQkFBa0Isc0JBQXNCLEdBQUcsa0JBQWtCLGtCQUFrQixtQkFBbUIsaUNBQWlDLGdEQUFnRCwwQkFBMEIsMENBQTBDLEdBQUcsNkNBQTZDLG9CQUFvQixpQ0FBaUMscUNBQXFDLEdBQUcsc0RBQXNELHFCQUFxQixHQUFHLFdBQVcsa0NBQWtDLHNCQUFzQixtQ0FBbUMsZ0NBQWdDLHVCQUF1QixHQUFHLGtCQUFrQiw2Q0FBNkMsa0JBQWtCLEdBQUcsa0JBQWtCLHlCQUF5Qix5Q0FBeUMsMkJBQTJCLDBCQUEwQixvQ0FBb0MsR0FBRywrQkFBK0IsNEJBQTRCLEdBQUcsb0ZBQW9GLDBCQUEwQixHQUFHLG9GQUFvRiwwQkFBMEIsR0FBRywyREFBMkQseUJBQXlCLGdCQUFnQix3QkFBd0IsR0FBRyx1REFBdUQsd0JBQXdCLEdBQUcsa0RBQWtELDBCQUEwQixHQUFHLHVEQUF1RCx3QkFBd0IsR0FBRyxnQkFBZ0IsZ0RBQWdELHlCQUF5QiwwQkFBMEIsa0JBQWtCLEdBQUcsb0JBQW9CLHdCQUF3QixHQUFHLCtDQUErQyxtQkFBbUIsZ0NBQWdDLDJCQUEyQixPQUFPLGFBQWEsbUNBQW1DLE9BQU8sb0JBQW9CLDhCQUE4QixPQUFPLEdBQUcsK0NBQStDLGtCQUFrQiwrQkFBK0IsT0FBTyxtQkFBbUIsa0NBQWtDLDJCQUEyQixPQUFPLGFBQWEsMkNBQTJDLE9BQU8sR0FBRyxTQUFTLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxNQUFNLE1BQU0sS0FBSyxZQUFZLGNBQWMsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLHNCQUFzQix1QkFBdUIsT0FBTyxLQUFLLFVBQVUsc0JBQXNCLHVCQUF1QixPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FB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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsS0FBSyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JMUTs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIsVUFBVSxJQUFJLGlCQUFpQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNkNBQVE7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcktoQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDSztBQUNzQjs7QUFFaEQ7QUFDQTtBQUNBLFFBQVEsNkNBQUs7QUFDYixjQUFjLHFEQUFZO0FBQzFCLFFBQVEsK0NBQU07QUFDZCxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1saWdodDogaHNsKDAsIDAlLCA5MiUpO1xcbiAgICAtLWRhcms6IGhzbCgwLCAwJSwgMTIlKTtcXG4gICAgLS10cmFucGFyZW50MTogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAtLXRyYW5wYXJlbnQyOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIC0tbGlnaHQtY2FybWluZS1waW5rOiBoc2woMCwgNzUlLCA2NSUpO1xcblxcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWxpZ2h0KTtcXG4gICAgLS1jb2xvcjogdmFyKC0tZGFyaylcXG59XFxuXFxuLmRhcmstbW9kZSB7XFxuICAgIC0tdHJhbnBhcmVudDE6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXG4gICAgLS10cmFucGFyZW50MjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcblxcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWRhcmspO1xcbiAgICAtLWNvbG9yOiB2YXIoLS1saWdodCk7XFxufVxcblxcbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwOyAgXFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTpWZXJkYW5hLCBHZW5ldmEsIFxcXCJEZWphVnUgU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yKTtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IGNsYW1wKDJyZW0sIDEwdncsIDNyZW0pO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uLCBcXG5pbnB1dCB7XFxuICAgIGZvbnQtZmFtaWx5OlZlcmRhbmEsIEdlbmV2YSwgXFxcIkRlamFWdSBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcblxcbmJ1dHRvbjpmb2N1cyxcXG5pbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS1jb2xvcik7XFxufVxcblxcbmJ1dHRvbjpmb2N1czpub3QoOmZvY3VzLXZpc2libGUpLFxcbmlucHV0OmZvY3VzOm5vdCg6Zm9jdXMtdmlzaWJsZSkge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5idXR0b246Zm9jdXMtdmlzaWJsZSAsXFxuaW5wdXQ6Zm9jdXMtdmlzaWJsZSAge1xcbiAgICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0tY29sb3IpO1xcbn1cXG5cXG4udmEtbWlkIHtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgcGFkZGluZzogMXJlbSAwIDAgMDtcXG59XFxuXFxuLnNlYXJjaC1kaXYge1xcbiAgICBtYXgtd2lkdGg6IDM2MHB4O1xcbiAgICBtYXJnaW46IDAgMXJlbSAwIGF1dG87XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5wYXJlbnQxKTtcXG59XFxuXFxuLnNlYXJjaC1kaXYgPiAqIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4uc2VhcmNoLWlucHV0IHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDkxLjk3cHgpO1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIG1hcmdpbjogMCA1cHggMCA4cHg7XFxuICAgIHBhZGRpbmc6IDVweCAuNXJlbSA1cHggLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxufVxcblxcbi5zZWFyY2gtYnRuIHtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnBhcmVudDEpO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBpbnNldDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnBhcmVudDIpO1xcbiAgICB6LWluZGV4OiAzO1xcbn1cXG5cXG4ubW9kYWwubG9hZGluZyB7XFxuICAgIGN1cnNvcjogd2FpdDtcXG59XFxuXFxuLm1vZGFsLmxvYWRpbmcsXFxuLm1vZGFsLmFsZXJ0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmxvYWRlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgaGVpZ2h0OiAxMjBweDtcXG4gICAgYm9yZGVyOiAxNnB4IHNvbGlkIHZhcigtLXRyYW5wYXJlbnQxKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3JkZXItdG9wOiAxNnB4IHNvbGlkIHZhcigtLWNvbG9yKTtcXG4gICAgLyogU2FmYXJpICovXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcXG4gICAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBzcGluIHtcXG4gICAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XFxuICAgIC8qIFNhZmFyaSAqL1xcbiAgICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cXG4gICAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxcbn1cXG5cXG4uZXJyb3ItYm94IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgd2lkdGg6IDI4MHB4O1xcbiAgICBoZWlnaHQ6IDUycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxufVxcblxcbi5lcnJvci1ib3ggPiAqIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4uZXJyb3Itc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWNhcm1pbmUtcGluayk7XFxufVxcblxcbi5lcnJvci1ib2R5IHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDExMnB4KTtcXG59XFxuXFxuLmVycm9yLWJvZHkgPiAqIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG4uZXJyb3ItYm9keSBzbWFsbCxcXG4uY2xvc2UtZXJyb3Ige1xcbiAgICBvcGFjaXR5OiAuNztcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcbn1cXG5cXG4uY2xvc2UtZXJyb3Ige1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiA1MnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDRweCA0cHggMDtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS10cmFucGFyZW50MSk7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbn1cXG5cXG4uY2xvc2UtZXJyb3I6aG92ZXIsXFxuLmNsb3NlLWVycm9yOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDJweDtcXG59XFxuXFxuLm1vZGFsLmxvYWRpbmcgLmxvYWRlcixcXG4ubW9kYWwuYWxlcnQgLmVycm9yLWJveCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIG1hcmdpbjogYXV0byBhdXRvIGF1dG8gMjB2dztcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMXJlbSAxcmVtO1xcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IGNsYW1wKDEuM3JlbSwgMTB2dywgMS43cmVtKTtcXG4gICAgb3BhY2l0eTogLjg7XFxufVxcblxcbi50ZW1wZXJhdHVyZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC1zaXplOiBjbGFtcCg2cmVtLCAxMHZ3LCA4cmVtKTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyLjVyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4udGVtcGVyYXR1cmUsXFxuLm1vcmUtaW5mbyB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLnRlbXBlcmF0dXJlLmRlZy1jOjphZnRlcixcXG4udGVtcGVyYXR1cmUuZGVnLWMgKyAubW9yZS1pbmZvIC5pbmZvLWZlZWxzOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcMjEwM1xcXCI7XFxufVxcblxcbi50ZW1wZXJhdHVyZS5kZWctZjo6YWZ0ZXIsXFxuLnRlbXBlcmF0dXJlLmRlZy1mICsgLm1vcmUtaW5mbyAuaW5mby1mZWVsczo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXDIxMDlcXFwiO1xcbn1cXG5cXG4udGVtcGVyYXR1cmUuZGVnLWM6OmFmdGVyLFxcbi50ZW1wZXJhdHVyZS5kZWctZjo6YWZ0ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi50ZW1wZXJhdHVyZS5kZWctYyArIC5tb3JlLWluZm8gLmluZm8td2luZDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiIE1QU1xcXCI7XFxufVxcblxcbi50ZW1wZXJhdHVyZSArIC5tb3JlLWluZm8gLmluZm8taHVtaWQ6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXFwwMDI1XFxcIjtcXG59XFxuXFxuLnRlbXBlcmF0dXJlLmRlZy1mICsgLm1vcmUtaW5mbyAuaW5mby13aW5kOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCIgTVBIXFxcIjtcXG59XFxuXFxuLm1vcmUtaW5mbyB7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0tdHJhbnBhcmVudDEpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIHBhZGRpbmc6IDAgMCAwIDFyZW07XFxuICAgIG9wYWNpdHk6IC44O1xcbn1cXG5cXG4ubW9yZS1pbmZvID4gKiB7XFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc4MHB4KSB7XFxuICAgIC5zZWFyY2gtZGl2IHtcXG4gICAgICAgIG1hcmdpbjogMCAxcmVtIDAgMXJlbTtcXG4gICAgICAgIG1heC13aWR0aDogNzgwcHg7XFxuICAgIH1cXG4gICAgLm1haW4ge1xcbiAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG8gYXV0byAwO1xcbiAgICB9XFxuICAgIC5kZXNjcmlwdGlvbiB7XFxuICAgICAgICBtYXJnaW46IDAgMCAuNXJlbSAwO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDE0cHgpIHtcXG4gICAgLmNvbnRhaW5lciB7XFxuICAgICAgICBwYWRkaW5nOiAuMnJlbSAwIDAgMDtcXG4gICAgfVxcbiAgICAuc2VhcmNoLWRpdiB7XFxuICAgICAgICBtYXJnaW46IDAgLjJyZW0gMCAuMnJlbTtcXG4gICAgICAgIG1heC13aWR0aDogNDE0cHg7XFxuICAgIH1cXG4gICAgLm1haW4ge1xcbiAgICAgICAgcGFkZGluZzogLjVyZW0gLjVyZW0gLjVyZW0gLjVyZW07XFxuICAgIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsaUNBQWlDO0lBQ2pDLGlDQUFpQztJQUNqQyxzQ0FBc0M7O0lBRXRDLDBCQUEwQjtJQUMxQjtBQUNKOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLHVDQUF1Qzs7SUFFdkMseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksc0RBQXNEO0lBQ3RELGlCQUFpQjtJQUNqQixtQ0FBbUM7SUFDbkMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLG1CQUFtQjtJQUNuQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBOztJQUVJLHNEQUFzRDtJQUN0RCxhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSwrQkFBK0I7QUFDbkM7O0FBRUE7O0lBRUksYUFBYTtBQUNqQjs7QUFFQTs7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LGdDQUFnQztJQUNwQztBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1saWdodDogaHNsKDAsIDAlLCA5MiUpO1xcbiAgICAtLWRhcms6IGhzbCgwLCAwJSwgMTIlKTtcXG4gICAgLS10cmFucGFyZW50MTogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAtLXRyYW5wYXJlbnQyOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIC0tbGlnaHQtY2FybWluZS1waW5rOiBoc2woMCwgNzUlLCA2NSUpO1xcblxcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWxpZ2h0KTtcXG4gICAgLS1jb2xvcjogdmFyKC0tZGFyaylcXG59XFxuXFxuLmRhcmstbW9kZSB7XFxuICAgIC0tdHJhbnBhcmVudDE6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXG4gICAgLS10cmFucGFyZW50MjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcblxcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWRhcmspO1xcbiAgICAtLWNvbG9yOiB2YXIoLS1saWdodCk7XFxufVxcblxcbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwOyAgXFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTpWZXJkYW5hLCBHZW5ldmEsIFxcXCJEZWphVnUgU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yKTtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IGNsYW1wKDJyZW0sIDEwdncsIDNyZW0pO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uLCBcXG5pbnB1dCB7XFxuICAgIGZvbnQtZmFtaWx5OlZlcmRhbmEsIEdlbmV2YSwgXFxcIkRlamFWdSBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcblxcbmJ1dHRvbjpmb2N1cyxcXG5pbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS1jb2xvcik7XFxufVxcblxcbmJ1dHRvbjpmb2N1czpub3QoOmZvY3VzLXZpc2libGUpLFxcbmlucHV0OmZvY3VzOm5vdCg6Zm9jdXMtdmlzaWJsZSkge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5idXR0b246Zm9jdXMtdmlzaWJsZSAsXFxuaW5wdXQ6Zm9jdXMtdmlzaWJsZSAge1xcbiAgICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0tY29sb3IpO1xcbn1cXG5cXG4udmEtbWlkIHtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgcGFkZGluZzogMXJlbSAwIDAgMDtcXG59XFxuXFxuLnNlYXJjaC1kaXYge1xcbiAgICBtYXgtd2lkdGg6IDM2MHB4O1xcbiAgICBtYXJnaW46IDAgMXJlbSAwIGF1dG87XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5wYXJlbnQxKTtcXG59XFxuXFxuLnNlYXJjaC1kaXYgPiAqIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4uc2VhcmNoLWlucHV0IHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDkxLjk3cHgpO1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIG1hcmdpbjogMCA1cHggMCA4cHg7XFxuICAgIHBhZGRpbmc6IDVweCAuNXJlbSA1cHggLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxufVxcblxcbi5zZWFyY2gtYnRuIHtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnBhcmVudDEpO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBpbnNldDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnBhcmVudDIpO1xcbiAgICB6LWluZGV4OiAzO1xcbn1cXG5cXG4ubW9kYWwubG9hZGluZyB7XFxuICAgIGN1cnNvcjogd2FpdDtcXG59XFxuXFxuLm1vZGFsLmxvYWRpbmcsXFxuLm1vZGFsLmFsZXJ0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmxvYWRlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgaGVpZ2h0OiAxMjBweDtcXG4gICAgYm9yZGVyOiAxNnB4IHNvbGlkIHZhcigtLXRyYW5wYXJlbnQxKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3JkZXItdG9wOiAxNnB4IHNvbGlkIHZhcigtLWNvbG9yKTtcXG4gICAgLyogU2FmYXJpICovXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcXG4gICAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBzcGluIHtcXG4gICAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XFxuICAgIC8qIFNhZmFyaSAqL1xcbiAgICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cXG4gICAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxcbn1cXG5cXG4uZXJyb3ItYm94IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgd2lkdGg6IDI4MHB4O1xcbiAgICBoZWlnaHQ6IDUycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxufVxcblxcbi5lcnJvci1ib3ggPiAqIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4uZXJyb3Itc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWNhcm1pbmUtcGluayk7XFxufVxcblxcbi5lcnJvci1ib2R5IHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDExMnB4KTtcXG59XFxuXFxuLmVycm9yLWJvZHkgPiAqIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG4uZXJyb3ItYm9keSBzbWFsbCxcXG4uY2xvc2UtZXJyb3Ige1xcbiAgICBvcGFjaXR5OiAuNztcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcbn1cXG5cXG4uY2xvc2UtZXJyb3Ige1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiA1MnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDRweCA0cHggMDtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS10cmFucGFyZW50MSk7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbn1cXG5cXG4uY2xvc2UtZXJyb3I6aG92ZXIsXFxuLmNsb3NlLWVycm9yOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDJweDtcXG59XFxuXFxuLm1vZGFsLmxvYWRpbmcgLmxvYWRlcixcXG4ubW9kYWwuYWxlcnQgLmVycm9yLWJveCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIG1hcmdpbjogYXV0byBhdXRvIGF1dG8gMjB2dztcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMXJlbSAxcmVtO1xcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IGNsYW1wKDEuM3JlbSwgMTB2dywgMS43cmVtKTtcXG4gICAgb3BhY2l0eTogLjg7XFxufVxcblxcbi50ZW1wZXJhdHVyZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC1zaXplOiBjbGFtcCg2cmVtLCAxMHZ3LCA4cmVtKTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyLjVyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4udGVtcGVyYXR1cmUsXFxuLm1vcmUtaW5mbyB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLnRlbXBlcmF0dXJlLmRlZy1jOjphZnRlcixcXG4udGVtcGVyYXR1cmUuZGVnLWMgKyAubW9yZS1pbmZvIC5pbmZvLWZlZWxzOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcMjEwM1xcXCI7XFxufVxcblxcbi50ZW1wZXJhdHVyZS5kZWctZjo6YWZ0ZXIsXFxuLnRlbXBlcmF0dXJlLmRlZy1mICsgLm1vcmUtaW5mbyAuaW5mby1mZWVsczo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXDIxMDlcXFwiO1xcbn1cXG5cXG4udGVtcGVyYXR1cmUuZGVnLWM6OmFmdGVyLFxcbi50ZW1wZXJhdHVyZS5kZWctZjo6YWZ0ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi50ZW1wZXJhdHVyZS5kZWctYyArIC5tb3JlLWluZm8gLmluZm8td2luZDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiIE1QU1xcXCI7XFxufVxcblxcbi50ZW1wZXJhdHVyZSArIC5tb3JlLWluZm8gLmluZm8taHVtaWQ6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXFwwMDI1XFxcIjtcXG59XFxuXFxuLnRlbXBlcmF0dXJlLmRlZy1mICsgLm1vcmUtaW5mbyAuaW5mby13aW5kOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCIgTVBIXFxcIjtcXG59XFxuXFxuLm1vcmUtaW5mbyB7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0tdHJhbnBhcmVudDEpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIHBhZGRpbmc6IDAgMCAwIDFyZW07XFxuICAgIG9wYWNpdHk6IC44O1xcbn1cXG5cXG4ubW9yZS1pbmZvID4gKiB7XFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc4MHB4KSB7XFxuICAgIC5zZWFyY2gtZGl2IHtcXG4gICAgICAgIG1hcmdpbjogMCAxcmVtIDAgMXJlbTtcXG4gICAgICAgIG1heC13aWR0aDogNzgwcHg7XFxuICAgIH1cXG4gICAgLm1haW4ge1xcbiAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG8gYXV0byAwO1xcbiAgICB9XFxuICAgIC5kZXNjcmlwdGlvbiB7XFxuICAgICAgICBtYXJnaW46IDAgMCAuNXJlbSAwO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDE0cHgpIHtcXG4gICAgLmNvbnRhaW5lciB7XFxuICAgICAgICBwYWRkaW5nOiAuMnJlbSAwIDAgMDtcXG4gICAgfVxcbiAgICAuc2VhcmNoLWRpdiB7XFxuICAgICAgICBtYXJnaW46IDAgLjJyZW0gMCAuMnJlbTtcXG4gICAgICAgIG1heC13aWR0aDogNDE0cHg7XFxuICAgIH1cXG4gICAgLm1haW4ge1xcbiAgICAgICAgcGFkZGluZzogLjVyZW0gLjVyZW0gLjVyZW0gLjVyZW07XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGxvYWREYXRhID0gYXN5bmMgKGxvYyA9ICdDYWJhbmF0dWFuJykgPT4ge1xuICAgIGNvbnN0IGtleSA9ICdlZWVjODM5YTRkOTk3MzA5NWZkNTIwYjQzODE2NzcyMCc7XG4gICAgY29uc3QgdXJsID0gYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY30mQVBQSUQ9JHtrZXl9JnVuaXRzPW1ldHJpY2A7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbW9kZTogJ2NvcnMnIH0pO1xuXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZXNwb25zZSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkRGF0YTtcbiIsImltcG9ydCBGYXZpY29uIGZyb20gJy4vZ3JleS1jbG91ZC0xLnN2Zyc7XG5cbmNvbnN0IHNldExhbmd1YWdlID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpLnNldEF0dHJpYnV0ZSgnbGFuZycsICdlbicpO1xuXG5jb25zdCBzZXR1cEhlYWRUYWcgPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJyk7XG4gICAgY29uc3QgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGl0bGUnKTtcblxuICAgIGNvbnN0IG5ld01ldGFFZGdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWV0YScpO1xuICAgIGNvbnN0IG5ld0xpbmtNYXRlcmlhbEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgY29uc3QgbmV3TGlua0Zhdmljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG5cbiAgICBuZXdNZXRhRWRnZS5zZXRBdHRyaWJ1dGUoJ2h0dHAtZXF1aXYnLCAnWC1VQS1Db21wYXRpYmxlJyk7XG4gICAgbmV3TWV0YUVkZ2Uuc2V0QXR0cmlidXRlKCdjb250ZW50JywgJ0lFPWVkZ2UnKTtcbiAgICBuZXdMaW5rTWF0ZXJpYWxJY29uLnNldEF0dHJpYnV0ZSgncmVsJywgJ3N0eWxlc2hlZXQnKTtcbiAgICBuZXdMaW5rTWF0ZXJpYWxJY29uXG4gICAgICAgIC5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29ucytPdXRsaW5lZCcpO1xuICAgIG5ld0xpbmtGYXZpY29uLnNldEF0dHJpYnV0ZSgncmVsJywgJ2ljb24nKTtcbiAgICBuZXdMaW5rRmF2aWNvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnaW1hZ2UvcG5nJyk7XG4gICAgbmV3TGlua0Zhdmljb24uc2V0QXR0cmlidXRlKCdocmVmJywgRmF2aWNvbik7XG5cbiAgICBoZWFkRWxlbWVudC5pbnNlcnRCZWZvcmUobmV3TWV0YUVkZ2UsIHRpdGxlRWxlbWVudCk7XG4gICAgaGVhZEVsZW1lbnQuaW5zZXJ0QmVmb3JlKG5ld0xpbmtNYXRlcmlhbEljb24sIHRpdGxlRWxlbWVudCk7XG4gICAgaGVhZEVsZW1lbnQuYXBwZW5kQ2hpbGQobmV3TGlua0Zhdmljb24pO1xufTtcblxuY29uc3QgaXNEYXkgPSAoKSA9PiB7XG4gICAgY29uc3QgaG91cnMgPSAobmV3IERhdGUoKSkuZ2V0SG91cnMoKTtcbiAgICByZXR1cm4gKGhvdXJzID49IDYgJiYgaG91cnMgPCAxOCk7XG59O1xuXG5jb25zdCBzZXRCYWNrZ3JvdW5kID0gKCkgPT4ge1xuICAgIGlmICghaXNEYXkoKSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnZGFyay1tb2RlJyk7XG4gICAgfVxufTtcblxuY29uc3QgY3JlYXRlQ29udGFpbmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuaW5zZXJ0QmVmb3JlKGRpdiwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keSBzY3JpcHQnKSk7XG59O1xuXG5jb25zdCBjcmVhdGVTZWFyY2ggPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdub3ZhbGlkYXRlJywgdHJ1ZSk7XG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnc2VhcmNoSW5wdXQnKTtcbiAgICBzZWFyY2guc2V0QXR0cmlidXRlKCd0eXBlJywgJ3NlYXJjaCcpO1xuICAgIHNlYXJjaC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NlYXJjaElucHV0Jyk7XG4gICAgc2VhcmNoLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnTG9jYXRpb24nKTtcbiAgICBidG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuXG4gICAgZGl2LmNsYXNzTmFtZSA9ICdzZWFyY2gtZGl2JztcbiAgICBzZWFyY2guY2xhc3NOYW1lID0gJ3NlYXJjaC1pbnB1dCc7XG4gICAgYnRuLmNsYXNzTmFtZSA9ICdzZWFyY2gtYnRuJztcblxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gJ1NlYXJjaCc7XG4gICAgYnRuLmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIHZhLW1pZFwiPnNlYXJjaDwvc3Bhbj4nO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoc2VhcmNoKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRpdik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGZvcm0pO1xufTtcblxuY29uc3QgY3JlYXRlTWFpbiA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuXG4gICAgbWFpbi5jbGFzc05hbWUgPSAnbWFpbic7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJykuYXBwZW5kQ2hpbGQobWFpbik7XG59O1xuXG5jb25zdCBjcmVhdGVNb2RhbENvbnRhaW5lciA9ICgpID0+IHtcbiAgICBjb25zdCBkaXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZDb250YWluZXIuY2xhc3NOYW1lID0gJ21vZGFsJztcbiAgICBkaXZDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdtb2RhbCcpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKS5hcHBlbmRDaGlsZChkaXZDb250YWluZXIpO1xufTtcblxuY29uc3QgY3JlYXRlTW9kYWxMb2FkaW5nID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpdkxvYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdkxvYWRlci5jbGFzc05hbWUgPSAnbG9hZGVyJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKS5hcHBlbmRDaGlsZChkaXZMb2FkZXIpO1xufTtcblxuY29uc3QgY3JlYXRlTW9kYWxFcnJvciA9ICgpID0+IHtcbiAgICBjb25zdCBlcnJvckJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJpZ0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgZXJyb3JCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGNvbnN0IHNtYWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc21hbGwnKTtcbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgZXJyb3JCb3guY2xhc3NOYW1lID0gJ2Vycm9yLWJveCc7XG4gICAgYmlnSWNvbi5jbGFzc05hbWUgPSAnbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgdmEtbWlkIGVycm9yLXNwYW4nO1xuICAgIGVycm9yQm9keS5jbGFzc05hbWUgPSAnZXJyb3ItYm9keSc7XG4gICAgY2xvc2VCdG4uY2xhc3NOYW1lID0gJ2Nsb3NlLWVycm9yJztcblxuICAgIHNtYWxsLnNldEF0dHJpYnV0ZSgnaWQnLCAnZXJyb3JNZXNzYWdlJyk7XG4gICAgY2xvc2VCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdjbG9zZUVycm9yJyk7XG5cbiAgICBiaWdJY29uLmlubmVyVGV4dCA9ICdlcnJvcl9vdXRsaW5lJztcbiAgICBsYWJlbC5pbm5lclRleHQgPSAnRXJyb3InO1xuICAgIGNsb3NlQnRuLmlubmVySFRNTCA9ICdDTE9TRSc7XG5cbiAgICBlcnJvckJvZHkuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGVycm9yQm9keS5hcHBlbmRDaGlsZChzbWFsbCk7XG4gICAgZXJyb3JCb3guYXBwZW5kQ2hpbGQoYmlnSWNvbik7XG4gICAgZXJyb3JCb3guYXBwZW5kQ2hpbGQoZXJyb3JCb2R5KTtcbiAgICBlcnJvckJveC5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJykuYXBwZW5kQ2hpbGQoZXJyb3JCb3gpO1xufTtcblxuY29uc3QgY3JlYXRlTW9kYWxzID0gKCkgPT4ge1xuICAgIGNyZWF0ZU1vZGFsQ29udGFpbmVyKCk7XG4gICAgY3JlYXRlTW9kYWxMb2FkaW5nKCk7XG4gICAgY3JlYXRlTW9kYWxFcnJvcigpO1xufTtcblxuY29uc3QgY3JlYXRlRm9yZWNhc3RUZW1wbGF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IHBhcmFEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBidG5UZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcGFyYUZlZWxzTGlrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwYXJhV2luZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwYXJhSHVtaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICBidG5UZW1wLmNsYXNzTmFtZSA9ICd0ZW1wZXJhdHVyZSBkZWctYyc7XG4gICAgcGFyYURlc2NyaXB0aW9uLmNsYXNzTmFtZSA9ICdkZXNjcmlwdGlvbic7XG4gICAgZGl2LmNsYXNzTmFtZSA9ICdtb3JlLWluZm8nO1xuICAgIHBhcmFGZWVsc0xpa2UuY2xhc3NOYW1lID0gJ2luZm8tZmVlbHMnO1xuICAgIHBhcmFXaW5kLmNsYXNzTmFtZSA9ICdpbmZvLXdpbmQnO1xuICAgIHBhcmFIdW1pZC5jbGFzc05hbWUgPSAnaW5mby1odW1pZCc7XG5cbiAgICBoZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkZXInKTtcbiAgICBwYXJhRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsICdkZXNjcmlwdGlvbicpO1xuICAgIGJ0blRlbXAuc2V0QXR0cmlidXRlKCdpZCcsICd0ZW1wZXJhdHVyZScpO1xuICAgIHBhcmFGZWVsc0xpa2Uuc2V0QXR0cmlidXRlKCdpZCcsICdpbmZvRmVlbHMnKTtcbiAgICBwYXJhV2luZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2luZm9XaW5kJyk7XG4gICAgcGFyYUh1bWlkLnNldEF0dHJpYnV0ZSgnaWQnLCAnaW5mb0h1bWlkJyk7XG5cbiAgICBoZWFkZXIuaW5uZXJUZXh0ID0gJ2NpdHkgbmFtZSwgY291bnRyeSc7XG4gICAgcGFyYURlc2NyaXB0aW9uLmlubmVyVGV4dCA9ICdkZXNjcmlwdGlvbic7XG4gICAgYnRuVGVtcC5pbm5lckhUTUwgPSA2OTtcbiAgICBwYXJhRmVlbHNMaWtlLmlubmVySFRNTCA9ICdGZWVscyBsaWtlOiA8c3Bhbj42OTxzcGFuPic7XG4gICAgcGFyYVdpbmQuaW5uZXJIVE1MID0gJ1dpbmQgU3BlZWQ6IDxzcGFuPjY5PHNwYW4+JztcbiAgICBwYXJhSHVtaWQuaW5uZXJIVE1MID0gJ0h1bWlkaXR5OiA8c3Bhbj42OTxzcGFuPic7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQocGFyYUZlZWxzTGlrZSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHBhcmFXaW5kKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQocGFyYUh1bWlkKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKS5hcHBlbmRDaGlsZChwYXJhRGVzY3JpcHRpb24pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKS5hcHBlbmRDaGlsZChidG5UZW1wKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJykuYXBwZW5kQ2hpbGQoZGl2KTtcbn07XG5cbmNvbnN0IGNyZWF0ZUFwcCA9ICgpID0+IHtcbiAgICBjcmVhdGVDb250YWluZXIoKTtcbiAgICBjcmVhdGVTZWFyY2goKTtcbiAgICBjcmVhdGVNYWluKCk7XG4gICAgY3JlYXRlTW9kYWxzKCk7XG4gICAgY3JlYXRlRm9yZWNhc3RUZW1wbGF0ZSgpO1xufTtcblxuY29uc3Qgc2V0dXAgPSAoKSA9PiB7XG4gICAgc2V0TGFuZ3VhZ2UoKTtcbiAgICBzZXR1cEhlYWRUYWcoKTtcbiAgICBzZXRCYWNrZ3JvdW5kKCk7XG4gICAgY3JlYXRlQXBwKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZXR1cDtcbiIsImltcG9ydCBsb2FkRGF0YSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IHZhcmlhYmxlID0gKCgpID0+IHtcbiAgICBsZXQga2V5Ym9hcmRFdmVudEtleTtcbiAgICBsZXQgdGVtcDtcbiAgICBsZXQgZmVlbHM7XG4gICAgbGV0IHdpbmQ7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBrZXlib2FyZEV2ZW50S2V5LFxuICAgICAgICB0ZW1wLFxuICAgICAgICBmZWVscyxcbiAgICAgICAgd2luZCxcbiAgICB9O1xufSkoKTtcblxuY29uc3QgcHJldmVudEtleWRvd25FeGNlcHQgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAodmFyaWFibGUua2V5Ym9hcmRFdmVudEtleSAhPT0gZXZlbnQua2V5KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxufTtcblxuY29uc3QgYWRkS2V5ZG93blByZXZlbnRpb25FeGNlcHQgPSAoa2V5KSA9PiB7XG4gICAgdmFyaWFibGUua2V5Ym9hcmRFdmVudEtleSA9IGtleTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHByZXZlbnRLZXlkb3duRXhjZXB0KTtcbn07XG5cbmNvbnN0IHJlbW92ZUtleWRvd25QcmV2ZW50aW9uID0gKCkgPT4ge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgcHJldmVudEtleWRvd25FeGNlcHQpO1xufTtcblxuY29uc3QgZm9jdXNFbGVtZW50ID0gKGVsZW1lbnQpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpLmZvY3VzKCk7XG59O1xuXG5jb25zdCB0b2dnbGVMb2FkaW5nID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbCcpLmNsYXNzTGlzdC50b2dnbGUoJ2xvYWRpbmcnKTtcbn07XG5cbmNvbnN0IHRvZ2dsZUVycm9yID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbCcpLmNsYXNzTGlzdC50b2dnbGUoJ2FsZXJ0Jyk7XG4gICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwnKS5jbGFzc0xpc3QuY29udGFpbnMoJ2FsZXJ0JykpIHtcbiAgICAgICAgcmVtb3ZlS2V5ZG93blByZXZlbnRpb24oKTtcbiAgICAgICAgZm9jdXNFbGVtZW50KCcjc2VhcmNoSW5wdXQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBhZGRLZXlkb3duUHJldmVudGlvbkV4Y2VwdCgnRW50ZXInKTtcbiAgICAgICAgZm9jdXNFbGVtZW50KCcjY2xvc2VFcnJvcicpO1xuICAgIH1cbn07XG5cbmNvbnN0IGVycm9ySGFuZGxlciA9IChlcnJvcikgPT4ge1xuICAgIHRvZ2dsZUVycm9yKCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Vycm9yTWVzc2FnZScpLmlubmVyVGV4dCA9IGVycm9yO1xufTtcblxuY29uc3QgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyID0gKHN0cmluZykgPT4ge1xuICAgIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykgcmV0dXJuICcnO1xuICAgIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG59O1xuXG5jb25zdCBjZWxzaXVzVG9GYWhyZW5oZWl0ID0gKGNlbHNpdXMpID0+IHtcbiAgICBsZXQgbnVtID0gY2Vsc2l1cyAqIDk7XG4gICAgbnVtIC89IDU7XG4gICAgbnVtICs9IDMyO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG51bSk7XG59O1xuXG5jb25zdCBtZXRlclBlclNlY29uZFRvTWlsZXNQZXJIb3VyID0gKG1wcykgPT4ge1xuICAgIGNvbnN0IG51bSA9IG1wcyAqIDIuMjM2OTQ7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobnVtICogMTApIC8gMTA7XG59O1xuXG5jb25zdCBkaXNwbGF5SW5DZWxzaXVzID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wZXJhdHVyZScpLmlubmVyVGV4dCA9IHZhcmlhYmxlLnRlbXA7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2luZm9GZWVscyBzcGFuJykuaW5uZXJUZXh0ID0gdmFyaWFibGUuZmVlbHM7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2luZm9XaW5kIHNwYW4nKS5pbm5lclRleHQgPSB2YXJpYWJsZS53aW5kO1xufTtcblxuY29uc3QgZGlzcGxheUluRmFocmVuaGVpdCA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcGVyYXR1cmUnKS5pbm5lclRleHQgPSBjZWxzaXVzVG9GYWhyZW5oZWl0KHZhcmlhYmxlLnRlbXApO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbmZvRmVlbHMgc3BhbicpLmlubmVyVGV4dCA9IGNlbHNpdXNUb0ZhaHJlbmhlaXQodmFyaWFibGUuZmVlbHMpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbmZvV2luZCBzcGFuJykuaW5uZXJUZXh0ID0gbWV0ZXJQZXJTZWNvbmRUb01pbGVzUGVySG91cih2YXJpYWJsZS53aW5kKTtcbn07XG5cbmNvbnN0IHRvZ2dsZVVuaXQgPSAoKSA9PiB7XG4gICAgY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcGVyYXR1cmUnKTtcblxuICAgIGlmICh0ZW1wZXJhdHVyZS5jbGFzc0xpc3QuY29udGFpbnMoJ2RlZy1jJykpIHtcbiAgICAgICAgdGVtcGVyYXR1cmUuY2xhc3NOYW1lID0gJ3RlbXBlcmF0dXJlIGRlZy1mJztcbiAgICAgICAgZGlzcGxheUluRmFocmVuaGVpdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRlbXBlcmF0dXJlLmNsYXNzTmFtZSA9ICd0ZW1wZXJhdHVyZSBkZWctYyc7XG4gICAgICAgIGRpc3BsYXlJbkNlbHNpdXMoKTtcbiAgICB9XG59O1xuXG5jb25zdCBkaXNwbGF5Rm9yZWNhc3QgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZWFkZXInKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xuICAgIGNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXBlcmF0dXJlJyk7XG4gICAgY29uc3QgaW5mb0ZlZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2luZm9GZWVscyBzcGFuJyk7XG4gICAgY29uc3QgaW5mb1dpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5mb1dpbmQgc3BhbicpO1xuICAgIGNvbnN0IGluZm9IdW1pZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbmZvSHVtaWQgc3BhbicpO1xuXG4gICAgdmFyaWFibGUudGVtcCA9IE1hdGgucm91bmQoZGF0YS5tYWluLnRlbXApO1xuICAgIHZhcmlhYmxlLmZlZWxzID0gTWF0aC5yb3VuZChkYXRhLm1haW4uZmVlbHNfbGlrZSk7XG4gICAgdmFyaWFibGUud2luZCA9IE1hdGgucm91bmQoZGF0YS53aW5kLnNwZWVkICogMTApIC8gMTA7XG5cbiAgICBoZWFkZXIuaW5uZXJUZXh0ID0gYCR7ZGF0YS5uYW1lfSwgJHtkYXRhLnN5cy5jb3VudHJ5fWA7XG4gICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbik7XG4gICAgdGVtcGVyYXR1cmUuaW5uZXJUZXh0ID0gdmFyaWFibGUudGVtcDtcbiAgICBpbmZvRmVlbHMuaW5uZXJUZXh0ID0gdmFyaWFibGUuZmVlbHM7XG4gICAgaW5mb1dpbmQuaW5uZXJUZXh0ID0gdmFyaWFibGUud2luZDtcbiAgICBpbmZvSHVtaWQuaW5uZXJUZXh0ID0gZGF0YS5tYWluLmh1bWlkaXR5O1xuXG4gICAgaWYgKHRlbXBlcmF0dXJlLmNsYXNzTGlzdC5jb250YWlucygnZGVnLWYnKSkge1xuICAgICAgICBkaXNwbGF5SW5GYWhyZW5oZWl0KCk7XG4gICAgfVxufTtcblxuY29uc3QgcHJvY2Vzc0lucHV0ID0gYXN5bmMgKGxvYykgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIHRvZ2dsZUxvYWRpbmcoKTtcbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgICAgIGFkZEtleWRvd25QcmV2ZW50aW9uRXhjZXB0KCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBsb2FkRGF0YShsb2MpO1xuICAgICAgICBkaXNwbGF5Rm9yZWNhc3QoZGF0YSk7XG4gICAgICAgIHJlbW92ZUtleWRvd25QcmV2ZW50aW9uKCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2hJbnB1dCcpLmZvY3VzKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgZXJyb3JIYW5kbGVyKGVycm9yLnN0YXR1c1RleHQpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRvZ2dsZUxvYWRpbmcoKTtcbiAgICB9XG59O1xuXG5jb25zdCBzdWJtaXRIYW5kbGVyID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoSW5wdXQnKTtcblxuICAgIGlmICghc2VhcmNoSW5wdXQudmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGVycm9ySGFuZGxlcignSW5wdXQgZmllbGQgZW1wdHkhJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBzZWFyY2hJbnB1dC52YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGVycm9ySGFuZGxlcignSW5wdXQgaXMgbm90IGEgc3RyaW5nIScpO1xuICAgIH1cblxuICAgIGlmIChzZWFyY2hJbnB1dC52YWx1ZS5sZW5ndGggPD0gMikge1xuICAgICAgICByZXR1cm4gZXJyb3JIYW5kbGVyKCdJbnB1dCB0b28gc2hvcnQhJyk7XG4gICAgfVxuXG4gICAgaWYgKHNlYXJjaElucHV0LnZhbHVlLmxlbmd0aCA+IDIwKSB7XG4gICAgICAgIHJldHVybiBlcnJvckhhbmRsZXIoJ0lucHV0IHRvbyBsb25nIScpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9jZXNzSW5wdXQoc2VhcmNoSW5wdXQudmFsdWUpO1xufTtcblxuY29uc3QgZXZlbnRzID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBzdWJtaXRIYW5kbGVyKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2VFcnJvcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlRXJyb3IpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wZXJhdHVyZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlVW5pdCk7XG59O1xuXG5leHBvcnQgeyBwcm9jZXNzSW5wdXQsIGV2ZW50cyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL3dlYXRoZXItYXBwL1wiOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHNldHVwIGZyb20gJy4vZG9tJztcbmltcG9ydCB7IHByb2Nlc3NJbnB1dCwgZXZlbnRzIH0gZnJvbSAnLi9ldmVudHMnO1xuXG5jb25zdCBvbmxvYWQgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgc2V0dXAoKTtcbiAgICAgICAgYXdhaXQgcHJvY2Vzc0lucHV0KCdUYWxhdmVyYSwgcGgnKTtcbiAgICAgICAgZXZlbnRzKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSAnPGgxPk9vcHMhIFNvbWV0aGluZyB3ZW50IHdyb25nLjwvaDE+JztcbiAgICB9XG59O1xuXG5vbmxvYWQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==