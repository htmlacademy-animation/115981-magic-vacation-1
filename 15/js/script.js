/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/dom7/dist/dom7.modular.js":
/*!************************************************!*\
  !*** ./node_modules/dom7/dist/dom7.modular.js ***!
  \************************************************/
/*! exports provided: $, addClass, removeClass, hasClass, toggleClass, attr, removeAttr, prop, data, removeData, dataset, val, transform, transition, on, off, once, trigger, transitionEnd, animationEnd, width, outerWidth, height, outerHeight, offset, hide, show, styles, css, toArray, each, forEach, filter, map, html, text, is, indexOf, index, eq, append, appendTo, prepend, prependTo, insertBefore, insertAfter, next, nextAll, prev, prevAll, siblings, parent, parents, closest, find, children, remove, detach, add, empty, scrollTo, scrollTop, scrollLeft, animate, stop, click, blur, focus, focusin, focusout, keyup, keydown, keypress, submit, change, mousedown, mousemove, mouseup, mouseenter, mouseleave, mouseout, mouseover, touchstart, touchend, touchmove, resize, scroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$", function() { return $; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasClass", function() { return hasClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleClass", function() { return toggleClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attr", function() { return attr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAttr", function() { return removeAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prop", function() { return prop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeData", function() { return removeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataset", function() { return dataset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "val", function() { return val; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return transform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "off", function() { return off; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "once", function() { return once; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trigger", function() { return trigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transitionEnd", function() { return transitionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationEnd", function() { return animationEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "width", function() { return width; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outerWidth", function() { return outerWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "height", function() { return height; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outerHeight", function() { return outerHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offset", function() { return offset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return hide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show", function() { return show; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "each", function() { return each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is", function() { return is; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexOf", function() { return indexOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "index", function() { return index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eq", function() { return eq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return append; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendTo", function() { return appendTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepend", function() { return prepend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prependTo", function() { return prependTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertBefore", function() { return insertBefore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertAfter", function() { return insertAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "next", function() { return next; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextAll", function() { return nextAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prev", function() { return prev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prevAll", function() { return prevAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siblings", function() { return siblings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parent", function() { return parent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parents", function() { return parents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return closest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "children", function() { return children; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach", function() { return detach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollTo", function() { return scrollTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollTop", function() { return scrollTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollLeft", function() { return scrollLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animate", function() { return animate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stop", function() { return stop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "click", function() { return click; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blur", function() { return blur; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focus", function() { return focus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusin", function() { return focusin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusout", function() { return focusout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyup", function() { return keyup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keydown", function() { return keydown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keypress", function() { return keypress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submit", function() { return submit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "change", function() { return change; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mousedown", function() { return mousedown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mousemove", function() { return mousemove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseup", function() { return mouseup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseenter", function() { return mouseenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseleave", function() { return mouseleave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseout", function() { return mouseout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseover", function() { return mouseover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "touchstart", function() { return touchstart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "touchend", function() { return touchend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "touchmove", function() { return touchmove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resize", function() { return resize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scroll", function() { return scroll; });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/dom7/node_modules/ssr-window/dist/ssr-window.esm.js");
/**
 * Dom7 2.1.5
 * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
 * http://framework7.io/docs/dom.html
 *
 * Copyright 2020, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under MIT
 *
 * Released on: May 15, 2020
 */


class Dom7 {
  constructor(arr) {
    const self = this;
    // Create array-like object
    for (let i = 0; i < arr.length; i += 1) {
      self[i] = arr[i];
    }
    self.length = arr.length;
    // Return collection with methods
    return this;
  }
}

function $(selector, context) {
  const arr = [];
  let i = 0;
  if (selector && !context) {
    if (selector instanceof Dom7) {
      return selector;
    }
  }
  if (selector) {
      // String
    if (typeof selector === 'string') {
      let els;
      let tempParent;
      const html = selector.trim();
      if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
        let toCreate = 'div';
        if (html.indexOf('<li') === 0) toCreate = 'ul';
        if (html.indexOf('<tr') === 0) toCreate = 'tbody';
        if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
        if (html.indexOf('<tbody') === 0) toCreate = 'table';
        if (html.indexOf('<option') === 0) toCreate = 'select';
        tempParent = ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"].createElement(toCreate);
        tempParent.innerHTML = html;
        for (i = 0; i < tempParent.childNodes.length; i += 1) {
          arr.push(tempParent.childNodes[i]);
        }
      } else {
        if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
          // Pure ID selector
          els = [ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"].getElementById(selector.trim().split('#')[1])];
        } else {
          // Other selectors
          els = (context || ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"]).querySelectorAll(selector.trim());
        }
        for (i = 0; i < els.length; i += 1) {
          if (els[i]) arr.push(els[i]);
        }
      }
    } else if (selector.nodeType || selector === ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"] || selector === ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"]) {
      // Node/element
      arr.push(selector);
    } else if (selector.length > 0 && selector[0].nodeType) {
      // Array of elements or instance of Dom
      for (i = 0; i < selector.length; i += 1) {
        arr.push(selector[i]);
      }
    }
  }
  return new Dom7(arr);
}

$.fn = Dom7.prototype;
$.Class = Dom7;
$.Dom7 = Dom7;

function unique(arr) {
  const uniqueArray = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
  }
  return uniqueArray;
}
function toCamelCase(string) {
  return string.toLowerCase().replace(/-(.)/g, (match, group1) => group1.toUpperCase());
}

function requestAnimationFrame(callback) {
  if (ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].requestAnimationFrame) return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].requestAnimationFrame(callback);
  else if (ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].webkitRequestAnimationFrame) return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].webkitRequestAnimationFrame(callback);
  return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].setTimeout(callback, 1000 / 60);
}
function cancelAnimationFrame(id) {
  if (ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].cancelAnimationFrame) return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].cancelAnimationFrame(id);
  else if (ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].webkitCancelAnimationFrame) return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].webkitCancelAnimationFrame(id);
  return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].clearTimeout(id);
}

// Classes and attributes
function addClass(className) {
  if (typeof className === 'undefined') {
    return this;
  }
  const classes = className.split(' ');
  for (let i = 0; i < classes.length; i += 1) {
    for (let j = 0; j < this.length; j += 1) {
      if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') this[j].classList.add(classes[i]);
    }
  }
  return this;
}
function removeClass(className) {
  const classes = className.split(' ');
  for (let i = 0; i < classes.length; i += 1) {
    for (let j = 0; j < this.length; j += 1) {
      if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') this[j].classList.remove(classes[i]);
    }
  }
  return this;
}
function hasClass(className) {
  if (!this[0]) return false;
  return this[0].classList.contains(className);
}
function toggleClass(className) {
  const classes = className.split(' ');
  for (let i = 0; i < classes.length; i += 1) {
    for (let j = 0; j < this.length; j += 1) {
      if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') this[j].classList.toggle(classes[i]);
    }
  }
  return this;
}
function attr(attrs, value) {
  if (arguments.length === 1 && typeof attrs === 'string') {
    // Get attr
    if (this[0]) return this[0].getAttribute(attrs);
    return undefined;
  }

  // Set attrs
  for (let i = 0; i < this.length; i += 1) {
    if (arguments.length === 2) {
      // String
      this[i].setAttribute(attrs, value);
    } else {
      // Object
      // eslint-disable-next-line
      for (const attrName in attrs) {
        this[i][attrName] = attrs[attrName];
        this[i].setAttribute(attrName, attrs[attrName]);
      }
    }
  }
  return this;
}
// eslint-disable-next-line
function removeAttr(attr) {
  for (let i = 0; i < this.length; i += 1) {
    this[i].removeAttribute(attr);
  }
  return this;
}
// eslint-disable-next-line
function prop(props, value) {
  if (arguments.length === 1 && typeof props === 'string') {
    // Get prop
    if (this[0]) return this[0][props];
  } else {
    // Set props
    for (let i = 0; i < this.length; i += 1) {
      if (arguments.length === 2) {
        // String
        this[i][props] = value;
      } else {
        // Object
        // eslint-disable-next-line
        for (const propName in props) {
          this[i][propName] = props[propName];
        }
      }
    }
    return this;
  }
}
function data(key, value) {
  let el;
  if (typeof value === 'undefined') {
    el = this[0];
    // Get value
    if (el) {
      if (el.dom7ElementDataStorage && (key in el.dom7ElementDataStorage)) {
        return el.dom7ElementDataStorage[key];
      }

      const dataKey = el.getAttribute(`data-${key}`);
      if (dataKey) {
        return dataKey;
      }
      return undefined;
    }
    return undefined;
  }

  // Set value
  for (let i = 0; i < this.length; i += 1) {
    el = this[i];
    if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
    el.dom7ElementDataStorage[key] = value;
  }
  return this;
}
function removeData(key) {
  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];
    if (el.dom7ElementDataStorage && el.dom7ElementDataStorage[key]) {
      el.dom7ElementDataStorage[key] = null;
      delete el.dom7ElementDataStorage[key];
    }
  }
}
function dataset() {
  const el = this[0];
  if (!el) return undefined;
  const dataset = {}; // eslint-disable-line
  if (el.dataset) {
    // eslint-disable-next-line
    for (const dataKey in el.dataset) {
      dataset[dataKey] = el.dataset[dataKey];
    }
  } else {
    for (let i = 0; i < el.attributes.length; i += 1) {
      // eslint-disable-next-line
      const attr = el.attributes[i];
      if (attr.name.indexOf('data-') >= 0) {
        dataset[toCamelCase(attr.name.split('data-')[1])] = attr.value;
      }
    }
  }
  // eslint-disable-next-line
  for (const key in dataset) {
    if (dataset[key] === 'false') dataset[key] = false;
    else if (dataset[key] === 'true') dataset[key] = true;
    else if (parseFloat(dataset[key]) === dataset[key] * 1) dataset[key] *= 1;
  }
  return dataset;
}
function val(value) {
  const dom = this;
  if (typeof value === 'undefined') {
    if (dom[0]) {
      if (dom[0].multiple && dom[0].nodeName.toLowerCase() === 'select') {
        const values = [];
        for (let i = 0; i < dom[0].selectedOptions.length; i += 1) {
          values.push(dom[0].selectedOptions[i].value);
        }
        return values;
      }
      return dom[0].value;
    }
    return undefined;
  }

  for (let i = 0; i < dom.length; i += 1) {
    const el = dom[i];
    if (Array.isArray(value) && el.multiple && el.nodeName.toLowerCase() === 'select') {
      for (let j = 0; j < el.options.length; j += 1) {
        el.options[j].selected = value.indexOf(el.options[j].value) >= 0;
      }
    } else {
      el.value = value;
    }
  }
  return dom;
}
// Transforms
// eslint-disable-next-line
function transform(transform) {
  for (let i = 0; i < this.length; i += 1) {
    const elStyle = this[i].style;
    elStyle.webkitTransform = transform;
    elStyle.transform = transform;
  }
  return this;
}
function transition(duration) {
  if (typeof duration !== 'string') {
    duration = `${duration}ms`; // eslint-disable-line
  }
  for (let i = 0; i < this.length; i += 1) {
    const elStyle = this[i].style;
    elStyle.webkitTransitionDuration = duration;
    elStyle.transitionDuration = duration;
  }
  return this;
}
// Events
function on(...args) {
  let [eventType, targetSelector, listener, capture] = args;
  if (typeof args[1] === 'function') {
    [eventType, listener, capture] = args;
    targetSelector = undefined;
  }
  if (!capture) capture = false;

  function handleLiveEvent(e) {
    const target = e.target;
    if (!target) return;
    const eventData = e.target.dom7EventData || [];
    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }
    if ($(target).is(targetSelector)) listener.apply(target, eventData);
    else {
      const parents = $(target).parents(); // eslint-disable-line
      for (let k = 0; k < parents.length; k += 1) {
        if ($(parents[k]).is(targetSelector)) listener.apply(parents[k], eventData);
      }
    }
  }
  function handleEvent(e) {
    const eventData = e && e.target ? e.target.dom7EventData || [] : [];
    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }
    listener.apply(this, eventData);
  }
  const events = eventType.split(' ');
  let j;
  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];
    if (!targetSelector) {
      for (j = 0; j < events.length; j += 1) {
        const event = events[j];
        if (!el.dom7Listeners) el.dom7Listeners = {};
        if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
        el.dom7Listeners[event].push({
          listener,
          proxyListener: handleEvent,
        });
        el.addEventListener(event, handleEvent, capture);
      }
    } else {
      // Live events
      for (j = 0; j < events.length; j += 1) {
        const event = events[j];
        if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
        if (!el.dom7LiveListeners[event]) el.dom7LiveListeners[event] = [];
        el.dom7LiveListeners[event].push({
          listener,
          proxyListener: handleLiveEvent,
        });
        el.addEventListener(event, handleLiveEvent, capture);
      }
    }
  }
  return this;
}
function off(...args) {
  let [eventType, targetSelector, listener, capture] = args;
  if (typeof args[1] === 'function') {
    [eventType, listener, capture] = args;
    targetSelector = undefined;
  }
  if (!capture) capture = false;

  const events = eventType.split(' ');
  for (let i = 0; i < events.length; i += 1) {
    const event = events[i];
    for (let j = 0; j < this.length; j += 1) {
      const el = this[j];
      let handlers;
      if (!targetSelector && el.dom7Listeners) {
        handlers = el.dom7Listeners[event];
      } else if (targetSelector && el.dom7LiveListeners) {
        handlers = el.dom7LiveListeners[event];
      }
      if (handlers && handlers.length) {
        for (let k = handlers.length - 1; k >= 0; k -= 1) {
          const handler = handlers[k];
          if (listener && handler.listener === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (!listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          }
        }
      }
    }
  }
  return this;
}
function once(...args) {
  const dom = this;
  let [eventName, targetSelector, listener, capture] = args;
  if (typeof args[1] === 'function') {
    [eventName, listener, capture] = args;
    targetSelector = undefined;
  }
  function onceHandler(...eventArgs) {
    listener.apply(this, eventArgs);
    dom.off(eventName, targetSelector, onceHandler, capture);
    if (onceHandler.dom7proxy) {
      delete onceHandler.dom7proxy;
    }
  }
  onceHandler.dom7proxy = listener;
  return dom.on(eventName, targetSelector, onceHandler, capture);
}
function trigger(...args) {
  const events = args[0].split(' ');
  const eventData = args[1];
  for (let i = 0; i < events.length; i += 1) {
    const event = events[i];
    for (let j = 0; j < this.length; j += 1) {
      const el = this[j];
      let evt;
      try {
        evt = new ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].CustomEvent(event, {
          detail: eventData,
          bubbles: true,
          cancelable: true,
        });
      } catch (e) {
        evt = ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"].createEvent('Event');
        evt.initEvent(event, true, true);
        evt.detail = eventData;
      }
      // eslint-disable-next-line
      el.dom7EventData = args.filter((data, dataIndex) => dataIndex > 0);
      el.dispatchEvent(evt);
      el.dom7EventData = [];
      delete el.dom7EventData;
    }
  }
  return this;
}
function transitionEnd(callback) {
  const events = ['webkitTransitionEnd', 'transitionend'];
  const dom = this;
  let i;
  function fireCallBack(e) {
    /* jshint validthis:true */
    if (e.target !== this) return;
    callback.call(this, e);
    for (i = 0; i < events.length; i += 1) {
      dom.off(events[i], fireCallBack);
    }
  }
  if (callback) {
    for (i = 0; i < events.length; i += 1) {
      dom.on(events[i], fireCallBack);
    }
  }
  return this;
}
function animationEnd(callback) {
  const events = ['webkitAnimationEnd', 'animationend'];
  const dom = this;
  let i;
  function fireCallBack(e) {
    if (e.target !== this) return;
    callback.call(this, e);
    for (i = 0; i < events.length; i += 1) {
      dom.off(events[i], fireCallBack);
    }
  }
  if (callback) {
    for (i = 0; i < events.length; i += 1) {
      dom.on(events[i], fireCallBack);
    }
  }
  return this;
}
// Sizing/Styles
function width() {
  if (this[0] === ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"]) {
    return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].innerWidth;
  }

  if (this.length > 0) {
    return parseFloat(this.css('width'));
  }

  return null;
}
function outerWidth(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      // eslint-disable-next-line
      const styles = this.styles();
      return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'));
    }
    return this[0].offsetWidth;
  }
  return null;
}
function height() {
  if (this[0] === ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"]) {
    return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].innerHeight;
  }

  if (this.length > 0) {
    return parseFloat(this.css('height'));
  }

  return null;
}
function outerHeight(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      // eslint-disable-next-line
      const styles = this.styles();
      return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom'));
    }
    return this[0].offsetHeight;
  }
  return null;
}
function offset() {
  if (this.length > 0) {
    const el = this[0];
    const box = el.getBoundingClientRect();
    const body = ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"].body;
    const clientTop = el.clientTop || body.clientTop || 0;
    const clientLeft = el.clientLeft || body.clientLeft || 0;
    const scrollTop = el === ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"] ? ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].scrollY : el.scrollTop;
    const scrollLeft = el === ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"] ? ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].scrollX : el.scrollLeft;
    return {
      top: (box.top + scrollTop) - clientTop,
      left: (box.left + scrollLeft) - clientLeft,
    };
  }

  return null;
}
function hide() {
  for (let i = 0; i < this.length; i += 1) {
    this[i].style.display = 'none';
  }
  return this;
}
function show() {
  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];
    if (el.style.display === 'none') {
      el.style.display = '';
    }
    if (ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].getComputedStyle(el, null).getPropertyValue('display') === 'none') {
      // Still not visible
      el.style.display = 'block';
    }
  }
  return this;
}
function styles() {
  if (this[0]) return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].getComputedStyle(this[0], null);
  return {};
}
function css(props, value) {
  let i;
  if (arguments.length === 1) {
    if (typeof props === 'string') {
      if (this[0]) return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].getComputedStyle(this[0], null).getPropertyValue(props);
    } else {
      for (i = 0; i < this.length; i += 1) {
        // eslint-disable-next-line
        for (let prop in props) {
          this[i].style[prop] = props[prop];
        }
      }
      return this;
    }
  }
  if (arguments.length === 2 && typeof props === 'string') {
    for (i = 0; i < this.length; i += 1) {
      this[i].style[props] = value;
    }
    return this;
  }
  return this;
}

// Dom manipulation
function toArray() {
  const arr = [];
  for (let i = 0; i < this.length; i += 1) {
    arr.push(this[i]);
  }
  return arr;
}
// Iterate over the collection passing elements to `callback`
function each(callback) {
  // Don't bother continuing without a callback
  if (!callback) return this;
  // Iterate over the current collection
  for (let i = 0; i < this.length; i += 1) {
    // If the callback returns false
    if (callback.call(this[i], i, this[i]) === false) {
      // End the loop early
      return this;
    }
  }
  // Return `this` to allow chained DOM operations
  return this;
}
function forEach(callback) {
  // Don't bother continuing without a callback
  if (!callback) return this;
  // Iterate over the current collection
  for (let i = 0; i < this.length; i += 1) {
    // If the callback returns false
    if (callback.call(this[i], this[i], i) === false) {
      // End the loop early
      return this;
    }
  }
  // Return `this` to allow chained DOM operations
  return this;
}
function filter(callback) {
  const matchedItems = [];
  const dom = this;
  for (let i = 0; i < dom.length; i += 1) {
    if (callback.call(dom[i], i, dom[i])) matchedItems.push(dom[i]);
  }
  return new Dom7(matchedItems);
}
function map(callback) {
  const modifiedItems = [];
  const dom = this;
  for (let i = 0; i < dom.length; i += 1) {
    modifiedItems.push(callback.call(dom[i], i, dom[i]));
  }
  return new Dom7(modifiedItems);
}
// eslint-disable-next-line
function html(html) {
  if (typeof html === 'undefined') {
    return this[0] ? this[0].innerHTML : undefined;
  }

  for (let i = 0; i < this.length; i += 1) {
    this[i].innerHTML = html;
  }
  return this;
}
// eslint-disable-next-line
function text(text) {
  if (typeof text === 'undefined') {
    if (this[0]) {
      return this[0].textContent.trim();
    }
    return null;
  }

  for (let i = 0; i < this.length; i += 1) {
    this[i].textContent = text;
  }
  return this;
}
function is(selector) {
  const el = this[0];
  let compareWith;
  let i;
  if (!el || typeof selector === 'undefined') return false;
  if (typeof selector === 'string') {
    if (el.matches) return el.matches(selector);
    else if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
    else if (el.msMatchesSelector) return el.msMatchesSelector(selector);

    compareWith = $(selector);
    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }
    return false;
  } else if (selector === ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"]) return el === ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"];
  else if (selector === ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"]) return el === ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"];

  if (selector.nodeType || selector instanceof Dom7) {
    compareWith = selector.nodeType ? [selector] : selector;
    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }
    return false;
  }
  return false;
}
function indexOf(el) {
  for (let i = 0; i < this.length; i += 1) {
    if (this[i] === el) return i;
  }
  return -1;
}
function index() {
  let child = this[0];
  let i;
  if (child) {
    i = 0;
    // eslint-disable-next-line
    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }
    return i;
  }
  return undefined;
}
// eslint-disable-next-line
function eq(index) {
  if (typeof index === 'undefined') return this;
  const length = this.length;
  let returnIndex;
  if (index > length - 1) {
    return new Dom7([]);
  }
  if (index < 0) {
    returnIndex = length + index;
    if (returnIndex < 0) return new Dom7([]);
    return new Dom7([this[returnIndex]]);
  }
  return new Dom7([this[index]]);
}
function append(...args) {
  let newChild;

  for (let k = 0; k < args.length; k += 1) {
    newChild = args[k];
    for (let i = 0; i < this.length; i += 1) {
      if (typeof newChild === 'string') {
        const tempDiv = ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"].createElement('div');
        tempDiv.innerHTML = newChild;
        while (tempDiv.firstChild) {
          this[i].appendChild(tempDiv.firstChild);
        }
      } else if (newChild instanceof Dom7) {
        for (let j = 0; j < newChild.length; j += 1) {
          this[i].appendChild(newChild[j]);
        }
      } else {
        this[i].appendChild(newChild);
      }
    }
  }

  return this;
}
// eslint-disable-next-line
function appendTo(parent) {
  $(parent).append(this);
  return this;
}
function prepend(newChild) {
  let i;
  let j;
  for (i = 0; i < this.length; i += 1) {
    if (typeof newChild === 'string') {
      const tempDiv = ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"].createElement('div');
      tempDiv.innerHTML = newChild;
      for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
        this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
      }
    } else if (newChild instanceof Dom7) {
      for (j = 0; j < newChild.length; j += 1) {
        this[i].insertBefore(newChild[j], this[i].childNodes[0]);
      }
    } else {
      this[i].insertBefore(newChild, this[i].childNodes[0]);
    }
  }
  return this;
}
// eslint-disable-next-line
function prependTo(parent) {
  $(parent).prepend(this);
  return this;
}
function insertBefore(selector) {
  const before = $(selector);
  for (let i = 0; i < this.length; i += 1) {
    if (before.length === 1) {
      before[0].parentNode.insertBefore(this[i], before[0]);
    } else if (before.length > 1) {
      for (let j = 0; j < before.length; j += 1) {
        before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
      }
    }
  }
}
function insertAfter(selector) {
  const after = $(selector);
  for (let i = 0; i < this.length; i += 1) {
    if (after.length === 1) {
      after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
    } else if (after.length > 1) {
      for (let j = 0; j < after.length; j += 1) {
        after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
      }
    }
  }
}
function next(selector) {
  if (this.length > 0) {
    if (selector) {
      if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
        return new Dom7([this[0].nextElementSibling]);
      }
      return new Dom7([]);
    }

    if (this[0].nextElementSibling) return new Dom7([this[0].nextElementSibling]);
    return new Dom7([]);
  }
  return new Dom7([]);
}
function nextAll(selector) {
  const nextEls = [];
  let el = this[0];
  if (!el) return new Dom7([]);
  while (el.nextElementSibling) {
    const next = el.nextElementSibling; // eslint-disable-line
    if (selector) {
      if ($(next).is(selector)) nextEls.push(next);
    } else nextEls.push(next);
    el = next;
  }
  return new Dom7(nextEls);
}
function prev(selector) {
  if (this.length > 0) {
    const el = this[0];
    if (selector) {
      if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
        return new Dom7([el.previousElementSibling]);
      }
      return new Dom7([]);
    }

    if (el.previousElementSibling) return new Dom7([el.previousElementSibling]);
    return new Dom7([]);
  }
  return new Dom7([]);
}
function prevAll(selector) {
  const prevEls = [];
  let el = this[0];
  if (!el) return new Dom7([]);
  while (el.previousElementSibling) {
    const prev = el.previousElementSibling; // eslint-disable-line
    if (selector) {
      if ($(prev).is(selector)) prevEls.push(prev);
    } else prevEls.push(prev);
    el = prev;
  }
  return new Dom7(prevEls);
}
function siblings(selector) {
  return this.nextAll(selector).add(this.prevAll(selector));
}
function parent(selector) {
  const parents = []; // eslint-disable-line
  for (let i = 0; i < this.length; i += 1) {
    if (this[i].parentNode !== null) {
      if (selector) {
        if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
      } else {
        parents.push(this[i].parentNode);
      }
    }
  }
  return $(unique(parents));
}
function parents(selector) {
  const parents = []; // eslint-disable-line
  for (let i = 0; i < this.length; i += 1) {
    let parent = this[i].parentNode; // eslint-disable-line
    while (parent) {
      if (selector) {
        if ($(parent).is(selector)) parents.push(parent);
      } else {
        parents.push(parent);
      }
      parent = parent.parentNode;
    }
  }
  return $(unique(parents));
}
function closest(selector) {
  let closest = this; // eslint-disable-line
  if (typeof selector === 'undefined') {
    return new Dom7([]);
  }
  if (!closest.is(selector)) {
    closest = closest.parents(selector).eq(0);
  }
  return closest;
}
function find(selector) {
  const foundElements = [];
  for (let i = 0; i < this.length; i += 1) {
    const found = this[i].querySelectorAll(selector);
    for (let j = 0; j < found.length; j += 1) {
      foundElements.push(found[j]);
    }
  }
  return new Dom7(foundElements);
}
function children(selector) {
  const children = []; // eslint-disable-line
  for (let i = 0; i < this.length; i += 1) {
    const childNodes = this[i].childNodes;

    for (let j = 0; j < childNodes.length; j += 1) {
      if (!selector) {
        if (childNodes[j].nodeType === 1) children.push(childNodes[j]);
      } else if (childNodes[j].nodeType === 1 && $(childNodes[j]).is(selector)) {
        children.push(childNodes[j]);
      }
    }
  }
  return new Dom7(unique(children));
}
function remove() {
  for (let i = 0; i < this.length; i += 1) {
    if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
  }
  return this;
}
function detach() {
  return this.remove();
}
function add(...args) {
  const dom = this;
  let i;
  let j;
  for (i = 0; i < args.length; i += 1) {
    const toAdd = $(args[i]);
    for (j = 0; j < toAdd.length; j += 1) {
      dom[dom.length] = toAdd[j];
      dom.length += 1;
    }
  }
  return dom;
}
function empty() {
  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];
    if (el.nodeType === 1) {
      for (let j = 0; j < el.childNodes.length; j += 1) {
        if (el.childNodes[j].parentNode) {
          el.childNodes[j].parentNode.removeChild(el.childNodes[j]);
        }
      }
      el.textContent = '';
    }
  }
  return this;
}

function scrollTo(...args) {
  let [left, top, duration, easing, callback] = args;
  if (args.length === 4 && typeof easing === 'function') {
    callback = easing;
    [left, top, duration, callback, easing] = args;
  }
  if (typeof easing === 'undefined') easing = 'swing';

  return this.each(function animate() {
    const el = this;
    let currentTop;
    let currentLeft;
    let maxTop;
    let maxLeft;
    let newTop;
    let newLeft;
    let scrollTop; // eslint-disable-line
    let scrollLeft; // eslint-disable-line
    let animateTop = top > 0 || top === 0;
    let animateLeft = left > 0 || left === 0;
    if (typeof easing === 'undefined') {
      easing = 'swing';
    }
    if (animateTop) {
      currentTop = el.scrollTop;
      if (!duration) {
        el.scrollTop = top;
      }
    }
    if (animateLeft) {
      currentLeft = el.scrollLeft;
      if (!duration) {
        el.scrollLeft = left;
      }
    }
    if (!duration) return;
    if (animateTop) {
      maxTop = el.scrollHeight - el.offsetHeight;
      newTop = Math.max(Math.min(top, maxTop), 0);
    }
    if (animateLeft) {
      maxLeft = el.scrollWidth - el.offsetWidth;
      newLeft = Math.max(Math.min(left, maxLeft), 0);
    }
    let startTime = null;
    if (animateTop && newTop === currentTop) animateTop = false;
    if (animateLeft && newLeft === currentLeft) animateLeft = false;
    function render(time = new Date().getTime()) {
      if (startTime === null) {
        startTime = time;
      }
      const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
      const easeProgress = easing === 'linear' ? progress : (0.5 - (Math.cos(progress * Math.PI) / 2));
      let done;
      if (animateTop) scrollTop = currentTop + (easeProgress * (newTop - currentTop));
      if (animateLeft) scrollLeft = currentLeft + (easeProgress * (newLeft - currentLeft));
      if (animateTop && newTop > currentTop && scrollTop >= newTop) {
        el.scrollTop = newTop;
        done = true;
      }
      if (animateTop && newTop < currentTop && scrollTop <= newTop) {
        el.scrollTop = newTop;
        done = true;
      }
      if (animateLeft && newLeft > currentLeft && scrollLeft >= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }
      if (animateLeft && newLeft < currentLeft && scrollLeft <= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }

      if (done) {
        if (callback) callback();
        return;
      }
      if (animateTop) el.scrollTop = scrollTop;
      if (animateLeft) el.scrollLeft = scrollLeft;
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
  });
}
// scrollTop(top, duration, easing, callback) {
function scrollTop(...args) {
  let [top, duration, easing, callback] = args;
  if (args.length === 3 && typeof easing === 'function') {
    [top, duration, callback, easing] = args;
  }
  const dom = this;
  if (typeof top === 'undefined') {
    if (dom.length > 0) return dom[0].scrollTop;
    return null;
  }
  return dom.scrollTo(undefined, top, duration, easing, callback);
}
function scrollLeft(...args) {
  let [left, duration, easing, callback] = args;
  if (args.length === 3 && typeof easing === 'function') {
    [left, duration, callback, easing] = args;
  }
  const dom = this;
  if (typeof left === 'undefined') {
    if (dom.length > 0) return dom[0].scrollLeft;
    return null;
  }
  return dom.scrollTo(left, undefined, duration, easing, callback);
}

function animate(initialProps, initialParams) {
  const els = this;
  const a = {
    props: Object.assign({}, initialProps),
    params: Object.assign({
      duration: 300,
      easing: 'swing', // or 'linear'
      /* Callbacks
      begin(elements)
      complete(elements)
      progress(elements, complete, remaining, start, tweenValue)
      */
    }, initialParams),

    elements: els,
    animating: false,
    que: [],

    easingProgress(easing, progress) {
      if (easing === 'swing') {
        return 0.5 - (Math.cos(progress * Math.PI) / 2);
      }
      if (typeof easing === 'function') {
        return easing(progress);
      }
      return progress;
    },
    stop() {
      if (a.frameId) {
        cancelAnimationFrame(a.frameId);
      }
      a.animating = false;
      a.elements.each((index, el) => {
        const element = el;
        delete element.dom7AnimateInstance;
      });
      a.que = [];
    },
    done(complete) {
      a.animating = false;
      a.elements.each((index, el) => {
        const element = el;
        delete element.dom7AnimateInstance;
      });
      if (complete) complete(els);
      if (a.que.length > 0) {
        const que = a.que.shift();
        a.animate(que[0], que[1]);
      }
    },
    animate(props, params) {
      if (a.animating) {
        a.que.push([props, params]);
        return a;
      }
      const elements = [];

      // Define & Cache Initials & Units
      a.elements.each((index, el) => {
        let initialFullValue;
        let initialValue;
        let unit;
        let finalValue;
        let finalFullValue;

        if (!el.dom7AnimateInstance) a.elements[index].dom7AnimateInstance = a;

        elements[index] = {
          container: el,
        };
        Object.keys(props).forEach((prop) => {
          initialFullValue = ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].getComputedStyle(el, null).getPropertyValue(prop).replace(',', '.');
          initialValue = parseFloat(initialFullValue);
          unit = initialFullValue.replace(initialValue, '');
          finalValue = parseFloat(props[prop]);
          finalFullValue = props[prop] + unit;
          elements[index][prop] = {
            initialFullValue,
            initialValue,
            unit,
            finalValue,
            finalFullValue,
            currentValue: initialValue,
          };
        });
      });

      let startTime = null;
      let time;
      let elementsDone = 0;
      let propsDone = 0;
      let done;
      let began = false;

      a.animating = true;

      function render() {
        time = new Date().getTime();
        let progress;
        let easeProgress;
        // let el;
        if (!began) {
          began = true;
          if (params.begin) params.begin(els);
        }
        if (startTime === null) {
          startTime = time;
        }
        if (params.progress) {
          // eslint-disable-next-line
          params.progress(els, Math.max(Math.min((time - startTime) / params.duration, 1), 0), ((startTime + params.duration) - time < 0 ? 0 : (startTime + params.duration) - time), startTime);
        }

        elements.forEach((element) => {
          const el = element;
          if (done || el.done) return;
          Object.keys(props).forEach((prop) => {
            if (done || el.done) return;
            progress = Math.max(Math.min((time - startTime) / params.duration, 1), 0);
            easeProgress = a.easingProgress(params.easing, progress);
            const { initialValue, finalValue, unit } = el[prop];
            el[prop].currentValue = initialValue + (easeProgress * (finalValue - initialValue));
            const currentValue = el[prop].currentValue;

            if (
              (finalValue > initialValue && currentValue >= finalValue) ||
              (finalValue < initialValue && currentValue <= finalValue)) {
              el.container.style[prop] = finalValue + unit;
              propsDone += 1;
              if (propsDone === Object.keys(props).length) {
                el.done = true;
                elementsDone += 1;
              }
              if (elementsDone === elements.length) {
                done = true;
              }
            }
            if (done) {
              a.done(params.complete);
              return;
            }
            el.container.style[prop] = currentValue + unit;
          });
        });
        if (done) return;
        // Then call
        a.frameId = requestAnimationFrame(render);
      }
      a.frameId = requestAnimationFrame(render);
      return a;
    },
  };

  if (a.elements.length === 0) {
    return els;
  }

  let animateInstance;
  for (let i = 0; i < a.elements.length; i += 1) {
    if (a.elements[i].dom7AnimateInstance) {
      animateInstance = a.elements[i].dom7AnimateInstance;
    } else a.elements[i].dom7AnimateInstance = a;
  }
  if (!animateInstance) {
    animateInstance = a;
  }

  if (initialProps === 'stop') {
    animateInstance.stop();
  } else {
    animateInstance.animate(a.props, a.params);
  }

  return els;
}

function stop() {
  const els = this;
  for (let i = 0; i < els.length; i += 1) {
    if (els[i].dom7AnimateInstance) {
      els[i].dom7AnimateInstance.stop();
    }
  }
}

const noTrigger = ('resize scroll').split(' ');
function eventShortcut(name, ...args) {
  if (typeof args[0] === 'undefined') {
    for (let i = 0; i < this.length; i += 1) {
      if (noTrigger.indexOf(name) < 0) {
        if (name in this[i]) this[i][name]();
        else {
          $(this[i]).trigger(name);
        }
      }
    }
    return this;
  }
  return this.on(name, ...args);
}

function click(...args) {
  return eventShortcut.bind(this)('click', ...args);
}
function blur(...args) {
  return eventShortcut.bind(this)('blur', ...args);
}
function focus(...args) {
  return eventShortcut.bind(this)('focus', ...args);
}
function focusin(...args) {
  return eventShortcut.bind(this)('focusin', ...args);
}
function focusout(...args) {
  return eventShortcut.bind(this)('focusout', ...args);
}
function keyup(...args) {
  return eventShortcut.bind(this)('keyup', ...args);
}
function keydown(...args) {
  return eventShortcut.bind(this)('keydown', ...args);
}
function keypress(...args) {
  return eventShortcut.bind(this)('keypress', ...args);
}
function submit(...args) {
  return eventShortcut.bind(this)('submit', ...args);
}
function change(...args) {
  return eventShortcut.bind(this)('change', ...args);
}
function mousedown(...args) {
  return eventShortcut.bind(this)('mousedown', ...args);
}
function mousemove(...args) {
  return eventShortcut.bind(this)('mousemove', ...args);
}
function mouseup(...args) {
  return eventShortcut.bind(this)('mouseup', ...args);
}
function mouseenter(...args) {
  return eventShortcut.bind(this)('mouseenter', ...args);
}
function mouseleave(...args) {
  return eventShortcut.bind(this)('mouseleave', ...args);
}
function mouseout(...args) {
  return eventShortcut.bind(this)('mouseout', ...args);
}
function mouseover(...args) {
  return eventShortcut.bind(this)('mouseover', ...args);
}
function touchstart(...args) {
  return eventShortcut.bind(this)('touchstart', ...args);
}
function touchend(...args) {
  return eventShortcut.bind(this)('touchend', ...args);
}
function touchmove(...args) {
  return eventShortcut.bind(this)('touchmove', ...args);
}
function resize(...args) {
  return eventShortcut.bind(this)('resize', ...args);
}
function scroll(...args) {
  return eventShortcut.bind(this)('scroll', ...args);
}




/***/ }),

/***/ "./node_modules/dom7/node_modules/ssr-window/dist/ssr-window.esm.js":
/*!**************************************************************************!*\
  !*** ./node_modules/dom7/node_modules/ssr-window/dist/ssr-window.esm.js ***!
  \**************************************************************************/
/*! exports provided: document, extend, window */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "document", function() { return doc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "window", function() { return win; });
/**
 * SSR Window 2.0.0
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2020, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: May 12, 2020
 */
/* eslint-disable no-param-reassign */
function isObject(obj) {
    return (obj !== null &&
        typeof obj === 'object' &&
        'constructor' in obj &&
        obj.constructor === Object);
}
function extend(target, src) {
    if (target === void 0) { target = {}; }
    if (src === void 0) { src = {}; }
    Object.keys(src).forEach(function (key) {
        if (typeof target[key] === 'undefined')
            target[key] = src[key];
        else if (isObject(src[key]) &&
            isObject(target[key]) &&
            Object.keys(src[key]).length > 0) {
            extend(target[key], src[key]);
        }
    });
}

var doc = typeof document !== 'undefined' ? document : {};
var ssrDocument = {
    body: {},
    addEventListener: function () { },
    removeEventListener: function () { },
    activeElement: {
        blur: function () { },
        nodeName: '',
    },
    querySelector: function () {
        return null;
    },
    querySelectorAll: function () {
        return [];
    },
    getElementById: function () {
        return null;
    },
    createEvent: function () {
        return {
            initEvent: function () { },
        };
    },
    createElement: function () {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute: function () { },
            getElementsByTagName: function () {
                return [];
            },
        };
    },
    createElementNS: function () {
        return {};
    },
    importNode: function () {
        return null;
    },
    location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: '',
    },
};
extend(doc, ssrDocument);

var win = typeof window !== 'undefined' ? window : {};
var ssrWindow = {
    document: ssrDocument,
    navigator: {
        userAgent: '',
    },
    location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: '',
    },
    history: {
        replaceState: function () { },
        pushState: function () { },
        go: function () { },
        back: function () { },
    },
    CustomEvent: function CustomEvent() {
        return this;
    },
    addEventListener: function () { },
    removeEventListener: function () { },
    getComputedStyle: function () {
        return {
            getPropertyValue: function () {
                return '';
            },
        };
    },
    Image: function () { },
    Date: function () { },
    screen: {},
    setTimeout: function () { },
    clearTimeout: function () { },
    matchMedia: function () {
        return {};
    },
};
extend(win, ssrWindow);




/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/debounce.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/debounce.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    now = __webpack_require__(/*! ./now */ "./node_modules/lodash/now.js"),
    toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/now.js":
/*!************************************!*\
  !*** ./node_modules/lodash/now.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ "./node_modules/lodash/throttle.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/throttle.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var debounce = __webpack_require__(/*! ./debounce */ "./node_modules/lodash/debounce.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./node_modules/ssr-window/dist/ssr-window.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/ssr-window/dist/ssr-window.esm.js ***!
  \********************************************************/
/*! exports provided: window, document */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "window", function() { return win; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "document", function() { return doc; });
/**
 * SSR Window 1.0.1
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2018, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: July 18, 2018
 */
var doc = (typeof document === 'undefined') ? {
  body: {},
  addEventListener: function addEventListener() {},
  removeEventListener: function removeEventListener() {},
  activeElement: {
    blur: function blur() {},
    nodeName: '',
  },
  querySelector: function querySelector() {
    return null;
  },
  querySelectorAll: function querySelectorAll() {
    return [];
  },
  getElementById: function getElementById() {
    return null;
  },
  createEvent: function createEvent() {
    return {
      initEvent: function initEvent() {},
    };
  },
  createElement: function createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute: function setAttribute() {},
      getElementsByTagName: function getElementsByTagName() {
        return [];
      },
    };
  },
  location: { hash: '' },
} : document; // eslint-disable-line

var win = (typeof window === 'undefined') ? {
  document: doc,
  navigator: {
    userAgent: '',
  },
  location: {},
  history: {},
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener: function addEventListener() {},
  removeEventListener: function removeEventListener() {},
  getComputedStyle: function getComputedStyle() {
    return {
      getPropertyValue: function getPropertyValue() {
        return '';
      },
    };
  },
  Image: function Image() {},
  Date: function Date() {},
  screen: {},
  setTimeout: function setTimeout() {},
  clearTimeout: function clearTimeout() {},
} : window; // eslint-disable-line




/***/ }),

/***/ "./node_modules/swiper/js/swiper.esm.bundle.js":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/js/swiper.esm.bundle.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom7/dist/dom7.modular */ "./node_modules/dom7/dist/dom7.modular.js");
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/dist/ssr-window.esm.js");
/**
 * Swiper 5.3.8
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://swiperjs.com
 *
 * Copyright 2014-2020 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: April 24, 2020
 */




const Methods = {
  addClass: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["addClass"],
  removeClass: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["removeClass"],
  hasClass: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["hasClass"],
  toggleClass: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["toggleClass"],
  attr: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["attr"],
  removeAttr: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["removeAttr"],
  data: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["data"],
  transform: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["transform"],
  transition: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["transition"],
  on: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["on"],
  off: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["off"],
  trigger: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["trigger"],
  transitionEnd: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["transitionEnd"],
  outerWidth: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["outerWidth"],
  outerHeight: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["outerHeight"],
  offset: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["offset"],
  css: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["css"],
  each: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["each"],
  html: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["html"],
  text: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["text"],
  is: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["is"],
  index: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["index"],
  eq: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["eq"],
  append: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["append"],
  prepend: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["prepend"],
  next: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["next"],
  nextAll: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["nextAll"],
  prev: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["prev"],
  prevAll: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["prevAll"],
  parent: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["parent"],
  parents: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["parents"],
  closest: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["closest"],
  find: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["find"],
  children: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["children"],
  filter: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["filter"],
  remove: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["remove"],
  add: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["add"],
  styles: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["styles"],
};

Object.keys(Methods).forEach((methodName) => {
  dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"].fn[methodName] = dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"].fn[methodName] || Methods[methodName];
});

const Utils = {
  deleteProps(obj) {
    const object = obj;
    Object.keys(object).forEach((key) => {
      try {
        object[key] = null;
      } catch (e) {
        // no getter for object
      }
      try {
        delete object[key];
      } catch (e) {
        // something got wrong
      }
    });
  },
  nextTick(callback, delay = 0) {
    return setTimeout(callback, delay);
  },
  now() {
    return Date.now();
  },
  getTranslate(el, axis = 'x') {
    let matrix;
    let curTransform;
    let transformMatrix;

    const curStyle = ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].getComputedStyle(el, null);

    if (ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].WebKitCSSMatrix) {
      curTransform = curStyle.transform || curStyle.webkitTransform;
      if (curTransform.split(',').length > 6) {
        curTransform = curTransform.split(', ').map((a) => a.replace(',', '.')).join(', ');
      }
      // Some old versions of Webkit choke when 'none' is passed; pass
      // empty string instead in this case
      transformMatrix = new ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
    } else {
      transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
      matrix = transformMatrix.toString().split(',');
    }

    if (axis === 'x') {
      // Latest Chrome and webkits Fix
      if (ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].WebKitCSSMatrix) curTransform = transformMatrix.m41;
      // Crazy IE10 Matrix
      else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
      // Normal Browsers
      else curTransform = parseFloat(matrix[4]);
    }
    if (axis === 'y') {
      // Latest Chrome and webkits Fix
      if (ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].WebKitCSSMatrix) curTransform = transformMatrix.m42;
      // Crazy IE10 Matrix
      else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
      // Normal Browsers
      else curTransform = parseFloat(matrix[5]);
    }
    return curTransform || 0;
  },
  parseUrlQuery(url) {
    const query = {};
    let urlToParse = url || ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].location.href;
    let i;
    let params;
    let param;
    let length;
    if (typeof urlToParse === 'string' && urlToParse.length) {
      urlToParse = urlToParse.indexOf('?') > -1 ? urlToParse.replace(/\S*\?/, '') : '';
      params = urlToParse.split('&').filter((paramsPart) => paramsPart !== '');
      length = params.length;

      for (i = 0; i < length; i += 1) {
        param = params[i].replace(/#\S+/g, '').split('=');
        query[decodeURIComponent(param[0])] = typeof param[1] === 'undefined' ? undefined : decodeURIComponent(param[1]) || '';
      }
    }
    return query;
  },
  isObject(o) {
    return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;
  },
  extend(...args) {
    const to = Object(args[0]);
    for (let i = 1; i < args.length; i += 1) {
      const nextSource = args[i];
      if (nextSource !== undefined && nextSource !== null) {
        const keysArray = Object.keys(Object(nextSource));
        for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
          const nextKey = keysArray[nextIndex];
          const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== undefined && desc.enumerable) {
            if (Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
              Utils.extend(to[nextKey], nextSource[nextKey]);
            } else if (!Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
              to[nextKey] = {};
              Utils.extend(to[nextKey], nextSource[nextKey]);
            } else {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
    }
    return to;
  },
};

const Support = (function Support() {
  return {
    touch: (ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].Modernizr && ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].Modernizr.touch === true) || (function checkTouch() {
      return !!((ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].navigator.maxTouchPoints > 0) || ('ontouchstart' in ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"]) || (ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].DocumentTouch && ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"] instanceof ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].DocumentTouch));
    }()),

    pointerEvents: !!ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].PointerEvent && ('maxTouchPoints' in ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].navigator) && ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].navigator.maxTouchPoints > 0,

    observer: (function checkObserver() {
      return ('MutationObserver' in ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"] || 'WebkitMutationObserver' in ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"]);
    }()),

    passiveListener: (function checkPassiveListener() {
      let supportsPassive = false;
      try {
        const opts = Object.defineProperty({}, 'passive', {
          // eslint-disable-next-line
          get() {
            supportsPassive = true;
          },
        });
        ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].addEventListener('testPassiveListener', null, opts);
      } catch (e) {
        // No support
      }
      return supportsPassive;
    }()),

    gestures: (function checkGestures() {
      return 'ongesturestart' in ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"];
    }()),
  };
}());

class SwiperClass {
  constructor(params = {}) {
    const self = this;
    self.params = params;

    // Events
    self.eventsListeners = {};

    if (self.params && self.params.on) {
      Object.keys(self.params.on).forEach((eventName) => {
        self.on(eventName, self.params.on[eventName]);
      });
    }
  }

  on(events, handler, priority) {
    const self = this;
    if (typeof handler !== 'function') return self;
    const method = priority ? 'unshift' : 'push';
    events.split(' ').forEach((event) => {
      if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
      self.eventsListeners[event][method](handler);
    });
    return self;
  }

  once(events, handler, priority) {
    const self = this;
    if (typeof handler !== 'function') return self;
    function onceHandler(...args) {
      self.off(events, onceHandler);
      if (onceHandler.f7proxy) {
        delete onceHandler.f7proxy;
      }
      handler.apply(self, args);
    }
    onceHandler.f7proxy = handler;
    return self.on(events, onceHandler, priority);
  }

  off(events, handler) {
    const self = this;
    if (!self.eventsListeners) return self;
    events.split(' ').forEach((event) => {
      if (typeof handler === 'undefined') {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event] && self.eventsListeners[event].length) {
        self.eventsListeners[event].forEach((eventHandler, index) => {
          if (eventHandler === handler || (eventHandler.f7proxy && eventHandler.f7proxy === handler)) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  }

  emit(...args) {
    const self = this;
    if (!self.eventsListeners) return self;
    let events;
    let data;
    let context;
    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
      events = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }
    const eventsArray = Array.isArray(events) ? events : events.split(' ');
    eventsArray.forEach((event) => {
      if (self.eventsListeners && self.eventsListeners[event]) {
        const handlers = [];
        self.eventsListeners[event].forEach((eventHandler) => {
          handlers.push(eventHandler);
        });
        handlers.forEach((eventHandler) => {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  }

  useModulesParams(instanceParams) {
    const instance = this;
    if (!instance.modules) return;
    Object.keys(instance.modules).forEach((moduleName) => {
      const module = instance.modules[moduleName];
      // Extend params
      if (module.params) {
        Utils.extend(instanceParams, module.params);
      }
    });
  }

  useModules(modulesParams = {}) {
    const instance = this;
    if (!instance.modules) return;
    Object.keys(instance.modules).forEach((moduleName) => {
      const module = instance.modules[moduleName];
      const moduleParams = modulesParams[moduleName] || {};
      // Extend instance methods and props
      if (module.instance) {
        Object.keys(module.instance).forEach((modulePropName) => {
          const moduleProp = module.instance[modulePropName];
          if (typeof moduleProp === 'function') {
            instance[modulePropName] = moduleProp.bind(instance);
          } else {
            instance[modulePropName] = moduleProp;
          }
        });
      }
      // Add event listeners
      if (module.on && instance.on) {
        Object.keys(module.on).forEach((moduleEventName) => {
          instance.on(moduleEventName, module.on[moduleEventName]);
        });
      }

      // Module create callback
      if (module.create) {
        module.create.bind(instance)(moduleParams);
      }
    });
  }

  static set components(components) {
    const Class = this;
    if (!Class.use) return;
    Class.use(components);
  }

  static installModule(module, ...params) {
    const Class = this;
    if (!Class.prototype.modules) Class.prototype.modules = {};
    const name = module.name || (`${Object.keys(Class.prototype.modules).length}_${Utils.now()}`);
    Class.prototype.modules[name] = module;
    // Prototype
    if (module.proto) {
      Object.keys(module.proto).forEach((key) => {
        Class.prototype[key] = module.proto[key];
      });
    }
    // Class
    if (module.static) {
      Object.keys(module.static).forEach((key) => {
        Class[key] = module.static[key];
      });
    }
    // Callback
    if (module.install) {
      module.install.apply(Class, params);
    }
    return Class;
  }

  static use(module, ...params) {
    const Class = this;
    if (Array.isArray(module)) {
      module.forEach((m) => Class.installModule(m));
      return Class;
    }
    return Class.installModule(module, ...params);
  }
}

function updateSize () {
  const swiper = this;
  let width;
  let height;
  const $el = swiper.$el;
  if (typeof swiper.params.width !== 'undefined') {
    width = swiper.params.width;
  } else {
    width = $el[0].clientWidth;
  }
  if (typeof swiper.params.height !== 'undefined') {
    height = swiper.params.height;
  } else {
    height = $el[0].clientHeight;
  }
  if ((width === 0 && swiper.isHorizontal()) || (height === 0 && swiper.isVertical())) {
    return;
  }

  // Subtract paddings
  width = width - parseInt($el.css('padding-left'), 10) - parseInt($el.css('padding-right'), 10);
  height = height - parseInt($el.css('padding-top'), 10) - parseInt($el.css('padding-bottom'), 10);

  Utils.extend(swiper, {
    width,
    height,
    size: swiper.isHorizontal() ? width : height,
  });
}

function updateSlides () {
  const swiper = this;
  const params = swiper.params;

  const {
    $wrapperEl, size: swiperSize, rtlTranslate: rtl, wrongRTL,
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  const slides = $wrapperEl.children(`.${swiper.params.slideClass}`);
  const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  let snapGrid = [];
  const slidesGrid = [];
  const slidesSizesGrid = [];

  function slidesForMargin(slideIndex) {
    if (!params.cssMode) return true;
    if (slideIndex === slides.length - 1) {
      return false;
    }
    return true;
  }

  let offsetBefore = params.slidesOffsetBefore;
  if (typeof offsetBefore === 'function') {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }

  let offsetAfter = params.slidesOffsetAfter;
  if (typeof offsetAfter === 'function') {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }

  const previousSnapGridLength = swiper.snapGrid.length;
  const previousSlidesGridLength = swiper.snapGrid.length;

  let spaceBetween = params.spaceBetween;
  let slidePosition = -offsetBefore;
  let prevSlideSize = 0;
  let index = 0;
  if (typeof swiperSize === 'undefined') {
    return;
  }
  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = (parseFloat(spaceBetween.replace('%', '')) / 100) * swiperSize;
  }

  swiper.virtualSize = -spaceBetween;

  // reset margins
  if (rtl) slides.css({ marginLeft: '', marginTop: '' });
  else slides.css({ marginRight: '', marginBottom: '' });

  let slidesNumberEvenToRows;
  if (params.slidesPerColumn > 1) {
    if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
      slidesNumberEvenToRows = slidesLength;
    } else {
      slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
    }
    if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
      slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
    }
  }

  // Calc slides
  let slideSize;
  const slidesPerColumn = params.slidesPerColumn;
  const slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
  const numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);
  for (let i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    const slide = slides.eq(i);
    if (params.slidesPerColumn > 1) {
      // Set slides order
      let newSlideOrderIndex;
      let column;
      let row;
      if (params.slidesPerColumnFill === 'row' && params.slidesPerGroup > 1) {
        const groupIndex = Math.floor(i / (params.slidesPerGroup * params.slidesPerColumn));
        const slideIndexInGroup = i - params.slidesPerColumn * params.slidesPerGroup * groupIndex;
        const columnsInGroup = groupIndex === 0
          ? params.slidesPerGroup
          : Math.min(Math.ceil((slidesLength - groupIndex * slidesPerColumn * params.slidesPerGroup) / slidesPerColumn), params.slidesPerGroup);
        row = Math.floor(slideIndexInGroup / columnsInGroup);
        column = (slideIndexInGroup - row * columnsInGroup) + groupIndex * params.slidesPerGroup;

        newSlideOrderIndex = column + ((row * slidesNumberEvenToRows) / slidesPerColumn);
        slide
          .css({
            '-webkit-box-ordinal-group': newSlideOrderIndex,
            '-moz-box-ordinal-group': newSlideOrderIndex,
            '-ms-flex-order': newSlideOrderIndex,
            '-webkit-order': newSlideOrderIndex,
            order: newSlideOrderIndex,
          });
      } else if (params.slidesPerColumnFill === 'column') {
        column = Math.floor(i / slidesPerColumn);
        row = i - (column * slidesPerColumn);
        if (column > numFullColumns || (column === numFullColumns && row === slidesPerColumn - 1)) {
          row += 1;
          if (row >= slidesPerColumn) {
            row = 0;
            column += 1;
          }
        }
      } else {
        row = Math.floor(i / slidesPerRow);
        column = i - (row * slidesPerRow);
      }
      slide.css(
        `margin-${swiper.isHorizontal() ? 'top' : 'left'}`,
        (row !== 0 && params.spaceBetween) && (`${params.spaceBetween}px`)
      );
    }
    if (slide.css('display') === 'none') continue; // eslint-disable-line

    if (params.slidesPerView === 'auto') {
      const slideStyles = ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].getComputedStyle(slide[0], null);
      const currentTransform = slide[0].style.transform;
      const currentWebKitTransform = slide[0].style.webkitTransform;
      if (currentTransform) {
        slide[0].style.transform = 'none';
      }
      if (currentWebKitTransform) {
        slide[0].style.webkitTransform = 'none';
      }
      if (params.roundLengths) {
        slideSize = swiper.isHorizontal()
          ? slide.outerWidth(true)
          : slide.outerHeight(true);
      } else {
        // eslint-disable-next-line
        if (swiper.isHorizontal()) {
          const width = parseFloat(slideStyles.getPropertyValue('width'));
          const paddingLeft = parseFloat(slideStyles.getPropertyValue('padding-left'));
          const paddingRight = parseFloat(slideStyles.getPropertyValue('padding-right'));
          const marginLeft = parseFloat(slideStyles.getPropertyValue('margin-left'));
          const marginRight = parseFloat(slideStyles.getPropertyValue('margin-right'));
          const boxSizing = slideStyles.getPropertyValue('box-sizing');
          if (boxSizing && boxSizing === 'border-box') {
            slideSize = width + marginLeft + marginRight;
          } else {
            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight;
          }
        } else {
          const height = parseFloat(slideStyles.getPropertyValue('height'));
          const paddingTop = parseFloat(slideStyles.getPropertyValue('padding-top'));
          const paddingBottom = parseFloat(slideStyles.getPropertyValue('padding-bottom'));
          const marginTop = parseFloat(slideStyles.getPropertyValue('margin-top'));
          const marginBottom = parseFloat(slideStyles.getPropertyValue('margin-bottom'));
          const boxSizing = slideStyles.getPropertyValue('box-sizing');
          if (boxSizing && boxSizing === 'border-box') {
            slideSize = height + marginTop + marginBottom;
          } else {
            slideSize = height + paddingTop + paddingBottom + marginTop + marginBottom;
          }
        }
      }
      if (currentTransform) {
        slide[0].style.transform = currentTransform;
      }
      if (currentWebKitTransform) {
        slide[0].style.webkitTransform = currentWebKitTransform;
      }
      if (params.roundLengths) slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - ((params.slidesPerView - 1) * spaceBetween)) / params.slidesPerView;
      if (params.roundLengths) slideSize = Math.floor(slideSize);

      if (slides[i]) {
        if (swiper.isHorizontal()) {
          slides[i].style.width = `${slideSize}px`;
        } else {
          slides[i].style.height = `${slideSize}px`;
        }
      }
    }
    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }
    slidesSizesGrid.push(slideSize);


    if (params.centeredSlides) {
      slidePosition = slidePosition + (slideSize / 2) + (prevSlideSize / 2) + spaceBetween;
      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - (swiperSize / 2) - spaceBetween;
      if (i === 0) slidePosition = slidePosition - (swiperSize / 2) - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if ((index) % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }

    swiper.virtualSize += slideSize + spaceBetween;

    prevSlideSize = slideSize;

    index += 1;
  }
  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
  let newSlidesGrid;

  if (
    rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
    $wrapperEl.css({ width: `${swiper.virtualSize + params.spaceBetween}px` });
  }
  if (params.setWrapperSize) {
    if (swiper.isHorizontal()) $wrapperEl.css({ width: `${swiper.virtualSize + params.spaceBetween}px` });
    else $wrapperEl.css({ height: `${swiper.virtualSize + params.spaceBetween}px` });
  }

  if (params.slidesPerColumn > 1) {
    swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
    swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
    if (swiper.isHorizontal()) $wrapperEl.css({ width: `${swiper.virtualSize + params.spaceBetween}px` });
    else $wrapperEl.css({ height: `${swiper.virtualSize + params.spaceBetween}px` });
    if (params.centeredSlides) {
      newSlidesGrid = [];
      for (let i = 0; i < snapGrid.length; i += 1) {
        let slidesGridItem = snapGrid[i];
        if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
      }
      snapGrid = newSlidesGrid;
    }
  }

  // Remove last grid elements depending on width
  if (!params.centeredSlides) {
    newSlidesGrid = [];
    for (let i = 0; i < snapGrid.length; i += 1) {
      let slidesGridItem = snapGrid[i];
      if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
      if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(slidesGridItem);
      }
    }
    snapGrid = newSlidesGrid;
    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }
  if (snapGrid.length === 0) snapGrid = [0];

  if (params.spaceBetween !== 0) {
    if (swiper.isHorizontal()) {
      if (rtl) slides.filter(slidesForMargin).css({ marginLeft: `${spaceBetween}px` });
      else slides.filter(slidesForMargin).css({ marginRight: `${spaceBetween}px` });
    } else slides.filter(slidesForMargin).css({ marginBottom: `${spaceBetween}px` });
  }

  if (params.centeredSlides && params.centeredSlidesBounds) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach((slideSizeValue) => {
      allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    });
    allSlidesSize -= params.spaceBetween;
    const maxSnap = allSlidesSize - swiperSize;
    snapGrid = snapGrid.map((snap) => {
      if (snap < 0) return -offsetBefore;
      if (snap > maxSnap) return maxSnap + offsetAfter;
      return snap;
    });
  }

  if (params.centerInsufficientSlides) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach((slideSizeValue) => {
      allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    });
    allSlidesSize -= params.spaceBetween;
    if (allSlidesSize < swiperSize) {
      const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
      snapGrid.forEach((snap, snapIndex) => {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach((snap, snapIndex) => {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }

  Utils.extend(swiper, {
    slides,
    snapGrid,
    slidesGrid,
    slidesSizesGrid,
  });

  if (slidesLength !== previousSlidesLength) {
    swiper.emit('slidesLengthChange');
  }
  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow) swiper.checkOverflow();
    swiper.emit('snapGridLengthChange');
  }
  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit('slidesGridLengthChange');
  }

  if (params.watchSlidesProgress || params.watchSlidesVisibility) {
    swiper.updateSlidesOffset();
  }
}

function updateAutoHeight (speed) {
  const swiper = this;
  const activeSlides = [];
  let newHeight = 0;
  let i;
  if (typeof speed === 'number') {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  }
  // Find slides currently in view
  if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
    if (swiper.params.centeredSlides) {
      swiper.visibleSlides.each((index, slide) => {
        activeSlides.push(slide);
      });
    } else {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        const index = swiper.activeIndex + i;
        if (index > swiper.slides.length) break;
        activeSlides.push(swiper.slides.eq(index)[0]);
      }
    }
  } else {
    activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);
  }

  // Find new height from highest slide in view
  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== 'undefined') {
      const height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  }

  // Update Height
  if (newHeight) swiper.$wrapperEl.css('height', `${newHeight}px`);
}

function updateSlidesOffset () {
  const swiper = this;
  const slides = swiper.slides;
  for (let i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
  }
}

function updateSlidesProgress (translate = (this && this.translate) || 0) {
  const swiper = this;
  const params = swiper.params;

  const { slides, rtlTranslate: rtl } = swiper;

  if (slides.length === 0) return;
  if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();

  let offsetCenter = -translate;
  if (rtl) offsetCenter = translate;

  // Visible Slides
  slides.removeClass(params.slideVisibleClass);

  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];

  for (let i = 0; i < slides.length; i += 1) {
    const slide = slides[i];
    const slideProgress = (
      (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0)) - slide.swiperSlideOffset
    ) / (slide.swiperSlideSize + params.spaceBetween);
    if (params.watchSlidesVisibility || (params.centeredSlides && params.autoHeight)) {
      const slideBefore = -(offsetCenter - slide.swiperSlideOffset);
      const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
      const isVisible = (slideBefore >= 0 && slideBefore < swiper.size - 1)
                || (slideAfter > 1 && slideAfter <= swiper.size)
                || (slideBefore <= 0 && slideAfter >= swiper.size);
      if (isVisible) {
        swiper.visibleSlides.push(slide);
        swiper.visibleSlidesIndexes.push(i);
        slides.eq(i).addClass(params.slideVisibleClass);
      }
    }
    slide.progress = rtl ? -slideProgress : slideProgress;
  }
  swiper.visibleSlides = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(swiper.visibleSlides);
}

function updateProgress (translate) {
  const swiper = this;
  if (typeof translate === 'undefined') {
    const multiplier = swiper.rtlTranslate ? -1 : 1;
    // eslint-disable-next-line
    translate = (swiper && swiper.translate && (swiper.translate * multiplier)) || 0;
  }
  const params = swiper.params;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  let { progress, isBeginning, isEnd } = swiper;
  const wasBeginning = isBeginning;
  const wasEnd = isEnd;
  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate - swiper.minTranslate()) / (translatesDiff);
    isBeginning = progress <= 0;
    isEnd = progress >= 1;
  }
  Utils.extend(swiper, {
    progress,
    isBeginning,
    isEnd,
  });

  if (params.watchSlidesProgress || params.watchSlidesVisibility || (params.centeredSlides && params.autoHeight)) swiper.updateSlidesProgress(translate);

  if (isBeginning && !wasBeginning) {
    swiper.emit('reachBeginning toEdge');
  }
  if (isEnd && !wasEnd) {
    swiper.emit('reachEnd toEdge');
  }
  if ((wasBeginning && !isBeginning) || (wasEnd && !isEnd)) {
    swiper.emit('fromEdge');
  }

  swiper.emit('progress', progress);
}

function updateSlidesClasses () {
  const swiper = this;

  const {
    slides, params, $wrapperEl, activeIndex, realIndex,
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;

  slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`);

  let activeSlide;
  if (isVirtual) {
    activeSlide = swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`);
  } else {
    activeSlide = slides.eq(activeIndex);
  }

  // Active classes
  activeSlide.addClass(params.slideActiveClass);

  if (params.loop) {
    // Duplicate to all looped slides
    if (activeSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl
        .children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`)
        .addClass(params.slideDuplicateActiveClass);
    } else {
      $wrapperEl
        .children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`)
        .addClass(params.slideDuplicateActiveClass);
    }
  }
  // Next Slide
  let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);
  if (params.loop && nextSlide.length === 0) {
    nextSlide = slides.eq(0);
    nextSlide.addClass(params.slideNextClass);
  }
  // Prev Slide
  let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);
  if (params.loop && prevSlide.length === 0) {
    prevSlide = slides.eq(-1);
    prevSlide.addClass(params.slidePrevClass);
  }
  if (params.loop) {
    // Duplicate to all looped slides
    if (nextSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl
        .children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr('data-swiper-slide-index')}"]`)
        .addClass(params.slideDuplicateNextClass);
    } else {
      $wrapperEl
        .children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr('data-swiper-slide-index')}"]`)
        .addClass(params.slideDuplicateNextClass);
    }
    if (prevSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl
        .children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr('data-swiper-slide-index')}"]`)
        .addClass(params.slideDuplicatePrevClass);
    } else {
      $wrapperEl
        .children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr('data-swiper-slide-index')}"]`)
        .addClass(params.slideDuplicatePrevClass);
    }
  }
}

function updateActiveIndex (newActiveIndex) {
  const swiper = this;
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  const {
    slidesGrid, snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex,
  } = swiper;
  let activeIndex = newActiveIndex;
  let snapIndex;
  if (typeof activeIndex === 'undefined') {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - ((slidesGrid[i + 1] - slidesGrid[i]) / 2)) {
          activeIndex = i;
        } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
          activeIndex = i + 1;
        }
      } else if (translate >= slidesGrid[i]) {
        activeIndex = i;
      }
    }
    // Normalize slideIndex
    if (params.normalizeSlideIndex) {
      if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
    }
  }
  if (snapGrid.indexOf(translate) >= 0) {
    snapIndex = snapGrid.indexOf(translate);
  } else {
    const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
  }
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  if (activeIndex === previousIndex) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit('snapIndexChange');
    }
    return;
  }

  // Get real index
  const realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);

  Utils.extend(swiper, {
    snapIndex,
    realIndex,
    previousIndex,
    activeIndex,
  });
  swiper.emit('activeIndexChange');
  swiper.emit('snapIndexChange');
  if (previousRealIndex !== realIndex) {
    swiper.emit('realIndexChange');
  }
  if (swiper.initialized || swiper.params.runCallbacksOnInit) {
    swiper.emit('slideChange');
  }
}

function updateClickedSlide (e) {
  const swiper = this;
  const params = swiper.params;
  const slide = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(e.target).closest(`.${params.slideClass}`)[0];
  let slideFound = false;
  if (slide) {
    for (let i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide) slideFound = true;
    }
  }

  if (slide && slideFound) {
    swiper.clickedSlide = slide;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt(Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(slide).attr('data-swiper-slide-index'), 10);
    } else {
      swiper.clickedIndex = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(slide).index();
    }
  } else {
    swiper.clickedSlide = undefined;
    swiper.clickedIndex = undefined;
    return;
  }
  if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}

var update = {
  updateSize,
  updateSlides,
  updateAutoHeight,
  updateSlidesOffset,
  updateSlidesProgress,
  updateProgress,
  updateSlidesClasses,
  updateActiveIndex,
  updateClickedSlide,
};

function getTranslate (axis = this.isHorizontal() ? 'x' : 'y') {
  const swiper = this;

  const {
    params, rtlTranslate: rtl, translate, $wrapperEl,
  } = swiper;

  if (params.virtualTranslate) {
    return rtl ? -translate : translate;
  }
  if (params.cssMode) {
    return translate;
  }

  let currentTranslate = Utils.getTranslate($wrapperEl[0], axis);
  if (rtl) currentTranslate = -currentTranslate;

  return currentTranslate || 0;
}

function setTranslate (translate, byController) {
  const swiper = this;
  const {
    rtlTranslate: rtl, params, $wrapperEl, wrapperEl, progress,
  } = swiper;
  let x = 0;
  let y = 0;
  const z = 0;

  if (swiper.isHorizontal()) {
    x = rtl ? -translate : translate;
  } else {
    y = translate;
  }

  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }

  if (params.cssMode) {
    wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
  } else if (!params.virtualTranslate) {
    $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`);
  }
  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y;

  // Check if we need to update progress
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate - swiper.minTranslate()) / (translatesDiff);
  }
  if (newProgress !== progress) {
    swiper.updateProgress(translate);
  }

  swiper.emit('setTranslate', swiper.translate, byController);
}

function minTranslate () {
  return (-this.snapGrid[0]);
}

function maxTranslate () {
  return (-this.snapGrid[this.snapGrid.length - 1]);
}

function translateTo (translate = 0, speed = this.params.speed, runCallbacks = true, translateBounds = true, internal) {
  const swiper = this;

  const {
    params,
    wrapperEl,
  } = swiper;

  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }

  const minTranslate = swiper.minTranslate();
  const maxTranslate = swiper.maxTranslate();
  let newTranslate;
  if (translateBounds && translate > minTranslate) newTranslate = minTranslate;
  else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;
  else newTranslate = translate;

  // Update progress
  swiper.updateProgress(newTranslate);

  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    if (speed === 0) {
      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
    } else {
      // eslint-disable-next-line
      if (wrapperEl.scrollTo) {
        wrapperEl.scrollTo({
          [isH ? 'left' : 'top']: -newTranslate,
          behavior: 'smooth',
        });
      } else {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
      }
    }
    return true;
  }

  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionEnd');
    }
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionStart');
    }
    if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onTranslateToWrapperTransitionEnd) {
        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
          swiper.onTranslateToWrapperTransitionEnd = null;
          delete swiper.onTranslateToWrapperTransitionEnd;
          if (runCallbacks) {
            swiper.emit('transitionEnd');
          }
        };
      }
      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
    }
  }

  return true;
}

var translate = {
  getTranslate,
  setTranslate,
  minTranslate,
  maxTranslate,
  translateTo,
};

function setTransition (duration, byController) {
  const swiper = this;

  if (!swiper.params.cssMode) {
    swiper.$wrapperEl.transition(duration);
  }

  swiper.emit('setTransition', duration, byController);
}

function transitionStart (runCallbacks = true, direction) {
  const swiper = this;
  const { activeIndex, params, previousIndex } = swiper;
  if (params.cssMode) return;
  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }

  let dir = direction;
  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';
    else if (activeIndex < previousIndex) dir = 'prev';
    else dir = 'reset';
  }

  swiper.emit('transitionStart');

  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit('slideResetTransitionStart');
      return;
    }
    swiper.emit('slideChangeTransitionStart');
    if (dir === 'next') {
      swiper.emit('slideNextTransitionStart');
    } else {
      swiper.emit('slidePrevTransitionStart');
    }
  }
}

function transitionEnd (runCallbacks = true, direction) {
  const swiper = this;
  const { activeIndex, previousIndex, params } = swiper;
  swiper.animating = false;
  if (params.cssMode) return;
  swiper.setTransition(0);

  let dir = direction;
  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';
    else if (activeIndex < previousIndex) dir = 'prev';
    else dir = 'reset';
  }

  swiper.emit('transitionEnd');

  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit('slideResetTransitionEnd');
      return;
    }
    swiper.emit('slideChangeTransitionEnd');
    if (dir === 'next') {
      swiper.emit('slideNextTransitionEnd');
    } else {
      swiper.emit('slidePrevTransitionEnd');
    }
  }
}

var transition = {
  setTransition,
  transitionStart,
  transitionEnd,
};

function slideTo (index = 0, speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  let slideIndex = index;
  if (slideIndex < 0) slideIndex = 0;

  const {
    params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl,
  } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }

  const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
  let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

  if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
    swiper.emit('beforeSlideChangeStart');
  }

  const translate = -snapGrid[snapIndex];

  // Update progress
  swiper.updateProgress(translate);

  // Normalize slideIndex
  if (params.normalizeSlideIndex) {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      if (-Math.floor(translate * 100) >= Math.floor(slidesGrid[i] * 100)) {
        slideIndex = i;
      }
    }
  }
  // Directions locks
  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
      return false;
    }
    if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) return false;
    }
  }

  let direction;
  if (slideIndex > activeIndex) direction = 'next';
  else if (slideIndex < activeIndex) direction = 'prev';
  else direction = 'reset';


  // Update Index
  if ((rtl && -translate === swiper.translate) || (!rtl && translate === swiper.translate)) {
    swiper.updateActiveIndex(slideIndex);
    // Update Height
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    swiper.updateSlidesClasses();
    if (params.effect !== 'slide') {
      swiper.setTranslate(translate);
    }
    if (direction !== 'reset') {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }
    return false;
  }
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    let t = -translate;
    if (rtl) {
      t = wrapperEl.scrollWidth - wrapperEl.offsetWidth - t;
    }
    if (speed === 0) {
      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
    } else {
      // eslint-disable-next-line
      if (wrapperEl.scrollTo) {
        wrapperEl.scrollTo({
          [isH ? 'left' : 'top']: t,
          behavior: 'smooth',
        });
      } else {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
      }
    }
    return true;
  }

  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit('beforeTransitionStart', speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    swiper.transitionEnd(runCallbacks, direction);
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit('beforeTransitionStart', speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onSlideToWrapperTransitionEnd) {
        swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
          swiper.onSlideToWrapperTransitionEnd = null;
          delete swiper.onSlideToWrapperTransitionEnd;
          swiper.transitionEnd(runCallbacks, direction);
        };
      }
      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
    }
  }

  return true;
}

function slideToLoop (index = 0, speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  let newIndex = index;
  if (swiper.params.loop) {
    newIndex += swiper.loopedSlides;
  }

  return swiper.slideTo(newIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideNext (speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  const { params, animating } = swiper;
  const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup;
  if (params.loop) {
    if (animating) return false;
    swiper.loopFix();
    // eslint-disable-next-line
    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }
  return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slidePrev (speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  const {
    params, animating, snapGrid, slidesGrid, rtlTranslate,
  } = swiper;

  if (params.loop) {
    if (animating) return false;
    swiper.loopFix();
    // eslint-disable-next-line
    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }
  const translate = rtlTranslate ? swiper.translate : -swiper.translate;
  function normalize(val) {
    if (val < 0) return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }
  const normalizedTranslate = normalize(translate);
  const normalizedSnapGrid = snapGrid.map((val) => normalize(val));
  const normalizedSlidesGrid = slidesGrid.map((val) => normalize(val));

  const currentSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];
  let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
  if (typeof prevSnap === 'undefined' && params.cssMode) {
    snapGrid.forEach((snap) => {
      if (!prevSnap && normalizedTranslate >= snap) prevSnap = snap;
    });
  }
  let prevIndex;
  if (typeof prevSnap !== 'undefined') {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
  }
  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideReset (speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideToClosest (speed = this.params.speed, runCallbacks = true, internal, threshold = 0.5) {
  const swiper = this;
  let index = swiper.activeIndex;
  const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
  const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);

  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

  if (translate >= swiper.snapGrid[snapIndex]) {
    // The current translate is on or after the current snap index, so the choice
    // is between the current index and the one after it.
    const currentSnap = swiper.snapGrid[snapIndex];
    const nextSnap = swiper.snapGrid[snapIndex + 1];
    if ((translate - currentSnap) > (nextSnap - currentSnap) * threshold) {
      index += swiper.params.slidesPerGroup;
    }
  } else {
    // The current translate is before the current snap index, so the choice
    // is between the current index and the one before it.
    const prevSnap = swiper.snapGrid[snapIndex - 1];
    const currentSnap = swiper.snapGrid[snapIndex];
    if ((translate - prevSnap) <= (currentSnap - prevSnap) * threshold) {
      index -= swiper.params.slidesPerGroup;
    }
  }
  index = Math.max(index, 0);
  index = Math.min(index, swiper.slidesGrid.length - 1);

  return swiper.slideTo(index, speed, runCallbacks, internal);
}

function slideToClickedSlide () {
  const swiper = this;
  const { params, $wrapperEl } = swiper;

  const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  let slideToIndex = swiper.clickedIndex;
  let realIndex;
  if (params.loop) {
    if (swiper.animating) return;
    realIndex = parseInt(Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);
    if (params.centeredSlides) {
      if (
        (slideToIndex < swiper.loopedSlides - (slidesPerView / 2))
        || (slideToIndex > (swiper.slides.length - swiper.loopedSlides) + (slidesPerView / 2))
      ) {
        swiper.loopFix();
        slideToIndex = $wrapperEl
          .children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`)
          .eq(0)
          .index();

        Utils.nextTick(() => {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
      swiper.loopFix();
      slideToIndex = $wrapperEl
        .children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`)
        .eq(0)
        .index();

      Utils.nextTick(() => {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}

var slide = {
  slideTo,
  slideToLoop,
  slideNext,
  slidePrev,
  slideReset,
  slideToClosest,
  slideToClickedSlide,
};

function loopCreate () {
  const swiper = this;
  const { params, $wrapperEl } = swiper;
  // Remove duplicated slides
  $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();

  let slides = $wrapperEl.children(`.${params.slideClass}`);

  if (params.loopFillGroupWithBlank) {
    const blankSlidesNum = params.slidesPerGroup - (slides.length % params.slidesPerGroup);
    if (blankSlidesNum !== params.slidesPerGroup) {
      for (let i = 0; i < blankSlidesNum; i += 1) {
        const blankNode = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].createElement('div')).addClass(`${params.slideClass} ${params.slideBlankClass}`);
        $wrapperEl.append(blankNode);
      }
      slides = $wrapperEl.children(`.${params.slideClass}`);
    }
  }

  if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;

  swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
  swiper.loopedSlides += params.loopAdditionalSlides;
  if (swiper.loopedSlides > slides.length) {
    swiper.loopedSlides = slides.length;
  }

  const prependSlides = [];
  const appendSlides = [];
  slides.each((index, el) => {
    const slide = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(el);
    if (index < swiper.loopedSlides) appendSlides.push(el);
    if (index < slides.length && index >= slides.length - swiper.loopedSlides) prependSlides.push(el);
    slide.attr('data-swiper-slide-index', index);
  });
  for (let i = 0; i < appendSlides.length; i += 1) {
    $wrapperEl.append(Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
  }
  for (let i = prependSlides.length - 1; i >= 0; i -= 1) {
    $wrapperEl.prepend(Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(prependSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
  }
}

function loopFix () {
  const swiper = this;

  swiper.emit('beforeLoopFix');

  const {
    activeIndex, slides, loopedSlides, allowSlidePrev, allowSlideNext, snapGrid, rtlTranslate: rtl,
  } = swiper;
  let newIndex;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;

  const snapTranslate = -snapGrid[activeIndex];
  const diff = snapTranslate - swiper.getTranslate();

  // Fix For Negative Oversliding
  if (activeIndex < loopedSlides) {
    newIndex = (slides.length - (loopedSlides * 3)) + activeIndex;
    newIndex += loopedSlides;
    const slideChanged = swiper.slideTo(newIndex, 0, false, true);
    if (slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  } else if (activeIndex >= slides.length - loopedSlides) {
    // Fix For Positive Oversliding
    newIndex = -slides.length + activeIndex + loopedSlides;
    newIndex += loopedSlides;
    const slideChanged = swiper.slideTo(newIndex, 0, false, true);
    if (slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  }
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;

  swiper.emit('loopFix');
}

function loopDestroy () {
  const swiper = this;
  const { $wrapperEl, params, slides } = swiper;
  $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove();
  slides.removeAttr('data-swiper-slide-index');
}

var loop = {
  loopCreate,
  loopFix,
  loopDestroy,
};

function setGrabCursor (moving) {
  const swiper = this;
  if (Support.touch || !swiper.params.simulateTouch || (swiper.params.watchOverflow && swiper.isLocked) || swiper.params.cssMode) return;
  const el = swiper.el;
  el.style.cursor = 'move';
  el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
  el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
  el.style.cursor = moving ? 'grabbing' : 'grab';
}

function unsetGrabCursor () {
  const swiper = this;
  if (Support.touch || (swiper.params.watchOverflow && swiper.isLocked) || swiper.params.cssMode) return;
  swiper.el.style.cursor = '';
}

var grabCursor = {
  setGrabCursor,
  unsetGrabCursor,
};

function appendSlide (slides) {
  const swiper = this;
  const { $wrapperEl, params } = swiper;
  if (params.loop) {
    swiper.loopDestroy();
  }
  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.append(slides[i]);
    }
  } else {
    $wrapperEl.append(slides);
  }
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!(params.observer && Support.observer)) {
    swiper.update();
  }
}

function prependSlide (slides) {
  const swiper = this;
  const { params, $wrapperEl, activeIndex } = swiper;

  if (params.loop) {
    swiper.loopDestroy();
  }
  let newActiveIndex = activeIndex + 1;
  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.prepend(slides[i]);
    }
    newActiveIndex = activeIndex + slides.length;
  } else {
    $wrapperEl.prepend(slides);
  }
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!(params.observer && Support.observer)) {
    swiper.update();
  }
  swiper.slideTo(newActiveIndex, 0, false);
}

function addSlide (index, slides) {
  const swiper = this;
  const { $wrapperEl, params, activeIndex } = swiper;
  let activeIndexBuffer = activeIndex;
  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.slides = $wrapperEl.children(`.${params.slideClass}`);
  }
  const baseLength = swiper.slides.length;
  if (index <= 0) {
    swiper.prependSlide(slides);
    return;
  }
  if (index >= baseLength) {
    swiper.appendSlide(slides);
    return;
  }
  let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;

  const slidesBuffer = [];
  for (let i = baseLength - 1; i >= index; i -= 1) {
    const currentSlide = swiper.slides.eq(i);
    currentSlide.remove();
    slidesBuffer.unshift(currentSlide);
  }

  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.append(slides[i]);
    }
    newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
  } else {
    $wrapperEl.append(slides);
  }

  for (let i = 0; i < slidesBuffer.length; i += 1) {
    $wrapperEl.append(slidesBuffer[i]);
  }

  if (params.loop) {
    swiper.loopCreate();
  }
  if (!(params.observer && Support.observer)) {
    swiper.update();
  }
  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

function removeSlide (slidesIndexes) {
  const swiper = this;
  const { params, $wrapperEl, activeIndex } = swiper;

  let activeIndexBuffer = activeIndex;
  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.slides = $wrapperEl.children(`.${params.slideClass}`);
  }
  let newActiveIndex = activeIndexBuffer;
  let indexToRemove;

  if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
    for (let i = 0; i < slidesIndexes.length; i += 1) {
      indexToRemove = slidesIndexes[i];
      if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    }
    newActiveIndex = Math.max(newActiveIndex, 0);
  } else {
    indexToRemove = slidesIndexes;
    if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
    if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    newActiveIndex = Math.max(newActiveIndex, 0);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!(params.observer && Support.observer)) {
    swiper.update();
  }
  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

function removeAllSlides () {
  const swiper = this;

  const slidesIndexes = [];
  for (let i = 0; i < swiper.slides.length; i += 1) {
    slidesIndexes.push(i);
  }
  swiper.removeSlide(slidesIndexes);
}

var manipulation = {
  appendSlide,
  prependSlide,
  addSlide,
  removeSlide,
  removeAllSlides,
};

const Device = (function Device() {
  const platform = ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].navigator.platform;
  const ua = ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].navigator.userAgent;

  const device = {
    ios: false,
    android: false,
    androidChrome: false,
    desktop: false,
    iphone: false,
    ipod: false,
    ipad: false,
    edge: false,
    ie: false,
    firefox: false,
    macos: false,
    windows: false,
    cordova: !!(ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].cordova || ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].phonegap),
    phonegap: !!(ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].cordova || ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].phonegap),
    electron: false,
  };

  const screenWidth = ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].screen.width;
  const screenHeight = ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].screen.height;

  const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
  let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
  const ie = ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
  const edge = ua.indexOf('Edge/') >= 0;
  const firefox = ua.indexOf('Gecko/') >= 0 && ua.indexOf('Firefox/') >= 0;
  const windows = platform === 'Win32';
  const electron = ua.toLowerCase().indexOf('electron') >= 0;
  let macos = platform === 'MacIntel';

  // iPadOs 13 fix
  if (!ipad
    && macos
    && Support.touch
    && (
      (screenWidth === 1024 && screenHeight === 1366) // Pro 12.9
      || (screenWidth === 834 && screenHeight === 1194) // Pro 11
      || (screenWidth === 834 && screenHeight === 1112) // Pro 10.5
      || (screenWidth === 768 && screenHeight === 1024) // other
    )
  ) {
    ipad = ua.match(/(Version)\/([\d.]+)/);
    macos = false;
  }

  device.ie = ie;
  device.edge = edge;
  device.firefox = firefox;

  // Android
  if (android && !windows) {
    device.os = 'android';
    device.osVersion = android[2];
    device.android = true;
    device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0;
  }
  if (ipad || iphone || ipod) {
    device.os = 'ios';
    device.ios = true;
  }
  // iOS
  if (iphone && !ipod) {
    device.osVersion = iphone[2].replace(/_/g, '.');
    device.iphone = true;
  }
  if (ipad) {
    device.osVersion = ipad[2].replace(/_/g, '.');
    device.ipad = true;
  }
  if (ipod) {
    device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
    device.ipod = true;
  }
  // iOS 8+ changed UA
  if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
    if (device.osVersion.split('.')[0] === '10') {
      device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0];
    }
  }

  // Webview
  device.webView = !!((iphone || ipad || ipod) && (ua.match(/.*AppleWebKit(?!.*Safari)/i) || ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].navigator.standalone))
    || (ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].matchMedia && ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].matchMedia('(display-mode: standalone)').matches);
  device.webview = device.webView;
  device.standalone = device.webView;

  // Desktop
  device.desktop = !(device.ios || device.android) || electron;
  if (device.desktop) {
    device.electron = electron;
    device.macos = macos;
    device.windows = windows;
    if (device.macos) {
      device.os = 'macos';
    }
    if (device.windows) {
      device.os = 'windows';
    }
  }

  // Pixel Ratio
  device.pixelRatio = ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].devicePixelRatio || 1;

  // Export object
  return device;
}());

function onTouchStart (event) {
  const swiper = this;
  const data = swiper.touchEventsData;
  const { params, touches } = swiper;

  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  const $targetEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(e.target);

  if (params.touchEventsTarget === 'wrapper') {
    if (!$targetEl.closest(swiper.wrapperEl).length) return;
  }
  data.isTouchEvent = e.type === 'touchstart';
  if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
  if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
  if (data.isTouched && data.isMoved) return;
  if (params.noSwiping && $targetEl.closest(params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`)[0]) {
    swiper.allowClick = true;
    return;
  }
  if (params.swipeHandler) {
    if (!$targetEl.closest(params.swipeHandler)[0]) return;
  }

  touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
  touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
  const startX = touches.currentX;
  const startY = touches.currentY;

  // Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore

  const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
  const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
  if (
    edgeSwipeDetection
    && ((startX <= edgeSwipeThreshold)
    || (startX >= ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].screen.width - edgeSwipeThreshold))
  ) {
    return;
  }

  Utils.extend(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: undefined,
    startMoving: undefined,
  });

  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = Utils.now();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = undefined;
  if (params.threshold > 0) data.allowThresholdMove = false;
  if (e.type !== 'touchstart') {
    let preventDefault = true;
    if ($targetEl.is(data.formElements)) preventDefault = false;
    if (
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].activeElement
      && Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].activeElement).is(data.formElements)
      && ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].activeElement !== $targetEl[0]
    ) {
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].activeElement.blur();
    }

    const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
    if (params.touchStartForcePreventDefault || shouldPreventDefault) {
      e.preventDefault();
    }
  }
  swiper.emit('touchStart', e);
}

function onTouchMove (event) {
  const swiper = this;
  const data = swiper.touchEventsData;
  const { params, touches, rtlTranslate: rtl } = swiper;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }
    return;
  }
  if (data.isTouchEvent && e.type === 'mousemove') return;
  const targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
  const pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
  const pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;
  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }
  if (!swiper.allowTouchMove) {
    // isMoved = true;
    swiper.allowClick = false;
    if (data.isTouched) {
      Utils.extend(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY,
      });
      data.touchStartTime = Utils.now();
    }
    return;
  }
  if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      // Vertical
      if (
        (pageY < touches.startY && swiper.translate <= swiper.maxTranslate())
        || (pageY > touches.startY && swiper.translate >= swiper.minTranslate())
      ) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (
      (pageX < touches.startX && swiper.translate <= swiper.maxTranslate())
      || (pageX > touches.startX && swiper.translate >= swiper.minTranslate())
    ) {
      return;
    }
  }
  if (data.isTouchEvent && ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].activeElement) {
    if (e.target === ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].activeElement && Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(e.target).is(data.formElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }
  if (data.allowTouchCallbacks) {
    swiper.emit('touchMove', e);
  }
  if (e.targetTouches && e.targetTouches.length > 1) return;

  touches.currentX = pageX;
  touches.currentY = pageY;

  const diffX = touches.currentX - touches.startX;
  const diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt((diffX ** 2) + (diffY ** 2)) < swiper.params.threshold) return;

  if (typeof data.isScrolling === 'undefined') {
    let touchAngle;
    if ((swiper.isHorizontal() && touches.currentY === touches.startY) || (swiper.isVertical() && touches.currentX === touches.startX)) {
      data.isScrolling = false;
    } else {
      // eslint-disable-next-line
      if ((diffX * diffX) + (diffY * diffY) >= 25) {
        touchAngle = (Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180) / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : (90 - touchAngle > params.touchAngle);
      }
    }
  }
  if (data.isScrolling) {
    swiper.emit('touchMoveOpposite', e);
  }
  if (typeof data.startMoving === 'undefined') {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }
  if (data.isScrolling) {
    data.isTouched = false;
    return;
  }
  if (!data.startMoving) {
    return;
  }
  swiper.allowClick = false;
  if (!params.cssMode) {
    e.preventDefault();
  }
  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }

  if (!data.isMoved) {
    if (params.loop) {
      swiper.loopFix();
    }
    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);
    if (swiper.animating) {
      swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
    }
    data.allowMomentumBounce = false;
    // Grab Cursor
    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }
    swiper.emit('sliderFirstMove', e);
  }
  swiper.emit('sliderMove', e);
  data.isMoved = true;

  let diff = swiper.isHorizontal() ? diffX : diffY;
  touches.diff = diff;

  diff *= params.touchRatio;
  if (rtl) diff = -diff;

  swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
  data.currentTranslate = diff + data.startTranslate;

  let disableParentSwiper = true;
  let resistanceRatio = params.resistanceRatio;
  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }
  if ((diff > 0 && data.currentTranslate > swiper.minTranslate())) {
    disableParentSwiper = false;
    if (params.resistance) data.currentTranslate = (swiper.minTranslate() - 1) + ((-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio);
  } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
    disableParentSwiper = false;
    if (params.resistance) data.currentTranslate = (swiper.maxTranslate() + 1) - ((swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio);
  }

  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  }

  // Directions locks
  if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }


  // Threshold
  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }

  if (!params.followFinger || params.cssMode) return;

  // Update active index in free mode
  if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  if (params.freeMode) {
    // Velocity
    if (data.velocities.length === 0) {
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
        time: data.touchStartTime,
      });
    }
    data.velocities.push({
      position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
      time: Utils.now(),
    });
  }
  // Update progress
  swiper.updateProgress(data.currentTranslate);
  // Update translate
  swiper.setTranslate(data.currentTranslate);
}

function onTouchEnd (event) {
  const swiper = this;
  const data = swiper.touchEventsData;

  const {
    params, touches, rtlTranslate: rtl, $wrapperEl, slidesGrid, snapGrid,
  } = swiper;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  if (data.allowTouchCallbacks) {
    swiper.emit('touchEnd', e);
  }
  data.allowTouchCallbacks = false;
  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  // Return Grab Cursor
  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  }

  // Time diff
  const touchEndTime = Utils.now();
  const timeDiff = touchEndTime - data.touchStartTime;

  // Tap, doubleTap, Click
  if (swiper.allowClick) {
    swiper.updateClickedSlide(e);
    swiper.emit('tap click', e);
    if (timeDiff < 300 && (touchEndTime - data.lastClickTime) < 300) {
      swiper.emit('doubleTap doubleClick', e);
    }
  }

  data.lastClickTime = Utils.now();
  Utils.nextTick(() => {
    if (!swiper.destroyed) swiper.allowClick = true;
  });

  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;

  let currentPos;
  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }

  if (params.cssMode) {
    return;
  }

  if (params.freeMode) {
    if (currentPos < -swiper.minTranslate()) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (currentPos > -swiper.maxTranslate()) {
      if (swiper.slides.length < snapGrid.length) {
        swiper.slideTo(snapGrid.length - 1);
      } else {
        swiper.slideTo(swiper.slides.length - 1);
      }
      return;
    }

    if (params.freeModeMomentum) {
      if (data.velocities.length > 1) {
        const lastMoveEvent = data.velocities.pop();
        const velocityEvent = data.velocities.pop();

        const distance = lastMoveEvent.position - velocityEvent.position;
        const time = lastMoveEvent.time - velocityEvent.time;
        swiper.velocity = distance / time;
        swiper.velocity /= 2;
        if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
          swiper.velocity = 0;
        }
        // this implies that the user stopped moving a finger then released.
        // There would be no events with distance zero, so the last event is stale.
        if (time > 150 || (Utils.now() - lastMoveEvent.time) > 300) {
          swiper.velocity = 0;
        }
      } else {
        swiper.velocity = 0;
      }
      swiper.velocity *= params.freeModeMomentumVelocityRatio;

      data.velocities.length = 0;
      let momentumDuration = 1000 * params.freeModeMomentumRatio;
      const momentumDistance = swiper.velocity * momentumDuration;

      let newPosition = swiper.translate + momentumDistance;
      if (rtl) newPosition = -newPosition;

      let doBounce = false;
      let afterBouncePosition;
      const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
      let needsLoopFix;
      if (newPosition < swiper.maxTranslate()) {
        if (params.freeModeMomentumBounce) {
          if (newPosition + swiper.maxTranslate() < -bounceAmount) {
            newPosition = swiper.maxTranslate() - bounceAmount;
          }
          afterBouncePosition = swiper.maxTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.maxTranslate();
        }
        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (newPosition > swiper.minTranslate()) {
        if (params.freeModeMomentumBounce) {
          if (newPosition - swiper.minTranslate() > bounceAmount) {
            newPosition = swiper.minTranslate() + bounceAmount;
          }
          afterBouncePosition = swiper.minTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.minTranslate();
        }
        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (params.freeModeSticky) {
        let nextSlide;
        for (let j = 0; j < snapGrid.length; j += 1) {
          if (snapGrid[j] > -newPosition) {
            nextSlide = j;
            break;
          }
        }

        if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
          newPosition = snapGrid[nextSlide];
        } else {
          newPosition = snapGrid[nextSlide - 1];
        }
        newPosition = -newPosition;
      }
      if (needsLoopFix) {
        swiper.once('transitionEnd', () => {
          swiper.loopFix();
        });
      }
      // Fix duration
      if (swiper.velocity !== 0) {
        if (rtl) {
          momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
        } else {
          momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
        }
        if (params.freeModeSticky) {
          // If freeModeSticky is active and the user ends a swipe with a slow-velocity
          // event, then durations can be 20+ seconds to slide one (or zero!) slides.
          // It's easy to see this when simulating touch with mouse events. To fix this,
          // limit single-slide swipes to the default slide duration. This also has the
          // nice side effect of matching slide speed if the user stopped moving before
          // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
          // For faster swipes, also apply limits (albeit higher ones).
          const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
          const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
          if (moveDistance < currentSlideSize) {
            momentumDuration = params.speed;
          } else if (moveDistance < 2 * currentSlideSize) {
            momentumDuration = params.speed * 1.5;
          } else {
            momentumDuration = params.speed * 2.5;
          }
        }
      } else if (params.freeModeSticky) {
        swiper.slideToClosest();
        return;
      }

      if (params.freeModeMomentumBounce && doBounce) {
        swiper.updateProgress(afterBouncePosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        swiper.animating = true;
        $wrapperEl.transitionEnd(() => {
          if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
          swiper.emit('momentumBounce');
          swiper.setTransition(params.speed);
          setTimeout(() => {
            swiper.setTranslate(afterBouncePosition);
            $wrapperEl.transitionEnd(() => {
              if (!swiper || swiper.destroyed) return;
              swiper.transitionEnd();
            });
          }, 0);
        });
      } else if (swiper.velocity) {
        swiper.updateProgress(newPosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        if (!swiper.animating) {
          swiper.animating = true;
          $wrapperEl.transitionEnd(() => {
            if (!swiper || swiper.destroyed) return;
            swiper.transitionEnd();
          });
        }
      } else {
        swiper.updateProgress(newPosition);
      }

      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    } else if (params.freeModeSticky) {
      swiper.slideToClosest();
      return;
    }

    if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    return;
  }

  // Find current slide
  let stopIndex = 0;
  let groupSize = swiper.slidesSizesGrid[0];
  for (let i = 0; i < slidesGrid.length; i += (i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup)) {
    const increment = (i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup);
    if (typeof slidesGrid[i + increment] !== 'undefined') {
      if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
        stopIndex = i;
        groupSize = slidesGrid[i + increment] - slidesGrid[i];
      }
    } else if (currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  }

  // Find current slide size
  const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
  const increment = (stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup);

  if (timeDiff > params.longSwipesMs) {
    // Long touches
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (swiper.swipeDirection === 'next') {
      if (ratio >= params.longSwipesRatio) swiper.slideTo(stopIndex + increment);
      else swiper.slideTo(stopIndex);
    }
    if (swiper.swipeDirection === 'prev') {
      if (ratio > (1 - params.longSwipesRatio)) swiper.slideTo(stopIndex + increment);
      else swiper.slideTo(stopIndex);
    }
  } else {
    // Short swipes
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
    if (!isNavButtonTarget) {
      if (swiper.swipeDirection === 'next') {
        swiper.slideTo(stopIndex + increment);
      }
      if (swiper.swipeDirection === 'prev') {
        swiper.slideTo(stopIndex);
      }
    } else if (e.target === swiper.navigation.nextEl) {
      swiper.slideTo(stopIndex + increment);
    } else {
      swiper.slideTo(stopIndex);
    }
  }
}

function onResize () {
  const swiper = this;

  const { params, el } = swiper;

  if (el && el.offsetWidth === 0) return;

  // Breakpoints
  if (params.breakpoints) {
    swiper.setBreakpoint();
  }

  // Save locks
  const { allowSlideNext, allowSlidePrev, snapGrid } = swiper;

  // Disable locks on resize
  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;

  swiper.updateSize();
  swiper.updateSlides();

  swiper.updateSlidesClasses();
  if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
    swiper.slideTo(swiper.slides.length - 1, 0, false, true);
  } else {
    swiper.slideTo(swiper.activeIndex, 0, false, true);
  }

  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
    swiper.autoplay.run();
  }
  // Return locks after resize
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;

  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}

function onClick (e) {
  const swiper = this;
  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) e.preventDefault();
    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}

function onScroll () {
  const swiper = this;
  const { wrapperEl, rtlTranslate } = swiper;
  swiper.previousTranslate = swiper.translate;
  if (swiper.isHorizontal()) {
    if (rtlTranslate) {
      swiper.translate = ((wrapperEl.scrollWidth - wrapperEl.offsetWidth) - wrapperEl.scrollLeft);
    } else {
      swiper.translate = -wrapperEl.scrollLeft;
    }
  } else {
    swiper.translate = -wrapperEl.scrollTop;
  }
  // eslint-disable-next-line
  if (swiper.translate === -0) swiper.translate = 0;

  swiper.updateActiveIndex();
  swiper.updateSlidesClasses();

  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (swiper.translate - swiper.minTranslate()) / (translatesDiff);
  }
  if (newProgress !== swiper.progress) {
    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
  }

  swiper.emit('setTranslate', swiper.translate, false);
}

let dummyEventAttached = false;
function dummyEventListener() {}

function attachEvents() {
  const swiper = this;
  const {
    params, touchEvents, el, wrapperEl,
  } = swiper;

  swiper.onTouchStart = onTouchStart.bind(swiper);
  swiper.onTouchMove = onTouchMove.bind(swiper);
  swiper.onTouchEnd = onTouchEnd.bind(swiper);
  if (params.cssMode) {
    swiper.onScroll = onScroll.bind(swiper);
  }

  swiper.onClick = onClick.bind(swiper);

  const capture = !!params.nested;

  // Touch Events
  if (!Support.touch && Support.pointerEvents) {
    el.addEventListener(touchEvents.start, swiper.onTouchStart, false);
    ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].addEventListener(touchEvents.move, swiper.onTouchMove, capture);
    ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].addEventListener(touchEvents.end, swiper.onTouchEnd, false);
  } else {
    if (Support.touch) {
      const passiveListener = touchEvents.start === 'touchstart' && Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
      el.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
      el.addEventListener(touchEvents.move, swiper.onTouchMove, Support.passiveListener ? { passive: false, capture } : capture);
      el.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
      if (touchEvents.cancel) {
        el.addEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
      }
      if (!dummyEventAttached) {
        ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].addEventListener('touchstart', dummyEventListener);
        dummyEventAttached = true;
      }
    }
    if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
      el.addEventListener('mousedown', swiper.onTouchStart, false);
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].addEventListener('mousemove', swiper.onTouchMove, capture);
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].addEventListener('mouseup', swiper.onTouchEnd, false);
    }
  }
  // Prevent Links Clicks
  if (params.preventClicks || params.preventClicksPropagation) {
    el.addEventListener('click', swiper.onClick, true);
  }
  if (params.cssMode) {
    wrapperEl.addEventListener('scroll', swiper.onScroll);
  }

  // Resize handler
  if (params.updateOnWindowResize) {
    swiper.on((Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate'), onResize, true);
  } else {
    swiper.on('observerUpdate', onResize, true);
  }
}

function detachEvents() {
  const swiper = this;

  const {
    params, touchEvents, el, wrapperEl,
  } = swiper;

  const capture = !!params.nested;

  // Touch Events
  if (!Support.touch && Support.pointerEvents) {
    el.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
    ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
    ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
  } else {
    if (Support.touch) {
      const passiveListener = touchEvents.start === 'onTouchStart' && Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
      el.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
      el.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
      el.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
      if (touchEvents.cancel) {
        el.removeEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
      }
    }
    if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
      el.removeEventListener('mousedown', swiper.onTouchStart, false);
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].removeEventListener('mousemove', swiper.onTouchMove, capture);
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].removeEventListener('mouseup', swiper.onTouchEnd, false);
    }
  }
  // Prevent Links Clicks
  if (params.preventClicks || params.preventClicksPropagation) {
    el.removeEventListener('click', swiper.onClick, true);
  }

  if (params.cssMode) {
    wrapperEl.removeEventListener('scroll', swiper.onScroll);
  }

  // Resize handler
  swiper.off((Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate'), onResize);
}

var events = {
  attachEvents,
  detachEvents,
};

function setBreakpoint () {
  const swiper = this;
  const {
    activeIndex, initialized, loopedSlides = 0, params, $el,
  } = swiper;
  const breakpoints = params.breakpoints;
  if (!breakpoints || (breakpoints && Object.keys(breakpoints).length === 0)) return;

  // Get breakpoint for window width and update parameters
  const breakpoint = swiper.getBreakpoint(breakpoints);

  if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
    const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
    if (breakpointOnlyParams) {
      ['slidesPerView', 'spaceBetween', 'slidesPerGroup', 'slidesPerGroupSkip', 'slidesPerColumn'].forEach((param) => {
        const paramValue = breakpointOnlyParams[param];
        if (typeof paramValue === 'undefined') return;
        if (param === 'slidesPerView' && (paramValue === 'AUTO' || paramValue === 'auto')) {
          breakpointOnlyParams[param] = 'auto';
        } else if (param === 'slidesPerView') {
          breakpointOnlyParams[param] = parseFloat(paramValue);
        } else {
          breakpointOnlyParams[param] = parseInt(paramValue, 10);
        }
      });
    }

    const breakpointParams = breakpointOnlyParams || swiper.originalParams;
    const wasMultiRow = params.slidesPerColumn > 1;
    const isMultiRow = breakpointParams.slidesPerColumn > 1;
    if (wasMultiRow && !isMultiRow) {
      $el.removeClass(`${params.containerModifierClass}multirow ${params.containerModifierClass}multirow-column`);
    } else if (!wasMultiRow && isMultiRow) {
      $el.addClass(`${params.containerModifierClass}multirow`);
      if (breakpointParams.slidesPerColumnFill === 'column') {
        $el.addClass(`${params.containerModifierClass}multirow-column`);
      }
    }

    const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
    const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);

    if (directionChanged && initialized) {
      swiper.changeDirection();
    }

    Utils.extend(swiper.params, breakpointParams);

    Utils.extend(swiper, {
      allowTouchMove: swiper.params.allowTouchMove,
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
    });

    swiper.currentBreakpoint = breakpoint;

    if (needsReLoop && initialized) {
      swiper.loopDestroy();
      swiper.loopCreate();
      swiper.updateSlides();
      swiper.slideTo((activeIndex - loopedSlides) + swiper.loopedSlides, 0, false);
    }

    swiper.emit('breakpoint', breakpointParams);
  }
}

function getBreakpoint (breakpoints) {
  // Get breakpoint for window width
  if (!breakpoints) return undefined;
  let breakpoint = false;

  const points = Object.keys(breakpoints).map((point) => {
    if (typeof point === 'string' && point.indexOf('@') === 0) {
      const minRatio = parseFloat(point.substr(1));
      const value = ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].innerHeight * minRatio;
      return { value, point };
    }
    return { value: point, point };
  });

  points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
  for (let i = 0; i < points.length; i += 1) {
    const { point, value } = points[i];
    if (value <= ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].innerWidth) {
      breakpoint = point;
    }
  }
  return breakpoint || 'max';
}

var breakpoints = { setBreakpoint, getBreakpoint };

function addClasses () {
  const swiper = this;
  const {
    classNames, params, rtl, $el,
  } = swiper;
  const suffixes = [];

  suffixes.push('initialized');
  suffixes.push(params.direction);

  if (params.freeMode) {
    suffixes.push('free-mode');
  }
  if (params.autoHeight) {
    suffixes.push('autoheight');
  }
  if (rtl) {
    suffixes.push('rtl');
  }
  if (params.slidesPerColumn > 1) {
    suffixes.push('multirow');
    if (params.slidesPerColumnFill === 'column') {
      suffixes.push('multirow-column');
    }
  }
  if (Device.android) {
    suffixes.push('android');
  }
  if (Device.ios) {
    suffixes.push('ios');
  }

  if (params.cssMode) {
    suffixes.push('css-mode');
  }

  suffixes.forEach((suffix) => {
    classNames.push(params.containerModifierClass + suffix);
  });

  $el.addClass(classNames.join(' '));
}

function removeClasses () {
  const swiper = this;
  const { $el, classNames } = swiper;

  $el.removeClass(classNames.join(' '));
}

var classes = { addClasses, removeClasses };

function loadImage (imageEl, src, srcset, sizes, checkForComplete, callback) {
  let image;
  function onReady() {
    if (callback) callback();
  }
  if (!imageEl.complete || !checkForComplete) {
    if (src) {
      image = new ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].Image();
      image.onload = onReady;
      image.onerror = onReady;
      if (sizes) {
        image.sizes = sizes;
      }
      if (srcset) {
        image.srcset = srcset;
      }
      if (src) {
        image.src = src;
      }
    } else {
      onReady();
    }
  } else {
    // image already loaded...
    onReady();
  }
}

function preloadImages () {
  const swiper = this;
  swiper.imagesToLoad = swiper.$el.find('img');
  function onReady() {
    if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
    if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;
    if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
      if (swiper.params.updateOnImagesReady) swiper.update();
      swiper.emit('imagesReady');
    }
  }
  for (let i = 0; i < swiper.imagesToLoad.length; i += 1) {
    const imageEl = swiper.imagesToLoad[i];
    swiper.loadImage(
      imageEl,
      imageEl.currentSrc || imageEl.getAttribute('src'),
      imageEl.srcset || imageEl.getAttribute('srcset'),
      imageEl.sizes || imageEl.getAttribute('sizes'),
      true,
      onReady
    );
  }
}

var images = {
  loadImage,
  preloadImages,
};

function checkOverflow() {
  const swiper = this;
  const params = swiper.params;
  const wasLocked = swiper.isLocked;
  const lastSlidePosition = swiper.slides.length > 0 && (params.slidesOffsetBefore + (params.spaceBetween * (swiper.slides.length - 1)) + ((swiper.slides[0]).offsetWidth) * swiper.slides.length);

  if (params.slidesOffsetBefore && params.slidesOffsetAfter && lastSlidePosition) {
    swiper.isLocked = lastSlidePosition <= swiper.size;
  } else {
    swiper.isLocked = swiper.snapGrid.length === 1;
  }

  swiper.allowSlideNext = !swiper.isLocked;
  swiper.allowSlidePrev = !swiper.isLocked;

  // events
  if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? 'lock' : 'unlock');

  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
    swiper.navigation.update();
  }
}

var checkOverflow$1 = { checkOverflow };

var defaults = {
  init: true,
  direction: 'horizontal',
  touchEventsTarget: 'container',
  initialSlide: 0,
  speed: 300,
  cssMode: false,
  updateOnWindowResize: true,
  //
  preventInteractionOnTransition: false,

  // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,

  // Free mode
  freeMode: false,
  freeModeMomentum: true,
  freeModeMomentumRatio: 1,
  freeModeMomentumBounce: true,
  freeModeMomentumBounceRatio: 1,
  freeModeMomentumVelocityRatio: 1,
  freeModeSticky: false,
  freeModeMinimumVelocity: 0.02,

  // Autoheight
  autoHeight: false,

  // Set wrapper width
  setWrapperSize: false,

  // Virtual Translate
  virtualTranslate: false,

  // Effects
  effect: 'slide', // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

  // Breakpoints
  breakpoints: undefined,

  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerColumn: 1,
  slidesPerColumnFill: 'column',
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  centeredSlides: false,
  centeredSlidesBounds: false,
  slidesOffsetBefore: 0, // in px
  slidesOffsetAfter: 0, // in px
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,

  // Disable swiper and hide navigation when container not overflow
  watchOverflow: false,

  // Round length
  roundLengths: false,

  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 0,
  touchMoveStopPropagation: false,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,

  // Unique Navigation Elements
  uniqueNavElements: true,

  // Resistance
  resistance: true,
  resistanceRatio: 0.85,

  // Progress
  watchSlidesProgress: false,
  watchSlidesVisibility: false,

  // Cursor
  grabCursor: false,

  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,

  // Images
  preloadImages: true,
  updateOnImagesReady: true,

  // loop
  loop: false,
  loopAdditionalSlides: 0,
  loopedSlides: null,
  loopFillGroupWithBlank: false,

  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null, // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',
  noSwipingSelector: null,

  // Passive Listeners
  passiveListeners: true,

  // NS
  containerModifierClass: 'swiper-container-', // NEW
  slideClass: 'swiper-slide',
  slideBlankClass: 'swiper-slide-invisible-blank',
  slideActiveClass: 'swiper-slide-active',
  slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
  slideVisibleClass: 'swiper-slide-visible',
  slideDuplicateClass: 'swiper-slide-duplicate',
  slideNextClass: 'swiper-slide-next',
  slideDuplicateNextClass: 'swiper-slide-duplicate-next',
  slidePrevClass: 'swiper-slide-prev',
  slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
  wrapperClass: 'swiper-wrapper',

  // Callbacks
  runCallbacksOnInit: true,
};

/* eslint no-param-reassign: "off" */

const prototypes = {
  update,
  translate,
  transition,
  slide,
  loop,
  grabCursor,
  manipulation,
  events,
  breakpoints,
  checkOverflow: checkOverflow$1,
  classes,
  images,
};

const extendedDefaults = {};

class Swiper extends SwiperClass {
  constructor(...args) {
    let el;
    let params;
    if (args.length === 1 && args[0].constructor && args[0].constructor === Object) {
      params = args[0];
    } else {
      [el, params] = args;
    }
    if (!params) params = {};

    params = Utils.extend({}, params);
    if (el && !params.el) params.el = el;

    super(params);

    Object.keys(prototypes).forEach((prototypeGroup) => {
      Object.keys(prototypes[prototypeGroup]).forEach((protoMethod) => {
        if (!Swiper.prototype[protoMethod]) {
          Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
        }
      });
    });

    // Swiper Instance
    const swiper = this;
    if (typeof swiper.modules === 'undefined') {
      swiper.modules = {};
    }
    Object.keys(swiper.modules).forEach((moduleName) => {
      const module = swiper.modules[moduleName];
      if (module.params) {
        const moduleParamName = Object.keys(module.params)[0];
        const moduleParams = module.params[moduleParamName];
        if (typeof moduleParams !== 'object' || moduleParams === null) return;
        if (!(moduleParamName in params && 'enabled' in moduleParams)) return;
        if (params[moduleParamName] === true) {
          params[moduleParamName] = { enabled: true };
        }
        if (
          typeof params[moduleParamName] === 'object'
          && !('enabled' in params[moduleParamName])
        ) {
          params[moduleParamName].enabled = true;
        }
        if (!params[moduleParamName]) params[moduleParamName] = { enabled: false };
      }
    });

    // Extend defaults with modules params
    const swiperParams = Utils.extend({}, defaults);
    swiper.useModulesParams(swiperParams);

    // Extend defaults with passed params
    swiper.params = Utils.extend({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = Utils.extend({}, swiper.params);
    swiper.passedParams = Utils.extend({}, params);

    // Save Dom lib
    swiper.$ = dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"];

    // Find el
    const $el = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(swiper.params.el);
    el = $el[0];

    if (!el) {
      return undefined;
    }

    if ($el.length > 1) {
      const swipers = [];
      $el.each((index, containerEl) => {
        const newParams = Utils.extend({}, params, { el: containerEl });
        swipers.push(new Swiper(newParams));
      });
      return swipers;
    }

    el.swiper = swiper;
    $el.data('swiper', swiper);

    // Find Wrapper
    let $wrapperEl;
    if (el && el.shadowRoot && el.shadowRoot.querySelector) {
      $wrapperEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(el.shadowRoot.querySelector(`.${swiper.params.wrapperClass}`));
      // Children needs to return slot items
      $wrapperEl.children = (options) => $el.children(options);
    } else {
      $wrapperEl = $el.children(`.${swiper.params.wrapperClass}`);
    }
    // Extend Swiper
    Utils.extend(swiper, {
      $el,
      el,
      $wrapperEl,
      wrapperEl: $wrapperEl[0],

      // Classes
      classNames: [],

      // Slides
      slides: Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(),
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],

      // isDirection
      isHorizontal() {
        return swiper.params.direction === 'horizontal';
      },
      isVertical() {
        return swiper.params.direction === 'vertical';
      },
      // RTL
      rtl: (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
      rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
      wrongRTL: $wrapperEl.css('display') === '-webkit-box',

      // Indexes
      activeIndex: 0,
      realIndex: 0,

      //
      isBeginning: true,
      isEnd: false,

      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,

      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,

      // Touch Events
      touchEvents: (function touchEvents() {
        const touch = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
        let desktop = ['mousedown', 'mousemove', 'mouseup'];
        if (Support.pointerEvents) {
          desktop = ['pointerdown', 'pointermove', 'pointerup'];
        }
        swiper.touchEventsTouch = {
          start: touch[0],
          move: touch[1],
          end: touch[2],
          cancel: touch[3],
        };
        swiper.touchEventsDesktop = {
          start: desktop[0],
          move: desktop[1],
          end: desktop[2],
        };
        return Support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
      }()),
      touchEventsData: {
        isTouched: undefined,
        isMoved: undefined,
        allowTouchCallbacks: undefined,
        touchStartTime: undefined,
        isScrolling: undefined,
        currentTranslate: undefined,
        startTranslate: undefined,
        allowThresholdMove: undefined,
        // Form elements to match
        formElements: 'input, select, option, textarea, button, video, label',
        // Last click time
        lastClickTime: Utils.now(),
        clickTimeout: undefined,
        // Velocities
        velocities: [],
        allowMomentumBounce: undefined,
        isTouchEvent: undefined,
        startMoving: undefined,
      },

      // Clicks
      allowClick: true,

      // Touches
      allowTouchMove: swiper.params.allowTouchMove,

      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0,
      },

      // Images
      imagesToLoad: [],
      imagesLoaded: 0,

    });

    // Install Modules
    swiper.useModules();

    // Init
    if (swiper.params.init) {
      swiper.init();
    }

    // Return app instance
    return swiper;
  }

  slidesPerViewDynamic() {
    const swiper = this;
    const {
      params, slides, slidesGrid, size: swiperSize, activeIndex,
    } = swiper;
    let spv = 1;
    if (params.centeredSlides) {
      let slideSize = slides[activeIndex].swiperSlideSize;
      let breakLoop;
      for (let i = activeIndex + 1; i < slides.length; i += 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
      for (let i = activeIndex - 1; i >= 0; i -= 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
    } else {
      for (let i = activeIndex + 1; i < slides.length; i += 1) {
        if (slidesGrid[i] - slidesGrid[activeIndex] < swiperSize) {
          spv += 1;
        }
      }
    }
    return spv;
  }

  update() {
    const swiper = this;
    if (!swiper || swiper.destroyed) return;
    const { snapGrid, params } = swiper;
    // Breakpoints
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();

    function setTranslate() {
      const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
      const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    let translated;
    if (swiper.params.freeMode) {
      setTranslate();
      if (swiper.params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
        translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
      } else {
        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
      if (!translated) {
        setTranslate();
      }
    }
    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
    swiper.emit('update');
  }

  changeDirection(newDirection, needUpdate = true) {
    const swiper = this;
    const currentDirection = swiper.params.direction;
    if (!newDirection) {
      // eslint-disable-next-line
      newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
    }
    if ((newDirection === currentDirection) || (newDirection !== 'horizontal' && newDirection !== 'vertical')) {
      return swiper;
    }

    swiper.$el
      .removeClass(`${swiper.params.containerModifierClass}${currentDirection}`)
      .addClass(`${swiper.params.containerModifierClass}${newDirection}`);

    swiper.params.direction = newDirection;

    swiper.slides.each((slideIndex, slideEl) => {
      if (newDirection === 'vertical') {
        slideEl.style.width = '';
      } else {
        slideEl.style.height = '';
      }
    });

    swiper.emit('changeDirection');
    if (needUpdate) swiper.update();

    return swiper;
  }

  init() {
    const swiper = this;
    if (swiper.initialized) return;

    swiper.emit('beforeInit');

    // Set breakpoint
    if (swiper.params.breakpoints) {
      swiper.setBreakpoint();
    }

    // Add Classes
    swiper.addClasses();

    // Create loop
    if (swiper.params.loop) {
      swiper.loopCreate();
    }

    // Update size
    swiper.updateSize();

    // Update slides
    swiper.updateSlides();

    if (swiper.params.watchOverflow) {
      swiper.checkOverflow();
    }

    // Set Grab Cursor
    if (swiper.params.grabCursor) {
      swiper.setGrabCursor();
    }

    if (swiper.params.preloadImages) {
      swiper.preloadImages();
    }

    // Slide To Initial Slide
    if (swiper.params.loop) {
      swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit);
    } else {
      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit);
    }

    // Attach events
    swiper.attachEvents();

    // Init Flag
    swiper.initialized = true;

    // Emit
    swiper.emit('init');
  }

  destroy(deleteInstance = true, cleanStyles = true) {
    const swiper = this;
    const {
      params, $el, $wrapperEl, slides,
    } = swiper;

    if (typeof swiper.params === 'undefined' || swiper.destroyed) {
      return null;
    }

    swiper.emit('beforeDestroy');

    // Init Flag
    swiper.initialized = false;

    // Detach events
    swiper.detachEvents();

    // Destroy loop
    if (params.loop) {
      swiper.loopDestroy();
    }

    // Cleanup styles
    if (cleanStyles) {
      swiper.removeClasses();
      $el.removeAttr('style');
      $wrapperEl.removeAttr('style');
      if (slides && slides.length) {
        slides
          .removeClass([
            params.slideVisibleClass,
            params.slideActiveClass,
            params.slideNextClass,
            params.slidePrevClass,
          ].join(' '))
          .removeAttr('style')
          .removeAttr('data-swiper-slide-index');
      }
    }

    swiper.emit('destroy');

    // Detach emitter events
    Object.keys(swiper.eventsListeners).forEach((eventName) => {
      swiper.off(eventName);
    });

    if (deleteInstance !== false) {
      swiper.$el[0].swiper = null;
      swiper.$el.data('swiper', null);
      Utils.deleteProps(swiper);
    }
    swiper.destroyed = true;

    return null;
  }

  static extendDefaults(newDefaults) {
    Utils.extend(extendedDefaults, newDefaults);
  }

  static get extendedDefaults() {
    return extendedDefaults;
  }

  static get defaults() {
    return defaults;
  }

  static get Class() {
    return SwiperClass;
  }

  static get $() {
    return dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"];
  }
}

var Device$1 = {
  name: 'device',
  proto: {
    device: Device,
  },
  static: {
    device: Device,
  },
};

var Support$1 = {
  name: 'support',
  proto: {
    support: Support,
  },
  static: {
    support: Support,
  },
};

const Browser = (function Browser() {
  function isSafari() {
    const ua = ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].navigator.userAgent.toLowerCase();
    return (ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0);
  }
  return {
    isEdge: !!ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].navigator.userAgent.match(/Edge/g),
    isSafari: isSafari(),
    isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].navigator.userAgent),
  };
}());

var Browser$1 = {
  name: 'browser',
  proto: {
    browser: Browser,
  },
  static: {
    browser: Browser,
  },
};

var Resize = {
  name: 'resize',
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      resize: {
        resizeHandler() {
          if (!swiper || swiper.destroyed || !swiper.initialized) return;
          swiper.emit('beforeResize');
          swiper.emit('resize');
        },
        orientationChangeHandler() {
          if (!swiper || swiper.destroyed || !swiper.initialized) return;
          swiper.emit('orientationchange');
        },
      },
    });
  },
  on: {
    init() {
      const swiper = this;
      // Emit resize
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].addEventListener('resize', swiper.resize.resizeHandler);

      // Emit orientationchange
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
    },
    destroy() {
      const swiper = this;
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].removeEventListener('resize', swiper.resize.resizeHandler);
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
    },
  },
};

const Observer = {
  func: ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].MutationObserver || ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].WebkitMutationObserver,
  attach(target, options = {}) {
    const swiper = this;

    const ObserverFunc = Observer.func;
    const observer = new ObserverFunc((mutations) => {
      // The observerUpdate event should only be triggered
      // once despite the number of mutations.  Additional
      // triggers are redundant and are very costly
      if (mutations.length === 1) {
        swiper.emit('observerUpdate', mutations[0]);
        return;
      }
      const observerUpdate = function observerUpdate() {
        swiper.emit('observerUpdate', mutations[0]);
      };

      if (ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].requestAnimationFrame) {
        ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].requestAnimationFrame(observerUpdate);
      } else {
        ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].setTimeout(observerUpdate, 0);
      }
    });

    observer.observe(target, {
      attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
      childList: typeof options.childList === 'undefined' ? true : options.childList,
      characterData: typeof options.characterData === 'undefined' ? true : options.characterData,
    });

    swiper.observer.observers.push(observer);
  },
  init() {
    const swiper = this;
    if (!Support.observer || !swiper.params.observer) return;
    if (swiper.params.observeParents) {
      const containerParents = swiper.$el.parents();
      for (let i = 0; i < containerParents.length; i += 1) {
        swiper.observer.attach(containerParents[i]);
      }
    }
    // Observe container
    swiper.observer.attach(swiper.$el[0], { childList: swiper.params.observeSlideChildren });

    // Observe wrapper
    swiper.observer.attach(swiper.$wrapperEl[0], { attributes: false });
  },
  destroy() {
    const swiper = this;
    swiper.observer.observers.forEach((observer) => {
      observer.disconnect();
    });
    swiper.observer.observers = [];
  },
};

var Observer$1 = {
  name: 'observer',
  params: {
    observer: false,
    observeParents: false,
    observeSlideChildren: false,
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      observer: {
        init: Observer.init.bind(swiper),
        attach: Observer.attach.bind(swiper),
        destroy: Observer.destroy.bind(swiper),
        observers: [],
      },
    });
  },
  on: {
    init() {
      const swiper = this;
      swiper.observer.init();
    },
    destroy() {
      const swiper = this;
      swiper.observer.destroy();
    },
  },
};

const Virtual = {
  update(force) {
    const swiper = this;
    const { slidesPerView, slidesPerGroup, centeredSlides } = swiper.params;
    const { addSlidesBefore, addSlidesAfter } = swiper.params.virtual;
    const {
      from: previousFrom,
      to: previousTo,
      slides,
      slidesGrid: previousSlidesGrid,
      renderSlide,
      offset: previousOffset,
    } = swiper.virtual;
    swiper.updateActiveIndex();
    const activeIndex = swiper.activeIndex || 0;

    let offsetProp;
    if (swiper.rtlTranslate) offsetProp = 'right';
    else offsetProp = swiper.isHorizontal() ? 'left' : 'top';

    let slidesAfter;
    let slidesBefore;
    if (centeredSlides) {
      slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
      slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
    } else {
      slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesBefore;
      slidesBefore = slidesPerGroup + addSlidesAfter;
    }
    const from = Math.max((activeIndex || 0) - slidesBefore, 0);
    const to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
    const offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);

    Utils.extend(swiper.virtual, {
      from,
      to,
      offset,
      slidesGrid: swiper.slidesGrid,
    });

    function onRendered() {
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();
      if (swiper.lazy && swiper.params.lazy.enabled) {
        swiper.lazy.load();
      }
    }

    if (previousFrom === from && previousTo === to && !force) {
      if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
        swiper.slides.css(offsetProp, `${offset}px`);
      }
      swiper.updateProgress();
      return;
    }
    if (swiper.params.virtual.renderExternal) {
      swiper.params.virtual.renderExternal.call(swiper, {
        offset,
        from,
        to,
        slides: (function getSlides() {
          const slidesToRender = [];
          for (let i = from; i <= to; i += 1) {
            slidesToRender.push(slides[i]);
          }
          return slidesToRender;
        }()),
      });
      onRendered();
      return;
    }
    const prependIndexes = [];
    const appendIndexes = [];
    if (force) {
      swiper.$wrapperEl.find(`.${swiper.params.slideClass}`).remove();
    } else {
      for (let i = previousFrom; i <= previousTo; i += 1) {
        if (i < from || i > to) {
          swiper.$wrapperEl.find(`.${swiper.params.slideClass}[data-swiper-slide-index="${i}"]`).remove();
        }
      }
    }
    for (let i = 0; i < slides.length; i += 1) {
      if (i >= from && i <= to) {
        if (typeof previousTo === 'undefined' || force) {
          appendIndexes.push(i);
        } else {
          if (i > previousTo) appendIndexes.push(i);
          if (i < previousFrom) prependIndexes.push(i);
        }
      }
    }
    appendIndexes.forEach((index) => {
      swiper.$wrapperEl.append(renderSlide(slides[index], index));
    });
    prependIndexes.sort((a, b) => b - a).forEach((index) => {
      swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
    });
    swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, `${offset}px`);
    onRendered();
  },
  renderSlide(slide, index) {
    const swiper = this;
    const params = swiper.params.virtual;
    if (params.cache && swiper.virtual.cache[index]) {
      return swiper.virtual.cache[index];
    }
    const $slideEl = params.renderSlide
      ? Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(params.renderSlide.call(swiper, slide, index))
      : Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(`<div class="${swiper.params.slideClass}" data-swiper-slide-index="${index}">${slide}</div>`);
    if (!$slideEl.attr('data-swiper-slide-index')) $slideEl.attr('data-swiper-slide-index', index);
    if (params.cache) swiper.virtual.cache[index] = $slideEl;
    return $slideEl;
  },
  appendSlide(slides) {
    const swiper = this;
    if (typeof slides === 'object' && 'length' in slides) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.push(slides[i]);
      }
    } else {
      swiper.virtual.slides.push(slides);
    }
    swiper.virtual.update(true);
  },
  prependSlide(slides) {
    const swiper = this;
    const activeIndex = swiper.activeIndex;
    let newActiveIndex = activeIndex + 1;
    let numberOfNewSlides = 1;

    if (Array.isArray(slides)) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
      }
      newActiveIndex = activeIndex + slides.length;
      numberOfNewSlides = slides.length;
    } else {
      swiper.virtual.slides.unshift(slides);
    }
    if (swiper.params.virtual.cache) {
      const cache = swiper.virtual.cache;
      const newCache = {};
      Object.keys(cache).forEach((cachedIndex) => {
        const $cachedEl = cache[cachedIndex];
        const cachedElIndex = $cachedEl.attr('data-swiper-slide-index');
        if (cachedElIndex) {
          $cachedEl.attr('data-swiper-slide-index', parseInt(cachedElIndex, 10) + 1);
        }
        newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
      });
      swiper.virtual.cache = newCache;
    }
    swiper.virtual.update(true);
    swiper.slideTo(newActiveIndex, 0);
  },
  removeSlide(slidesIndexes) {
    const swiper = this;
    if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
    let activeIndex = swiper.activeIndex;
    if (Array.isArray(slidesIndexes)) {
      for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {
        swiper.virtual.slides.splice(slidesIndexes[i], 1);
        if (swiper.params.virtual.cache) {
          delete swiper.virtual.cache[slidesIndexes[i]];
        }
        if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
        activeIndex = Math.max(activeIndex, 0);
      }
    } else {
      swiper.virtual.slides.splice(slidesIndexes, 1);
      if (swiper.params.virtual.cache) {
        delete swiper.virtual.cache[slidesIndexes];
      }
      if (slidesIndexes < activeIndex) activeIndex -= 1;
      activeIndex = Math.max(activeIndex, 0);
    }
    swiper.virtual.update(true);
    swiper.slideTo(activeIndex, 0);
  },
  removeAllSlides() {
    const swiper = this;
    swiper.virtual.slides = [];
    if (swiper.params.virtual.cache) {
      swiper.virtual.cache = {};
    }
    swiper.virtual.update(true);
    swiper.slideTo(0, 0);
  },
};

var Virtual$1 = {
  name: 'virtual',
  params: {
    virtual: {
      enabled: false,
      slides: [],
      cache: true,
      renderSlide: null,
      renderExternal: null,
      addSlidesBefore: 0,
      addSlidesAfter: 0,
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      virtual: {
        update: Virtual.update.bind(swiper),
        appendSlide: Virtual.appendSlide.bind(swiper),
        prependSlide: Virtual.prependSlide.bind(swiper),
        removeSlide: Virtual.removeSlide.bind(swiper),
        removeAllSlides: Virtual.removeAllSlides.bind(swiper),
        renderSlide: Virtual.renderSlide.bind(swiper),
        slides: swiper.params.virtual.slides,
        cache: {},
      },
    });
  },
  on: {
    beforeInit() {
      const swiper = this;
      if (!swiper.params.virtual.enabled) return;
      swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
      const overwriteParams = {
        watchSlidesProgress: true,
      };
      Utils.extend(swiper.params, overwriteParams);
      Utils.extend(swiper.originalParams, overwriteParams);

      if (!swiper.params.initialSlide) {
        swiper.virtual.update();
      }
    },
    setTranslate() {
      const swiper = this;
      if (!swiper.params.virtual.enabled) return;
      swiper.virtual.update();
    },
  },
};

const Keyboard = {
  handle(event) {
    const swiper = this;
    const { rtlTranslate: rtl } = swiper;
    let e = event;
    if (e.originalEvent) e = e.originalEvent; // jquery fix
    const kc = e.keyCode || e.charCode;
    // Directions locks
    if (!swiper.allowSlideNext && ((swiper.isHorizontal() && kc === 39) || (swiper.isVertical() && kc === 40) || kc === 34)) {
      return false;
    }
    if (!swiper.allowSlidePrev && ((swiper.isHorizontal() && kc === 37) || (swiper.isVertical() && kc === 38) || kc === 33)) {
      return false;
    }
    if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
      return undefined;
    }
    if (ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].activeElement && ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].activeElement.nodeName && (ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].activeElement.nodeName.toLowerCase() === 'input' || ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].activeElement.nodeName.toLowerCase() === 'textarea')) {
      return undefined;
    }
    if (swiper.params.keyboard.onlyInViewport && (kc === 33 || kc === 34 || kc === 37 || kc === 39 || kc === 38 || kc === 40)) {
      let inView = false;
      // Check that swiper should be inside of visible area of window
      if (swiper.$el.parents(`.${swiper.params.slideClass}`).length > 0 && swiper.$el.parents(`.${swiper.params.slideActiveClass}`).length === 0) {
        return undefined;
      }
      const windowWidth = ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].innerWidth;
      const windowHeight = ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].innerHeight;
      const swiperOffset = swiper.$el.offset();
      if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
      const swiperCoord = [
        [swiperOffset.left, swiperOffset.top],
        [swiperOffset.left + swiper.width, swiperOffset.top],
        [swiperOffset.left, swiperOffset.top + swiper.height],
        [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height],
      ];
      for (let i = 0; i < swiperCoord.length; i += 1) {
        const point = swiperCoord[i];
        if (
          point[0] >= 0 && point[0] <= windowWidth
          && point[1] >= 0 && point[1] <= windowHeight
        ) {
          inView = true;
        }
      }
      if (!inView) return undefined;
    }
    if (swiper.isHorizontal()) {
      if (kc === 33 || kc === 34 || kc === 37 || kc === 39) {
        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;
      }
      if (((kc === 34 || kc === 39) && !rtl) || ((kc === 33 || kc === 37) && rtl)) swiper.slideNext();
      if (((kc === 33 || kc === 37) && !rtl) || ((kc === 34 || kc === 39) && rtl)) swiper.slidePrev();
    } else {
      if (kc === 33 || kc === 34 || kc === 38 || kc === 40) {
        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;
      }
      if (kc === 34 || kc === 40) swiper.slideNext();
      if (kc === 33 || kc === 38) swiper.slidePrev();
    }
    swiper.emit('keyPress', kc);
    return undefined;
  },
  enable() {
    const swiper = this;
    if (swiper.keyboard.enabled) return;
    Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"]).on('keydown', swiper.keyboard.handle);
    swiper.keyboard.enabled = true;
  },
  disable() {
    const swiper = this;
    if (!swiper.keyboard.enabled) return;
    Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"]).off('keydown', swiper.keyboard.handle);
    swiper.keyboard.enabled = false;
  },
};

var Keyboard$1 = {
  name: 'keyboard',
  params: {
    keyboard: {
      enabled: false,
      onlyInViewport: true,
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      keyboard: {
        enabled: false,
        enable: Keyboard.enable.bind(swiper),
        disable: Keyboard.disable.bind(swiper),
        handle: Keyboard.handle.bind(swiper),
      },
    });
  },
  on: {
    init() {
      const swiper = this;
      if (swiper.params.keyboard.enabled) {
        swiper.keyboard.enable();
      }
    },
    destroy() {
      const swiper = this;
      if (swiper.keyboard.enabled) {
        swiper.keyboard.disable();
      }
    },
  },
};

function isEventSupported() {
  const eventName = 'onwheel';
  let isSupported = eventName in ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"];

  if (!isSupported) {
    const element = ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].createElement('div');
    element.setAttribute(eventName, 'return;');
    isSupported = typeof element[eventName] === 'function';
  }

  if (!isSupported
    && ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].implementation
    && ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].implementation.hasFeature
    // always returns true in newer browsers as per the standard.
    // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
    && ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].implementation.hasFeature('', '') !== true
  ) {
    // This is the only way to test support for the `wheel` event in IE9+.
    isSupported = ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].implementation.hasFeature('Events.wheel', '3.0');
  }

  return isSupported;
}
const Mousewheel = {
  lastScrollTime: Utils.now(),
  lastEventBeforeSnap: undefined,
  recentWheelEvents: [],
  event() {
    if (ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].navigator.userAgent.indexOf('firefox') > -1) return 'DOMMouseScroll';
    return isEventSupported() ? 'wheel' : 'mousewheel';
  },
  normalize(e) {
    // Reasonable defaults
    const PIXEL_STEP = 10;
    const LINE_HEIGHT = 40;
    const PAGE_HEIGHT = 800;

    let sX = 0;
    let sY = 0; // spinX, spinY
    let pX = 0;
    let pY = 0; // pixelX, pixelY

    // Legacy
    if ('detail' in e) {
      sY = e.detail;
    }
    if ('wheelDelta' in e) {
      sY = -e.wheelDelta / 120;
    }
    if ('wheelDeltaY' in e) {
      sY = -e.wheelDeltaY / 120;
    }
    if ('wheelDeltaX' in e) {
      sX = -e.wheelDeltaX / 120;
    }

    // side scrolling on FF with DOMMouseScroll
    if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
      sX = sY;
      sY = 0;
    }

    pX = sX * PIXEL_STEP;
    pY = sY * PIXEL_STEP;

    if ('deltaY' in e) {
      pY = e.deltaY;
    }
    if ('deltaX' in e) {
      pX = e.deltaX;
    }

    if (e.shiftKey && !pX) { // if user scrolls with shift he wants horizontal scroll
      pX = pY;
      pY = 0;
    }

    if ((pX || pY) && e.deltaMode) {
      if (e.deltaMode === 1) { // delta in LINE units
        pX *= LINE_HEIGHT;
        pY *= LINE_HEIGHT;
      } else { // delta in PAGE units
        pX *= PAGE_HEIGHT;
        pY *= PAGE_HEIGHT;
      }
    }

    // Fall-back if spin cannot be determined
    if (pX && !sX) {
      sX = (pX < 1) ? -1 : 1;
    }
    if (pY && !sY) {
      sY = (pY < 1) ? -1 : 1;
    }

    return {
      spinX: sX,
      spinY: sY,
      pixelX: pX,
      pixelY: pY,
    };
  },
  handleMouseEnter() {
    const swiper = this;
    swiper.mouseEntered = true;
  },
  handleMouseLeave() {
    const swiper = this;
    swiper.mouseEntered = false;
  },
  handle(event) {
    let e = event;
    const swiper = this;
    const params = swiper.params.mousewheel;

    if (swiper.params.cssMode) {
      e.preventDefault();
    }

    let target = swiper.$el;
    if (swiper.params.mousewheel.eventsTarged !== 'container') {
      target = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(swiper.params.mousewheel.eventsTarged);
    }
    if (!swiper.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges) return true;

    if (e.originalEvent) e = e.originalEvent; // jquery fix
    let delta = 0;
    const rtlFactor = swiper.rtlTranslate ? -1 : 1;

    const data = Mousewheel.normalize(e);

    if (params.forceToAxis) {
      if (swiper.isHorizontal()) {
        if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = data.pixelX * rtlFactor;
        else return true;
      } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = data.pixelY;
      else return true;
    } else {
      delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
    }

    if (delta === 0) return true;

    if (params.invert) delta = -delta;

    if (!swiper.params.freeMode) {
      // Register the new event in a variable which stores the relevant data
      const newEvent = {
        time: Utils.now(),
        delta: Math.abs(delta),
        direction: Math.sign(delta),
        raw: event,
      };

      // Keep the most recent events
      const recentWheelEvents = swiper.mousewheel.recentWheelEvents;
      if (recentWheelEvents.length >= 2) {
        recentWheelEvents.shift(); // only store the last N events
      }
      const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
      recentWheelEvents.push(newEvent);

      // If there is at least one previous recorded event:
      //   If direction has changed or
      //   if the scroll is quicker than the previous one:
      //     Animate the slider.
      // Else (this is the first time the wheel is moved):
      //     Animate the slider.
      if (prevEvent) {
        if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta) {
          swiper.mousewheel.animateSlider(newEvent);
        }
      } else {
        swiper.mousewheel.animateSlider(newEvent);
      }

      // If it's time to release the scroll:
      //   Return now so you don't hit the preventDefault.
      if (swiper.mousewheel.releaseScroll(newEvent)) {
        return true;
      }
    } else {
      // Freemode or scrollContainer:

      // If we recently snapped after a momentum scroll, then ignore wheel events
      // to give time for the deceleration to finish. Stop ignoring after 500 msecs
      // or if it's a new scroll (larger delta or inverse sign as last event before
      // an end-of-momentum snap).
      const newEvent = { time: Utils.now(), delta: Math.abs(delta), direction: Math.sign(delta) };
      const { lastEventBeforeSnap } = swiper.mousewheel;
      const ignoreWheelEvents = lastEventBeforeSnap
        && newEvent.time < lastEventBeforeSnap.time + 500
        && newEvent.delta <= lastEventBeforeSnap.delta
        && newEvent.direction === lastEventBeforeSnap.direction;
      if (!ignoreWheelEvents) {
        swiper.mousewheel.lastEventBeforeSnap = undefined;

        if (swiper.params.loop) {
          swiper.loopFix();
        }
        let position = swiper.getTranslate() + (delta * params.sensitivity);
        const wasBeginning = swiper.isBeginning;
        const wasEnd = swiper.isEnd;

        if (position >= swiper.minTranslate()) position = swiper.minTranslate();
        if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();

        swiper.setTransition(0);
        swiper.setTranslate(position);
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();

        if ((!wasBeginning && swiper.isBeginning) || (!wasEnd && swiper.isEnd)) {
          swiper.updateSlidesClasses();
        }

        if (swiper.params.freeModeSticky) {
          // When wheel scrolling starts with sticky (aka snap) enabled, then detect
          // the end of a momentum scroll by storing recent (N=15?) wheel events.
          // 1. do all N events have decreasing or same (absolute value) delta?
          // 2. did all N events arrive in the last M (M=500?) msecs?
          // 3. does the earliest event have an (absolute value) delta that's
          //    at least P (P=1?) larger than the most recent event's delta?
          // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
          // If 1-4 are "yes" then we're near the end of a momuntum scroll deceleration.
          // Snap immediately and ignore remaining wheel events in this scroll.
          // See comment above for "remaining wheel events in this scroll" determination.
          // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
          clearTimeout(swiper.mousewheel.timeout);
          swiper.mousewheel.timeout = undefined;
          const recentWheelEvents = swiper.mousewheel.recentWheelEvents;
          if (recentWheelEvents.length >= 15) {
            recentWheelEvents.shift(); // only store the last N events
          }
          const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
          const firstEvent = recentWheelEvents[0];
          recentWheelEvents.push(newEvent);
          if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
            // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
            recentWheelEvents.splice(0);
          } else if (recentWheelEvents.length >= 15
              && newEvent.time - firstEvent.time < 500
              && firstEvent.delta - newEvent.delta >= 1
              && newEvent.delta <= 6
          ) {
            // We're at the end of the deceleration of a momentum scroll, so there's no need
            // to wait for more events. Snap ASAP on the next tick.
            // Also, because there's some remaining momentum we'll bias the snap in the
            // direction of the ongoing scroll because it's better UX for the scroll to snap
            // in the same direction as the scroll instead of reversing to snap.  Therefore,
            // if it's already scrolled more than 20% in the current direction, keep going.
            const snapToThreshold = delta > 0 ? 0.8 : 0.2;
            swiper.mousewheel.lastEventBeforeSnap = newEvent;
            recentWheelEvents.splice(0);
            swiper.mousewheel.timeout = Utils.nextTick(() => {
              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
            }, 0); // no delay; move on next tick
          }
          if (!swiper.mousewheel.timeout) {
            // if we get here, then we haven't detected the end of a momentum scroll, so
            // we'll consider a scroll "complete" when there haven't been any wheel events
            // for 500ms.
            swiper.mousewheel.timeout = Utils.nextTick(() => {
              const snapToThreshold = 0.5;
              swiper.mousewheel.lastEventBeforeSnap = newEvent;
              recentWheelEvents.splice(0);
              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
            }, 500);
          }
        }

        // Emit event
        if (!ignoreWheelEvents) swiper.emit('scroll', e);

        // Stop autoplay
        if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop();
        // Return page scroll on edge positions
        if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
      }
    }

    if (e.preventDefault) e.preventDefault();
    else e.returnValue = false;
    return false;
  },
  animateSlider(newEvent) {
    const swiper = this;
    // If the movement is NOT big enough and
    // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
    //   Don't go any further (avoid insignificant scroll movement).
    if (newEvent.delta >= 6 && Utils.now() - swiper.mousewheel.lastScrollTime < 60) {
      // Return false as a default
      return true;
    }
    // If user is scrolling towards the end:
    //   If the slider hasn't hit the latest slide or
    //   if the slider is a loop and
    //   if the slider isn't moving right now:
    //     Go to next slide and
    //     emit a scroll event.
    // Else (the user is scrolling towards the beginning) and
    // if the slider hasn't hit the first slide or
    // if the slider is a loop and
    // if the slider isn't moving right now:
    //   Go to prev slide and
    //   emit a scroll event.
    if (newEvent.direction < 0) {
      if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
        swiper.slideNext();
        swiper.emit('scroll', newEvent.raw);
      }
    } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
      swiper.slidePrev();
      swiper.emit('scroll', newEvent.raw);
    }
    // If you got here is because an animation has been triggered so store the current time
    swiper.mousewheel.lastScrollTime = (new ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].Date()).getTime();
    // Return false as a default
    return false;
  },
  releaseScroll(newEvent) {
    const swiper = this;
    const params = swiper.params.mousewheel;
    if (newEvent.direction < 0) {
      if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
        // Return true to animate scroll on edges
        return true;
      }
    } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
      // Return true to animate scroll on edges
      return true;
    }
    return false;
  },
  enable() {
    const swiper = this;
    const event = Mousewheel.event();
    if (swiper.params.cssMode) {
      swiper.wrapperEl.removeEventListener(event, swiper.mousewheel.handle);
      return true;
    }
    if (!event) return false;
    if (swiper.mousewheel.enabled) return false;
    let target = swiper.$el;
    if (swiper.params.mousewheel.eventsTarged !== 'container') {
      target = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(swiper.params.mousewheel.eventsTarged);
    }
    target.on('mouseenter', swiper.mousewheel.handleMouseEnter);
    target.on('mouseleave', swiper.mousewheel.handleMouseLeave);
    target.on(event, swiper.mousewheel.handle);
    swiper.mousewheel.enabled = true;
    return true;
  },
  disable() {
    const swiper = this;
    const event = Mousewheel.event();
    if (swiper.params.cssMode) {
      swiper.wrapperEl.addEventListener(event, swiper.mousewheel.handle);
      return true;
    }
    if (!event) return false;
    if (!swiper.mousewheel.enabled) return false;
    let target = swiper.$el;
    if (swiper.params.mousewheel.eventsTarged !== 'container') {
      target = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(swiper.params.mousewheel.eventsTarged);
    }
    target.off(event, swiper.mousewheel.handle);
    swiper.mousewheel.enabled = false;
    return true;
  },
};

var Mousewheel$1 = {
  name: 'mousewheel',
  params: {
    mousewheel: {
      enabled: false,
      releaseOnEdges: false,
      invert: false,
      forceToAxis: false,
      sensitivity: 1,
      eventsTarged: 'container',
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      mousewheel: {
        enabled: false,
        enable: Mousewheel.enable.bind(swiper),
        disable: Mousewheel.disable.bind(swiper),
        handle: Mousewheel.handle.bind(swiper),
        handleMouseEnter: Mousewheel.handleMouseEnter.bind(swiper),
        handleMouseLeave: Mousewheel.handleMouseLeave.bind(swiper),
        animateSlider: Mousewheel.animateSlider.bind(swiper),
        releaseScroll: Mousewheel.releaseScroll.bind(swiper),
        lastScrollTime: Utils.now(),
        lastEventBeforeSnap: undefined,
        recentWheelEvents: [],
      },
    });
  },
  on: {
    init() {
      const swiper = this;
      if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
        swiper.mousewheel.disable();
      }
      if (swiper.params.mousewheel.enabled) swiper.mousewheel.enable();
    },
    destroy() {
      const swiper = this;
      if (swiper.params.cssMode) {
        swiper.mousewheel.enable();
      }
      if (swiper.mousewheel.enabled) swiper.mousewheel.disable();
    },
  },
};

const Navigation = {
  update() {
    // Update Navigation Buttons
    const swiper = this;
    const params = swiper.params.navigation;

    if (swiper.params.loop) return;
    const { $nextEl, $prevEl } = swiper.navigation;

    if ($prevEl && $prevEl.length > 0) {
      if (swiper.isBeginning) {
        $prevEl.addClass(params.disabledClass);
      } else {
        $prevEl.removeClass(params.disabledClass);
      }
      $prevEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    }
    if ($nextEl && $nextEl.length > 0) {
      if (swiper.isEnd) {
        $nextEl.addClass(params.disabledClass);
      } else {
        $nextEl.removeClass(params.disabledClass);
      }
      $nextEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    }
  },
  onPrevClick(e) {
    const swiper = this;
    e.preventDefault();
    if (swiper.isBeginning && !swiper.params.loop) return;
    swiper.slidePrev();
  },
  onNextClick(e) {
    const swiper = this;
    e.preventDefault();
    if (swiper.isEnd && !swiper.params.loop) return;
    swiper.slideNext();
  },
  init() {
    const swiper = this;
    const params = swiper.params.navigation;
    if (!(params.nextEl || params.prevEl)) return;

    let $nextEl;
    let $prevEl;
    if (params.nextEl) {
      $nextEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(params.nextEl);
      if (
        swiper.params.uniqueNavElements
        && typeof params.nextEl === 'string'
        && $nextEl.length > 1
        && swiper.$el.find(params.nextEl).length === 1
      ) {
        $nextEl = swiper.$el.find(params.nextEl);
      }
    }
    if (params.prevEl) {
      $prevEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(params.prevEl);
      if (
        swiper.params.uniqueNavElements
        && typeof params.prevEl === 'string'
        && $prevEl.length > 1
        && swiper.$el.find(params.prevEl).length === 1
      ) {
        $prevEl = swiper.$el.find(params.prevEl);
      }
    }

    if ($nextEl && $nextEl.length > 0) {
      $nextEl.on('click', swiper.navigation.onNextClick);
    }
    if ($prevEl && $prevEl.length > 0) {
      $prevEl.on('click', swiper.navigation.onPrevClick);
    }

    Utils.extend(swiper.navigation, {
      $nextEl,
      nextEl: $nextEl && $nextEl[0],
      $prevEl,
      prevEl: $prevEl && $prevEl[0],
    });
  },
  destroy() {
    const swiper = this;
    const { $nextEl, $prevEl } = swiper.navigation;
    if ($nextEl && $nextEl.length) {
      $nextEl.off('click', swiper.navigation.onNextClick);
      $nextEl.removeClass(swiper.params.navigation.disabledClass);
    }
    if ($prevEl && $prevEl.length) {
      $prevEl.off('click', swiper.navigation.onPrevClick);
      $prevEl.removeClass(swiper.params.navigation.disabledClass);
    }
  },
};

var Navigation$1 = {
  name: 'navigation',
  params: {
    navigation: {
      nextEl: null,
      prevEl: null,

      hideOnClick: false,
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
      lockClass: 'swiper-button-lock',
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      navigation: {
        init: Navigation.init.bind(swiper),
        update: Navigation.update.bind(swiper),
        destroy: Navigation.destroy.bind(swiper),
        onNextClick: Navigation.onNextClick.bind(swiper),
        onPrevClick: Navigation.onPrevClick.bind(swiper),
      },
    });
  },
  on: {
    init() {
      const swiper = this;
      swiper.navigation.init();
      swiper.navigation.update();
    },
    toEdge() {
      const swiper = this;
      swiper.navigation.update();
    },
    fromEdge() {
      const swiper = this;
      swiper.navigation.update();
    },
    destroy() {
      const swiper = this;
      swiper.navigation.destroy();
    },
    click(e) {
      const swiper = this;
      const { $nextEl, $prevEl } = swiper.navigation;
      if (
        swiper.params.navigation.hideOnClick
        && !Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(e.target).is($prevEl)
        && !Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(e.target).is($nextEl)
      ) {
        let isHidden;
        if ($nextEl) {
          isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
        } else if ($prevEl) {
          isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
        }
        if (isHidden === true) {
          swiper.emit('navigationShow', swiper);
        } else {
          swiper.emit('navigationHide', swiper);
        }
        if ($nextEl) {
          $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
        }
        if ($prevEl) {
          $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
        }
      }
    },
  },
};

const Pagination = {
  update() {
    // Render || Update Pagination bullets/items
    const swiper = this;
    const rtl = swiper.rtl;
    const params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    const $el = swiper.pagination.$el;
    // Current/Total
    let current;
    const total = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
    if (swiper.params.loop) {
      current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
      if (current > slidesLength - 1 - (swiper.loopedSlides * 2)) {
        current -= (slidesLength - (swiper.loopedSlides * 2));
      }
      if (current > total - 1) current -= total;
      if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;
    } else if (typeof swiper.snapIndex !== 'undefined') {
      current = swiper.snapIndex;
    } else {
      current = swiper.activeIndex || 0;
    }
    // Types
    if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
      const bullets = swiper.pagination.bullets;
      let firstIndex;
      let lastIndex;
      let midIndex;
      if (params.dynamicBullets) {
        swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
        $el.css(swiper.isHorizontal() ? 'width' : 'height', `${swiper.pagination.bulletSize * (params.dynamicMainBullets + 4)}px`);
        if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
          swiper.pagination.dynamicBulletIndex += (current - swiper.previousIndex);
          if (swiper.pagination.dynamicBulletIndex > (params.dynamicMainBullets - 1)) {
            swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
          } else if (swiper.pagination.dynamicBulletIndex < 0) {
            swiper.pagination.dynamicBulletIndex = 0;
          }
        }
        firstIndex = current - swiper.pagination.dynamicBulletIndex;
        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
        midIndex = (lastIndex + firstIndex) / 2;
      }
      bullets.removeClass(`${params.bulletActiveClass} ${params.bulletActiveClass}-next ${params.bulletActiveClass}-next-next ${params.bulletActiveClass}-prev ${params.bulletActiveClass}-prev-prev ${params.bulletActiveClass}-main`);
      if ($el.length > 1) {
        bullets.each((index, bullet) => {
          const $bullet = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(bullet);
          const bulletIndex = $bullet.index();
          if (bulletIndex === current) {
            $bullet.addClass(params.bulletActiveClass);
          }
          if (params.dynamicBullets) {
            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
              $bullet.addClass(`${params.bulletActiveClass}-main`);
            }
            if (bulletIndex === firstIndex) {
              $bullet
                .prev()
                .addClass(`${params.bulletActiveClass}-prev`)
                .prev()
                .addClass(`${params.bulletActiveClass}-prev-prev`);
            }
            if (bulletIndex === lastIndex) {
              $bullet
                .next()
                .addClass(`${params.bulletActiveClass}-next`)
                .next()
                .addClass(`${params.bulletActiveClass}-next-next`);
            }
          }
        });
      } else {
        const $bullet = bullets.eq(current);
        const bulletIndex = $bullet.index();
        $bullet.addClass(params.bulletActiveClass);
        if (params.dynamicBullets) {
          const $firstDisplayedBullet = bullets.eq(firstIndex);
          const $lastDisplayedBullet = bullets.eq(lastIndex);
          for (let i = firstIndex; i <= lastIndex; i += 1) {
            bullets.eq(i).addClass(`${params.bulletActiveClass}-main`);
          }
          if (swiper.params.loop) {
            if (bulletIndex >= bullets.length - params.dynamicMainBullets) {
              for (let i = params.dynamicMainBullets; i >= 0; i -= 1) {
                bullets.eq(bullets.length - i).addClass(`${params.bulletActiveClass}-main`);
              }
              bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(`${params.bulletActiveClass}-prev`);
            } else {
              $firstDisplayedBullet
                .prev()
                .addClass(`${params.bulletActiveClass}-prev`)
                .prev()
                .addClass(`${params.bulletActiveClass}-prev-prev`);
              $lastDisplayedBullet
                .next()
                .addClass(`${params.bulletActiveClass}-next`)
                .next()
                .addClass(`${params.bulletActiveClass}-next-next`);
            }
          } else {
            $firstDisplayedBullet
              .prev()
              .addClass(`${params.bulletActiveClass}-prev`)
              .prev()
              .addClass(`${params.bulletActiveClass}-prev-prev`);
            $lastDisplayedBullet
              .next()
              .addClass(`${params.bulletActiveClass}-next`)
              .next()
              .addClass(`${params.bulletActiveClass}-next-next`);
          }
        }
      }
      if (params.dynamicBullets) {
        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
        const bulletsOffset = (((swiper.pagination.bulletSize * dynamicBulletsLength) - (swiper.pagination.bulletSize)) / 2) - (midIndex * swiper.pagination.bulletSize);
        const offsetProp = rtl ? 'right' : 'left';
        bullets.css(swiper.isHorizontal() ? offsetProp : 'top', `${bulletsOffset}px`);
      }
    }
    if (params.type === 'fraction') {
      $el.find(`.${params.currentClass}`).text(params.formatFractionCurrent(current + 1));
      $el.find(`.${params.totalClass}`).text(params.formatFractionTotal(total));
    }
    if (params.type === 'progressbar') {
      let progressbarDirection;
      if (params.progressbarOpposite) {
        progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
      } else {
        progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
      }
      const scale = (current + 1) / total;
      let scaleX = 1;
      let scaleY = 1;
      if (progressbarDirection === 'horizontal') {
        scaleX = scale;
      } else {
        scaleY = scale;
      }
      $el.find(`.${params.progressbarFillClass}`).transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`).transition(swiper.params.speed);
    }
    if (params.type === 'custom' && params.renderCustom) {
      $el.html(params.renderCustom(swiper, current + 1, total));
      swiper.emit('paginationRender', swiper, $el[0]);
    } else {
      swiper.emit('paginationUpdate', swiper, $el[0]);
    }
    $el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
  },
  render() {
    // Render Container
    const swiper = this;
    const params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;

    const $el = swiper.pagination.$el;
    let paginationHTML = '';
    if (params.type === 'bullets') {
      const numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      for (let i = 0; i < numberOfBullets; i += 1) {
        if (params.renderBullet) {
          paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
        } else {
          paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`;
        }
      }
      $el.html(paginationHTML);
      swiper.pagination.bullets = $el.find(`.${params.bulletClass}`);
    }
    if (params.type === 'fraction') {
      if (params.renderFraction) {
        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
      } else {
        paginationHTML = `<span class="${params.currentClass}"></span>`
        + ' / '
        + `<span class="${params.totalClass}"></span>`;
      }
      $el.html(paginationHTML);
    }
    if (params.type === 'progressbar') {
      if (params.renderProgressbar) {
        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
      } else {
        paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
      }
      $el.html(paginationHTML);
    }
    if (params.type !== 'custom') {
      swiper.emit('paginationRender', swiper.pagination.$el[0]);
    }
  },
  init() {
    const swiper = this;
    const params = swiper.params.pagination;
    if (!params.el) return;

    let $el = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(params.el);
    if ($el.length === 0) return;

    if (
      swiper.params.uniqueNavElements
      && typeof params.el === 'string'
      && $el.length > 1
      && swiper.$el.find(params.el).length === 1
    ) {
      $el = swiper.$el.find(params.el);
    }

    if (params.type === 'bullets' && params.clickable) {
      $el.addClass(params.clickableClass);
    }

    $el.addClass(params.modifierClass + params.type);

    if (params.type === 'bullets' && params.dynamicBullets) {
      $el.addClass(`${params.modifierClass}${params.type}-dynamic`);
      swiper.pagination.dynamicBulletIndex = 0;
      if (params.dynamicMainBullets < 1) {
        params.dynamicMainBullets = 1;
      }
    }
    if (params.type === 'progressbar' && params.progressbarOpposite) {
      $el.addClass(params.progressbarOppositeClass);
    }

    if (params.clickable) {
      $el.on('click', `.${params.bulletClass}`, function onClick(e) {
        e.preventDefault();
        let index = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(this).index() * swiper.params.slidesPerGroup;
        if (swiper.params.loop) index += swiper.loopedSlides;
        swiper.slideTo(index);
      });
    }

    Utils.extend(swiper.pagination, {
      $el,
      el: $el[0],
    });
  },
  destroy() {
    const swiper = this;
    const params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
    const $el = swiper.pagination.$el;

    $el.removeClass(params.hiddenClass);
    $el.removeClass(params.modifierClass + params.type);
    if (swiper.pagination.bullets) swiper.pagination.bullets.removeClass(params.bulletActiveClass);
    if (params.clickable) {
      $el.off('click', `.${params.bulletClass}`);
    }
  },
};

var Pagination$1 = {
  name: 'pagination',
  params: {
    pagination: {
      el: null,
      bulletElement: 'span',
      clickable: false,
      hideOnClick: false,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: false,
      type: 'bullets', // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: false,
      dynamicMainBullets: 1,
      formatFractionCurrent: (number) => number,
      formatFractionTotal: (number) => number,
      bulletClass: 'swiper-pagination-bullet',
      bulletActiveClass: 'swiper-pagination-bullet-active',
      modifierClass: 'swiper-pagination-', // NEW
      currentClass: 'swiper-pagination-current',
      totalClass: 'swiper-pagination-total',
      hiddenClass: 'swiper-pagination-hidden',
      progressbarFillClass: 'swiper-pagination-progressbar-fill',
      progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
      clickableClass: 'swiper-pagination-clickable', // NEW
      lockClass: 'swiper-pagination-lock',
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      pagination: {
        init: Pagination.init.bind(swiper),
        render: Pagination.render.bind(swiper),
        update: Pagination.update.bind(swiper),
        destroy: Pagination.destroy.bind(swiper),
        dynamicBulletIndex: 0,
      },
    });
  },
  on: {
    init() {
      const swiper = this;
      swiper.pagination.init();
      swiper.pagination.render();
      swiper.pagination.update();
    },
    activeIndexChange() {
      const swiper = this;
      if (swiper.params.loop) {
        swiper.pagination.update();
      } else if (typeof swiper.snapIndex === 'undefined') {
        swiper.pagination.update();
      }
    },
    snapIndexChange() {
      const swiper = this;
      if (!swiper.params.loop) {
        swiper.pagination.update();
      }
    },
    slidesLengthChange() {
      const swiper = this;
      if (swiper.params.loop) {
        swiper.pagination.render();
        swiper.pagination.update();
      }
    },
    snapGridLengthChange() {
      const swiper = this;
      if (!swiper.params.loop) {
        swiper.pagination.render();
        swiper.pagination.update();
      }
    },
    destroy() {
      const swiper = this;
      swiper.pagination.destroy();
    },
    click(e) {
      const swiper = this;
      if (
        swiper.params.pagination.el
        && swiper.params.pagination.hideOnClick
        && swiper.pagination.$el.length > 0
        && !Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(e.target).hasClass(swiper.params.pagination.bulletClass)
      ) {
        const isHidden = swiper.pagination.$el.hasClass(swiper.params.pagination.hiddenClass);
        if (isHidden === true) {
          swiper.emit('paginationShow', swiper);
        } else {
          swiper.emit('paginationHide', swiper);
        }
        swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
      }
    },
  },
};

const Scrollbar = {
  setTranslate() {
    const swiper = this;
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    const { scrollbar, rtlTranslate: rtl, progress } = swiper;
    const {
      dragSize, trackSize, $dragEl, $el,
    } = scrollbar;
    const params = swiper.params.scrollbar;

    let newSize = dragSize;
    let newPos = (trackSize - dragSize) * progress;
    if (rtl) {
      newPos = -newPos;
      if (newPos > 0) {
        newSize = dragSize - newPos;
        newPos = 0;
      } else if (-newPos + dragSize > trackSize) {
        newSize = trackSize + newPos;
      }
    } else if (newPos < 0) {
      newSize = dragSize + newPos;
      newPos = 0;
    } else if (newPos + dragSize > trackSize) {
      newSize = trackSize - newPos;
    }
    if (swiper.isHorizontal()) {
      $dragEl.transform(`translate3d(${newPos}px, 0, 0)`);
      $dragEl[0].style.width = `${newSize}px`;
    } else {
      $dragEl.transform(`translate3d(0px, ${newPos}px, 0)`);
      $dragEl[0].style.height = `${newSize}px`;
    }
    if (params.hide) {
      clearTimeout(swiper.scrollbar.timeout);
      $el[0].style.opacity = 1;
      swiper.scrollbar.timeout = setTimeout(() => {
        $el[0].style.opacity = 0;
        $el.transition(400);
      }, 1000);
    }
  },
  setTransition(duration) {
    const swiper = this;
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    swiper.scrollbar.$dragEl.transition(duration);
  },
  updateSize() {
    const swiper = this;
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;

    const { scrollbar } = swiper;
    const { $dragEl, $el } = scrollbar;

    $dragEl[0].style.width = '';
    $dragEl[0].style.height = '';
    const trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;

    const divider = swiper.size / swiper.virtualSize;
    const moveDivider = divider * (trackSize / swiper.size);
    let dragSize;
    if (swiper.params.scrollbar.dragSize === 'auto') {
      dragSize = trackSize * divider;
    } else {
      dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
    }

    if (swiper.isHorizontal()) {
      $dragEl[0].style.width = `${dragSize}px`;
    } else {
      $dragEl[0].style.height = `${dragSize}px`;
    }

    if (divider >= 1) {
      $el[0].style.display = 'none';
    } else {
      $el[0].style.display = '';
    }
    if (swiper.params.scrollbar.hide) {
      $el[0].style.opacity = 0;
    }
    Utils.extend(scrollbar, {
      trackSize,
      divider,
      moveDivider,
      dragSize,
    });
    scrollbar.$el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
  },
  getPointerPosition(e) {
    const swiper = this;
    if (swiper.isHorizontal()) {
      return ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].clientX : e.clientX);
    }
    return ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].clientY : e.clientY);
  },
  setDragPosition(e) {
    const swiper = this;
    const { scrollbar, rtlTranslate: rtl } = swiper;
    const {
      $el,
      dragSize,
      trackSize,
      dragStartPos,
    } = scrollbar;

    let positionRatio;
    positionRatio = ((scrollbar.getPointerPosition(e)) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top']
      - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
    positionRatio = Math.max(Math.min(positionRatio, 1), 0);
    if (rtl) {
      positionRatio = 1 - positionRatio;
    }

    const position = swiper.minTranslate() + ((swiper.maxTranslate() - swiper.minTranslate()) * positionRatio);

    swiper.updateProgress(position);
    swiper.setTranslate(position);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  },
  onDragStart(e) {
    const swiper = this;
    const params = swiper.params.scrollbar;
    const { scrollbar, $wrapperEl } = swiper;
    const { $el, $dragEl } = scrollbar;
    swiper.scrollbar.isTouched = true;
    swiper.scrollbar.dragStartPos = (e.target === $dragEl[0] || e.target === $dragEl)
      ? scrollbar.getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
    e.preventDefault();
    e.stopPropagation();

    $wrapperEl.transition(100);
    $dragEl.transition(100);
    scrollbar.setDragPosition(e);

    clearTimeout(swiper.scrollbar.dragTimeout);

    $el.transition(0);
    if (params.hide) {
      $el.css('opacity', 1);
    }
    if (swiper.params.cssMode) {
      swiper.$wrapperEl.css('scroll-snap-type', 'none');
    }
    swiper.emit('scrollbarDragStart', e);
  },
  onDragMove(e) {
    const swiper = this;
    const { scrollbar, $wrapperEl } = swiper;
    const { $el, $dragEl } = scrollbar;

    if (!swiper.scrollbar.isTouched) return;
    if (e.preventDefault) e.preventDefault();
    else e.returnValue = false;
    scrollbar.setDragPosition(e);
    $wrapperEl.transition(0);
    $el.transition(0);
    $dragEl.transition(0);
    swiper.emit('scrollbarDragMove', e);
  },
  onDragEnd(e) {
    const swiper = this;

    const params = swiper.params.scrollbar;
    const { scrollbar, $wrapperEl } = swiper;
    const { $el } = scrollbar;

    if (!swiper.scrollbar.isTouched) return;
    swiper.scrollbar.isTouched = false;
    if (swiper.params.cssMode) {
      swiper.$wrapperEl.css('scroll-snap-type', '');
      $wrapperEl.transition('');
    }
    if (params.hide) {
      clearTimeout(swiper.scrollbar.dragTimeout);
      swiper.scrollbar.dragTimeout = Utils.nextTick(() => {
        $el.css('opacity', 0);
        $el.transition(400);
      }, 1000);
    }
    swiper.emit('scrollbarDragEnd', e);
    if (params.snapOnRelease) {
      swiper.slideToClosest();
    }
  },
  enableDraggable() {
    const swiper = this;
    if (!swiper.params.scrollbar.el) return;
    const {
      scrollbar, touchEventsTouch, touchEventsDesktop, params,
    } = swiper;
    const $el = scrollbar.$el;
    const target = $el[0];
    const activeListener = Support.passiveListener && params.passiveListeners ? { passive: false, capture: false } : false;
    const passiveListener = Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
    if (!Support.touch) {
      target.addEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].addEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].addEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
    } else {
      target.addEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
      target.addEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
      target.addEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
    }
  },
  disableDraggable() {
    const swiper = this;
    if (!swiper.params.scrollbar.el) return;
    const {
      scrollbar, touchEventsTouch, touchEventsDesktop, params,
    } = swiper;
    const $el = scrollbar.$el;
    const target = $el[0];
    const activeListener = Support.passiveListener && params.passiveListeners ? { passive: false, capture: false } : false;
    const passiveListener = Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
    if (!Support.touch) {
      target.removeEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].removeEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].removeEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
    } else {
      target.removeEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
      target.removeEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
      target.removeEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
    }
  },
  init() {
    const swiper = this;
    if (!swiper.params.scrollbar.el) return;
    const { scrollbar, $el: $swiperEl } = swiper;
    const params = swiper.params.scrollbar;

    let $el = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(params.el);
    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
      $el = $swiperEl.find(params.el);
    }

    let $dragEl = $el.find(`.${swiper.params.scrollbar.dragClass}`);
    if ($dragEl.length === 0) {
      $dragEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(`<div class="${swiper.params.scrollbar.dragClass}"></div>`);
      $el.append($dragEl);
    }

    Utils.extend(scrollbar, {
      $el,
      el: $el[0],
      $dragEl,
      dragEl: $dragEl[0],
    });

    if (params.draggable) {
      scrollbar.enableDraggable();
    }
  },
  destroy() {
    const swiper = this;
    swiper.scrollbar.disableDraggable();
  },
};

var Scrollbar$1 = {
  name: 'scrollbar',
  params: {
    scrollbar: {
      el: null,
      dragSize: 'auto',
      hide: false,
      draggable: false,
      snapOnRelease: true,
      lockClass: 'swiper-scrollbar-lock',
      dragClass: 'swiper-scrollbar-drag',
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      scrollbar: {
        init: Scrollbar.init.bind(swiper),
        destroy: Scrollbar.destroy.bind(swiper),
        updateSize: Scrollbar.updateSize.bind(swiper),
        setTranslate: Scrollbar.setTranslate.bind(swiper),
        setTransition: Scrollbar.setTransition.bind(swiper),
        enableDraggable: Scrollbar.enableDraggable.bind(swiper),
        disableDraggable: Scrollbar.disableDraggable.bind(swiper),
        setDragPosition: Scrollbar.setDragPosition.bind(swiper),
        getPointerPosition: Scrollbar.getPointerPosition.bind(swiper),
        onDragStart: Scrollbar.onDragStart.bind(swiper),
        onDragMove: Scrollbar.onDragMove.bind(swiper),
        onDragEnd: Scrollbar.onDragEnd.bind(swiper),
        isTouched: false,
        timeout: null,
        dragTimeout: null,
      },
    });
  },
  on: {
    init() {
      const swiper = this;
      swiper.scrollbar.init();
      swiper.scrollbar.updateSize();
      swiper.scrollbar.setTranslate();
    },
    update() {
      const swiper = this;
      swiper.scrollbar.updateSize();
    },
    resize() {
      const swiper = this;
      swiper.scrollbar.updateSize();
    },
    observerUpdate() {
      const swiper = this;
      swiper.scrollbar.updateSize();
    },
    setTranslate() {
      const swiper = this;
      swiper.scrollbar.setTranslate();
    },
    setTransition(duration) {
      const swiper = this;
      swiper.scrollbar.setTransition(duration);
    },
    destroy() {
      const swiper = this;
      swiper.scrollbar.destroy();
    },
  },
};

const Parallax = {
  setTransform(el, progress) {
    const swiper = this;
    const { rtl } = swiper;

    const $el = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(el);
    const rtlFactor = rtl ? -1 : 1;

    const p = $el.attr('data-swiper-parallax') || '0';
    let x = $el.attr('data-swiper-parallax-x');
    let y = $el.attr('data-swiper-parallax-y');
    const scale = $el.attr('data-swiper-parallax-scale');
    const opacity = $el.attr('data-swiper-parallax-opacity');

    if (x || y) {
      x = x || '0';
      y = y || '0';
    } else if (swiper.isHorizontal()) {
      x = p;
      y = '0';
    } else {
      y = p;
      x = '0';
    }

    if ((x).indexOf('%') >= 0) {
      x = `${parseInt(x, 10) * progress * rtlFactor}%`;
    } else {
      x = `${x * progress * rtlFactor}px`;
    }
    if ((y).indexOf('%') >= 0) {
      y = `${parseInt(y, 10) * progress}%`;
    } else {
      y = `${y * progress}px`;
    }

    if (typeof opacity !== 'undefined' && opacity !== null) {
      const currentOpacity = opacity - ((opacity - 1) * (1 - Math.abs(progress)));
      $el[0].style.opacity = currentOpacity;
    }
    if (typeof scale === 'undefined' || scale === null) {
      $el.transform(`translate3d(${x}, ${y}, 0px)`);
    } else {
      const currentScale = scale - ((scale - 1) * (1 - Math.abs(progress)));
      $el.transform(`translate3d(${x}, ${y}, 0px) scale(${currentScale})`);
    }
  },
  setTranslate() {
    const swiper = this;
    const {
      $el, slides, progress, snapGrid,
    } = swiper;
    $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]')
      .each((index, el) => {
        swiper.parallax.setTransform(el, progress);
      });
    slides.each((slideIndex, slideEl) => {
      let slideProgress = slideEl.progress;
      if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
        slideProgress += Math.ceil(slideIndex / 2) - (progress * (snapGrid.length - 1));
      }
      slideProgress = Math.min(Math.max(slideProgress, -1), 1);
      Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]')
        .each((index, el) => {
          swiper.parallax.setTransform(el, slideProgress);
        });
    });
  },
  setTransition(duration = this.params.speed) {
    const swiper = this;
    const { $el } = swiper;
    $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]')
      .each((index, parallaxEl) => {
        const $parallaxEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(parallaxEl);
        let parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
        if (duration === 0) parallaxDuration = 0;
        $parallaxEl.transition(parallaxDuration);
      });
  },
};

var Parallax$1 = {
  name: 'parallax',
  params: {
    parallax: {
      enabled: false,
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      parallax: {
        setTransform: Parallax.setTransform.bind(swiper),
        setTranslate: Parallax.setTranslate.bind(swiper),
        setTransition: Parallax.setTransition.bind(swiper),
      },
    });
  },
  on: {
    beforeInit() {
      const swiper = this;
      if (!swiper.params.parallax.enabled) return;
      swiper.params.watchSlidesProgress = true;
      swiper.originalParams.watchSlidesProgress = true;
    },
    init() {
      const swiper = this;
      if (!swiper.params.parallax.enabled) return;
      swiper.parallax.setTranslate();
    },
    setTranslate() {
      const swiper = this;
      if (!swiper.params.parallax.enabled) return;
      swiper.parallax.setTranslate();
    },
    setTransition(duration) {
      const swiper = this;
      if (!swiper.params.parallax.enabled) return;
      swiper.parallax.setTransition(duration);
    },
  },
};

const Zoom = {
  // Calc Scale From Multi-touches
  getDistanceBetweenTouches(e) {
    if (e.targetTouches.length < 2) return 1;
    const x1 = e.targetTouches[0].pageX;
    const y1 = e.targetTouches[0].pageY;
    const x2 = e.targetTouches[1].pageX;
    const y2 = e.targetTouches[1].pageY;
    const distance = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));
    return distance;
  },
  // Events
  onGestureStart(e) {
    const swiper = this;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;
    const { gesture } = zoom;
    zoom.fakeGestureTouched = false;
    zoom.fakeGestureMoved = false;
    if (!Support.gestures) {
      if (e.type !== 'touchstart' || (e.type === 'touchstart' && e.targetTouches.length < 2)) {
        return;
      }
      zoom.fakeGestureTouched = true;
      gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
    }
    if (!gesture.$slideEl || !gesture.$slideEl.length) {
      gesture.$slideEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(e.target).closest(`.${swiper.params.slideClass}`);
      if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
      gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
      gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
      gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
      if (gesture.$imageWrapEl.length === 0) {
        gesture.$imageEl = undefined;
        return;
      }
    }
    if (gesture.$imageEl) {
      gesture.$imageEl.transition(0);
    }
    swiper.zoom.isScaling = true;
  },
  onGestureChange(e) {
    const swiper = this;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;
    const { gesture } = zoom;
    if (!Support.gestures) {
      if (e.type !== 'touchmove' || (e.type === 'touchmove' && e.targetTouches.length < 2)) {
        return;
      }
      zoom.fakeGestureMoved = true;
      gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
    }
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    if (Support.gestures) {
      zoom.scale = e.scale * zoom.currentScale;
    } else {
      zoom.scale = (gesture.scaleMove / gesture.scaleStart) * zoom.currentScale;
    }
    if (zoom.scale > gesture.maxRatio) {
      zoom.scale = (gesture.maxRatio - 1) + (((zoom.scale - gesture.maxRatio) + 1) ** 0.5);
    }
    if (zoom.scale < params.minRatio) {
      zoom.scale = (params.minRatio + 1) - (((params.minRatio - zoom.scale) + 1) ** 0.5);
    }
    gesture.$imageEl.transform(`translate3d(0,0,0) scale(${zoom.scale})`);
  },
  onGestureEnd(e) {
    const swiper = this;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;
    const { gesture } = zoom;
    if (!Support.gestures) {
      if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
        return;
      }
      if (e.type !== 'touchend' || (e.type === 'touchend' && e.changedTouches.length < 2 && !Device.android)) {
        return;
      }
      zoom.fakeGestureTouched = false;
      zoom.fakeGestureMoved = false;
    }
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
    gesture.$imageEl.transition(swiper.params.speed).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
    zoom.currentScale = zoom.scale;
    zoom.isScaling = false;
    if (zoom.scale === 1) gesture.$slideEl = undefined;
  },
  onTouchStart(e) {
    const swiper = this;
    const zoom = swiper.zoom;
    const { gesture, image } = zoom;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    if (image.isTouched) return;
    if (Device.android) e.preventDefault();
    image.isTouched = true;
    image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
    image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
  },
  onTouchMove(e) {
    const swiper = this;
    const zoom = swiper.zoom;
    const { gesture, image, velocity } = zoom;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    swiper.allowClick = false;
    if (!image.isTouched || !gesture.$slideEl) return;

    if (!image.isMoved) {
      image.width = gesture.$imageEl[0].offsetWidth;
      image.height = gesture.$imageEl[0].offsetHeight;
      image.startX = Utils.getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
      image.startY = Utils.getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
      gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
      gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
      gesture.$imageWrapEl.transition(0);
      if (swiper.rtl) {
        image.startX = -image.startX;
        image.startY = -image.startY;
      }
    }
    // Define if we need image drag
    const scaledWidth = image.width * zoom.scale;
    const scaledHeight = image.height * zoom.scale;

    if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;

    image.minX = Math.min(((gesture.slideWidth / 2) - (scaledWidth / 2)), 0);
    image.maxX = -image.minX;
    image.minY = Math.min(((gesture.slideHeight / 2) - (scaledHeight / 2)), 0);
    image.maxY = -image.minY;

    image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
    image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

    if (!image.isMoved && !zoom.isScaling) {
      if (
        swiper.isHorizontal()
        && (
          (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x)
          || (Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)
        )
      ) {
        image.isTouched = false;
        return;
      } if (
        !swiper.isHorizontal()
        && (
          (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y)
          || (Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)
        )
      ) {
        image.isTouched = false;
        return;
      }
    }
    e.preventDefault();
    e.stopPropagation();

    image.isMoved = true;
    image.currentX = (image.touchesCurrent.x - image.touchesStart.x) + image.startX;
    image.currentY = (image.touchesCurrent.y - image.touchesStart.y) + image.startY;

    if (image.currentX < image.minX) {
      image.currentX = (image.minX + 1) - (((image.minX - image.currentX) + 1) ** 0.8);
    }
    if (image.currentX > image.maxX) {
      image.currentX = (image.maxX - 1) + (((image.currentX - image.maxX) + 1) ** 0.8);
    }

    if (image.currentY < image.minY) {
      image.currentY = (image.minY + 1) - (((image.minY - image.currentY) + 1) ** 0.8);
    }
    if (image.currentY > image.maxY) {
      image.currentY = (image.maxY - 1) + (((image.currentY - image.maxY) + 1) ** 0.8);
    }

    // Velocity
    if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
    if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
    if (!velocity.prevTime) velocity.prevTime = Date.now();
    velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
    velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
    if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
    if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
    velocity.prevPositionX = image.touchesCurrent.x;
    velocity.prevPositionY = image.touchesCurrent.y;
    velocity.prevTime = Date.now();

    gesture.$imageWrapEl.transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
  },
  onTouchEnd() {
    const swiper = this;
    const zoom = swiper.zoom;
    const { gesture, image, velocity } = zoom;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    if (!image.isTouched || !image.isMoved) {
      image.isTouched = false;
      image.isMoved = false;
      return;
    }
    image.isTouched = false;
    image.isMoved = false;
    let momentumDurationX = 300;
    let momentumDurationY = 300;
    const momentumDistanceX = velocity.x * momentumDurationX;
    const newPositionX = image.currentX + momentumDistanceX;
    const momentumDistanceY = velocity.y * momentumDurationY;
    const newPositionY = image.currentY + momentumDistanceY;

    // Fix duration
    if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
    if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
    const momentumDuration = Math.max(momentumDurationX, momentumDurationY);

    image.currentX = newPositionX;
    image.currentY = newPositionY;

    // Define if we need image drag
    const scaledWidth = image.width * zoom.scale;
    const scaledHeight = image.height * zoom.scale;
    image.minX = Math.min(((gesture.slideWidth / 2) - (scaledWidth / 2)), 0);
    image.maxX = -image.minX;
    image.minY = Math.min(((gesture.slideHeight / 2) - (scaledHeight / 2)), 0);
    image.maxY = -image.minY;
    image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
    image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);

    gesture.$imageWrapEl.transition(momentumDuration).transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
  },
  onTransitionEnd() {
    const swiper = this;
    const zoom = swiper.zoom;
    const { gesture } = zoom;
    if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
      if (gesture.$imageEl) {
        gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
      }
      if (gesture.$imageWrapEl) {
        gesture.$imageWrapEl.transform('translate3d(0,0,0)');
      }

      zoom.scale = 1;
      zoom.currentScale = 1;

      gesture.$slideEl = undefined;
      gesture.$imageEl = undefined;
      gesture.$imageWrapEl = undefined;
    }
  },
  // Toggle Zoom
  toggle(e) {
    const swiper = this;
    const zoom = swiper.zoom;

    if (zoom.scale && zoom.scale !== 1) {
      // Zoom Out
      zoom.out();
    } else {
      // Zoom In
      zoom.in(e);
    }
  },
  in(e) {
    const swiper = this;

    const zoom = swiper.zoom;
    const params = swiper.params.zoom;
    const { gesture, image } = zoom;

    if (!gesture.$slideEl) {
      if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
        gesture.$slideEl = swiper.$wrapperEl.children(`.${swiper.params.slideActiveClass}`);
      } else {
        gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
      }
      gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
      gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
    }
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;

    gesture.$slideEl.addClass(`${params.zoomedSlideClass}`);

    let touchX;
    let touchY;
    let offsetX;
    let offsetY;
    let diffX;
    let diffY;
    let translateX;
    let translateY;
    let imageWidth;
    let imageHeight;
    let scaledWidth;
    let scaledHeight;
    let translateMinX;
    let translateMinY;
    let translateMaxX;
    let translateMaxY;
    let slideWidth;
    let slideHeight;

    if (typeof image.touchesStart.x === 'undefined' && e) {
      touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
      touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
    } else {
      touchX = image.touchesStart.x;
      touchY = image.touchesStart.y;
    }

    zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
    zoom.currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
    if (e) {
      slideWidth = gesture.$slideEl[0].offsetWidth;
      slideHeight = gesture.$slideEl[0].offsetHeight;
      offsetX = gesture.$slideEl.offset().left;
      offsetY = gesture.$slideEl.offset().top;
      diffX = (offsetX + (slideWidth / 2)) - touchX;
      diffY = (offsetY + (slideHeight / 2)) - touchY;

      imageWidth = gesture.$imageEl[0].offsetWidth;
      imageHeight = gesture.$imageEl[0].offsetHeight;
      scaledWidth = imageWidth * zoom.scale;
      scaledHeight = imageHeight * zoom.scale;

      translateMinX = Math.min(((slideWidth / 2) - (scaledWidth / 2)), 0);
      translateMinY = Math.min(((slideHeight / 2) - (scaledHeight / 2)), 0);
      translateMaxX = -translateMinX;
      translateMaxY = -translateMinY;

      translateX = diffX * zoom.scale;
      translateY = diffY * zoom.scale;

      if (translateX < translateMinX) {
        translateX = translateMinX;
      }
      if (translateX > translateMaxX) {
        translateX = translateMaxX;
      }

      if (translateY < translateMinY) {
        translateY = translateMinY;
      }
      if (translateY > translateMaxY) {
        translateY = translateMaxY;
      }
    } else {
      translateX = 0;
      translateY = 0;
    }
    gesture.$imageWrapEl.transition(300).transform(`translate3d(${translateX}px, ${translateY}px,0)`);
    gesture.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
  },
  out() {
    const swiper = this;

    const zoom = swiper.zoom;
    const params = swiper.params.zoom;
    const { gesture } = zoom;

    if (!gesture.$slideEl) {
      if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
        gesture.$slideEl = swiper.$wrapperEl.children(`.${swiper.params.slideActiveClass}`);
      } else {
        gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
      }
      gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
      gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
    }
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;

    zoom.scale = 1;
    zoom.currentScale = 1;
    gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
    gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
    gesture.$slideEl.removeClass(`${params.zoomedSlideClass}`);
    gesture.$slideEl = undefined;
  },
  // Attach/Detach Events
  enable() {
    const swiper = this;
    const zoom = swiper.zoom;
    if (zoom.enabled) return;
    zoom.enabled = true;

    const passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? { passive: true, capture: false } : false;
    const activeListenerWithCapture = Support.passiveListener ? { passive: false, capture: true } : true;

    const slideSelector = `.${swiper.params.slideClass}`;

    // Scale image
    if (Support.gestures) {
      swiper.$wrapperEl.on('gesturestart', slideSelector, zoom.onGestureStart, passiveListener);
      swiper.$wrapperEl.on('gesturechange', slideSelector, zoom.onGestureChange, passiveListener);
      swiper.$wrapperEl.on('gestureend', slideSelector, zoom.onGestureEnd, passiveListener);
    } else if (swiper.touchEvents.start === 'touchstart') {
      swiper.$wrapperEl.on(swiper.touchEvents.start, slideSelector, zoom.onGestureStart, passiveListener);
      swiper.$wrapperEl.on(swiper.touchEvents.move, slideSelector, zoom.onGestureChange, activeListenerWithCapture);
      swiper.$wrapperEl.on(swiper.touchEvents.end, slideSelector, zoom.onGestureEnd, passiveListener);
      if (swiper.touchEvents.cancel) {
        swiper.$wrapperEl.on(swiper.touchEvents.cancel, slideSelector, zoom.onGestureEnd, passiveListener);
      }
    }

    // Move image
    swiper.$wrapperEl.on(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, zoom.onTouchMove, activeListenerWithCapture);
  },
  disable() {
    const swiper = this;
    const zoom = swiper.zoom;
    if (!zoom.enabled) return;

    swiper.zoom.enabled = false;

    const passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? { passive: true, capture: false } : false;
    const activeListenerWithCapture = Support.passiveListener ? { passive: false, capture: true } : true;

    const slideSelector = `.${swiper.params.slideClass}`;

    // Scale image
    if (Support.gestures) {
      swiper.$wrapperEl.off('gesturestart', slideSelector, zoom.onGestureStart, passiveListener);
      swiper.$wrapperEl.off('gesturechange', slideSelector, zoom.onGestureChange, passiveListener);
      swiper.$wrapperEl.off('gestureend', slideSelector, zoom.onGestureEnd, passiveListener);
    } else if (swiper.touchEvents.start === 'touchstart') {
      swiper.$wrapperEl.off(swiper.touchEvents.start, slideSelector, zoom.onGestureStart, passiveListener);
      swiper.$wrapperEl.off(swiper.touchEvents.move, slideSelector, zoom.onGestureChange, activeListenerWithCapture);
      swiper.$wrapperEl.off(swiper.touchEvents.end, slideSelector, zoom.onGestureEnd, passiveListener);
      if (swiper.touchEvents.cancel) {
        swiper.$wrapperEl.off(swiper.touchEvents.cancel, slideSelector, zoom.onGestureEnd, passiveListener);
      }
    }

    // Move image
    swiper.$wrapperEl.off(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, zoom.onTouchMove, activeListenerWithCapture);
  },
};

var Zoom$1 = {
  name: 'zoom',
  params: {
    zoom: {
      enabled: false,
      maxRatio: 3,
      minRatio: 1,
      toggle: true,
      containerClass: 'swiper-zoom-container',
      zoomedSlideClass: 'swiper-slide-zoomed',
    },
  },
  create() {
    const swiper = this;
    const zoom = {
      enabled: false,
      scale: 1,
      currentScale: 1,
      isScaling: false,
      gesture: {
        $slideEl: undefined,
        slideWidth: undefined,
        slideHeight: undefined,
        $imageEl: undefined,
        $imageWrapEl: undefined,
        maxRatio: 3,
      },
      image: {
        isTouched: undefined,
        isMoved: undefined,
        currentX: undefined,
        currentY: undefined,
        minX: undefined,
        minY: undefined,
        maxX: undefined,
        maxY: undefined,
        width: undefined,
        height: undefined,
        startX: undefined,
        startY: undefined,
        touchesStart: {},
        touchesCurrent: {},
      },
      velocity: {
        x: undefined,
        y: undefined,
        prevPositionX: undefined,
        prevPositionY: undefined,
        prevTime: undefined,
      },
    };

    ('onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out').split(' ').forEach((methodName) => {
      zoom[methodName] = Zoom[methodName].bind(swiper);
    });
    Utils.extend(swiper, {
      zoom,
    });

    let scale = 1;
    Object.defineProperty(swiper.zoom, 'scale', {
      get() {
        return scale;
      },
      set(value) {
        if (scale !== value) {
          const imageEl = swiper.zoom.gesture.$imageEl ? swiper.zoom.gesture.$imageEl[0] : undefined;
          const slideEl = swiper.zoom.gesture.$slideEl ? swiper.zoom.gesture.$slideEl[0] : undefined;
          swiper.emit('zoomChange', value, imageEl, slideEl);
        }
        scale = value;
      },
    });
  },
  on: {
    init() {
      const swiper = this;
      if (swiper.params.zoom.enabled) {
        swiper.zoom.enable();
      }
    },
    destroy() {
      const swiper = this;
      swiper.zoom.disable();
    },
    touchStart(e) {
      const swiper = this;
      if (!swiper.zoom.enabled) return;
      swiper.zoom.onTouchStart(e);
    },
    touchEnd(e) {
      const swiper = this;
      if (!swiper.zoom.enabled) return;
      swiper.zoom.onTouchEnd(e);
    },
    doubleTap(e) {
      const swiper = this;
      if (swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
        swiper.zoom.toggle(e);
      }
    },
    transitionEnd() {
      const swiper = this;
      if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
        swiper.zoom.onTransitionEnd();
      }
    },
    slideChange() {
      const swiper = this;
      if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
        swiper.zoom.onTransitionEnd();
      }
    },
  },
};

const Lazy = {
  loadInSlide(index, loadInDuplicate = true) {
    const swiper = this;
    const params = swiper.params.lazy;
    if (typeof index === 'undefined') return;
    if (swiper.slides.length === 0) return;
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;

    const $slideEl = isVirtual
      ? swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-swiper-slide-index="${index}"]`)
      : swiper.slides.eq(index);

    let $images = $slideEl.find(`.${params.elementClass}:not(.${params.loadedClass}):not(.${params.loadingClass})`);
    if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
      $images = $images.add($slideEl[0]);
    }
    if ($images.length === 0) return;

    $images.each((imageIndex, imageEl) => {
      const $imageEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(imageEl);
      $imageEl.addClass(params.loadingClass);

      const background = $imageEl.attr('data-background');
      const src = $imageEl.attr('data-src');
      const srcset = $imageEl.attr('data-srcset');
      const sizes = $imageEl.attr('data-sizes');

      swiper.loadImage($imageEl[0], (src || background), srcset, sizes, false, () => {
        if (typeof swiper === 'undefined' || swiper === null || !swiper || (swiper && !swiper.params) || swiper.destroyed) return;
        if (background) {
          $imageEl.css('background-image', `url("${background}")`);
          $imageEl.removeAttr('data-background');
        } else {
          if (srcset) {
            $imageEl.attr('srcset', srcset);
            $imageEl.removeAttr('data-srcset');
          }
          if (sizes) {
            $imageEl.attr('sizes', sizes);
            $imageEl.removeAttr('data-sizes');
          }
          if (src) {
            $imageEl.attr('src', src);
            $imageEl.removeAttr('data-src');
          }
        }

        $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
        $slideEl.find(`.${params.preloaderClass}`).remove();
        if (swiper.params.loop && loadInDuplicate) {
          const slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');
          if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
            const originalSlide = swiper.$wrapperEl.children(`[data-swiper-slide-index="${slideOriginalIndex}"]:not(.${swiper.params.slideDuplicateClass})`);
            swiper.lazy.loadInSlide(originalSlide.index(), false);
          } else {
            const duplicatedSlide = swiper.$wrapperEl.children(`.${swiper.params.slideDuplicateClass}[data-swiper-slide-index="${slideOriginalIndex}"]`);
            swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
          }
        }
        swiper.emit('lazyImageReady', $slideEl[0], $imageEl[0]);
        if (swiper.params.autoHeight) {
          swiper.updateAutoHeight();
        }
      });

      swiper.emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
    });
  },
  load() {
    const swiper = this;
    const {
      $wrapperEl, params: swiperParams, slides, activeIndex,
    } = swiper;
    const isVirtual = swiper.virtual && swiperParams.virtual.enabled;
    const params = swiperParams.lazy;

    let slidesPerView = swiperParams.slidesPerView;
    if (slidesPerView === 'auto') {
      slidesPerView = 0;
    }

    function slideExist(index) {
      if (isVirtual) {
        if ($wrapperEl.children(`.${swiperParams.slideClass}[data-swiper-slide-index="${index}"]`).length) {
          return true;
        }
      } else if (slides[index]) return true;
      return false;
    }
    function slideIndex(slideEl) {
      if (isVirtual) {
        return Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(slideEl).attr('data-swiper-slide-index');
      }
      return Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(slideEl).index();
    }

    if (!swiper.lazy.initialImageLoaded) swiper.lazy.initialImageLoaded = true;
    if (swiper.params.watchSlidesVisibility) {
      $wrapperEl.children(`.${swiperParams.slideVisibleClass}`).each((elIndex, slideEl) => {
        const index = isVirtual ? Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(slideEl).attr('data-swiper-slide-index') : Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(slideEl).index();
        swiper.lazy.loadInSlide(index);
      });
    } else if (slidesPerView > 1) {
      for (let i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
        if (slideExist(i)) swiper.lazy.loadInSlide(i);
      }
    } else {
      swiper.lazy.loadInSlide(activeIndex);
    }
    if (params.loadPrevNext) {
      if (slidesPerView > 1 || (params.loadPrevNextAmount && params.loadPrevNextAmount > 1)) {
        const amount = params.loadPrevNextAmount;
        const spv = slidesPerView;
        const maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
        const minIndex = Math.max(activeIndex - Math.max(spv, amount), 0);
        // Next Slides
        for (let i = activeIndex + slidesPerView; i < maxIndex; i += 1) {
          if (slideExist(i)) swiper.lazy.loadInSlide(i);
        }
        // Prev Slides
        for (let i = minIndex; i < activeIndex; i += 1) {
          if (slideExist(i)) swiper.lazy.loadInSlide(i);
        }
      } else {
        const nextSlide = $wrapperEl.children(`.${swiperParams.slideNextClass}`);
        if (nextSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(nextSlide));

        const prevSlide = $wrapperEl.children(`.${swiperParams.slidePrevClass}`);
        if (prevSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(prevSlide));
      }
    }
  },
};

var Lazy$1 = {
  name: 'lazy',
  params: {
    lazy: {
      enabled: false,
      loadPrevNext: false,
      loadPrevNextAmount: 1,
      loadOnTransitionStart: false,

      elementClass: 'swiper-lazy',
      loadingClass: 'swiper-lazy-loading',
      loadedClass: 'swiper-lazy-loaded',
      preloaderClass: 'swiper-lazy-preloader',
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      lazy: {
        initialImageLoaded: false,
        load: Lazy.load.bind(swiper),
        loadInSlide: Lazy.loadInSlide.bind(swiper),
      },
    });
  },
  on: {
    beforeInit() {
      const swiper = this;
      if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
        swiper.params.preloadImages = false;
      }
    },
    init() {
      const swiper = this;
      if (swiper.params.lazy.enabled && !swiper.params.loop && swiper.params.initialSlide === 0) {
        swiper.lazy.load();
      }
    },
    scroll() {
      const swiper = this;
      if (swiper.params.freeMode && !swiper.params.freeModeSticky) {
        swiper.lazy.load();
      }
    },
    resize() {
      const swiper = this;
      if (swiper.params.lazy.enabled) {
        swiper.lazy.load();
      }
    },
    scrollbarDragMove() {
      const swiper = this;
      if (swiper.params.lazy.enabled) {
        swiper.lazy.load();
      }
    },
    transitionStart() {
      const swiper = this;
      if (swiper.params.lazy.enabled) {
        if (swiper.params.lazy.loadOnTransitionStart || (!swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded)) {
          swiper.lazy.load();
        }
      }
    },
    transitionEnd() {
      const swiper = this;
      if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
        swiper.lazy.load();
      }
    },
    slideChange() {
      const swiper = this;
      if (swiper.params.lazy.enabled && swiper.params.cssMode) {
        swiper.lazy.load();
      }
    },
  },
};

/* eslint no-bitwise: ["error", { "allow": [">>"] }] */

const Controller = {
  LinearSpline: function LinearSpline(x, y) {
    const binarySearch = (function search() {
      let maxIndex;
      let minIndex;
      let guess;
      return (array, val) => {
        minIndex = -1;
        maxIndex = array.length;
        while (maxIndex - minIndex > 1) {
          guess = maxIndex + minIndex >> 1;
          if (array[guess] <= val) {
            minIndex = guess;
          } else {
            maxIndex = guess;
          }
        }
        return maxIndex;
      };
    }());
    this.x = x;
    this.y = y;
    this.lastIndex = x.length - 1;
    // Given an x value (x2), return the expected y2 value:
    // (x1,y1) is the known point before given value,
    // (x3,y3) is the known point after given value.
    let i1;
    let i3;

    this.interpolate = function interpolate(x2) {
      if (!x2) return 0;

      // Get the indexes of x1 and x3 (the array indexes before and after given x2):
      i3 = binarySearch(this.x, x2);
      i1 = i3 - 1;

      // We have our indexes i1 & i3, so we can calculate already:
      // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
      return (((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) / (this.x[i3] - this.x[i1])) + this.y[i1];
    };
    return this;
  },
  // xxx: for now i will just save one spline function to to
  getInterpolateFunction(c) {
    const swiper = this;
    if (!swiper.controller.spline) {
      swiper.controller.spline = swiper.params.loop
        ? new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid)
        : new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
    }
  },
  setTranslate(setTranslate, byController) {
    const swiper = this;
    const controlled = swiper.controller.control;
    let multiplier;
    let controlledTranslate;
    function setControlledTranslate(c) {
      // this will create an Interpolate function based on the snapGrids
      // x is the Grid of the scrolled scroller and y will be the controlled scroller
      // it makes sense to create this only once and recall it for the interpolation
      // the function does a lot of value caching for performance
      const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
      if (swiper.params.controller.by === 'slide') {
        swiper.controller.getInterpolateFunction(c);
        // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
        // but it did not work out
        controlledTranslate = -swiper.controller.spline.interpolate(-translate);
      }

      if (!controlledTranslate || swiper.params.controller.by === 'container') {
        multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
        controlledTranslate = ((translate - swiper.minTranslate()) * multiplier) + c.minTranslate();
      }

      if (swiper.params.controller.inverse) {
        controlledTranslate = c.maxTranslate() - controlledTranslate;
      }
      c.updateProgress(controlledTranslate);
      c.setTranslate(controlledTranslate, swiper);
      c.updateActiveIndex();
      c.updateSlidesClasses();
    }
    if (Array.isArray(controlled)) {
      for (let i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTranslate(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTranslate(controlled);
    }
  },
  setTransition(duration, byController) {
    const swiper = this;
    const controlled = swiper.controller.control;
    let i;
    function setControlledTransition(c) {
      c.setTransition(duration, swiper);
      if (duration !== 0) {
        c.transitionStart();
        if (c.params.autoHeight) {
          Utils.nextTick(() => {
            c.updateAutoHeight();
          });
        }
        c.$wrapperEl.transitionEnd(() => {
          if (!controlled) return;
          if (c.params.loop && swiper.params.controller.by === 'slide') {
            c.loopFix();
          }
          c.transitionEnd();
        });
      }
    }
    if (Array.isArray(controlled)) {
      for (i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTransition(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTransition(controlled);
    }
  },
};
var Controller$1 = {
  name: 'controller',
  params: {
    controller: {
      control: undefined,
      inverse: false,
      by: 'slide', // or 'container'
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      controller: {
        control: swiper.params.controller.control,
        getInterpolateFunction: Controller.getInterpolateFunction.bind(swiper),
        setTranslate: Controller.setTranslate.bind(swiper),
        setTransition: Controller.setTransition.bind(swiper),
      },
    });
  },
  on: {
    update() {
      const swiper = this;
      if (!swiper.controller.control) return;
      if (swiper.controller.spline) {
        swiper.controller.spline = undefined;
        delete swiper.controller.spline;
      }
    },
    resize() {
      const swiper = this;
      if (!swiper.controller.control) return;
      if (swiper.controller.spline) {
        swiper.controller.spline = undefined;
        delete swiper.controller.spline;
      }
    },
    observerUpdate() {
      const swiper = this;
      if (!swiper.controller.control) return;
      if (swiper.controller.spline) {
        swiper.controller.spline = undefined;
        delete swiper.controller.spline;
      }
    },
    setTranslate(translate, byController) {
      const swiper = this;
      if (!swiper.controller.control) return;
      swiper.controller.setTranslate(translate, byController);
    },
    setTransition(duration, byController) {
      const swiper = this;
      if (!swiper.controller.control) return;
      swiper.controller.setTransition(duration, byController);
    },
  },
};

const a11y = {
  makeElFocusable($el) {
    $el.attr('tabIndex', '0');
    return $el;
  },
  addElRole($el, role) {
    $el.attr('role', role);
    return $el;
  },
  addElLabel($el, label) {
    $el.attr('aria-label', label);
    return $el;
  },
  disableEl($el) {
    $el.attr('aria-disabled', true);
    return $el;
  },
  enableEl($el) {
    $el.attr('aria-disabled', false);
    return $el;
  },
  onEnterKey(e) {
    const swiper = this;
    const params = swiper.params.a11y;
    if (e.keyCode !== 13) return;
    const $targetEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(e.target);
    if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
      if (!(swiper.isEnd && !swiper.params.loop)) {
        swiper.slideNext();
      }
      if (swiper.isEnd) {
        swiper.a11y.notify(params.lastSlideMessage);
      } else {
        swiper.a11y.notify(params.nextSlideMessage);
      }
    }
    if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
      if (!(swiper.isBeginning && !swiper.params.loop)) {
        swiper.slidePrev();
      }
      if (swiper.isBeginning) {
        swiper.a11y.notify(params.firstSlideMessage);
      } else {
        swiper.a11y.notify(params.prevSlideMessage);
      }
    }
    if (swiper.pagination && $targetEl.is(`.${swiper.params.pagination.bulletClass}`)) {
      $targetEl[0].click();
    }
  },
  notify(message) {
    const swiper = this;
    const notification = swiper.a11y.liveRegion;
    if (notification.length === 0) return;
    notification.html('');
    notification.html(message);
  },
  updateNavigation() {
    const swiper = this;

    if (swiper.params.loop || !swiper.navigation) return;
    const { $nextEl, $prevEl } = swiper.navigation;

    if ($prevEl && $prevEl.length > 0) {
      if (swiper.isBeginning) {
        swiper.a11y.disableEl($prevEl);
      } else {
        swiper.a11y.enableEl($prevEl);
      }
    }
    if ($nextEl && $nextEl.length > 0) {
      if (swiper.isEnd) {
        swiper.a11y.disableEl($nextEl);
      } else {
        swiper.a11y.enableEl($nextEl);
      }
    }
  },
  updatePagination() {
    const swiper = this;
    const params = swiper.params.a11y;
    if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
      swiper.pagination.bullets.each((bulletIndex, bulletEl) => {
        const $bulletEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(bulletEl);
        swiper.a11y.makeElFocusable($bulletEl);
        swiper.a11y.addElRole($bulletEl, 'button');
        swiper.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, $bulletEl.index() + 1));
      });
    }
  },
  init() {
    const swiper = this;

    swiper.$el.append(swiper.a11y.liveRegion);

    // Navigation
    const params = swiper.params.a11y;
    let $nextEl;
    let $prevEl;
    if (swiper.navigation && swiper.navigation.$nextEl) {
      $nextEl = swiper.navigation.$nextEl;
    }
    if (swiper.navigation && swiper.navigation.$prevEl) {
      $prevEl = swiper.navigation.$prevEl;
    }
    if ($nextEl) {
      swiper.a11y.makeElFocusable($nextEl);
      swiper.a11y.addElRole($nextEl, 'button');
      swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
      $nextEl.on('keydown', swiper.a11y.onEnterKey);
    }
    if ($prevEl) {
      swiper.a11y.makeElFocusable($prevEl);
      swiper.a11y.addElRole($prevEl, 'button');
      swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
      $prevEl.on('keydown', swiper.a11y.onEnterKey);
    }

    // Pagination
    if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
      swiper.pagination.$el.on('keydown', `.${swiper.params.pagination.bulletClass}`, swiper.a11y.onEnterKey);
    }
  },
  destroy() {
    const swiper = this;
    if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) swiper.a11y.liveRegion.remove();

    let $nextEl;
    let $prevEl;
    if (swiper.navigation && swiper.navigation.$nextEl) {
      $nextEl = swiper.navigation.$nextEl;
    }
    if (swiper.navigation && swiper.navigation.$prevEl) {
      $prevEl = swiper.navigation.$prevEl;
    }
    if ($nextEl) {
      $nextEl.off('keydown', swiper.a11y.onEnterKey);
    }
    if ($prevEl) {
      $prevEl.off('keydown', swiper.a11y.onEnterKey);
    }

    // Pagination
    if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
      swiper.pagination.$el.off('keydown', `.${swiper.params.pagination.bulletClass}`, swiper.a11y.onEnterKey);
    }
  },
};
var A11y = {
  name: 'a11y',
  params: {
    a11y: {
      enabled: true,
      notificationClass: 'swiper-notification',
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
      paginationBulletMessage: 'Go to slide {{index}}',
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      a11y: {
        liveRegion: Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(`<span class="${swiper.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`),
      },
    });
    Object.keys(a11y).forEach((methodName) => {
      swiper.a11y[methodName] = a11y[methodName].bind(swiper);
    });
  },
  on: {
    init() {
      const swiper = this;
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.init();
      swiper.a11y.updateNavigation();
    },
    toEdge() {
      const swiper = this;
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.updateNavigation();
    },
    fromEdge() {
      const swiper = this;
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.updateNavigation();
    },
    paginationUpdate() {
      const swiper = this;
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.updatePagination();
    },
    destroy() {
      const swiper = this;
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.destroy();
    },
  },
};

const History = {
  init() {
    const swiper = this;
    if (!swiper.params.history) return;
    if (!ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].history || !ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].history.pushState) {
      swiper.params.history.enabled = false;
      swiper.params.hashNavigation.enabled = true;
      return;
    }
    const history = swiper.history;
    history.initialized = true;
    history.paths = History.getPathValues();
    if (!history.paths.key && !history.paths.value) return;
    history.scrollToSlide(0, history.paths.value, swiper.params.runCallbacksOnInit);
    if (!swiper.params.history.replaceState) {
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].addEventListener('popstate', swiper.history.setHistoryPopState);
    }
  },
  destroy() {
    const swiper = this;
    if (!swiper.params.history.replaceState) {
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].removeEventListener('popstate', swiper.history.setHistoryPopState);
    }
  },
  setHistoryPopState() {
    const swiper = this;
    swiper.history.paths = History.getPathValues();
    swiper.history.scrollToSlide(swiper.params.speed, swiper.history.paths.value, false);
  },
  getPathValues() {
    const pathArray = ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].location.pathname.slice(1).split('/').filter((part) => part !== '');
    const total = pathArray.length;
    const key = pathArray[total - 2];
    const value = pathArray[total - 1];
    return { key, value };
  },
  setHistory(key, index) {
    const swiper = this;
    if (!swiper.history.initialized || !swiper.params.history.enabled) return;
    const slide = swiper.slides.eq(index);
    let value = History.slugify(slide.attr('data-history'));
    if (!ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].location.pathname.includes(key)) {
      value = `${key}/${value}`;
    }
    const currentState = ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].history.state;
    if (currentState && currentState.value === value) {
      return;
    }
    if (swiper.params.history.replaceState) {
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].history.replaceState({ value }, null, value);
    } else {
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].history.pushState({ value }, null, value);
    }
  },
  slugify(text) {
    return text.toString()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  },
  scrollToSlide(speed, value, runCallbacks) {
    const swiper = this;
    if (value) {
      for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
        const slide = swiper.slides.eq(i);
        const slideHistory = History.slugify(slide.attr('data-history'));
        if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
          const index = slide.index();
          swiper.slideTo(index, speed, runCallbacks);
        }
      }
    } else {
      swiper.slideTo(0, speed, runCallbacks);
    }
  },
};

var History$1 = {
  name: 'history',
  params: {
    history: {
      enabled: false,
      replaceState: false,
      key: 'slides',
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      history: {
        init: History.init.bind(swiper),
        setHistory: History.setHistory.bind(swiper),
        setHistoryPopState: History.setHistoryPopState.bind(swiper),
        scrollToSlide: History.scrollToSlide.bind(swiper),
        destroy: History.destroy.bind(swiper),
      },
    });
  },
  on: {
    init() {
      const swiper = this;
      if (swiper.params.history.enabled) {
        swiper.history.init();
      }
    },
    destroy() {
      const swiper = this;
      if (swiper.params.history.enabled) {
        swiper.history.destroy();
      }
    },
    transitionEnd() {
      const swiper = this;
      if (swiper.history.initialized) {
        swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
      }
    },
    slideChange() {
      const swiper = this;
      if (swiper.history.initialized && swiper.params.cssMode) {
        swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
      }
    },
  },
};

const HashNavigation = {
  onHashCange() {
    const swiper = this;
    const newHash = ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].location.hash.replace('#', '');
    const activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');
    if (newHash !== activeSlideHash) {
      const newIndex = swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-hash="${newHash}"]`).index();
      if (typeof newIndex === 'undefined') return;
      swiper.slideTo(newIndex);
    }
  },
  setHash() {
    const swiper = this;
    if (!swiper.hashNavigation.initialized || !swiper.params.hashNavigation.enabled) return;
    if (swiper.params.hashNavigation.replaceState && ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].history && ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].history.replaceState) {
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].history.replaceState(null, null, (`#${swiper.slides.eq(swiper.activeIndex).attr('data-hash')}` || ''));
    } else {
      const slide = swiper.slides.eq(swiper.activeIndex);
      const hash = slide.attr('data-hash') || slide.attr('data-history');
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].location.hash = hash || '';
    }
  },
  init() {
    const swiper = this;
    if (!swiper.params.hashNavigation.enabled || (swiper.params.history && swiper.params.history.enabled)) return;
    swiper.hashNavigation.initialized = true;
    const hash = ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].location.hash.replace('#', '');
    if (hash) {
      const speed = 0;
      for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
        const slide = swiper.slides.eq(i);
        const slideHash = slide.attr('data-hash') || slide.attr('data-history');
        if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
          const index = slide.index();
          swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
        }
      }
    }
    if (swiper.params.hashNavigation.watchState) {
      Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"]).on('hashchange', swiper.hashNavigation.onHashCange);
    }
  },
  destroy() {
    const swiper = this;
    if (swiper.params.hashNavigation.watchState) {
      Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"]).off('hashchange', swiper.hashNavigation.onHashCange);
    }
  },
};
var HashNavigation$1 = {
  name: 'hash-navigation',
  params: {
    hashNavigation: {
      enabled: false,
      replaceState: false,
      watchState: false,
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      hashNavigation: {
        initialized: false,
        init: HashNavigation.init.bind(swiper),
        destroy: HashNavigation.destroy.bind(swiper),
        setHash: HashNavigation.setHash.bind(swiper),
        onHashCange: HashNavigation.onHashCange.bind(swiper),
      },
    });
  },
  on: {
    init() {
      const swiper = this;
      if (swiper.params.hashNavigation.enabled) {
        swiper.hashNavigation.init();
      }
    },
    destroy() {
      const swiper = this;
      if (swiper.params.hashNavigation.enabled) {
        swiper.hashNavigation.destroy();
      }
    },
    transitionEnd() {
      const swiper = this;
      if (swiper.hashNavigation.initialized) {
        swiper.hashNavigation.setHash();
      }
    },
    slideChange() {
      const swiper = this;
      if (swiper.hashNavigation.initialized && swiper.params.cssMode) {
        swiper.hashNavigation.setHash();
      }
    },
  },
};

/* eslint no-underscore-dangle: "off" */

const Autoplay = {
  run() {
    const swiper = this;
    const $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
    let delay = swiper.params.autoplay.delay;
    if ($activeSlideEl.attr('data-swiper-autoplay')) {
      delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
    }
    clearTimeout(swiper.autoplay.timeout);
    swiper.autoplay.timeout = Utils.nextTick(() => {
      if (swiper.params.autoplay.reverseDirection) {
        if (swiper.params.loop) {
          swiper.loopFix();
          swiper.slidePrev(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.isBeginning) {
          swiper.slidePrev(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else {
          swiper.autoplay.stop();
        }
      } else if (swiper.params.loop) {
        swiper.loopFix();
        swiper.slideNext(swiper.params.speed, true, true);
        swiper.emit('autoplay');
      } else if (!swiper.isEnd) {
        swiper.slideNext(swiper.params.speed, true, true);
        swiper.emit('autoplay');
      } else if (!swiper.params.autoplay.stopOnLastSlide) {
        swiper.slideTo(0, swiper.params.speed, true, true);
        swiper.emit('autoplay');
      } else {
        swiper.autoplay.stop();
      }
      if (swiper.params.cssMode && swiper.autoplay.running) swiper.autoplay.run();
    }, delay);
  },
  start() {
    const swiper = this;
    if (typeof swiper.autoplay.timeout !== 'undefined') return false;
    if (swiper.autoplay.running) return false;
    swiper.autoplay.running = true;
    swiper.emit('autoplayStart');
    swiper.autoplay.run();
    return true;
  },
  stop() {
    const swiper = this;
    if (!swiper.autoplay.running) return false;
    if (typeof swiper.autoplay.timeout === 'undefined') return false;

    if (swiper.autoplay.timeout) {
      clearTimeout(swiper.autoplay.timeout);
      swiper.autoplay.timeout = undefined;
    }
    swiper.autoplay.running = false;
    swiper.emit('autoplayStop');
    return true;
  },
  pause(speed) {
    const swiper = this;
    if (!swiper.autoplay.running) return;
    if (swiper.autoplay.paused) return;
    if (swiper.autoplay.timeout) clearTimeout(swiper.autoplay.timeout);
    swiper.autoplay.paused = true;
    if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
      swiper.autoplay.paused = false;
      swiper.autoplay.run();
    } else {
      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.autoplay.onTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
    }
  },
};

var Autoplay$1 = {
  name: 'autoplay',
  params: {
    autoplay: {
      enabled: false,
      delay: 3000,
      waitForTransition: true,
      disableOnInteraction: true,
      stopOnLastSlide: false,
      reverseDirection: false,
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      autoplay: {
        running: false,
        paused: false,
        run: Autoplay.run.bind(swiper),
        start: Autoplay.start.bind(swiper),
        stop: Autoplay.stop.bind(swiper),
        pause: Autoplay.pause.bind(swiper),
        onVisibilityChange() {
          if (document.visibilityState === 'hidden' && swiper.autoplay.running) {
            swiper.autoplay.pause();
          }
          if (document.visibilityState === 'visible' && swiper.autoplay.paused) {
            swiper.autoplay.run();
            swiper.autoplay.paused = false;
          }
        },
        onTransitionEnd(e) {
          if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
          if (e.target !== this) return;
          swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.autoplay.onTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
          swiper.autoplay.paused = false;
          if (!swiper.autoplay.running) {
            swiper.autoplay.stop();
          } else {
            swiper.autoplay.run();
          }
        },
      },
    });
  },
  on: {
    init() {
      const swiper = this;
      if (swiper.params.autoplay.enabled) {
        swiper.autoplay.start();
        document.addEventListener('visibilitychange', swiper.autoplay.onVisibilityChange);
      }
    },
    beforeTransitionStart(speed, internal) {
      const swiper = this;
      if (swiper.autoplay.running) {
        if (internal || !swiper.params.autoplay.disableOnInteraction) {
          swiper.autoplay.pause(speed);
        } else {
          swiper.autoplay.stop();
        }
      }
    },
    sliderFirstMove() {
      const swiper = this;
      if (swiper.autoplay.running) {
        if (swiper.params.autoplay.disableOnInteraction) {
          swiper.autoplay.stop();
        } else {
          swiper.autoplay.pause();
        }
      }
    },
    touchEnd() {
      const swiper = this;
      if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {
        swiper.autoplay.run();
      }
    },
    destroy() {
      const swiper = this;
      if (swiper.autoplay.running) {
        swiper.autoplay.stop();
      }
      document.removeEventListener('visibilitychange', swiper.autoplay.onVisibilityChange);
    },
  },
};

const Fade = {
  setTranslate() {
    const swiper = this;
    const { slides } = swiper;
    for (let i = 0; i < slides.length; i += 1) {
      const $slideEl = swiper.slides.eq(i);
      const offset = $slideEl[0].swiperSlideOffset;
      let tx = -offset;
      if (!swiper.params.virtualTranslate) tx -= swiper.translate;
      let ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
      }
      const slideOpacity = swiper.params.fadeEffect.crossFade
        ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
        : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
      $slideEl
        .css({
          opacity: slideOpacity,
        })
        .transform(`translate3d(${tx}px, ${ty}px, 0px)`);
    }
  },
  setTransition(duration) {
    const swiper = this;
    const { slides, $wrapperEl } = swiper;
    slides.transition(duration);
    if (swiper.params.virtualTranslate && duration !== 0) {
      let eventTriggered = false;
      slides.transitionEnd(() => {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return;
        eventTriggered = true;
        swiper.animating = false;
        const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
        for (let i = 0; i < triggerEvents.length; i += 1) {
          $wrapperEl.trigger(triggerEvents[i]);
        }
      });
    }
  },
};

var EffectFade = {
  name: 'effect-fade',
  params: {
    fadeEffect: {
      crossFade: false,
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      fadeEffect: {
        setTranslate: Fade.setTranslate.bind(swiper),
        setTransition: Fade.setTransition.bind(swiper),
      },
    });
  },
  on: {
    beforeInit() {
      const swiper = this;
      if (swiper.params.effect !== 'fade') return;
      swiper.classNames.push(`${swiper.params.containerModifierClass}fade`);
      const overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: true,
      };
      Utils.extend(swiper.params, overwriteParams);
      Utils.extend(swiper.originalParams, overwriteParams);
    },
    setTranslate() {
      const swiper = this;
      if (swiper.params.effect !== 'fade') return;
      swiper.fadeEffect.setTranslate();
    },
    setTransition(duration) {
      const swiper = this;
      if (swiper.params.effect !== 'fade') return;
      swiper.fadeEffect.setTransition(duration);
    },
  },
};

const Cube = {
  setTranslate() {
    const swiper = this;
    const {
      $el, $wrapperEl, slides, width: swiperWidth, height: swiperHeight, rtlTranslate: rtl, size: swiperSize,
    } = swiper;
    const params = swiper.params.cubeEffect;
    const isHorizontal = swiper.isHorizontal();
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let wrapperRotate = 0;
    let $cubeShadowEl;
    if (params.shadow) {
      if (isHorizontal) {
        $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
        if ($cubeShadowEl.length === 0) {
          $cubeShadowEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])('<div class="swiper-cube-shadow"></div>');
          $wrapperEl.append($cubeShadowEl);
        }
        $cubeShadowEl.css({ height: `${swiperWidth}px` });
      } else {
        $cubeShadowEl = $el.find('.swiper-cube-shadow');
        if ($cubeShadowEl.length === 0) {
          $cubeShadowEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])('<div class="swiper-cube-shadow"></div>');
          $el.append($cubeShadowEl);
        }
      }
    }
    for (let i = 0; i < slides.length; i += 1) {
      const $slideEl = slides.eq(i);
      let slideIndex = i;
      if (isVirtual) {
        slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
      }
      let slideAngle = slideIndex * 90;
      let round = Math.floor(slideAngle / 360);
      if (rtl) {
        slideAngle = -slideAngle;
        round = Math.floor(-slideAngle / 360);
      }
      const progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
      let tx = 0;
      let ty = 0;
      let tz = 0;
      if (slideIndex % 4 === 0) {
        tx = -round * 4 * swiperSize;
        tz = 0;
      } else if ((slideIndex - 1) % 4 === 0) {
        tx = 0;
        tz = -round * 4 * swiperSize;
      } else if ((slideIndex - 2) % 4 === 0) {
        tx = swiperSize + (round * 4 * swiperSize);
        tz = swiperSize;
      } else if ((slideIndex - 3) % 4 === 0) {
        tx = -swiperSize;
        tz = (3 * swiperSize) + (swiperSize * 4 * round);
      }
      if (rtl) {
        tx = -tx;
      }

      if (!isHorizontal) {
        ty = tx;
        tx = 0;
      }

      const transform = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
      if (progress <= 1 && progress > -1) {
        wrapperRotate = (slideIndex * 90) + (progress * 90);
        if (rtl) wrapperRotate = (-slideIndex * 90) - (progress * 90);
      }
      $slideEl.transform(transform);
      if (params.slideShadows) {
        // Set shadows
        let shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        let shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
        if (shadowBefore.length === 0) {
          shadowBefore = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
          $slideEl.append(shadowBefore);
        }
        if (shadowAfter.length === 0) {
          shadowAfter = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
          $slideEl.append(shadowAfter);
        }
        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
      }
    }
    $wrapperEl.css({
      '-webkit-transform-origin': `50% 50% -${swiperSize / 2}px`,
      '-moz-transform-origin': `50% 50% -${swiperSize / 2}px`,
      '-ms-transform-origin': `50% 50% -${swiperSize / 2}px`,
      'transform-origin': `50% 50% -${swiperSize / 2}px`,
    });

    if (params.shadow) {
      if (isHorizontal) {
        $cubeShadowEl.transform(`translate3d(0px, ${(swiperWidth / 2) + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`);
      } else {
        const shadowAngle = Math.abs(wrapperRotate) - (Math.floor(Math.abs(wrapperRotate) / 90) * 90);
        const multiplier = 1.5 - (
          (Math.sin((shadowAngle * 2 * Math.PI) / 360) / 2)
          + (Math.cos((shadowAngle * 2 * Math.PI) / 360) / 2)
        );
        const scale1 = params.shadowScale;
        const scale2 = params.shadowScale / multiplier;
        const offset = params.shadowOffset;
        $cubeShadowEl.transform(`scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${(swiperHeight / 2) + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`);
      }
    }
    const zFactor = (Browser.isSafari || Browser.isUiWebView) ? (-swiperSize / 2) : 0;
    $wrapperEl
      .transform(`translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`);
  },
  setTransition(duration) {
    const swiper = this;
    const { $el, slides } = swiper;
    slides
      .transition(duration)
      .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
      .transition(duration);
    if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
      $el.find('.swiper-cube-shadow').transition(duration);
    }
  },
};

var EffectCube = {
  name: 'effect-cube',
  params: {
    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      cubeEffect: {
        setTranslate: Cube.setTranslate.bind(swiper),
        setTransition: Cube.setTransition.bind(swiper),
      },
    });
  },
  on: {
    beforeInit() {
      const swiper = this;
      if (swiper.params.effect !== 'cube') return;
      swiper.classNames.push(`${swiper.params.containerModifierClass}cube`);
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
      const overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        resistanceRatio: 0,
        spaceBetween: 0,
        centeredSlides: false,
        virtualTranslate: true,
      };
      Utils.extend(swiper.params, overwriteParams);
      Utils.extend(swiper.originalParams, overwriteParams);
    },
    setTranslate() {
      const swiper = this;
      if (swiper.params.effect !== 'cube') return;
      swiper.cubeEffect.setTranslate();
    },
    setTransition(duration) {
      const swiper = this;
      if (swiper.params.effect !== 'cube') return;
      swiper.cubeEffect.setTransition(duration);
    },
  },
};

const Flip = {
  setTranslate() {
    const swiper = this;
    const { slides, rtlTranslate: rtl } = swiper;
    for (let i = 0; i < slides.length; i += 1) {
      const $slideEl = slides.eq(i);
      let progress = $slideEl[0].progress;
      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
      }
      const offset = $slideEl[0].swiperSlideOffset;
      const rotate = -180 * progress;
      let rotateY = rotate;
      let rotateX = 0;
      let tx = -offset;
      let ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
        rotateX = -rotateY;
        rotateY = 0;
      } else if (rtl) {
        rotateY = -rotateY;
      }

      $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

      if (swiper.params.flipEffect.slideShadows) {
        // Set shadows
        let shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        let shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
        if (shadowBefore.length === 0) {
          shadowBefore = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(`<div class="swiper-slide-shadow-${swiper.isHorizontal() ? 'left' : 'top'}"></div>`);
          $slideEl.append(shadowBefore);
        }
        if (shadowAfter.length === 0) {
          shadowAfter = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(`<div class="swiper-slide-shadow-${swiper.isHorizontal() ? 'right' : 'bottom'}"></div>`);
          $slideEl.append(shadowAfter);
        }
        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
      }
      $slideEl
        .transform(`translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
    }
  },
  setTransition(duration) {
    const swiper = this;
    const { slides, activeIndex, $wrapperEl } = swiper;
    slides
      .transition(duration)
      .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
      .transition(duration);
    if (swiper.params.virtualTranslate && duration !== 0) {
      let eventTriggered = false;
      // eslint-disable-next-line
      slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return;
        // if (!$(this).hasClass(swiper.params.slideActiveClass)) return;
        eventTriggered = true;
        swiper.animating = false;
        const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
        for (let i = 0; i < triggerEvents.length; i += 1) {
          $wrapperEl.trigger(triggerEvents[i]);
        }
      });
    }
  },
};

var EffectFlip = {
  name: 'effect-flip',
  params: {
    flipEffect: {
      slideShadows: true,
      limitRotation: true,
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      flipEffect: {
        setTranslate: Flip.setTranslate.bind(swiper),
        setTransition: Flip.setTransition.bind(swiper),
      },
    });
  },
  on: {
    beforeInit() {
      const swiper = this;
      if (swiper.params.effect !== 'flip') return;
      swiper.classNames.push(`${swiper.params.containerModifierClass}flip`);
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
      const overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: true,
      };
      Utils.extend(swiper.params, overwriteParams);
      Utils.extend(swiper.originalParams, overwriteParams);
    },
    setTranslate() {
      const swiper = this;
      if (swiper.params.effect !== 'flip') return;
      swiper.flipEffect.setTranslate();
    },
    setTransition(duration) {
      const swiper = this;
      if (swiper.params.effect !== 'flip') return;
      swiper.flipEffect.setTransition(duration);
    },
  },
};

const Coverflow = {
  setTranslate() {
    const swiper = this;
    const {
      width: swiperWidth, height: swiperHeight, slides, $wrapperEl, slidesSizesGrid,
    } = swiper;
    const params = swiper.params.coverflowEffect;
    const isHorizontal = swiper.isHorizontal();
    const transform = swiper.translate;
    const center = isHorizontal ? -transform + (swiperWidth / 2) : -transform + (swiperHeight / 2);
    const rotate = isHorizontal ? params.rotate : -params.rotate;
    const translate = params.depth;
    // Each slide offset from center
    for (let i = 0, length = slides.length; i < length; i += 1) {
      const $slideEl = slides.eq(i);
      const slideSize = slidesSizesGrid[i];
      const slideOffset = $slideEl[0].swiperSlideOffset;
      const offsetMultiplier = ((center - slideOffset - (slideSize / 2)) / slideSize) * params.modifier;

      let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
      let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
      // var rotateZ = 0
      let translateZ = -translate * Math.abs(offsetMultiplier);

      let stretch = params.stretch;
      // Allow percentage to make a relative stretch for responsive sliders
      if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
        stretch = ((parseFloat(params.stretch) / 100) * slideSize);
      }
      let translateY = isHorizontal ? 0 : stretch * (offsetMultiplier);
      let translateX = isHorizontal ? stretch * (offsetMultiplier) : 0;

      // Fix for ultra small values
      if (Math.abs(translateX) < 0.001) translateX = 0;
      if (Math.abs(translateY) < 0.001) translateY = 0;
      if (Math.abs(translateZ) < 0.001) translateZ = 0;
      if (Math.abs(rotateY) < 0.001) rotateY = 0;
      if (Math.abs(rotateX) < 0.001) rotateX = 0;

      const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

      $slideEl.transform(slideTransform);
      $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
      if (params.slideShadows) {
        // Set shadows
        let $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        let $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
        if ($shadowBeforeEl.length === 0) {
          $shadowBeforeEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
          $slideEl.append($shadowBeforeEl);
        }
        if ($shadowAfterEl.length === 0) {
          $shadowAfterEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
          $slideEl.append($shadowAfterEl);
        }
        if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
        if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0;
      }
    }

    // Set correct perspective for IE10
    if (Support.pointerEvents || Support.prefixedPointerEvents) {
      const ws = $wrapperEl[0].style;
      ws.perspectiveOrigin = `${center}px 50%`;
    }
  },
  setTransition(duration) {
    const swiper = this;
    swiper.slides
      .transition(duration)
      .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
      .transition(duration);
  },
};

var EffectCoverflow = {
  name: 'effect-coverflow',
  params: {
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      coverflowEffect: {
        setTranslate: Coverflow.setTranslate.bind(swiper),
        setTransition: Coverflow.setTransition.bind(swiper),
      },
    });
  },
  on: {
    beforeInit() {
      const swiper = this;
      if (swiper.params.effect !== 'coverflow') return;

      swiper.classNames.push(`${swiper.params.containerModifierClass}coverflow`);
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);

      swiper.params.watchSlidesProgress = true;
      swiper.originalParams.watchSlidesProgress = true;
    },
    setTranslate() {
      const swiper = this;
      if (swiper.params.effect !== 'coverflow') return;
      swiper.coverflowEffect.setTranslate();
    },
    setTransition(duration) {
      const swiper = this;
      if (swiper.params.effect !== 'coverflow') return;
      swiper.coverflowEffect.setTransition(duration);
    },
  },
};

const Thumbs = {
  init() {
    const swiper = this;
    const { thumbs: thumbsParams } = swiper.params;
    const SwiperClass = swiper.constructor;
    if (thumbsParams.swiper instanceof SwiperClass) {
      swiper.thumbs.swiper = thumbsParams.swiper;
      Utils.extend(swiper.thumbs.swiper.originalParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false,
      });
      Utils.extend(swiper.thumbs.swiper.params, {
        watchSlidesProgress: true,
        slideToClickedSlide: false,
      });
    } else if (Utils.isObject(thumbsParams.swiper)) {
      swiper.thumbs.swiper = new SwiperClass(Utils.extend({}, thumbsParams.swiper, {
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        slideToClickedSlide: false,
      }));
      swiper.thumbs.swiperCreated = true;
    }
    swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
    swiper.thumbs.swiper.on('tap', swiper.thumbs.onThumbClick);
  },
  onThumbClick() {
    const swiper = this;
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper) return;
    const clickedIndex = thumbsSwiper.clickedIndex;
    const clickedSlide = thumbsSwiper.clickedSlide;
    if (clickedSlide && Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;
    if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
    let slideToIndex;
    if (thumbsSwiper.params.loop) {
      slideToIndex = parseInt(Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
    } else {
      slideToIndex = clickedIndex;
    }
    if (swiper.params.loop) {
      let currentIndex = swiper.activeIndex;
      if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
        swiper.loopFix();
        // eslint-disable-next-line
        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
        currentIndex = swiper.activeIndex;
      }
      const prevIndex = swiper.slides.eq(currentIndex).prevAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
      const nextIndex = swiper.slides.eq(currentIndex).nextAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
      if (typeof prevIndex === 'undefined') slideToIndex = nextIndex;
      else if (typeof nextIndex === 'undefined') slideToIndex = prevIndex;
      else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex;
      else slideToIndex = prevIndex;
    }
    swiper.slideTo(slideToIndex);
  },
  update(initial) {
    const swiper = this;
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper) return;

    const slidesPerView = thumbsSwiper.params.slidesPerView === 'auto'
      ? thumbsSwiper.slidesPerViewDynamic()
      : thumbsSwiper.params.slidesPerView;

    const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
    const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
    if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
      let currentThumbsIndex = thumbsSwiper.activeIndex;
      let newThumbsIndex;
      let direction;
      if (thumbsSwiper.params.loop) {
        if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
          thumbsSwiper.loopFix();
          // eslint-disable-next-line
          thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
          currentThumbsIndex = thumbsSwiper.activeIndex;
        }
        // Find actual thumbs index to slide to
        const prevThumbsIndex = thumbsSwiper.slides
          .eq(currentThumbsIndex)
          .prevAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0)
          .index();
        const nextThumbsIndex = thumbsSwiper.slides
          .eq(currentThumbsIndex)
          .nextAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0)
          .index();
        if (typeof prevThumbsIndex === 'undefined') newThumbsIndex = nextThumbsIndex;
        else if (typeof nextThumbsIndex === 'undefined') newThumbsIndex = prevThumbsIndex;
        else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) newThumbsIndex = currentThumbsIndex;
        else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) newThumbsIndex = nextThumbsIndex;
        else newThumbsIndex = prevThumbsIndex;
        direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
      } else {
        newThumbsIndex = swiper.realIndex;
        direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
      }
      if (useOffset) {
        newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
      }

      if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
        if (thumbsSwiper.params.centeredSlides) {
          if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
          } else {
            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
          }
        } else if (newThumbsIndex > currentThumbsIndex) {
          newThumbsIndex = newThumbsIndex - slidesPerView + 1;
        }
        thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
      }
    }

    // Activate thumbs
    let thumbsToActivate = 1;
    const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;

    if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
      thumbsToActivate = swiper.params.slidesPerView;
    }

    if (!swiper.params.thumbs.multipleActiveThumbs) {
      thumbsToActivate = 1;
    }

    thumbsToActivate = Math.floor(thumbsToActivate);

    thumbsSwiper.slides.removeClass(thumbActiveClass);
    if (thumbsSwiper.params.loop || (thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled)) {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        thumbsSwiper.$wrapperEl.children(`[data-swiper-slide-index="${swiper.realIndex + i}"]`).addClass(thumbActiveClass);
      }
    } else {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        thumbsSwiper.slides.eq(swiper.realIndex + i).addClass(thumbActiveClass);
      }
    }
  },
};
var Thumbs$1 = {
  name: 'thumbs',
  params: {
    thumbs: {
      swiper: null,
      multipleActiveThumbs: true,
      autoScrollOffset: 0,
      slideThumbActiveClass: 'swiper-slide-thumb-active',
      thumbsContainerClass: 'swiper-container-thumbs',
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      thumbs: {
        swiper: null,
        init: Thumbs.init.bind(swiper),
        update: Thumbs.update.bind(swiper),
        onThumbClick: Thumbs.onThumbClick.bind(swiper),
      },
    });
  },
  on: {
    beforeInit() {
      const swiper = this;
      const { thumbs } = swiper.params;
      if (!thumbs || !thumbs.swiper) return;
      swiper.thumbs.init();
      swiper.thumbs.update(true);
    },
    slideChange() {
      const swiper = this;
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    update() {
      const swiper = this;
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    resize() {
      const swiper = this;
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    observerUpdate() {
      const swiper = this;
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    setTransition(duration) {
      const swiper = this;
      const thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) return;
      thumbsSwiper.setTransition(duration);
    },
    beforeDestroy() {
      const swiper = this;
      const thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) return;
      if (swiper.thumbs.swiperCreated && thumbsSwiper) {
        thumbsSwiper.destroy();
      }
    },
  },
};

// Swiper Class

const components = [
  Device$1,
  Support$1,
  Browser$1,
  Resize,
  Observer$1,
  Virtual$1,
  Keyboard$1,
  Mousewheel$1,
  Navigation$1,
  Pagination$1,
  Scrollbar$1,
  Parallax$1,
  Zoom$1,
  Lazy$1,
  Controller$1,
  A11y,
  History$1,
  HashNavigation$1,
  Autoplay$1,
  EffectFade,
  EffectCube,
  EffectFlip,
  EffectCoverflow,
  Thumbs$1
];

if (typeof Swiper.use === 'undefined') {
  Swiper.use = Swiper.Class.use;
  Swiper.installModule = Swiper.Class.installModule;
}

Swiper.use(components);

/* harmony default export */ __webpack_exports__["default"] = (Swiper);
//# sourceMappingURL=swiper.esm.bundle.js.map


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./source/index.html":
/*!***************************!*\
  !*** ./source/index.html ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<!DOCTYPE html>\n<html lang=\"ru\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"description\" content=\"\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>Mysterious Vacation</title>\n  <link rel=\"stylesheet\" href=\"css/style.min.css\">\n</head>\n<body>\n\n  <header class=\"page-header js-header\">\n    <div class=\"page-header__wrapper\">\n      <a href=\"#\" class=\"page-header__logo\" aria-label=\"Перейти на страницу FJORD.Inc\">\n        <svg width=\"100\" height=\"15\" viewBox=\"0 0 100 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M0.26 1.4V14H2.276V8.906H7.334V6.44H2.276V3.848H9.872V1.4H0.26ZM12.733 14.36C15.127 14.36 16.243 12.65 16.243 9.5V1.4H14.263V8.96C14.263 11.21 13.723 11.876 12.733 11.876C11.833 11.876 11.473 11.3 11.347 10.58L9.36702 10.94C9.63702 13.046 10.663 14.36 12.733 14.36ZM18.3918 7.7C18.3918 11.372 22.3878 14.36 27.3198 14.36C32.2518 14.36 36.2478 11.372 36.2478 7.7C36.2478 4.028 32.2518 1.04 27.3198 1.04C22.3878 1.04 18.3918 4.028 18.3918 7.7ZM20.6058 7.7C20.6058 5.378 23.6118 3.524 27.3198 3.524C30.9918 3.524 33.9798 5.378 33.9798 7.7C33.9798 10.004 30.9918 11.858 27.3198 11.858C23.6118 11.858 20.6058 10.004 20.6058 7.7ZM40.403 14V8.906H40.799L49.079 14.702V12.38L44.039 8.906H44.201C47.999 8.906 49.277 7.304 49.277 5.162C49.277 3.092 47.999 1.4 44.201 1.4H38.387V14H40.403ZM43.535 3.722C45.785 3.722 47.045 4.136 47.045 5.432C47.045 6.764 45.785 7.034 43.535 7.034H40.403V3.722H43.535ZM51.6936 1.382V14H57.8676C62.7456 14 66.7236 11.534 66.7236 7.7C66.7236 3.848 62.7456 1.382 57.8676 1.382H51.6936ZM53.7096 11.624V3.722H57.5436C61.5396 3.722 64.4916 5.018 64.4916 7.7C64.4916 10.238 61.5396 11.624 57.5436 11.624H53.7096ZM73.1832 14.018H74.9832V5H73.1832V14.018ZM72.9132 1.976C72.9132 2.57 73.3992 3.092 74.0832 3.092C74.7492 3.092 75.2352 2.57 75.2352 1.976C75.2352 1.382 74.7672 0.805999 74.0832 0.805999C73.3812 0.805999 72.9132 1.382 72.9132 1.976ZM76.7867 14H78.5687V9.104C78.7487 8.006 79.5947 6.962 81.0887 6.962C82.1147 6.962 83.2667 7.448 83.2667 9.554V14H85.0487V9.014C85.0487 6.152 83.2307 4.73 81.3587 4.73C79.9187 4.73 79.0727 5.558 78.5687 6.854V5H76.7867V14ZM90.9898 14.27C93.5098 14.27 95.3818 12.506 95.7238 10.328H94.0498C93.7258 11.3 92.6998 12.02 90.9898 12.02C88.8478 12.02 87.7678 10.922 87.7678 9.59C87.7678 8.24 88.8478 6.962 90.9898 6.962C92.7538 6.962 93.7978 7.844 94.0858 8.924H95.7418C95.4358 6.71 93.6178 4.73 90.9898 4.73C88.0918 4.73 86.1298 7.124 86.1298 9.59C86.1298 12.074 88.1278 14.27 90.9898 14.27ZM97.0693 12.938C97.0693 13.658 97.5553 14.144 98.2753 14.144C98.9953 14.144 99.4813 13.658 99.4813 12.938C99.4813 12.2 98.9953 11.714 98.2753 11.714C97.5553 11.714 97.0693 12.2 97.0693 12.938Z\" fill=\"currentColor\"></path>\n        </svg>\n      </a>\n      <button class=\"page-header__toggler js-menu-toggler\" type=\"button\" aria-label=\"Управление мобильным меню\"><span>Меню</span></button>\n      <nav class=\"page-header__nav\">\n        <div class=\"page-header__menu js-menu\" id=\"menu\">\n          <ul>\n            <li>\n              <a class=\"js-menu-link active\" href=\"#top\" data-href=\"top\">главная</a>\n            </li>\n            <li>\n              <a class=\"js-menu-link\" href=\"#story\" data-href=\"story\">история</a>\n            </li>\n            <li>\n              <a class=\"js-menu-link\" href=\"#prizes\" data-href=\"prizes\">призы</a>\n            </li>\n            <li>\n              <a class=\"js-menu-link\" href=\"#rules\" data-href=\"rules\">правила</a>\n            </li>\n            <li>\n              <a class=\"js-menu-link\" href=\"#game\" data-href=\"game\">игра</a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"page-header__social\">\n          <div class=\"social-block js-social-block\">\n            <ul class=\"social-block__list\">\n              <li>\n                <a class=\"social-block__link social-block__link--fb\" href=\"#\" aria-label=\"Мы на Facebook\">\n                  <svg width=\"8\" height=\"17\" viewBox=\"0 0 8 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M4.24646 16.9899H1.09275L1.05793 8.49828H0V5.30707H1.05793V3.81124C1.05793 1.42084 2.57654 0 5.21735 0H7.41758V3.18585H5.30841C4.28262 3.18585 4.2478 3.48582 4.2478 4.24914V5.30707H7.42964L7.16716 8.49828H4.2478V16.9899H4.24646Z\" fill=\"currentColor\"></path>\n                  </svg>\n                </a>\n              </li>\n              <li>\n                <a class=\"social-block__link social-block__link--insta\" href=\"#\" aria-label=\"Мы в Instagram\">\n                  <svg width=\"15\" height=\"15\" viewBox=\"0 0 15 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M11.0197 0H4.19806C2.14246 0 0.471191 1.66993 0.471191 3.72285V10.5499C0.471191 12.6082 2.14112 14.2727 4.19806 14.2727H11.0197C13.0753 14.2727 14.7466 12.6082 14.7466 10.5499V3.72285C14.7466 1.67127 13.0753 0 11.0197 0ZM11.0197 12.4849H4.19806C3.13076 12.4849 2.26432 11.6158 2.26432 10.5512V3.72419C2.26432 2.65956 3.13076 1.79715 4.19806 1.79715H11.0197C12.087 1.79715 12.9535 2.6609 12.9535 3.72419V10.5512C12.9535 11.6145 12.087 12.4849 11.0197 12.4849Z\" fill=\"currentColor\"></path>\n                    <path d=\"M7.60887 3.11084C5.38989 3.11084 3.58203 4.9187 3.58203 7.14036C3.58203 9.35532 5.38989 11.1645 7.60887 11.1645C9.83053 11.1645 11.6357 9.35666 11.6357 7.14036C11.6357 4.9187 9.83053 3.11084 7.60887 3.11084ZM7.60887 9.36871C6.37551 9.36871 5.37784 8.37372 5.37784 7.14036C5.37784 5.90699 6.37551 4.90665 7.60887 4.90665C8.83822 4.90665 9.84259 5.90833 9.84259 7.14036C9.84392 8.37238 8.83822 9.36871 7.60887 9.36871Z\" fill=\"currentColor\"></path>\n                    <path d=\"M11.3573 2.35962C10.8256 2.35962 10.3931 2.79752 10.3931 3.32381C10.3931 3.85546 10.8256 4.29336 11.3573 4.29336C11.8862 4.29336 12.3215 3.85546 12.3215 3.32381C12.3215 2.79752 11.8862 2.35962 11.3573 2.35962Z\" fill=\"currentColor\"></path>\n                  </svg>\n                </a>\n              </li>\n              <li>\n                <a class=\"social-block__link social-block__link--vk\" href=\"#\" aria-label=\"Мы ВКонтакте\">\n                  <svg width=\"17\" height=\"10\" viewBox=\"0 0 17 10\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M14.1234 4.9002C14.1234 4.9002 16.3623 1.72708 16.5866 0.680242C16.6595 0.312285 16.4947 0.103188 16.1069 0.103188C16.1069 0.103188 14.8193 0.103188 14.168 0.103188C13.7235 0.103188 13.5587 0.293278 13.4235 0.579768C13.4235 0.579768 12.3724 2.82553 11.0969 4.24712C10.6861 4.70333 10.4781 4.84318 10.2511 4.84318C10.0646 4.84318 9.98625 4.6911 9.98625 4.27834V0.649016C9.98625 0.147997 9.92545 0.00135496 9.5066 0.00135496H6.39628C6.15578 0.00135496 6.0085 0.134417 6.0085 0.324506C6.0085 0.801084 6.73406 0.908351 6.73406 2.20231V4.87305C6.73406 5.40529 6.70569 5.61575 6.45303 5.61575C5.78016 5.61575 4.19528 3.30618 3.30623 0.678887C3.12923 0.145282 2.93737 0 2.43475 0H0.486409C0.205373 0 0 0.190085 0 0.476576C0 0.991172 0.60666 3.40801 2.99277 6.64358C4.59927 8.8201 6.70569 10 8.60269 10C9.76196 10 10.0416 9.80312 10.0416 9.31432V7.63883C10.0416 7.22607 10.2065 7.04956 10.4429 7.04956C10.7078 7.04956 11.1847 7.13238 12.2805 8.22268C13.5843 9.47862 13.6762 10 14.3896 10H16.5676C16.7919 10 17 9.89273 17 9.52342C17 9.02919 16.3623 8.15343 15.384 7.10659C14.9801 6.56755 14.3302 5.98914 14.1248 5.72301C13.8275 5.40801 13.9154 5.23014 14.1234 4.9002Z\" fill=\"currentColor\"></path>\n                  </svg>\n                </a>\n              </li>\n            </ul>\n            <button class=\"social-block__toggler\" aria-label=\"Управлять блоком с социальными кнопками\">\n              <svg width=\"26\" height=\"22\" viewBox=\"0 0 27 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M19.6721 7.43664C21.6273 7.43664 23.213 5.85095 23.213 3.89566C23.213 1.94037 21.6273 0.354675 19.6721 0.354675C17.7168 0.354675 16.1311 1.94037 16.1311 3.89566C16.1311 4.19968 16.1728 4.49178 16.2458 4.77345L7.21751 8.95527C6.57519 8.05214 5.52303 7.46049 4.33078 7.46049C2.37549 7.46049 0.789795 9.04618 0.789795 11.0015C0.789795 12.9568 2.37549 14.5425 4.33078 14.5425C5.52303 14.5425 6.57668 13.9508 7.21751 13.0477L16.2458 17.2295C16.1743 17.5112 16.1311 17.8033 16.1311 18.1073C16.1311 20.0626 17.7168 21.6483 19.6721 21.6483C21.6273 21.6483 23.213 20.0626 23.213 18.1073C23.213 16.152 21.6273 14.5663 19.6721 14.5663C18.4798 14.5663 17.4262 15.158 16.7853 16.0611L7.75701 11.8793C7.82854 11.5976 7.87176 11.3055 7.87176 11.0015C7.87176 10.6974 7.83003 10.4053 7.75701 10.1237L16.7853 5.94186C17.4262 6.84499 18.4783 7.43664 19.6721 7.43664Z\" fill=\"currentColor\"></path>\n              </svg>\n            </button>\n          </div>\n        </div>\n      </nav>\n    </div>\n  </header>\n\n  <main class=\"page-content\">\n\n    <section class=\"animation-screen\"></section>\n\n    <section class=\"screen screen--hidden screen--intro js-scrollspy\" id=\"top\">\n      <div class=\"screen__wrapper\">\n        <div class=\"intro\">\n          <h1 class=\"intro__title\">Таинственный отпуск</h1>\n          <div class=\"intro__content\">\n            <div class=\"intro__info\">\n              <p class=\"intro__label\">Даты проведения конкурса:</p>\n              <p class=\"intro__date\">01 — 31.05 / 2020</p>\n            </div>\n            <div class=\"intro__message\">\n              <p>\n                Отгадай первым место назначения и&nbsp;отправься в&nbsp;путешествие в&nbsp;любое время или получи один из многочисленных призов\n                <svg width=\"16\" height=\"16\" viewBox=\"0 0 10 10\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                  <path d=\"M0 6.35337L3.90271 4.99012L0 3.64663L1.34615 1.32374L4.44287 4.01073L3.67364 0H6.34615L5.57692 4.01073L8.65385 1.32374L10 3.64663L6.13405 4.99012L10 6.35337L8.65385 8.65651L5.57692 5.98927L6.34615 10H3.67364L4.44287 5.96952L1.34615 8.65651L0 6.35337Z\" fill=\"currentColor\"></path>\n                </svg>\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"screen__footer js-footer\">\n        <button class=\"screen__footer-enlarge js-footer-toggler\" type=\"button\" aria-label=\"Показать сообщение\">\n          <svg width=\"10\" height=\"10\" viewBox=\"0 0 10 10\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M0 6.35337L3.90271 4.99012L0 3.64663L1.34615 1.32374L4.44287 4.01073L3.67364 0H6.34615L5.57692 4.01073L8.65385 1.32374L10 3.64663L6.13405 4.99012L10 6.35337L8.65385 8.65651L5.57692 5.98927L6.34615 10H3.67364L4.44287 5.96952L1.34615 8.65651L0 6.35337Z\" fill=\"currentColor\"></path>\n          </svg>\n        </button>\n        <button class=\"screen__footer-collapse js-footer-toggler\" type=\"button\" aria-label=\"Скрыть сообщение\">\n          <svg width=\"13\" height=\"13\" viewBox=\"0 0 13 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <line x1=\"12.3536\" y1=\"0.353553\" x2=\"0.738349\" y2=\"11.9688\" stroke=\"currentColor\"></line>\n            <line x1=\"0.738319\" y1=\"0.539925\" x2=\"12.3535\" y2=\"12.1551\" stroke=\"currentColor\"></line>\n          </svg>\n        </button>\n        <div class=\"screen__footer-wrapper\">\n          <div class=\"screen__footer-announce\">\n            <p class=\"screen__footer-label\">Даты проведения конкурса:</p>\n            <p class=\"screen__footer-date\">01 — 31.05 / 2020</p>\n          </div>\n          <div class=\"screen__footer-note\">\n            <p>\n              <svg width=\"10\" height=\"10\" viewBox=\"0 0 10 10\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M0 6.35337L3.90271 4.99012L0 3.64663L1.34615 1.32374L4.44287 4.01073L3.67364 0H6.34615L5.57692 4.01073L8.65385 1.32374L10 3.64663L6.13405 4.99012L10 6.35337L8.65385 8.65651L5.57692 5.98927L6.34615 10H3.67364L4.44287 5.96952L1.34615 8.65651L0 6.35337Z\" fill=\"currentColor\"></path>\n              </svg>\n              <span>Победители могут выбрать любые 14 дней подряд в&nbsp;течение двух лет с&nbsp;даты окончания конкурса. Победители могут воспользоваться путевкой сами или подарить другому лицу.</span>\n            </p>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"screen screen--hidden screen--story js-scrollspy\" id=\"story\">\n\n      <div class=\"slider swiper-container js-slider\">\n\n        <div class=\"swiper-wrapper\">\n\n          <div class=\"slider__item swiper-slide\">\n            <h2 class=\"slider__item-title\">История</h2>\n            <p class=\"slider__item-text\">Джеймс Таргет был основателем компании &laquo;Fjord Inc.&raquo;. С&nbsp;1965 года &laquo;Fjord Inc.&raquo; прославилась надёжными и&nbsp;удобными чемоданами и&nbsp;аксессуарами для туристов.</p>\n          </div>\n\n          <div class=\"slider__item swiper-slide\">\n            <p class=\"slider__item-text\">Когда Джеймсу было 7&nbsp;лет, в&nbsp;их&nbsp;доме гостил дядюшка и&nbsp;развлекал детей рассказами о&nbsp;своей поездке в&nbsp;место, показавшееся малышу Таргету невероятным. Тогда Джеймс решил, что однажды посетит его, но&nbsp;не&nbsp;будет рассказывать о&nbsp;мечте, пока не&nbsp;осуществит.</p>\n          </div>\n\n          <div class=\"slider__item swiper-slide\">\n            <p class=\"slider__item-text\">Джеймс Таргет стал увлеченным путешественником. Он&nbsp;посетил 5&nbsp;континентов, 126&nbsp;стран.</p>\n          </div>\n\n          <div class=\"slider__item swiper-slide\">\n            <p class=\"slider__item-text\">Он&nbsp;сплавлялся по&nbsp;Амазонке и&nbsp;погружался в&nbsp;пещеры Франции, медитировал в&nbsp;горах Тибета и&nbsp;пожимал руку вождя племени Акугауа.</p>\n          </div>\n\n          <div class=\"slider__item swiper-slide\">\n            <p class=\"slider__item-text\">Из&nbsp;своих поездок Джеймс Таргет привозил идеи, как сделать свои чемоданы &laquo;Fjord Inc.&raquo; удобными и&nbsp;приспособленными к&nbsp;разным дорожным условиям.</p>\n          </div>\n\n          <div class=\"slider__item swiper-slide\">\n            <p class=\"slider__item-text\">Всё это время Джеймс не&nbsp;оставлял идею поездки своей мечты. Однако, как только он&nbsp;брался за&nbsp;планирование, возникали препятствия, не&nbsp;позволяющие отправиться туда.</p>\n          </div>\n\n          <div class=\"slider__item swiper-slide\">\n            <p class=\"slider__item-text\">В&nbsp;возрасте 67&nbsp;лет Джеймс Таргет попал под лавину и&nbsp;погиб. В&nbsp;своём завещании он&nbsp;поручил отправить в&nbsp;заветное путешествие трёх смельчаков, единых с&nbsp;ним духом.</p>\n          </div>\n\n          <div class=\"slider__item swiper-slide\">\n            <p class=\"slider__item-text\">Тех, кто сможет узнать таинственное место, задавая вопросы специально обученному ИИ&nbsp;&laquo;Соне&raquo;, ждет фантастическое путешествие.</p>\n          </div>\n        </div>\n        <div class=\"slider__controls\">\n          <button class=\"slider__control slider__control--prev js-control-prev\" type=\"button\" aria-label=\"Показать предыдущую историю\">\n            <svg width=\"12\" height=\"22\" viewBox=\"0 0 12 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n              <path d=\"M11 1L1 11L11 21\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linejoin=\"round\"></path>\n            </svg>\n          </button>\n          <button class=\"slider__control slider__control--next js-control-next\" type=\"button\" aria-label=\"Показать следующую историю\">\n            <svg width=\"12\" height=\"22\" viewBox=\"0 0 12 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n              <path d=\"M1 1L11 11L1 21\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linejoin=\"round\"></path>\n            </svg>\n          </button>\n        </div>\n        <div class=\"slider__pagination swiper-pagination\"></div>\n      </div>\n    </section>\n\n    <section class=\"screen screen--hidden screen--prizes js-scrollspy\" id=\"prizes\">\n      <div class=\"screen__wrapper\">\n        <div class=\"prizes\">\n          <h2 class=\"prizes__title\">ПРизы</h2>\n          <div class=\"prizes__lead\">\n            <p>Найди ответ и&nbsp;получи один из&nbsp;призов:</p>\n          </div>\n          <ul class=\"prizes__list\">\n            <li class=\"prizes__item prizes__item--journeys\">\n              <div class=\"prizes__icon\">\n                <svg viewBox=\"0 0 350 330\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"primary-award\">\n                  <defs>\n                    <clipPath id=\"window\">\n                      <rect x=\"240\" y=\"152\" width=\"52.16\" height=\"73.01\" rx=\"18\"></rect>\n                    </clipPath>\n                  </defs>\n                  <g id=\"primary-award-from\">\n                    <g id=\"body\">\n                      <path id=\"cabin\" d=\"M175.44 249.28H223.8C226.863 249.278 229.831 248.216 232.201 246.275C234.57 244.334 236.195 241.633 236.8 238.63L240.54 220.31H172.36V246.2C172.363 247.016 172.688 247.798 173.265 248.375C173.842 248.952 174.624 249.277 175.44 249.28V249.28Z\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n                      <path id=\"window-front\" d=\"M235.79 241.69H226.57C224.371 241.682 222.265 240.803 220.713 239.245C219.161 237.688 218.29 235.579 218.29 233.38V220.31\" stroke=\"white\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"></path>\n                      <rect id=\"window-2\" x=\"198.77\" y=\"231.88\" width=\"8.91\" height=\"9.82\" rx=\"3\" stroke=\"white\" stroke-width=\"2\"></rect>\n                      <rect id=\"window-1\" x=\"180.16\" y=\"231.88\" width=\"8.91\" height=\"9.82\" rx=\"3\" stroke=\"white\" stroke-width=\"2\"></rect>\n                    </g>\n                    <g id=\"tail-back\">\n                      <g id=\"tail-back-top\">\n                        <path id=\"Vector\" d=\"M123.23 173.34H132.39C132.823 173.34 133.252 173.425 133.651 173.591C134.051 173.757 134.414 174.001 134.72 174.307C135.026 174.614 135.268 174.978 135.432 175.378C135.597 175.778 135.681 176.207 135.68 176.64V182.35C135.681 182.783 135.597 183.212 135.432 183.612C135.268 184.012 135.026 184.376 134.72 184.683C134.414 184.989 134.051 185.233 133.651 185.399C133.252 185.565 132.823 185.65 132.39 185.65H115.57C115.22 185.65 114.884 185.511 114.637 185.263C114.389 185.016 114.25 184.68 114.25 184.33V182.33C114.25 179.943 115.198 177.654 116.886 175.966C118.574 174.278 120.863 173.33 123.25 173.33\" fill=\"#068E4D\"></path>\n                        <path id=\"Vector_2\" d=\"M123.23 173.34H132.39C132.823 173.34 133.252 173.425 133.651 173.591C134.051 173.757 134.414 174.001 134.72 174.307C135.026 174.614 135.268 174.978 135.432 175.378C135.597 175.778 135.681 176.207 135.68 176.64V182.35C135.681 182.783 135.597 183.212 135.432 183.612C135.268 184.012 135.026 184.376 134.72 184.683C134.414 184.989 134.051 185.233 133.651 185.399C133.252 185.565 132.823 185.65 132.39 185.65H115.57C115.22 185.65 114.884 185.511 114.637 185.263C114.389 185.016 114.25 184.68 114.25 184.33V182.33C114.253 179.948 115.199 177.665 116.882 175.98C118.566 174.294 120.848 173.345 123.23 173.34V173.34Z\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n                      </g>\n                      <g id=\"tail-back-bottom\">\n                        <path id=\"Vector_3\" d=\"M123.23 207.39H132.39C132.823 207.39 133.252 207.305 133.651 207.139C134.051 206.973 134.414 206.729 134.72 206.423C135.026 206.116 135.268 205.752 135.432 205.352C135.597 204.952 135.681 204.523 135.68 204.09V198.38C135.681 197.947 135.597 197.518 135.432 197.118C135.268 196.718 135.026 196.354 134.72 196.047C134.414 195.741 134.051 195.497 133.651 195.331C133.252 195.165 132.823 195.08 132.39 195.08H115.57C115.22 195.08 114.884 195.219 114.637 195.467C114.389 195.714 114.25 196.05 114.25 196.4V198.4C114.25 200.787 115.198 203.076 116.886 204.764C118.574 206.452 120.863 207.4 123.25 207.4\" fill=\"#068E4D\"></path>\n                        <path id=\"Vector_4\" d=\"M123.23 207.39H132.39C132.823 207.39 133.252 207.305 133.651 207.139C134.051 206.973 134.414 206.729 134.72 206.423C135.026 206.116 135.268 205.752 135.432 205.352C135.597 204.952 135.681 204.523 135.68 204.09V198.38C135.681 197.947 135.597 197.518 135.432 197.118C135.268 196.718 135.026 196.354 134.72 196.047C134.414 195.741 134.051 195.497 133.651 195.331C133.252 195.165 132.823 195.08 132.39 195.08H115.57C115.22 195.08 114.884 195.219 114.637 195.467C114.389 195.714 114.25 196.05 114.25 196.4V198.4C114.253 200.782 115.199 203.065 116.882 204.75C118.566 206.436 120.848 207.385 123.23 207.39V207.39Z\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n                      </g>\n                    </g>\n                    <g id=\"bubble\">\n                      <path id=\"Vector_5\" d=\"M205 227.08C248.38 227.08 279.86 211.53 279.86 190.08C279.86 168.63 248.38 153.08 205 153.08C177.06 153.08 149.64 166.61 131.54 177.95C129.493 179.238 127.805 181.023 126.636 183.14C125.466 185.257 124.853 187.636 124.853 190.055C124.853 192.474 125.466 194.853 126.636 196.97C127.805 199.087 129.493 200.872 131.54 202.16C149.63 213.49 177.06 227.03 205 227.03\" fill=\"#068E4D\"></path>\n                      <path id=\"Vector_6\" d=\"M205 227.08C248.38 227.08 279.86 211.53 279.86 190.08C279.86 168.63 248.38 153.08 205 153.08C177.06 153.08 149.64 166.61 131.54 177.95C129.493 179.238 127.805 181.023 126.636 183.14C125.466 185.257 124.853 187.636 124.853 190.055C124.853 192.474 125.466 194.853 126.636 196.97C127.805 199.087 129.493 200.872 131.54 202.16C149.63 213.54 177.06 227.08 205 227.08Z\" stroke=\"white\" stroke-width=\"2\"></path>\n                      <path id=\"bubble-bottom\" d=\"M132.18 195.12C148.92 199.39 176.76 205.12 204.99 205.12C249.13 205.12 277.74 198.8 278.59 190.94C277.73 210.28 249.14 225.8 204.99 225.8C176.76 225.8 148.92 211.61 132.18 201.12C130.44 200.025 128.988 198.53 127.944 196.759C126.9 194.988 126.295 192.993 126.18 190.94C126.44 192.55 128.44 194.12 132.18 195.08\" fill=\"#068E4D\"></path>\n                      <path id=\"bubble-top\" d=\"M205 176.09C176.77 176.09 148.93 181.85 132.19 186.09C128.24 187.09 126.19 188.75 126.11 190.43C126.028 188.159 126.546 185.908 127.612 183.901C128.678 181.894 130.253 180.204 132.18 179C148.92 168.5 176.76 154.32 204.99 154.32C249.8 154.32 278.63 170.32 278.63 190.07C278.63 190.19 278.63 190.31 278.63 190.44C278.26 182.49 249.53 176.07 205 176.07\" fill=\"#36E69A\"></path>\n                      <path id=\"bubble-middle\" d=\"M132.18 186.12C148.92 181.85 176.76 176.12 204.99 176.12C249.52 176.12 278.25 182.55 278.6 190.5C278.6 190.67 278.6 190.84 278.6 191.01C277.75 198.87 249.15 205.18 205 205.18C176.77 205.18 148.93 199.42 132.19 195.18C128.4 194.18 126.4 192.65 126.19 191.05V190.54C126.32 188.85 128.34 187.18 132.29 186.17\" fill=\"#25B774\"></path>\n                    </g>\n                    <g id=\"tail-front\">\n                      <g id=\"tail-front-back\">\n                        <path d=\"M123.23 173.34H132.39C132.823 173.34 133.252 173.425 133.651 173.591C134.051 173.757 134.414 174.001 134.72 174.307C135.026 174.614 135.268 174.978 135.432 175.378C135.597 175.778 135.681 176.207 135.68 176.64V182.35C135.681 182.783 135.597 183.212 135.432 183.612C135.268 184.012 135.026 184.376 134.72 184.683C134.414 184.989 134.051 185.233 133.651 185.399C133.252 185.565 132.823 185.65 132.39 185.65H115.57C115.22 185.65 114.884 185.511 114.637 185.263C114.389 185.016 114.25 184.68 114.25 184.33V182.33C114.25 179.943 115.198 177.654 116.886 175.966C118.574 174.278 120.863 173.33 123.25 173.33\" fill=\"#068E4D\"></path>\n                        <path d=\"M123.23 173.34H132.39C132.823 173.34 133.252 173.425 133.651 173.591C134.051 173.757 134.414 174.001 134.72 174.307C135.026 174.614 135.268 174.978 135.432 175.378C135.597 175.778 135.681 176.207 135.68 176.64V182.35C135.681 182.783 135.597 183.212 135.432 183.612C135.268 184.012 135.026 184.376 134.72 184.683C134.414 184.989 134.051 185.233 133.651 185.399C133.252 185.565 132.823 185.65 132.39 185.65H115.57C115.22 185.65 114.884 185.511 114.637 185.263C114.389 185.016 114.25 184.68 114.25 184.33V182.33C114.253 179.948 115.199 177.665 116.882 175.98C118.566 174.294 120.848 173.345 123.23 173.34V173.34Z\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n                      </g>\n                      <g id=\"tail-front-bottom\">\n                        <path d=\"M123.23 207.39H132.39C132.823 207.39 133.252 207.305 133.651 207.139C134.051 206.973 134.414 206.729 134.72 206.423C135.026 206.116 135.268 205.752 135.432 205.352C135.597 204.952 135.681 204.523 135.68 204.09V198.38C135.681 197.947 135.597 197.518 135.432 197.118C135.268 196.718 135.026 196.354 134.72 196.047C134.414 195.741 134.051 195.497 133.651 195.331C133.252 195.165 132.823 195.08 132.39 195.08H115.57C115.22 195.08 114.884 195.219 114.637 195.467C114.389 195.714 114.25 196.05 114.25 196.4V198.4C114.25 200.787 115.198 203.076 116.886 204.764C118.574 206.452 120.863 207.4 123.25 207.4\" fill=\"#068E4D\"></path>\n                        <path d=\"M123.23 207.39H132.39C132.823 207.39 133.252 207.305 133.651 207.139C134.051 206.973 134.414 206.729 134.72 206.423C135.026 206.116 135.268 205.752 135.432 205.352C135.597 204.952 135.681 204.523 135.68 204.09V198.38C135.681 197.947 135.597 197.518 135.432 197.118C135.268 196.718 135.026 196.354 134.72 196.047C134.414 195.741 134.051 195.497 133.651 195.331C133.252 195.165 132.823 195.08 132.39 195.08H115.57C115.22 195.08 114.884 195.219 114.637 195.467C114.389 195.714 114.25 196.05 114.25 196.4V198.4C114.253 200.782 115.199 203.065 116.882 204.75C118.566 206.436 120.848 207.385 123.23 207.39V207.39Z\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n                      </g>\n                    </g>\n                    <g id=\"clouds\">\n                      <g id=\"cloud-1\" opacity=\"0\">\n                        <path id=\"cloud-1-1\" d=\"M68.95 107.8H131.86\" stroke=\"white\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"></path>\n                        <path id=\"cloud-1-2\" d=\"M41.77 97.54H77.06C77.06 94.2513 78.3664 91.0973 80.6919 88.7719C83.0173 86.4464 86.1713 85.14 89.46 85.14C92.7487 85.14 95.9027 86.4464 98.2281 88.7719C100.554 91.0973 101.86 94.2513 101.86 97.54H119.79\" stroke=\"white\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"></path>\n                      </g>\n                      <g id=\"cloud-2\" opacity=\"0\">\n                        <path id=\"cloud-2-1\" d=\"M258.96 93.19H298.74\" stroke=\"white\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"></path>\n                        <path id=\"cloud-2-2\" d=\"M278.75 82.91H251.39C251.39 79.6213 250.084 76.4673 247.758 74.1419C245.433 71.8164 242.279 70.51 238.99 70.51C235.701 70.51 232.547 71.8164 230.222 74.1419C227.896 76.4673 226.59 79.6213 226.59 82.91H208.65\" stroke=\"white\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"></path>\n                        <path id=\"cloud-2-3\" d=\"M287.01 82.91H309.21\" stroke=\"white\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"></path>\n                      </g>\n                    </g>\n                    <g id=\"track\">\n                      <path id=\"track-1\" d=\"M106.25 179.49H84.05\" stroke=\"white\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"></path>\n                      <path id=\"track-2\" d=\"M106.25 190.98H68.77\" stroke=\"white\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"></path>\n                      <path id=\"track-3\" d=\"M106.25 201.23H84.05\" stroke=\"white\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"></path>\n                    </g>\n                  </g>\n                  <path id=\"mntns\" d=\"M290 328H245L213.02 295.508C212.679 295.219 212.247 295.061 211.8 295.061C211.353 295.061 210.921 295.219 210.58 295.508L200.38 305.738C200.067 306.008 199.668 306.157 199.255 306.157C198.842 306.157 198.443 306.008 198.13 305.738L179.13 285.568C178.697 285.201 178.148 285 177.58 285C177.012 285 176.463 285.201 176.03 285.568L149.61 311.208C149.298 311.48 148.899 311.63 148.485 311.63C148.071 311.63 147.672 311.48 147.36 311.208L144.73 308.288C144.415 307.999 144.003 307.839 143.575 307.839C143.147 307.839 142.735 307.999 142.42 308.288L124.85 327.928L81 328\" stroke=\"white\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"></path>\n\n                  <rect id=\"window-big\" x=\"198.77\" y=\"231.88\" width=\"8.91\" height=\"9.82\" rx=\"3\" stroke=\"white\" stroke-width=\"2\" opacity=\"0\"></rect>\n\n                  <g id=\"primary-reward-to\">\n                    <g id=\"ski\" opacity=\"0\">\n                      <path d=\"M91.14,327.79a2.2,2.2,0,0,1-2-2.36l13.66-193.17c1.1-15.49-4.8-21.92-8.75-24.47a1.35,1.35,0,0,1,.53-2.45C103,104,122.18,104,120,134.19L106.43,326.67a2.2,2.2,0,0,1-2.35,2Z\" fill=\"#fff\"></path>\n                      <path d=\"M124.5,328.17a2.2,2.2,0,0,1-2.17-2.23l2.24-193.63c0.19-15.53-6.07-21.61-10.16-23.91a1.35,1.35,0,0,1,.39-2.47c8.36-1.9,27.49-3,27.15,27.28l-2.25,192.93a2.2,2.2,0,0,1-2.22,2.18Z\" fill=\"#fff\"></path>\n                    </g>\n                    <g clip-path=\"url(#window)\">\n                      <g id=\"clouds-in-window\" transform=\"translate(220 160)\" opacity=\"0\">\n                        <line x1=\"28.18\" y1=\"38.34\" x2=\"91.09\" y2=\"38.34\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" stroke-width=\"2\"></line>\n                        <path d=\"M41.77,97.54H77.06a12.4,12.4,0,1,1,24.8,0h17.93\" transform=\"translate(-40.77 -69.46)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" stroke-width=\"2\"></path>\n                        <line x1=\"218.19\" y1=\"23.72\" x2=\"257.97\" y2=\"23.72\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" stroke-width=\"2\"></line>\n                        <path d=\"M278.75,82.91H251.39a12.4,12.4,0,1,0-24.8,0H208.65\" transform=\"translate(-40.77 -69.46)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" stroke-width=\"2\"></path>\n                        <line x1=\"246.24\" y1=\"13.45\" x2=\"268.43\" y2=\"13.45\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" stroke-width=\"2\"></line>\n                      </g>\n                    </g>\n                    <g id=\"chair\" opacity=\"0\">\n                      <path d=\"M257.5,259.82H196.76V245.63h55.09a9.92,9.92,0,0,1,9.9,9.93,4.26,4.26,0,0,1-4.25,4.25\" fill=\"#a67ee5\"></path>\n                      <path d=\"M257.5,259.82H196.76V245.63h55.09a9.92,9.92,0,0,1,9.9,9.93A4.26,4.26,0,0,1,257.5,259.82Z\" fill=\"none\" stroke=\"#fff\" stroke-miterlimit=\"10\" stroke-width=\"2\"></path>\n                      <polygon points=\"185.47 328.31 171.5 328.31 165.19 286.72 179.16 286.72 185.47 328.31\" fill=\"#a67ee5\"></polygon>\n                      <polygon points=\"185.47 328.31 171.5 328.31 165.19 286.72 179.16 286.72 185.47 328.31\" fill=\"none\" stroke=\"#fff\" stroke-miterlimit=\"10\" stroke-width=\"2\"></polygon>\n                      <polygon points=\"235.03 328.31 221.06 328.31 214.76 286.72 228.72 286.72 235.03 328.31\" fill=\"#a67ee5\"></polygon>\n                      <polygon points=\"235.03 328.31 221.06 328.31 214.76 286.72 228.72 286.72 235.03 328.31\" fill=\"none\" stroke=\"#fff\" stroke-miterlimit=\"10\" stroke-width=\"2\"></polygon>\n                      <path d=\"M281.33,272.45H225.44a5.59,5.59,0,0,1-5.53-4.77l-10.86-72.24a17.71,17.71,0,0,0-12.49-31.31H141.48L141.16,267l15.77,23.35,47.19,8.39a12.3,12.3,0,0,0,4.22.75h73a13.53,13.53,0,0,0,0-27.06\" fill=\"#a67ee5\"></path>\n                      <path d=\"M281.33,272.45H225.44a5.59,5.59,0,0,1-5.53-4.77l-10.86-72.24a17.71,17.71,0,0,0-12.49-31.31H141.48L141.16,267l15.77,23.35,47.19,8.39a12.3,12.3,0,0,0,4.22.75h73A13.53,13.53,0,0,0,281.33,272.45Z\" fill=\"none\" stroke=\"#fff\" stroke-miterlimit=\"10\" stroke-width=\"2\"></path>\n                      <path d=\"M162.42,267.69l-10.86-72.24a17.71,17.71,0,1,0-29-13.61,18,18,0,0,0,.79,5.25L138.65,289a12.36,12.36,0,0,0,12.21,10.54h73a13.53,13.53,0,0,0,0-27.05H167.95a5.62,5.62,0,0,1-5.53-4.78\" fill=\"#a67ee5\"></path>\n                      <path d=\"M162.42,267.69l-10.86-72.24a17.71,17.71,0,1,0-29-13.61,18,18,0,0,0,.79,5.25L138.65,289a12.36,12.36,0,0,0,12.21,10.54h73a13.53,13.53,0,0,0,0-27.05H167.95A5.62,5.62,0,0,1,162.42,267.69Z\" fill=\"none\" stroke=\"#fff\" stroke-miterlimit=\"10\" stroke-width=\"2\"></path>\n                      <path d=\"M206.26,259.82h-72l-2.13-14.19H200.6a9.92,9.92,0,0,1,9.9,9.93,4.26,4.26,0,0,1-4.25,4.25\" fill=\"#a67ee5\"></path>\n                      <path d=\"M206.26,259.82h-72l-2.13-14.19H200.6a9.92,9.92,0,0,1,9.9,9.93A4.26,4.26,0,0,1,206.26,259.82Z\" fill=\"none\" stroke=\"#fff\" stroke-miterlimit=\"10\" stroke-width=\"2\"></path>\n                      <line x1=\"151.57\" y1=\"195.44\" x2=\"209.05\" y2=\"195.44\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" stroke-width=\"2\"></line>\n                    </g>\n                    <g id=\"plant\" opacity=\"0\">\n                      <path d=\"M79.18,194A131,131,0,0,1,94.77,220.9a255,255,0,0,1-20.08-23.55,259,259,0,0,1-17.07-25.88A131.72,131.72,0,0,1,79.18,194\" fill=\"#36e69a\"></path>\n                      <path d=\"M80.94,214.39a127.19,127.19,0,0,1,22.8,20.49A242.09,242.09,0,0,1,77.9,219.17a235.86,235.86,0,0,1-23.42-18.7,119.82,119.82,0,0,1,26.46,13.92\" fill=\"#36e69a\"></path>\n                      <path d=\"M93.66,205.48a258.38,258.38,0,0,0,10.08,29.39,125.63,125.63,0,0,0-4.5-30.52,135.9,135.9,0,0,0-12.06-29.44,260.33,260.33,0,0,0,6.47,30.57\" fill=\"#36e69a\"></path>\n                      <path d=\"M107.32,213.52a250.14,250.14,0,0,0,2.06,30.67,119.93,119.93,0,0,0,3.76-30.05,131.24,131.24,0,0,0-4-31.36,238.1,238.1,0,0,0-1.87,30.74\" fill=\"#25b774\"></path>\n                      <path d=\"M83.08,229.56a121.93,121.93,0,0,1,26.29,14.64A225.91,225.91,0,0,1,81.21,235a228.11,228.11,0,0,1-26.37-12.69,113.61,113.61,0,0,1,28.25,7.29\" fill=\"#25b774\"></path>\n                      <path d=\"M88.06,243.83A118.11,118.11,0,0,1,115.62,255a211,211,0,0,1-28.78-5.6,220.87,220.87,0,0,1-27.42-9.33,114,114,0,0,1,28.65,3.73\" fill=\"#25b774\"></path>\n                      <path d=\"M118.71,224.79a238,238,0,0,0-3.1,30.25,117.11,117.11,0,0,0,8.82-28.54,127.44,127.44,0,0,0,1.42-31.19,213.92,213.92,0,0,0-7.15,29.48\" fill=\"#25b774\"></path>\n                      <path d=\"M98.86,262a118.24,118.24,0,0,1,27.07,12.34,212.3,212.3,0,0,1-28.53-6.79,220.78,220.78,0,0,1-27-10.45A114.06,114.06,0,0,1,98.86,262\" fill=\"#068e4d\"></path>\n                      <path d=\"M130.27,244.29a236.56,236.56,0,0,0-4.34,30.1,116.94,116.94,0,0,0,10-28.16,127.42,127.42,0,0,0,2.71-31.1,214.43,214.43,0,0,0-8.36,29.16\" fill=\"#068e4d\"></path>\n                      <path d=\"M108.9,280.69a118.21,118.21,0,0,1,26.54,13.47,213.62,213.62,0,0,1-28.23-8,221.65,221.65,0,0,1-26.55-11.57,113.82,113.82,0,0,1,28.24,6.08\" fill=\"#068e4d\"></path>\n                      <path d=\"M141,264.26a236.09,236.09,0,0,0-5.58,29.9,117.46,117.46,0,0,0,11.15-27.73,127.2,127.2,0,0,0,4-31A214.24,214.24,0,0,0,141,264.26\" fill=\"#068e4d\"></path>\n                      <path d=\"M92.62,217.67A529.26,529.26,0,0,1,149.48,328\" fill=\"none\" stroke=\"#36e69a\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"></path>\n                    </g>\n                  </g>\n\n                  <animate href=\"#primary-award-from\" begin=\"indefinite\" id=\"primaryAwardBegin\" attributeName=\"opacity\" dur=\"0.1s\" to=\"1\"></animate>\n\n                  <animateTransform href=\"#cloud-1\" attributeName=\"transform\" type=\"translate\" from=\"200, 0\" to=\"0, 0\" dur=\"2s\" begin=\"primaryAwardBegin.begin\" fill=\"freeze\"></animateTransform>\n                  <animate href=\"#cloud-1\" attributeName=\"opacity\" values=\"0; 1; 1; 0\" keyTimes=\"0; 0.2; 0.8; 1\" dur=\"2s\" begin=\"primaryAwardBegin.begin\" fill=\"freeze\"></animate>\n                  <animateTransform href=\"#cloud-1-1\" attributeName=\"transform\" type=\"translate\" from=\"-20, 0\" to=\"0, 0\" dur=\"2s\" begin=\"primaryAwardBegin.begin\" fill=\"freeze\"></animateTransform>\n\n                  <animateTransform href=\"#cloud-2\" attributeName=\"transform\" type=\"translate\" from=\"0, 0\" to=\"-100, 0\" dur=\"1s\" begin=\"primaryAwardBegin.begin + 1.75s\" fill=\"freeze\"></animateTransform>\n                  <animate href=\"#cloud-2\" attributeName=\"opacity\" values=\"0; 1; 1; 0\" keyTimes=\"0; 0.2; 0.8; 1\" dur=\"1s\" begin=\"primaryAwardBegin.begin + 1.75s\" fill=\"freeze\"></animate>\n                  <animateTransform href=\"#cloud-2-1\" attributeName=\"transform\" type=\"translate\" from=\"-20, 0\" to=\"0, 0\" dur=\"1s\" begin=\"primaryAwardBegin.begin + 1.75s\" fill=\"freeze\"></animateTransform>\n\n                  <animate href=\"#track-1\" attributeName=\"d\" values=\"M106.25 179.49H74.05; M106.25 179.49H84.05; M106.25 179.49H74.05\" dur=\"0.25s\" begin=\"primaryAwardBegin.begin\" repeatCount=\"indefinite\"></animate>\n                  <animate href=\"#track-2\" attributeName=\"d\" values=\"M106.25 190.98H68.77; M106.25 190.98H78.77; M106.25 190.98H68.77\" dur=\"0.375s\" begin=\"primaryAwardBegin.begin\" repeatCount=\"indefinite\"></animate>\n                  <animate href=\"#track-3\" attributeName=\"d\" values=\"M106.25 201.23H84.05; M106.25 201.23H74.05; M106.25 201.23H84.05\" dur=\"0.25s\" begin=\"primaryAwardBegin.begin\" repeatCount=\"indefinite\"></animate>\n\n                  <animateMotion href=\"#tail-front\" values=\"0,-2;0,2;0,-2\" dur=\"1.6s\" repeatCount=\"indefinite\" begin=\"primaryAwardBegin.begin\"></animateMotion>\n                  <animateMotion href=\"#tail-back\" values=\"0,-2;0,2;0,-2\" dur=\"1.6s\" repeatCount=\"indefinite\" begin=\"primaryAwardBegin.begin - 0.8s\"></animateMotion>\n\n                  <animate href=\"#bubble-top\" attributeName=\"d\" values=\"\n                      M205 174.09C176.77 174.09 148.93 181.85 132.19 186.09C128.24 187.09 126.19 188.75 126.11 190.43C126.028 188.159 126.546 185.908 127.612 183.901C128.678 181.894 130.253 180.204 132.18 179C148.92 168.5 176.76 154.32 204.99 154.32C249.8 154.32 278.63 170.32 278.63 190.07C278.63 190.19 278.63 190.31 278.63 190.44C278.26 182.49 249.53 174.07 205 174.07;\n                      M 205 178.09 C 176.77 178.09 148.93 181.85 132.19 186.09 C 128.24 187.09 126.19 188.75 126.11 190.43 C 126.028 188.159 126.546 185.908 127.612 183.901 C 128.678 181.894 130.253 180.204 132.18 179 C 148.92 168.5 176.76 154.32 204.99 154.32 C 249.8 154.32 278.63 170.32 278.63 190.07 C 278.63 190.19 278.63 190.31 278.63 190.44 C 278.26 182.49 249.53 178.07 205 178.07;\n                      M205 174.09C176.77 174.09 148.93 181.85 132.19 186.09C128.24 187.09 126.19 188.75 126.11 190.43C126.028 188.159 126.546 185.908 127.612 183.901C128.678 181.894 130.253 180.204 132.18 179C148.92 168.5 176.76 154.32 204.99 154.32C249.8 154.32 278.63 170.32 278.63 190.07C278.63 190.19 278.63 190.31 278.63 190.44C278.26 182.49 249.53 174.07 205 174.07\n                    \" dur=\"1.6s\" repeatCount=\"indefinite\" begin=\"primaryAwardBegin.begin\"></animate>\n                  <animate href=\"#bubble-middle\" attributeName=\"d\" values=\"\n                      M132.18 186.12C148.92 181.85 176.76 174.12 204.99 174.12C249.52 174.12 278.25 182.55 278.6 190.5C278.6 190.67 278.6 190.84 278.6 191.01C277.75 198.87 249.15 203.18 205 203.18C176.77 203.18 148.93 199.42 132.19 195.18C128.4 194.18 126.4 192.65 126.19 191.05V190.54C126.32 188.85 128.34 187.18 132.29 186.17;\n                      M132.18 186.12C148.92 181.85 176.76 178.12 204.99 178.12C249.52 178.12 278.25 182.55 278.6 190.5C278.6 190.67 278.6 190.84 278.6 191.01C277.75 198.87 249.15 207.18 205 207.18C176.77 207.18 148.93 199.42 132.19 195.18C128.4 194.18 126.4 192.65 126.19 191.05V190.54C126.32 188.85 128.34 187.18 132.29 186.17;\n                      M132.18 186.12C148.92 181.85 176.76 174.12 204.99 174.12C249.52 174.12 278.25 182.55 278.6 190.5C278.6 190.67 278.6 190.84 278.6 191.01C277.75 198.87 249.15 203.18 205 203.18C176.77 203.18 148.93 199.42 132.19 195.18C128.4 194.18 126.4 192.65 126.19 191.05V190.54C126.32 188.85 128.34 187.18 132.29 186.17\n                    \" dur=\"1.6s\" repeatCount=\"indefinite\" begin=\"primaryAwardBegin.begin\"></animate>\n\n                  <animate href=\"#cabin\" attributeName=\"d\" values=\"\n                      M 175.44 249.28 L 223.8 249.28 C 226.863 249.278 229.831 248.216 232.201 246.275 C 234.57 244.334 236.195 241.633 236.8 238.63 C 238.047 232.523 239.293 226.417 240.54 220.31 L 172.36 220.31 L 172.36 246.2 C 172.363 247.016 172.688 247.798 173.265 248.375 C 173.842 248.952 174.624 249.277 175.44 249.28 C 175.44 249.28 175.44 249.28 175.44 249.28 Z;\n                      M 178.58 247.08 L 223.94 247.08 C 227.003 247.078 229.971 246.016 232.341 244.075 C 234.71 242.134 236.335 239.433 236.94 236.43 C 237.545 233.427 240.54 220.31 240.54 220.31 L 172.36 220.31 L 175.5 244 C 175.501 244.408 175.585 244.808 175.74 245.177 C 175.895 245.547 176.121 245.887 176.41 246.175 C 176.987 246.752 177.764 247.077 178.58 247.08 Z;\n                      M 175.44 249.28 L 223.8 249.28 C 226.863 249.278 229.831 248.216 232.201 246.275 C 234.57 244.334 236.195 241.633 236.8 238.63 C 238.047 232.523 239.293 226.417 240.54 220.31 L 172.36 220.31 L 172.36 246.2 C 172.363 247.016 172.688 247.798 173.265 248.375 C 173.842 248.952 174.624 249.277 175.44 249.28 C 175.44 249.28 175.44 249.28 175.44 249.28 Z\n                    \" dur=\"0.8s\" repeatCount=\"indefinite\" begin=\"primaryAwardBegin.begin\"></animate>\n                  <animate href=\"#window-front\" attributeName=\"d\" values=\"\n                      M 235.79 241.69 L 226.57 241.69 C 224.371 241.682 222.265 240.803 220.713 239.245 C 219.161 237.688 218.29 235.579 218.29 233.38 L 218.29 220.31;\n                      M 235.79 239.31 L 227.5 239.31 C 225.301 239.302 223.195 238.423 221.643 236.865 C 220.091 235.308 219.5 233 219.22 231 L 218.29 220.31;\n                      M 235.79 241.69 L 226.57 241.69 C 224.371 241.682 222.265 240.803 220.713 239.245 C 219.161 237.688 218.29 235.579 218.29 233.38 L 218.29 220.31\n                    \" dur=\"0.8s\" repeatCount=\"indefinite\" begin=\"primaryAwardBegin.begin\"></animate>\n                  <animate href=\"#window-1\" attributeName=\"height\" values=\"9.82;7.82;9.82\" dur=\"0.8s\" begin=\"primaryAwardBegin.begin\" repeatCount=\"indefinite\"></animate>\n                  <animate href=\"#window-2\" attributeName=\"height\" values=\"9.82;7.82;9.82\" dur=\"0.8s\" begin=\"primaryAwardBegin.begin\" repeatCount=\"3\" id=\"window2\"></animate>\n                  <set href=\"#window-2\" attributeName=\"opacity\" to=\"0\" begin=\"primaryAwardBegin.begin + 2.4s\" fill=\"freeze\"></set>\n\n                  <animate href=\"#mntns\" attributeName=\"d\" values=\"\n                      M 81 328 L 124.85 327.928 L 142.42 308.288 C 142.735 307.999 143.147 307.839 143.575 307.839 C 144.003 307.839 144.415 307.999 144.73 308.288 L 147.36 311.208 C 147.672 311.48 148.071 311.63 148.485 311.63 C 148.899 311.63 149.298 311.48 149.61 311.208 L 176.03 285.568 C 176.463 285.201 177.012 285 177.58 285 C 178.148 285 178.697 285.201 179.13 285.568 L 198.13 305.738 C 198.443 306.008 198.842 306.157 199.255 306.157 C 199.668 306.157 200.067 306.008 200.38 305.738 L 210.58 295.508 C 210.921 295.219 211.353 295.061 211.8 295.061 C 212.247 295.061 212.679 295.219 213.02 295.508 L 245 328 L 290 328;\n                      M 81 328 L 92.611 328 L 104.222 328 C 108.093 328 111.963 328 115.833 328 C 119.704 328 123.574 328 127.444 328 L 139.056 328 C 142.926 328 146.796 328 150.667 328 C 154.537 328 158.407 328 162.278 328 L 173.889 328 C 177.759 328 181.63 328 185.5 328 C 189.37 328 193.241 328 197.111 328 L 208.722 328 C 212.593 328 216.463 328 220.333 328 C 224.204 328 228.074 328 231.944 328 L 243.556 328 C 247.426 328 251.296 328 255.167 328 C 259.037 328 262.907 328 266.778 328 L 278.389 328 L 290 328\n                    \" dur=\"0.2s\" begin=\"primaryAwardBegin.begin + 2.4s\" fill=\"freeze\"></animate>\n\n                  <animate id=\"fromDisappear\" href=\"#primary-award-from\" attributeName=\"opacity\" to=\"0\" dur=\"0.3s\" begin=\"primaryAwardBegin.begin + 2.4s\" fill=\"freeze\"></animate>\n\n                  <set href=\"#window-big\" attributeName=\"opacity\" to=\"1\" begin=\"window2.end\"></set>\n                  <animate href=\"#window-big\" attributeName=\"x\" to=\"240.35\" dur=\"0.4s\" begin=\"window2.end\" fill=\"freeze\"></animate>\n                  <animate href=\"#window-big\" attributeName=\"y\" to=\"152.42\" dur=\"0.4s\" begin=\"window2.end\" fill=\"freeze\"></animate>\n                  <animate href=\"#window-big\" attributeName=\"width\" to=\"52.16\" dur=\"0.4s\" begin=\"window2.end\" fill=\"freeze\"></animate>\n                  <animate href=\"#window-big\" attributeName=\"height\" to=\"73.01\" dur=\"0.4s\" begin=\"window2.end\" fill=\"freeze\"></animate>\n                  <animate href=\"#window-big\" attributeName=\"rx\" to=\"18\" dur=\"0.4s\" begin=\"window2.end\" fill=\"freeze\"></animate>\n\n                  <animateMotion href=\"#chair\" values=\"-40,0;0,0\" dur=\"0.6s\" begin=\"fromDisappear.end\" calcMode=\"spline\" keySplines=\"0.2 0 0.43 1\" fill=\"freeze\"></animateMotion>\n                  <animate href=\"#chair\" attributeName=\"opacity\" from=\"0\" to=\"1\" dur=\"0.5s\" begin=\"fromDisappear.end\" fill=\"freeze\"></animate>\n\n                  <animateMotion href=\"#ski\" values=\"-40,0;0,0\" dur=\"0.5s\" calcMode=\"spline\" keySplines=\"0.2 0 0.43 1\" begin=\"fromDisappear.end + 0.3s\" fill=\"freeze\"></animateMotion>\n                  <animate href=\"#ski\" attributeName=\"opacity\" from=\"0\" to=\"1\" dur=\"0.3s\" begin=\"fromDisappear.end + 0.3s\" fill=\"freeze\"></animate>\n\n                  <animateMotion id=\"plantAppear\" href=\"#plant\" values=\"-60,0;0,0\" dur=\"0.3s\" begin=\"fromDisappear.end + 0.2s\" fill=\"freeze\"></animateMotion>\n                  <animate href=\"#plant\" attributeName=\"opacity\" from=\"0\" to=\"1\" dur=\"0.3s\" begin=\"fromDisappear.end + 0.2s\" fill=\"freeze\"></animate>\n                  <animateTransform href=\"#plant\" attributeName=\"transform\" type=\"rotate\" values=\"0,150,350;5,150,350;-1,150,350;3,150,350;0,150,350\" dur=\"0.75s\" begin=\"plantAppear.end\" keyTimes=\"0; 0.125; 0.33; 0.66; 1\" fill=\"freeze\"></animateTransform>\n\n                  <set href=\"#clouds-in-window\" attributeName=\"opacity\" to=\"1\" begin=\"fromDisappear.end + 0.4s\" fill=\"freeze\"></set>\n                  <animateMotion href=\"#clouds-in-window\" from=\"100,0\" to=\"-300,0\" dur=\"4s\" begin=\"fromDisappear.end + 0.4s\" repeatCount=\"indefinite\" fill=\"freeze\"></animateMotion>\n\n                </svg>\n\n              </div>\n              <p class=\"prizes__desc\">\n                <b>3</b>\n                <span>загадочных путешествия</span>\n              </p>\n            </li>\n            <li class=\"prizes__item prizes__item--cases\">\n              <div class=\"prizes__icon\">\n                <svg viewBox=\"0 0 350 330\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                  <defs>\n                    <path id=\"chemodanPath\" d=\"M164.989 87.2735C183.718 92.5751 189 89.3941 189 84.1337C188.358 52.2827 78.6831 46.6229 43.8097 51.5722C41.4184 51.9117 17.9708 55.3387 20.1417 59.8671C23.0309 65.8855 51.5 77.8462 72.5 79C118 81.5 158.797 72.7297 166.5 73.5C171.5 74 176.387 78.2408 158.22 81.74\" stroke=\"#fff\"></path>\n                  </defs>\n                  <g id=\"secondary-award\">\n                    <g id=\"plant-2\">\n                      <path id=\"plant-2-2\" d=\"M263.47 206.82C263.795 206.58 264.184 206.444 264.588 206.43C264.991 206.415 265.39 206.524 265.731 206.74C266.072 206.956 266.339 207.271 266.498 207.642C266.656 208.013 266.699 208.424 266.62 208.82C265.62 215.82 264.55 229.15 271.47 228.22C276.41 227.56 254.82 196.69 290.79 190.06C291.162 189.982 291.548 190.011 291.903 190.145C292.259 190.278 292.569 190.51 292.797 190.813C293.026 191.116 293.164 191.478 293.194 191.856C293.225 192.235 293.147 192.614 292.97 192.95C291.65 195.69 290.14 199.56 290.24 202.85C290.248 203.283 290.396 203.702 290.663 204.044C290.93 204.386 291.301 204.632 291.719 204.744C292.138 204.857 292.582 204.831 292.984 204.67C293.386 204.508 293.725 204.221 293.95 203.85C298.05 197.7 309.05 185.99 330.54 193.15C330.883 193.261 331.189 193.463 331.427 193.734C331.665 194.005 331.825 194.335 331.89 194.69C332.82 199.49 336.02 217.93 331.6 223.41C326.51 229.72 316.6 227.55 315.42 233.66C314.12 240.57 322.93 238.48 328.84 233.44C329.138 233.177 329.507 233.008 329.9 232.956C330.294 232.903 330.695 232.969 331.051 233.145C331.407 233.321 331.703 233.599 331.9 233.943C332.098 234.288 332.188 234.684 332.16 235.08C331.91 240.53 329.98 249.08 321.04 253.77C307.26 260.98 297.56 246.77 295.85 249.89C293.26 254.55 303.79 258.36 309.63 260.07C310.001 260.168 310.336 260.371 310.595 260.654C310.855 260.938 311.026 261.29 311.091 261.669C311.155 262.047 311.109 262.436 310.958 262.789C310.807 263.143 310.558 263.445 310.24 263.66C299.72 271.4 281.11 273.94 273.24 258.25C264.94 241.66 260.31 245.76 255.05 237.87C249.34 229.3 250.72 215.33 263.43 206.82H263.47ZM292.83 239.29C293.33 242.02 298.03 242.8 301.18 242.23C304.33 241.66 309.65 238.4 309.18 235.67C308.71 232.94 302.56 231.77 299.4 232.34C296.24 232.91 292.35 236.56 292.85 239.29\" fill=\"#E81A5A\"></path>\n                      <path id=\"plant-2-1\" d=\"M263 327.88C263 327.88 258.09 257.61 268.54 247.16\" stroke=\"#E81A5A\" stroke-width=\"2\" stroke-miterlimit=\"10\"></path>\n                    </g>\n                    <g id=\"secondary-cloud-3\" opacity=\"0\">\n                      <path id=\"secondary-cloud-3-3\" d=\"M65.43 77.72H105.21\" stroke=\"white\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"></path>\n                      <path id=\"secondary-cloud-3-2\" d=\"M85.22 67.45H57.86C57.86 64.1613 56.5536 61.0073 54.2281 58.6819C51.9027 56.3564 48.7487 55.05 45.46 55.05C42.1713 55.05 39.0173 56.3564 36.6919 58.6819C34.3664 61.0073 33.06 64.1613 33.06 67.45H15.13\" stroke=\"white\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"></path>\n                      <path id=\"secondary-cloud-3-1\" d=\"M93.48 67.45H115.68\" stroke=\"white\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"></path>\n                    </g>\n                    <g id=\"secondary-cloud-2\" opacity=\"0\">\n                      <path id=\"secondary-cloud-2-2\" d=\"M272.13 145.27H311.9\" stroke=\"white\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"></path>\n                      <path id=\"secondary-cloud-2-1\" d=\"M300.17 135H322.37\" stroke=\"white\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"></path>\n                    </g>\n                    <path id=\"secondary-cloud-1-behind\" opacity=\"0\" d=\"M235.77 119H216.32C216.198 110.896 213.305 103.078 208.124 96.8464C202.942 90.6144 195.784 86.3436 187.838 84.744C179.893 83.1444 171.64 84.3125 164.45 88.0539C157.261 91.7954 151.569 97.8849 148.32 105.31C144.378 103.122 139.939 101.982 135.43 102C130.068 102.018 124.835 103.649 120.412 106.681C115.989 109.713 112.581 114.005 110.63 119H95.48C92.6952 119 90.0245 120.106 88.0554 122.075C86.0863 124.045 84.98 126.715 84.98 129.5C84.98 132.285 86.0863 134.955 88.0554 136.925C90.0245 138.894 92.6952 140 95.48 140H235.78C238.565 140 241.235 138.894 243.205 136.925C245.174 134.955 246.28 132.285 246.28 129.5C246.28 126.715 245.174 124.045 243.205 122.075C241.235 120.106 238.565 119 235.78 119\" fill=\"white\"></path>\n                    <g id=\"chemodan\" opacity=\"0\">\n                      <path d=\"M93.89 247.88C94.8254 247.877 95.7217 247.505 96.3832 246.843C97.0446 246.182 97.4173 245.285 97.42 244.35V239.28C97.42 238.344 97.0481 237.446 96.3861 236.784C95.7241 236.122 94.8262 235.75 93.89 235.75C92.9538 235.75 92.0559 236.122 91.3939 236.784C90.7319 237.446 90.36 238.344 90.36 239.28V244.35C90.3652 245.285 90.7388 246.179 91.3997 246.84C92.0606 247.501 92.9554 247.875 93.89 247.88\" fill=\"#A67EE5\"></path>\n                      <path d=\"M93.89 247.88C94.8254 247.877 95.7217 247.505 96.3832 246.843C97.0446 246.182 97.4173 245.285 97.42 244.35V239.28C97.42 238.344 97.0481 237.446 96.3861 236.784C95.7241 236.122 94.8262 235.75 93.89 235.75C92.9538 235.75 92.0559 236.122 91.3939 236.784C90.7319 237.446 90.36 238.344 90.36 239.28V244.35C90.3652 245.285 90.7388 246.179 91.3997 246.84C92.0606 247.501 92.9554 247.875 93.89 247.88V247.88Z\" stroke=\"white\" stroke-width=\"2\" stroke-miterlimit=\"10\"></path>\n                      <path d=\"M18.35 247.88C19.2854 247.877 20.1817 247.505 20.8432 246.843C21.5046 246.182 21.8774 245.285 21.88 244.35V239.28C21.88 238.344 21.5081 237.446 20.8461 236.784C20.1841 236.122 19.2862 235.75 18.35 235.75C17.4138 235.75 16.5159 236.122 15.8539 236.784C15.1919 237.446 14.82 238.344 14.82 239.28V244.35C14.8226 245.285 15.1954 246.182 15.8568 246.843C16.5183 247.505 17.4146 247.877 18.35 247.88\" fill=\"#A67EE5\"></path>\n                      <path d=\"M18.35 247.88C19.2854 247.877 20.1817 247.505 20.8432 246.843C21.5046 246.182 21.8774 245.285 21.88 244.35V239.28C21.88 238.344 21.5081 237.446 20.8461 236.784C20.1841 236.122 19.2862 235.75 18.35 235.75C17.4138 235.75 16.5159 236.122 15.8539 236.784C15.1919 237.446 14.82 238.344 14.82 239.28V244.35C14.8226 245.285 15.1954 246.182 15.8568 246.843C16.5183 247.505 17.4146 247.877 18.35 247.88V247.88Z\" stroke=\"white\" stroke-width=\"2\" stroke-miterlimit=\"10\"></path>\n                      <path d=\"M12.92 239.29H87.42C90.4278 239.282 93.3101 238.084 95.4369 235.957C97.5637 233.83 98.7621 230.948 98.77 227.94V161.86C98.7621 158.852 97.5637 155.97 95.4369 153.843C93.3101 151.716 90.4278 150.518 87.42 150.51H12.92C9.91223 150.518 7.02992 151.716 4.90309 153.843C2.77627 155.97 1.57793 158.852 1.57001 161.86V227.94C1.57793 230.948 2.77627 233.83 4.90309 235.957C7.02992 238.084 9.91223 239.282 12.92 239.29\" fill=\"#A67EE5\"></path>\n                      <path d=\"M87.42 150.51H12.92C6.65157 150.51 1.57001 155.592 1.57001 161.86V227.94C1.57001 234.208 6.65157 239.29 12.92 239.29H87.42C93.6884 239.29 98.77 234.208 98.77 227.94V161.86C98.77 155.592 93.6884 150.51 87.42 150.51Z\" stroke=\"white\" stroke-width=\"2\" stroke-miterlimit=\"10\"></path>\n                      <path d=\"M41.26 138.15H73.66C74.7413 138.153 75.7775 138.583 76.5421 139.348C77.3067 140.112 77.7374 141.149 77.74 142.23V158.23C77.74 158.546 77.6146 158.848 77.3915 159.071C77.1683 159.295 76.8656 159.42 76.55 159.42H73.85C73.5344 159.42 73.2317 159.295 73.0085 159.071C72.7854 158.848 72.66 158.546 72.66 158.23V143.86C72.66 143.523 72.5262 143.2 72.288 142.962C72.0499 142.724 71.7268 142.59 71.39 142.59H43.53C43.1932 142.59 42.8701 142.724 42.632 142.962C42.3938 143.2 42.26 143.523 42.26 143.86V158.24C42.26 158.556 42.1346 158.858 41.9115 159.081C41.6883 159.305 41.3856 159.43 41.07 159.43H38.37C38.0544 159.43 37.7517 159.305 37.5285 159.081C37.3054 158.858 37.18 158.556 37.18 158.24V142.24C37.1853 141.158 37.6182 140.122 38.3844 139.357C39.1505 138.593 40.1878 138.163 41.27 138.16\" fill=\"#A67EE5\"></path>\n                      <path d=\"M41.26 138.15H73.66C74.7413 138.153 75.7775 138.583 76.5421 139.348C77.3067 140.112 77.7374 141.149 77.74 142.23V158.23C77.74 158.546 77.6146 158.848 77.3915 159.071C77.1683 159.295 76.8656 159.42 76.55 159.42H73.85C73.5344 159.42 73.2317 159.295 73.0085 159.071C72.7854 158.848 72.66 158.546 72.66 158.23V143.86C72.66 143.523 72.5262 143.2 72.288 142.962C72.0499 142.724 71.7268 142.59 71.39 142.59H43.53C43.1932 142.59 42.8701 142.724 42.632 142.962C42.3938 143.2 42.26 143.523 42.26 143.86V158.24C42.26 158.556 42.1346 158.858 41.9115 159.081C41.6883 159.305 41.3856 159.43 41.07 159.43H38.37C38.0544 159.43 37.7517 159.305 37.5285 159.081C37.3054 158.858 37.18 158.556 37.18 158.24V142.24C37.1826 141.158 37.613 140.121 38.3773 139.354C39.1416 138.588 40.1778 138.155 41.26 138.15Z\" stroke=\"white\" stroke-width=\"2\" stroke-miterlimit=\"10\"></path>\n                      <path d=\"M27.34 239.29H101.84C104.848 239.282 107.73 238.084 109.857 235.957C111.984 233.83 113.182 230.948 113.19 227.94V161.86C113.182 158.852 111.984 155.97 109.857 153.843C107.73 151.716 104.848 150.518 101.84 150.51H27.34C24.334 150.521 21.4542 151.72 19.3295 153.847C17.2049 155.973 16.0079 158.854 16 161.86V227.94C16.0105 230.947 17.2097 233.828 19.336 235.954C21.4622 238.08 24.343 239.279 27.35 239.29\" fill=\"#A67EE5\"></path>\n                      <path d=\"M27.34 239.29H101.84C104.848 239.282 107.73 238.084 109.857 235.957C111.984 233.83 113.182 230.948 113.19 227.94V161.86C113.182 158.852 111.984 155.97 109.857 153.843C107.73 151.716 104.848 150.518 101.84 150.51H27.34C24.334 150.521 21.4542 151.72 19.3295 153.847C17.2049 155.973 16.0079 158.854 16 161.86V227.94C16.0105 230.945 17.2083 233.825 19.3324 235.951C21.4565 238.076 24.3348 239.277 27.34 239.29V239.29Z\" stroke=\"white\" stroke-width=\"2\" stroke-miterlimit=\"10\"></path>\n                      <path d=\"M96.22 171.43H32.97\" stroke=\"white\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"></path>\n                      <path d=\"M96.22 194.9H32.97\" stroke=\"white\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"></path>\n                      <path d=\"M96.22 218.38H32.97\" stroke=\"white\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"></path>\n                      <path d=\"M10.12 172.68H10.79V217.14H10.12C9.18897 217.137 8.29668 216.767 7.63741 216.11C6.97813 215.452 6.60528 214.561 6.60001 213.63V176.2C6.60001 175.738 6.69105 175.28 6.86795 174.853C7.04485 174.426 7.30412 174.038 7.63098 173.711C7.95784 173.384 8.34588 173.125 8.77295 172.948C9.20002 172.771 9.65774 172.68 10.12 172.68\" fill=\"#A67EE5\"></path>\n                      <path d=\"M10.12 172.68H10.79V217.14H10.12C9.18897 217.137 8.29668 216.767 7.63741 216.11C6.97813 215.452 6.60528 214.561 6.60001 213.63V176.2C6.60001 175.266 6.97085 174.371 7.63098 173.711C8.29111 173.051 9.18643 172.68 10.12 172.68V172.68Z\" stroke=\"white\" stroke-width=\"2\" stroke-miterlimit=\"10\"></path>\n                      <path d=\"M57.46 137.86L1.87 58.03\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n                      <path d=\"M57.46 137.86L38.93 58.03\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n                      <path d=\"M75.99 58.03L57.46 137.86\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n                      <path d=\"M113.04 58.03L57.46 137.86\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n                      <path d=\"M57.46 2.44C72.1903 2.4506 86.314 8.30827 96.7281 18.7261C107.142 29.1439 112.995 43.2697 113 58C113 51.24 104.7 45.75 94.47 45.75C84.24 45.75 76.16 51.1 75.95 57.75C75.95 57.83 75.95 57.92 75.95 58.01C75.95 51.25 67.65 45.76 57.42 45.76C47.19 45.76 38.88 51.25 38.88 58.01C38.88 57.92 38.88 57.84 38.88 57.75C38.66 51.11 30.46 45.75 20.36 45.75C10.26 45.75 1.84 51.24 1.84 58C1.83868 50.6994 3.27567 43.4702 6.06886 36.7251C8.86206 29.98 12.9567 23.8513 18.119 18.689C23.2813 13.5267 29.41 9.43206 36.1551 6.63886C42.9002 3.84567 50.1294 2.40869 57.43 2.41L57.46 2.44ZM57.43 0.75C42.2582 0.776465 27.7159 6.81792 16.9915 17.5498C6.26714 28.2817 0.235862 42.8282 0.220001 58C0.220001 58.218 0.262936 58.4339 0.346359 58.6353C0.429782 58.8367 0.552062 59.0197 0.706207 59.1738C0.860353 59.3279 1.04335 59.4502 1.24475 59.5336C1.44615 59.6171 1.66201 59.66 1.88 59.66C2.098 59.66 2.31386 59.6171 2.51526 59.5336C2.71666 59.4502 2.89966 59.3279 3.0538 59.1738C3.20795 59.0197 3.33021 58.8367 3.41364 58.6353C3.49706 58.4339 3.53999 58.218 3.53999 58C3.53999 52.16 11.11 47.41 20.41 47.41C29.52 47.41 37.09 52.07 37.27 57.79V58C37.27 58.4403 37.4449 58.8625 37.7562 59.1738C38.0675 59.4851 38.4897 59.66 38.93 59.66C39.3703 59.66 39.7925 59.4851 40.1038 59.1738C40.4151 58.8625 40.59 58.4403 40.59 58C40.59 52.16 48.16 47.41 57.46 47.41C66.76 47.41 74.33 52.16 74.33 58C74.33 58.4403 74.5049 58.8625 74.8162 59.1738C75.1275 59.4851 75.5497 59.66 75.99 59.66C76.4303 59.66 76.8525 59.4851 77.1638 59.1738C77.4751 58.8625 77.65 58.4403 77.65 58V57.79C77.83 52.06 85.39 47.4 94.51 47.4C103.81 47.4 111.38 52.15 111.38 57.99C111.38 58.4303 111.555 58.8525 111.866 59.1638C112.178 59.4751 112.6 59.65 113.04 59.65C113.48 59.65 113.902 59.4751 114.214 59.1638C114.525 58.8525 114.7 58.4303 114.7 57.99C114.687 42.8139 108.654 28.2628 97.9243 17.5298C87.1951 6.7968 72.6461 0.758532 57.47 0.739998\" fill=\"white\"></path>\n                      <path d=\"M57.46 2.44C67.38 2.44 75.46 23.34 76 57.77C76.21 51.12 84.41 45.77 94.52 45.77C104.63 45.77 113 51.27 113 58C113 43.2566 107.143 29.1171 96.7181 18.6919C86.2929 8.26679 72.1534 2.41 57.41 2.41\" fill=\"#E81A5A\"></path>\n                      <path d=\"M57.45 2.44C42.7127 2.44 28.5788 8.29299 18.1561 18.7119C7.73337 29.1309 1.8753 43.2627 1.87 58C1.87 51.24 10.17 45.75 20.39 45.75C30.61 45.75 38.69 51.1 38.91 57.75C39.43 23.32 47.52 2.43 57.44 2.43\" fill=\"#FE6183\"></path>\n                      <path d=\"M57.46 2.44C47.53 2.44 39.46 23.34 38.92 57.76C38.92 57.85 38.92 57.93 38.92 58.02C38.92 51.26 47.22 45.77 57.45 45.77C67.68 45.77 76 51.27 76 58C76 57.91 76 57.83 76 57.74C75.49 23.31 67.4 2.41 57.48 2.41\" fill=\"#F7396B\"></path>\n                    </g>\n                    <path id=\"secondary-cloud-1\" opacity=\"0\" d=\"M235.77 119H216.32C216.198 110.896 213.305 103.078 208.124 96.8464C202.942 90.6144 195.784 86.3436 187.838 84.744C179.893 83.1444 171.64 84.3125 164.45 88.0539C157.261 91.7954 151.569 97.8849 148.32 105.31C144.378 103.122 139.939 101.982 135.43 102C130.068 102.018 124.835 103.649 120.412 106.681C115.989 109.713 112.581 114.005 110.63 119H95.48C92.6952 119 90.0245 120.106 88.0554 122.075C86.0863 124.045 84.98 126.715 84.98 129.5C84.98 132.285 86.0863 134.955 88.0554 136.925C90.0245 138.894 92.6952 140 95.48 140H235.78C238.565 140 241.235 138.894 243.205 136.925C245.174 134.955 246.28 132.285 246.28 129.5C246.28 126.715 245.174 124.045 243.205 122.075C241.235 120.106 238.565 119 235.78 119\" fill=\"white\"></path>\n                    <g id=\"plant-1\">\n                      <path id=\"plant-1-2\" d=\"M322.92 283.4C323.203 283.676 323.404 284.024 323.501 284.407C323.598 284.79 323.588 285.193 323.47 285.57C322.41 289 318.89 298.42 311.37 301.91C306.24 304.29 303.04 299.21 300.45 302.68C297.86 306.15 302.55 307.68 307.37 306.99C307.786 306.922 308.214 306.977 308.599 307.149C308.984 307.32 309.311 307.601 309.538 307.956C309.766 308.311 309.885 308.726 309.88 309.147C309.875 309.569 309.746 309.98 309.51 310.33C308.252 312.319 306.524 313.968 304.479 315.131C302.433 316.294 300.132 316.936 297.78 317C286.94 317.27 285.23 305.42 283.21 306.81C280.49 308.7 284.48 313.36 287.6 316.38C287.899 316.667 288.109 317.034 288.206 317.437C288.302 317.84 288.28 318.262 288.143 318.653C288.006 319.044 287.76 319.388 287.433 319.642C287.106 319.897 286.713 320.053 286.3 320.09C277.54 320.93 266.58 316.58 266.5 305.09C266.42 292.15 262.25 293.29 261.39 286.74C260.48 279.86 265.27 271.86 275.13 270.05C275.527 269.978 275.935 270.018 276.31 270.166C276.685 270.314 277.011 270.563 277.252 270.887C277.492 271.211 277.637 271.595 277.67 271.997C277.704 272.398 277.624 272.801 277.44 273.16C275.03 277.89 271.44 285.76 274.62 285.72C278.08 285.72 273.04 263.14 303.05 270.46C303.412 270.549 303.745 270.731 304.016 270.987C304.287 271.243 304.487 271.565 304.597 271.921C304.707 272.278 304.722 272.657 304.642 273.021C304.562 273.385 304.389 273.722 304.14 274L304.04 274.11C303.713 274.473 303.519 274.935 303.489 275.422C303.459 275.91 303.595 276.392 303.874 276.793C304.154 277.193 304.56 277.486 305.028 277.626C305.496 277.765 305.997 277.742 306.45 277.56C310.11 276.04 315.61 276.29 322.92 283.4\" fill=\"#FE6183\"></path>\n                      <path id=\"plant-1-1\" d=\"M245.13 327.88C245.13 327.88 248.61 297.77 266.83 297.77\" stroke=\"#FE6183\" stroke-width=\"2\" stroke-miterlimit=\"10\"></path>\n                    </g>\n                  </g>\n                  <path id=\"line\" d=\"M41.13 329H319.13\" stroke=\"white\" stroke-width=\"2\"></path>\n                  <animate href=\"#secondary-award\" begin=\"indefinite\" id=\"secondaryAwardBegin\" attributeName=\"opacity\" dur=\"0.1s\" to=\"1\"></animate>\n                  <animateTransform href=\"#plant-2-2\" attributeName=\"transform\" type=\"rotate\" values=\"1, 267, 248; -1, 267, 248; 1, 267, 248\" repeatCount=\"indefinite\" dur=\"2s\" begin=\"secondaryAwardBegin.begin\"></animateTransform>\n                  <animateTransform href=\"#plant-1\" attributeName=\"transform\" type=\"rotate\" values=\"\n                      1, 245, 328;\n                      -1, 245, 328;\n                      1, 245, 328;\n                      -3, 245, 328;\n                      3, 245, 328;\n                      -3, 245, 328;\n                      1, 245, 328\n                    \" repeatCount=\"indefinite\" dur=\"4s\" begin=\"secondaryAwardBegin.begin\"></animateTransform>\n\n                  <animate href=\"#secondary-cloud-3\" attributeName=\"opacity\" from=\"0\" to=\"1\" dur=\"0.2s\" begin=\"secondaryAwardBegin.begin\" fill=\"freeze\"></animate>\n                  <animateMotion href=\"#secondary-cloud-3\" values=\"60, 0; 0, 0\" dur=\"0.4s\" begin=\"secondaryAwardBegin.begin\" calcMode=\"spline\" keySplines=\"0,0,0.58,1\" fill=\"freeze\"></animateMotion>\n                  <animate href=\"#secondary-cloud-3\" attributeName=\"opacity\" from=\"1\" to=\"0\" dur=\"0.2s\" begin=\"secondaryAwardBegin.begin + 1s\" fill=\"freeze\"></animate>\n                  <animateMotion href=\"#secondary-cloud-3\" values=\"0, 0; 0, -20\" dur=\"0.2s\" begin=\"secondaryAwardBegin.begin + 1s\" calcMode=\"spline\" keySplines=\"0,0,0.58,1\" fill=\"freeze\"></animateMotion>\n\n                  <animate href=\"#secondary-cloud-1\" attributeName=\"opacity\" from=\"0\" to=\"1\" dur=\"0.2s\" begin=\"secondaryAwardBegin.begin + 0.2s\" fill=\"freeze\"></animate>\n                  <animateMotion href=\"#secondary-cloud-1\" values=\"100, 0; 0, 0\" dur=\"0.4s\" begin=\"secondaryAwardBegin.begin + 0.2s\" calcMode=\"spline\" keySplines=\"0,0,0.58,1\" fill=\"freeze\"></animateMotion>\n                  <animate href=\"#secondary-cloud-1\" attributeName=\"opacity\" from=\"1\" to=\"0\" dur=\"0.2s\" begin=\"secondaryAwardBegin.begin + 0.6s\" fill=\"freeze\"></animate>\n\n                  <animate href=\"#secondary-cloud-1-behind\" attributeName=\"opacity\" from=\"0\" to=\"1\" dur=\"0.2s\" begin=\"secondaryAwardBegin.begin + 0.5s\" fill=\"freeze\"></animate>\n                  <animate href=\"#secondary-cloud-1-behind\" attributeName=\"opacity\" from=\"1\" to=\"0\" dur=\"0.2s\" begin=\"secondaryAwardBegin.begin + 1s\" fill=\"freeze\"></animate>\n                  <animateMotion href=\"#secondary-cloud-1-behind\" values=\"0, 0; 0, -40\" dur=\"0.2s\" begin=\"secondaryAwardBegin.begin + 1s\" calcMode=\"spline\" keySplines=\"0,0,0.58,1\" fill=\"freeze\"></animateMotion>\n\n                  <animate href=\"#secondary-cloud-2\" attributeName=\"opacity\" from=\"0\" to=\"1\" dur=\"0.2s\" begin=\"secondaryAwardBegin.begin + 0.2s\" fill=\"freeze\"></animate>\n                  <animateMotion href=\"#secondary-cloud-2\" values=\"100, 0; 0, 0\" dur=\"0.4s\" begin=\"secondaryAwardBegin.begin + 0.2s\" calcMode=\"spline\" keySplines=\"0,0,0.58,1\" fill=\"freeze\"></animateMotion>\n                  <animate href=\"#secondary-cloud-2\" attributeName=\"opacity\" from=\"1\" to=\"0\" dur=\"0.2s\" begin=\"secondaryAwardBegin.begin + 1s\" fill=\"freeze\"></animate>\n                  <animateMotion href=\"#secondary-cloud-2\" values=\"0, 0; 0, -40\" dur=\"0.2s\" begin=\"secondaryAwardBegin.begin + 1s\" calcMode=\"spline\" keySplines=\"0,0,0.58,1\" fill=\"freeze\"></animateMotion>\n\n                  <animate href=\"#line\" attributeName=\"d\" values=\"M41 329H42; M41 329H284; M147 329H283.66\" dur=\"0.4s\" begin=\"secondaryAwardBegin.begin\" fill=\"freeze\"></animate>\n\n                  <animate href=\"#chemodan\" attributeName=\"opacity\" to=\"1\" dur=\"0.2s\" begin=\"secondaryAwardBegin.begin + 0.4s\" fill=\"freeze\"></animate>\n                  <animateTransform href=\"#chemodan\" attributeName=\"transform\" type=\"scale\" from=\"0\" to=\"1\" dur=\"2s\" begin=\"secondaryAwardBegin.begin + 0.4s\" additive=\"sum\"></animateTransform>\n                  <animateTransform href=\"#chemodan\" attributeName=\"transform\" type=\"rotate\" values=\"\n                      30, 57, 94;\n                      -30, 57, 94;\n                      20, 57, 94;\n                      18, 57, 94;\n                      -6, 57, 94;\n                      0, 57, 94\n                    \" dur=\"1.8s\" begin=\"secondaryAwardBegin.begin + 0.4s\" additive=\"sum\"></animateTransform>\n                  <animateMotion href=\"#chemodan\" dur=\"2s\" begin=\"secondaryAwardBegin.begin + 0.4s\" keyTimes=\"0; 0.25; 0.75; 1\" keyPoints=\"0; 0.25; 0.75; 1\" calcMode=\"linear\" additive=\"sum\" fill=\"freeze\">\n                    <mpath href=\"#chemodanPath\"></mpath>\n                  </animateMotion>\n                </svg>\n              </div>\n              <p class=\"prizes__desc\">\n                <b>7</b>\n                <span>надежных чемоданов</span>\n              </p>\n            </li>\n            <li class=\"prizes__item prizes__item--codes\">\n              <div class=\"prizes__icon\">\n                <svg viewBox=\"0 0 350 330\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                  <defs>\n                    <path id=\"bird-path\" d=\"M-51.9716 64.7473C-67.9717 44.2473 -35.9716 -4.25272 -0.18818 -0.345177\"></path>\n                  </defs>\n                  <g id=\"additional-reward\">\n                    <g id=\"case-cover-open\" opacity=\"0\">\n                      <path d=\"M253.93 232.11C255.055 232.11 256.155 231.776 257.091 231.151C258.027 230.526 258.756 229.637 259.187 228.597C259.618 227.558 259.73 226.414 259.511 225.31C259.291 224.206 258.749 223.192 257.953 222.397C257.158 221.601 256.144 221.059 255.04 220.839C253.936 220.62 252.792 220.732 251.753 221.163C250.713 221.594 249.824 222.323 249.199 223.259C248.574 224.195 248.24 225.295 248.24 226.42C248.24 227.929 248.839 229.376 249.907 230.443C250.974 231.511 252.421 232.11 253.93 232.11\" fill=\"#A67EE5\"></path>\n                      <path d=\"M253.93 232.11C257.072 232.11 259.62 229.562 259.62 226.42C259.62 223.277 257.072 220.73 253.93 220.73C250.787 220.73 248.24 223.277 248.24 226.42C248.24 229.562 250.787 232.11 253.93 232.11Z\" stroke=\"white\" stroke-width=\"2\" stroke-miterlimit=\"10\"></path>\n                      <path d=\"M240.3 210.48H67.19C64.0247 210.48 60.9875 211.73 58.7399 213.959C56.4923 216.188 55.2164 219.215 55.19 222.38V276C55.19 279.448 56.5596 282.754 58.9976 285.192C61.4356 287.63 64.7422 289 68.19 289H252.19V222.38C252.164 219.225 250.896 216.208 248.661 213.98C246.427 211.753 243.405 210.496 240.25 210.48\" fill=\"#A67EE5\"></path>\n                      <path d=\"M240.3 210.48H67.19C64.0247 210.48 60.9875 211.73 58.7399 213.959C56.4923 216.188 55.2164 219.215 55.19 222.38V276C55.19 279.448 56.5596 282.754 58.9976 285.192C61.4356 287.63 64.7422 289 68.19 289H252.19V222.38C252.164 219.234 250.903 216.224 248.679 213.998C246.455 211.772 243.446 210.509 240.3 210.48V210.48Z\" stroke=\"white\" stroke-width=\"2\" stroke-miterlimit=\"10\"></path>\n                      <path d=\"M70.24 289V225.49C70.24 221.512 71.8204 217.696 74.6334 214.883C77.4465 212.07 81.2618 210.49 85.24 210.49H85.74\" stroke=\"white\" stroke-width=\"2\"></path>\n                    </g>\n                    <g id=\"flower\" opacity=\"0\">\n                      <path d=\"M180.73 277.8C180.73 277.8 189.03 203.21 220.44 187.8\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n                      <path d=\"M217.95 187.12L227.22 162.63C230.306 163.003 233.278 164.025 235.94 165.63C237.587 164.511 239.596 164.058 241.564 164.362C243.531 164.666 245.311 165.704 246.543 167.268C247.776 168.831 248.37 170.803 248.206 172.788C248.042 174.772 247.132 176.62 245.66 177.96C246.588 180.926 246.881 184.054 246.52 187.14L220.52 190.44C220.102 190.493 219.677 190.436 219.286 190.277C218.896 190.117 218.554 189.859 218.292 189.528C218.031 189.197 217.859 188.805 217.794 188.388C217.729 187.971 217.772 187.545 217.92 187.15\" fill=\"#3B7BF2\"></path>\n                      <path d=\"M178.24 287.63C178.24 287.63 185.13 242.95 216.19 231.1\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n                      <path d=\"M210.85 232L219.85 215.53C222.073 216.075 224.16 217.073 225.98 218.46C227.224 217.858 228.638 217.71 229.98 218.04C230.712 218.206 231.403 218.516 232.014 218.951C232.626 219.386 233.144 219.938 233.541 220.575C233.937 221.212 234.203 221.922 234.323 222.663C234.443 223.403 234.415 224.16 234.24 224.89C233.901 226.212 233.085 227.362 231.95 228.12C232.365 230.302 232.293 232.549 231.74 234.7L212.4 234.59C212.093 234.597 211.79 234.525 211.52 234.379C211.25 234.233 211.023 234.019 210.861 233.758C210.7 233.497 210.609 233.199 210.598 232.892C210.587 232.586 210.657 232.281 210.8 232.01\" fill=\"#3B7BF2\"></path>\n                    </g>\n                    <g id=\"bubble-additional-award\" opacity=\"0\">\n                      <path d=\"M106.58 161.87L104.39 165.66C104.274 165.864 104.215 166.095 104.216 166.33C104.218 166.564 104.281 166.794 104.4 166.997C104.518 167.199 104.688 167.367 104.891 167.483C105.095 167.6 105.325 167.661 105.56 167.66H109.93C110.164 167.659 110.393 167.597 110.595 167.48C110.798 167.362 110.966 167.194 111.083 166.992C111.2 166.79 111.263 166.561 111.264 166.327C111.265 166.093 111.205 165.863 111.09 165.66L108.91 161.87C108.791 161.667 108.621 161.498 108.416 161.381C108.212 161.264 107.981 161.202 107.745 161.202C107.509 161.202 107.278 161.264 107.074 161.381C106.869 161.498 106.699 161.667 106.58 161.87Z\" fill=\"white\"></path>\n                      <path d=\"M107.74 79.42C116.463 79.4226 124.828 82.8884 130.997 89.0556C137.166 95.2228 140.635 103.587 140.64 112.31C140.64 130.48 125.55 161.2 107.39 161.2C89.23 161.2 74.84 130.47 74.84 112.31C74.8453 103.587 78.3136 95.2228 84.4826 89.0556C90.6517 82.8884 99.0169 79.4226 107.74 79.42V79.42ZM107.74 77.81C98.5933 77.8206 89.8242 81.4588 83.3565 87.9265C76.8888 94.3942 73.2506 103.163 73.24 112.31C73.24 121.82 77.04 134.41 82.92 144.38C89.92 156.26 98.6 162.8 107.38 162.8C116.16 162.8 124.98 156.26 132.19 144.4C138.29 134.4 142.24 121.76 142.24 112.31C142.229 103.163 138.591 94.3942 132.123 87.9265C125.656 81.4588 116.887 77.8206 107.74 77.81\" fill=\"white\"></path>\n                      <path d=\"M96.06 112.39C96.06 94.23 101.29 79.5 107.74 79.5C99.0169 79.5026 90.6517 82.9684 84.4827 89.1356C78.3136 95.3028 74.8453 103.667 74.84 112.39C74.84 130.56 89.22 161.28 107.39 161.28H107.56C101.13 161.09 96.06 130.51 96.06 112.39Z\" fill=\"#76ABFF\"></path>\n                      <path d=\"M140.64 112.39C140.635 103.667 137.166 95.3028 130.997 89.1356C124.828 82.9684 116.463 79.5026 107.74 79.5C114.19 79.5 119.42 94.23 119.42 112.39C119.42 130.55 114.13 160.87 107.74 161.26C125.74 160.87 140.64 130.44 140.64 112.39\" fill=\"#1553B7\"></path>\n                      <path d=\"M119.42 112.39C119.42 94.23 114.19 79.5 107.74 79.5C101.29 79.5 96.06 94.23 96.06 112.39C96.06 130.55 101.13 161.08 107.56 161.28H107.74C114.13 160.88 119.42 130.45 119.42 112.4\" fill=\"#3B7BF2\"></path>\n                      <path d=\"M100.54 105.36C99.4126 105.36 98.3106 105.694 97.3732 106.321C96.4359 106.947 95.7053 107.837 95.2739 108.879C94.8425 109.92 94.7296 111.066 94.9495 112.172C95.1695 113.278 95.7123 114.293 96.5095 115.091C97.3066 115.888 98.3223 116.431 99.428 116.65C100.534 116.87 101.68 116.758 102.721 116.326C103.763 115.895 104.653 115.164 105.279 114.227C105.906 113.289 106.24 112.187 106.24 111.06C106.285 110.3 106.169 109.538 105.898 108.826C105.628 108.114 105.209 107.468 104.671 106.929C104.132 106.391 103.486 105.972 102.774 105.702C102.062 105.431 101.3 105.315 100.54 105.36V105.36ZM100.54 113.36C98.68 113.36 97.48 112.43 97.48 111.07C97.48 109.71 98.69 108.78 100.54 108.78C102.39 108.78 103.61 109.71 103.61 111.07C103.61 112.43 102.36 113.36 100.54 113.36Z\" fill=\"white\"></path>\n                      <path d=\"M114.74 105.36C115.066 105.36 115.385 105.449 115.664 105.618C115.942 105.786 116.169 106.028 116.32 106.317C116.47 106.606 116.539 106.93 116.517 107.255C116.496 107.58 116.387 107.893 116.2 108.16L102.87 127.5C102.583 127.832 102.184 128.046 101.749 128.103C101.314 128.16 100.873 128.055 100.51 127.808C100.147 127.561 99.8878 127.19 99.7809 126.764C99.6739 126.339 99.727 125.889 99.93 125.5L113.27 106.16C113.433 105.921 113.653 105.726 113.909 105.592C114.165 105.458 114.451 105.388 114.74 105.39\" fill=\"white\"></path>\n                      <path d=\"M116.21 116.88C115.083 116.88 113.981 117.214 113.043 117.841C112.106 118.467 111.375 119.357 110.944 120.399C110.512 121.44 110.4 122.586 110.62 123.692C110.839 124.798 111.382 125.813 112.179 126.611C112.977 127.408 113.992 127.951 115.098 128.17C116.204 128.39 117.35 128.278 118.391 127.846C119.433 127.415 120.323 126.684 120.949 125.747C121.576 124.809 121.91 123.707 121.91 122.58C121.954 121.82 121.836 121.06 121.565 120.348C121.294 119.637 120.875 118.991 120.337 118.453C119.799 117.915 119.153 117.496 118.442 117.225C117.73 116.954 116.97 116.836 116.21 116.88ZM116.21 124.88C114.35 124.88 113.15 123.95 113.15 122.59C113.15 121.23 114.36 120.3 116.21 120.3C118.06 120.3 119.28 121.2 119.28 122.59C119.28 123.98 118.07 124.88 116.21 124.88Z\" fill=\"white\"></path>\n                    </g>\n                    <path opacity=\"0\" id=\"string\" d=\"M107.65 166.71C107.65 188.5 107.65 289.02 107.65 289.02\" stroke=\"white\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"></path>\n                    <g id=\"case-base\">\n                      <path d=\"M280.29 318.62C281.44 318.741 282.601 318.511 283.618 317.959C284.634 317.408 285.46 316.561 285.986 315.53C286.511 314.5 286.712 313.334 286.561 312.187C286.411 311.04 285.916 309.965 285.142 309.106C284.368 308.246 283.352 307.64 282.227 307.37C281.102 307.1 279.922 307.177 278.842 307.591C277.762 308.005 276.832 308.737 276.177 309.69C275.521 310.644 275.17 311.773 275.17 312.93C275.099 314.362 275.598 315.765 276.557 316.831C277.516 317.897 278.858 318.54 280.29 318.62Z\" fill=\"#A67EE5\"></path>\n                      <path d=\"M280.29 318.62C283.118 318.62 285.41 316.072 285.41 312.93C285.41 309.787 283.118 307.24 280.29 307.24C277.462 307.24 275.17 309.787 275.17 312.93C275.17 316.072 277.462 318.62 280.29 318.62Z\" stroke=\"white\" stroke-width=\"2\" stroke-miterlimit=\"10\"></path>\n                      <path d=\"M230.22 328.86H82.22C79.0908 328.887 76.0781 327.675 73.8393 325.488C71.6005 323.302 70.3174 320.319 70.27 317.19V289H242.16V317.17C242.115 320.298 240.834 323.281 238.597 325.468C236.36 327.654 233.348 328.867 230.22 328.84\" fill=\"#A67EE5\"></path>\n                      <path d=\"M230.22 328.86H82.22C79.0908 328.887 76.0781 327.675 73.8393 325.488C71.6005 323.302 70.3174 320.319 70.27 317.19V289H242.16V317.17C242.12 320.302 240.842 323.29 238.604 325.481C236.366 327.672 233.352 328.887 230.22 328.86V328.86Z\" stroke=\"white\" stroke-width=\"2\" stroke-miterlimit=\"10\"></path>\n                      <path d=\"M266.72 328.86H119.72C116.602 328.876 113.603 327.658 111.379 325.472C109.156 323.285 107.887 320.308 107.85 317.19V289H278.58V317.17C278.548 320.288 277.283 323.267 275.06 325.454C272.837 327.641 269.838 328.859 266.72 328.84\" fill=\"#A67EE5\"></path>\n                      <path d=\"M266.72 328.86H119.72C116.602 328.876 113.603 327.658 111.379 325.472C109.156 323.285 107.887 320.308 107.85 317.19V289H278.58V317.17C278.554 320.292 277.29 323.275 275.067 325.467C272.843 327.658 269.842 328.879 266.72 328.86Z\" stroke=\"white\" stroke-width=\"2\" stroke-miterlimit=\"10\"></path>\n                      <path d=\"M215 314.07H180.49C179.363 314.092 178.272 313.666 177.457 312.887C176.642 312.107 176.169 311.037 176.14 309.91V298.21C176.143 298.046 176.178 297.885 176.243 297.735C176.308 297.585 176.403 297.449 176.521 297.335C176.639 297.222 176.778 297.133 176.931 297.074C177.083 297.014 177.246 296.986 177.41 296.99H180.29C180.62 296.985 180.938 297.11 181.176 297.338C181.414 297.567 181.552 297.88 181.56 298.21V308.21C181.57 308.559 181.718 308.89 181.971 309.132C182.223 309.373 182.561 309.505 182.91 309.5H212.62C212.969 309.505 213.307 309.373 213.559 309.132C213.812 308.89 213.96 308.559 213.97 308.21V298.21C213.973 298.046 214.008 297.885 214.073 297.735C214.138 297.585 214.233 297.449 214.351 297.335C214.469 297.222 214.608 297.133 214.761 297.074C214.913 297.014 215.076 296.986 215.24 296.99H218.12C218.45 296.985 218.768 297.11 219.006 297.338C219.244 297.567 219.382 297.88 219.39 298.21V309.9C219.361 311.027 218.888 312.097 218.073 312.877C217.258 313.656 216.167 314.081 215.04 314.06\" fill=\"#A67EE5\"></path>\n                      <path d=\"M215 314.07H180.49C179.363 314.092 178.272 313.666 177.457 312.887C176.642 312.107 176.169 311.037 176.14 309.91V298.21C176.143 298.046 176.178 297.885 176.243 297.735C176.308 297.585 176.403 297.449 176.521 297.335C176.639 297.222 176.778 297.133 176.931 297.074C177.083 297.014 177.246 296.986 177.41 296.99H180.29C180.62 296.985 180.938 297.11 181.176 297.338C181.414 297.567 181.552 297.88 181.56 298.21V308.21C181.57 308.559 181.718 308.89 181.971 309.132C182.223 309.373 182.561 309.505 182.91 309.5H212.62C212.969 309.505 213.307 309.373 213.559 309.132C213.812 308.89 213.96 308.559 213.97 308.21V298.21C213.973 298.046 214.008 297.885 214.073 297.735C214.138 297.585 214.233 297.449 214.351 297.335C214.469 297.222 214.608 297.133 214.761 297.074C214.913 297.014 215.076 296.986 215.24 296.99H218.12C218.45 296.985 218.768 297.11 219.006 297.338C219.244 297.567 219.382 297.88 219.39 298.21V309.9C219.377 310.463 219.253 311.017 219.025 311.531C218.797 312.046 218.47 312.51 218.062 312.898C217.654 313.285 217.173 313.588 216.648 313.789C216.122 313.991 215.562 314.086 215 314.07V314.07Z\" stroke=\"white\" stroke-width=\"2\" stroke-miterlimit=\"10\"></path>\n                      <path d=\"M147.68 282.19H138.58V294.71H147.68V282.19Z\" fill=\"#A67EE5\"></path>\n                      <path d=\"M147.68 282.19H138.58V294.71H147.68V282.19Z\" stroke=\"white\" stroke-width=\"2\" stroke-miterlimit=\"10\"></path>\n                      <path d=\"M256.95 282.19H247.85V294.71H256.95V282.19Z\" fill=\"#A67EE5\"></path>\n                      <path d=\"M256.95 282.19H247.85V294.71H256.95V282.19Z\" stroke=\"white\" stroke-width=\"2\" stroke-miterlimit=\"10\"></path>\n                      <path d=\"M278.58 317.11V307.24H268.18C266.678 307.277 265.252 307.908 264.215 308.996C263.178 310.083 262.615 311.538 262.65 313.04V328.86H267.38C273.54 328.86 278.58 323.57 278.58 317.11\" fill=\"#A67EE5\"></path>\n                      <path d=\"M278.58 317.11V307.24H268.18C266.678 307.277 265.252 307.908 264.215 308.996C263.178 310.083 262.615 311.538 262.65 313.04V328.86H267.38C273.54 328.86 278.58 323.58 278.58 317.11Z\" stroke=\"white\" stroke-width=\"2\" stroke-miterlimit=\"10\"></path>\n                      <path d=\"M100 301.54H79.22C78.9548 301.54 78.7004 301.435 78.5129 301.247C78.3254 301.06 78.22 300.805 78.22 300.54V298C78.22 297.735 78.3254 297.48 78.5129 297.293C78.7004 297.105 78.9548 297 79.22 297H100C100.265 297 100.52 297.105 100.707 297.293C100.895 297.48 101 297.735 101 298V300.58C101 300.845 100.895 301.1 100.707 301.287C100.52 301.475 100.265 301.58 100 301.58\" fill=\"#A67EE5\"></path>\n                      <path d=\"M100 301.54H79.22C78.9548 301.54 78.7004 301.435 78.5129 301.247C78.3254 301.06 78.22 300.805 78.22 300.54V298C78.22 297.735 78.3254 297.48 78.5129 297.293C78.7004 297.105 78.9548 297 79.22 297H100C100.265 297 100.52 297.105 100.707 297.293C100.895 297.48 101 297.735 101 298V300.58C100.99 300.838 100.88 301.082 100.693 301.261C100.507 301.44 100.258 301.54 100 301.54Z\" stroke=\"white\" stroke-width=\"2\" stroke-miterlimit=\"10\"></path>\n                    </g>\n                    <g id=\"bird\" opacity=\"0\">\n                      <path id=\"bird-wing\" d=\"M279.2 183.8C279.192 182.687 279.565 181.605 280.256 180.732C280.947 179.859 281.915 179.248 283 179L301.5 171.5C293.72 186.34 284.89 188.67 284.07 188.67C282.779 188.657 281.546 188.135 280.637 187.217C279.729 186.3 279.22 185.061 279.22 183.77\" fill=\"white\"></path>\n                      <path id=\"bird-body\" d=\"M262.24 169.86H273C273.355 168.987 273.966 168.242 274.754 167.724C275.541 167.206 276.468 166.939 277.41 166.96C278.093 166.923 278.774 167.066 279.385 167.375C279.996 167.684 280.515 168.148 280.89 168.72C281.44 169.531 281.899 170.399 282.26 171.31C282.89 172.88 286.26 187.11 288.15 190.47C289.25 192.47 292.54 197.63 292.54 197.63C292.743 197.979 292.849 198.376 292.85 198.78V208C292.85 208 289.74 206.92 289.74 204.09V197.56C287.83 197.83 283.74 195.91 281.41 194.68C278.52 193.3 276.251 190.889 275.05 187.92C273.838 184.994 273.799 181.714 274.94 178.76C275.408 177.857 275.677 176.865 275.73 175.85C275.67 174.71 274.34 173.13 273.55 171.8L262.24 169.86Z\" fill=\"white\"></path>\n                    </g>\n                    <g id=\"plant-additional-2\" opacity=\"0\">\n                      <path d=\"M141.77 204.16C165.87 236.61 177.58 288.16 177.58 288.16\" stroke=\"#3B7BF2\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n                      <path d=\"M125.73 196.22C132.27 203.73 142.89 205.22 142.89 205.22C142.89 205.22 142.89 194.5 136.36 187C129.83 179.5 119.19 178 119.19 178C119.19 178 119.19 188.72 125.73 196.22\" fill=\"#76ABFF\"></path>\n                      <path d=\"M153.17 206.54C150.48 216.12 155.08 225.81 155.08 225.81C155.08 225.81 164.08 219.95 166.75 210.36C169.42 200.77 164.84 191.09 164.84 191.09C164.84 191.09 155.84 196.95 153.17 206.54Z\" fill=\"#3B7BF2\"></path>\n                      <path d=\"M135.82 227.71C145.41 230.41 155.08 225.8 155.08 225.8C155.08 225.8 149.22 216.8 139.63 214.13C130.04 211.46 120.37 216 120.37 216C120.37 216 126.24 225 135.82 227.67\" fill=\"#3B7BF2\"></path>\n                      <path d=\"M166.1 232.52C162.69 241.88 166.57 251.87 166.57 251.87C166.57 251.87 175.96 246.69 179.36 237.34C182.76 227.99 178.89 218 178.89 218C178.89 218 169.5 223.18 166.1 232.53\" fill=\"#1553B7\"></path>\n                      <path d=\"M147.22 252.35C156.58 255.75 166.57 251.88 166.57 251.88C166.57 251.88 161.39 242.49 152.03 239.09C142.67 235.69 132.68 239.56 132.68 239.56C132.68 239.56 137.86 248.95 147.22 252.35Z\" fill=\"#1553B7\"></path>\n                    </g>\n                    <g id=\"plant-additional-1\" opacity=\"0\">\n                      <path d=\"M183.79 264.77C186.09 273.87 181.52 282.89 181.52 282.89C181.52 282.89 173.2 277.15 170.89 268.04C168.58 258.93 173.16 249.92 173.16 249.92C173.16 249.92 181.48 255.67 183.79 264.77Z\" fill=\"#3B7BF2\"></path>\n                      <path d=\"M199.63 285.16C190.52 287.47 181.51 282.89 181.51 282.89C181.51 282.89 187.25 274.57 196.36 272.26C205.47 269.95 214.48 274.53 214.48 274.53C214.48 274.53 208.73 282.85 199.63 285.16Z\" fill=\"#3B7BF2\"></path>\n                      <path d=\"M188.56 271.67C184.751 276.967 181.307 282.516 178.25 288.28\" stroke=\"#3B7BF2\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n                      <path d=\"M203.69 264.19C197.52 271.27 187.5 272.63 187.5 272.63C187.5 272.63 187.5 262.52 193.66 255.45C199.82 248.38 209.85 247 209.85 247C209.85 247 209.85 257.11 203.69 264.19Z\" fill=\"#76ABFF\"></path>\n                    </g>\n                    <g id=\"case-cover-close\">\n                      <path d=\"M225.88 258.06H82.68C79.6086 258.073 76.6673 259.302 74.4993 261.478C72.3312 263.653 71.1126 266.599 71.11 269.67V289.42H237.44V269.66C237.437 266.59 236.22 263.646 234.054 261.471C231.888 259.296 228.95 258.066 225.88 258.05\" fill=\"#A67EE5\"></path>\n                      <path d=\"M225.88 258.06H82.68C79.6086 258.073 76.6673 259.302 74.4993 261.478C72.3312 263.653 71.1126 266.599 71.11 269.67V289.42H237.44V269.66C237.435 266.592 236.216 263.651 234.051 261.477C231.885 259.304 228.948 258.076 225.88 258.06Z\" stroke=\"white\" stroke-width=\"2\" stroke-miterlimit=\"10\"></path>\n                      <path d=\"M267.11 258.06H119.23C116.111 258.028 113.107 259.231 110.872 261.406C108.637 263.581 107.353 266.552 107.3 269.67V289.42H279V269.66C278.947 266.542 277.663 263.571 275.428 261.396C273.193 259.221 270.189 258.018 267.07 258.05\" fill=\"#A67EE5\"></path>\n                      <path d=\"M267.11 258.06H119.23C116.111 258.028 113.107 259.231 110.872 261.406C108.637 263.581 107.353 266.552 107.3 269.67V289.42H279V269.66C278.945 266.55 277.665 263.588 275.439 261.416C273.213 259.244 270.22 258.038 267.11 258.06V258.06Z\" stroke=\"white\" stroke-width=\"2\" stroke-miterlimit=\"10\"></path>\n                      <path d=\"M278.74 279.41C279.797 279.414 280.831 279.104 281.712 278.52C282.593 277.935 283.281 277.103 283.688 276.127C284.095 275.152 284.204 274.078 284 273.041C283.796 272.003 283.289 271.05 282.543 270.301C281.797 269.552 280.846 269.042 279.809 268.834C278.773 268.626 277.698 268.731 276.721 269.135C275.744 269.538 274.909 270.223 274.321 271.101C273.734 271.98 273.42 273.013 273.42 274.07C273.417 274.77 273.553 275.464 273.819 276.112C274.085 276.76 274.477 277.349 274.971 277.845C275.465 278.341 276.053 278.735 276.7 279.003C277.346 279.272 278.04 279.41 278.74 279.41Z\" fill=\"#A67EE5\"></path>\n                      <path d=\"M278.74 279.41C281.673 279.41 284.05 277.019 284.05 274.07C284.05 271.121 281.673 268.73 278.74 268.73C275.807 268.73 273.43 271.121 273.43 274.07C273.43 277.019 275.807 279.41 278.74 279.41Z\" stroke=\"white\" stroke-width=\"2\" stroke-miterlimit=\"10\"></path>\n                      <path d=\"M277.62 269.66V279.41H266.89C266.139 279.409 265.395 279.259 264.702 278.971C264.008 278.682 263.378 278.26 262.848 277.728C262.318 277.195 261.898 276.564 261.612 275.87C261.325 275.175 261.179 274.431 261.18 273.68V258.06H266.06C269.13 258.073 272.071 259.302 274.237 261.478C276.404 263.654 277.62 266.599 277.62 269.67\" fill=\"#A67EE5\"></path>\n                      <path d=\"M277.62 269.66V279.41H266.89C266.139 279.409 265.395 279.259 264.702 278.971C264.008 278.682 263.378 278.26 262.848 277.728C262.318 277.195 261.898 276.564 261.612 275.87C261.325 275.175 261.179 274.431 261.18 273.68V258.06H266.06C269.129 258.073 272.067 259.301 274.234 261.475C276.4 263.648 277.617 266.591 277.62 269.66Z\" stroke=\"white\" stroke-width=\"2\" stroke-miterlimit=\"10\"></path>\n                    </g>\n                    <path d=\"M46.24 329H303.76\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n                  </g>\n                  <animate href=\"#additional-reward\" attributeName=\"opacity\" to=\"1\" dur=\"0.1s\" begin=\"indefinite\" id=\"additionalAwardBegin\"></animate>\n                  <set href=\"#case-cover-close\" attributeName=\"opacity\" to=\"0\" begin=\"additionalAwardBegin.begin + 0.4s\" id=\"caseClose\"></set>\n                  <set href=\"#case-cover-open\" attributeName=\"opacity\" to=\"1\" begin=\"caseClose.begin\"></set>\n                  <set href=\"#bird\" attributeName=\"opacity\" to=\"1\" begin=\"additionalAwardBegin.begin + 0.4s\"></set>\n                  <set href=\"#bubble-additional-award\" attributeName=\"opacity\" to=\"1\" begin=\"additionalAwardBegin.begin + 0.4s\"></set>\n                  <set href=\"#string\" attributeName=\"opacity\" to=\"1\" begin=\"additionalAwardBegin.begin + 0.4s\"></set>\n                  <set href=\"#plant-additional-1\" attributeName=\"opacity\" to=\"1\" begin=\"additionalAwardBegin.begin + 0.4s\"></set>\n                  <set href=\"#plant-additional-2\" attributeName=\"opacity\" to=\"1\" begin=\"additionalAwardBegin.begin + 0.4s\"></set>\n                  <set href=\"#flower\" attributeName=\"opacity\" to=\"1\" begin=\"additionalAwardBegin.begin + 0.4s\"></set>\n                  <animate href=\"#bird-wing\" attributeName=\"d\" values=\"\n      M279.2 183.8C279.192 182.687 279.565 181.605 280.256 180.732C280.947 179.859 281.915 179.248 283 179L301.5 171.5C293.72 186.34 284.89 188.67 284.07 188.67C282.779 188.657 281.546 188.135 280.637 187.217C279.729 186.3 279.22 185.061 279.22 183.77;\n      M286 185.105C286.008 186.272 285.607 187.407 284.864 188.322C284.12 189.237 283.078 189.877 281.91 190.137L262 198C270.373 182.443 279.876 180 280.759 180C282.148 180.014 283.476 180.561 284.453 181.523C285.43 182.485 285.978 183.784 285.978 185.137;\n      M279.2 183.8C279.192 182.687 279.565 181.605 280.256 180.732C280.947 179.859 281.915 179.248 283 179L301.5 171.5C293.72 186.34 284.89 188.67 284.07 188.67C282.779 188.657 281.546 188.135 280.637 187.217C279.729 186.3 279.22 185.061 279.22 183.77\n    \" dur=\"0.2s\" begin=\"additionalAwardBegin.begin + 0.4s\" repeatCount=\"indefinite\" calcMode=\"spline\" keySplines=\"0.42,0,0.58,1; 0.42,0,0.58,1\"></animate>\n                  <animateMotion href=\"#bird\" id=\"birdFlyOut\" dur=\"0.6s\" calcMode=\"linear\" keyPoints=\"0; 1\" keyTimes=\"0; 1\" begin=\"additionalAwardBegin.begin + 0.4s\">\n                    <mpath href=\"#bird-path\"></mpath>\n                  </animateMotion>\n                  <animateTransform href=\"#bird\" attributeName=\"transform\" type=\"rotate\" values=\"\n                      -12, 262, 166;\n                      6, 262, 166;\n                      0, 262, 166\n                    \" dur=\"0.6s\" begin=\"additionalAwardBegin.begin + 0.4s\"></animateTransform>\n                  <animateTransform href=\"#bird\" attributeName=\"transform\" type=\"rotate\" values=\"\n                      -6, 262, 166;\n                      3, 262, 166;\n                      0, 262, 166\n                    \" dur=\".4s\" begin=\"birdFlyOut.end\"></animateTransform>\n                  <animateMotion href=\"#bird\" values=\"0,0; 10, -10; 0,0\" repeatCount=\"indefinite\" dur=\"1.2s\" calcMode=\"spline\" keySplines=\"0.42, 0, 0.58, 1; 0.42, 0, 0.58, 1\" begin=\"birdFlyOut.end + 0.4s\"></animateMotion>\n                  <animateTransform href=\"#bird\" attributeName=\"transform\" type=\"rotate\" repeatCount=\"indefinite\" values=\"\n                      0, 262, 166;\n                      -6, 262, 166;\n                      0, 262, 166;\n                      6, 262, 166;\n                      0, 262, 166\n                    \" dur=\"1.2s\" calcMode=\"spline\" keySplines=\"0,1,1,1; 0,0,0.58,1; 0,1,1,1; 0,0,0.58,1\" begin=\"birdFlyOut.end\"></animateTransform>\n                  <animateTransform href=\"#plant-additional-1\" attributeName=\"transform\" type=\"rotate\" values=\"\n                      30, 178, 288;\n                      -2.5, 178, 288;\n                      4, 178, 288;\n                      -1.5, 178, 288;\n                      3, 178, 288;\n                      -0.5, 178, 288;\n                      2, 178, 288;\n                      -0.5, 178, 288;\n                      0, 178, 288\n                    \" dur=\"4.4s\" begin=\"caseClose.begin\" calcMode=\"spline\" keySplines=\"\n                      0.25, 0.1, 0.25, 1;\n                      0.25, 0.1, 0.25, 1;\n                      0.25, 0.1, 0.25, 1;\n                      0.25, 0.1, 0.25, 1;\n                      0.25, 0.1, 0.25, 1;\n                      0.25, 0.1, 0.25, 1;\n                      0.25, 0.1, 0.25, 1;\n                      0.25, 0.1, 0.25, 1\n                    \" keyTimes=\"0; 0.125; 0.25; 0.375; 0.5; 0.675; 0.75; 0.875; 1\"></animateTransform>\n                  <animateTransform href=\"#plant-additional-2\" attributeName=\"transform\" type=\"rotate\" values=\"\n                      60, 178, 288;\n                      -3.5, 178, 288;\n                      3, 178, 288;\n                      -2.5, 178, 288;\n                      2, 178, 288;\n                      -1.5, 178, 288;\n                      1, 178, 288;\n                      -0.5, 178, 288;\n                      0, 178, 288\n                    \" dur=\"4s\" begin=\"caseClose.begin\" calcMode=\"spline\" keySplines=\"\n                      0.25, 0.1, 0.25, 1;\n                      0.25, 0.1, 0.25, 1;\n                      0.25, 0.1, 0.25, 1;\n                      0.25, 0.1, 0.25, 1;\n                      0.25, 0.1, 0.25, 1;\n                      0.25, 0.1, 0.25, 1;\n                      0.25, 0.1, 0.25, 1;\n                      0.25, 0.1, 0.25, 1\n                    \" keyTimes=\"0; 0.125; 0.25; 0.375; 0.5; 0.675; 0.75; 0.875; 1\"></animateTransform>\n                  <animateTransform href=\"#flower\" attributeName=\"transform\" type=\"rotate\" values=\"\n                      60, 178, 288;\n                      -3, 178, 288;\n                      2, 178, 288;\n                      -1, 178, 288;\n                      0, 178, 288\n                    \" dur=\"1.6s\" begin=\"caseClose.begin\" calcMode=\"spline\" keySplines=\"\n                      0.25, 0.1, 0.25, 1;\n                      0.25, 0.1, 0.25, 1;\n                      0.25, 0.1, 0.25, 1;\n                      0.25, 0.1, 0.25, 1\n                    \" keyTimes=\"0; 0.4; 0.6; 0.8; 1\"></animateTransform>\n                  <animate href=\"#string\" attributeName=\"d\" values=\"\n              M107.65 289.02L107.65 289.02;\n              M102.65 163L107.65 289.02;\n              M107.65 171L107.65 289.02;\n              M111.65 165L107.65 289.02;\n              M107.65 169L107.65 289.02;\n              M104.65 167L107.65 289.02;\n              M107.65 169L107.65 289.02;\n              M107.65 167L107.65 289.02\n            \" dur=\"2s\" begin=\"caseClose.begin\" calcMode=\"spline\" keySplines=\"\n             0.17,0.67,0.73,0.99;\n             0, 0.5, 0.5, 1;\n             0.5, 0.5, 1, 0.5;\n             0, 0.5, 0.5, 1;\n             0.5, 0.5, 1, 0.5;\n             0, 0.5, 0.5, 1;\n             0.5, 0.5, 1, 0.5\n           \" keyTimes=\"0; 0.25; 0.375; 0.5; 0.675; 0.75; 0.875; 1\"></animate>\n                  <animateTransform href=\"#bubble-additional-award\" attributeName=\"transform\" type=\"rotate\" dur=\"2s\" begin=\"caseClose.begin\" values=\"\n                      45, 107.65, 167;\n                      -9, 107.65, 167;\n                      6, 107.65, 167;\n                      -3, 107.65, 167;\n                      1, 107.65, 167;\n                      0, 107.65, 167\n                    \" keyTimes=\"0; 0.375; 0.5; 0.75; 0.875; 1\"></animateTransform>\n                  <animateMotion href=\"#bubble-additional-award\" dur=\"2s\" begin=\"caseClose.begin\" values=\"\n                    0, 122;\n                    -5, -4;\n                    0, 4;\n                    4, -2;\n                    0, 2;\n                    -3, 0;\n                    0, 2;\n                    0, 0\n                  \" calcMode=\"spline\" keySplines=\"\n                     0.17,0.67,0.73,0.99;\n                     0, 0.5, 0.5, 1;\n                     0.5, 0.5, 1, 0.5;\n                     0, 0.5, 0.5, 1;\n                     0.5, 0.5, 1, 0.5;\n                     0, 0.5, 0.5, 1;\n                     0.5, 0.5, 1, 0.5\n                   \" keyTimes=\"0; 0.25; 0.375; 0.5; 0.675; 0.75; 0.875; 1\" additive=\"sum\"></animateMotion>\n                </svg>\n              </div>\n              <p class=\"prizes__desc\">\n                <b>900</b>\n                <span>\n                  промокодов на&nbsp;скидку 15%\n                  <svg width=\"10\" height=\"10\" viewBox=\"0 0 10 10\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M0 6.35337L3.90271 4.99012L0 3.64663L1.34615 1.32374L4.44287 4.01073L3.67364 0H6.34615L5.57692 4.01073L8.65385 1.32374L10 3.64663L6.13405 4.99012L10 6.35337L8.65385 8.65651L5.57692 5.98927L6.34615 10H3.67364L4.44287 5.96952L1.34615 8.65651L0 6.35337Z\" fill=\"currentColor\"></path>\n                  </svg>\n                </span>\n              </p>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"screen__footer js-footer\">\n        <button class=\"screen__footer-enlarge js-footer-toggler\" type=\"button\" aria-label=\"Показать сообщение\">\n          <svg width=\"10\" height=\"10\" viewBox=\"0 0 10 10\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M0 6.35337L3.90271 4.99012L0 3.64663L1.34615 1.32374L4.44287 4.01073L3.67364 0H6.34615L5.57692 4.01073L8.65385 1.32374L10 3.64663L6.13405 4.99012L10 6.35337L8.65385 8.65651L5.57692 5.98927L6.34615 10H3.67364L4.44287 5.96952L1.34615 8.65651L0 6.35337Z\" fill=\"currentColor\"></path>\n          </svg>\n        </button>\n        <button class=\"screen__footer-collapse js-footer-toggler\" type=\"button\" aria-label=\"Скрыть сообщение\">\n          <svg width=\"13\" height=\"13\" viewBox=\"0 0 13 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <line x1=\"12.3536\" y1=\"0.353553\" x2=\"0.738349\" y2=\"11.9688\" stroke=\"currentColor\"></line>\n            <line x1=\"0.738319\" y1=\"0.539925\" x2=\"12.3535\" y2=\"12.1551\" stroke=\"currentColor\"></line>\n          </svg>\n        </button>\n        <div class=\"screen__footer-wrapper\">\n          <div class=\"screen__footer-announce\">\n            <p class=\"screen__footer-label\">Даты проведения конкурса:</p>\n            <p class=\"screen__footer-date\">01 — 31.05 / 2020</p>\n          </div>\n          <div class=\"screen__footer-note\">\n            <p>\n              <svg width=\"10\" height=\"10\" viewBox=\"0 0 10 10\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M0 6.35337L3.90271 4.99012L0 3.64663L1.34615 1.32374L4.44287 4.01073L3.67364 0H6.34615L5.57692 4.01073L8.65385 1.32374L10 3.64663L6.13405 4.99012L10 6.35337L8.65385 8.65651L5.57692 5.98927L6.34615 10H3.67364L4.44287 5.96952L1.34615 8.65651L0 6.35337Z\" fill=\"currentColor\"></path>\n              </svg>\n              <span>Скидка&nbsp;15% на&nbsp;единоразовое приобретение путёвки с&nbsp;1&nbsp;июня 2020 по&nbsp;31&nbsp;мая 2022&nbsp;года. Суммируется с&nbsp;другими акциями</span>\n            </p>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"screen screen--hidden screen--rules js-scrollspy\" id=\"rules\">\n      <div class=\"screen__wrapper\">\n        <div class=\"rules\">\n          <h2 class=\"rules__title\">Правила</h2>\n          <div class=\"rules__lead\">\n            <p>Для того чтобы получить наследство Джеймса Таргета, тебе нужно выведать у&nbsp;&laquo;Сони&raquo;, куда предстоит отправиться тебе в&nbsp;случае победы</p>\n          </div>\n          <ol class=\"rules__list\">\n            <li class=\"rules__item\">\n              <p>Тебе отводится <br>5&nbsp;минут</p>\n            </li>\n            <li class=\"rules__item\">\n              <p>Задавай любые вопросы в&nbsp;текстовом поле</p>\n            </li>\n            <li class=\"rules__item\">\n              <p>Нажимай кнопку &laquo;Узнать&raquo;, чтобы получить ответ</p>\n            </li>\n            <li class=\"rules__item\">\n              <p>&laquo;Соня&raquo; может отвечать только&nbsp;Да или Нет</p>\n            </li>\n          </ol>\n          <a href=\"#game\" class=\"rules__link btn\"><span>Погнали!</span></a>\n        </div>\n      </div>\n      <div class=\"screen__disclaimer\">\n        <div class=\"disclaimer\">\n          <ul>\n            <li>\n              <a href=\"#\">Правовая информация</a>\n            </li>\n            <li>\n              <a href=\"#\">Подробные правила</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"screen screen--hidden screen--game js-scrollspy\" id=\"game\">\n      <div class=\"screen__wrapper\">\n        <div class=\"game\">\n          <div class=\"game__header\">\n            <h2 class=\"game__title\">Игра</h2>\n            <div class=\"game__counter\">\n              <span>05</span>:<span>00</span>\n            </div>\n          </div>\n          <div class=\"game__body\">\n            <div class=\"chat\">\n              <div class=\"chat__body js-chat\">\n                <ul class=\"chat__list\" id=\"messages\"></ul>\n              </div>\n              <div class=\"chat__footer\">\n                <form action=\"#\" method=\"post\" class=\"form\" id=\"message-form\">\n                  <label for=\"message-field\" class=\"visually-hidden\">Поле для ввода вопроса</label>\n                  <div class=\"form__field\">\n                    <input type=\"text\" id=\"message-field\">\n                  </div>\n                  <button class=\"form__button btn\">\n                    Узнать\n                    <svg width=\"18\" height=\"19\" viewBox=\"0 0 18 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                      <path stroke=\"currentColor\" stroke-width=\"2\" d=\"M9 19V1\"></path>\n                      <path d=\"M1 9l8-8 8 8\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linejoin=\"round\"></path>\n                    </svg>\n                  </button>\n                </form>\n              </div>\n            </div>\n          </div>\n          <!-- временные кнопки для показа результата -->\n          <div class=\"game__buttons\" style=\"display: block\">\n            <button class=\"game__button btn js-show-result\" type=\"button\" data-target=\"result\">Положительный результат</button>\n            <button class=\"game__button btn js-show-result\" type=\"button\" data-target=\"result2\">Положительный результат - 2</button>\n            <button class=\"game__button btn js-show-result\" type=\"button\" data-target=\"result3\">Отрицательный результат</button>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"screen screen--hidden screen--result\" id=\"result\">\n      <div class=\"screen__wrapper\">\n        <div class=\"result result--trip\">\n          <div class=\"result__image\">\n<!--            <picture>-->\n<!--              <source srcset=\"img/result1-mob.png 1x, img/result1-mob@2x.png 2x\" media=\"(max-width: 768px) and (orientation: portrait)\">-->\n<!--              <img src=\"img/result1.png\" srcset=\"img/result1@2x.png 2x\" alt=\"\">-->\n<!--            </picture>-->\n            <canvas id=\"win-primary-scene\"></canvas>\n          </div>\n          <h2 class=\"result__title\">\n            <span class=\"visually-hidden\">ПОбеда!</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 568.85 109.24\" style=\"overflow: visible\">\n              <g id=\"win-heading\">\n                <path id=\"win-heading-p\" d=\"M16,24.44V92H2.6V8H75V92H61.52V24.44H16Z\" transform=\"translate(-2.1 -1.5)\" fill=\"none\" stroke=\"currentColor\" stroke-dasharray=\"3, 146, 3, 146, 3, 146\"></path>\n                <g id=\"win-heading-o\">\n                  <path id=\"win-heading-o-in\" d=\"M146.66 76.22C171.14 76.22 191.06 63.86 191.06 48.5C191.06 33.14 171.14 20.66 146.66 20.66C121.9 20.66 101.9 33.02 101.9 48.5C101.9 63.98 121.9 76.22 146.66 76.22Z\" fill=\"none\" stroke=\"currentColor\"></path>\n                  <path id=\"win-heading-o-out\" d=\"M146.66 4.1C179.54 4.1 206.18 24.02 206.18 48.5C206.18 72.98 179.54 92.9 146.66 92.9C113.78 92.9 87.14 72.98 87.14 48.5C87.14 24.02 113.78 4.1 146.66 4.1Z\" fill=\"none\" stroke=\"currentColor\"></path>\n                </g>\n                <g id=\"win-heading-b\">\n                  <path id=\"win-heading-b-in\" d=\"M254.78 75.02C269.9 75.02 278.3 73.02 278.3 63.5C278.3 53.98 269.9 52.94 254.78 52.94H233.9V75.02H254.78Z\" fill=\"none\" stroke=\"currentColor\"></path>\n                  <path id=\"win-heading-b-out\" d=\"M285.26 6.5V22.94H233.9V37.34H259.22C284.66 37.34 293.22 48.5 293.22 63.86C293.22 79.46 284.7 90.5 259.22 90.5H220.46V6.5H285.26Z\" fill=\"none\" stroke=\"currentColor\"></path>\n                </g>\n                <path id=\"win-heading-e\" d=\"M369.37 6.5V22.94H318.74V40.1H352.34V56.5H318.74V74.06H369.38V90.5H305.3V6.5H369.38H369.37Z\" fill=\"none\" stroke=\"currentColor\"></path>\n                <g id=\"win-heading-d\">\n                  <path id=\"win-heading-d-in\" d=\"M432.01 74.06V22.94H409.45V26.06C408.97 48.5 406.21 63.74 402.25 74.06H432.01Z\" fill=\"none\" stroke=\"currentColor\"></path>\n                  <path id=\"win-heading-d-out\" d=\"M380.29 108.74V74.06H387.73C392.29 69.38 395.53 55.7 396.49 18.06L396.9 6.5H445.5V74.06H455.5V108.74H440.77V90.5H394.9V108.74H380.29Z\" fill=\"none\" stroke=\"currentColor\"></path>\n                </g>\n                <g id=\"win-heading-a\">\n                  <path id=\"win-heading-a-in\" d=\"M518.29 50.5L504.9 10.34L491.41 50.5H518.29Z\" fill=\"none\" stroke=\"currentColor\"></path>\n                  <path id=\"win-heading-a-out\" d=\"M461.65 90.5L489.65 6.5H516.77L544.85 90.5H531.37L523.57 66.98H485.77L477.97 90.5H461.65Z\" fill=\"none\" stroke=\"currentColor\"></path>\n                </g>\n                <g id=\"win-heading-exclamation\">\n                  <path id=\"win-heading-exclamation-round\" d=\"M560.3 75.26C565.1 75.26 568.3 78.5 568.3 83.42C568.3 85.5523 567.453 87.5974 565.945 89.1051C564.437 90.6129 562.392 91.46 560.26 91.46C558.128 91.46 556.083 90.6129 554.575 89.1051C553.067 87.5974 552.22 85.5523 552.22 83.42C552.25 78.5 555.49 75.26 560.29 75.26H560.3Z\" fill=\"none\" stroke=\"currentColor\"></path>\n                  <path id=\"win-heading-exclamation-rect\" d=\"M552.02 68.9L553.45 0.5H566.9L568.34 68.9H552.02Z\" fill=\"none\" stroke=\"currentColor\"></path>\n                </g>\n              </g>\n              <animate href=\"#win-heading\" attributeName=\"opacity\" to=\"1\" id=\"winHeadingBegin\" begin=\"indefinite\"></animate>\n              <animateTransform href=\"#win-heading\" attributeName=\"transform\" type=\"scale\" from=\"1.1\" to=\"1\" dur=\"0.4s\" begin=\"winHeadingBegin.begin\" additive=\"sum\"></animateTransform>\n              <animateTransform href=\"#win-heading\" attributeName=\"transform\" type=\"translate\" from=\"-28.4425, -5.462\" to=\"0, 0\" dur=\"0.4s\" begin=\"winHeadingBegin.begin\" additive=\"sum\"></animateTransform>\n\n              <animate href=\"#win-heading-p\" attributeName=\"stroke-dashoffset\" from=\"-36\" to=\"0\" dur=\"0.4s\" begin=\"winHeadingBegin.begin\"></animate>\n              <animate href=\"#win-heading-p\" attributeName=\"stroke-dasharray\" from=\"3, 146, 3, 146, 3, 146\" to=\"149, 0, 149, 0, 149, 0\" dur=\"0.4s\" begin=\"winHeadingBegin.begin\" fill=\"freeze\"></animate>\n\n              <animate href=\"#win-heading-o-out\" attributeName=\"stroke-dashoffset\" from=\"-30\" to=\"30\" dur=\"0.4s\" begin=\"winHeadingBegin.begin\"></animate>\n              <animate href=\"#win-heading-o-out\" attributeName=\"stroke-dasharray\" from=\"3, 106.334, 3, 106.334, 3, 106.334\" to=\"109.334, 0, 109.334, 0, 109.334, 0\" dur=\"0.4s\" begin=\"winHeadingBegin.begin\" fill=\"freeze\"></animate>\n              <animate href=\"#win-heading-o-in\" attributeName=\"stroke-dashoffset\" from=\"-35\" to=\"0\" dur=\"0.4s\" begin=\"winHeadingBegin.begin\"></animate>\n              <animate href=\"#win-heading-o-in\" attributeName=\"stroke-dasharray\" from=\"3, 74, 3, 74, 3, 74\" to=\"77, 0, 77, 0, 77, 0\" dur=\"0.4s\" begin=\"winHeadingBegin.begin\" fill=\"freeze\"></animate>\n\n              <animate href=\"#win-heading-b-out\" attributeName=\"stroke-dashoffset\" from=\"-24.125\" to=\"24.125\" dur=\"0.4s\" begin=\"winHeadingBegin.begin\"></animate>\n              <animate href=\"#win-heading-b-out\" attributeName=\"stroke-dasharray\" from=\"3, 95.5, 3, 95.5, 3, 95.5, 3, 95.5\" to=\"98.5, 0, 98.5, 0, 98.5, 0, 98.5, 0\" dur=\"0.4s\" begin=\"winHeadingBegin.begin\" fill=\"freeze\"></animate>\n              <animate href=\"#win-heading-b-in\" attributeName=\"stroke-dashoffset\" from=\"-20.33\" to=\"10.33\" dur=\"0.4s\" begin=\"winHeadingBegin.begin\"></animate>\n              <animate href=\"#win-heading-b-in\" attributeName=\"stroke-dasharray\" from=\"3, 58.32, 3, 58.32\" to=\"61.32, 0, 61.32, 0\" dur=\"0.4s\" begin=\"winHeadingBegin.begin\" fill=\"freeze\"></animate>\n\n              <animate href=\"#win-heading-e\" attributeName=\"stroke-dashoffset\" from=\"-20.0625\" to=\"38.0625\" dur=\"0.4s\" begin=\"winHeadingBegin.begin\"></animate>\n              <animate href=\"#win-heading-e\" attributeName=\"stroke-dasharray\" from=\"3, 113.25, 3, 113.25, 3, 113.25, 3, 113.25\" to=\"116.25, 0, 116.25, 0, 116.25, 0, 116.25, 0\" dur=\"0.4s\" begin=\"winHeadingBegin.begin\" fill=\"freeze\"></animate>\n\n              <animate href=\"#win-heading-d-out\" attributeName=\"stroke-dashoffset\" from=\"-24\" to=\"24\" dur=\"0.4s\" begin=\"winHeadingBegin.begin\"></animate>\n              <animate href=\"#win-heading-d-out\" attributeName=\"stroke-dasharray\" from=\"3, 93, 3, 93, 3, 93, 3, 93\" to=\"96, 0, 96, 0, 96, 0, 96, 0\" dur=\"0.4s\" begin=\"winHeadingBegin.begin\" fill=\"freeze\"></animate>\n              <animate href=\"#win-heading-d-in\" attributeName=\"stroke-dashoffset\" from=\"-38\" to=\"38\" dur=\"0.4s\" begin=\"winHeadingBegin.begin\"></animate>\n              <animate href=\"#win-heading-d-in\" attributeName=\"stroke-dasharray\" from=\"3, 75, 3, 75\" to=\"78, 0, 78, 0\" dur=\"0.4s\" begin=\"winHeadingBegin.begin\" fill=\"freeze\"></animate>\n\n              <animate href=\"#win-heading-a-out\" attributeName=\"stroke-dashoffset\" from=\"-21\" to=\"21\" dur=\"0.4s\" begin=\"winHeadingBegin.begin\"></animate>\n              <animate href=\"#win-heading-a-out\" attributeName=\"stroke-dasharray\" from=\"3, 81, 3, 81, 3, 81, 3, 81\" to=\"84, 0, 84, 0, 84, 0, 84, 0\" dur=\"0.4s\" begin=\"winHeadingBegin.begin\" fill=\"freeze\"></animate>\n              <animate href=\"#win-heading-a-in\" attributeName=\"stroke-dashoffset\" from=\"-41\" to=\"15\" dur=\"0.4s\" begin=\"winHeadingBegin.begin\"></animate>\n              <animate href=\"#win-heading-a-in\" attributeName=\"stroke-dasharray\" from=\"3, 109\" to=\"112, 0\" dur=\"0.4s\" begin=\"winHeadingBegin.begin\" fill=\"freeze\"></animate>\n\n              <animate href=\"#win-heading-exclamation-round\" attributeName=\"stroke-dashoffset\" from=\"-10\" to=\"16\" dur=\"0.4s\" begin=\"winHeadingBegin.begin\"></animate>\n              <animate href=\"#win-heading-exclamation-round\" attributeName=\"stroke-dasharray\" from=\"3, 49\" to=\"52, 0\" dur=\"0.4s\" begin=\"winHeadingBegin.begin\" fill=\"freeze\"></animate>\n\n              <animate href=\"#win-heading-exclamation-rect\" attributeName=\"stroke-dashoffset\" from=\"-40.25\" to=\"0\" dur=\"0.4s\" begin=\"winHeadingBegin.begin\"></animate>\n              <animate href=\"#win-heading-exclamation-rect\" attributeName=\"stroke-dasharray\" from=\"3, 80.5, 3, 80.5\" to=\"83.5, 0, 83.5, 0\" dur=\"0.4s\" begin=\"winHeadingBegin.begin\" fill=\"freeze\"></animate>\n            </svg>\n          </h2>\n          <div class=\"result__text\">\n            <p>ты&nbsp;отправляешься в&nbsp;Арктику!</p>\n          </div>\n          <div class=\"result__form\">\n            <form action=\"#\" method=\"post\" class=\"form form--result\">\n              <label for=\"email-field\" class=\"form__label\">зарегистрируй результат</label>\n              <input type=\"email\" class=\"form__field\" id=\"email-field\" placeholder=\"e-mail для регистации результата и получения приза\" required=\"\">\n              <button class=\"form__button btn\">\n                отправить\n                <svg width=\"18\" height=\"19\" viewBox=\"0 0 18 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                  <path stroke=\"currentColor\" stroke-width=\"2\" d=\"M9 19V1\"></path>\n                  <path d=\"M1 9l8-8 8 8\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linejoin=\"round\"></path>\n                </svg>\n              </button>\n            </form>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"screen screen--hidden screen--result\" id=\"result2\">\n      <div class=\"screen__wrapper\">\n        <div class=\"result result--prize\">\n          <div class=\"result__image\">\n            <picture>\n              <source srcset=\"img/result2-mob.png 1x, img/result2-mob@2x.png 2x\" media=\"(max-width: 768px) and (orientation: portrait)\">\n              <img src=\"img/result2.png\" srcset=\"img/result2@2x.png 2x\" alt=\"\">\n            </picture>\n          </div>\n          <h2 class=\"result__title\">\n            <span class=\"visually-hidden\">ПОбеда!</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 568.85 109.24\" style=\"overflow: visible\">\n              <use href=\"#win-heading\"></use>\n            </svg>\n          </h2>\n          <div class=\"result__text\">\n            <p>чемодан &laquo;Fjord&nbsp;Inc.&raquo;&nbsp;твой</p>\n          </div>\n          <div class=\"result__form\">\n            <form action=\"#\" method=\"post\" class=\"form form--result\">\n              <label for=\"email-field2\" class=\"form__label\">зарегистрируй результат</label>\n              <input type=\"email\" class=\"form__field\" id=\"email-field2\" placeholder=\"e-mail для регистации результата и получения приза\" required=\"\">\n              <button class=\"form__button btn\">\n                отправить\n                <svg width=\"18\" height=\"19\" viewBox=\"0 0 18 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                  <path stroke=\"currentColor\" stroke-width=\"2\" d=\"M9 19V1\"></path>\n                  <path d=\"M1 9l8-8 8 8\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linejoin=\"round\"></path>\n                </svg>\n              </button>\n            </form>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"screen screen--hidden screen--result\" id=\"result3\">\n      <div class=\"screen__wrapper\">\n        <div class=\"result result--negative\">\n          <div class=\"result__image\">\n<!--            <picture>-->\n<!--              <source srcset=\"img/result3-mob.png 1x, img/result3-mob@2x.png 2x\" media=\"(max-width: 768px) and (orientation: portrait)\">-->\n<!--              <img src=\"img/result3.png\" srcset=\"img/result3@2x.png 2x\" alt=\"\">-->\n<!--            </picture>-->\n            <canvas id=\"lose-scene\"></canvas>\n          </div>\n          <h2 class=\"result__title\">\n            <span class=\"visually-hidden\">Не угадал!</span>\n            <svg viewBox=\"0 0 661 110\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" style=\"overflow: visible\">\n              <g id=\"lose-heading\">\n                <path id=\"lose-heading-n\" d=\"M0.5 90.5V6.5H13.94V40.7H51.14V6.5H64.58V90.5H51.14V57.14H13.94V90.5H0.5Z\" stroke=\"currentColor\" transform=\"translate(0, -90)\"></path>\n                <path id=\"lose-heading-e\" d=\"M145.46 6.5V22.94H94.84V40.1H128.44V56.5H94.84V74.06H145.48V90.5H81.38V6.5H145.46Z\" stroke=\"currentColor\" transform=\"translate(0, -90)\"></path>\n                <path id=\"lose-heading-u\" d=\"M197.06 6.5L217.58 48.86L233.18 6.5H249.62L218.62 90.5H202.22L211.7 64.58L183.62 6.5H197.06Z\" stroke=\"currentColor\" transform=\"translate(0, -90)\"></path>\n                <path id=\"lose-heading-g\" d=\"M271.58 22.94V90.5H258.14V6.5H308.3V22.94H271.58Z\" stroke=\"currentColor\" transform=\"translate(0, -90)\"></path>\n                <g id=\"lose-heading-a-1\" transform=\"translate(0, -90)\">\n                  <path id=\"lose-heading-a-1-out\" d=\"M304.94 90.5L332.94 6.5H360.06L388.14 90.5H374.66L366.84 66.98H329.04L321.26 90.5H304.94Z\" stroke=\"currentColor\"></path>\n                  <path id=\"lose-heading-a-1-in\" d=\"M361.58 50.5L348.14 10.34L334.7 50.5H361.58Z\" stroke=\"currentColor\"></path>\n                </g>\n                <g id=\"lose-heading-d\" transform=\"translate(0, -90)\">\n                  <path id=\"lose-heading-d-out\" d=\"M394.22 74.06V108.74H408.84V90.5H454.7V108.74H469.38V74.06H459.38V6.5H410.78L410.42 18.06C409.46 55.7 406.22 69.38 401.66 74.06H394.22Z\" stroke=\"currentColor\"></path>\n                  <path id=\"lose-heading-d-in\" d=\"M445.94 74.06V22.94H423.38V26.06C422.9 48.5 420.14 63.74 416.18 74.06H445.94Z\" stroke=\"currentColor\"></path>\n                </g>\n                <g id=\"lose-heading-a-2\" transform=\"translate(0, -90)\">\n                  <path id=\"lose-heading-a-2-in\" d=\"M532.22 50.5L518.78 10.3L505.34 50.5H532.22Z\" stroke=\"currentColor\"></path>\n                  <path id=\"lose-heading-a-2-out\" d=\"M475.58 90.5L503.58 6.5H530.7L558.74 90.5H545.3L537.5 66.98H499.7L491.9 90.5H475.58Z\" stroke=\"currentColor\"></path>\n                </g>\n                <path id=\"lose-heading-l\" d=\"M566.54 75.38C568.13 76.0217 569.826 76.3608 571.54 76.38C578.14 76.38 581.98 70.14 583.54 18.06L584.06 6.5H630.26V90.5H616.84V22.94H596.66L596.54 26.06C594.98 79.5 586.84 92.9 571.58 92.9C569.315 92.8876 567.059 92.6056 564.86 92.06L566.54 75.38Z\" stroke=\"currentColor\" transform=\"translate(0, -90)\"></path>\n                <g id=\"lose-heading-exclamation\" transform=\"translate(0, -90)\">\n                  <path id=\"lose-heading-exclamation-rect\" d=\"M643.94 68.9L645.38 0.5H658.84L660.28 68.9H643.94Z\" stroke=\"currentColor\"></path>\n                  <path id=\"lose-heading-exclamation-round\" d=\"M652.22 75.26C657.02 75.26 660.22 78.5 660.22 83.42C660.22 85.5523 659.373 87.5974 657.865 89.1051C656.357 90.6129 654.312 91.46 652.18 91.46C650.048 91.46 648.003 90.6129 646.495 89.1051C644.987 87.5974 644.14 85.5523 644.14 83.42C644.18 78.5 647.42 75.26 652.22 75.26Z\" stroke=\"currentColor\"></path>\n                </g>\n              </g>\n\n              <animate href=\"#lose-heading\" attributeName=\"opacity\" to=\"1\" id=\"loseHeadingBegin\" begin=\"indefinite\"></animate>\n\n              <animateTransform href=\"#lose-heading-n\" attributeName=\"transform\" type=\"translate\" values=\"0, -90; 0, 0; 0, -20; 0, 0\" dur=\"0.6s\" begin=\"loseHeadingBegin.begin\" calcMode=\"spline\" keySplines=\"0.4, 0.0, 1, 1; 0.0, 0.0, 0.2, 1; 0.4, 0.0, 1, 1\" keyTimes=\"0; 0.5; 0.75; 1\" fill=\"freeze\"></animateTransform>\n              <animate href=\"#lose-heading-n\" attributeName=\"stroke-dashoffset\" from=\"-36\" to=\"0\" dur=\"0.4s\" begin=\"loseHeadingBegin.begin\"></animate>\n              <animate href=\"#lose-heading-n\" attributeName=\"stroke-dasharray\" from=\"3, 141, 3, 141, 3, 141\" to=\"144, 0, 144, 0, 144, 0\" dur=\"0.4s\" begin=\"loseHeadingBegin.begin\" fill=\"freeze\"></animate>\n\n              <animateTransform href=\"#lose-heading-e\" attributeName=\"transform\" type=\"translate\" values=\"0, -90; 0, 0; 0, -20; 0, 0\" dur=\"0.6s\" begin=\"loseHeadingBegin.begin + 0.1s\" calcMode=\"spline\" keySplines=\"0.4, 0.0, 1, 1; 0.0, 0.0, 0.2, 1; 0.4, 0.0, 1, 1\" keyTimes=\"0; 0.5; 0.75; 1\" fill=\"freeze\"></animateTransform>\n              <animate href=\"#lose-heading-e\" attributeName=\"stroke-dashoffset\" from=\"-20.0625\" to=\"38.0625\" dur=\"0.4s\" begin=\"loseHeadingBegin.begin\"></animate>\n              <animate href=\"#lose-heading-e\" attributeName=\"stroke-dasharray\" from=\"3, 113.25, 3, 113.25, 3, 113.25, 3, 113.25\" to=\"116.25, 0, 116.25, 0, 116.25, 0, 116.25, 0\" dur=\"0.4s\" begin=\"loseHeadingBegin.begin\" fill=\"freeze\"></animate>\n\n              <animateTransform href=\"#lose-heading-u\" attributeName=\"transform\" type=\"translate\" values=\"0, -90; 0, 0; 0, -20; 0, 0\" dur=\"0.6s\" begin=\"loseHeadingBegin.begin + 0.2s\" calcMode=\"spline\" keySplines=\"0.4, 0.0, 1, 1; 0.0, 0.0, 0.2, 1; 0.4, 0.0, 1, 1\" keyTimes=\"0; 0.5; 0.75; 1\" fill=\"freeze\"></animateTransform>\n              <animate href=\"#lose-heading-u\" attributeName=\"stroke-dashoffset\" from=\"-36\" to=\"16\" dur=\"0.4s\" begin=\"loseHeadingBegin.begin\"></animate>\n              <animate href=\"#lose-heading-u\" attributeName=\"stroke-dasharray\" from=\"3, 104, 3, 104, 3, 104\" to=\"107, 0, 107, 0, 107, 0\" dur=\"0.4s\" begin=\"loseHeadingBegin.begin\" fill=\"freeze\"></animate>\n\n              <animateTransform href=\"#lose-heading-g\" attributeName=\"transform\" type=\"translate\" values=\"0, -90; 0, 0; 0, -20; 0, 0\" dur=\"0.6s\" begin=\"loseHeadingBegin.begin + 0.3s\" calcMode=\"spline\" keySplines=\"0.4, 0.0, 1, 1; 0.0, 0.0, 0.2, 1; 0.4, 0.0, 1, 1\" keyTimes=\"0; 0.5; 0.75; 1\" fill=\"freeze\"></animateTransform>\n              <animate href=\"#lose-heading-g\" attributeName=\"stroke-dashoffset\" from=\"-36\" to=\"16\" dur=\"0.4s\" begin=\"loseHeadingBegin.begin\"></animate>\n              <animate href=\"#lose-heading-g\" attributeName=\"stroke-dasharray\" from=\"3, 86, 3, 86, 3, 86\" to=\"89, 0, 89, 0, 89, 0\" dur=\"0.4s\" begin=\"loseHeadingBegin.begin\" fill=\"freeze\"></animate>\n\n              <animateTransform href=\"#lose-heading-a-1\" attributeName=\"transform\" type=\"translate\" values=\"0, -90; 0, 0; 0, -20; 0, 0\" dur=\"0.6s\" begin=\"loseHeadingBegin.begin + 0.4s\" calcMode=\"spline\" keySplines=\"0.4, 0.0, 1, 1; 0.0, 0.0, 0.2, 1; 0.4, 0.0, 1, 1\" keyTimes=\"0; 0.5; 0.75; 1\" fill=\"freeze\"></animateTransform>\n              <animate href=\"#lose-heading-a-1-out\" attributeName=\"stroke-dashoffset\" from=\"-11\" to=\"31\" dur=\"0.4s\" begin=\"loseHeadingBegin.begin\"></animate>\n              <animate href=\"#lose-heading-a-1-out\" attributeName=\"stroke-dasharray\" from=\"3, 81, 3, 81, 3, 81, 3, 81\" to=\"84, 0, 84, 0, 84, 0, 84, 0\" dur=\"0.4s\" begin=\"loseHeadingBegin.begin\" fill=\"freeze\"></animate>\n              <animate href=\"#lose-heading-a-1-in\" attributeName=\"stroke-dashoffset\" from=\"-28\" to=\"28\" dur=\"0.4s\" begin=\"loseHeadingBegin.begin\"></animate>\n              <animate href=\"#lose-heading-a-1-in\" attributeName=\"stroke-dasharray\" from=\"3, 109\" to=\"112, 0\" dur=\"0.4s\" begin=\"loseHeadingBegin.begin\" fill=\"freeze\"></animate>\n\n              <animateTransform href=\"#lose-heading-d\" attributeName=\"transform\" type=\"translate\" values=\"0, -90; 0, 0; 0, -20; 0, 0\" dur=\"0.6s\" begin=\"loseHeadingBegin.begin + 0.5s\" calcMode=\"spline\" keySplines=\"0.4, 0.0, 1, 1; 0.0, 0.0, 0.2, 1; 0.4, 0.0, 1, 1\" keyTimes=\"0; 0.5; 0.75; 1\" fill=\"freeze\"></animateTransform>\n              <animate href=\"#lose-heading-d-out\" attributeName=\"stroke-dashoffset\" from=\"-24\" to=\"24\" dur=\"0.4s\" begin=\"loseHeadingBegin.begin\"></animate>\n              <animate href=\"#lose-heading-d-out\" attributeName=\"stroke-dasharray\" from=\"3, 93, 3, 93, 3, 93, 3, 93\" to=\"96, 0, 96, 0, 96, 0, 96, 0\" dur=\"0.4s\" begin=\"loseHeadingBegin.begin\" fill=\"freeze\"></animate>\n              <animate href=\"#lose-heading-d-in\" attributeName=\"stroke-dashoffset\" from=\"-38\" to=\"0\" dur=\"0.4s\" begin=\"loseHeadingBegin.begin\"></animate>\n              <animate href=\"#lose-heading-d-in\" attributeName=\"stroke-dasharray\" from=\"3, 75, 3, 75\" to=\"78, 0, 78, 0\" dur=\"0.4s\" begin=\"loseHeadingBegin.begin\" fill=\"freeze\"></animate>\n\n              <animateTransform href=\"#lose-heading-a-2\" attributeName=\"transform\" type=\"translate\" values=\"0, -90; 0, 0; 0, -20; 0, 0\" dur=\"0.6s\" begin=\"loseHeadingBegin.begin + 0.6s\" calcMode=\"spline\" keySplines=\"0.4, 0.0, 1, 1; 0.0, 0.0, 0.2, 1; 0.4, 0.0, 1, 1\" keyTimes=\"0; 0.5; 0.75; 1\" fill=\"freeze\"></animateTransform>\n              <animate href=\"#lose-heading-a-2-out\" attributeName=\"stroke-dashoffset\" from=\"-31\" to=\"11\" dur=\"0.4s\" begin=\"loseHeadingBegin.begin\"></animate>\n              <animate href=\"#lose-heading-a-2-out\" attributeName=\"stroke-dasharray\" from=\"3, 81, 3, 81, 3, 81, 3, 81\" to=\"84, 0, 84, 0, 84, 0, 84, 0\" dur=\"0.4s\" begin=\"loseHeadingBegin.begin\" fill=\"freeze\"></animate>\n              <animate href=\"#lose-heading-a-2-in\" attributeName=\"stroke-dashoffset\" from=\"0\" to=\"56\" dur=\"0.4s\" begin=\"loseHeadingBegin.begin\"></animate>\n              <animate href=\"#lose-heading-a-2-in\" attributeName=\"stroke-dasharray\" from=\"3, 109\" to=\"112, 0\" dur=\"0.4s\" begin=\"loseHeadingBegin.begin\" fill=\"freeze\"></animate>\n\n              <animateTransform href=\"#lose-heading-l\" attributeName=\"transform\" type=\"translate\" values=\"0, -90; 0, 0; 0, -20; 0, 0\" dur=\"0.6s\" begin=\"loseHeadingBegin.begin + 0.7s\" calcMode=\"spline\" keySplines=\"0.4, 0.0, 1, 1; 0.0, 0.0, 0.2, 1; 0.4, 0.0, 1, 1\" keyTimes=\"0; 0.5; 0.75; 1\" fill=\"freeze\"></animateTransform>\n              <animate href=\"#lose-heading-l\" attributeName=\"stroke-dashoffset\" from=\"-25.5\" to=\"25.5\" dur=\"0.4s\" begin=\"loseHeadingBegin.begin\"></animate>\n              <animate href=\"#lose-heading-l\" attributeName=\"stroke-dasharray\" from=\"3, 111, 3, 111, 3, 111, 3, 111\" to=\"114, 0, 114, 0, 114, 0, 114, 0\" dur=\"0.4s\" begin=\"loseHeadingBegin.begin\" fill=\"freeze\"></animate>\n\n              <animateTransform href=\"#lose-heading-exclamation\" attributeName=\"transform\" type=\"translate\" values=\"0, -90; 0, 0; 0, -20; 0, 0\" dur=\"0.6s\" begin=\"loseHeadingBegin.begin + 0.8s\" calcMode=\"spline\" keySplines=\"0.4, 0.0, 1, 1; 0.0, 0.0, 0.2, 1; 0.4, 0.0, 1, 1\" keyTimes=\"0; 0.5; 0.75; 1\" fill=\"freeze\"></animateTransform>\n\n              <animate href=\"#lose-heading-exclamation-round\" attributeName=\"stroke-dashoffset\" from=\"-26\" to=\"0\" dur=\"0.4s\" begin=\"loseHeadingBegin.begin\"></animate>\n              <animate href=\"#lose-heading-exclamation-round\" attributeName=\"stroke-dasharray\" from=\"3, 49\" to=\"52, 0\" dur=\"0.4s\" begin=\"loseHeadingBegin.begin\" fill=\"freeze\"></animate>\n\n              <animate href=\"#lose-heading-exclamation-rect\" attributeName=\"stroke-dashoffset\" from=\"-20.25\" to=\"20\" dur=\"0.4s\" begin=\"loseHeadingBegin.begin\"></animate>\n              <animate href=\"#lose-heading-exclamation-rect\" attributeName=\"stroke-dasharray\" from=\"3, 80.5, 3, 80.5\" to=\"83.5, 0, 83.5, 0\" dur=\"0.4s\" begin=\"loseHeadingBegin.begin\" fill=\"freeze\"></animate>\n\n            </svg>\n          </h2>\n          <button class=\"result__button js-play\" type=\"button\">\n            не сдавайся!\n            <span>\n              <svg width=\"27\" height=\"22\" viewBox=\"0 0 27 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M10.6899 1.47998C5.42992 1.47998 1.16992 5.73998 1.16992 11C1.16992 16.26 5.42992 20.52 10.6899 20.52C15.9499 20.52 20.2099 16.26 20.2099 11V7.13998\" stroke=\"currentColor\" stroke-width=\"2\" stroke-miterlimit=\"10\"></path>\n                <path d=\"M15.1099 12.5099L20.1499 7.13989L25.3099 12.6299\" stroke=\"currentColor\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linejoin=\"round\"></path>\n              </svg>\n            </span>\n          </button>\n        </div>\n      </div>\n    </section>\n    <div class=\"screen-background\">\n\n    </div>\n  </main>\n\n</body>\n</html>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./source/js/helpers/easings.js":
/*!**************************************!*\
  !*** ./source/js/helpers/easings.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function easeLinear(x) {
  return x;
}

function easeInQuad(x) {
  return x * x;
}

function easeInCubic(x) {
  return x * x * x;
}


function easeOutCubic(x) {
  return 1 - Math.pow(1 - x, 3);
}


function easeInOutSine(x) {
  return -(Math.cos(Math.PI * x) - 1) / 2;
}


function easeInExpo(x) {
  if (x === 0) {
    return 0;
  } else {
    return Math.pow(2, 10 * x - 10);
  }
}


function easeOutExpo(x) {
  if (x === 1) {
    return 1;
  } else {
    return 1 - Math.pow(2, -10 * x);
  }
}


function easeInElastic(x) {
  const c4 = (2 * Math.PI) / 3;

  if (x === 0) {
    return 0;
  } else if (x === 1) {
    return 1;
  } else {
    return Math.pow(2, 10 * x - 10) * Math.sin((x * 10 - 10.75) * c4);
  }
}


function easeOutElastic(x) {
  const c4 = (2 * Math.PI) / 3;
  if (x === 0) {
    return 0;
  } else if (x === 1) {
    return 1;
  } else {
    return Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
  }
}


const _ = Object.freeze({
  easeLinear,
  easeInQuad,
  easeInCubic,
  easeOutCubic,
  easeInOutSine,
  easeInExpo,
  easeOutExpo,
  easeInElastic,
  easeOutElastic
});


/* harmony default export */ __webpack_exports__["default"] = (_);


/***/ }),

/***/ "./source/js/helpers/scene2d.js":
/*!**************************************!*\
  !*** ./source/js/helpers/scene2d.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_easings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/easings */ "./source/js/helpers/easings.js");


const scene2d = (scene) => {
  const ww = window.innerWidth;
  const wh = window.innerHeight;
  const canvas = document.getElementById(scene.sceneId);
  const ctx = canvas.getContext(`2d`);
  const images = {};
  const size = Math.min(ww, wh);
  const objects = scene.objects;
  const primitives = scene.primitives;
  canvas.width = size;
  canvas.height = size;

  const urls = {};
  Object.keys(objects).forEach(function (key) {
    urls[key] = objects[key].image;
  });

  const load = (src) => {
    Object.keys(src).forEach((key) => {
      const img = new Image();
      img.addEventListener(`load`, () => drawImages(objects));
      img.src = src[key];
      images[key] = img;
    });
  };

  const drawImage = (image, settings) => {
    let x = (size / 100) * settings.x;
    let y = (size / 100) * settings.y;
    let width = (size / 100) * settings.w;
    let height = (size / 100) * settings.w * (image.height / image.width);
    const opacity = settings.opacity;
    const transform = settings.transform;
    const isContextTransforming = opacity || (transform && (transform.rotate || transform.scaleX || transform.scaleY));
    if (opacity === 0) {
      return;
    }

    if (transform && (transform.scaleX === 0 || transform.scaleY === 0)) {
      return;
    }
    if (isContextTransforming) {
      ctx.save();
    }

    if (transform) {
      if (transform.translateX) {
        x += (ww / 100) * (transform.translateX);
      }

      if (transform.translateY) {
        y += (wh / 100) * (transform.translateY);
      }

      if (transform.rotate) {
        ctx.translate(x + width / 2, y + height / 2);
        ctx.rotate(transform.rotate * Math.PI / 180);
      }

      if (transform.scaleX) {
        width *= transform.scaleX;

        if (transform.scaleX < 0) {
          ctx.scale(-1, 1);
          x = -x;
        }
      }

      if (transform.scaleY) {
        height *= transform.scaleY;
        if (transform.scaleY < 0) {
          ctx.scale(1, -1);
          y = -y;
        }
      }
      if (transform.rotate) {
        ctx.translate(-x - width / 2, -y - height / 2);
      }
    }

    if (opacity) {
      ctx.globalAlpha = opacity;
    }

    ctx.drawImage(image, x, y, width, height);

    if (isContextTransforming) {
      ctx.restore();
    }
  };

  const animate = (object = {}) => {
    object.animation.forEach((animation) => {
      const type = animation.type;
      const transformType = animation.transformType || undefined;
      const from = animation.from;
      const to = animation.to;
      const easing = animation.easing || _helpers_easings__WEBPACK_IMPORTED_MODULE_0__["default"].easeLinear;
      const duration = animation.duration || 1000;
      const delay = animation.delay || 0;
      const repeat = animation.repeat || false;
      const fps = animation.fps || 60;
      const alternate = animation.alternate || false;
      let requestId;
      setTimeout(() => {
        let startTime = performance.now();
        const interval = 1000 / fps;
        let lastFrameTime = startTime;

        let animateFrame = (currentTime) => {
          requestId = requestAnimationFrame(animateFrame);
          const delta = currentTime - lastFrameTime;

          if (delta > interval) {
            let timeFraction = (currentTime - startTime) / duration;
            if (timeFraction <= 1) {
              const progress = easing(timeFraction);
              if (type === `transform`) {
                object.transform = object.transform || {};
                object.transform[transformType] = (from + ((to - from) * progress));
              } else {
                object[type] = (from + ((to - from) * progress));
              }
              lastFrameTime = currentTime - delta % interval;
            } else if (alternate && timeFraction <= 2) {
              const timeFractionReverse = timeFraction - 1;
              const progress = easing(timeFractionReverse);
              if (type === `transform`) {
                object.transform = object.transform || {};
                object.transform[transformType] = (to - ((to - from) * progress));
              } else {
                object[type] = (to - ((to - from) * progress));
              }
              lastFrameTime = currentTime - delta % interval;
            } else if (repeat) {
              startTime = performance.now();
            } else {
              cancelAnimationFrame(requestId);
            }
          }
        };
        animateFrame(performance.now());
      }, delay);
    });
  };

  const clear = () => ctx.clearRect(0, 0, canvas.width, canvas.height);

  const animateScene = () => {
    const animateMain = () => {
      clear();
      draw(scene);
      requestAnimationFrame(animateMain);
    };
    animateMain();
    Object.values(objects).forEach((object) => {
      if (object.animation) {
        animate(object);
      }
    });
    Object.values(primitives).forEach((primitive) => {
      if (primitive.animation) {
        animate(primitive);
      }
    });
  };

  const drawPrimitive = (primitive) => {

    if (primitive.opacity === 0) {
      return;
    }

    const s = canvas.width / 100;
    ctx.save();
    ctx.beginPath();
    primitive.draw(ctx, s);
    ctx.fill();
    ctx.restore();
  };

  const draw = (obj) => {
    if (!obj.query) {
      return;
    }
    const query = obj.query.map((item) => item.split(`: `));
    query.forEach((item) => {
      if (item[0] === `primitives`) {
        drawPrimitive(obj.primitives[item[1]]);
      } else if (item[0] === `objects`) {
        drawImage(images[item[1]], obj.objects[item[1]]);
      }
    });
  };

  const drawImages = (obj) => {
    Object.keys(obj).forEach((key) => drawImage(images[key], objects[key]));
  };

  const drawScene = new Promise((res) => {
    load(urls);
    res();
  });
  drawScene.then(() => animateScene());
};

/* harmony default export */ __webpack_exports__["default"] = (scene2d);


/***/ }),

/***/ "./source/js/modules/body.js":
/*!***********************************!*\
  !*** ./source/js/modules/body.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (() => {
  let body = document.body;
  window.addEventListener('load', () => {
    body.classList.add('loaded')
  })
});


/***/ }),

/***/ "./source/js/modules/chat.js":
/*!***********************************!*\
  !*** ./source/js/modules/chat.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (() => {
  let messageForm = document.getElementById(`message-form`);
  let messageField = document.getElementById(`message-field`);
  let messageList = document.getElementById(`messages`);
  let chatBlock = document.querySelector(`.js-chat`);

  messageForm.addEventListener(`submit`, function (e) {
    e.preventDefault();

    let scrollToBottom = function () {
      if (messageList.scrollHeight > chatBlock.offsetHeight) {
        chatBlock.scrollTop = messageList.scrollHeight;
      }
    };

    let getAnswer = function () {
      setTimeout(function () {
        let answerEl = document.createElement(`li`);
        let placeholder = document.createElement(`div`);
        let textEl = document.createElement(`p`);
        placeholder.classList.add(`chat__placeholder`);
        for (let i = 0; i < 3; i++) {
          let dot = document.createElement(`span`);
          placeholder.appendChild(dot);
        }
        answerEl.appendChild(placeholder);
        answerEl.classList.add(`chat__message`);
        answerEl.classList.add(`chat__message--incoming`);
        answerEl.classList.add(`chat__message--last`);
        let answer = Math.floor(Math.random() * 2);
        let answerText;

        if (answer) {
          answerText = `Да`;
        } else {
          answerText = `Нет`;
        }

        textEl.innerText = answerText;
        textEl.classList.add(`hidden`);
        answerEl.appendChild(textEl);
        messageList.appendChild(answerEl);
        scrollToBottom();

        setTimeout(function () {
          let lastMessage = document.querySelector(`.chat__message--last`);
          if (lastMessage) {
            let lastMessagePlaceholder = lastMessage.querySelector(`.chat__placeholder`);
            let lastMessageText = lastMessage.querySelector(`p`);
            lastMessagePlaceholder.classList.add(`chat__placeholder--hidden`);
            setTimeout(function () {
              lastMessagePlaceholder.remove();
            }, 400);
            lastMessageText.classList.remove(`hidden`);
            lastMessage.classList.remove(`chat__message--last`);
          }
        }, 700);
      }, 700);
    };

    let postQuestion = function () {
      if (messageField.value) {
        let messageEl = document.createElement(`li`);
        messageEl.classList.add(`chat__message`);
        let messageText = messageField.value;
        let text = document.createElement(`p`);
        text.innerText = messageText;
        messageEl.appendChild(text);
        messageEl.classList.add(`chat__message--outcoming`);
        messageList.appendChild(messageEl);
        messageField.value = ``;
        messageField.setAttribute(`disabled`, `true`);
        scrollToBottom();

        getAnswer();

        messageField.removeAttribute(`disabled`);
        messageField.focus();
      }
    };

    postQuestion();

  });
});


/***/ }),

/***/ "./source/js/modules/counter.js":
/*!**************************************!*\
  !*** ./source/js/modules/counter.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((dur) => {
  const c = document.querySelector(`.game__counter`);
  const minSpan = Array.from(c.querySelectorAll(`span`))[0];
  const secSpan = Array.from(c.querySelectorAll(`span`))[1];

  let start = false;
  let startTime;
  let now;
  let then = 60;
  let elapsed;

  const draw = (s, min = dur, sec = 0) => {
    minSpan.innerHTML = `0${min}`.slice(-2);
    secSpan.innerHTML = `0${sec}`.slice(-2);
  };

  const tick = (s) => {
    requestAnimationFrame(() => tick(s));

    const totalSeconds = Math.floor(((dur * 60000) - (new Date(Date.now() - s).getTime())) / 1000);

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);

    now = Date.now();
    elapsed = now - then;

    if (minutes >= 0 && elapsed > 1000) {
      then = now - (elapsed % 1000);
      draw(s, minutes, seconds);
    }
  };

  document.body.addEventListener(`screenChanged`, (e) => {
    if (e.detail.screenName === `game` && start === false) {
      startTime = Date.now();
      start = true;
      draw();
      tick(startTime);
    }
  });
});


/***/ }),

/***/ "./source/js/modules/footer.js":
/*!*************************************!*\
  !*** ./source/js/modules/footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (() => {
  let footerTogglers = document.querySelectorAll(`.js-footer-toggler`);

  if (footerTogglers.length) {
    for (let i = 0; i < footerTogglers.length; i++) {
      footerTogglers[i].addEventListener(`click`, function () {
        let footer = footerTogglers[i].parentNode;
        if (footer.classList.contains(`screen__footer--full`)) {
          footer.classList.remove(`screen__footer--full`);
        } else {
          footer.classList.add(`screen__footer--full`);
        }
      });
    }
  }
});


/***/ }),

/***/ "./source/js/modules/form.js":
/*!***********************************!*\
  !*** ./source/js/modules/form.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (() => {
  let emailFields = document.querySelectorAll(`input[type="email"]`);
  let adaptPlaceholder = function (el) {
    if ((window.innerWidth / window.innerHeight < 1) || (window.innerWidth < 769)) {
      el.placeholder = `e-mail`;
    } else {
      el.placeholder = `e-mail для регистации результата и получения приза`;
    }
  };
  for (let i = 0; i < emailFields.length; i++) {
    adaptPlaceholder(emailFields[i]);
    window.addEventListener(`resize`, function () {
      adaptPlaceholder(emailFields[i]);
    });
  }
});


/***/ }),

/***/ "./source/js/modules/full-page-scroll.js":
/*!***********************************************!*\
  !*** ./source/js/modules/full-page-scroll.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FullPageScroll; });
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_0__);


class FullPageScroll {
  constructor() {
    this.THROTTLE_TIMEOUT = 2000;

    this.screenElements = document.querySelectorAll(`.screen:not(.screen--result)`);
    this.menuElements = document.querySelectorAll(`.page-header__menu .js-menu-link`);

    this.activeScreen = 0;
    this.onScrollHandler = this.onScroll.bind(this);
    this.onUrlHashChengedHandler = this.onUrlHashChanged.bind(this);
  }

  init() {
    document.addEventListener(`wheel`, lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default()(this.onScrollHandler, this.THROTTLE_TIMEOUT, {trailing: true}));
    window.addEventListener(`popstate`, this.onUrlHashChengedHandler);

    this.onUrlHashChanged();
  }

  onScroll(evt) {
    const currentPosition = this.activeScreen;
    this.reCalculateActiveScreenPosition(evt.deltaY);
    if (currentPosition !== this.activeScreen) {
      this.changePageDisplay();
    }
  }

  onUrlHashChanged() {
    const newIndex = Array.from(this.screenElements).findIndex((screen) => location.hash.slice(1) === screen.id);
    this.activeScreen = (newIndex < 0) ? 0 : newIndex;
    this.changePageDisplay();
  }

  changePageDisplay() {
    this.changeVisibilityDisplay();
    this.changeActiveMenuItem();
    this.emitChangeDisplayEvent();
  }

  changeVisibilityDisplay() {
    const active = this.screenElements[this.activeScreen];
    const screenBackground = document.querySelector('.screen-background');
    let prevActive = this.screenElements[0];
    this.screenElements.forEach((screen) => { //сохраняю в переменную предыдущий активный экран
      if (screen.classList.contains('active')) prevActive = screen;
    });
    if (prevActive.classList.contains('screen--story') && active.classList.contains('screen--prizes')) {
      setTimeout(() => {
        this.screenElements.forEach((screen) => {
          if (screen !== active) {
            screen.classList.add(`screen--hidden`);
            screen.classList.remove(`active`);
          }
        })
      }, 400);
      screenBackground.classList.add('screen-background--active');
    } else {
      this.screenElements.forEach((screen) => {
        screen.classList.add(`screen--hidden`);
        screen.classList.remove(`active`);
      });
      screenBackground.classList.remove('screen-background--active');
    }
    this.screenElements[this.activeScreen].classList.remove(`screen--hidden`);
    this.screenElements[this.activeScreen].classList.add(`active`);
  }

  changeActiveMenuItem() {
    const activeItem = Array.from(this.menuElements).find((item) => item.dataset.href === this.screenElements[this.activeScreen].id);
    if (activeItem) {
      this.menuElements.forEach((item) => item.classList.remove(`active`));
      activeItem.classList.add(`active`);
    }
  }

  emitChangeDisplayEvent() {
    const event = new CustomEvent(`screenChanged`, {
      detail: {
        'screenId': this.activeScreen,
        'screenName': this.screenElements[this.activeScreen].id,
        'screenElement': this.screenElements[this.activeScreen]
      }
    });

    document.body.dispatchEvent(event);
  }

  reCalculateActiveScreenPosition(delta) {
    if (delta > 0) {
      this.activeScreen = Math.min(this.screenElements.length - 1, ++this.activeScreen);
    } else {
      this.activeScreen = Math.max(0, --this.activeScreen);
    }
  }
}


/***/ }),

/***/ "./source/js/modules/lose.js":
/*!***********************************!*\
  !*** ./source/js/modules/lose.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_scene2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/scene2d */ "./source/js/helpers/scene2d.js");
/* harmony import */ var _helpers_easings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/easings */ "./source/js/helpers/easings.js");



const pathToFiles = `/img/module-4/lose-images`;

const files = {
  crocodile: `crocodile.png`,
  drop: `drop.png`,
  flamingo: `flamingo.png`,
  key: `key.png`,
  leaf: `leaf.png`,
  saturn: `saturn.png`,
  snowflake: `snowflake.png`,
  watermelon: `watermelon.png`,
};

const loseScene = {
  sceneId: `lose-scene`,
  objects: {
    crocodile: {
      image: `${pathToFiles}/${files.crocodile}`,
      x: -3,
      y: 7,
      w: 100,
      opacity: 0,
      animation: [
        {
          type: `transform`,
          transformType: `translateX`,
          from: 30,
          to: 0,
          duration: 600,
          delay: 800,
        },
        {
          type: `transform`,
          transformType: `translateY`,
          from: -20,
          to: 0,
          duration: 600,
          delay: 800,
        },
        {
          type: `opacity`,
          from: 0,
          to: 1,
          duration: 200,
          delay: 800,
        },
      ]
    },
    drop: {
      image: `${pathToFiles}/${files.drop}`,
      x: 42,
      y: 58,
      w: 4,
      opacity: 0,
      animation: [
        {
          type: `opacity`,
          from: 0,
          to: 1,
          duration: 2000,
          delay: 1300,
          repeat: true,
          easing: (p) => {
            if (p <= 0.2) {
              return _helpers_easings__WEBPACK_IMPORTED_MODULE_1__["default"].easeInCubic(p * 5);
            } else if (p > 0.2 && p < 0.9) {
              return 1;
            } else {
              return 1 - _helpers_easings__WEBPACK_IMPORTED_MODULE_1__["default"].easeInCubic(((p - 0.1) / 90) * 100);
            }
          },
        },
        {
          type: `transform`,
          transformType: `scaleX`,
          from: 0,
          to: 1,
          duration: 2000,
          delay: 1300,
          repeat: true,
          easing: (p) => {
            if (p <= 0.2) {
              return _helpers_easings__WEBPACK_IMPORTED_MODULE_1__["default"].easeOutCubic(p * 5);
            } else {
              return 1;
            }
          },
        },
        {
          type: `transform`,
          transformType: `scaleY`,
          from: 0,
          to: 1,
          duration: 2000,
          delay: 1300,
          repeat: true,
          easing: (p) => {
            if (p <= 0.2) {
              return _helpers_easings__WEBPACK_IMPORTED_MODULE_1__["default"].easeOutCubic(p * 5);
            } else {
              return 1;
            }
          },
        },
        {
          type: `transform`,
          transformType: `translateX`,
          from: 1,
          to: 0,
          duration: 2000,
          delay: 1300,
          repeat: true,
          easing: (p) => {
            if (p <= 0.2) {
              return _helpers_easings__WEBPACK_IMPORTED_MODULE_1__["default"].easeOutCubic(p * 5);
            } else {
              return 1;
            }
          },
        },
        {
          type: `transform`,
          transformType: `translateY`,
          from: 0,
          to: 8,
          duration: 2000,
          delay: 1300,
          repeat: true,
          easing: (p) => {
            if (p <= 0.3) {
              return 0;
            } else {
              return _helpers_easings__WEBPACK_IMPORTED_MODULE_1__["default"].easeInCubic(((p - 0.3) / 70) * 100);
            }
          },
        }
      ]
    },
    flamingo: {
      image: `${pathToFiles}/${files.flamingo}`,
      x: 16,
      y: 34,
      w: 16,
      opacity: 0,
      animation: [
        {
          type: `opacity`,
          from: 0,
          to: 1,
          duration: 200,
          delay: 200,
        },
        {
          type: `transform`,
          transformType: `scale`,
          from: 0,
          to: 1,
          duration: 400,
          delay: 200,
          easing: _helpers_easings__WEBPACK_IMPORTED_MODULE_1__["default"].easeOutCubic,
        },
        {
          type: `transform`,
          transformType: `translateY`,
          from: 7,
          to: 0,
          duration: 800,
          delay: 200,
          easing: _helpers_easings__WEBPACK_IMPORTED_MODULE_1__["default"].easeOutCubic,
        },
        {
          type: `transform`,
          transformType: `translateX`,
          from: 10,
          to: 0,
          duration: 800,
          delay: 200,
          easing: _helpers_easings__WEBPACK_IMPORTED_MODULE_1__["default"].easeOutCubic,
        },
        {
          type: `transform`,
          transformType: `rotate`,
          from: 30,
          to: 0,
          duration: 1000,
          delay: 200,
          easing: _helpers_easings__WEBPACK_IMPORTED_MODULE_1__["default"].easeOutCubic,
        },
        {
          type: `transform`,
          transformType: `translateY`,
          from: 0,
          to: 80,
          duration: 800,
          delay: 1000,
          easing: _helpers_easings__WEBPACK_IMPORTED_MODULE_1__["default"].easeInCubic,
        },
        {
          type: `opacity`,
          from: 1,
          to: 0,
          duration: 100,
          delay: 1600,
        },
      ],
    },
    key: {
      image: `${pathToFiles}/${files.key}`,
      x: 40,
      y: 35,
      w: 20,
      opacity: 0,
      animation: [
        {
          type: `opacity`,
          from: 0,
          to: 1,
          duration: 200,
        },
      ]
    },
    leaf: {
      image: `${pathToFiles}/${files.leaf}`,
      x: 84,
      y: 30,
      w: 18,
      opacity: 0,
      animation: [
        {
          type: `opacity`,
          from: 0,
          to: 1,
          duration: 200,
          delay: 200,
        },
        {
          type: `transform`,
          transformType: `scale`,
          from: 0,
          to: 1,
          duration: 400,
          delay: 200,
          easing: _helpers_easings__WEBPACK_IMPORTED_MODULE_1__["default"].easeOutCubic,
        },
        {
          type: `transform`,
          transformType: `translateY`,
          from: 7,
          to: 0,
          duration: 900,
          delay: 200,
          easing: _helpers_easings__WEBPACK_IMPORTED_MODULE_1__["default"].easeOutCubic,
        },
        {
          type: `transform`,
          transformType: `translateX`,
          from: -20,
          to: 0,
          duration: 900,
          delay: 200,
          easing: _helpers_easings__WEBPACK_IMPORTED_MODULE_1__["default"].easeOutCubic,
        },
        {
          type: `transform`,
          transformType: `rotate`,
          from: -35,
          to: 0,
          duration: 1100,
          delay: 200,
          easing: _helpers_easings__WEBPACK_IMPORTED_MODULE_1__["default"].easeOutCubic,
        },
        {
          type: `transform`,
          transformType: `translateY`,
          from: 0,
          to: 80,
          duration: 800,
          delay: 1100,
          easing: _helpers_easings__WEBPACK_IMPORTED_MODULE_1__["default"].easeInCubic,
        },
        {
          type: `opacity`,
          from: 1,
          to: 0,
          duration: 100,
          delay: 1700,
        },
      ],
    },
    saturn: {
      image: `${pathToFiles}/${files.saturn}`,
      x: 84,
      y: 66,
      w: 12,
      opacity: 0,
      animation: [
        {
          type: `opacity`,
          from: 0,
          to: 1,
          duration: 200,
          delay: 300,
        },
        {
          type: `transform`,
          transformType: `scale`,
          from: 0,
          to: 1,
          duration: 700,
          delay: 300,
          easing: _helpers_easings__WEBPACK_IMPORTED_MODULE_1__["default"].easeOutCubic,
        },
        {
          type: `transform`,
          transformType: `translateY`,
          from: -10,
          to: 0,
          duration: 700,
          delay: 300,
          easing: _helpers_easings__WEBPACK_IMPORTED_MODULE_1__["default"].easeOutCubic,
        },
        {
          type: `transform`,
          transformType: `translateX`,
          from: -14,
          to: 0,
          duration: 700,
          delay: 300,
          easing: _helpers_easings__WEBPACK_IMPORTED_MODULE_1__["default"].easeOutCubic,
        },
        {
          type: `transform`,
          transformType: `rotate`,
          from: -15,
          to: 0,
          duration: 900,
          delay: 300,
          easing: _helpers_easings__WEBPACK_IMPORTED_MODULE_1__["default"].easeOutCubic,
        },
        {
          type: `transform`,
          transformType: `translateY`,
          from: 0,
          to: 80,
          duration: 800,
          delay: 1000,
          easing: _helpers_easings__WEBPACK_IMPORTED_MODULE_1__["default"].easeInCubic,
        },
        {
          type: `opacity`,
          from: 1,
          to: 0,
          duration: 100,
          delay: 1600,
        },
      ],
    },
    snowflake: {
      image: `${pathToFiles}/${files.snowflake}`,
      x: 66,
      y: 50,
      w: 10,
      opacity: 0,
      animation: [
        {
          type: `opacity`,
          from: 0,
          to: 1,
          duration: 200,
          delay: 200,
        },
        {
          type: `transform`,
          transformType: `scale`,
          from: 0,
          to: 1,
          duration: 400,
          delay: 200,
          easing: _helpers_easings__WEBPACK_IMPORTED_MODULE_1__["default"].easeOutCubic,
        },
        {
          type: `transform`,
          transformType: `translateX`,
          from: -6,
          to: 0,
          duration: 600,
          delay: 200,
          easing: _helpers_easings__WEBPACK_IMPORTED_MODULE_1__["default"].easeOutCubic,
        },
        {
          type: `transform`,
          transformType: `rotate`,
          from: -15,
          to: 0,
          duration: 900,
          delay: 300,
          easing: _helpers_easings__WEBPACK_IMPORTED_MODULE_1__["default"].easeOutCubic,
        },
        {
          type: `transform`,
          transformType: `translateY`,
          from: 0,
          to: 80,
          duration: 800,
          delay: 800,
          easing: _helpers_easings__WEBPACK_IMPORTED_MODULE_1__["default"].easeInCubic,
        },
        {
          type: `opacity`,
          from: 1,
          to: 0,
          duration: 100,
          delay: 1400,
        },
      ],
    },
    watermelon: {
      image: `${pathToFiles}/${files.watermelon}`,
      x: 6,
      y: 60,
      w: 12,
      opacity: 0,
      animation: [
        {
          type: `opacity`,
          from: 0,
          to: 1,
          duration: 200,
          delay: 300,
        },
        {
          type: `transform`,
          transformType: `scale`,
          from: 0,
          to: 1,
          duration: 800,
          delay: 300,
          easing: _helpers_easings__WEBPACK_IMPORTED_MODULE_1__["default"].easeOutCubic,
        },
        {
          type: `transform`,
          transformType: `translateY`,
          from: -10,
          to: 0,
          duration: 800,
          delay: 300,
          easing: _helpers_easings__WEBPACK_IMPORTED_MODULE_1__["default"].easeOutCubic,
        },
        {
          type: `transform`,
          transformType: `translateX`,
          from: 20,
          to: 0,
          duration: 800,
          delay: 300,
          easing: _helpers_easings__WEBPACK_IMPORTED_MODULE_1__["default"].easeOutCubic,
        },
        {
          type: `transform`,
          transformType: `rotate`,
          from: -15,
          to: 0,
          duration: 1000,
          delay: 300,
          easing: _helpers_easings__WEBPACK_IMPORTED_MODULE_1__["default"].easeOutCubic,
        },
        {
          type: `transform`,
          transformType: `translateY`,
          from: 0,
          to: 80,
          duration: 800,
          delay: 1100,
          easing: _helpers_easings__WEBPACK_IMPORTED_MODULE_1__["default"].easeInCubic,
        },
        {
          type: `opacity`,
          from: 1,
          to: 0,
          duration: 100,
          delay: 1700,
        },
      ],
    },
  },
  primitives: {
    mask: {
      draw: (ctx, s) => {
        ctx.fillStyle = `#5f458c`;
        ctx.arc(50 * s, 45 * s, 10 * s, -2, 0.875);
        ctx.lineTo(60 * s, 75 * s);
        ctx.lineTo(100 * s, 75 * s);
        ctx.lineTo(100 * s, 25 * s);
        ctx.lineTo(50 * s, 25 * s);
      },
    },
  },
  query: [
    `objects: key`,
    `objects: crocodile`,
    `primitives: mask`,
    `objects: drop`,
    `objects: flamingo`,
    `objects: watermelon`,
    `objects: leaf`,
    `objects: snowflake`,
    `objects: saturn`,
  ]
};

const lose = () => Object(_helpers_scene2d__WEBPACK_IMPORTED_MODULE_0__["default"])(loseScene);

/* harmony default export */ __webpack_exports__["default"] = (lose);


/***/ }),

/***/ "./source/js/modules/menu.js":
/*!***********************************!*\
  !*** ./source/js/modules/menu.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (() => {
  let header = document.querySelector(`.js-header`);
  let menuToggler = document.querySelector(`.js-menu-toggler`);
  let menuLinks = document.querySelectorAll(`.js-menu-link`);

  if (menuToggler) {
    menuToggler.addEventListener(`click`, function () {
      if (header.classList.contains(`page-header--menu-opened`)) {
        header.classList.remove(`page-header--menu-opened`);
        document.body.classList.remove(`menu-opened`);
      } else {
        header.classList.add(`page-header--menu-opened`);
        document.body.classList.add(`menu-opened`);
      }
    });
  }

  for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener(`click`, function () {
      if (window.innerWidth < 1025) {
        header.classList.remove(`page-header--menu-opened`);
        document.body.classList.remove(`menu-opened`);
      }
    });
  }
});


/***/ }),

/***/ "./source/js/modules/mobile-height-adjust.js":
/*!***************************************************!*\
  !*** ./source/js/modules/mobile-height-adjust.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (() => {
  let setVH = function () {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty(`--vh`, `${vh}px`);
  };

  setVH();

  window.addEventListener(`resize`, setVH);
});


/***/ }),

/***/ "./source/js/modules/per-letter-anim.js":
/*!**********************************************!*\
  !*** ./source/js/modules/per-letter-anim.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PerLetterAnim; });
class PerLetterAnim {
  constructor(
    elementSelector,
    timer,
    classForActivate,
    property
  ) {
    this._TIME_SPACE = 100;

    this._elementSelector = elementSelector;
    this._timer = timer;
    this._classForActivate = classForActivate;
    this._property = property;
    this._element = document.querySelector(this._elementSelector);
    this._timeOffset = 0;
    
    this.prePareText();
  }
  
  offsetGenerator(offset, index) {
    let res = offset;
    if ((index+1) % 3 === 1) {
      res +=80;
    }
    if ((index+1) % 3 === 2) {
      res -= 40;
    }
    if ((index+1) % 3 === 0) {
      res += 60;
    }
    return res;
  }
  
  createElement(letter, index) {
    const span = document.createElement(`span`);
    span.textContent = letter;
    span.style.transition = `${this._property} ${this._timer}ms ease ${this._timeOffset}ms`;
    this._timeOffset = this.offsetGenerator(this._timeOffset, index);
    return span;
  }
  
  prePareText() {
    if (!this._element) {
      return;
    }
    const text = this._element.textContent.trim().split(` `).filter((latter)=>latter !== '');

    const content = text.reduce((fragmentParent, word, index) => {
      const wordElement = Array.from(word).reduce((fragment, latter, i) => {
        fragment.appendChild(this.createElement(latter, i));
        return fragment;
      }, document.createDocumentFragment());
      const wordContainer = document.createElement(`span`);
      wordContainer.classList.add(`per-letter-anim__word`);
      wordContainer.appendChild(wordElement);
      fragmentParent.appendChild(wordContainer);
      if (index !== text.length - 1) {
        const space = document.createTextNode(' ')
        fragmentParent.appendChild(space)
      };
      return fragmentParent;
    }, document.createDocumentFragment());

    this._element.innerHTML = ``;
    this._element.appendChild(content);
  }
  
  runAnimation() {
    if (!this._element) {
      return;
    }
    this._element.classList.add(this._classForActivate);
  }

  destroyAnimation() {
    this._element.classList.remove(this._classForActivate);
  }
}


/***/ }),

/***/ "./source/js/modules/prize-animation.js":
/*!**********************************************!*\
  !*** ./source/js/modules/prize-animation.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((...ids) => {
  const items = ids.map((item) => document.getElementById(item));
  let done = false;
  document.body.addEventListener(`screenChanged`, (e) => {
    if (e.detail.screenName === `prizes` && !done) {
      items.forEach((i) => i.beginElement());
      done = true;
    }
  });
});


/***/ }),

/***/ "./source/js/modules/prize-counter.js":
/*!********************************************!*\
  !*** ./source/js/modules/prize-counter.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((itemMod, from = 1, to = 1) => {
  const count = document.querySelector(`.prizes__item--${itemMod} .prizes__desc b`);
  let start = false;
  let now;
  let then = Date.now();
  let elapsed;
  const step = (to - from) / 12;
  let current = from;

  const tick = () => {
    const raf = requestAnimationFrame(tick);
    now = Date.now();
    elapsed = now - then;
    if (current < to && elapsed > 1000 / 12) {
      then = now - (elapsed % (1000 / 12));
      draw(current);
      current += step;
    }
    if (current >= to) {
      draw(to);
      cancelAnimationFrame(raf);
    }
  };

  const draw = (cur) => {
    count.innerHTML = `${Math.floor(cur)}`;
  };
  document.body.addEventListener(`screenChanged`, (e) => {
    if (e.detail.screenName === `prizes` && start === false) {
      start = true;
      draw(current);
      tick();
    }
  });
});


/***/ }),

/***/ "./source/js/modules/result.js":
/*!*************************************!*\
  !*** ./source/js/modules/result.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _win_primary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./win-primary */ "./source/js/modules/win-primary.js");
/* harmony import */ var _lose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lose */ "./source/js/modules/lose.js");



/* harmony default export */ __webpack_exports__["default"] = (() => {
  let showResultEls = document.querySelectorAll(`.js-show-result`);
  let results = document.querySelectorAll(`.screen--result`);
  const resultHeaderAnim = [
    document.querySelector(`#winHeadingBegin`),
    document.querySelector(`#loseHeadingBegin`),
  ];
  if (results.length) {
    for (let i = 0; i < showResultEls.length; i++) {
      showResultEls[i].addEventListener(`click`, function () {
        let target = showResultEls[i].getAttribute(`data-target`);
        [].slice.call(results).forEach(function (el) {
          el.classList.remove(`screen--show`);
          el.classList.add(`screen--hidden`);
        });
        let targetEl = [].slice.call(results).filter(function (el) {
          return el.getAttribute(`id`) === target;
        });
        targetEl[0].classList.add(`screen--show`);
        targetEl[0].classList.remove(`screen--hidden`);
        if (targetEl[0].id === `result`) {
          Object(_win_primary__WEBPACK_IMPORTED_MODULE_0__["default"])();
        }
        if (targetEl[0].id === `result3`) {
          Object(_lose__WEBPACK_IMPORTED_MODULE_1__["default"])();
        }
        resultHeaderAnim.forEach((anim) => anim.beginElement());
      });
    }

    let playBtn = document.querySelector(`.js-play`);
    if (playBtn) {
      playBtn.addEventListener(`click`, function () {
        [].slice.call(results).forEach(function (el) {
          el.classList.remove(`screen--show`);
          el.classList.add(`screen--hidden`);
        });
        document.getElementById(`messages`).innerHTML = ``;
        document.getElementById(`message-field`).focus();
      });
    }
  }
});


/***/ }),

/***/ "./source/js/modules/rules.js":
/*!************************************!*\
  !*** ./source/js/modules/rules.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const rulesList = document.querySelector('.rules__list');
  const rulesLink = document.querySelector('.rules__link');
  rulesList.lastElementChild.lastElementChild.addEventListener('animationend', () => {
    rulesLink.style.setProperty('--animation-state', 'running');
  });
  rulesLink.lastElementChild.addEventListener('animationend', () => {
    rulesLink.style.removeProperty('--animation-state');
  })
});


/***/ }),

/***/ "./source/js/modules/slider.js":
/*!*************************************!*\
  !*** ./source/js/modules/slider.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/js/swiper.esm.bundle.js");


/* harmony default export */ __webpack_exports__["default"] = (() => {
  let storySlider;
  let sliderContainer = document.getElementById(`story`);
  sliderContainer.style.backgroundImage = `url("img/slide1.jpg"), linear-gradient(180deg, rgba(83, 65, 118, 0) 0%, #523E75 16.85%)`;

  const setSlider = function () {
    if (((window.innerWidth / window.innerHeight) < 1) || window.innerWidth < 769) {
      storySlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](`.js-slider`, {
        pagination: {
          el: `.swiper-pagination`,
          type: `bullets`
        },
        keyboard: {
          enabled: true
        },
        on: {
          slideChange: () => {
            if (storySlider.activeIndex === 0 || storySlider.activeIndex === 1) {
              sliderContainer.style.backgroundImage = `url("img/slide1.jpg"), linear-gradient(180deg, rgba(83, 65, 118, 0) 0%, #523E75 16.85%)`;
            } else if (storySlider.activeIndex === 2 || storySlider.activeIndex === 3) {
              sliderContainer.style.backgroundImage = `url("img/slide2.jpg"), linear-gradient(180deg, rgba(45, 54, 179, 0) 0%, #2A34B0 16.85%)`;
            } else if (storySlider.activeIndex === 4 || storySlider.activeIndex === 5) {
              sliderContainer.style.backgroundImage = `url("img/slide3.jpg"), linear-gradient(180deg, rgba(92, 138, 198, 0) 0%, #5183C4 16.85%)`;
            } else if (storySlider.activeIndex === 6 || storySlider.activeIndex === 7) {
              sliderContainer.style.backgroundImage = `url("img/slide4.jpg"), linear-gradient(180deg, rgba(45, 39, 63, 0) 0%, #2F2A42 16.85%)`;
            }
          },
          resize: () => {
            storySlider.update();
          }
        },
        observer: true,
        observeParents: true
      });
    } else {
      storySlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](`.js-slider`, {
        slidesPerView: 2,
        slidesPerGroup: 2,
        pagination: {
          el: `.swiper-pagination`,
          type: `fraction`
        },
        navigation: {
          nextEl: `.js-control-next`,
          prevEl: `.js-control-prev`,
        },
        keyboard: {
          enabled: true
        },
        on: {
          slideChange: () => {
            if (storySlider.activeIndex === 0) {
              sliderContainer.style.backgroundImage = `url("img/slide1.jpg")`;
            } else if (storySlider.activeIndex === 2) {
              sliderContainer.style.backgroundImage = `url("img/slide2.jpg")`;
            } else if (storySlider.activeIndex === 4) {
              sliderContainer.style.backgroundImage = `url("img/slide3.jpg")`;
            } else if (storySlider.activeIndex === 6) {
              sliderContainer.style.backgroundImage = `url("img/slide4.jpg")`;
            }
          },
          resize: () => {
            storySlider.update();
          }
        },
        observer: true,
        observeParents: true
      });
    }
  };

  window.addEventListener(`resize`, function () {
    if (storySlider) {
      storySlider.destroy();
    }
    setSlider();
  });

  setSlider();
});


/***/ }),

/***/ "./source/js/modules/social.js":
/*!*************************************!*\
  !*** ./source/js/modules/social.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (() => {
  let socialBlock = document.querySelector(`.js-social-block`);
  socialBlock.addEventListener(`mouseover`, function () {
    socialBlock.classList.add(`social-block--active`);
  });
  socialBlock.addEventListener(`mouseleave`, function () {
    socialBlock.classList.remove(`social-block--active`);
  });
});


/***/ }),

/***/ "./source/js/modules/win-primary.js":
/*!******************************************!*\
  !*** ./source/js/modules/win-primary.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_scene2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/scene2d */ "./source/js/helpers/scene2d.js");
/* harmony import */ var _helpers_easings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/easings */ "./source/js/helpers/easings.js");



const pathToFiles = `/img/module-4/win-primary-images`;

const files = {
  airplane: `airplane.png`,
  tree: `tree.png`,
  ice: `ice.png`,
  walrus: `sea-calf-2.png`,
  snowflake: `snowflake.png`,
};

const walrusAnim = [
  {
    type: `transform`,
    transformType: `translateY`,
    from: 30,
    to: 0,
    duration: 2000,
    delay: 800,
    easing: _helpers_easings__WEBPACK_IMPORTED_MODULE_1__["default"].easeOutElastic,
  },
  {
    type: `transform`,
    transformType: `rotate`,
    from: -30,
    to: 0,
    duration: 2000,
    delay: 800,
    easing: _helpers_easings__WEBPACK_IMPORTED_MODULE_1__["default"].easeOutElastic,
  },
  {
    type: `opacity`,
    form: 0,
    to: 1,
    duration: 300,
    delay: 800,
  }
];

const winPrimaryScene = {
  sceneId: `win-primary-scene`,
  objects: {
    airplane: {
      image: `${pathToFiles}/${files.airplane}`,
      x: 85,
      y: 45,
      w: 10,
      opacity: 0,
      animation: [
        {
          type: `transform`,
          transformType: `translateY`,
          from: 0,
          to: 1,
          duration: 500,
          delay: 1200,
          easing: (p) => 5 * Math.sin(Math.PI * (1 - p)) - 15 * (1 - p),
        },
        {
          type: `transform`,
          transformType: `translateX`,
          from: -20,
          to: 0,
          duration: 500,
          delay: 1200,
        },
        {
          type: `transform`,
          transformType: `rotate`,
          from: 0,
          to: 1,
          duration: 500,
          delay: 1200,
          easing: (p) => 45 * Math.sin(Math.PI * (1 - p)) + 45 * (1 - p),
        },
        {
          type: `opacity`,
          from: 0,
          to: 1,
          duration: 300,
          delay: 1200,
        },
      ],
    },
    tree: {
      image: `${pathToFiles}/${files.tree}`,
      x: 65,
      y: 52,
      w: 5,
      opacity: 0,
      animation: [
        {
          type: `opacity`,
          from: 0,
          to: 1,
          duration: 500,
          delay: 1200,
          easing: _helpers_easings__WEBPACK_IMPORTED_MODULE_1__["default"].easeInQuad
        },
        {
          type: `transform`,
          transformType: `translateY`,
          from: 30,
          to: 0,
          duration: 500,
          delay: 1200,
          easing: _helpers_easings__WEBPACK_IMPORTED_MODULE_1__["default"].easeInQuad,
        },
      ],
    },
    tree2: {
      image: `${pathToFiles}/${files.tree}`,
      x: 60,
      y: 55,
      w: 5,
      opacity: 0,
      transforms: {
        translateY: 30
      },
      animation: [
        {
          type: `opacity`,
          from: 0,
          to: 1,
          duration: 500,
          delay: 1500,
          easing: _helpers_easings__WEBPACK_IMPORTED_MODULE_1__["default"].easeInQuad
        },
        {
          type: `transform`,
          transformType: `translateY`,
          from: 30,
          to: 0,
          duration: 500,
          delay: 1500,
          easing: _helpers_easings__WEBPACK_IMPORTED_MODULE_1__["default"].easeInQuad,
        },
      ],
    },
    ice: {
      image: `${pathToFiles}/${files.ice}`,
      w: 50,
      x: 25,
      y: 60,
      opacity: 0,
      transform: {
        translateY: 30,
      },
      animation: walrusAnim,
    },
    walrus: {
      image: `${pathToFiles}/${files.walrus}`,
      w: 50,
      x: 25,
      y: 35,
      opacity: 0,
      transform: {
        translateY: 30,
      },
      animation: walrusAnim,
    },
    snowflake1: {
      image: `${pathToFiles}/${files.snowflake}`,
      w: 20,
      x: 20,
      y: 45,
      opacity: 0,
      animation: [
        {
          type: `transform`,
          transformType: `translateY`,
          from: -4,
          to: 4,
          duration: 3000,
          repeat: `infinite`,
          alternate: true,
          delay: 800,
          easing: _helpers_easings__WEBPACK_IMPORTED_MODULE_1__["default"].easeInOutSine,
        },
        {
          type: `opacity`,
          from: 0,
          to: 1,
          duration: 500,
          delay: 1500,
        }
      ],
    },
    snowflake2: {
      image: `${pathToFiles}/${files.snowflake}`,
      w: 10,
      x: 65,
      y: 60,
      opacity: 0,
      transform: {
        translateY: 4,
      },
      animation: [
        {
          type: `transform`,
          transformType: `translateY`,
          from: 4,
          to: 0,
          duration: 3000,
          repeat: `infinite`,
          alternate: true,
          delay: 800,
          easing: _helpers_easings__WEBPACK_IMPORTED_MODULE_1__["default"].easeInOutSine,
        },
        {
          type: `opacity`,
          from: 0,
          to: 1,
          duration: 500,
          delay: 1500,
        }
      ]
    },
  },
  primitives: {
    trail: {
      centerX: 45,
      centerY: 55,
      radius: 15,
      endX: 87,
      endY: 53,
      angle: 45,
      deltasLength: 10,
      draw: (ctx, s) => {
        const t = winPrimaryScene.primitives.trail;
        const angle = t.angle * Math.PI / 180;
        ctx.globalAlpha = t.opacity;
        ctx.fillStyle = `#acc3ff`;
        ctx.arc(t.centerX * s, t.centerY * s, t.radius * s, Math.PI / 2, Math.PI * 3 / 2);
        ctx.bezierCurveTo((t.centerX + 10) * s, (t.centerY - t.radius) * s, (t.endX - t.deltasLength * Math.sin(angle)) * s, (t.endY + t.deltasLength * Math.cos(angle)) * s, t.endX * s, t.endY * s);
        ctx.bezierCurveTo((t.endX - t.deltasLength * Math.sin(angle)) * s, (t.endY + t.deltasLength * Math.cos(angle)) * s, (t.centerX + 10) * s, (t.centerY + t.radius) * s, t.centerX * s, (t.centerY + t.radius) * s);
      },
      opacity: 0,
      animation: [
        {type: `radius`, from: 0, to: 15, duration: 500, delay: 1200},
        {type: `centerY`, from: 40, to: 55, duration: 500, delay: 1200},
        {type: `endX`, from: 52, to: 87, duration: 500, delay: 1200},
        {type: `endY`, from: 41, to: 53, duration: 500, delay: 1200},
        {type: `angle`, from: 160, to: 40, duration: 500, delay: 1200},
        {type: `deltasLength`, from: 0, to: 10, duration: 500, delay: 1200},
        {type: `opacity`, from: 0, to: 1, duration: 300, delay: 1200},
      ],
    },
  },
  query: [
    `primitives: trail`,
    `objects: airplane`,
    `objects: tree`,
    `objects: tree2`,
    `objects: ice`,
    `objects: walrus`,
    `objects: snowflake1`,
    `objects: snowflake2`,
  ]
};

const winPrimary = () => Object(_helpers_scene2d__WEBPACK_IMPORTED_MODULE_0__["default"])(winPrimaryScene);

/* harmony default export */ __webpack_exports__["default"] = (winPrimary);


/***/ }),

/***/ "./source/js/script.js":
/*!*****************************!*\
  !*** ./source/js/script.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_mobile_height_adjust_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/mobile-height-adjust.js */ "./source/js/modules/mobile-height-adjust.js");
/* harmony import */ var _modules_slider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider.js */ "./source/js/modules/slider.js");
/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu.js */ "./source/js/modules/menu.js");
/* harmony import */ var _modules_footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/footer.js */ "./source/js/modules/footer.js");
/* harmony import */ var _modules_chat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/chat.js */ "./source/js/modules/chat.js");
/* harmony import */ var _modules_result_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/result.js */ "./source/js/modules/result.js");
/* harmony import */ var _modules_form_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/form.js */ "./source/js/modules/form.js");
/* harmony import */ var _modules_social_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/social.js */ "./source/js/modules/social.js");
/* harmony import */ var _modules_body_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/body.js */ "./source/js/modules/body.js");
/* harmony import */ var _modules_rules_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/rules.js */ "./source/js/modules/rules.js");
/* harmony import */ var _modules_full_page_scroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/full-page-scroll */ "./source/js/modules/full-page-scroll.js");
/* harmony import */ var _modules_per_letter_anim__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/per-letter-anim */ "./source/js/modules/per-letter-anim.js");
/* harmony import */ var _modules_prize_animation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/prize-animation */ "./source/js/modules/prize-animation.js");
/* harmony import */ var _modules_counter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/counter */ "./source/js/modules/counter.js");
/* harmony import */ var _modules_prize_counter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/prize-counter */ "./source/js/modules/prize-counter.js");
// modules
















// init modules
Object(_modules_mobile_height_adjust_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
Object(_modules_slider_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
Object(_modules_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
Object(_modules_footer_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
Object(_modules_chat_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
Object(_modules_result_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
Object(_modules_form_js__WEBPACK_IMPORTED_MODULE_6__["default"])();
Object(_modules_social_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
Object(_modules_body_js__WEBPACK_IMPORTED_MODULE_8__["default"])();
Object(_modules_rules_js__WEBPACK_IMPORTED_MODULE_9__["default"])();
Object(_modules_prize_animation__WEBPACK_IMPORTED_MODULE_12__["default"])(`primaryAwardBegin`, `secondaryAwardBegin`, `additionalAwardBegin`);
Object(_modules_counter__WEBPACK_IMPORTED_MODULE_13__["default"])(5);
Object(_modules_prize_counter__WEBPACK_IMPORTED_MODULE_14__["default"])(`cases`, 1, 7);
Object(_modules_prize_counter__WEBPACK_IMPORTED_MODULE_14__["default"])(`codes`, 11, 900);

const fullPageScroll = new _modules_full_page_scroll__WEBPACK_IMPORTED_MODULE_10__["default"]();
fullPageScroll.init();

const animationIntroTitle = new _modules_per_letter_anim__WEBPACK_IMPORTED_MODULE_11__["default"](`.intro__title`, 500, `per-letter-anim--active`, `transform`);
setTimeout(()=>{
  animationIntroTitle.runAnimation();
}, 800);

const animationIntroDate = new _modules_per_letter_anim__WEBPACK_IMPORTED_MODULE_11__["default"](`.intro__date`, 500, `per-letter-anim--active`, `transform`);
setTimeout(()=>{
  animationIntroDate.runAnimation();
}, 1400);


/***/ }),

/***/ "./source/scss/style.scss":
/*!********************************!*\
  !*** ./source/scss/style.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!********************************************************************************!*\
  !*** multi ./source/js/script.js ./source/scss/style.scss ./source/index.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./source/js/script.js */"./source/js/script.js");
__webpack_require__(/*! ./source/scss/style.scss */"./source/scss/style.scss");
module.exports = __webpack_require__(/*! ./source/index.html */"./source/index.html");


/***/ })

/******/ });
//# sourceMappingURL=script.js.map