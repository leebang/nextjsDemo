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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/iNks/Documents/DEV/rgbtohex/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // function rgbToHex(r, g, b) {
//     return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }

var helper = function helper(rgb) {
  var hex = Number(rgb).toString(16);

  if (hex.length < 2) {
    hex = "0" + hex;
  }

  return hex;
};

var rgbToHex = function rgbToHex(r, g, b) {
  var red = helper(r);
  var green = helper(g);
  var blue = helper(b);
  return red + green + blue;
};

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
  var _this = this;

  var PostLink = function PostLink(props) {
    return __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/?rgb=".concat((r, g, b)),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 11
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }
    }, props.title)));
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      rValue = _useState[0],
      setRValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      gValue = _useState2[0],
      setGValue = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      bValue = _useState3[0],
      setBValue = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("FFFFFF"),
      theHex = _useState4[0],
      setTheHex = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      theRGB = _useState5[0],
      setTheRGB = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      theColor = _useState6[0],
      setTheColor = _useState6[1];

  var setDefault = function setDefault() {
    setRValue("");
    setGValue("");
    setBValue("");
    setTheHex("");
    setTheColor({
      background: "#FFFFFF"
    });
  };

  var setRGB = function setRGB(str) {
    var result = HEX2RGB(str);
    setRValue(result[0]);
    setGValue(result[1]);
    setBValue(result[2]);
    setTheHex(str);
    setTheColor({
      background: "#" + str
    });
  };

  var setHEX = function setHEX(r, g, b) {
    var result = rgbToHex(r, g, b);
    setRValue(r);
    setGValue(g);
    setBValue(b);
    setTheHex(result);
    setTheColor({
      background: "#" + result
    });
  }; // const updateValue = (r, g, b, hex) => {
  //     const rgbValue = HEX2RGB(hex)
  //     setRValue(rgbValue[0])
  //     setGValue(rgbValue[1])
  //     setBValue(rgbValue[2])
  // }


  return __jsx("div", {
    style: theColor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 9
    }
  }, "Hello Next.js"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, "Red "), " ", rValue, __jsx("input", {
    type: "text",
    placeholder: "Enter Red value",
    value: rValue,
    maxLength: "3",
    onChange: function onChange(e) {
      if (e.target.value) {
        setHEX(e.target.value, gValue, bValue);
      } else {
        setDefault();
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 9
    }
  }, "Green "), " ", gValue, __jsx("input", {
    type: "text",
    placeholder: "Enter Green value",
    value: gValue,
    maxLength: "3",
    onChange: function onChange(e) {
      if (e.target.value) {
        setHEX(rValue, e.target.value, bValue);
      } else {
        setDefault();
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 9
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 9
    }
  }, "Blue "), " ", bValue, __jsx("input", {
    type: "text",
    placeholder: "Enter Blue value",
    value: bValue,
    maxLength: "3",
    onChange: function onChange(e) {
      if (e.target.value) {
        setHEX(rValue, gValue, e.target.value);
      } else {
        setDefault();
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 9
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 9
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 9
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 9
    }
  }, "Hex Value "), theHex, __jsx("input", {
    type: "text",
    placeholder: "Enter value",
    maxLength: "6",
    value: theHex,
    onChange: function onChange(e) {
      if (e.target.value) {
        setRGB(e.target.value);
      } else {
        setDefault();
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 9
    }
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.2cda83abb3bd5b64d424.hot-update.js.map