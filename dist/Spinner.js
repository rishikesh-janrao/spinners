"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Spinner.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const Spinner = _ref => {
  let {
    type = 'ring',
    size = 5,
    color = '#61dafb',
    secondaryColor = '#ffffff',
    backgroundColor = '#282c34',
    speed = 1,
    borderWidth = 3,
    style = {}
  } = _ref;
  const spinnerStyle = _objectSpread({
    width: "".concat(size, "rem"),
    height: "".concat(size, "rem"),
    animation: "spin ".concat(speed, "s linear infinite")
  }, style);

  // Normalize type to handle both string names and numbers for backward compatibility
  const normalizedType = typeof type === 'number' ? type : type.toLowerCase();

  // Ring Spinner - Circle with rotating border
  if (normalizedType === 1 || normalizedType === 'ring' || normalizedType === 'circle') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "spinner spinner-ring",
      style: spinnerStyle
    }, /*#__PURE__*/_react.default.createElement("span", {
      style: {
        borderTopColor: color,
        borderWidth: "".concat(borderWidth, "px")
      }
    }));
  }

  // Dual Spinner - Half-circle with two colors
  if (normalizedType === 2 || normalizedType === 'dual' || normalizedType === 'half-circle') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "spinner spinner-dual",
      style: spinnerStyle
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        backgroundColor: color
      }
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "spinner-dual-inner",
      style: {
        backgroundColor
      }
    }), /*#__PURE__*/_react.default.createElement("div", {
      style: {
        backgroundColor: secondaryColor
      }
    }));
  }

  // Dots Spinner - Four-quadrant compact spinner
  if (normalizedType === 3 || normalizedType === 'dots' || normalizedType === 'quadrant') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "spinner spinner-dots",
      style: spinnerStyle
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "inner-block",
      style: {
        backgroundColor: color
      }
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "inner-block"
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "spinner-dots-inner",
      style: {
        backgroundColor
      }
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "inner-block"
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "inner-block",
      style: {
        backgroundColor: color
      }
    }));
  }

  // Pulse Spinner - Growing and shrinking circle
  if (normalizedType === 4 || normalizedType === 'pulse' || normalizedType === 'bounce') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "spinner spinner-pulse",
      style: _objectSpread(_objectSpread({}, spinnerStyle), {}, {
        animation: "pulse ".concat(speed, "s ease-in-out infinite")
      })
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        backgroundColor: color
      }
    }));
  }

  // Bars Spinner - Three vertical bars
  if (normalizedType === 5 || normalizedType === 'bars' || normalizedType === 'wave') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "spinner spinner-bars",
      style: _objectSpread(_objectSpread({}, spinnerStyle), {}, {
        animation: 'none'
      })
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        backgroundColor: color,
        animationDuration: "".concat(speed, "s")
      }
    }), /*#__PURE__*/_react.default.createElement("div", {
      style: {
        backgroundColor: color,
        animationDuration: "".concat(speed, "s"),
        animationDelay: "".concat(speed * 0.15, "s")
      }
    }), /*#__PURE__*/_react.default.createElement("div", {
      style: {
        backgroundColor: color,
        animationDuration: "".concat(speed, "s"),
        animationDelay: "".concat(speed * 0.3, "s")
      }
    }));
  }

  // Rotating Squares Spinner - Two squares rotating in opposite directions
  if (normalizedType === 6 || normalizedType === 'grid' || normalizedType === 'squares') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "spinner spinner-rotating-squares",
      style: _objectSpread(_objectSpread({}, spinnerStyle), {}, {
        animation: 'none'
      })
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        borderColor: color,
        animationDuration: "".concat(speed, "s")
      }
    }), /*#__PURE__*/_react.default.createElement("div", {
      style: {
        borderColor: color,
        animationDuration: "".concat(speed * 1.5, "s")
      }
    }));
  }

  // Double Ring - Two concentric rings
  if (normalizedType === 7 || normalizedType === 'double-ring' || normalizedType === 'orbit') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "spinner spinner-double-ring",
      style: _objectSpread(_objectSpread({}, spinnerStyle), {}, {
        animation: 'none'
      })
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "outer-ring",
      style: {
        borderTopColor: color,
        borderWidth: "".concat(borderWidth, "px"),
        animationDuration: "".concat(speed, "s")
      }
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "inner-ring",
      style: {
        borderTopColor: secondaryColor,
        borderWidth: "".concat(borderWidth, "px"),
        animationDuration: "".concat(speed * 0.75, "s")
      }
    }));
  }

  // Spinner Dots - Circle of dots
  if (normalizedType === 8 || normalizedType === 'circle-dots' || normalizedType === 'dots-circle') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "spinner spinner-circle-dots",
      style: _objectSpread(_objectSpread({}, spinnerStyle), {}, {
        animation: 'none'
      })
    }, [...Array(8)].map((_, i) => /*#__PURE__*/_react.default.createElement("div", {
      key: i,
      style: {
        backgroundColor: color,
        animationDuration: "".concat(speed, "s"),
        animationDelay: "".concat(speed * i / 8, "s"),
        transform: "rotate(".concat(i * 45, "deg) translateY(-150%)")
      }
    })));
  }

  // Flip Spinner - Flipping card effect
  if (normalizedType === 9 || normalizedType === 'flip' || normalizedType === 'card') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "spinner spinner-flip",
      style: _objectSpread(_objectSpread({}, spinnerStyle), {}, {
        animation: "flip ".concat(speed, "s ease-in-out infinite")
      })
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        backgroundColor: color
      }
    }));
  }

  // Gooey Spinner - Merging dots effect
  if (normalizedType === 10 || normalizedType === 'gooey' || normalizedType === 'merge') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "spinner spinner-gooey",
      style: _objectSpread(_objectSpread({}, spinnerStyle), {}, {
        animation: 'none'
      })
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        backgroundColor: color,
        animationDuration: "".concat(speed, "s")
      }
    }), /*#__PURE__*/_react.default.createElement("div", {
      style: {
        backgroundColor: color,
        animationDuration: "".concat(speed, "s")
      }
    }));
  }

  // Corner Spinner - Dot moving through corners
  if (normalizedType === 11 || normalizedType === 'corner' || normalizedType === 'square') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "spinner spinner-corner",
      style: _objectSpread(_objectSpread({}, spinnerStyle), {}, {
        animation: 'none'
      })
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        backgroundColor: color,
        animationDuration: "".concat(speed * 2, "s")
      }
    }));
  }

  // Ripple Spinner - Expanding circles
  if (normalizedType === 12 || normalizedType === 'ripple' || normalizedType === 'wave-circle') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "spinner spinner-ripple",
      style: _objectSpread(_objectSpread({}, spinnerStyle), {}, {
        animation: 'none'
      })
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        borderColor: color,
        animationDuration: "".concat(speed * 2, "s")
      }
    }), /*#__PURE__*/_react.default.createElement("div", {
      style: {
        borderColor: color,
        animationDuration: "".concat(speed * 2, "s")
      }
    }));
  }

  // Pendulum Spinner - Swinging dot
  if (normalizedType === 13 || normalizedType === 'pendulum' || normalizedType === 'swing') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "spinner spinner-pendulum",
      style: _objectSpread(_objectSpread({}, spinnerStyle), {}, {
        animation: 'none'
      })
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        backgroundColor: color,
        animationDuration: "".concat(speed, "s")
      }
    }));
  }

  // Snake Spinner - Vertical bars with wave effect
  if (normalizedType === 14 || normalizedType === 'snake' || normalizedType === 'equalizer') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "spinner spinner-snake",
      style: _objectSpread(_objectSpread({}, spinnerStyle), {}, {
        animation: 'none'
      })
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        backgroundColor: color,
        animationDuration: "".concat(speed, "s")
      }
    }), /*#__PURE__*/_react.default.createElement("div", {
      style: {
        backgroundColor: color,
        animationDuration: "".concat(speed, "s")
      }
    }), /*#__PURE__*/_react.default.createElement("div", {
      style: {
        backgroundColor: color,
        animationDuration: "".concat(speed, "s")
      }
    }), /*#__PURE__*/_react.default.createElement("div", {
      style: {
        backgroundColor: color,
        animationDuration: "".concat(speed, "s")
      }
    }), /*#__PURE__*/_react.default.createElement("div", {
      style: {
        backgroundColor: color,
        animationDuration: "".concat(speed, "s")
      }
    }));
  }

  // Bounce Dots - Three bouncing dots
  if (normalizedType === 15 || normalizedType === 'bounce-dots' || normalizedType === 'jumping') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "spinner spinner-bounce-dots",
      style: _objectSpread(_objectSpread({}, spinnerStyle), {}, {
        animation: 'none'
      })
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        backgroundColor: color,
        animationDuration: "".concat(speed, "s")
      }
    }), /*#__PURE__*/_react.default.createElement("div", {
      style: {
        backgroundColor: color,
        animationDuration: "".concat(speed, "s")
      }
    }), /*#__PURE__*/_react.default.createElement("div", {
      style: {
        backgroundColor: color,
        animationDuration: "".concat(speed, "s")
      }
    }));
  }

  // Spiral Spinner - Dots spiraling outward
  if (normalizedType === 16 || normalizedType === 'spiral') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "spinner spinner-spiral",
      style: _objectSpread(_objectSpread({}, spinnerStyle), {}, {
        animation: 'none'
      })
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        backgroundColor: color,
        animationDuration: "".concat(speed * 2, "s")
      }
    }), /*#__PURE__*/_react.default.createElement("div", {
      style: {
        backgroundColor: color,
        animationDuration: "".concat(speed * 2, "s")
      }
    }), /*#__PURE__*/_react.default.createElement("div", {
      style: {
        backgroundColor: color,
        animationDuration: "".concat(speed * 2, "s")
      }
    }), /*#__PURE__*/_react.default.createElement("div", {
      style: {
        backgroundColor: color,
        animationDuration: "".concat(speed * 2, "s")
      }
    }));
  }

  // Clock Spinner - Clock hand rotating
  if (normalizedType === 17 || normalizedType === 'clock' || normalizedType === 'hand') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "spinner spinner-clock",
      style: _objectSpread(_objectSpread({}, spinnerStyle), {}, {
        borderColor: color,
        color: color,
        animation: 'none'
      })
    }, /*#__PURE__*/_react.default.createElement("style", null, ".spinner-clock::before { animation-duration: ".concat(speed, "s !important; }")));
  }

  // Gradient Spinner - Conic gradient rotation
  if (normalizedType === 18 || normalizedType === 'gradient' || normalizedType === 'conic') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "spinner spinner-gradient",
      style: _objectSpread(_objectSpread({}, spinnerStyle), {}, {
        color: color,
        animationDuration: "".concat(speed, "s")
      })
    });
  }

  // Zigzag Spinner - Dot moving left to right
  if (normalizedType === 19 || normalizedType === 'zigzag' || normalizedType === 'slider') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "spinner spinner-zigzag",
      style: _objectSpread(_objectSpread({}, spinnerStyle), {}, {
        animation: 'none'
      })
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        backgroundColor: color,
        animationDuration: "".concat(speed, "s")
      }
    }));
  }

  // Orbit Spinner - Dot orbiting around circle
  if (normalizedType === 20 || normalizedType === 'orbit' || normalizedType === 'planet') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "spinner spinner-orbit",
      style: _objectSpread(_objectSpread({}, spinnerStyle), {}, {
        borderColor: "".concat(color, "40"),
        animation: 'none'
      })
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        backgroundColor: color,
        animationDuration: "".concat(speed, "s")
      }
    }));
  }

  // Square Spin - Square morphing to circle
  if (normalizedType === 21 || normalizedType === 'square-spin' || normalizedType === 'morph') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "spinner spinner-square-spin",
      style: _objectSpread(_objectSpread({}, spinnerStyle), {}, {
        animation: 'none'
      })
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        backgroundColor: color,
        animationDuration: "".concat(speed, "s")
      }
    }));
  }

  // Slice Spinner - Pie slice rotating
  if (normalizedType === 22 || normalizedType === 'slice' || normalizedType === 'pie') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "spinner spinner-slice",
      style: _objectSpread(_objectSpread({}, spinnerStyle), {}, {
        animation: 'none'
      })
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        backgroundColor: color,
        animationDuration: "".concat(speed, "s")
      }
    }));
  }

  // Bouncing Ball Spinner - Ball bouncing up and down
  if (normalizedType === 23 || normalizedType === 'ping' || normalizedType === 'sonar') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "spinner spinner-bouncing-ball",
      style: _objectSpread(_objectSpread({}, spinnerStyle), {}, {
        animation: 'none'
      })
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        backgroundColor: color,
        animationDuration: "".concat(speed, "s")
      }
    }));
  }

  // Infinity Spinner - Figure 8 pattern
  if (normalizedType === 24 || normalizedType === 'infinity' || normalizedType === 'figure8') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "spinner spinner-infinity",
      style: _objectSpread(_objectSpread({}, spinnerStyle), {}, {
        animation: 'none'
      })
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        backgroundColor: color,
        animationDuration: "".concat(speed * 2, "s")
      }
    }));
  }

  // Windmill Spinner - Square rotating with changing border radius
  if (normalizedType === 25 || normalizedType === 'windmill' || normalizedType === 'propeller') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "spinner spinner-windmill",
      style: _objectSpread(_objectSpread({}, spinnerStyle), {}, {
        animation: 'none'
      })
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        backgroundColor: color,
        animationDuration: "".concat(speed, "s")
      }
    }));
  }

  // Hexagon Spinner - Rotating hexagon
  if (normalizedType === 26 || normalizedType === 'hexagon') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "spinner spinner-hexagon",
      style: _objectSpread(_objectSpread({}, spinnerStyle), {}, {
        animation: 'none'
      })
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        backgroundColor: color,
        animationDuration: "".concat(speed, "s")
      }
    }));
  }

  // Triangle Spin Spinner - Rotating triangle
  if (normalizedType === 27 || normalizedType === 'triangle-spin' || normalizedType === 'triangle') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "spinner spinner-triangle-spin",
      style: _objectSpread(_objectSpread({}, spinnerStyle), {}, {
        animation: 'none'
      })
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        borderBottomColor: color,
        animationDuration: "".concat(speed, "s")
      }
    }));
  }

  // Diamond Spinner - Rotating diamond
  if (normalizedType === 28 || normalizedType === 'diamond') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "spinner spinner-diamond",
      style: _objectSpread(_objectSpread({}, spinnerStyle), {}, {
        animation: 'none'
      })
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        backgroundColor: color,
        animationDuration: "".concat(speed, "s")
      }
    }));
  }

  // Star Spinner - Rotating star
  if (normalizedType === 29 || normalizedType === 'star') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "spinner spinner-star",
      style: _objectSpread(_objectSpread({}, spinnerStyle), {}, {
        animation: 'none'
      })
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        backgroundColor: color,
        animationDuration: "".concat(speed, "s")
      }
    }));
  }

  // Spinner Crosses - Rotating crosses
  if (normalizedType === 30 || normalizedType === 'gear' || normalizedType === 'cog') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "spinner spinner-crosses",
      style: _objectSpread(_objectSpread({}, spinnerStyle), {}, {
        animation: 'none'
      })
    }, [...Array(4)].map((_, i) => /*#__PURE__*/_react.default.createElement("div", {
      key: i,
      style: {
        backgroundColor: color,
        animationDuration: "".concat(speed, "s"),
        animationDelay: "".concat(speed * i / 4, "s")
      }
    })));
  }

  // Dots Wave Spinner - Horizontal wave of dots
  if (normalizedType === 31 || normalizedType === 'dots-wave') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "spinner spinner-dots-wave",
      style: _objectSpread(_objectSpread({}, spinnerStyle), {}, {
        animation: 'none'
      })
    }, [...Array(5)].map((_, i) => /*#__PURE__*/_react.default.createElement("div", {
      key: i,
      style: {
        backgroundColor: color,
        animationDuration: "".concat(speed, "s")
      }
    })));
  }

  // Worm Spinner - Stretching worm
  if (normalizedType === 32 || normalizedType === 'worm') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "spinner spinner-worm",
      style: _objectSpread(_objectSpread({}, spinnerStyle), {}, {
        animation: 'none'
      })
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        backgroundColor: color,
        animationDuration: "".concat(speed, "s")
      }
    }));
  }

  // Squares Rotate Spinner - Four rotating squares
  if (normalizedType === 33 || normalizedType === 'squares-rotate') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "spinner spinner-squares-rotate",
      style: _objectSpread(_objectSpread({}, spinnerStyle), {}, {
        animation: 'none'
      })
    }, [...Array(4)].map((_, i) => /*#__PURE__*/_react.default.createElement("div", {
      key: i,
      style: {
        backgroundColor: color,
        animationDuration: "".concat(speed, "s")
      }
    })));
  }

  // Pulse Ring Spinner - Pulsing ring with growing effect
  if (normalizedType === 34 || normalizedType === 'helix' || normalizedType === 'dna') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "spinner spinner-pulse-ring",
      style: _objectSpread(_objectSpread({}, spinnerStyle), {}, {
        animation: 'none'
      })
    }, [...Array(3)].map((_, i) => /*#__PURE__*/_react.default.createElement("div", {
      key: i,
      style: {
        borderColor: color,
        animationDuration: "".concat(speed * 1.5, "s"),
        animationDelay: "".concat(speed * i * 0.5, "s")
      }
    })));
  }

  // Circles Merge Spinner - Two circles merging
  if (normalizedType === 35 || normalizedType === 'circles-merge') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "spinner spinner-circles-merge",
      style: _objectSpread(_objectSpread({}, spinnerStyle), {}, {
        animation: 'none'
      })
    }, [...Array(2)].map((_, i) => /*#__PURE__*/_react.default.createElement("div", {
      key: i,
      style: {
        backgroundColor: color,
        animationDuration: "".concat(speed, "s")
      }
    })));
  }

  // Atom Spinner - Orbiting electrons
  if (normalizedType === 36 || normalizedType === 'atom') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "spinner spinner-atom",
      style: _objectSpread(_objectSpread({}, spinnerStyle), {}, {
        color: color,
        animation: 'none'
      })
    }, [...Array(3)].map((_, i) => /*#__PURE__*/_react.default.createElement("div", {
      key: i,
      style: {
        animationDuration: "".concat(speed, "s")
      }
    })));
  }

  // Bullet Spinner - Bullet firing from gun
  if (normalizedType === 37 || normalizedType === 'roller') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "spinner spinner-bullet",
      style: _objectSpread(_objectSpread({}, spinnerStyle), {}, {
        animation: 'none'
      })
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "gun",
      style: {
        borderColor: color
      }
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "bullet",
      style: {
        backgroundColor: color,
        animationDuration: "".concat(speed, "s")
      }
    }));
  }

  // Cascade Spinner - Cascading squares
  if (normalizedType === 38 || normalizedType === 'cascade') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "spinner spinner-cascade",
      style: _objectSpread(_objectSpread({}, spinnerStyle), {}, {
        animation: 'none'
      })
    }, [...Array(4)].map((_, i) => /*#__PURE__*/_react.default.createElement("div", {
      key: i,
      style: {
        backgroundColor: color,
        animationDuration: "".concat(speed, "s")
      }
    })));
  }

  // Blockchain Spinner - Connected blocks
  if (normalizedType === 39 || normalizedType === 'blockchain') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "spinner spinner-blockchain",
      style: _objectSpread(_objectSpread({}, spinnerStyle), {}, {
        animation: 'none'
      })
    }, [...Array(3)].map((_, i) => /*#__PURE__*/_react.default.createElement("div", {
      key: i,
      style: {
        backgroundColor: color,
        animationDuration: "".concat(speed, "s")
      }
    })));
  }

  // Heartbeat Spinner - Pulsing heart
  if (normalizedType === 40 || normalizedType === 'heartbeat' || normalizedType === 'heart') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "spinner spinner-heartbeat",
      style: _objectSpread(_objectSpread({}, spinnerStyle), {}, {
        color: color,
        animation: 'none'
      })
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        animationDuration: "".concat(speed, "s")
      }
    }));
  }

  // Flower Spinner - Blooming flower
  if (normalizedType === 41 || normalizedType === 'flower' || normalizedType === 'bloom') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "spinner spinner-flower",
      style: _objectSpread(_objectSpread({}, spinnerStyle), {}, {
        animation: 'none'
      })
    }, [...Array(6)].map((_, i) => /*#__PURE__*/_react.default.createElement("div", {
      key: i,
      style: {
        backgroundColor: color,
        animationDuration: "".concat(speed, "s")
      }
    })));
  }

  // Radar Spinner - Radar sweep
  if (normalizedType === 42 || normalizedType === 'radar' || normalizedType === 'sweep') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "spinner spinner-radar",
      style: _objectSpread(_objectSpread({}, spinnerStyle), {}, {
        borderColor: color,
        color: color,
        animation: 'none',
        borderRadius: '50%'
      })
    }, /*#__PURE__*/_react.default.createElement("style", null, ".spinner-radar::before { animation-duration: ".concat(speed, "s !important; }")));
  }

  // Spinner Blocks - Rotating blocks forming circle
  if (normalizedType === 43 || normalizedType === 'wave-circle') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "spinner spinner-blocks",
      style: _objectSpread(_objectSpread({}, spinnerStyle), {}, {
        animation: 'none'
      })
    }, [...Array(8)].map((_, i) => /*#__PURE__*/_react.default.createElement("div", {
      key: i,
      style: {
        backgroundColor: color,
        animationDuration: "".concat(speed, "s"),
        animationDelay: "".concat(speed * i / 8, "s")
      }
    })));
  }

  // Pacman Spinner - Pacman eating dots
  if (normalizedType === 44 || normalizedType === 'pacman') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "spinner spinner-pacman",
      style: _objectSpread(_objectSpread({}, spinnerStyle), {}, {
        color: color,
        animation: 'none'
      })
    }, /*#__PURE__*/_react.default.createElement("style", null, ".spinner-pacman::before { animation-duration: ".concat(speed * 0.5, "s !important; }")), [...Array(3)].map((_, i) => /*#__PURE__*/_react.default.createElement("div", {
      key: i,
      style: {
        backgroundColor: color,
        animationDuration: "".concat(speed, "s")
      }
    })));
  }

  // Hourglass Spinner - Rotating hourglass
  if (normalizedType === 45 || normalizedType === 'hourglass') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "spinner spinner-hourglass",
      style: _objectSpread(_objectSpread({}, spinnerStyle), {}, {
        animation: 'none'
      })
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        borderBottomColor: color,
        animationDuration: "".concat(speed * 2, "s")
      }
    }, /*#__PURE__*/_react.default.createElement("style", null, ".spinner-hourglass div::after { border-top-color: ".concat(color, " !important; }"))));
  }

  // Cube Fold Spinner - Folding cube
  if (normalizedType === 46 || normalizedType === 'cube-fold') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "spinner spinner-cube-fold",
      style: _objectSpread(_objectSpread({}, spinnerStyle), {}, {
        animation: 'none'
      })
    }, [...Array(4)].map((_, i) => /*#__PURE__*/_react.default.createElement("div", {
      key: i,
      style: {
        backgroundColor: color,
        animationDuration: "".concat(speed * 2, "s")
      }
    })));
  }

  // Dashed Ring Spinner - Dashed rotating ring
  if (normalizedType === 47 || normalizedType === 'dashed-ring') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "spinner spinner-dashed-ring",
      style: _objectSpread(_objectSpread({}, spinnerStyle), {}, {
        animation: 'none'
      })
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        borderColor: color,
        animationDuration: "".concat(speed, "s")
      }
    }));
  }

  // Newton Cradle Spinner - Newton's cradle
  if (normalizedType === 48 || normalizedType === 'newton-cradle' || normalizedType === 'cradle') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "spinner spinner-newton-cradle",
      style: _objectSpread(_objectSpread({}, spinnerStyle), {}, {
        color: color,
        animation: 'none'
      })
    }, [...Array(5)].map((_, i) => /*#__PURE__*/_react.default.createElement("div", {
      key: i,
      style: {
        animationDuration: "".concat(speed, "s")
      }
    })));
  }

  // Metronome Spinner - Swinging metronome
  if (normalizedType === 49 || normalizedType === 'metronome') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "spinner spinner-metronome",
      style: _objectSpread(_objectSpread({}, spinnerStyle), {}, {
        animation: 'none'
      })
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        backgroundColor: color,
        animationDuration: "".concat(speed, "s")
      }
    }));
  }

  // Spinner Box - Box with spinning corners
  if (normalizedType === 50 || normalizedType === 'spinner-box' || normalizedType === 'box') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "spinner spinner-spinner-box",
      style: _objectSpread(_objectSpread({}, spinnerStyle), {}, {
        borderColor: color,
        animation: 'none'
      })
    }, [...Array(4)].map((_, i) => /*#__PURE__*/_react.default.createElement("div", {
      key: i,
      style: {
        backgroundColor: color,
        animationDuration: "".concat(speed, "s")
      }
    })));
  }
  return null;
};
var _default = exports.default = Spinner;
