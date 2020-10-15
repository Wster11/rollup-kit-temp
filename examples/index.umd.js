/**
 * rollup-kit-template v1.0.0
 * (c) 2020
 * @license MIT
 */
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35730/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.index = factory());
}(this, (function () { 'use strict';

  var answer = 100; // 这是注释

  var index = (function () {
    console.log("the answer is ".concat(answer));
    console.log("1.0.0");
  });

  return index;

})));
