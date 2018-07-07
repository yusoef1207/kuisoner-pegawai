webpackHotUpdate(5,{

/***/ "./pages/before-start.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_webcam__ = __webpack_require__("./node_modules/react-webcam/dist/react-webcam.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_webcam___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_webcam__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_loader__ = __webpack_require__("./components/loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_header__ = __webpack_require__("./components/header/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_nav__ = __webpack_require__("./components/nav/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_cookies__ = __webpack_require__("./utils/cookies.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_image_upload__ = __webpack_require__("./utils/image-upload.js");
var _jsxFileName = "/Users/amaxpara/Project/kuisoner-pegawai/pages/before-start.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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
      screenshot: null
    };
    _this.logCookie = null;
    _this.capture = _this.capture.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Start, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.logCookie = JSON.parse(decodeURIComponent(Object(__WEBPACK_IMPORTED_MODULE_6__utils_cookies__["a" /* getCookies */])('PDCLOGID')));

      if (this.logCookie) {
        __WEBPACK_IMPORTED_MODULE_5_axios___default.a.get("http://localhost:4000/user/".concat(this.logCookie.u)).then(function (res) {
          if (res.data) _this2.setState({
            user: res.data
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
        Object(__WEBPACK_IMPORTED_MODULE_7__utils_image_upload__["a" /* imageUpload */])(img).then(function (res) {
          if (res.data.data) {
            __WEBPACK_IMPORTED_MODULE_5_axios___default.a.post("http://localhost:4000/add_photo", {
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
      var user = this.state.user;
      var videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: 'user'
      };
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_loader__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "pcoded",
        className: "pcoded",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_header__["a" /* default */], {
        user: user,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "pcoded-main-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "pcoded-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_nav__["a" /* default */], {
        user: user,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "pcoded-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "pcoded-inner-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "main-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "page-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "page-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "page-header-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
        style: {
          fontSize: '30px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, "PT. Roosled Sinergi Minterindo")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "page-header-breadcrumb",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        className: "breadcrumb-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "breadcrumb-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#!",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "icofont icofont-home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "breadcrumb-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#!",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, "Employment Personality Test"))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "page-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "card-block inverse-breadcrumb",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h6", {
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, "Waktu tes akan memberikan \"warning\" dengan suara dan font yang lebih besar setiap 10 menit ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }), "Akan terdengar bunyi \"bip\" bila waktu tersisa 10 detik. sistem akan otomatis menutup Test apabila waktu telah habis.", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }), "Waktu akan mulai dihitung saat Online Psikotest ini dimulai. ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }), "Selamat Mengerjakan", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "camera",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, this.state.screenshot ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: this.state.screenshot,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_webcam___default.a, {
        audio: false,
        ref: "webcam",
        width: 350,
        height: 350,
        screenshotFormat: "image/jpeg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "controls visible",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        id: "delete-photo",
        title: "Delete Photo",
        onClick: this.deletePhoto.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "material-icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, "delete")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        id: "take-photo",
        title: "Take Photo",
        onClick: this.capture,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "material-icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, "camera_alt")))), this.state.screenshot ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        onClick: this.startTest.bind(this),
        className: "btn btn-success",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, "Mulai Test!") : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "btn btn-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, "Mulai Test!"))))))))))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Start;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = Start;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Start, "Start", "/Users/amaxpara/Project/kuisoner-pegawai/pages/before-start.js");
  reactHotLoader.register(_default, "default", "/Users/amaxpara/Project/kuisoner-pegawai/pages/before-start.js");
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/before-start")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.8ce49cdef2057469ecd2.hot-update.js.map