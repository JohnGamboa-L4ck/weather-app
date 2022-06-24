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
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&APPID=${key}&units=metric`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLHNCQUFzQix1QkFBdUIsT0FBTyxLQUFLLFVBQVUsc0JBQXNCLHVCQUF1QixPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FB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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsS0FBSyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JMUTs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIsVUFBVSxJQUFJLGlCQUFpQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNkNBQVE7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcktoQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDSztBQUNzQjs7QUFFaEQ7QUFDQTtBQUNBLFFBQVEsNkNBQUs7QUFDYixjQUFjLHFEQUFZO0FBQzFCLFFBQVEsK0NBQU07QUFDZCxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1saWdodDogaHNsKDAsIDAlLCA5MiUpO1xcbiAgICAtLWRhcms6IGhzbCgwLCAwJSwgMTIlKTtcXG4gICAgLS10cmFucGFyZW50MTogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAtLXRyYW5wYXJlbnQyOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIC0tbGlnaHQtY2FybWluZS1waW5rOiBoc2woMCwgNzUlLCA2NSUpO1xcblxcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWxpZ2h0KTtcXG4gICAgLS1jb2xvcjogdmFyKC0tZGFyaylcXG59XFxuXFxuLmRhcmstbW9kZSB7XFxuICAgIC0tdHJhbnBhcmVudDE6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXG4gICAgLS10cmFucGFyZW50MjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcblxcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWRhcmspO1xcbiAgICAtLWNvbG9yOiB2YXIoLS1saWdodCk7XFxufVxcblxcbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwOyAgXFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTpWZXJkYW5hLCBHZW5ldmEsIFxcXCJEZWphVnUgU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yKTtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IGNsYW1wKDJyZW0sIDEwdncsIDNyZW0pO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uLCBcXG5pbnB1dCB7XFxuICAgIGZvbnQtZmFtaWx5OlZlcmRhbmEsIEdlbmV2YSwgXFxcIkRlamFWdSBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcblxcbmJ1dHRvbjpmb2N1cyxcXG5pbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS1jb2xvcik7XFxufVxcblxcbmJ1dHRvbjpmb2N1czpub3QoOmZvY3VzLXZpc2libGUpLFxcbmlucHV0OmZvY3VzOm5vdCg6Zm9jdXMtdmlzaWJsZSkge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5idXR0b246Zm9jdXMtdmlzaWJsZSAsXFxuaW5wdXQ6Zm9jdXMtdmlzaWJsZSAge1xcbiAgICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0tY29sb3IpO1xcbn1cXG5cXG4udmEtbWlkIHtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgcGFkZGluZzogMXJlbSAwIDAgMDtcXG59XFxuXFxuLnNlYXJjaC1kaXYge1xcbiAgICBtYXgtd2lkdGg6IDM2MHB4O1xcbiAgICBtYXJnaW46IDAgMXJlbSAwIGF1dG87XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5wYXJlbnQxKTtcXG59XFxuXFxuLnNlYXJjaC1kaXYgPiAqIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4uc2VhcmNoLWlucHV0IHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDkxLjk3cHgpO1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIG1hcmdpbjogMCA1cHggMCA4cHg7XFxuICAgIHBhZGRpbmc6IDVweCAuNXJlbSA1cHggLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxufVxcblxcbi5zZWFyY2gtYnRuIHtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnBhcmVudDEpO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBpbnNldDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnBhcmVudDIpO1xcbiAgICB6LWluZGV4OiAzO1xcbn1cXG5cXG4ubW9kYWwubG9hZGluZyB7XFxuICAgIGN1cnNvcjogd2FpdDtcXG59XFxuXFxuLm1vZGFsLmxvYWRpbmcsXFxuLm1vZGFsLmFsZXJ0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmxvYWRlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgaGVpZ2h0OiAxMjBweDtcXG4gICAgYm9yZGVyOiAxNnB4IHNvbGlkIHZhcigtLXRyYW5wYXJlbnQxKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3JkZXItdG9wOiAxNnB4IHNvbGlkIHZhcigtLWNvbG9yKTtcXG4gICAgLyogU2FmYXJpICovXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcXG4gICAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBzcGluIHtcXG4gICAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XFxuICAgIC8qIFNhZmFyaSAqL1xcbiAgICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cXG4gICAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxcbn1cXG5cXG4uZXJyb3ItYm94IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgd2lkdGg6IDI4MHB4O1xcbiAgICBoZWlnaHQ6IDUycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxufVxcblxcbi5lcnJvci1ib3ggPiAqIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4uZXJyb3Itc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWNhcm1pbmUtcGluayk7XFxufVxcblxcbi5lcnJvci1ib2R5IHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDExMnB4KTtcXG59XFxuXFxuLmVycm9yLWJvZHkgPiAqIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG4uZXJyb3ItYm9keSBzbWFsbCxcXG4uY2xvc2UtZXJyb3Ige1xcbiAgICBvcGFjaXR5OiAuNztcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcbn1cXG5cXG4uY2xvc2UtZXJyb3Ige1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiA1MnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDRweCA0cHggMDtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS10cmFucGFyZW50MSk7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbn1cXG5cXG4uY2xvc2UtZXJyb3I6aG92ZXIsXFxuLmNsb3NlLWVycm9yOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDJweDtcXG59XFxuXFxuLm1vZGFsLmxvYWRpbmcgLmxvYWRlcixcXG4ubW9kYWwuYWxlcnQgLmVycm9yLWJveCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIG1hcmdpbjogYXV0byBhdXRvIGF1dG8gMjB2dztcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMXJlbSAxcmVtO1xcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IGNsYW1wKDEuM3JlbSwgMTB2dywgMS43cmVtKTtcXG4gICAgb3BhY2l0eTogLjg7XFxufVxcblxcbi50ZW1wZXJhdHVyZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC1zaXplOiBjbGFtcCg2cmVtLCAxMHZ3LCA4cmVtKTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyLjVyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4udGVtcGVyYXR1cmUsXFxuLm1vcmUtaW5mbyB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLnRlbXBlcmF0dXJlLmRlZy1jOjphZnRlcixcXG4udGVtcGVyYXR1cmUuZGVnLWMgKyAubW9yZS1pbmZvIC5pbmZvLWZlZWxzOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcMjEwM1xcXCI7XFxufVxcblxcbi50ZW1wZXJhdHVyZS5kZWctZjo6YWZ0ZXIsXFxuLnRlbXBlcmF0dXJlLmRlZy1mICsgLm1vcmUtaW5mbyAuaW5mby1mZWVsczo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXDIxMDlcXFwiO1xcbn1cXG5cXG4udGVtcGVyYXR1cmUuZGVnLWM6OmFmdGVyLFxcbi50ZW1wZXJhdHVyZS5kZWctZjo6YWZ0ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi50ZW1wZXJhdHVyZS5kZWctYyArIC5tb3JlLWluZm8gLmluZm8td2luZDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiIE1QU1xcXCI7XFxufVxcblxcbi50ZW1wZXJhdHVyZSArIC5tb3JlLWluZm8gLmluZm8taHVtaWQ6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXFwwMDI1XFxcIjtcXG59XFxuXFxuLnRlbXBlcmF0dXJlLmRlZy1mICsgLm1vcmUtaW5mbyAuaW5mby13aW5kOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCIgTVBIXFxcIjtcXG59XFxuXFxuLm1vcmUtaW5mbyB7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0tdHJhbnBhcmVudDEpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIHBhZGRpbmc6IDAgMCAwIDFyZW07XFxuICAgIG9wYWNpdHk6IC44O1xcbn1cXG5cXG4ubW9yZS1pbmZvID4gKiB7XFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc4MHB4KSB7XFxuICAgIC5zZWFyY2gtZGl2IHtcXG4gICAgICAgIG1hcmdpbjogMCAxcmVtIDAgMXJlbTtcXG4gICAgICAgIG1heC13aWR0aDogNzgwcHg7XFxuICAgIH1cXG4gICAgLm1haW4ge1xcbiAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG8gYXV0byAwO1xcbiAgICB9XFxuICAgIC5kZXNjcmlwdGlvbiB7XFxuICAgICAgICBtYXJnaW46IDAgMCAuNXJlbSAwO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDE0cHgpIHtcXG4gICAgLmNvbnRhaW5lciB7XFxuICAgICAgICBwYWRkaW5nOiAuMnJlbSAwIDAgMDtcXG4gICAgfVxcbiAgICAuc2VhcmNoLWRpdiB7XFxuICAgICAgICBtYXJnaW46IDAgLjJyZW0gMCAuMnJlbTtcXG4gICAgICAgIG1heC13aWR0aDogNDE0cHg7XFxuICAgIH1cXG4gICAgLm1haW4ge1xcbiAgICAgICAgcGFkZGluZzogLjVyZW0gLjVyZW0gLjVyZW0gLjVyZW07XFxuICAgIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsaUNBQWlDO0lBQ2pDLGlDQUFpQztJQUNqQyxzQ0FBc0M7O0lBRXRDLDBCQUEwQjtJQUMxQjtBQUNKOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLHVDQUF1Qzs7SUFFdkMseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksc0RBQXNEO0lBQ3RELGlCQUFpQjtJQUNqQixtQ0FBbUM7SUFDbkMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLG1CQUFtQjtJQUNuQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBOztJQUVJLHNEQUFzRDtJQUN0RCxhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSwrQkFBK0I7QUFDbkM7O0FBRUE7O0lBRUksYUFBYTtBQUNqQjs7QUFFQTs7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LGdDQUFnQztJQUNwQztBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1saWdodDogaHNsKDAsIDAlLCA5MiUpO1xcbiAgICAtLWRhcms6IGhzbCgwLCAwJSwgMTIlKTtcXG4gICAgLS10cmFucGFyZW50MTogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAtLXRyYW5wYXJlbnQyOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIC0tbGlnaHQtY2FybWluZS1waW5rOiBoc2woMCwgNzUlLCA2NSUpO1xcblxcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWxpZ2h0KTtcXG4gICAgLS1jb2xvcjogdmFyKC0tZGFyaylcXG59XFxuXFxuLmRhcmstbW9kZSB7XFxuICAgIC0tdHJhbnBhcmVudDE6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXG4gICAgLS10cmFucGFyZW50MjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcblxcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWRhcmspO1xcbiAgICAtLWNvbG9yOiB2YXIoLS1saWdodCk7XFxufVxcblxcbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwOyAgXFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTpWZXJkYW5hLCBHZW5ldmEsIFxcXCJEZWphVnUgU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yKTtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IGNsYW1wKDJyZW0sIDEwdncsIDNyZW0pO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uLCBcXG5pbnB1dCB7XFxuICAgIGZvbnQtZmFtaWx5OlZlcmRhbmEsIEdlbmV2YSwgXFxcIkRlamFWdSBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcblxcbmJ1dHRvbjpmb2N1cyxcXG5pbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS1jb2xvcik7XFxufVxcblxcbmJ1dHRvbjpmb2N1czpub3QoOmZvY3VzLXZpc2libGUpLFxcbmlucHV0OmZvY3VzOm5vdCg6Zm9jdXMtdmlzaWJsZSkge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5idXR0b246Zm9jdXMtdmlzaWJsZSAsXFxuaW5wdXQ6Zm9jdXMtdmlzaWJsZSAge1xcbiAgICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0tY29sb3IpO1xcbn1cXG5cXG4udmEtbWlkIHtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgcGFkZGluZzogMXJlbSAwIDAgMDtcXG59XFxuXFxuLnNlYXJjaC1kaXYge1xcbiAgICBtYXgtd2lkdGg6IDM2MHB4O1xcbiAgICBtYXJnaW46IDAgMXJlbSAwIGF1dG87XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5wYXJlbnQxKTtcXG59XFxuXFxuLnNlYXJjaC1kaXYgPiAqIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4uc2VhcmNoLWlucHV0IHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDkxLjk3cHgpO1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIG1hcmdpbjogMCA1cHggMCA4cHg7XFxuICAgIHBhZGRpbmc6IDVweCAuNXJlbSA1cHggLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxufVxcblxcbi5zZWFyY2gtYnRuIHtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnBhcmVudDEpO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBpbnNldDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnBhcmVudDIpO1xcbiAgICB6LWluZGV4OiAzO1xcbn1cXG5cXG4ubW9kYWwubG9hZGluZyB7XFxuICAgIGN1cnNvcjogd2FpdDtcXG59XFxuXFxuLm1vZGFsLmxvYWRpbmcsXFxuLm1vZGFsLmFsZXJ0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmxvYWRlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgaGVpZ2h0OiAxMjBweDtcXG4gICAgYm9yZGVyOiAxNnB4IHNvbGlkIHZhcigtLXRyYW5wYXJlbnQxKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3JkZXItdG9wOiAxNnB4IHNvbGlkIHZhcigtLWNvbG9yKTtcXG4gICAgLyogU2FmYXJpICovXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcXG4gICAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBzcGluIHtcXG4gICAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XFxuICAgIC8qIFNhZmFyaSAqL1xcbiAgICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cXG4gICAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxcbn1cXG5cXG4uZXJyb3ItYm94IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgd2lkdGg6IDI4MHB4O1xcbiAgICBoZWlnaHQ6IDUycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxufVxcblxcbi5lcnJvci1ib3ggPiAqIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4uZXJyb3Itc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWNhcm1pbmUtcGluayk7XFxufVxcblxcbi5lcnJvci1ib2R5IHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDExMnB4KTtcXG59XFxuXFxuLmVycm9yLWJvZHkgPiAqIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG4uZXJyb3ItYm9keSBzbWFsbCxcXG4uY2xvc2UtZXJyb3Ige1xcbiAgICBvcGFjaXR5OiAuNztcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcbn1cXG5cXG4uY2xvc2UtZXJyb3Ige1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiA1MnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDRweCA0cHggMDtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS10cmFucGFyZW50MSk7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbn1cXG5cXG4uY2xvc2UtZXJyb3I6aG92ZXIsXFxuLmNsb3NlLWVycm9yOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDJweDtcXG59XFxuXFxuLm1vZGFsLmxvYWRpbmcgLmxvYWRlcixcXG4ubW9kYWwuYWxlcnQgLmVycm9yLWJveCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIG1hcmdpbjogYXV0byBhdXRvIGF1dG8gMjB2dztcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMXJlbSAxcmVtO1xcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IGNsYW1wKDEuM3JlbSwgMTB2dywgMS43cmVtKTtcXG4gICAgb3BhY2l0eTogLjg7XFxufVxcblxcbi50ZW1wZXJhdHVyZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC1zaXplOiBjbGFtcCg2cmVtLCAxMHZ3LCA4cmVtKTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyLjVyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4udGVtcGVyYXR1cmUsXFxuLm1vcmUtaW5mbyB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLnRlbXBlcmF0dXJlLmRlZy1jOjphZnRlcixcXG4udGVtcGVyYXR1cmUuZGVnLWMgKyAubW9yZS1pbmZvIC5pbmZvLWZlZWxzOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcMjEwM1xcXCI7XFxufVxcblxcbi50ZW1wZXJhdHVyZS5kZWctZjo6YWZ0ZXIsXFxuLnRlbXBlcmF0dXJlLmRlZy1mICsgLm1vcmUtaW5mbyAuaW5mby1mZWVsczo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXDIxMDlcXFwiO1xcbn1cXG5cXG4udGVtcGVyYXR1cmUuZGVnLWM6OmFmdGVyLFxcbi50ZW1wZXJhdHVyZS5kZWctZjo6YWZ0ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi50ZW1wZXJhdHVyZS5kZWctYyArIC5tb3JlLWluZm8gLmluZm8td2luZDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiIE1QU1xcXCI7XFxufVxcblxcbi50ZW1wZXJhdHVyZSArIC5tb3JlLWluZm8gLmluZm8taHVtaWQ6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXFwwMDI1XFxcIjtcXG59XFxuXFxuLnRlbXBlcmF0dXJlLmRlZy1mICsgLm1vcmUtaW5mbyAuaW5mby13aW5kOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCIgTVBIXFxcIjtcXG59XFxuXFxuLm1vcmUtaW5mbyB7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0tdHJhbnBhcmVudDEpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIHBhZGRpbmc6IDAgMCAwIDFyZW07XFxuICAgIG9wYWNpdHk6IC44O1xcbn1cXG5cXG4ubW9yZS1pbmZvID4gKiB7XFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc4MHB4KSB7XFxuICAgIC5zZWFyY2gtZGl2IHtcXG4gICAgICAgIG1hcmdpbjogMCAxcmVtIDAgMXJlbTtcXG4gICAgICAgIG1heC13aWR0aDogNzgwcHg7XFxuICAgIH1cXG4gICAgLm1haW4ge1xcbiAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG8gYXV0byAwO1xcbiAgICB9XFxuICAgIC5kZXNjcmlwdGlvbiB7XFxuICAgICAgICBtYXJnaW46IDAgMCAuNXJlbSAwO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDE0cHgpIHtcXG4gICAgLmNvbnRhaW5lciB7XFxuICAgICAgICBwYWRkaW5nOiAuMnJlbSAwIDAgMDtcXG4gICAgfVxcbiAgICAuc2VhcmNoLWRpdiB7XFxuICAgICAgICBtYXJnaW46IDAgLjJyZW0gMCAuMnJlbTtcXG4gICAgICAgIG1heC13aWR0aDogNDE0cHg7XFxuICAgIH1cXG4gICAgLm1haW4ge1xcbiAgICAgICAgcGFkZGluZzogLjVyZW0gLjVyZW0gLjVyZW0gLjVyZW07XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGxvYWREYXRhID0gYXN5bmMgKGxvYyA9ICdDYWJhbmF0dWFuJykgPT4ge1xuICAgIGNvbnN0IGtleSA9ICdlZWVjODM5YTRkOTk3MzA5NWZkNTIwYjQzODE2NzcyMCc7XG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2N9JkFQUElEPSR7a2V5fSZ1bml0cz1tZXRyaWNgO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcblxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVzcG9uc2UpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZERhdGE7XG4iLCJpbXBvcnQgRmF2aWNvbiBmcm9tICcuL2dyZXktY2xvdWQtMS5zdmcnO1xuXG5jb25zdCBzZXRMYW5ndWFnZSA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKS5zZXRBdHRyaWJ1dGUoJ2xhbmcnLCAnZW4nKTtcblxuY29uc3Qgc2V0dXBIZWFkVGFnID0gKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCcpO1xuICAgIGNvbnN0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RpdGxlJyk7XG5cbiAgICBjb25zdCBuZXdNZXRhRWRnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21ldGEnKTtcbiAgICBjb25zdCBuZXdMaW5rTWF0ZXJpYWxJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgIGNvbnN0IG5ld0xpbmtGYXZpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuXG4gICAgbmV3TWV0YUVkZ2Uuc2V0QXR0cmlidXRlKCdodHRwLWVxdWl2JywgJ1gtVUEtQ29tcGF0aWJsZScpO1xuICAgIG5ld01ldGFFZGdlLnNldEF0dHJpYnV0ZSgnY29udGVudCcsICdJRT1lZGdlJyk7XG4gICAgbmV3TGlua01hdGVyaWFsSWNvbi5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdzdHlsZXNoZWV0Jyk7XG4gICAgbmV3TGlua01hdGVyaWFsSWNvblxuICAgICAgICAuc2V0QXR0cmlidXRlKCdocmVmJywgJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnMrT3V0bGluZWQnKTtcbiAgICBuZXdMaW5rRmF2aWNvbi5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdpY29uJyk7XG4gICAgbmV3TGlua0Zhdmljb24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2ltYWdlL3BuZycpO1xuICAgIG5ld0xpbmtGYXZpY29uLnNldEF0dHJpYnV0ZSgnaHJlZicsIEZhdmljb24pO1xuXG4gICAgaGVhZEVsZW1lbnQuaW5zZXJ0QmVmb3JlKG5ld01ldGFFZGdlLCB0aXRsZUVsZW1lbnQpO1xuICAgIGhlYWRFbGVtZW50Lmluc2VydEJlZm9yZShuZXdMaW5rTWF0ZXJpYWxJY29uLCB0aXRsZUVsZW1lbnQpO1xuICAgIGhlYWRFbGVtZW50LmFwcGVuZENoaWxkKG5ld0xpbmtGYXZpY29uKTtcbn07XG5cbmNvbnN0IGlzRGF5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGhvdXJzID0gKG5ldyBEYXRlKCkpLmdldEhvdXJzKCk7XG4gICAgcmV0dXJuIChob3VycyA+PSA2ICYmIGhvdXJzIDwgMTgpO1xufTtcblxuY29uc3Qgc2V0QmFja2dyb3VuZCA9ICgpID0+IHtcbiAgICBpZiAoIWlzRGF5KCkpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ2RhcmstbW9kZScpO1xuICAgIH1cbn07XG5cbmNvbnN0IGNyZWF0ZUNvbnRhaW5lciA9ICgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmluc2VydEJlZm9yZShkaXYsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgc2NyaXB0JykpO1xufTtcblxuY29uc3QgY3JlYXRlU2VhcmNoID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnbm92YWxpZGF0ZScsIHRydWUpO1xuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3NlYXJjaElucHV0Jyk7XG4gICAgc2VhcmNoLnNldEF0dHJpYnV0ZSgndHlwZScsICdzZWFyY2gnKTtcbiAgICBzZWFyY2guc2V0QXR0cmlidXRlKCdpZCcsICdzZWFyY2hJbnB1dCcpO1xuICAgIHNlYXJjaC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0xvY2F0aW9uJyk7XG4gICAgYnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcblxuICAgIGRpdi5jbGFzc05hbWUgPSAnc2VhcmNoLWRpdic7XG4gICAgc2VhcmNoLmNsYXNzTmFtZSA9ICdzZWFyY2gtaW5wdXQnO1xuICAgIGJ0bi5jbGFzc05hbWUgPSAnc2VhcmNoLWJ0bic7XG5cbiAgICBsYWJlbC50ZXh0Q29udGVudCA9ICdTZWFyY2gnO1xuICAgIGJ0bi5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCB2YS1taWRcIj5zZWFyY2g8L3NwYW4+JztcblxuICAgIGRpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHNlYXJjaCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGJ0bik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkaXYpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKS5hcHBlbmRDaGlsZChmb3JtKTtcbn07XG5cbmNvbnN0IGNyZWF0ZU1haW4gPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcblxuICAgIG1haW4uY2xhc3NOYW1lID0gJ21haW4nO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpLmFwcGVuZENoaWxkKG1haW4pO1xufTtcblxuY29uc3QgY3JlYXRlTW9kYWxDb250YWluZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZGl2Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdtb2RhbCc7XG4gICAgZGl2Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbW9kYWwnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJykuYXBwZW5kQ2hpbGQoZGl2Q29udGFpbmVyKTtcbn07XG5cbmNvbnN0IGNyZWF0ZU1vZGFsTG9hZGluZyA9ICgpID0+IHtcbiAgICBjb25zdCBkaXZMb2FkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZMb2FkZXIuY2xhc3NOYW1lID0gJ2xvYWRlcic7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJykuYXBwZW5kQ2hpbGQoZGl2TG9hZGVyKTtcbn07XG5cbmNvbnN0IGNyZWF0ZU1vZGFsRXJyb3IgPSAoKSA9PiB7XG4gICAgY29uc3QgZXJyb3JCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBiaWdJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IGVycm9yQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBjb25zdCBzbWFsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NtYWxsJyk7XG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIGVycm9yQm94LmNsYXNzTmFtZSA9ICdlcnJvci1ib3gnO1xuICAgIGJpZ0ljb24uY2xhc3NOYW1lID0gJ21hdGVyaWFsLWljb25zLW91dGxpbmVkIHZhLW1pZCBlcnJvci1zcGFuJztcbiAgICBlcnJvckJvZHkuY2xhc3NOYW1lID0gJ2Vycm9yLWJvZHknO1xuICAgIGNsb3NlQnRuLmNsYXNzTmFtZSA9ICdjbG9zZS1lcnJvcic7XG5cbiAgICBzbWFsbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Vycm9yTWVzc2FnZScpO1xuICAgIGNsb3NlQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2xvc2VFcnJvcicpO1xuXG4gICAgYmlnSWNvbi5pbm5lclRleHQgPSAnZXJyb3Jfb3V0bGluZSc7XG4gICAgbGFiZWwuaW5uZXJUZXh0ID0gJ0Vycm9yJztcbiAgICBjbG9zZUJ0bi5pbm5lckhUTUwgPSAnQ0xPU0UnO1xuXG4gICAgZXJyb3JCb2R5LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBlcnJvckJvZHkuYXBwZW5kQ2hpbGQoc21hbGwpO1xuICAgIGVycm9yQm94LmFwcGVuZENoaWxkKGJpZ0ljb24pO1xuICAgIGVycm9yQm94LmFwcGVuZENoaWxkKGVycm9yQm9keSk7XG4gICAgZXJyb3JCb3guYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpLmFwcGVuZENoaWxkKGVycm9yQm94KTtcbn07XG5cbmNvbnN0IGNyZWF0ZU1vZGFscyA9ICgpID0+IHtcbiAgICBjcmVhdGVNb2RhbENvbnRhaW5lcigpO1xuICAgIGNyZWF0ZU1vZGFsTG9hZGluZygpO1xuICAgIGNyZWF0ZU1vZGFsRXJyb3IoKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUZvcmVjYXN0VGVtcGxhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCBwYXJhRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgYnRuVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHBhcmFGZWVsc0xpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcGFyYVdpbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcGFyYUh1bWlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgYnRuVGVtcC5jbGFzc05hbWUgPSAndGVtcGVyYXR1cmUgZGVnLWMnO1xuICAgIHBhcmFEZXNjcmlwdGlvbi5jbGFzc05hbWUgPSAnZGVzY3JpcHRpb24nO1xuICAgIGRpdi5jbGFzc05hbWUgPSAnbW9yZS1pbmZvJztcbiAgICBwYXJhRmVlbHNMaWtlLmNsYXNzTmFtZSA9ICdpbmZvLWZlZWxzJztcbiAgICBwYXJhV2luZC5jbGFzc05hbWUgPSAnaW5mby13aW5kJztcbiAgICBwYXJhSHVtaWQuY2xhc3NOYW1lID0gJ2luZm8taHVtaWQnO1xuXG4gICAgaGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyJyk7XG4gICAgcGFyYURlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzY3JpcHRpb24nKTtcbiAgICBidG5UZW1wLnNldEF0dHJpYnV0ZSgnaWQnLCAndGVtcGVyYXR1cmUnKTtcbiAgICBwYXJhRmVlbHNMaWtlLnNldEF0dHJpYnV0ZSgnaWQnLCAnaW5mb0ZlZWxzJyk7XG4gICAgcGFyYVdpbmQuc2V0QXR0cmlidXRlKCdpZCcsICdpbmZvV2luZCcpO1xuICAgIHBhcmFIdW1pZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2luZm9IdW1pZCcpO1xuXG4gICAgaGVhZGVyLmlubmVyVGV4dCA9ICdjaXR5IG5hbWUsIGNvdW50cnknO1xuICAgIHBhcmFEZXNjcmlwdGlvbi5pbm5lclRleHQgPSAnZGVzY3JpcHRpb24nO1xuICAgIGJ0blRlbXAuaW5uZXJIVE1MID0gNjk7XG4gICAgcGFyYUZlZWxzTGlrZS5pbm5lckhUTUwgPSAnRmVlbHMgbGlrZTogPHNwYW4+Njk8c3Bhbj4nO1xuICAgIHBhcmFXaW5kLmlubmVySFRNTCA9ICdXaW5kIFNwZWVkOiA8c3Bhbj42OTxzcGFuPic7XG4gICAgcGFyYUh1bWlkLmlubmVySFRNTCA9ICdIdW1pZGl0eTogPHNwYW4+Njk8c3Bhbj4nO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKHBhcmFGZWVsc0xpa2UpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChwYXJhV2luZCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHBhcmFIdW1pZCk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJykuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJykuYXBwZW5kQ2hpbGQocGFyYURlc2NyaXB0aW9uKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJykuYXBwZW5kQ2hpbGQoYnRuVGVtcCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpLmFwcGVuZENoaWxkKGRpdik7XG59O1xuXG5jb25zdCBjcmVhdGVBcHAgPSAoKSA9PiB7XG4gICAgY3JlYXRlQ29udGFpbmVyKCk7XG4gICAgY3JlYXRlU2VhcmNoKCk7XG4gICAgY3JlYXRlTWFpbigpO1xuICAgIGNyZWF0ZU1vZGFscygpO1xuICAgIGNyZWF0ZUZvcmVjYXN0VGVtcGxhdGUoKTtcbn07XG5cbmNvbnN0IHNldHVwID0gKCkgPT4ge1xuICAgIHNldExhbmd1YWdlKCk7XG4gICAgc2V0dXBIZWFkVGFnKCk7XG4gICAgc2V0QmFja2dyb3VuZCgpO1xuICAgIGNyZWF0ZUFwcCgpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2V0dXA7XG4iLCJpbXBvcnQgbG9hZERhdGEgZnJvbSAnLi9hcGknO1xuXG5jb25zdCB2YXJpYWJsZSA9ICgoKSA9PiB7XG4gICAgbGV0IGtleWJvYXJkRXZlbnRLZXk7XG4gICAgbGV0IHRlbXA7XG4gICAgbGV0IGZlZWxzO1xuICAgIGxldCB3aW5kO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAga2V5Ym9hcmRFdmVudEtleSxcbiAgICAgICAgdGVtcCxcbiAgICAgICAgZmVlbHMsXG4gICAgICAgIHdpbmQsXG4gICAgfTtcbn0pKCk7XG5cbmNvbnN0IHByZXZlbnRLZXlkb3duRXhjZXB0ID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKHZhcmlhYmxlLmtleWJvYXJkRXZlbnRLZXkgIT09IGV2ZW50LmtleSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbn07XG5cbmNvbnN0IGFkZEtleWRvd25QcmV2ZW50aW9uRXhjZXB0ID0gKGtleSkgPT4ge1xuICAgIHZhcmlhYmxlLmtleWJvYXJkRXZlbnRLZXkgPSBrZXk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBwcmV2ZW50S2V5ZG93bkV4Y2VwdCk7XG59O1xuXG5jb25zdCByZW1vdmVLZXlkb3duUHJldmVudGlvbiA9ICgpID0+IHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHByZXZlbnRLZXlkb3duRXhjZXB0KTtcbn07XG5cbmNvbnN0IGZvY3VzRWxlbWVudCA9IChlbGVtZW50KSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KS5mb2N1cygpO1xufTtcblxuY29uc3QgdG9nZ2xlTG9hZGluZyA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwnKS5jbGFzc0xpc3QudG9nZ2xlKCdsb2FkaW5nJyk7XG59O1xuXG5jb25zdCB0b2dnbGVFcnJvciA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwnKS5jbGFzc0xpc3QudG9nZ2xlKCdhbGVydCcpO1xuICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsJykuY2xhc3NMaXN0LmNvbnRhaW5zKCdhbGVydCcpKSB7XG4gICAgICAgIHJlbW92ZUtleWRvd25QcmV2ZW50aW9uKCk7XG4gICAgICAgIGZvY3VzRWxlbWVudCgnI3NlYXJjaElucHV0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYWRkS2V5ZG93blByZXZlbnRpb25FeGNlcHQoJ0VudGVyJyk7XG4gICAgICAgIGZvY3VzRWxlbWVudCgnI2Nsb3NlRXJyb3InKTtcbiAgICB9XG59O1xuXG5jb25zdCBlcnJvckhhbmRsZXIgPSAoZXJyb3IpID0+IHtcbiAgICB0b2dnbGVFcnJvcigpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvck1lc3NhZ2UnKS5pbm5lclRleHQgPSBlcnJvcjtcbn07XG5cbmNvbnN0IGNhcGl0YWxpemVGaXJzdExldHRlciA9IChzdHJpbmcpID0+IHtcbiAgICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHJldHVybiAnJztcbiAgICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xufTtcblxuY29uc3QgY2Vsc2l1c1RvRmFocmVuaGVpdCA9IChjZWxzaXVzKSA9PiB7XG4gICAgbGV0IG51bSA9IGNlbHNpdXMgKiA5O1xuICAgIG51bSAvPSA1O1xuICAgIG51bSArPSAzMjtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChudW0pO1xufTtcblxuY29uc3QgbWV0ZXJQZXJTZWNvbmRUb01pbGVzUGVySG91ciA9IChtcHMpID0+IHtcbiAgICBjb25zdCBudW0gPSBtcHMgKiAyLjIzNjk0O1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG51bSAqIDEwKSAvIDEwO1xufTtcblxuY29uc3QgZGlzcGxheUluQ2Vsc2l1cyA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcGVyYXR1cmUnKS5pbm5lclRleHQgPSB2YXJpYWJsZS50ZW1wO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbmZvRmVlbHMgc3BhbicpLmlubmVyVGV4dCA9IHZhcmlhYmxlLmZlZWxzO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbmZvV2luZCBzcGFuJykuaW5uZXJUZXh0ID0gdmFyaWFibGUud2luZDtcbn07XG5cbmNvbnN0IGRpc3BsYXlJbkZhaHJlbmhlaXQgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXBlcmF0dXJlJykuaW5uZXJUZXh0ID0gY2Vsc2l1c1RvRmFocmVuaGVpdCh2YXJpYWJsZS50ZW1wKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5mb0ZlZWxzIHNwYW4nKS5pbm5lclRleHQgPSBjZWxzaXVzVG9GYWhyZW5oZWl0KHZhcmlhYmxlLmZlZWxzKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5mb1dpbmQgc3BhbicpLmlubmVyVGV4dCA9IG1ldGVyUGVyU2Vjb25kVG9NaWxlc1BlckhvdXIodmFyaWFibGUud2luZCk7XG59O1xuXG5jb25zdCB0b2dnbGVVbml0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXBlcmF0dXJlJyk7XG5cbiAgICBpZiAodGVtcGVyYXR1cmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWctYycpKSB7XG4gICAgICAgIHRlbXBlcmF0dXJlLmNsYXNzTmFtZSA9ICd0ZW1wZXJhdHVyZSBkZWctZic7XG4gICAgICAgIGRpc3BsYXlJbkZhaHJlbmhlaXQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0ZW1wZXJhdHVyZS5jbGFzc05hbWUgPSAndGVtcGVyYXR1cmUgZGVnLWMnO1xuICAgICAgICBkaXNwbGF5SW5DZWxzaXVzKCk7XG4gICAgfVxufTtcblxuY29uc3QgZGlzcGxheUZvcmVjYXN0ID0gKGRhdGEpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVhZGVyJyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCB0ZW1wZXJhdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wZXJhdHVyZScpO1xuICAgIGNvbnN0IGluZm9GZWVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbmZvRmVlbHMgc3BhbicpO1xuICAgIGNvbnN0IGluZm9XaW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2luZm9XaW5kIHNwYW4nKTtcbiAgICBjb25zdCBpbmZvSHVtaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5mb0h1bWlkIHNwYW4nKTtcblxuICAgIHZhcmlhYmxlLnRlbXAgPSBNYXRoLnJvdW5kKGRhdGEubWFpbi50ZW1wKTtcbiAgICB2YXJpYWJsZS5mZWVscyA9IE1hdGgucm91bmQoZGF0YS5tYWluLmZlZWxzX2xpa2UpO1xuICAgIHZhcmlhYmxlLndpbmQgPSBNYXRoLnJvdW5kKGRhdGEud2luZC5zcGVlZCAqIDEwKSAvIDEwO1xuXG4gICAgaGVhZGVyLmlubmVyVGV4dCA9IGAke2RhdGEubmFtZX0sICR7ZGF0YS5zeXMuY291bnRyeX1gO1xuICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGNhcGl0YWxpemVGaXJzdExldHRlcihkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24pO1xuICAgIHRlbXBlcmF0dXJlLmlubmVyVGV4dCA9IHZhcmlhYmxlLnRlbXA7XG4gICAgaW5mb0ZlZWxzLmlubmVyVGV4dCA9IHZhcmlhYmxlLmZlZWxzO1xuICAgIGluZm9XaW5kLmlubmVyVGV4dCA9IHZhcmlhYmxlLndpbmQ7XG4gICAgaW5mb0h1bWlkLmlubmVyVGV4dCA9IGRhdGEubWFpbi5odW1pZGl0eTtcblxuICAgIGlmICh0ZW1wZXJhdHVyZS5jbGFzc0xpc3QuY29udGFpbnMoJ2RlZy1mJykpIHtcbiAgICAgICAgZGlzcGxheUluRmFocmVuaGVpdCgpO1xuICAgIH1cbn07XG5cbmNvbnN0IHByb2Nlc3NJbnB1dCA9IGFzeW5jIChsb2MpID0+IHtcbiAgICB0cnkge1xuICAgICAgICB0b2dnbGVMb2FkaW5nKCk7XG4gICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgICBhZGRLZXlkb3duUHJldmVudGlvbkV4Y2VwdCgpO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgbG9hZERhdGEobG9jKTtcbiAgICAgICAgZGlzcGxheUZvcmVjYXN0KGRhdGEpO1xuICAgICAgICByZW1vdmVLZXlkb3duUHJldmVudGlvbigpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoSW5wdXQnKS5mb2N1cygpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGVycm9ySGFuZGxlcihlcnJvci5zdGF0dXNUZXh0KTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgICB0b2dnbGVMb2FkaW5nKCk7XG4gICAgfVxufTtcblxuY29uc3Qgc3VibWl0SGFuZGxlciA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaElucHV0Jyk7XG5cbiAgICBpZiAoIXNlYXJjaElucHV0LnZhbHVlKSB7XG4gICAgICAgIHJldHVybiBlcnJvckhhbmRsZXIoJ0lucHV0IGZpZWxkIGVtcHR5IScpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygc2VhcmNoSW5wdXQudmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBlcnJvckhhbmRsZXIoJ0lucHV0IGlzIG5vdCBhIHN0cmluZyEnKTtcbiAgICB9XG5cbiAgICBpZiAoc2VhcmNoSW5wdXQudmFsdWUubGVuZ3RoIDw9IDIpIHtcbiAgICAgICAgcmV0dXJuIGVycm9ySGFuZGxlcignSW5wdXQgdG9vIHNob3J0IScpO1xuICAgIH1cblxuICAgIGlmIChzZWFyY2hJbnB1dC52YWx1ZS5sZW5ndGggPiAyMCkge1xuICAgICAgICByZXR1cm4gZXJyb3JIYW5kbGVyKCdJbnB1dCB0b28gbG9uZyEnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvY2Vzc0lucHV0KHNlYXJjaElucHV0LnZhbHVlKTtcbn07XG5cbmNvbnN0IGV2ZW50cyA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0Jywgc3VibWl0SGFuZGxlcik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlRXJyb3InKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUVycm9yKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcGVyYXR1cmUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZVVuaXQpO1xufTtcblxuZXhwb3J0IHsgcHJvY2Vzc0lucHV0LCBldmVudHMgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi93ZWF0aGVyLWFwcC9cIjsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBzZXR1cCBmcm9tICcuL2RvbSc7XG5pbXBvcnQgeyBwcm9jZXNzSW5wdXQsIGV2ZW50cyB9IGZyb20gJy4vZXZlbnRzJztcblxuY29uc3Qgb25sb2FkID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIHNldHVwKCk7XG4gICAgICAgIGF3YWl0IHByb2Nlc3NJbnB1dCgnVGFsYXZlcmEsIHBoJyk7XG4gICAgICAgIGV2ZW50cygpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gJzxoMT5Pb3BzISBTb21ldGhpbmcgd2VudCB3cm9uZy48L2gxPic7XG4gICAgfVxufTtcblxub25sb2FkKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=