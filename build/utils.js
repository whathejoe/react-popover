"use strict";

exports.calcBounds = calcBounds;
exports.calcScrollSize = calcScrollSize;
function calcBounds(el) {

  if (el === window) {
    return {
      x: 0,
      y: 0,
      x2: el.innerWidth,
      y2: el.innerHeight,
      w: el.innerWidth,
      h: el.innerHeight
    };
  }

  var b = el.getBoundingClientRect();

  return {
    x: b.left,
    y: b.top,
    x2: b.right,
    y2: b.bottom,
    w: b.right - b.left,
    h: b.bottom - b.top
  };
}

function calcScrollSize(el) {
  return el === window ? { w: el.scrollX, h: el.scrollY } : { w: el.scrollLeft, h: el.scrollTop };
}
Object.defineProperty(exports, "__esModule", {
  value: true
});