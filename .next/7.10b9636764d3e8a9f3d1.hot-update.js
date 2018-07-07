webpackHotUpdate(7,{

/***/ "./pages/tutorial.js":
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
var _jsxFileName = "/Users/amaxpara/Project/kuisoner-pegawai/pages/tutorial.js";

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








var Tutorial =
/*#__PURE__*/
function (_Component) {
  _inherits(Tutorial, _Component);

  function Tutorial(props) {
    var _this;

    _classCallCheck(this, Tutorial);

    _this = _possibleConstructorReturn(this, (Tutorial.__proto__ || Object.getPrototypeOf(Tutorial)).call(this, props));
    _this.state = {
      program: [],
      user: {}
    };
    return _this;
  }

  _createClass(Tutorial, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      __WEBPACK_IMPORTED_MODULE_4_axios___default.a.get("http://localhost:4000/user/".concat(Object(__WEBPACK_IMPORTED_MODULE_5__utils_cookies__["a" /* getCookies */])('PDCLOGID'))).then(function (res) {
        if (res.data) _this2.setState({
          user: res.data
        });
      });
      var catchLog = JSON.parse(decodeURIComponent(Object(__WEBPACK_IMPORTED_MODULE_5__utils_cookies__["a" /* getCookies */])('PDCLOGID')));

      if (catchLog) {
        __WEBPACK_IMPORTED_MODULE_4_axios___default.a.get("http://localhost:4000/user/".concat(catchLog.u)).then(function (res) {
          if (res.data) _this2.setState({
            user: res.data
          });
        });
      } else {
        window.location.pathname = '/';
      }
    }
  }, {
    key: "render",
    value: function render() {
      var user = this.state.user;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_loader__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "pcoded",
        className: "pcoded",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_header__["a" /* default */], {
        user: user,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "pcoded-main-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "pcoded-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_nav__["a" /* default */], {
        user: user,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "pcoded-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "pcoded-inner-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "main-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "page-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "page-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "page-header-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
        style: {
          fontSize: '30px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, "PT. Roosled Sinergi Minterindo")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "page-header-breadcrumb",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        className: "breadcrumb-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "breadcrumb-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#!",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "icofont icofont-home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "breadcrumb-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#!",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, "Employment Personality Test"))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "page-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-sm-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "card-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h5", {
        style: {
          textTransform: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, "Pilih jawaban anda dengan klik salah satu skala angka 0-4"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: {
          margin: '0px',
          fontSize: '14px'
        },
        className: "label-main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        className: "label label-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, "0 = Sangat tidak setuju")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: {
          margin: '0px',
          fontSize: '14px'
        },
        className: "label-main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        className: "label label-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, "1 = Tidak setuju ")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: {
          margin: '0px',
          fontSize: '14px'
        },
        className: "label-main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        className: "label label-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, "2 = Ragu-ragu ")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: {
          margin: '0px',
          fontSize: '14px'
        },
        className: "label-main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        className: "label label-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, "3 = Setuju")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: {
          margin: '0px',
          fontSize: '14px'
        },
        className: "label-main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        className: "label label-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, "4 =  Sangat setuju"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "card-header-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "icofont icofont-rounded-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "card-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-lg-12 col-lg-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "sub-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, "Waktu Test :", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        style: {
          fontSize: '15px'
        },
        className: "badge badge-inverse-success",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, "00 : 30 : 00"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        style: {
          display: 'inline-block',
          textAlign: 'right',
          float: 'right'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        style: {
          fontSize: '15px'
        },
        className: "badge badge-inverse-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, "Mohon dilengkapi semua pertanyaan"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        className: "nav nav-tabs tabs",
        role: "tablist",
        style: {
          overflowY: 'hidden'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "nav-link active",
        "data-toggle": "tab",
        href: "#home1",
        role: "tab",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, "1-10", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        className: "badge badge-danger",
        style: {
          marginBottom: '0px',
          fontSize: '15px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, "5"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "nav-link",
        "data-toggle": "tab",
        href: "#profile1",
        role: "tab",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, "11-20")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "nav-link",
        "data-toggle": "tab",
        href: "#messages1",
        role: "tab",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, "21-30")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "nav-link",
        "data-toggle": "tab",
        href: "#settings1",
        role: "tab",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, "31-40"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "tab-content tabs card-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "tab-pane active",
        id: "home1",
        role: "tabpanel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "table-responsive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("table", {
        className: "table table-hover",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("thead", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, "#"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, "Question"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, "Your Oppinion"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tbody", {
        id: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
        scope: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, "'+ i +'"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
        style: {
          whiteSpace: 'normal'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem ")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        style: {
          marginTop: '4px'
        },
        type: "radio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        style: {
          margin: '0 5px 0px 5px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, "0"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        style: {
          marginTop: '4px'
        },
        type: "radio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        style: {
          margin: '0 5px 0px 5px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, "1"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        style: {
          marginTop: '4px'
        },
        type: "radio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        style: {
          margin: '0 5px 0px 5px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, "2"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        style: {
          marginTop: '4px'
        },
        type: "radio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        style: {
          margin: '0 5px 0px 5px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }, "3"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        style: {
          marginTop: '4px'
        },
        type: "radio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        style: {
          margin: '0 5px 0px 5px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, "4"))))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "tab-pane",
        id: "profile1",
        role: "tabpanel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "m-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }, "2.Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "tab-pane",
        id: "messages1",
        role: "tabpanel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "m-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, "3. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "tab-pane",
        id: "settings1",
        role: "tabpanel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "m-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, "4.Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet."))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        className: "nav nav-tabs tab-below tabs",
        role: "tablist",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "nav-link active",
        "data-toggle": "tab",
        href: "#home1",
        role: "tab",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      }, "1-10", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        className: "badge badge-danger",
        style: {
          marginBottom: '0px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }, "5"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "nav-link",
        "data-toggle": "tab",
        href: "#profile1",
        role: "tab",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        }
      }, "11-20")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "nav-link",
        "data-toggle": "tab",
        href: "#messages1",
        role: "tab",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }, "21-30")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "nav-link",
        "data-toggle": "tab",
        href: "#settings1",
        role: "tab",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        }
      }, "31-40"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-md-6 offset-md-6",
        style: {
          textAlign: 'right',
          fontSize: '17px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        className: "label label-inverse-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "ti-angle-double-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      }), " Sebelumnya"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        className: "label label-inverse-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      }, "Berikutnya", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "ti-angle-double-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      })))))))))))))))))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Tutorial;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = Tutorial;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Tutorial, "Tutorial", "/Users/amaxpara/Project/kuisoner-pegawai/pages/tutorial.js");
  reactHotLoader.register(_default, "default", "/Users/amaxpara/Project/kuisoner-pegawai/pages/tutorial.js");
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/tutorial")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=7.10b9636764d3e8a9f3d1.hot-update.js.map