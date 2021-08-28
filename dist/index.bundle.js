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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLHNCQUFzQix1QkFBdUIsT0FBTyxLQUFLLFVBQVUsc0JBQXNCLHVCQUF1QixPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FB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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsS0FBSyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JMUTs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIsVUFBVSxJQUFJLGlCQUFpQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNkNBQVE7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcktoQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7QUNmcUI7QUFDSztBQUNzQjs7QUFFaEQ7QUFDQTtBQUNBLFFBQVEsNkNBQUs7QUFDYixjQUFjLHFEQUFZO0FBQzFCLFFBQVEsK0NBQU07QUFDZCxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWxpZ2h0OiBoc2woMCwgMCUsIDkyJSk7XFxuICAgIC0tZGFyazogaHNsKDAsIDAlLCAxMiUpO1xcbiAgICAtLXRyYW5wYXJlbnQxOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIC0tdHJhbnBhcmVudDI6IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgLS1saWdodC1jYXJtaW5lLXBpbms6IGhzbCgwLCA3NSUsIDY1JSk7XFxuXFxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tbGlnaHQpO1xcbiAgICAtLWNvbG9yOiB2YXIoLS1kYXJrKVxcbn1cXG5cXG4uZGFyay1tb2RlIHtcXG4gICAgLS10cmFucGFyZW50MTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xcbiAgICAtLXRyYW5wYXJlbnQyOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuXFxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tZGFyayk7XFxuICAgIC0tY29sb3I6IHZhcigtLWxpZ2h0KTtcXG59XFxuXFxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7ICBcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OlZlcmRhbmEsIEdlbmV2YSwgXFxcIkRlamFWdSBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3IpO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMnJlbSwgMTB2dywgM3JlbSk7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b24sIFxcbmlucHV0IHtcXG4gICAgZm9udC1mYW1pbHk6VmVyZGFuYSwgR2VuZXZhLCBcXFwiRGVqYVZ1IFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG59XFxuXFxuYnV0dG9uOmZvY3VzLFxcbmlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogMnB4IHNvbGlkIHZhcigtLWNvbG9yKTtcXG59XFxuXFxuYnV0dG9uOmZvY3VzOm5vdCg6Zm9jdXMtdmlzaWJsZSksXFxuaW5wdXQ6Zm9jdXM6bm90KDpmb2N1cy12aXNpYmxlKSB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmJ1dHRvbjpmb2N1cy12aXNpYmxlICxcXG5pbnB1dDpmb2N1cy12aXNpYmxlICB7XFxuICAgIG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS1jb2xvcik7XFxufVxcblxcbi52YS1taWQge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBwYWRkaW5nOiAxcmVtIDAgMCAwO1xcbn1cXG5cXG4uc2VhcmNoLWRpdiB7XFxuICAgIG1heC13aWR0aDogMzYwcHg7XFxuICAgIG1hcmdpbjogMCAxcmVtIDAgYXV0bztcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnBhcmVudDEpO1xcbn1cXG5cXG4uc2VhcmNoLWRpdiA+ICoge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi5zZWFyY2gtaW5wdXQge1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gOTEuOTdweCk7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgbWFyZ2luOiAwIDVweCAwIDhweDtcXG4gICAgcGFkZGluZzogNXB4IC41cmVtIDVweCAuNXJlbTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuLnNlYXJjaC1idG4ge1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFucGFyZW50MSk7XFxufVxcblxcbi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGluc2V0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFucGFyZW50Mik7XFxuICAgIHotaW5kZXg6IDM7XFxufVxcblxcbi5tb2RhbC5sb2FkaW5nIHtcXG4gICAgY3Vyc29yOiB3YWl0O1xcbn1cXG5cXG4ubW9kYWwubG9hZGluZyxcXG4ubW9kYWwuYWxlcnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubG9hZGVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBoZWlnaHQ6IDEyMHB4O1xcbiAgICBib3JkZXI6IDE2cHggc29saWQgdmFyKC0tdHJhbnBhcmVudDEpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlci10b3A6IDE2cHggc29saWQgdmFyKC0tY29sb3IpO1xcbiAgICAvKiBTYWZhcmkgKi9cXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xcbiAgICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcbiAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XFxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcXG4gICAgLyogU2FmYXJpICovXFxuICAgIDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcbiAgICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XFxufVxcblxcbi5lcnJvci1ib3gge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB3aWR0aDogMjgwcHg7XFxuICAgIGhlaWdodDogNTJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuLmVycm9yLWJveCA+ICoge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi5lcnJvci1zcGFuIHtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtY2FybWluZS1waW5rKTtcXG59XFxuXFxuLmVycm9yLWJvZHkge1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTEycHgpO1xcbn1cXG5cXG4uZXJyb3ItYm9keSA+ICoge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcGFkZGluZzogMCAxMHB4IDAgMTBweDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbi5lcnJvci1ib2R5IHNtYWxsLFxcbi5jbG9zZS1lcnJvciB7XFxuICAgIG9wYWNpdHk6IC43O1xcbiAgICBmb250LXNpemU6IDExcHg7XFxufVxcblxcbi5jbG9zZS1lcnJvciB7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDUycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgNHB4IDRweCAwO1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHZhcigtLXRyYW5wYXJlbnQxKTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxufVxcblxcbi5jbG9zZS1lcnJvcjpob3ZlcixcXG4uY2xvc2UtZXJyb3I6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogMnB4O1xcbn1cXG5cXG4ubW9kYWwubG9hZGluZyAubG9hZGVyLFxcbi5tb2RhbC5hbGVydCAuZXJyb3ItYm94IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5tYWluIHtcXG4gICAgbWFyZ2luOiBhdXRvIGF1dG8gYXV0byAyMHZ3O1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDFyZW0gMXJlbSAxcmVtIDFyZW07XFxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMS4zcmVtLCAxMHZ3LCAxLjdyZW0pO1xcbiAgICBvcGFjaXR5OiAuODtcXG59XFxuXFxuLnRlbXBlcmF0dXJlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDZyZW0sIDEwdncsIDhyZW0pO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIuNXJlbTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi50ZW1wZXJhdHVyZSxcXG4ubW9yZS1pbmZvIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4udGVtcGVyYXR1cmUuZGVnLWM6OmFmdGVyLFxcbi50ZW1wZXJhdHVyZS5kZWctYyArIC5tb3JlLWluZm8gLmluZm8tZmVlbHM6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXFwyMTAzXFxcIjtcXG59XFxuXFxuLnRlbXBlcmF0dXJlLmRlZy1mOjphZnRlcixcXG4udGVtcGVyYXR1cmUuZGVnLWYgKyAubW9yZS1pbmZvIC5pbmZvLWZlZWxzOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcMjEwOVxcXCI7XFxufVxcblxcbi50ZW1wZXJhdHVyZS5kZWctYzo6YWZ0ZXIsXFxuLnRlbXBlcmF0dXJlLmRlZy1mOjphZnRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxcmVtO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnRlbXBlcmF0dXJlLmRlZy1jICsgLm1vcmUtaW5mbyAuaW5mby13aW5kOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCIgTVBTXFxcIjtcXG59XFxuXFxuLnRlbXBlcmF0dXJlICsgLm1vcmUtaW5mbyAuaW5mby1odW1pZDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXDAwMjVcXFwiO1xcbn1cXG5cXG4udGVtcGVyYXR1cmUuZGVnLWYgKyAubW9yZS1pbmZvIC5pbmZvLXdpbmQ6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIiBNUEhcXFwiO1xcbn1cXG5cXG4ubW9yZS1pbmZvIHtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS10cmFucGFyZW50MSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgcGFkZGluZzogMCAwIDAgMXJlbTtcXG4gICAgb3BhY2l0eTogLjg7XFxufVxcblxcbi5tb3JlLWluZm8gPiAqIHtcXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzgwcHgpIHtcXG4gICAgLnNlYXJjaC1kaXYge1xcbiAgICAgICAgbWFyZ2luOiAwIDFyZW0gMCAxcmVtO1xcbiAgICAgICAgbWF4LXdpZHRoOiA3ODBweDtcXG4gICAgfVxcbiAgICAubWFpbiB7XFxuICAgICAgICBtYXJnaW46IGF1dG8gYXV0byBhdXRvIDA7XFxuICAgIH1cXG4gICAgLmRlc2NyaXB0aW9uIHtcXG4gICAgICAgIG1hcmdpbjogMCAwIC41cmVtIDA7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTRweCkge1xcbiAgICAuY29udGFpbmVyIHtcXG4gICAgICAgIHBhZGRpbmc6IC4ycmVtIDAgMCAwO1xcbiAgICB9XFxuICAgIC5zZWFyY2gtZGl2IHtcXG4gICAgICAgIG1hcmdpbjogMCAuMnJlbSAwIC4ycmVtO1xcbiAgICAgICAgbWF4LXdpZHRoOiA0MTRweDtcXG4gICAgfVxcbiAgICAubWFpbiB7XFxuICAgICAgICBwYWRkaW5nOiAuNXJlbSAuNXJlbSAuNXJlbSAuNXJlbTtcXG4gICAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2QixpQ0FBaUM7SUFDakMsaUNBQWlDO0lBQ2pDLHNDQUFzQzs7SUFFdEMsMEJBQTBCO0lBQzFCO0FBQ0o7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsdUNBQXVDOztJQUV2Qyx5QkFBeUI7SUFDekIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxzREFBc0Q7SUFDdEQsaUJBQWlCO0lBQ2pCLG1DQUFtQztJQUNuQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFD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aUI7QUFDckI7O0FBRUE7SUFDSTtRQUNJLHFCQUFxQjtRQUNyQixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLG9CQUFvQjtJQUN4QjtJQUNBO1FBQ0ksdUJBQXVCO1FBQ3ZCLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZ0NBQWdDO0lBQ3BDO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWxpZ2h0OiBoc2woMCwgMCUsIDkyJSk7XFxuICAgIC0tZGFyazogaHNsKDAsIDAlLCAxMiUpO1xcbiAgICAtLXRyYW5wYXJlbnQxOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIC0tdHJhbnBhcmVudDI6IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgLS1saWdodC1jYXJtaW5lLXBpbms6IGhzbCgwLCA3NSUsIDY1JSk7XFxuXFxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tbGlnaHQpO1xcbiAgICAtLWNvbG9yOiB2YXIoLS1kYXJrKVxcbn1cXG5cXG4uZGFyay1tb2RlIHtcXG4gICAgLS10cmFucGFyZW50MTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xcbiAgICAtLXRyYW5wYXJlbnQyOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuXFxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tZGFyayk7XFxuICAgIC0tY29sb3I6IHZhcigtLWxpZ2h0KTtcXG59XFxuXFxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7ICBcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OlZlcmRhbmEsIEdlbmV2YSwgXFxcIkRlamFWdSBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3IpO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMnJlbSwgMTB2dywgM3JlbSk7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b24sIFxcbmlucHV0IHtcXG4gICAgZm9udC1mYW1pbHk6VmVyZGFuYSwgR2VuZXZhLCBcXFwiRGVqYVZ1IFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG59XFxuXFxuYnV0dG9uOmZvY3VzLFxcbmlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogMnB4IHNvbGlkIHZhcigtLWNvbG9yKTtcXG59XFxuXFxuYnV0dG9uOmZvY3VzOm5vdCg6Zm9jdXMtdmlzaWJsZSksXFxuaW5wdXQ6Zm9jdXM6bm90KDpmb2N1cy12aXNpYmxlKSB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmJ1dHRvbjpmb2N1cy12aXNpYmxlICxcXG5pbnB1dDpmb2N1cy12aXNpYmxlICB7XFxuICAgIG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS1jb2xvcik7XFxufVxcblxcbi52YS1taWQge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBwYWRkaW5nOiAxcmVtIDAgMCAwO1xcbn1cXG5cXG4uc2VhcmNoLWRpdiB7XFxuICAgIG1heC13aWR0aDogMzYwcHg7XFxuICAgIG1hcmdpbjogMCAxcmVtIDAgYXV0bztcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnBhcmVudDEpO1xcbn1cXG5cXG4uc2VhcmNoLWRpdiA+ICoge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi5zZWFyY2gtaW5wdXQge1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gOTEuOTdweCk7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgbWFyZ2luOiAwIDVweCAwIDhweDtcXG4gICAgcGFkZGluZzogNXB4IC41cmVtIDVweCAuNXJlbTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuLnNlYXJjaC1idG4ge1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFucGFyZW50MSk7XFxufVxcblxcbi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGluc2V0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFucGFyZW50Mik7XFxuICAgIHotaW5kZXg6IDM7XFxufVxcblxcbi5tb2RhbC5sb2FkaW5nIHtcXG4gICAgY3Vyc29yOiB3YWl0O1xcbn1cXG5cXG4ubW9kYWwubG9hZGluZyxcXG4ubW9kYWwuYWxlcnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubG9hZGVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBoZWlnaHQ6IDEyMHB4O1xcbiAgICBib3JkZXI6IDE2cHggc29saWQgdmFyKC0tdHJhbnBhcmVudDEpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlci10b3A6IDE2cHggc29saWQgdmFyKC0tY29sb3IpO1xcbiAgICAvKiBTYWZhcmkgKi9cXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xcbiAgICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcbiAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XFxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcXG4gICAgLyogU2FmYXJpICovXFxuICAgIDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcbiAgICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XFxufVxcblxcbi5lcnJvci1ib3gge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB3aWR0aDogMjgwcHg7XFxuICAgIGhlaWdodDogNTJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuLmVycm9yLWJveCA+ICoge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi5lcnJvci1zcGFuIHtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtY2FybWluZS1waW5rKTtcXG59XFxuXFxuLmVycm9yLWJvZHkge1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTEycHgpO1xcbn1cXG5cXG4uZXJyb3ItYm9keSA+ICoge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcGFkZGluZzogMCAxMHB4IDAgMTBweDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbi5lcnJvci1ib2R5IHNtYWxsLFxcbi5jbG9zZS1lcnJvciB7XFxuICAgIG9wYWNpdHk6IC43O1xcbiAgICBmb250LXNpemU6IDExcHg7XFxufVxcblxcbi5jbG9zZS1lcnJvciB7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDUycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgNHB4IDRweCAwO1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHZhcigtLXRyYW5wYXJlbnQxKTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxufVxcblxcbi5jbG9zZS1lcnJvcjpob3ZlcixcXG4uY2xvc2UtZXJyb3I6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogMnB4O1xcbn1cXG5cXG4ubW9kYWwubG9hZGluZyAubG9hZGVyLFxcbi5tb2RhbC5hbGVydCAuZXJyb3ItYm94IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5tYWluIHtcXG4gICAgbWFyZ2luOiBhdXRvIGF1dG8gYXV0byAyMHZ3O1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDFyZW0gMXJlbSAxcmVtIDFyZW07XFxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMS4zcmVtLCAxMHZ3LCAxLjdyZW0pO1xcbiAgICBvcGFjaXR5OiAuODtcXG59XFxuXFxuLnRlbXBlcmF0dXJlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDZyZW0sIDEwdncsIDhyZW0pO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIuNXJlbTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi50ZW1wZXJhdHVyZSxcXG4ubW9yZS1pbmZvIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4udGVtcGVyYXR1cmUuZGVnLWM6OmFmdGVyLFxcbi50ZW1wZXJhdHVyZS5kZWctYyArIC5tb3JlLWluZm8gLmluZm8tZmVlbHM6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXFwyMTAzXFxcIjtcXG59XFxuXFxuLnRlbXBlcmF0dXJlLmRlZy1mOjphZnRlcixcXG4udGVtcGVyYXR1cmUuZGVnLWYgKyAubW9yZS1pbmZvIC5pbmZvLWZlZWxzOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcMjEwOVxcXCI7XFxufVxcblxcbi50ZW1wZXJhdHVyZS5kZWctYzo6YWZ0ZXIsXFxuLnRlbXBlcmF0dXJlLmRlZy1mOjphZnRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxcmVtO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnRlbXBlcmF0dXJlLmRlZy1jICsgLm1vcmUtaW5mbyAuaW5mby13aW5kOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCIgTVBTXFxcIjtcXG59XFxuXFxuLnRlbXBlcmF0dXJlICsgLm1vcmUtaW5mbyAuaW5mby1odW1pZDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXDAwMjVcXFwiO1xcbn1cXG5cXG4udGVtcGVyYXR1cmUuZGVnLWYgKyAubW9yZS1pbmZvIC5pbmZvLXdpbmQ6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIiBNUEhcXFwiO1xcbn1cXG5cXG4ubW9yZS1pbmZvIHtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS10cmFucGFyZW50MSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgcGFkZGluZzogMCAwIDAgMXJlbTtcXG4gICAgb3BhY2l0eTogLjg7XFxufVxcblxcbi5tb3JlLWluZm8gPiAqIHtcXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzgwcHgpIHtcXG4gICAgLnNlYXJjaC1kaXYge1xcbiAgICAgICAgbWFyZ2luOiAwIDFyZW0gMCAxcmVtO1xcbiAgICAgICAgbWF4LXdpZHRoOiA3ODBweDtcXG4gICAgfVxcbiAgICAubWFpbiB7XFxuICAgICAgICBtYXJnaW46IGF1dG8gYXV0byBhdXRvIDA7XFxuICAgIH1cXG4gICAgLmRlc2NyaXB0aW9uIHtcXG4gICAgICAgIG1hcmdpbjogMCAwIC41cmVtIDA7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTRweCkge1xcbiAgICAuY29udGFpbmVyIHtcXG4gICAgICAgIHBhZGRpbmc6IC4ycmVtIDAgMCAwO1xcbiAgICB9XFxuICAgIC5zZWFyY2gtZGl2IHtcXG4gICAgICAgIG1hcmdpbjogMCAuMnJlbSAwIC4ycmVtO1xcbiAgICAgICAgbWF4LXdpZHRoOiA0MTRweDtcXG4gICAgfVxcbiAgICAubWFpbiB7XFxuICAgICAgICBwYWRkaW5nOiAuNXJlbSAuNXJlbSAuNXJlbSAuNXJlbTtcXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgbG9hZERhdGEgPSBhc3luYyAobG9jID0gJ0NhYmFuYXR1YW4nKSA9PiB7XG4gICAgY29uc3Qga2V5ID0gJ2VlZWM4MzlhNGQ5OTczMDk1ZmQ1MjBiNDM4MTY3NzIwJztcbiAgICBjb25zdCB1cmwgPSBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jfSZBUFBJRD0ke2tleX0mdW5pdHM9bWV0cmljYDtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBtb2RlOiAnY29ycycgfSk7XG5cbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlc3BvbnNlKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWREYXRhO1xuIiwiaW1wb3J0IEZhdmljb24gZnJvbSAnLi9ncmV5LWNsb3VkLTEuc3ZnJztcblxuY29uc3Qgc2V0TGFuZ3VhZ2UgPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJykuc2V0QXR0cmlidXRlKCdsYW5nJywgJ2VuJyk7XG5cbmNvbnN0IHNldHVwSGVhZFRhZyA9ICgpID0+IHtcbiAgICBjb25zdCBoZWFkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKTtcbiAgICBjb25zdCB0aXRsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0aXRsZScpO1xuXG4gICAgY29uc3QgbmV3TWV0YUVkZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtZXRhJyk7XG4gICAgY29uc3QgbmV3TGlua01hdGVyaWFsSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICBjb25zdCBuZXdMaW5rRmF2aWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcblxuICAgIG5ld01ldGFFZGdlLnNldEF0dHJpYnV0ZSgnaHR0cC1lcXVpdicsICdYLVVBLUNvbXBhdGlibGUnKTtcbiAgICBuZXdNZXRhRWRnZS5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnLCAnSUU9ZWRnZScpO1xuICAgIG5ld0xpbmtNYXRlcmlhbEljb24uc2V0QXR0cmlidXRlKCdyZWwnLCAnc3R5bGVzaGVldCcpO1xuICAgIG5ld0xpbmtNYXRlcmlhbEljb25cbiAgICAgICAgLnNldEF0dHJpYnV0ZSgnaHJlZicsICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zK091dGxpbmVkJyk7XG4gICAgbmV3TGlua0Zhdmljb24uc2V0QXR0cmlidXRlKCdyZWwnLCAnaWNvbicpO1xuICAgIG5ld0xpbmtGYXZpY29uLnNldEF0dHJpYnV0ZSgndHlwZScsICdpbWFnZS9wbmcnKTtcbiAgICBuZXdMaW5rRmF2aWNvbi5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBGYXZpY29uKTtcblxuICAgIGhlYWRFbGVtZW50Lmluc2VydEJlZm9yZShuZXdNZXRhRWRnZSwgdGl0bGVFbGVtZW50KTtcbiAgICBoZWFkRWxlbWVudC5pbnNlcnRCZWZvcmUobmV3TGlua01hdGVyaWFsSWNvbiwgdGl0bGVFbGVtZW50KTtcbiAgICBoZWFkRWxlbWVudC5hcHBlbmRDaGlsZChuZXdMaW5rRmF2aWNvbik7XG59O1xuXG5jb25zdCBpc0RheSA9ICgpID0+IHtcbiAgICBjb25zdCBob3VycyA9IChuZXcgRGF0ZSgpKS5nZXRIb3VycygpO1xuICAgIHJldHVybiAoaG91cnMgPj0gNiAmJiBob3VycyA8IDE4KTtcbn07XG5cbmNvbnN0IHNldEJhY2tncm91bmQgPSAoKSA9PiB7XG4gICAgaWYgKCFpc0RheSgpKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuYWRkKCdkYXJrLW1vZGUnKTtcbiAgICB9XG59O1xuXG5jb25zdCBjcmVhdGVDb250YWluZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5pbnNlcnRCZWZvcmUoZGl2LCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5IHNjcmlwdCcpKTtcbn07XG5cbmNvbnN0IGNyZWF0ZVNlYXJjaCA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ25vdmFsaWRhdGUnLCB0cnVlKTtcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdzZWFyY2hJbnB1dCcpO1xuICAgIHNlYXJjaC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc2VhcmNoJyk7XG4gICAgc2VhcmNoLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VhcmNoSW5wdXQnKTtcbiAgICBzZWFyY2guc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdMb2NhdGlvbicpO1xuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG5cbiAgICBkaXYuY2xhc3NOYW1lID0gJ3NlYXJjaC1kaXYnO1xuICAgIHNlYXJjaC5jbGFzc05hbWUgPSAnc2VhcmNoLWlucHV0JztcbiAgICBidG4uY2xhc3NOYW1lID0gJ3NlYXJjaC1idG4nO1xuXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSAnU2VhcmNoJztcbiAgICBidG4uaW5uZXJIVE1MID0gJzxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgdmEtbWlkXCI+c2VhcmNoPC9zcGFuPic7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChzZWFyY2gpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChidG4pO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJykuYXBwZW5kQ2hpbGQoZm9ybSk7XG59O1xuXG5jb25zdCBjcmVhdGVNYWluID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG5cbiAgICBtYWluLmNsYXNzTmFtZSA9ICdtYWluJztcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKS5hcHBlbmRDaGlsZChtYWluKTtcbn07XG5cbmNvbnN0IGNyZWF0ZU1vZGFsQ29udGFpbmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpdkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdkNvbnRhaW5lci5jbGFzc05hbWUgPSAnbW9kYWwnO1xuICAgIGRpdkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21vZGFsJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGRpdkNvbnRhaW5lcik7XG59O1xuXG5jb25zdCBjcmVhdGVNb2RhbExvYWRpbmcgPSAoKSA9PiB7XG4gICAgY29uc3QgZGl2TG9hZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2TG9hZGVyLmNsYXNzTmFtZSA9ICdsb2FkZXInO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpLmFwcGVuZENoaWxkKGRpdkxvYWRlcik7XG59O1xuXG5jb25zdCBjcmVhdGVNb2RhbEVycm9yID0gKCkgPT4ge1xuICAgIGNvbnN0IGVycm9yQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYmlnSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBlcnJvckJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3Qgc21hbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzbWFsbCcpO1xuICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBlcnJvckJveC5jbGFzc05hbWUgPSAnZXJyb3ItYm94JztcbiAgICBiaWdJY29uLmNsYXNzTmFtZSA9ICdtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCB2YS1taWQgZXJyb3Itc3Bhbic7XG4gICAgZXJyb3JCb2R5LmNsYXNzTmFtZSA9ICdlcnJvci1ib2R5JztcbiAgICBjbG9zZUJ0bi5jbGFzc05hbWUgPSAnY2xvc2UtZXJyb3InO1xuXG4gICAgc21hbGwuc2V0QXR0cmlidXRlKCdpZCcsICdlcnJvck1lc3NhZ2UnKTtcbiAgICBjbG9zZUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Nsb3NlRXJyb3InKTtcblxuICAgIGJpZ0ljb24uaW5uZXJUZXh0ID0gJ2Vycm9yX291dGxpbmUnO1xuICAgIGxhYmVsLmlubmVyVGV4dCA9ICdFcnJvcic7XG4gICAgY2xvc2VCdG4uaW5uZXJIVE1MID0gJ0NMT1NFJztcblxuICAgIGVycm9yQm9keS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgZXJyb3JCb2R5LmFwcGVuZENoaWxkKHNtYWxsKTtcbiAgICBlcnJvckJveC5hcHBlbmRDaGlsZChiaWdJY29uKTtcbiAgICBlcnJvckJveC5hcHBlbmRDaGlsZChlcnJvckJvZHkpO1xuICAgIGVycm9yQm94LmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKS5hcHBlbmRDaGlsZChlcnJvckJveCk7XG59O1xuXG5jb25zdCBjcmVhdGVNb2RhbHMgPSAoKSA9PiB7XG4gICAgY3JlYXRlTW9kYWxDb250YWluZXIoKTtcbiAgICBjcmVhdGVNb2RhbExvYWRpbmcoKTtcbiAgICBjcmVhdGVNb2RhbEVycm9yKCk7XG59O1xuXG5jb25zdCBjcmVhdGVGb3JlY2FzdFRlbXBsYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgcGFyYURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGJ0blRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwYXJhRmVlbHNMaWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHBhcmFXaW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHBhcmFIdW1pZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIGJ0blRlbXAuY2xhc3NOYW1lID0gJ3RlbXBlcmF0dXJlIGRlZy1jJztcbiAgICBwYXJhRGVzY3JpcHRpb24uY2xhc3NOYW1lID0gJ2Rlc2NyaXB0aW9uJztcbiAgICBkaXYuY2xhc3NOYW1lID0gJ21vcmUtaW5mbyc7XG4gICAgcGFyYUZlZWxzTGlrZS5jbGFzc05hbWUgPSAnaW5mby1mZWVscyc7XG4gICAgcGFyYVdpbmQuY2xhc3NOYW1lID0gJ2luZm8td2luZCc7XG4gICAgcGFyYUh1bWlkLmNsYXNzTmFtZSA9ICdpbmZvLWh1bWlkJztcblxuICAgIGhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRlcicpO1xuICAgIHBhcmFEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgYnRuVGVtcC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RlbXBlcmF0dXJlJyk7XG4gICAgcGFyYUZlZWxzTGlrZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2luZm9GZWVscycpO1xuICAgIHBhcmFXaW5kLnNldEF0dHJpYnV0ZSgnaWQnLCAnaW5mb1dpbmQnKTtcbiAgICBwYXJhSHVtaWQuc2V0QXR0cmlidXRlKCdpZCcsICdpbmZvSHVtaWQnKTtcblxuICAgIGhlYWRlci5pbm5lclRleHQgPSAnY2l0eSBuYW1lLCBjb3VudHJ5JztcbiAgICBwYXJhRGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gJ2Rlc2NyaXB0aW9uJztcbiAgICBidG5UZW1wLmlubmVySFRNTCA9IDY5O1xuICAgIHBhcmFGZWVsc0xpa2UuaW5uZXJIVE1MID0gJ0ZlZWxzIGxpa2U6IDxzcGFuPjY5PHNwYW4+JztcbiAgICBwYXJhV2luZC5pbm5lckhUTUwgPSAnV2luZCBTcGVlZDogPHNwYW4+Njk8c3Bhbj4nO1xuICAgIHBhcmFIdW1pZC5pbm5lckhUTUwgPSAnSHVtaWRpdHk6IDxzcGFuPjY5PHNwYW4+JztcblxuICAgIGRpdi5hcHBlbmRDaGlsZChwYXJhRmVlbHNMaWtlKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQocGFyYVdpbmQpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChwYXJhSHVtaWQpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpLmFwcGVuZENoaWxkKHBhcmFEZXNjcmlwdGlvbik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpLmFwcGVuZENoaWxkKGJ0blRlbXApO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKS5hcHBlbmRDaGlsZChkaXYpO1xufTtcblxuY29uc3QgY3JlYXRlQXBwID0gKCkgPT4ge1xuICAgIGNyZWF0ZUNvbnRhaW5lcigpO1xuICAgIGNyZWF0ZVNlYXJjaCgpO1xuICAgIGNyZWF0ZU1haW4oKTtcbiAgICBjcmVhdGVNb2RhbHMoKTtcbiAgICBjcmVhdGVGb3JlY2FzdFRlbXBsYXRlKCk7XG59O1xuXG5jb25zdCBzZXR1cCA9ICgpID0+IHtcbiAgICBzZXRMYW5ndWFnZSgpO1xuICAgIHNldHVwSGVhZFRhZygpO1xuICAgIHNldEJhY2tncm91bmQoKTtcbiAgICBjcmVhdGVBcHAoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNldHVwO1xuIiwiaW1wb3J0IGxvYWREYXRhIGZyb20gJy4vYXBpJztcblxuY29uc3QgdmFyaWFibGUgPSAoKCkgPT4ge1xuICAgIGxldCBrZXlib2FyZEV2ZW50S2V5O1xuICAgIGxldCB0ZW1wO1xuICAgIGxldCBmZWVscztcbiAgICBsZXQgd2luZDtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGtleWJvYXJkRXZlbnRLZXksXG4gICAgICAgIHRlbXAsXG4gICAgICAgIGZlZWxzLFxuICAgICAgICB3aW5kLFxuICAgIH07XG59KSgpO1xuXG5jb25zdCBwcmV2ZW50S2V5ZG93bkV4Y2VwdCA9IChldmVudCkgPT4ge1xuICAgIGlmICh2YXJpYWJsZS5rZXlib2FyZEV2ZW50S2V5ICE9PSBldmVudC5rZXkpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG59O1xuXG5jb25zdCBhZGRLZXlkb3duUHJldmVudGlvbkV4Y2VwdCA9IChrZXkpID0+IHtcbiAgICB2YXJpYWJsZS5rZXlib2FyZEV2ZW50S2V5ID0ga2V5O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgcHJldmVudEtleWRvd25FeGNlcHQpO1xufTtcblxuY29uc3QgcmVtb3ZlS2V5ZG93blByZXZlbnRpb24gPSAoKSA9PiB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBwcmV2ZW50S2V5ZG93bkV4Y2VwdCk7XG59O1xuXG5jb25zdCBmb2N1c0VsZW1lbnQgPSAoZWxlbWVudCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudCkuZm9jdXMoKTtcbn07XG5cbmNvbnN0IHRvZ2dsZUxvYWRpbmcgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsJykuY2xhc3NMaXN0LnRvZ2dsZSgnbG9hZGluZycpO1xufTtcblxuY29uc3QgdG9nZ2xlRXJyb3IgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsJykuY2xhc3NMaXN0LnRvZ2dsZSgnYWxlcnQnKTtcbiAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbCcpLmNsYXNzTGlzdC5jb250YWlucygnYWxlcnQnKSkge1xuICAgICAgICByZW1vdmVLZXlkb3duUHJldmVudGlvbigpO1xuICAgICAgICBmb2N1c0VsZW1lbnQoJyNzZWFyY2hJbnB1dCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZEtleWRvd25QcmV2ZW50aW9uRXhjZXB0KCdFbnRlcicpO1xuICAgICAgICBmb2N1c0VsZW1lbnQoJyNjbG9zZUVycm9yJyk7XG4gICAgfVxufTtcblxuY29uc3QgZXJyb3JIYW5kbGVyID0gKGVycm9yKSA9PiB7XG4gICAgdG9nZ2xlRXJyb3IoKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXJyb3JNZXNzYWdlJykuaW5uZXJUZXh0ID0gZXJyb3I7XG59O1xuXG5jb25zdCBjYXBpdGFsaXplRmlyc3RMZXR0ZXIgPSAoc3RyaW5nKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSByZXR1cm4gJyc7XG4gICAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbn07XG5cbmNvbnN0IGNlbHNpdXNUb0ZhaHJlbmhlaXQgPSAoY2Vsc2l1cykgPT4ge1xuICAgIGxldCBudW0gPSBjZWxzaXVzICogOTtcbiAgICBudW0gLz0gNTtcbiAgICBudW0gKz0gMzI7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobnVtKTtcbn07XG5cbmNvbnN0IG1ldGVyUGVyU2Vjb25kVG9NaWxlc1BlckhvdXIgPSAobXBzKSA9PiB7XG4gICAgY29uc3QgbnVtID0gbXBzICogMi4yMzY5NDtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChudW0gKiAxMCkgLyAxMDtcbn07XG5cbmNvbnN0IGRpc3BsYXlJbkNlbHNpdXMgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXBlcmF0dXJlJykuaW5uZXJUZXh0ID0gdmFyaWFibGUudGVtcDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5mb0ZlZWxzIHNwYW4nKS5pbm5lclRleHQgPSB2YXJpYWJsZS5mZWVscztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5mb1dpbmQgc3BhbicpLmlubmVyVGV4dCA9IHZhcmlhYmxlLndpbmQ7XG59O1xuXG5jb25zdCBkaXNwbGF5SW5GYWhyZW5oZWl0ID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wZXJhdHVyZScpLmlubmVyVGV4dCA9IGNlbHNpdXNUb0ZhaHJlbmhlaXQodmFyaWFibGUudGVtcCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2luZm9GZWVscyBzcGFuJykuaW5uZXJUZXh0ID0gY2Vsc2l1c1RvRmFocmVuaGVpdCh2YXJpYWJsZS5mZWVscyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2luZm9XaW5kIHNwYW4nKS5pbm5lclRleHQgPSBtZXRlclBlclNlY29uZFRvTWlsZXNQZXJIb3VyKHZhcmlhYmxlLndpbmQpO1xufTtcblxuY29uc3QgdG9nZ2xlVW5pdCA9ICgpID0+IHtcbiAgICBjb25zdCB0ZW1wZXJhdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wZXJhdHVyZScpO1xuXG4gICAgaWYgKHRlbXBlcmF0dXJlLmNsYXNzTGlzdC5jb250YWlucygnZGVnLWMnKSkge1xuICAgICAgICB0ZW1wZXJhdHVyZS5jbGFzc05hbWUgPSAndGVtcGVyYXR1cmUgZGVnLWYnO1xuICAgICAgICBkaXNwbGF5SW5GYWhyZW5oZWl0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGVtcGVyYXR1cmUuY2xhc3NOYW1lID0gJ3RlbXBlcmF0dXJlIGRlZy1jJztcbiAgICAgICAgZGlzcGxheUluQ2Vsc2l1cygpO1xuICAgIH1cbn07XG5cbmNvbnN0IGRpc3BsYXlGb3JlY2FzdCA9IChkYXRhKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlYWRlcicpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XG4gICAgY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcGVyYXR1cmUnKTtcbiAgICBjb25zdCBpbmZvRmVlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5mb0ZlZWxzIHNwYW4nKTtcbiAgICBjb25zdCBpbmZvV2luZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbmZvV2luZCBzcGFuJyk7XG4gICAgY29uc3QgaW5mb0h1bWlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2luZm9IdW1pZCBzcGFuJyk7XG5cbiAgICB2YXJpYWJsZS50ZW1wID0gTWF0aC5yb3VuZChkYXRhLm1haW4udGVtcCk7XG4gICAgdmFyaWFibGUuZmVlbHMgPSBNYXRoLnJvdW5kKGRhdGEubWFpbi5mZWVsc19saWtlKTtcbiAgICB2YXJpYWJsZS53aW5kID0gTWF0aC5yb3VuZChkYXRhLndpbmQuc3BlZWQgKiAxMCkgLyAxMDtcblxuICAgIGhlYWRlci5pbm5lclRleHQgPSBgJHtkYXRhLm5hbWV9LCAke2RhdGEuc3lzLmNvdW50cnl9YDtcbiAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uKTtcbiAgICB0ZW1wZXJhdHVyZS5pbm5lclRleHQgPSB2YXJpYWJsZS50ZW1wO1xuICAgIGluZm9GZWVscy5pbm5lclRleHQgPSB2YXJpYWJsZS5mZWVscztcbiAgICBpbmZvV2luZC5pbm5lclRleHQgPSB2YXJpYWJsZS53aW5kO1xuICAgIGluZm9IdW1pZC5pbm5lclRleHQgPSBkYXRhLm1haW4uaHVtaWRpdHk7XG5cbiAgICBpZiAodGVtcGVyYXR1cmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWctZicpKSB7XG4gICAgICAgIGRpc3BsYXlJbkZhaHJlbmhlaXQoKTtcbiAgICB9XG59O1xuXG5jb25zdCBwcm9jZXNzSW5wdXQgPSBhc3luYyAobG9jKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgdG9nZ2xlTG9hZGluZygpO1xuICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICAgICAgYWRkS2V5ZG93blByZXZlbnRpb25FeGNlcHQoKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGxvYWREYXRhKGxvYyk7XG4gICAgICAgIGRpc3BsYXlGb3JlY2FzdChkYXRhKTtcbiAgICAgICAgcmVtb3ZlS2V5ZG93blByZXZlbnRpb24oKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaElucHV0JykuZm9jdXMoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBlcnJvckhhbmRsZXIoZXJyb3Iuc3RhdHVzVGV4dCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdG9nZ2xlTG9hZGluZygpO1xuICAgIH1cbn07XG5cbmNvbnN0IHN1Ym1pdEhhbmRsZXIgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2hJbnB1dCcpO1xuXG4gICAgaWYgKCFzZWFyY2hJbnB1dC52YWx1ZSkge1xuICAgICAgICByZXR1cm4gZXJyb3JIYW5kbGVyKCdJbnB1dCBmaWVsZCBlbXB0eSEnKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHNlYXJjaElucHV0LnZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gZXJyb3JIYW5kbGVyKCdJbnB1dCBpcyBub3QgYSBzdHJpbmchJyk7XG4gICAgfVxuXG4gICAgaWYgKHNlYXJjaElucHV0LnZhbHVlLmxlbmd0aCA8PSAyKSB7XG4gICAgICAgIHJldHVybiBlcnJvckhhbmRsZXIoJ0lucHV0IHRvbyBzaG9ydCEnKTtcbiAgICB9XG5cbiAgICBpZiAoc2VhcmNoSW5wdXQudmFsdWUubGVuZ3RoID4gMjApIHtcbiAgICAgICAgcmV0dXJuIGVycm9ySGFuZGxlcignSW5wdXQgdG9vIGxvbmchJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2Nlc3NJbnB1dChzZWFyY2hJbnB1dC52YWx1ZSk7XG59O1xuXG5jb25zdCBldmVudHMgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHN1Ym1pdEhhbmRsZXIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZUVycm9yJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVFcnJvcik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXBlcmF0dXJlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVVbml0KTtcbn07XG5cbmV4cG9ydCB7IHByb2Nlc3NJbnB1dCwgZXZlbnRzIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHNldHVwIGZyb20gJy4vZG9tJztcbmltcG9ydCB7IHByb2Nlc3NJbnB1dCwgZXZlbnRzIH0gZnJvbSAnLi9ldmVudHMnO1xuXG5jb25zdCBvbmxvYWQgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgc2V0dXAoKTtcbiAgICAgICAgYXdhaXQgcHJvY2Vzc0lucHV0KCdUYWxhdmVyYSwgcGgnKTtcbiAgICAgICAgZXZlbnRzKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSAnPGgxPk9vcHMhIFNvbWV0aGluZyB3ZW50IHdyb25nLjwvaDE+JztcbiAgICB9XG59O1xuXG5vbmxvYWQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==