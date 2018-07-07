webpackHotUpdate(7,{

/***/ "./utils/cookies.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (immutable) */ __webpack_exports__["a"] = getCookies;
/* harmony export (immutable) */ __webpack_exports__["b"] = setCookies;
/* unused harmony export removeCookie */
(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getCookies, "getCookies", "/Users/amaxpara/Project/kuisoner-pegawai/utils/cookies.js");
  reactHotLoader.register(setCookies, "setCookies", "/Users/amaxpara/Project/kuisoner-pegawai/utils/cookies.js");
  reactHotLoader.register(removeCookie, "removeCookie", "/Users/amaxpara/Project/kuisoner-pegawai/utils/cookies.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=7.950bfd1e4a4a01a472f0.hot-update.js.map