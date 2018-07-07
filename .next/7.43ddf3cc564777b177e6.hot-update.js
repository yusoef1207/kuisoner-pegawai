webpackHotUpdate(7,{

/***/ "./components/nav/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_cookies__ = __webpack_require__("./utils/cookies.js");
var _jsxFileName = "/Users/amaxpara/Project/kuisoner-pegawai/components/nav/index.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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
        onClick: this.logout(),
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
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Navigation;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = Navigation;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Navigation, "Navigation", "/Users/amaxpara/Project/kuisoner-pegawai/components/nav/index.js");
  reactHotLoader.register(_default, "default", "/Users/amaxpara/Project/kuisoner-pegawai/components/nav/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=7.43ddf3cc564777b177e6.hot-update.js.map