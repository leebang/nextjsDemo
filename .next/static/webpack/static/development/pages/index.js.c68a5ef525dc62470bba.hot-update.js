webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/iNks/Documents/DEV/rgbtohex/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var RGB_HEX = /^#?(?:([\da-f]{3})[\da-f]?|([\da-f]{6})(?:[\da-f]{2})?)$/i;

function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function HEX2RGB(hex) {
  "use strict";

  if (hex.charAt(0) === '#') {
    hex = hex.substr(1);
  }

  if (hex.length < 2 || hex.length > 6) {
    return false;
  }

  var values = hex.split(''),
      r,
      g,
      b;

  if (hex.length === 2) {
    r = parseInt(values[0].toString() + values[1].toString(), 16);
    g = r;
    b = r;
  } else if (hex.length === 3) {
    r = parseInt(values[0].toString() + values[0].toString(), 16);
    g = parseInt(values[1].toString() + values[1].toString(), 16);
    b = parseInt(values[2].toString() + values[2].toString(), 16);
  } else if (hex.length === 6) {
    r = parseInt(values[0].toString() + values[1].toString(), 16);
    g = parseInt(values[2].toString() + values[3].toString(), 16);
    b = parseInt(values[4].toString() + values[5].toString(), 16);
  } else {
    return false;
  }

  return [r, g, b];
}

function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      rValue = _useState[0],
      setRValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      gValue = _useState2[0],
      setGValue = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      bValue = _useState3[0],
      setBValue = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      theHex = _useState4[0],
      setTheHex = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      theRGB = _useState5[0],
      setTheRGB = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      theColor = _useState6[0],
      setTheColor = _useState6[1];

  var setRBG = function setRBG(str) {
    var result = HEX2RGB(str);
    setTheRGB([result[0], result[1], result[2]]);
    setTheHex(str);
    setTheColor({
      background: "#" + str
    });
  };

  var setHEX = function setHEX(r, g, b) {
    var result = rgbToHex(r, g, b);
    setTheRGB(r, g, b);
    setTheHex(result);
    setTheColor({
      background: "#" + result
    });
  };

  return __jsx("div", {
    style: theColor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, "Hello Next.js"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, "Red"), __jsx("input", {
    type: "text",
    placeholder: "Enter Red value",
    value: theRGB[0],
    onChange: function onChange(e) {},
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, "Green"), __jsx("input", {
    type: "text",
    placeholder: "Enter Green value",
    value: theRGB[1],
    onChange: function onChange(e) {},
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }, "Blue"), __jsx("input", {
    type: "text",
    placeholder: "Enter Blue value",
    value: theRGB[2],
    onChange: function onChange(e) {},
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }), __jsx("input", {
    type: "text",
    placeholder: "Enter value",
    maxLength: "6",
    value: theHex,
    onChange: function onChange(e) {
      setRBG(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.c68a5ef525dc62470bba.hot-update.js.map