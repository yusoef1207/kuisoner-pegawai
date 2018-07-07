webpackHotUpdate(8,{

/***/ "./pages/dashboard.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_loader__ = __webpack_require__("./components/loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_header__ = __webpack_require__("./components/header/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_nav__ = __webpack_require__("./components/nav/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_cookies__ = __webpack_require__("./utils/cookies.js");
var _jsxFileName = "/Users/amaxpara/Project/kuisoner-pegawai/pages/dashboard.js";

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








var Dashboard =
/*#__PURE__*/
function (_Component) {
  _inherits(Dashboard, _Component);

  function Dashboard(props) {
    var _this;

    _classCallCheck(this, Dashboard);

    _this = _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this, props));
    _this.state = {
      program: [],
      user: {},
      isLoading: true
    };
    return _this;
  }

  _createClass(Dashboard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (Object(__WEBPACK_IMPORTED_MODULE_5__utils_cookies__["a" /* getCookies */])('PDCLOGID')) {
        __WEBPACK_IMPORTED_MODULE_4_axios___default.a.get('http://localhost:4000/program').then(function (res) {
          if (res.data) _this2.setState({
            program: res.data
          });
        });
        var catchLog = JSON.parse(decodeURIComponent(Object(__WEBPACK_IMPORTED_MODULE_5__utils_cookies__["a" /* getCookies */])('PDCLOGID')));
        __WEBPACK_IMPORTED_MODULE_4_axios___default.a.get("http://localhost:4000/user/".concat(catchLog.u)).then(function (res) {
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
    key: "startQuestion",
    value: function startQuestion(progId) {
      Object(__WEBPACK_IMPORTED_MODULE_5__utils_cookies__["c" /* setCookies */])('PROG-ID', progId);
      window.location.pathname = '/before-start';
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _state = this.state,
          user = _state.user,
          isLoading = _state.isLoading;

      if (isLoading) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_loader__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        });
      } else {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          id: "pcoded",
          className: "pcoded",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_header__["a" /* default */], {
          user: user,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "pcoded-main-container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "pcoded-wrapper",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_nav__["a" /* default */], {
          user: user,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "pcoded-content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "pcoded-inner-content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "main-body",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "page-wrapper",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "page-header",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "page-header-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          }
        }, "Dashboard")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "page-header-breadcrumb",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
          className: "breadcrumb-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
          className: "breadcrumb-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
          href: "#!",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
          className: "icofont icofont-home",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          }
        }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
          className: "breadcrumb-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
          href: "#!",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        }, "Dashboard"))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "page-body",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          }
        }, this.state.program.map(function (program, idx) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
            key: idx,
            className: "col-md-12 col-lg-4",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 83
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
            href: "#",
            onClick: _this3.startQuestion.bind(_this3, program.program_id),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 84
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
            className: "card table-card ".concat(idx % 2 == 0 ? 'widget-success-card' : 'widget-primary-card'),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 85
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
            className: "row-table",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 86
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
            className: "col-sm-3 card-block-big",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 87
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
            className: "icofont icofont-trophy-alt",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 88
            }
          })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
            className: "col-sm-9",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 90
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 91
            }
          }, program.program_name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h6", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 92
            }
          }, program.question))))));
        })))))))))));
      }
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Dashboard;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = Dashboard;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Dashboard, "Dashboard", "/Users/amaxpara/Project/kuisoner-pegawai/pages/dashboard.js");
  reactHotLoader.register(_default, "default", "/Users/amaxpara/Project/kuisoner-pegawai/pages/dashboard.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/dashboard")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=8.fa00e7b4fd29ddc0bba1.hot-update.js.map