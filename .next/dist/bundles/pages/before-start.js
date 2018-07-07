module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/header/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_cookies__ = __webpack_require__("./utils/cookies.js");
var _jsxFileName = "/Users/amaxpara/Project/kuisoner-pegawai/components/header/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header(props) {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
  }

  _createClass(Header, [{
    key: "logout",
    value: function logout() {
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_cookies__["b" /* removeCookie */])('PDCLOGID');
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_cookies__["b" /* removeCookie */])('PROG-ID');
      window.location.pathname = '/';
    }
  }, {
    key: "render",
    value: function render() {
      var user = this.props.user;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "pcoded-overlay-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "pcoded-container navbar-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
        className: "navbar header-navbar pcoded-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "navbar-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "navbar-logo",
        "data-navbar-theme": "theme4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "mobile-menu",
        id: "mobile-collapse",
        href: "#!",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "ti-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "mobile-search morphsearch-search",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "ti-search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#!",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, "Personality Development Center"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "mobile-options",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "ti-more",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "navbar-container container-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        className: "nav-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "sidebar_toggle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "javascript:void(0)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "ti-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        className: "nav-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "user-profile header-notification",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#!",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "/static/images/user.png",
        alt: "User-Profile-Image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, user.first_name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "ti-angle-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        className: "show-notification profile-notification",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "auth-lock-screen.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "ti-lock",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }), " Lock Screen")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        onClick: this.logout.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "ti-layout-sidebar-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }), " Logout"))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "upgrade-button m-r-10 f-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        className: "icon-circle txt-white btn btn-sm btn-warning upgrade-button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, "ID : 92131293"))))))));
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./components/loader/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/amaxpara/Project/kuisoner-pegawai/components/loader/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Loader =
/*#__PURE__*/
function (_Component) {
  _inherits(Loader, _Component);

  function Loader(props) {
    var _this;

    _classCallCheck(this, Loader);

    _this = _possibleConstructorReturn(this, (Loader.__proto__ || Object.getPrototypeOf(Loader)).call(this, props));
    _this.state = {
      email: null,
      password: null
    };
    return _this;
  }

  _createClass(Loader, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "theme-loader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ball-scale",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      })));
    }
  }]);

  return Loader;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Loader);

/***/ }),

/***/ "./components/nav/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_cookies__ = __webpack_require__("./utils/cookies.js");
var _jsxFileName = "/Users/amaxpara/Project/kuisoner-pegawai/components/nav/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Navigation =
/*#__PURE__*/
function (_Component) {
  _inherits(Navigation, _Component);

  function Navigation(props) {
    _classCallCheck(this, Navigation);

    return _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).call(this, props));
  }

  _createClass(Navigation, [{
    key: "logout",
    value: function logout() {
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_cookies__["b" /* removeCookie */])('PDCLOGID');
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_cookies__["b" /* removeCookie */])('PROG-ID');
      window.location.pathname = '/';
    }
  }, {
    key: "render",
    value: function render() {
      var user = this.props.user;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
        className: "pcoded-navbar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "sidebar_toggle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "icon-close icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "pcoded-inner-navbar main-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "main-menu-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "img-40",
        src: "/static/images/user.png",
        alt: "User-Profile-Image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "user-details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, user.first_name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        id: "more-details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, user.position)))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "pcoded-navigatio-lavel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, "Side Menu"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        className: "pcoded-item pcoded-left-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "active pcoded-trigger ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "index.html ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "pcoded-micon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "ti-layout-grid2-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "pcoded-mtext",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, "Dashboard"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "pcoded-mcaret",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        className: "pcoded-item pcoded-left-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "pcoded-micon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "ti-crown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "pcoded-mtext",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, "Your Score"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "pcoded-mcaret",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "pcoded-micon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "ti-lock",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "pcoded-mtext",
        onClick: this.logout.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, "Logout"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "pcoded-mcaret",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }))))));
    }
  }]);

  return Navigation;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Navigation);

/***/ }),

/***/ "./pages/before-start.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_loader__ = __webpack_require__("./components/loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_header__ = __webpack_require__("./components/header/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_nav__ = __webpack_require__("./components/nav/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_cookies__ = __webpack_require__("./utils/cookies.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_image_upload__ = __webpack_require__("./utils/image-upload.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_webcam__ = __webpack_require__("react-webcam");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_webcam___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_webcam__);
var _jsxFileName = "/Users/amaxpara/Project/kuisoner-pegawai/pages/before-start.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }










var Start =
/*#__PURE__*/
function (_Component) {
  _inherits(Start, _Component);

  function Start(props) {
    var _this;

    _classCallCheck(this, Start);

    _this = _possibleConstructorReturn(this, (Start.__proto__ || Object.getPrototypeOf(Start)).call(this, props));
    _this.webcam = null;
    _this.state = {
      program: [],
      user: {},
      screenshot: null,
      isLoading: true
    };
    _this.logCookie = null;
    _this.capture = _this.capture.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Start, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.logCookie = JSON.parse(decodeURIComponent(Object(__WEBPACK_IMPORTED_MODULE_4__utils_cookies__["a" /* getCookies */])('PDCLOGID')));

      if (this.logCookie) {
        __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get("http://localhost:4000/user/".concat(this.logCookie.u)).then(function (res) {
          if (res.data) _this2.setState({
            user: res.data,
            isLoading: false
          });
        });
      } else {
        window.location.pathname = '/';
      }
    }
  }, {
    key: "deletePhoto",
    value: function deletePhoto() {
      this.setState({
        screenshot: null
      });
    }
  }, {
    key: "capture",
    value: function capture() {
      var screenshot = this.refs.webcam.getScreenshot();
      this.setState({
        screenshot: screenshot
      });
    }
  }, {
    key: "startTest",
    value: function startTest() {
      var _this3 = this;

      var img = this.state.screenshot.split('base64,')[1];

      if (img) {
        Object(__WEBPACK_IMPORTED_MODULE_5__utils_image_upload__["a" /* imageUpload */])(img).then(function (res) {
          if (res.data.data) {
            __WEBPACK_IMPORTED_MODULE_3_axios___default.a.post("http://localhost:4000/add_photo", {
              applicant_id: _this3.state.user.applicant_id,
              client_id: _this3.state.user.client_id,
              login_time: _this3.logCookie.t,
              photo: res.data.data.link
            }).then(function (res) {
              if (res.data) {
                window.location.pathname = '/tutorial';
              }
            });
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          user = _state.user,
          isLoading = _state.isLoading;
      var videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: 'user'
      };

      if (isLoading) {
        return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0__components_loader__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          }
        });
      } else {
        return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          }
        }, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0__components_loader__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          }
        }), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("div", {
          id: "pcoded",
          className: "pcoded",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          }
        }, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_header__["a" /* default */], {
          user: user,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          }
        }), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("div", {
          className: "pcoded-main-container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          }
        }, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("div", {
          className: "pcoded-wrapper",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          }
        }, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_nav__["a" /* default */], {
          user: user,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          }
        }), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("div", {
          className: "pcoded-content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          }
        }, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("div", {
          className: "pcoded-inner-content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          }
        }, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("div", {
          className: "main-body",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          }
        }, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("div", {
          className: "page-wrapper",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          }
        }, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("div", {
          className: "page-header",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          }
        }, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("div", {
          className: "page-header-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          }
        }, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("h4", {
          style: {
            fontSize: '30px'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          }
        }, "PT. Roosled Sinergi Minterindo")), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("div", {
          className: "page-header-breadcrumb",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          }
        }, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("ul", {
          className: "breadcrumb-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          }
        }, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("li", {
          className: "breadcrumb-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          }
        }, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("a", {
          href: "#!",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          }
        }, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("i", {
          className: "icofont icofont-home",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          }
        }))), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("li", {
          className: "breadcrumb-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          }
        }, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("a", {
          href: "#!",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          }
        }, "Employment Personality Test"))))), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("div", {
          className: "page-body",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          }
        }, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("div", {
          className: "card-block inverse-breadcrumb",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          }
        }, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("h6", {
          style: {
            textAlign: 'center'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          }
        }, "Waktu tes akan memberikan \"warning\" dengan suara dan font yang lebih besar setiap 10 menit ", __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          }
        }), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          }
        }), "Akan terdengar bunyi \"bip\" bila waktu tersisa 10 detik. sistem akan otomatis menutup Test apabila waktu telah habis.", __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          }
        }), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          }
        }), "Waktu akan mulai dihitung saat Online Psikotest ini dimulai. ", __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          }
        }), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          }
        }), "Selamat Mengerjakan", __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          }
        }), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          }
        }), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("div", {
          className: "camera",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          }
        }, this.state.screenshot ? __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("img", {
          src: this.state.screenshot,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          }
        }) : __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_webcam___default.a, {
          audio: false,
          ref: "webcam",
          width: 350,
          height: 350,
          screenshotFormat: "image/jpeg",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          }
        }), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("div", {
          className: "controls visible",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          }
        }, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("a", {
          href: "#",
          id: "delete-photo",
          title: "Delete Photo",
          onClick: this.deletePhoto.bind(this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          }
        }, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("i", {
          className: "material-icons",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          }
        }, "delete")), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("a", {
          href: "#",
          id: "take-photo",
          title: "Take Photo",
          onClick: this.capture,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          }
        }, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("i", {
          className: "material-icons",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          }
        }, "camera_alt")))), this.state.screenshot ? __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("a", {
          href: "#",
          onClick: this.startTest.bind(this),
          className: "btn btn-success",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137
          }
        }, "Mulai Test!") : __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("div", {
          className: "btn btn-danger",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          }
        }, "Mulai Test!"))))))))))));
      }
    }
  }]);

  return Start;
}(__WEBPACK_IMPORTED_MODULE_6_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Start);

/***/ }),

/***/ "./utils/cookies.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getCookies;
/* harmony export (immutable) */ __webpack_exports__["c"] = setCookies;
/* harmony export (immutable) */ __webpack_exports__["b"] = removeCookie;
function getCookies(cname) {
  var name = cname + '=';
  var ca = document.cookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }

    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }

  return '';
}
function setCookies(name, value) {
  var d = new Date();
  d.setTime(d.getTime() + 24 * 60 * 60 * 1000);
  var expires = 'expires=' + d.toUTCString();
  document.cookie = name + '=' + value + ';' + expires + ';path=/';
}
function removeCookie(name) {
  var d = new Date(0);
  var expires = 'expires=' + d.toUTCString();
  document.cookie = name + '=;' + expires + ';path=/';
  document.cookie = name + '=;' + expires + ';path=/';
}

/***/ }),

/***/ "./utils/image-upload.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = imageUpload;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);

function imageUpload(img) {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default()({
    method: 'post',
    url: 'https://api.imgur.com/3/image',
    data: {
      image: img
    },
    headers: {
      Authorization: 'CLIENT-ID d8728f22a503a6b'
    }
  });
}
;

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/before-start.js");


/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-webcam":
/***/ (function(module, exports) {

module.exports = require("react-webcam");

/***/ })

/******/ });
//# sourceMappingURL=before-start.js.map