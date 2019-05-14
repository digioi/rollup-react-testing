(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('react'), require('react-dom')) :
  typeof define === 'function' && define.amd ? define(['react', 'react-dom'], factory) :
  (global = global || self, factory(global.React, global.ReactDOM));
}(this, function (React, ReactDOM) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function camelToDash(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }
  function pascalToDash(str) {
    return camelToDash(str.replace(/((?!([A-Z]{2}|^))[A-Z])/g, '-$1'));
  }
  function dispatch(host, eventType) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return host.dispatchEvent(new CustomEvent(eventType, _objectSpread({
      bubbles: false
    }, options)));
  }
  function shadyCSS(fn, fallback) {
    var shady = window.ShadyCSS;
    /* istanbul ignore next */

    if (shady && !shady.nativeShadow) {
      return fn(shady);
    }

    return fallback;
  }
  function stringifyElement(element) {
    var tagName = String(element.tagName).toLowerCase();
    return "<".concat(tagName, ">");
  }
  var IS_IE = 'ActiveXObject' in window;
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlscy5qcyJdLCJuYW1lcyI6WyJjYW1lbFRvRGFzaCIsInN0ciIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsInBhc2NhbFRvRGFzaCIsImRpc3BhdGNoIiwiaG9zdCIsImV2ZW50VHlwZSIsIm9wdGlvbnMiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJidWJibGVzIiwic2hhZHlDU1MiLCJmbiIsImZhbGxiYWNrIiwic2hhZHkiLCJ3aW5kb3ciLCJTaGFkeUNTUyIsIm5hdGl2ZVNoYWRvdyIsInN0cmluZ2lmeUVsZW1lbnQiLCJlbGVtZW50IiwidGFnTmFtZSIsIlN0cmluZyIsIklTX0lFIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxTQUFTQSxXQUFULENBQXFCQyxHQUFyQixFQUEwQjtBQUMvQixTQUFPQSxHQUFHLENBQUNDLE9BQUosQ0FBWSxpQkFBWixFQUErQixPQUEvQixFQUF3Q0MsV0FBeEMsRUFBUDtBQUNEO0FBRUQsT0FBTyxTQUFTQyxZQUFULENBQXNCSCxHQUF0QixFQUEyQjtBQUNoQyxTQUFPRCxXQUFXLENBQUNDLEdBQUcsQ0FBQ0MsT0FBSixDQUFZLDBCQUFaLEVBQXdDLEtBQXhDLENBQUQsQ0FBbEI7QUFDRDtBQUVELE9BQU8sU0FBU0csUUFBVCxDQUFrQkMsSUFBbEIsRUFBd0JDLFNBQXhCLEVBQWlEO0FBQUEsTUFBZEMsT0FBYyx1RUFBSixFQUFJO0FBQ3RELFNBQU9GLElBQUksQ0FBQ0csYUFBTCxDQUFtQixJQUFJQyxXQUFKLENBQWdCSCxTQUFoQjtBQUE2QkksSUFBQUEsT0FBTyxFQUFFO0FBQXRDLEtBQWdESCxPQUFoRCxFQUFuQixDQUFQO0FBQ0Q7QUFFRCxPQUFPLFNBQVNJLFFBQVQsQ0FBa0JDLEVBQWxCLEVBQXNCQyxRQUF0QixFQUFnQztBQUNyQyxNQUFNQyxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBckI7QUFFQTs7QUFDQSxNQUFJRixLQUFLLElBQUksQ0FBQ0EsS0FBSyxDQUFDRyxZQUFwQixFQUFrQztBQUNoQyxXQUFPTCxFQUFFLENBQUNFLEtBQUQsQ0FBVDtBQUNEOztBQUVELFNBQU9ELFFBQVA7QUFDRDtBQUVELE9BQU8sU0FBU0ssZ0JBQVQsQ0FBMEJDLE9BQTFCLEVBQW1DO0FBQ3hDLE1BQU1DLE9BQU8sR0FBR0MsTUFBTSxDQUFDRixPQUFPLENBQUNDLE9BQVQsQ0FBTixDQUF3QmxCLFdBQXhCLEVBQWhCO0FBQ0Esb0JBQVdrQixPQUFYO0FBQ0Q7QUFFRCxPQUFPLElBQU1FLEtBQUssR0FBRyxtQkFBbUJQLE1BQWpDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNhbWVsVG9EYXNoKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csICckMS0kMicpLnRvTG93ZXJDYXNlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXNjYWxUb0Rhc2goc3RyKSB7XG4gIHJldHVybiBjYW1lbFRvRGFzaChzdHIucmVwbGFjZSgvKCg/IShbQS1aXXsyfXxeKSlbQS1aXSkvZywgJy0kMScpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BhdGNoKGhvc3QsIGV2ZW50VHlwZSwgb3B0aW9ucyA9IHt9KSB7XG4gIHJldHVybiBob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KGV2ZW50VHlwZSwgeyBidWJibGVzOiBmYWxzZSwgLi4ub3B0aW9ucyB9KSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaGFkeUNTUyhmbiwgZmFsbGJhY2spIHtcbiAgY29uc3Qgc2hhZHkgPSB3aW5kb3cuU2hhZHlDU1M7XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgaWYgKHNoYWR5ICYmICFzaGFkeS5uYXRpdmVTaGFkb3cpIHtcbiAgICByZXR1cm4gZm4oc2hhZHkpO1xuICB9XG5cbiAgcmV0dXJuIGZhbGxiYWNrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5naWZ5RWxlbWVudChlbGVtZW50KSB7XG4gIGNvbnN0IHRhZ05hbWUgPSBTdHJpbmcoZWxlbWVudC50YWdOYW1lKS50b0xvd2VyQ2FzZSgpO1xuICByZXR1cm4gYDwke3RhZ05hbWV9PmA7XG59XG5cbmV4cG9ydCBjb25zdCBJU19JRSA9ICdBY3RpdmVYT2JqZWN0JyBpbiB3aW5kb3c7XG4iXX0=

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  var defaultTransform = function defaultTransform(v) {
    return v;
  };

  var objectTransform = function objectTransform(value) {
    if (_typeof(value) !== 'object') {
      throw TypeError("Assigned value must be an object: ".concat(typeof v === "undefined" ? "undefined" : _typeof(v)));
    }

    return value && Object.freeze(value);
  };

  function property(value, connect) {
    var type = _typeof(value);

    var transform = defaultTransform;

    switch (type) {
      case 'string':
        transform = String;
        break;

      case 'number':
        transform = Number;
        break;

      case 'boolean':
        transform = Boolean;
        break;

      case 'function':
        transform = value;
        value = transform();
        break;

      case 'object':
        if (value) Object.freeze(value);
        transform = objectTransform;
        break;

      default:
        break;
    }

    return {
      get: function get(host) {
        var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : value;
        return val;
      },
      set: function set(host, val, oldValue) {
        return transform(val, oldValue);
      },
      connect: type !== 'object' && type !== 'undefined' ? function (host, key, invalidate) {
        if (host[key] === value) {
          var attrName = camelToDash(key);

          if (host.hasAttribute(attrName)) {
            var attrValue = host.getAttribute(attrName);
            host[key] = attrValue !== '' ? attrValue : true;
          }
        }

        return connect && connect(host, key, invalidate);
      } : connect
    };
  }
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9wZXJ0eS5qcyJdLCJuYW1lcyI6WyJjYW1lbFRvRGFzaCIsImRlZmF1bHRUcmFuc2Zvcm0iLCJ2Iiwib2JqZWN0VHJhbnNmb3JtIiwidmFsdWUiLCJUeXBlRXJyb3IiLCJPYmplY3QiLCJmcmVlemUiLCJwcm9wZXJ0eSIsImNvbm5lY3QiLCJ0eXBlIiwidHJhbnNmb3JtIiwiU3RyaW5nIiwiTnVtYmVyIiwiQm9vbGVhbiIsImdldCIsImhvc3QiLCJ2YWwiLCJzZXQiLCJvbGRWYWx1ZSIsImtleSIsImludmFsaWRhdGUiLCJhdHRyTmFtZSIsImhhc0F0dHJpYnV0ZSIsImF0dHJWYWx1ZSIsImdldEF0dHJpYnV0ZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxTQUFTQSxXQUFULFFBQTRCLFNBQTVCOztBQUVBLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQUMsQ0FBQztBQUFBLFNBQUlBLENBQUo7QUFBQSxDQUExQjs7QUFFQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBVztBQUNqQyxNQUFJLFFBQU9BLEtBQVAsTUFBaUIsUUFBckIsRUFBK0I7QUFDN0IsVUFBTUMsU0FBUyxvREFBNkNILENBQTdDLHlDQUE2Q0EsQ0FBN0MsR0FBZjtBQUNEOztBQUNELFNBQU9FLEtBQUssSUFBSUUsTUFBTSxDQUFDQyxNQUFQLENBQWNILEtBQWQsQ0FBaEI7QUFDRCxDQUxEOztBQU9BLGVBQWUsU0FBU0ksUUFBVCxDQUFrQkosS0FBbEIsRUFBeUJLLE9BQXpCLEVBQWtDO0FBQy9DLE1BQU1DLElBQUksV0FBVU4sS0FBVixDQUFWOztBQUNBLE1BQUlPLFNBQVMsR0FBR1YsZ0JBQWhCOztBQUVBLFVBQVFTLElBQVI7QUFDRSxTQUFLLFFBQUw7QUFDRUMsTUFBQUEsU0FBUyxHQUFHQyxNQUFaO0FBQ0E7O0FBQ0YsU0FBSyxRQUFMO0FBQ0VELE1BQUFBLFNBQVMsR0FBR0UsTUFBWjtBQUNBOztBQUNGLFNBQUssU0FBTDtBQUNFRixNQUFBQSxTQUFTLEdBQUdHLE9BQVo7QUFDQTs7QUFDRixTQUFLLFVBQUw7QUFDRUgsTUFBQUEsU0FBUyxHQUFHUCxLQUFaO0FBQ0FBLE1BQUFBLEtBQUssR0FBR08sU0FBUyxFQUFqQjtBQUNBOztBQUNGLFNBQUssUUFBTDtBQUNFLFVBQUlQLEtBQUosRUFBV0UsTUFBTSxDQUFDQyxNQUFQLENBQWNILEtBQWQ7QUFDWE8sTUFBQUEsU0FBUyxHQUFHUixlQUFaO0FBQ0E7O0FBQ0Y7QUFBUztBQWxCWDs7QUFxQkEsU0FBTztBQUNMWSxJQUFBQSxHQUFHLEVBQUUsYUFBQ0MsSUFBRDtBQUFBLFVBQU9DLEdBQVAsdUVBQWFiLEtBQWI7QUFBQSxhQUF1QmEsR0FBdkI7QUFBQSxLQURBO0FBRUxDLElBQUFBLEdBQUcsRUFBRSxhQUFDRixJQUFELEVBQU9DLEdBQVAsRUFBWUUsUUFBWjtBQUFBLGFBQXlCUixTQUFTLENBQUNNLEdBQUQsRUFBTUUsUUFBTixDQUFsQztBQUFBLEtBRkE7QUFHTFYsSUFBQUEsT0FBTyxFQUFFQyxJQUFJLEtBQUssUUFBVCxJQUFxQkEsSUFBSSxLQUFLLFdBQTlCLEdBQ0wsVUFBQ00sSUFBRCxFQUFPSSxHQUFQLEVBQVlDLFVBQVosRUFBMkI7QUFDM0IsVUFBSUwsSUFBSSxDQUFDSSxHQUFELENBQUosS0FBY2hCLEtBQWxCLEVBQXlCO0FBQ3ZCLFlBQU1rQixRQUFRLEdBQUd0QixXQUFXLENBQUNvQixHQUFELENBQTVCOztBQUVBLFlBQUlKLElBQUksQ0FBQ08sWUFBTCxDQUFrQkQsUUFBbEIsQ0FBSixFQUFpQztBQUMvQixjQUFNRSxTQUFTLEdBQUdSLElBQUksQ0FBQ1MsWUFBTCxDQUFrQkgsUUFBbEIsQ0FBbEI7QUFDQU4sVUFBQUEsSUFBSSxDQUFDSSxHQUFELENBQUosR0FBWUksU0FBUyxLQUFLLEVBQWQsR0FBbUJBLFNBQW5CLEdBQStCLElBQTNDO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPZixPQUFPLElBQUlBLE9BQU8sQ0FBQ08sSUFBRCxFQUFPSSxHQUFQLEVBQVlDLFVBQVosQ0FBekI7QUFDRCxLQVpNLEdBYUxaO0FBaEJDLEdBQVA7QUFrQkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjYW1lbFRvRGFzaCB9IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBkZWZhdWx0VHJhbnNmb3JtID0gdiA9PiB2O1xuXG5jb25zdCBvYmplY3RUcmFuc2Zvcm0gPSAodmFsdWUpID0+IHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoYEFzc2lnbmVkIHZhbHVlIG11c3QgYmUgYW4gb2JqZWN0OiAke3R5cGVvZiB2fWApO1xuICB9XG4gIHJldHVybiB2YWx1ZSAmJiBPYmplY3QuZnJlZXplKHZhbHVlKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb3BlcnR5KHZhbHVlLCBjb25uZWN0KSB7XG4gIGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIGxldCB0cmFuc2Zvcm0gPSBkZWZhdWx0VHJhbnNmb3JtO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICB0cmFuc2Zvcm0gPSBTdHJpbmc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdudW1iZXInOlxuICAgICAgdHJhbnNmb3JtID0gTnVtYmVyO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICB0cmFuc2Zvcm0gPSBCb29sZWFuO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgdHJhbnNmb3JtID0gdmFsdWU7XG4gICAgICB2YWx1ZSA9IHRyYW5zZm9ybSgpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgIGlmICh2YWx1ZSkgT2JqZWN0LmZyZWV6ZSh2YWx1ZSk7XG4gICAgICB0cmFuc2Zvcm0gPSBvYmplY3RUcmFuc2Zvcm07XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OiBicmVhaztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0OiAoaG9zdCwgdmFsID0gdmFsdWUpID0+IHZhbCxcbiAgICBzZXQ6IChob3N0LCB2YWwsIG9sZFZhbHVlKSA9PiB0cmFuc2Zvcm0odmFsLCBvbGRWYWx1ZSksXG4gICAgY29ubmVjdDogdHlwZSAhPT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gKGhvc3QsIGtleSwgaW52YWxpZGF0ZSkgPT4ge1xuICAgICAgICBpZiAoaG9zdFtrZXldID09PSB2YWx1ZSkge1xuICAgICAgICAgIGNvbnN0IGF0dHJOYW1lID0gY2FtZWxUb0Rhc2goa2V5KTtcblxuICAgICAgICAgIGlmIChob3N0Lmhhc0F0dHJpYnV0ZShhdHRyTmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJWYWx1ZSA9IGhvc3QuZ2V0QXR0cmlidXRlKGF0dHJOYW1lKTtcbiAgICAgICAgICAgIGhvc3Rba2V5XSA9IGF0dHJWYWx1ZSAhPT0gJycgPyBhdHRyVmFsdWUgOiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb25uZWN0ICYmIGNvbm5lY3QoaG9zdCwga2V5LCBpbnZhbGlkYXRlKTtcbiAgICAgIH1cbiAgICAgIDogY29ubmVjdCxcbiAgfTtcbn1cbiJdfQ==

  function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } return target; }

  function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _typeof$1(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$1 = function _typeof(obj) { return typeof obj; }; } else { _typeof$1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$1(obj); }
  var map = new WeakMap();
  var cache = new WeakMap();
  var FPS_THRESHOLD = 1000 / 60; // 60 FPS ~ 16,67ms time window

  var queue = [];
  function update() {
    var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var startTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    if (startTime && performance.now() - startTime > FPS_THRESHOLD) {
      requestAnimationFrame(function () {
        return update(index);
      });
    } else {
      var target = queue[index];
      var nextTime = performance.now();

      if (!target) {
        shadyCSS(function (shady) {
          return queue.forEach(function (t) {
            return shady.styleSubtree(t);
          });
        });
        queue = [];
      } else {
        if (map.has(target)) {
          var key = map.get(target);
          var prevUpdate = cache.get(target);

          try {
            var nextUpdate = target[key];

            if (nextUpdate !== prevUpdate) {
              cache.set(target, nextUpdate);
              nextUpdate();
              if (!prevUpdate) shadyCSS(function (shady) {
                return shady.styleElement(target);
              });
            }
          } catch (e) {
            update(index + 1, nextTime);
            throw e;
          }
        }

        update(index + 1, nextTime);
      }
    }
  }

  function addToQueue(event) {
    var target = event.composedPath()[0];

    if (target === event.currentTarget) {
      if (!queue[0]) {
        requestAnimationFrame(function () {
          return update();
        });
      }

      if (queue.indexOf(target) === -1) {
        queue.push(target);
      }
    }
  }

  function render(_get) {
    var customOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (typeof _get !== 'function') {
      throw TypeError("The first argument must be a function: ".concat(_typeof$1(_get)));
    }

    var options = _objectSpread$1({
      shadowRoot: true
    }, customOptions);

    return {
      get: function get(host) {
        var fn = _get(host);

        return function () {
          return fn(host, options.shadowRoot ? host.shadowRoot : host);
        };
      },
      connect: function connect(host, key) {
        if (map.has(host)) {
          throw Error("Render factory already used in '".concat(map.get(host), "' key"));
        }

        if (options.shadowRoot && !host.shadowRoot) {
          var shadowRootInit = {
            mode: 'open'
          };

          if (_typeof$1(options.shadowRoot) === 'object') {
            Object.assign(shadowRootInit, options.shadowRoot);
          }

          host.attachShadow(shadowRootInit);
        }

        host.addEventListener('@invalidate', addToQueue);
        map.set(host, key);
        return function () {
          host.removeEventListener('@invalidate', addToQueue);
          map.delete(host);
        };
      }
    };
  }
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZW5kZXIuanMiXSwibmFtZXMiOlsic2hhZHlDU1MiLCJtYXAiLCJXZWFrTWFwIiwiY2FjaGUiLCJGUFNfVEhSRVNIT0xEIiwicXVldWUiLCJ1cGRhdGUiLCJpbmRleCIsInN0YXJ0VGltZSIsInBlcmZvcm1hbmNlIiwibm93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidGFyZ2V0IiwibmV4dFRpbWUiLCJzaGFkeSIsImZvckVhY2giLCJ0Iiwic3R5bGVTdWJ0cmVlIiwiaGFzIiwia2V5IiwiZ2V0IiwicHJldlVwZGF0ZSIsIm5leHRVcGRhdGUiLCJzZXQiLCJzdHlsZUVsZW1lbnQiLCJlIiwiYWRkVG9RdWV1ZSIsImV2ZW50IiwiY29tcG9zZWRQYXRoIiwiY3VycmVudFRhcmdldCIsImluZGV4T2YiLCJwdXNoIiwicmVuZGVyIiwiY3VzdG9tT3B0aW9ucyIsIlR5cGVFcnJvciIsIm9wdGlvbnMiLCJzaGFkb3dSb290IiwiaG9zdCIsImZuIiwiY29ubmVjdCIsIkVycm9yIiwic2hhZG93Um9vdEluaXQiLCJtb2RlIiwiT2JqZWN0IiwiYXNzaWduIiwiYXR0YWNoU2hhZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkZWxldGUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLFNBQVNBLFFBQVQsUUFBeUIsU0FBekI7QUFFQSxJQUFNQyxHQUFHLEdBQUcsSUFBSUMsT0FBSixFQUFaO0FBQ0EsSUFBTUMsS0FBSyxHQUFHLElBQUlELE9BQUosRUFBZDtBQUNBLElBQU1FLGFBQWEsR0FBRyxPQUFPLEVBQTdCLEMsQ0FBaUM7O0FBQ2pDLElBQUlDLEtBQUssR0FBRyxFQUFaO0FBRUEsT0FBTyxTQUFTQyxNQUFULEdBQTBDO0FBQUEsTUFBMUJDLEtBQTBCLHVFQUFsQixDQUFrQjtBQUFBLE1BQWZDLFNBQWUsdUVBQUgsQ0FBRzs7QUFDL0MsTUFBSUEsU0FBUyxJQUFLQyxXQUFXLENBQUNDLEdBQVosS0FBb0JGLFNB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QUFDRCxVQUExQixHQUF1Q0MsSUFBOUMsQ0FBUjtBQUFBLE9BQVA7QUFDRCxLQUpJO0FBS0xFLElBQUFBLE9BTEssbUJBS0dGLElBTEgsRUFLU2xCLEdBTFQsRUFLYztBQUNqQixVQUFJbEIsR0FBRyxDQUFDaUIsR0FBSixDQUFRbUIsSUFBUixDQUFKLEVBQW1CO0FBQ2pCLGNBQU1HLEtBQUssMkNBQW9DdkMsR0FBRyxDQUFDbUIsR0FBSixDQUFRaUIsSUFBUixDQUFwQyxXQUFYO0FBQ0Q7O0FBRUQsVUFBSUYsT0FBTyxDQUFDQyxVQUFSLElBQXNCLENBQUNDLElBQUksQ0FBQ0QsVUFBaEMsRUFBNEM7QUFDMUMsWUFBTUssY0FBYyxHQUFHO0FBQUVDLFVBQUFBLElBQUksRUFBRTtBQUFSLFNBQXZCOztBQUNBLFlBQUksUUFBT1AsT0FBTyxDQUFDQyxVQUFmLE1BQThCLFFBQWxDLEVBQTRDO0FBQzFDTyxVQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBY0gsY0FBZCxFQUE4Qk4sT0FBTyxDQUFDQyxVQUF0QztBQUNEOztBQUNEQyxRQUFBQSxJQUFJLENBQUNRLFlBQUwsQ0FBa0JKLGNBQWxCO0FBQ0Q7O0FBRURKLE1BQUFBLElBQUksQ0FBQ1MsZ0JBQUwsQ0FBc0IsYUFBdEIsRUFBcUNwQixVQUFyQztBQUNBekIsTUFBQUEsR0FBRyxDQUFDc0IsR0FBSixDQUFRYyxJQUFSLEVBQWNsQixHQUFkO0FBRUEsYUFBTyxZQUFNO0FBQ1hrQixRQUFBQSxJQUFJLENBQUNVLG1CQUFMLENBQXlCLGFBQXpCLEVBQXdDckIsVUFBeEM7QUFDQXpCLFFBQUFBLEdBQUcsQ0FBQytDLE1BQUosQ0FBV1gsSUFBWDtBQUNELE9BSEQ7QUFJRDtBQXpCSSxHQUFQO0FBMkJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2hhZHlDU1MgfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgbWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IEZQU19USFJFU0hPTEQgPSAxMDAwIC8gNjA7IC8vIDYwIEZQUyB+IDE2LDY3bXMgdGltZSB3aW5kb3dcbmxldCBxdWV1ZSA9IFtdO1xuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlKGluZGV4ID0gMCwgc3RhcnRUaW1lID0gMCkge1xuICBpZiAoc3RhcnRUaW1lICYmIChwZXJmb3JtYW5jZS5ub3coKSAtIHN0YXJ0VGltZSA+IEZQU19USFJFU0hPTEQpKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHVwZGF0ZShpbmRleCkpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHRhcmdldCA9IHF1ZXVlW2luZGV4XTtcbiAgICBjb25zdCBuZXh0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHNoYWR5Q1NTKHNoYWR5ID0+IHF1ZXVlLmZvckVhY2godCA9PiBzaGFkeS5zdHlsZVN1YnRyZWUodCkpKTtcbiAgICAgIHF1ZXVlID0gW107XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChtYXAuaGFzKHRhcmdldCkpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gbWFwLmdldCh0YXJnZXQpO1xuICAgICAgICBjb25zdCBwcmV2VXBkYXRlID0gY2FjaGUuZ2V0KHRhcmdldCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgbmV4dFVwZGF0ZSA9IHRhcmdldFtrZXldO1xuICAgICAgICAgIGlmIChuZXh0VXBkYXRlICE9PSBwcmV2VXBkYXRlKSB7XG4gICAgICAgICAgICBjYWNoZS5zZXQodGFyZ2V0LCBuZXh0VXBkYXRlKTtcbiAgICAgICAgICAgIG5leHRVcGRhdGUoKTtcbiAgICAgICAgICAgIGlmICghcHJldlVwZGF0ZSkgc2hhZHlDU1Moc2hhZHkgPT4gc2hhZHkuc3R5bGVFbGVtZW50KHRhcmdldCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHVwZGF0ZShpbmRleCArIDEsIG5leHRUaW1lKTtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB1cGRhdGUoaW5kZXggKyAxLCBuZXh0VGltZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFRvUXVldWUoZXZlbnQpIHtcbiAgY29uc3QgdGFyZ2V0ID0gZXZlbnQuY29tcG9zZWRQYXRoKClbMF07XG4gIGlmICh0YXJnZXQgPT09IGV2ZW50LmN1cnJlbnRUYXJnZXQpIHtcbiAgICBpZiAoIXF1ZXVlWzBdKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCgpID0+IHVwZGF0ZSgpKSk7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5pbmRleE9mKHRhcmdldCkgPT09IC0xKSB7XG4gICAgICBxdWV1ZS5wdXNoKHRhcmdldCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcihnZXQsIGN1c3RvbU9wdGlvbnMgPSB7fSkge1xuICBpZiAodHlwZW9mIGdldCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IFR5cGVFcnJvcihgVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBmdW5jdGlvbjogJHt0eXBlb2YgZ2V0fWApO1xuICB9XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHsgc2hhZG93Um9vdDogdHJ1ZSwgLi4uY3VzdG9tT3B0aW9ucyB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0OiAoaG9zdCkgPT4ge1xuICAgICAgY29uc3QgZm4gPSBnZXQoaG9zdCk7XG4gICAgICByZXR1cm4gKCkgPT4gZm4oaG9zdCwgb3B0aW9ucy5zaGFkb3dSb290ID8gaG9zdC5zaGFkb3dSb290IDogaG9zdCk7XG4gICAgfSxcbiAgICBjb25uZWN0KGhvc3QsIGtleSkge1xuICAgICAgaWYgKG1hcC5oYXMoaG9zdCkpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoYFJlbmRlciBmYWN0b3J5IGFscmVhZHkgdXNlZCBpbiAnJHttYXAuZ2V0KGhvc3QpfScga2V5YCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLnNoYWRvd1Jvb3QgJiYgIWhvc3Quc2hhZG93Um9vdCkge1xuICAgICAgICBjb25zdCBzaGFkb3dSb290SW5pdCA9IHsgbW9kZTogJ29wZW4nIH07XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5zaGFkb3dSb290ID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24oc2hhZG93Um9vdEluaXQsIG9wdGlvbnMuc2hhZG93Um9vdCk7XG4gICAgICAgIH1cbiAgICAgICAgaG9zdC5hdHRhY2hTaGFkb3coc2hhZG93Um9vdEluaXQpO1xuICAgICAgfVxuXG4gICAgICBob3N0LmFkZEV2ZW50TGlzdGVuZXIoJ0BpbnZhbGlkYXRlJywgYWRkVG9RdWV1ZSk7XG4gICAgICBtYXAuc2V0KGhvc3QsIGtleSk7XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGhvc3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignQGludmFsaWRhdGUnLCBhZGRUb1F1ZXVlKTtcbiAgICAgICAgbWFwLmRlbGV0ZShob3N0KTtcbiAgICAgIH07XG4gICAgfSxcbiAgfTtcbn1cbiJdfQ==

  var entries = new WeakMap();
  function getEntry(target, key) {
    var targetMap = entries.get(target);

    if (!targetMap) {
      targetMap = new Map();
      entries.set(target, targetMap);
    }

    var entry = targetMap.get(key);

    if (!entry) {
      entry = {
        target: target,
        key: key,
        value: undefined,
        deps: new Set(),
        state: 1,
        checksum: 0
      };
      targetMap.set(key, entry);
    }

    return entry;
  }

  function calculateChecksum(_ref) {
    var state = _ref.state,
        deps = _ref.deps;
    var checksum = state;
    deps.forEach(function (entry) {
      // eslint-disable-next-line no-unused-expressions
      entry.target[entry.key];
      checksum += entry.state;
    });
    return checksum;
  }

  var context = null;
  function get(target, key, getter) {
    var entry = getEntry(target, key);

    if (context === entry) {
      context = null;
      throw Error("Circular '".concat(key, "' get invocation in '").concat(stringifyElement(target), "'"));
    }

    if (context) {
      context.deps.add(entry);
    }

    var parentContext = context;
    context = entry;

    if (entry.checksum && entry.checksum === calculateChecksum(entry)) {
      context = parentContext;
      return entry.value;
    }

    entry.deps.clear();

    try {
      var nextValue = getter(target, entry.value);

      if (nextValue !== entry.value) {
        entry.state += 1;
        entry.value = nextValue;
      }

      entry.checksum = calculateChecksum(entry);
      context = parentContext;
    } catch (e) {
      context = null;
      throw e;
    }

    return entry.value;
  }
  function set(target, key, setter, value, callback) {
    if (context) {
      context = null;
      throw Error("Try to set '".concat(key, "' of '").concat(stringifyElement(target), "' in get call"));
    }

    var entry = getEntry(target, key);
    var newValue = setter(target, value, entry.value);

    if (newValue !== entry.value) {
      entry.state += 1;
      entry.value = newValue;
      callback();
    }
  }
  function invalidate(target, key, clearValue) {
    if (context) {
      context = null;
      throw Error("Try to invalidate '".concat(key, "' in '").concat(stringifyElement(target), "' get call"));
    }

    var entry = getEntry(target, key);
    entry.checksum = 0;

    if (clearValue) {
      entry.value = undefined;
    }
  }
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jYWNoZS5qcyJdLCJuYW1lcyI6WyJzdHJpbmdpZnlFbGVtZW50IiwiZW50cmllcyIsIldlYWtNYXAiLCJnZXRFbnRyeSIsInRhcmdldCIsImtleSIsInRhcmdldE1hcCIsImdldCIsIk1hcCIsInNldCIsImVudHJ5IiwidmFsdWUiLCJ1bmRlZmluZWQiLCJkZXBzIiwiU2V0Iiwic3RhdGUiLCJjaGVja3N1bSIsImNhbGN1bGF0ZUNoZWNrc3VtIiwiZm9yRWFjaCIsImNvbnRleHQiLCJnZXR0ZXIiLCJFcnJvciIsImFkZCIsInBhcmVudENvbnRleHQiLCJjbGVhciIsIm5leHRWYWx1ZSIsImUiLCJzZXR0ZXIiLCJjYWxsYmFjayIsIm5ld1ZhbHVlIiwiaW52YWxpZGF0ZSIsImNsZWFyVmFsdWUiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLGdCQUFULFFBQWlDLFNBQWpDO0FBRUEsSUFBTUMsT0FBTyxHQUFHLElBQUlDLE9BQUosRUFBaEI7QUFDQSxPQUFPLFNBQVNDLFFBQVQsQ0FBa0JDLE1BQWxCLEVBQTBCQyxHQUExQixFQUErQjtBQUNwQyxNQUFJQyxTQUFTLEdBQUdMLE9BQU8sQ0FBQ00sR0FBUixDQUFZSCxNQUFaLENBQWhCOztBQUNBLE1BQUksQ0FBQ0UsU0FBTCxFQUFnQjtBQUNkQSxJQUFBQSxTQUFTLEdBQUcsSUFBSUUsR0FBSixFQUFaO0FBQ0FQLElBQUFBLE9BQU8sQ0FBQ1EsR0FBUixDQUFZTCxNQUFaLEVBQW9CRSxTQUFwQjtBQUNEOztBQUVELE1BQUlJLEtBQUssR0FBR0osU0FBUyxDQUFDQyxHQUFWLENBQWNGLEdBQWQsQ0FBWjs7QUFFQSxNQUFJLENBQUNLLEtBQUwsRUFBWTtBQUNWQSxJQUFBQSxLQUFLLEdBQUc7QUFDTk4sTUFBQUEsTUFBTSxFQUFOQSxNQURNO0FBRU5DLE1BQUFBLEdBQUcsRUFBSEEsR0FGTTtBQUdOTSxNQUFBQSxLQUFLLEVBQUVDLFNBSEQ7QUFJTkMsTUFBQUEsSUFBSSxFQUFFLElBQUlDLEdBQUosRUFKQTtBQUtOQyxNQUFBQSxLQUFLLEVBQUUsQ0FMRDtBQU1OQyxNQUFBQSxRQUFRLEVBQUU7QUFOSixLQUFSO0FBUUFWLElBQUFBLFNBQVMsQ0FBQ0csR0FBVixDQUFjSixHQUFkLEVBQW1CSyxLQUFuQjtBQUNEOztBQUVELFNBQU9BLEtBQVA7QUFDRDs7QUFFRCxTQUFTTyxpQkFBVCxPQUE0QztBQUFBLE1BQWZGLEtBQWUsUUFBZkEsS0FBZTtBQUFBLE1BQVJGLElBQVEsUUFBUkEsSUFBUTtBQUMxQyxNQUFJRyxRQUFRLEdBQUdELEtBQWY7QUFDQUYsRUFBQUEsSUFBSSxDQUFDSyxPQUFMLENBQWEsVUFBQ1IsS0FBRCxFQUFXO0FBQ3RCO0FBQ0FBLElBQUFBLEtBQUssQ0FBQ04sTUFBTixDQUFhTSxLQUFLLENBQUNMLEdBQW5CO0FBQ0FXLElBQUFBLFFBQVEsSUFBSU4sS0FBSyxDQUFDSyxLQUFsQjtBQUNELEdBSkQ7QUFNQSxTQUFPQyxRQUFQO0FBQ0Q7O0FBRUQsSUFBSUcsT0FBTyxHQUFHLElBQWQ7QUFDQSxPQUFPLFNBQVNaLEdBQVQsQ0FBYUgsTUFBYixFQUFxQkMsR0FBckIsRUFBMEJlLE1BQTFCLEVBQWtDO0FBQ3ZDLE1BQU1WLEtBQUssR0FBR1AsUUFBUSxDQUFDQyxNQUFELEVBQVNDLEdBQVQsQ0FBdEI7O0FBRUEsTUFBSWMsT0FBTyxLQUFLVCxLQUFoQixFQUF1QjtBQUNyQlMsSUFBQUEsT0FBTyxHQUFHLElBQVY7QUFDQSxVQUFNRSxLQUFLLHFCQUFjaEIsR0FBZCxrQ0FBeUNMLGdCQUFnQixDQUFDSSxNQUFELENBQXpELE9BQVg7QUFDRDs7QUFFRCxNQUFJZSxPQUFKLEVBQWE7QUFDWEEsSUFBQUEsT0FBTyxDQUFDTixJQUFSLENBQWFTLEdBQWIsQ0FBaUJaLEtBQWpCO0FBQ0Q7O0FBRUQsTUFBTWEsYUFBYSxHQUFHSixPQUF0QjtBQUNBQSxFQUFBQSxPQUFPLEdBQUdULEtBQVY7O0FBRUEsTUFBSUEsS0FBSyxDQUFDTSxRQUFOLElBQWtCTixLQUFLLENBQUNNLFFBQU4sS0FBbUJDLGlCQUFpQixDQUFDUCxLQUFELENBQTFELEVBQW1FO0FBQ2pFUyxJQUFBQSxPQUFPLEdBQUdJLGFBQVY7QUFDQSxXQUFPYixLQUFLLENBQUNDLEtBQWI7QUFDRDs7QUFFREQsRUFBQUEsS0FBSyxDQUFDRyxJQUFOLENBQVdXLEtBQVg7O0FBRUEsTUFBSTtBQUNGLFFBQU1DLFNBQVMsR0FBR0wsTUFBTSxDQUFDaEIsTUFBRCxFQUFTTSxLQUFLLENBQUNDLEtBQWYsQ0FBeEI7O0FBRUEsUUFBSWMsU0FBUyxLQUFLZixLQUFLLENBQUNDLEtBQXhCLEVBQStCO0FBQzdCRCxNQUFBQSxLQUFLLENBQUNLLEtBQU4sSUFBZSxDQUFmO0FBQ0FMLE1BQUFBLEtBQUssQ0FBQ0MsS0FBTixHQUFjYyxTQUFkO0FBQ0Q7O0FBRURmLElBQUFBLEtBQUssQ0FBQ00sUUFBTixHQUFpQkMsaUJBQWlCLENBQUNQLEtBQUQsQ0FBbEM7QUFDQVMsSUFBQUEsT0FBTyxHQUFHSSxhQUFWO0FBQ0QsR0FWRCxDQVVFLE9BQU9HLENBQVAsRUFBVTtBQUNWUCxJQUFBQSxPQUFPLEdBQUcsSUFBVjtBQUNBLFVBQU1PLENBQU47QUFDRDs7QUFFRCxTQUFPaEIsS0FBSyxDQUFDQyxLQUFiO0FBQ0Q7QUFFRCxPQUFPLFNBQVNGLEdBQVQsQ0FBYUwsTUFBYixFQUFxQkMsR0FBckIsRUFBMEJzQixNQUExQixFQUFrQ2hCLEtBQWxDLEVBQXlDaUIsUUFBekMsRUFBbUQ7QUFDeEQsTUFBSVQsT0FBSixFQUFhO0FBQ1hBLElBQUFBLE9BQU8sR0FBRyxJQUFWO0FBQ0EsVUFBTUUsS0FBSyx1QkFBZ0JoQixHQUFoQixtQkFBNEJMLGdCQUFnQixDQUFDSSxNQUFELENBQTVDLG1CQUFYO0FBQ0Q7O0FBRUQsTUFBTU0sS0FBSyxHQUFHUCxRQUFRLENBQUNDLE1BQUQsRUFBU0MsR0FBVCxDQUF0QjtBQUNBLE1BQU13QixRQUFRLEdBQUdGLE1BQU0sQ0FBQ3ZCLE1BQUQsRUFBU08sS0FBVCxFQUFnQkQsS0FBSyxDQUFDQyxLQUF0QixDQUF2Qjs7QUFFQSxNQUFJa0IsUUFBUSxLQUFLbkIsS0FBSyxDQUFDQyxLQUF2QixFQUE4QjtBQUM1QkQsSUFBQUEsS0FBSyxDQUFDSyxLQUFOLElBQWUsQ0FBZjtBQUNBTCxJQUFBQSxLQUFLLENBQUNDLEtBQU4sR0FBY2tCLFFBQWQ7QUFFQUQsSUFBQUEsUUFBUTtBQUNUO0FBQ0Y7QUFFRCxPQUFPLFNBQVNFLFVBQVQsQ0FBb0IxQixNQUFwQixFQUE0QkMsR0FBNUIsRUFBaUMwQixVQUFqQyxFQUE2QztBQUNsRCxNQUFJWixPQUFKLEVBQWE7QUFDWEEsSUFBQUEsT0FBTyxHQUFHLElBQVY7QUFDQSxVQUFNRSxLQUFLLDhCQUF1QmhCLEdBQXZCLG1CQUFtQ0wsZ0JBQWdCLENBQUNJLE1BQUQsQ0FBbkQsZ0JBQVg7QUFDRDs7QUFFRCxNQUFNTSxLQUFLLEdBQUdQLFFBQVEsQ0FBQ0MsTUFBRCxFQUFTQyxHQUFULENBQXRCO0FBRUFLLEVBQUFBLEtBQUssQ0FBQ00sUUFBTixHQUFpQixDQUFqQjs7QUFFQSxNQUFJZSxVQUFKLEVBQWdCO0FBQ2RyQixJQUFBQSxLQUFLLENBQUNDLEtBQU4sR0FBY0MsU0FBZDtBQUNEO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdHJpbmdpZnlFbGVtZW50IH0gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IGVudHJpZXMgPSBuZXcgV2Vha01hcCgpO1xuZXhwb3J0IGZ1bmN0aW9uIGdldEVudHJ5KHRhcmdldCwga2V5KSB7XG4gIGxldCB0YXJnZXRNYXAgPSBlbnRyaWVzLmdldCh0YXJnZXQpO1xuICBpZiAoIXRhcmdldE1hcCkge1xuICAgIHRhcmdldE1hcCA9IG5ldyBNYXAoKTtcbiAgICBlbnRyaWVzLnNldCh0YXJnZXQsIHRhcmdldE1hcCk7XG4gIH1cblxuICBsZXQgZW50cnkgPSB0YXJnZXRNYXAuZ2V0KGtleSk7XG5cbiAgaWYgKCFlbnRyeSkge1xuICAgIGVudHJ5ID0ge1xuICAgICAgdGFyZ2V0LFxuICAgICAga2V5LFxuICAgICAgdmFsdWU6IHVuZGVmaW5lZCxcbiAgICAgIGRlcHM6IG5ldyBTZXQoKSxcbiAgICAgIHN0YXRlOiAxLFxuICAgICAgY2hlY2tzdW06IDAsXG4gICAgfTtcbiAgICB0YXJnZXRNYXAuc2V0KGtleSwgZW50cnkpO1xuICB9XG5cbiAgcmV0dXJuIGVudHJ5O1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVDaGVja3N1bSh7IHN0YXRlLCBkZXBzIH0pIHtcbiAgbGV0IGNoZWNrc3VtID0gc3RhdGU7XG4gIGRlcHMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG4gICAgZW50cnkudGFyZ2V0W2VudHJ5LmtleV07XG4gICAgY2hlY2tzdW0gKz0gZW50cnkuc3RhdGU7XG4gIH0pO1xuXG4gIHJldHVybiBjaGVja3N1bTtcbn1cblxubGV0IGNvbnRleHQgPSBudWxsO1xuZXhwb3J0IGZ1bmN0aW9uIGdldCh0YXJnZXQsIGtleSwgZ2V0dGVyKSB7XG4gIGNvbnN0IGVudHJ5ID0gZ2V0RW50cnkodGFyZ2V0LCBrZXkpO1xuXG4gIGlmIChjb250ZXh0ID09PSBlbnRyeSkge1xuICAgIGNvbnRleHQgPSBudWxsO1xuICAgIHRocm93IEVycm9yKGBDaXJjdWxhciAnJHtrZXl9JyBnZXQgaW52b2NhdGlvbiBpbiAnJHtzdHJpbmdpZnlFbGVtZW50KHRhcmdldCl9J2ApO1xuICB9XG5cbiAgaWYgKGNvbnRleHQpIHtcbiAgICBjb250ZXh0LmRlcHMuYWRkKGVudHJ5KTtcbiAgfVxuXG4gIGNvbnN0IHBhcmVudENvbnRleHQgPSBjb250ZXh0O1xuICBjb250ZXh0ID0gZW50cnk7XG5cbiAgaWYgKGVudHJ5LmNoZWNrc3VtICYmIGVudHJ5LmNoZWNrc3VtID09PSBjYWxjdWxhdGVDaGVja3N1bShlbnRyeSkpIHtcbiAgICBjb250ZXh0ID0gcGFyZW50Q29udGV4dDtcbiAgICByZXR1cm4gZW50cnkudmFsdWU7XG4gIH1cblxuICBlbnRyeS5kZXBzLmNsZWFyKCk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBuZXh0VmFsdWUgPSBnZXR0ZXIodGFyZ2V0LCBlbnRyeS52YWx1ZSk7XG5cbiAgICBpZiAobmV4dFZhbHVlICE9PSBlbnRyeS52YWx1ZSkge1xuICAgICAgZW50cnkuc3RhdGUgKz0gMTtcbiAgICAgIGVudHJ5LnZhbHVlID0gbmV4dFZhbHVlO1xuICAgIH1cblxuICAgIGVudHJ5LmNoZWNrc3VtID0gY2FsY3VsYXRlQ2hlY2tzdW0oZW50cnkpO1xuICAgIGNvbnRleHQgPSBwYXJlbnRDb250ZXh0O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29udGV4dCA9IG51bGw7XG4gICAgdGhyb3cgZTtcbiAgfVxuXG4gIHJldHVybiBlbnRyeS52YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldCh0YXJnZXQsIGtleSwgc2V0dGVyLCB2YWx1ZSwgY2FsbGJhY2spIHtcbiAgaWYgKGNvbnRleHQpIHtcbiAgICBjb250ZXh0ID0gbnVsbDtcbiAgICB0aHJvdyBFcnJvcihgVHJ5IHRvIHNldCAnJHtrZXl9JyBvZiAnJHtzdHJpbmdpZnlFbGVtZW50KHRhcmdldCl9JyBpbiBnZXQgY2FsbGApO1xuICB9XG5cbiAgY29uc3QgZW50cnkgPSBnZXRFbnRyeSh0YXJnZXQsIGtleSk7XG4gIGNvbnN0IG5ld1ZhbHVlID0gc2V0dGVyKHRhcmdldCwgdmFsdWUsIGVudHJ5LnZhbHVlKTtcblxuICBpZiAobmV3VmFsdWUgIT09IGVudHJ5LnZhbHVlKSB7XG4gICAgZW50cnkuc3RhdGUgKz0gMTtcbiAgICBlbnRyeS52YWx1ZSA9IG5ld1ZhbHVlO1xuXG4gICAgY2FsbGJhY2soKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52YWxpZGF0ZSh0YXJnZXQsIGtleSwgY2xlYXJWYWx1ZSkge1xuICBpZiAoY29udGV4dCkge1xuICAgIGNvbnRleHQgPSBudWxsO1xuICAgIHRocm93IEVycm9yKGBUcnkgdG8gaW52YWxpZGF0ZSAnJHtrZXl9JyBpbiAnJHtzdHJpbmdpZnlFbGVtZW50KHRhcmdldCl9JyBnZXQgY2FsbGApO1xuICB9XG5cbiAgY29uc3QgZW50cnkgPSBnZXRFbnRyeSh0YXJnZXQsIGtleSk7XG5cbiAgZW50cnkuY2hlY2tzdW0gPSAwO1xuXG4gIGlmIChjbGVhclZhbHVlKSB7XG4gICAgZW50cnkudmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbn1cbiJdfQ==

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof$2(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

  function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

  function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _typeof$2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$2 = function _typeof(obj) { return typeof obj; }; } else { _typeof$2 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$2(obj); }


  function dispatchInvalidate(host) {
    dispatch(host, '@invalidate', {
      bubbles: true,
      composed: true
    });
  }

  var defaultMethod = function defaultMethod(host, value) {
    return value;
  };

  function compile(Hybrid, hybrids) {
    Hybrid.hybrids = hybrids;
    Hybrid.connects = [];
    Object.keys(hybrids).forEach(function (key) {
      var value = hybrids[key];

      var type = _typeof$2(value);

      var config;

      if (type === 'function') {
        config = key === 'render' ? render(value) : {
          get: value
        };
      } else if (value === null || type !== 'object' || type === 'object' && !value.get && !value.set && !value.connect) {
        config = property(value);
      } else {
        config = {
          get: value.get || defaultMethod,
          set: value.set || !value.get && defaultMethod || undefined,
          connect: value.connect
        };
      }

      Object.defineProperty(Hybrid.prototype, key, {
        get: function get$1() {
          return get(this, key, config.get);
        },
        set: config.set && function set$1(newValue) {
          var _this = this;

          set(this, key, config.set, newValue, function () {
            return dispatchInvalidate(_this);
          });
        },
        enumerable: true,
        configurable: "production" !== 'production'
      });

      if (config.connect) {
        Hybrid.connects.push(function (host) {
          return config.connect(host, key, function () {
            var clearCache = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            if (clearCache) invalidate(host, key);
            dispatchInvalidate(host);
          });
        });
      }
    });
  }

  var connects = new WeakMap();

  function defineElement(tagName, hybridsOrConstructor) {
    var type = _typeof$2(hybridsOrConstructor);

    if (type !== 'object' && type !== 'function') {
      throw TypeError("Second argument must be an object or a function: ".concat(type));
    }

    var CustomElement = window.customElements.get(tagName);

    if (type === 'function') {
      if (CustomElement !== hybridsOrConstructor) {
        return window.customElements.define(tagName, hybridsOrConstructor);
      }

      return CustomElement;
    }

    if (CustomElement) {
      if (CustomElement.hybrids === hybridsOrConstructor) {
        return CustomElement;
      }

      throw Error("Element '".concat(tagName, "' already defined"));
    }

    var Hybrid =
    /*#__PURE__*/
    function (_HTMLElement) {
      _inherits(Hybrid, _HTMLElement);

      function Hybrid() {
        _classCallCheck(this, Hybrid);

        return _possibleConstructorReturn(this, _getPrototypeOf(Hybrid).apply(this, arguments));
      }

      _createClass(Hybrid, [{
        key: "connectedCallback",
        value: function connectedCallback() {
          var _this2 = this;

          var list = this.constructor.connects.reduce(function (acc, fn) {
            var result = fn(_this2);
            if (result) acc.add(result);
            return acc;
          }, new Set());
          connects.set(this, list);
          dispatchInvalidate(this);
        }
      }, {
        key: "disconnectedCallback",
        value: function disconnectedCallback() {
          var list = connects.get(this);
          list.forEach(function (fn) {
            return fn();
          });
        }
      }], [{
        key: "name",
        get: function get() {
          return tagName;
        }
      }]);

      return Hybrid;
    }(_wrapNativeSuper(HTMLElement));

    compile(Hybrid, hybridsOrConstructor);
    customElements.define(tagName, Hybrid);
    return Hybrid;
  }

  function defineMap(elements) {
    return Object.keys(elements).reduce(function (acc, key) {
      var tagName = pascalToDash(key);
      acc[key] = defineElement(tagName, elements[key]);
      return acc;
    }, {});
  }

  function define() {
    if (_typeof$2(arguments.length <= 0 ? undefined : arguments[0]) === 'object') {
      return defineMap(arguments.length <= 0 ? undefined : arguments[0]);
    }

    return defineElement.apply(void 0, arguments);
  }
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWZpbmUuanMiXSwibmFtZXMiOlsicHJvcGVydHkiLCJyZW5kZXIiLCJjYWNoZSIsImRpc3BhdGNoIiwicGFzY2FsVG9EYXNoIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiZSIsImRpc3BhdGNoSW52YWxpZGF0ZSIsImhvc3QiLCJidWJibGVzIiwiY29tcG9zZWQiLCJkZWZhdWx0TWV0aG9kIiwidmFsdWUiLCJjb21waWxlIiwiSHlicmlkIiwiaHlicmlkcyIsImNvbm5lY3RzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJ0eXBlIiwiY29uZmlnIiwiZ2V0Iiwic2V0IiwiY29ubmVjdCIsInVuZGVmaW5lZCIsImRlZmluZVByb3BlcnR5IiwicHJvdG90eXBlIiwibmV3VmFsdWUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwicHVzaCIsImNsZWFyQ2FjaGUiLCJpbnZhbGlkYXRlIiwidXBkYXRlIiwid2Fsa0luU2hhZG93Iiwibm9kZSIsImZuIiwiQXJyYXkiLCJmcm9tIiwiY2hpbGRyZW4iLCJlbCIsInNoYWRvd1Jvb3QiLCJ1cGRhdGVRdWV1ZSIsIk1hcCIsImxhc3RIeWJyaWRzIiwic2l6ZSIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsImRvY3VtZW50IiwiYm9keSIsImhhcyIsImNvbnN0cnVjdG9yIiwiZGlzY29ubmVjdGVkQ2FsbGJhY2siLCJjb25uZWN0ZWRDYWxsYmFjayIsImNsZWFyIiwiV2Vha01hcCIsImRlZmluZUVsZW1lbnQiLCJ0YWdOYW1lIiwiaHlicmlkc09yQ29uc3RydWN0b3IiLCJUeXBlRXJyb3IiLCJDdXN0b21FbGVtZW50Iiwid2luZG93IiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiLCJFcnJvciIsImxpc3QiLCJyZWR1Y2UiLCJhY2MiLCJyZXN1bHQiLCJhZGQiLCJTZXQiLCJIVE1MRWxlbWVudCIsImRlZmluZU1hcCIsImVsZW1lbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7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Q0FBQ0MsTUFBRCxFQUFTK0Msb0JBQVQsQ0FBUDtBQUNBSSxFQUFBQSxjQUFjLENBQUNDLE1BQWYsQ0FBc0JOLE9BQXRCLEVBQStCOUMsTUFBL0I7QUFFQSxTQUFPQSxNQUFQO0FBQ0Q7O0FBRUQsU0FBUzZELFNBQVQsQ0FBbUJDLFFBQW5CLEVBQTZCO0FBQzNCLFNBQU8zRCxNQUFNLENBQUNDLElBQVAsQ0FBWTBELFFBQVosRUFBc0JQLE1BQXRCLENBQTZCLFVBQUNDLEdBQUQsRUFBTWxELEdBQU4sRUFBYztBQUNoRCxRQUFNd0MsT0FBTyxHQUFHMUQsWUFBWSxDQUFDa0IsR0FBRCxDQUE1QjtBQUNBa0QsSUFBQUEsR0FBRyxDQUFDbEQsR0FBRCxDQUFILEdBQVd1QyxhQUFhLENBQUNDLE9BQUQsRUFBVWdCLFFBQVEsQ0FBQ3hELEdBQUQsQ0FBbEIsQ0FBeEI7QUFFQSxXQUFPa0QsR0FBUDtBQUNELEdBTE0sRUFLSixFQUxJLENBQVA7QUFNRDs7QUFFRCxlQUFlLFNBQVNKLE1BQVQsR0FBeUI7QUFDdEMsTUFBSSw4REFBbUIsUUFBdkIsRUFBaUM7QUFDL0IsV0FBT1MsU0FBUyxrREFBaEI7QUFDRDs7QUFFRCxTQUFPaEIsYUFBYSxNQUFiLG1CQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvcGVydHkgZnJvbSAnLi9wcm9wZXJ0eSc7XG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vcmVuZGVyJztcblxuaW1wb3J0ICogYXMgY2FjaGUgZnJvbSAnLi9jYWNoZSc7XG5pbXBvcnQgeyBkaXNwYXRjaCwgcGFzY2FsVG9EYXNoIH0gZnJvbSAnLi91dGlscyc7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG50cnkgeyBwcm9jZXNzLmVudi5OT0RFX0VOViB9IGNhdGNoKGUpIHsgdmFyIHByb2Nlc3MgPSB7IGVudjogeyBOT0RFX0VOVjogJ3Byb2R1Y3Rpb24nIH0gfTsgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbmZ1bmN0aW9uIGRpc3BhdGNoSW52YWxpZGF0ZShob3N0KSB7XG4gIGRpc3BhdGNoKGhvc3QsICdAaW52YWxpZGF0ZScsIHsgYnViYmxlczogdHJ1ZSwgY29tcG9zZWQ6IHRydWUgfSk7XG59XG5cbmNvbnN0IGRlZmF1bHRNZXRob2QgPSAoaG9zdCwgdmFsdWUpID0+IHZhbHVlO1xuXG5mdW5jdGlvbiBjb21waWxlKEh5YnJpZCwgaHlicmlkcykge1xuICBIeWJyaWQuaHlicmlkcyA9IGh5YnJpZHM7XG4gIEh5YnJpZC5jb25uZWN0cyA9IFtdO1xuXG4gIE9iamVjdC5rZXlzKGh5YnJpZHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gaHlicmlkc1trZXldO1xuICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsdWU7XG5cbiAgICBsZXQgY29uZmlnO1xuXG4gICAgaWYgKHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbmZpZyA9IGtleSA9PT0gJ3JlbmRlcicgPyByZW5kZXIodmFsdWUpIDogeyBnZXQ6IHZhbHVlIH07XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB0eXBlICE9PSAnb2JqZWN0JyB8fCAodHlwZSA9PT0gJ29iamVjdCcgJiYgIXZhbHVlLmdldCAmJiAhdmFsdWUuc2V0ICYmICF2YWx1ZS5jb25uZWN0KSkge1xuICAgICAgY29uZmlnID0gcHJvcGVydHkodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25maWcgPSB7XG4gICAgICAgIGdldDogdmFsdWUuZ2V0IHx8IGRlZmF1bHRNZXRob2QsXG4gICAgICAgIHNldDogdmFsdWUuc2V0IHx8ICghdmFsdWUuZ2V0ICYmIGRlZmF1bHRNZXRob2QpIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgY29ubmVjdDogdmFsdWUuY29ubmVjdCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEh5YnJpZC5wcm90b3R5cGUsIGtleSwge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBjYWNoZS5nZXQodGhpcywga2V5LCBjb25maWcuZ2V0KTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGNvbmZpZy5zZXQgJiYgZnVuY3Rpb24gc2V0KG5ld1ZhbHVlKSB7XG4gICAgICAgIGNhY2hlLnNldCh0aGlzLCBrZXksIGNvbmZpZy5zZXQsIG5ld1ZhbHVlLCAoKSA9PiBkaXNwYXRjaEludmFsaWRhdGUodGhpcykpO1xuICAgICAgfSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicsXG4gICAgfSk7XG5cbiAgICBpZiAoY29uZmlnLmNvbm5lY3QpIHtcbiAgICAgIEh5YnJpZC5jb25uZWN0cy5wdXNoKGhvc3QgPT4gY29uZmlnLmNvbm5lY3QoaG9zdCwga2V5LCAoY2xlYXJDYWNoZSA9IHRydWUpID0+IHtcbiAgICAgICAgaWYgKGNsZWFyQ2FjaGUpIGNhY2hlLmludmFsaWRhdGUoaG9zdCwga2V5KTtcbiAgICAgICAgZGlzcGF0Y2hJbnZhbGlkYXRlKGhvc3QpO1xuICAgICAgfSkpO1xuICAgIH1cbiAgfSk7XG59XG5cbmxldCB1cGRhdGU7XG4vKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgY29uc3Qgd2Fsa0luU2hhZG93ID0gKG5vZGUsIGZuKSA9PiB7XG4gICAgZm4obm9kZSk7XG5cbiAgICBBcnJheS5mcm9tKG5vZGUuY2hpbGRyZW4pXG4gICAgICAuZm9yRWFjaChlbCA9PiB3YWxrSW5TaGFkb3coZWwsIGZuKSk7XG5cbiAgICBpZiAobm9kZS5zaGFkb3dSb290KSB7XG4gICAgICBBcnJheS5mcm9tKG5vZGUuc2hhZG93Um9vdC5jaGlsZHJlbilcbiAgICAgICAgLmZvckVhY2goZWwgPT4gd2Fsa0luU2hhZG93KGVsLCBmbikpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB1cGRhdGVRdWV1ZSA9IG5ldyBNYXAoKTtcbiAgdXBkYXRlID0gKEh5YnJpZCwgbGFzdEh5YnJpZHMpID0+IHtcbiAgICBpZiAoIXVwZGF0ZVF1ZXVlLnNpemUpIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICB3YWxrSW5TaGFkb3coZG9jdW1lbnQuYm9keSwgKG5vZGUpID0+IHtcbiAgICAgICAgICBpZiAodXBkYXRlUXVldWUuaGFzKG5vZGUuY29uc3RydWN0b3IpKSB7XG4gICAgICAgICAgICBjb25zdCBoeWJyaWRzID0gdXBkYXRlUXVldWUuZ2V0KG5vZGUuY29uc3RydWN0b3IpO1xuICAgICAgICAgICAgbm9kZS5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhub2RlLmNvbnN0cnVjdG9yLmh5YnJpZHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICBjYWNoZS5pbnZhbGlkYXRlKG5vZGUsIGtleSwgbm9kZVtrZXldID09PSBoeWJyaWRzW2tleV0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG5vZGUuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgICAgICAgIGRpc3BhdGNoSW52YWxpZGF0ZShub2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB1cGRhdGVRdWV1ZS5jbGVhcigpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHVwZGF0ZVF1ZXVlLnNldChIeWJyaWQsIGxhc3RIeWJyaWRzKTtcbiAgfTtcbn1cblxuY29uc3QgY29ubmVjdHMgPSBuZXcgV2Vha01hcCgpO1xuXG5mdW5jdGlvbiBkZWZpbmVFbGVtZW50KHRhZ05hbWUsIGh5YnJpZHNPckNvbnN0cnVjdG9yKSB7XG4gIGNvbnN0IHR5cGUgPSB0eXBlb2YgaHlicmlkc09yQ29uc3RydWN0b3I7XG4gIGlmICh0eXBlICE9PSAnb2JqZWN0JyAmJiB0eXBlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKGBTZWNvbmQgYXJndW1lbnQgbXVzdCBiZSBhbiBvYmplY3Qgb3IgYSBmdW5jdGlvbjogJHt0eXBlfWApO1xuICB9XG5cbiAgY29uc3QgQ3VzdG9tRWxlbWVudCA9IHdpbmRvdy5jdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSk7XG5cbiAgaWYgKHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAoQ3VzdG9tRWxlbWVudCAhPT0gaHlicmlkc09yQ29uc3RydWN0b3IpIHtcbiAgICAgIHJldHVybiB3aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIGh5YnJpZHNPckNvbnN0cnVjdG9yKTtcbiAgICB9XG4gICAgcmV0dXJuIEN1c3RvbUVsZW1lbnQ7XG4gIH1cblxuICBpZiAoQ3VzdG9tRWxlbWVudCkge1xuICAgIGlmIChDdXN0b21FbGVtZW50Lmh5YnJpZHMgPT09IGh5YnJpZHNPckNvbnN0cnVjdG9yKSB7XG4gICAgICByZXR1cm4gQ3VzdG9tRWxlbWVudDtcbiAgICB9XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgQ3VzdG9tRWxlbWVudC5oeWJyaWRzKSB7XG4gICAgICBPYmplY3Qua2V5cyhDdXN0b21FbGVtZW50Lmh5YnJpZHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBkZWxldGUgQ3VzdG9tRWxlbWVudC5wcm90b3R5cGVba2V5XTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBsYXN0SHlicmlkcyA9IEN1c3RvbUVsZW1lbnQuaHlicmlkcztcblxuICAgICAgY29tcGlsZShDdXN0b21FbGVtZW50LCBoeWJyaWRzT3JDb25zdHJ1Y3Rvcik7XG4gICAgICB1cGRhdGUoQ3VzdG9tRWxlbWVudCwgbGFzdEh5YnJpZHMpO1xuXG4gICAgICByZXR1cm4gQ3VzdG9tRWxlbWVudDtcbiAgICB9XG5cbiAgICB0aHJvdyBFcnJvcihgRWxlbWVudCAnJHt0YWdOYW1lfScgYWxyZWFkeSBkZWZpbmVkYCk7XG4gIH1cblxuICBjbGFzcyBIeWJyaWQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgc3RhdGljIGdldCBuYW1lKCkgeyByZXR1cm4gdGFnTmFtZTsgfVxuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICBjb25zdCBsaXN0ID0gdGhpcy5jb25zdHJ1Y3Rvci5jb25uZWN0cy5yZWR1Y2UoKGFjYywgZm4pID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZm4odGhpcyk7XG4gICAgICAgIGlmIChyZXN1bHQpIGFjYy5hZGQocmVzdWx0KTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIG5ldyBTZXQoKSk7XG5cbiAgICAgIGNvbm5lY3RzLnNldCh0aGlzLCBsaXN0KTtcbiAgICAgIGRpc3BhdGNoSW52YWxpZGF0ZSh0aGlzKTtcbiAgICB9XG5cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGNvbnN0IGxpc3QgPSBjb25uZWN0cy5nZXQodGhpcyk7XG4gICAgICBsaXN0LmZvckVhY2goZm4gPT4gZm4oKSk7XG4gICAgfVxuICB9XG5cbiAgY29tcGlsZShIeWJyaWQsIGh5YnJpZHNPckNvbnN0cnVjdG9yKTtcbiAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIEh5YnJpZCk7XG5cbiAgcmV0dXJuIEh5YnJpZDtcbn1cblxuZnVuY3Rpb24gZGVmaW5lTWFwKGVsZW1lbnRzKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhlbGVtZW50cykucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgIGNvbnN0IHRhZ05hbWUgPSBwYXNjYWxUb0Rhc2goa2V5KTtcbiAgICBhY2Nba2V5XSA9IGRlZmluZUVsZW1lbnQodGFnTmFtZSwgZWxlbWVudHNba2V5XSk7XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlZmluZSguLi5hcmdzKSB7XG4gIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gZGVmaW5lTWFwKGFyZ3NbMF0pO1xuICB9XG5cbiAgcmV0dXJuIGRlZmluZUVsZW1lbnQoLi4uYXJncyk7XG59XG4iXX0=

  var map$1 = new WeakMap();
  document.addEventListener('@invalidate', function (event) {
    var set = map$1.get(event.composedPath()[0]);
    if (set) set.forEach(function (fn) {
      return fn();
    });
  });
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYXJlbnQuanMiXSwibmFtZXMiOlsibWFwIiwiV2Vha01hcCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwic2V0IiwiZ2V0IiwiY29tcG9zZWRQYXRoIiwiZm9yRWFjaCIsImZuIiwid2FsayIsIm5vZGUiLCJwYXJlbnRFbGVtZW50IiwicGFyZW50Tm9kZSIsImhvc3QiLCJoeWJyaWRzIiwiY29uc3RydWN0b3IiLCJwYXJlbnQiLCJoeWJyaWRzT3JGbiIsImNvbm5lY3QiLCJrZXkiLCJpbnZhbGlkYXRlIiwidGFyZ2V0IiwiU2V0IiwiYWRkIiwiZGVsZXRlIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFNQSxHQUFHLEdBQUcsSUFBSUMsT0FBSixFQUFaO0FBRUFDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsYUFBMUIsRUFBeUMsVUFBQ0MsS0FBRCxFQUFXO0FBQ2xELE1BQU1DLEdBQUcsR0FBR0wsR0FBRyxDQUFDTSxHQUFKLENBQVFGLEtBQUssQ0FBQ0csWUFBTixHQUFxQixDQUFyQixDQUFSLENBQVo7QUFDQSxNQUFJRixHQUFKLEVBQVNBLEdBQUcsQ0FBQ0csT0FBSixDQUFZLFVBQUFDLEVBQUU7QUFBQSxXQUFJQSxFQUFFLEVBQU47QUFBQSxHQUFkO0FBQ1YsQ0FIRDs7QUFLQSxTQUFTQyxJQUFULENBQWNDLElBQWQsRUFBb0JGLEVBQXBCLEVBQXdCO0FBQ3RCLE1BQUlHLGFBQWEsR0FBR0QsSUFBSSxDQUFDQyxhQUFMLElBQXNCRCxJQUFJLENBQUNFLFVBQUwsQ0FBZ0JDLElBQTFEOztBQUVBLFNBQU9GLGFBQVAsRUFBc0I7QUFDcEIsUUFBTUcsT0FBTyxHQUFHSCxhQUFhLENBQUNJLFdBQWQsQ0FBMEJELE9BQTFDOztBQUVBLFFBQUlBLE9BQU8sSUFBSU4sRUFBRSxDQUFDTSxPQUFELENBQWpCLEVBQTRCO0FBQzFCLGFBQU9ILGFBQVA7QUFDRDs7QUFFREEsSUFBQUEsYUFBYSxHQUFHQSxhQUFhLENBQUNBLGFBQWQsSUFDVkEsYUFBYSxDQUFDQyxVQUFkLElBQTRCRCxhQUFhLENBQUNDLFVBQWQsQ0FBeUJDLElBRDNEO0FBRUQ7O0FBRUQsU0FBT0YsYUFBYSxJQUFJLElBQXhCO0FBQ0Q7O0FBRUQsZUFBZSxTQUFTSyxNQUFULENBQWdCQyxXQUFoQixFQUE2QjtBQUMxQyxNQUFNVCxFQUFFLEdBQUcsT0FBT1MsV0FBUCxLQUF1QixVQUF2QixHQUFvQ0EsV0FBcEMsR0FBa0QsVUFBQUgsT0FBTztBQUFBLFdBQUlBLE9BQU8sS0FBS0csV0FBaEI7QUFBQSxHQUFwRTtBQUNBLFNBQU87QUFDTFosSUFBQUEsR0FBRyxFQUFFLGFBQUFRLElBQUk7QUFBQSxhQUFJSixJQUFJLENBQUNJLElBQUQsRUFBT0wsRUFBUCxDQUFSO0FBQUEsS0FESjtBQUVMVSxJQUFBQSxPQUZLLG1CQUVHTCxJQUZILEVBRVNNLEdBRlQsRUFFY0MsVUFGZCxFQUUwQjtBQUM3QixVQUFNQyxNQUFNLEdBQUdSLElBQUksQ0FBQ00sR0FBRCxDQUFuQjs7QUFFQSxVQUFJRSxNQUFKLEVBQVk7QUFDVixZQUFJakIsR0FBRyxHQUFHTCxHQUFHLENBQUNNLEdBQUosQ0FBUWdCLE1BQVIsQ0FBVjs7QUFDQSxZQUFJLENBQUNqQixHQUFMLEVBQVU7QUFDUkEsVUFBQUEsR0FBRyxHQUFHLElBQUlrQixHQUFKLEVBQU47QUFDQXZCLFVBQUFBLEdBQUcsQ0FBQ0ssR0FBSixDQUFRaUIsTUFBUixFQUFnQmpCLEdBQWhCO0FBQ0Q7O0FBRURBLFFBQUFBLEdBQUcsQ0FBQ21CLEdBQUosQ0FBUUgsVUFBUjtBQUVBLGVBQU8sWUFBTTtBQUNYaEIsVUFBQUEsR0FBRyxDQUFDb0IsTUFBSixDQUFXSixVQUFYO0FBQ0FBLFVBQUFBLFVBQVU7QUFDWCxTQUhEO0FBSUQ7O0FBRUQsYUFBTyxLQUFQO0FBQ0Q7QUFyQkksR0FBUDtBQXVCRCIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1hcCA9IG5ldyBXZWFrTWFwKCk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0BpbnZhbGlkYXRlJywgKGV2ZW50KSA9PiB7XG4gIGNvbnN0IHNldCA9IG1hcC5nZXQoZXZlbnQuY29tcG9zZWRQYXRoKClbMF0pO1xuICBpZiAoc2V0KSBzZXQuZm9yRWFjaChmbiA9PiBmbigpKTtcbn0pO1xuXG5mdW5jdGlvbiB3YWxrKG5vZGUsIGZuKSB7XG4gIGxldCBwYXJlbnRFbGVtZW50ID0gbm9kZS5wYXJlbnRFbGVtZW50IHx8IG5vZGUucGFyZW50Tm9kZS5ob3N0O1xuXG4gIHdoaWxlIChwYXJlbnRFbGVtZW50KSB7XG4gICAgY29uc3QgaHlicmlkcyA9IHBhcmVudEVsZW1lbnQuY29uc3RydWN0b3IuaHlicmlkcztcblxuICAgIGlmIChoeWJyaWRzICYmIGZuKGh5YnJpZHMpKSB7XG4gICAgICByZXR1cm4gcGFyZW50RWxlbWVudDtcbiAgICB9XG5cbiAgICBwYXJlbnRFbGVtZW50ID0gcGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50XG4gICAgICB8fCAocGFyZW50RWxlbWVudC5wYXJlbnROb2RlICYmIHBhcmVudEVsZW1lbnQucGFyZW50Tm9kZS5ob3N0KTtcbiAgfVxuXG4gIHJldHVybiBwYXJlbnRFbGVtZW50IHx8IG51bGw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcmVudChoeWJyaWRzT3JGbikge1xuICBjb25zdCBmbiA9IHR5cGVvZiBoeWJyaWRzT3JGbiA9PT0gJ2Z1bmN0aW9uJyA/IGh5YnJpZHNPckZuIDogaHlicmlkcyA9PiBoeWJyaWRzID09PSBoeWJyaWRzT3JGbjtcbiAgcmV0dXJuIHtcbiAgICBnZXQ6IGhvc3QgPT4gd2Fsayhob3N0LCBmbiksXG4gICAgY29ubmVjdChob3N0LCBrZXksIGludmFsaWRhdGUpIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGhvc3Rba2V5XTtcblxuICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICBsZXQgc2V0ID0gbWFwLmdldCh0YXJnZXQpO1xuICAgICAgICBpZiAoIXNldCkge1xuICAgICAgICAgIHNldCA9IG5ldyBTZXQoKTtcbiAgICAgICAgICBtYXAuc2V0KHRhcmdldCwgc2V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldC5hZGQoaW52YWxpZGF0ZSk7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICBzZXQuZGVsZXRlKGludmFsaWRhdGUpO1xuICAgICAgICAgIGludmFsaWRhdGUoKTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gIH07XG59XG4iXX0=

  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jaGlsZHJlbi5qcyJdLCJuYW1lcyI6WyJ3YWxrIiwibm9kZSIsImZuIiwib3B0aW9ucyIsIml0ZW1zIiwiQXJyYXkiLCJmcm9tIiwiY2hpbGRyZW4iLCJmb3JFYWNoIiwiY2hpbGQiLCJoeWJyaWRzIiwiY29uc3RydWN0b3IiLCJwdXNoIiwiZGVlcCIsIm5lc3RlZCIsImh5YnJpZHNPckZuIiwiZ2V0IiwiaG9zdCIsImNvbm5lY3QiLCJrZXkiLCJpbnZhbGlkYXRlIiwib2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwic2V0IiwiU2V0IiwiY2hpbGRFdmVudExpc3RlbmVyIiwidGFyZ2V0Iiwic2l6ZSIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsImxpc3QiLCJpIiwibGVuZ3RoIiwiaGFzIiwiY2xlYXIiLCJhZGQiLCJvYnNlcnZlIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJkaXNjb25uZWN0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsSUFBVCxDQUFjQyxJQUFkLEVBQW9CQyxFQUFwQixFQUF3QkMsT0FBeEIsRUFBNkM7QUFBQSxNQUFaQyxLQUFZLHVFQUFKLEVBQUk7QUFDM0NDLEVBQUFBLEtBQUssQ0FBQ0MsSUFBTixDQUFXTCxJQUFJLENBQUNNLFFBQWhCLEVBQTBCQyxPQUExQixDQUFrQyxVQUFDQyxLQUFELEVBQVc7QUFDM0MsUUFBTUMsT0FBTyxHQUFHRCxLQUFLLENBQUNFLFdBQU4sQ0FBa0JELE9BQWxDOztBQUNBLFFBQUlBLE9BQU8sSUFBSVIsRUFBRSxDQUFDUSxPQUFELENBQWpCLEVBQTRCO0FBQzFCTixNQUFBQSxLQUFLLENBQUNRLElBQU4sQ0FBV0gsS0FBWDs7QUFDQSxVQUFJTixPQUFPLENBQUNVLElBQVIsSUFBZ0JWLE9BQU8sQ0FBQ1csTUFBNUIsRUFBb0M7QUFDbENkLFFBQUFBLElBQUksQ0FBQ1MsS0FBRCxFQUFRUCxFQUFSLEVBQVlDLE9BQVosRUFBcUJDLEtBQXJCLENBQUo7QUFDRDtBQUNGLEtBTEQsTUFLTyxJQUFJRCxPQUFPLENBQUNVLElBQVosRUFBa0I7QUFDdkJiLE1BQUFBLElBQUksQ0FBQ1MsS0FBRCxFQUFRUCxFQUFSLEVBQVlDLE9BQVosRUFBcUJDLEtBQXJCLENBQUo7QUFDRDtBQUNGLEdBVkQ7QUFZQSxTQUFPQSxLQUFQO0FBQ0Q7O0FBRUQsZUFBZSxTQUFTRyxRQUFULENBQWtCUSxXQUFsQixFQUF5RTtBQUFBLE1BQTFDWixPQUEwQyx1RUFBaEM7QUFBRVUsSUFBQUEsSUFBSSxFQUFFLEtBQVI7QUFBZUMsSUFBQUEsTUFBTSxFQUFFO0FBQXZCLEdBQWdDO0FBQ3RGLE1BQU1aLEVBQUUsR0FBRyxPQUFPYSxXQUFQLEtBQXVCLFVBQXZCLEdBQW9DQSxXQUFwQyxHQUFrRCxVQUFBTCxPQUFPO0FBQUEsV0FBSUEsT0FBTyxLQUFLSyxXQUFoQjtBQUFBLEdBQXBFO0FBQ0EsU0FBTztBQUNMQyxJQUFBQSxHQURLLGVBQ0RDLElBREMsRUFDSztBQUFFLGFBQU9qQixJQUFJLENBQUNpQixJQUFELEVBQU9mLEVBQVAsRUFBV0MsT0FBWCxDQUFYO0FBQWlDLEtBRHhDO0FBRUxlLElBQUFBLE9BRkssbUJBRUdELElBRkgsRUFFU0UsR0FGVCxFQUVjQyxVQUZkLEVBRTBCO0FBQzdCLFVBQU1DLFFBQVEsR0FBRyxJQUFJQyxnQkFBSixDQUFxQkYsVUFBckIsQ0FBakI7QUFDQSxVQUFNRyxHQUFHLEdBQUcsSUFBSUMsR0FBSixFQUFaOztBQUVBLFVBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsT0FBZ0I7QUFBQSxZQUFiQyxNQUFhLFFBQWJBLE1BQWE7O0FBQ3pDLFlBQUksQ0FBQ0gsR0FBRyxDQUFDSSxJQUFULEVBQWU7QUFDYkMsVUFBQUEsT0FBTyxDQUFDQyxPQUFSLEdBQWtCQyxJQUFsQixDQUF1QixZQUFNO0FBQzNCLGdCQUFNQyxJQUFJLEdBQUdkLElBQUksQ0FBQ0UsR0FBRCxDQUFqQjs7QUFDQSxpQkFBSyxJQUFJYSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxJQUFJLENBQUNFLE1BQXpCLEVBQWlDRCxDQUFDLElBQUksQ0FBdEMsRUFBeUM7QUFDdkMsa0JBQUlULEdBQUcsQ0FBQ1csR0FBSixDQUFRSCxJQUFJLENBQUNDLENBQUQsQ0FBWixDQUFKLEVBQXNCO0FBQ3BCWixnQkFBQUEsVUFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNBO0FBQ0Q7QUFDRjs7QUFDREcsWUFBQUEsR0FBRyxDQUFDWSxLQUFKO0FBQ0QsV0FURDtBQVVEOztBQUNEWixRQUFBQSxHQUFHLENBQUNhLEdBQUosQ0FBUVYsTUFBUjtBQUNELE9BZEQ7O0FBZ0JBTCxNQUFBQSxRQUFRLENBQUNnQixPQUFULENBQWlCcEIsSUFBakIsRUFBdUI7QUFDckJxQixRQUFBQSxTQUFTLEVBQUUsSUFEVTtBQUNKQyxRQUFBQSxPQUFPLEVBQUUsQ0FBQyxDQUFDcEMsT0FBTyxDQUFDVTtBQURmLE9BQXZCO0FBSUFJLE1BQUFBLElBQUksQ0FBQ3VCLGdCQUFMLENBQXNCLGFBQXRCLEVBQXFDZixrQkFBckM7QUFFQSxhQUFPLFlBQU07QUFDWEosUUFBQUEsUUFBUSxDQUFDb0IsVUFBVDtBQUNBeEIsUUFBQUEsSUFBSSxDQUFDeUIsbUJBQUwsQ0FBeUIsYUFBekIsRUFBd0NqQixrQkFBeEM7QUFDRCxPQUhEO0FBSUQ7QUFoQ0ksR0FBUDtBQWtDRCIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHdhbGsobm9kZSwgZm4sIG9wdGlvbnMsIGl0ZW1zID0gW10pIHtcbiAgQXJyYXkuZnJvbShub2RlLmNoaWxkcmVuKS5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgIGNvbnN0IGh5YnJpZHMgPSBjaGlsZC5jb25zdHJ1Y3Rvci5oeWJyaWRzO1xuICAgIGlmIChoeWJyaWRzICYmIGZuKGh5YnJpZHMpKSB7XG4gICAgICBpdGVtcy5wdXNoKGNoaWxkKTtcbiAgICAgIGlmIChvcHRpb25zLmRlZXAgJiYgb3B0aW9ucy5uZXN0ZWQpIHtcbiAgICAgICAgd2FsayhjaGlsZCwgZm4sIG9wdGlvbnMsIGl0ZW1zKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMuZGVlcCkge1xuICAgICAgd2FsayhjaGlsZCwgZm4sIG9wdGlvbnMsIGl0ZW1zKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBpdGVtcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hpbGRyZW4oaHlicmlkc09yRm4sIG9wdGlvbnMgPSB7IGRlZXA6IGZhbHNlLCBuZXN0ZWQ6IGZhbHNlIH0pIHtcbiAgY29uc3QgZm4gPSB0eXBlb2YgaHlicmlkc09yRm4gPT09ICdmdW5jdGlvbicgPyBoeWJyaWRzT3JGbiA6IGh5YnJpZHMgPT4gaHlicmlkcyA9PT0gaHlicmlkc09yRm47XG4gIHJldHVybiB7XG4gICAgZ2V0KGhvc3QpIHsgcmV0dXJuIHdhbGsoaG9zdCwgZm4sIG9wdGlvbnMpOyB9LFxuICAgIGNvbm5lY3QoaG9zdCwga2V5LCBpbnZhbGlkYXRlKSB7XG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGludmFsaWRhdGUpO1xuICAgICAgY29uc3Qgc2V0ID0gbmV3IFNldCgpO1xuXG4gICAgICBjb25zdCBjaGlsZEV2ZW50TGlzdGVuZXIgPSAoeyB0YXJnZXQgfSkgPT4ge1xuICAgICAgICBpZiAoIXNldC5zaXplKSB7XG4gICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaXN0ID0gaG9zdFtrZXldO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgIGlmIChzZXQuaGFzKGxpc3RbaV0pKSB7XG4gICAgICAgICAgICAgICAgaW52YWxpZGF0ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldC5jbGVhcigpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHNldC5hZGQodGFyZ2V0KTtcbiAgICAgIH07XG5cbiAgICAgIG9ic2VydmVyLm9ic2VydmUoaG9zdCwge1xuICAgICAgICBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6ICEhb3B0aW9ucy5kZWVwLFxuICAgICAgfSk7XG5cbiAgICAgIGhvc3QuYWRkRXZlbnRMaXN0ZW5lcignQGludmFsaWRhdGUnLCBjaGlsZEV2ZW50TGlzdGVuZXIpO1xuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgIGhvc3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignQGludmFsaWRhdGUnLCBjaGlsZEV2ZW50TGlzdGVuZXIpO1xuICAgICAgfTtcbiAgICB9LFxuICB9O1xufVxuIl19

  var map$2 = new WeakMap();
  var dataMap = {
    get: function get(key, defaultValue) {
      if (map$2.has(key)) {
        return map$2.get(key);
      }

      if (defaultValue !== undefined) {
        map$2.set(key, defaultValue);
      }

      return defaultValue;
    },
    set: function set(key, value) {
      map$2.set(key, value);
      return value;
    }
  };
  function getTemplateEnd(node) {
    var data; // eslint-disable-next-line no-cond-assign

    while (node && (data = dataMap.get(node)) && data.endNode) {
      node = data.endNode;
    }

    return node;
  }
  function removeTemplate(target) {
    var data = dataMap.get(target);
    var startNode = data.startNode;

    if (startNode) {
      var endNode = getTemplateEnd(data.endNode);
      var node = startNode;
      var lastNextSibling = endNode.nextSibling;

      while (node) {
        var nextSibling = node.nextSibling;
        node.parentNode.removeChild(node);
        node = nextSibling !== lastNextSibling && nextSibling;
      }
    }
  }
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZW1wbGF0ZS91dGlscy5qcyJdLCJuYW1lcyI6WyJtYXAiLCJXZWFrTWFwIiwiZGF0YU1hcCIsImdldCIsImtleSIsImRlZmF1bHRWYWx1ZSIsImhhcyIsInVuZGVmaW5lZCIsInNldCIsInZhbHVlIiwiZ2V0VGVtcGxhdGVFbmQiLCJub2RlIiwiZGF0YSIsImVuZE5vZGUiLCJyZW1vdmVUZW1wbGF0ZSIsInRhcmdldCIsInN0YXJ0Tm9kZSIsImxhc3ROZXh0U2libGluZyIsIm5leHRTaWJsaW5nIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFNQSxHQUFHLEdBQUcsSUFBSUMsT0FBSixFQUFaO0FBQ0EsT0FBTyxJQUFNQyxPQUFPLEdBQUc7QUFDckJDLEVBQUFBLEdBRHFCLGVBQ2pCQyxHQURpQixFQUNaQyxZQURZLEVBQ0U7QUFDckIsUUFBSUwsR0FBRyxDQUFDTSxHQUFKLENBQVFGLEdBQVIsQ0FBSixFQUFrQjtBQUNoQixhQUFPSixHQUFHLENBQUNHLEdBQUosQ0FBUUMsR0FBUixDQUFQO0FBQ0Q7O0FBRUQsUUFBSUMsWUFBWSxLQUFLRSxTQUFyQixFQUFnQztBQUM5QlAsTUFBQUEsR0FBRyxDQUFDUSxHQUFKLENBQVFKLEdBQVIsRUFBYUMsWUFBYjtBQUNEOztBQUVELFdBQU9BLFlBQVA7QUFDRCxHQVhvQjtBQVlyQkcsRUFBQUEsR0FacUIsZUFZakJKLEdBWmlCLEVBWVpLLEtBWlksRUFZTDtBQUNkVCxJQUFBQSxHQUFHLENBQUNRLEdBQUosQ0FBUUosR0FBUixFQUFhSyxLQUFiO0FBQ0EsV0FBT0EsS0FBUDtBQUNEO0FBZm9CLENBQWhCO0FBa0JQLE9BQU8sU0FBU0MsY0FBVCxDQUF3QkMsSUFBeEIsRUFBOEI7QUFDbkMsTUFBSUMsSUFBSixDQURtQyxDQUVuQzs7QUFDQSxTQUFPRCxJQUFJLEtBQUtDLElBQUksR0FBR1YsT0FBTyxDQUFDQyxHQUFSLENBQVlRLElBQVosQ0FBWixDQUFKLElBQXNDQyxJQUFJLENBQUNDLE9BQWxELEVBQTJEO0FBQ3pERixJQUFBQSxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsT0FBWjtBQUNEOztBQUVELFNBQU9GLElBQVA7QUFDRDtBQUVELE9BQU8sU0FBU0csY0FBVCxDQUF3QkMsTUFBeEIsRUFBZ0M7QUFDckMsTUFBTUgsSUFBSSxHQUFHVixPQUFPLENBQUNDLEdBQVIsQ0FBWVksTUFBWixDQUFiO0FBQ0EsTUFBTUMsU0FBUyxHQUFHSixJQUFJLENBQUNJLFNBQXZCOztBQUVBLE1BQUlBLFNBQUosRUFBZTtBQUNiLFFBQU1ILE9BQU8sR0FBR0gsY0FBYyxDQUFDRSxJQUFJLENBQUNDLE9BQU4sQ0FBOUI7QUFFQSxRQUFJRixJQUFJLEdBQUdLLFNBQVg7QUFDQSxRQUFNQyxlQUFlLEdBQUdKLE9BQU8sQ0FBQ0ssV0FBaEM7O0FBRUEsV0FBT1AsSUFBUCxFQUFhO0FBQ1gsVUFBTU8sV0FBVyxHQUFHUCxJQUFJLENBQUNPLFdBQXpCO0FBQ0FQLE1BQUFBLElBQUksQ0FBQ1EsVUFBTCxDQUFnQkMsV0FBaEIsQ0FBNEJULElBQTVCO0FBQ0FBLE1BQUFBLElBQUksR0FBR08sV0FBVyxLQUFLRCxlQUFoQixJQUFtQ0MsV0FBMUM7QUFDRDtBQUNGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtYXAgPSBuZXcgV2Vha01hcCgpO1xuZXhwb3J0IGNvbnN0IGRhdGFNYXAgPSB7XG4gIGdldChrZXksIGRlZmF1bHRWYWx1ZSkge1xuICAgIGlmIChtYXAuaGFzKGtleSkpIHtcbiAgICAgIHJldHVybiBtYXAuZ2V0KGtleSk7XG4gICAgfVxuXG4gICAgaWYgKGRlZmF1bHRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBtYXAuc2V0KGtleSwgZGVmYXVsdFZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICB9LFxuICBzZXQoa2V5LCB2YWx1ZSkge1xuICAgIG1hcC5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRlbXBsYXRlRW5kKG5vZGUpIHtcbiAgbGV0IGRhdGE7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25kLWFzc2lnblxuICB3aGlsZSAobm9kZSAmJiAoZGF0YSA9IGRhdGFNYXAuZ2V0KG5vZGUpKSAmJiBkYXRhLmVuZE5vZGUpIHtcbiAgICBub2RlID0gZGF0YS5lbmROb2RlO1xuICB9XG5cbiAgcmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUZW1wbGF0ZSh0YXJnZXQpIHtcbiAgY29uc3QgZGF0YSA9IGRhdGFNYXAuZ2V0KHRhcmdldCk7XG4gIGNvbnN0IHN0YXJ0Tm9kZSA9IGRhdGEuc3RhcnROb2RlO1xuXG4gIGlmIChzdGFydE5vZGUpIHtcbiAgICBjb25zdCBlbmROb2RlID0gZ2V0VGVtcGxhdGVFbmQoZGF0YS5lbmROb2RlKTtcblxuICAgIGxldCBub2RlID0gc3RhcnROb2RlO1xuICAgIGNvbnN0IGxhc3ROZXh0U2libGluZyA9IGVuZE5vZGUubmV4dFNpYmxpbmc7XG5cbiAgICB3aGlsZSAobm9kZSkge1xuICAgICAgY29uc3QgbmV4dFNpYmxpbmcgPSBub2RlLm5leHRTaWJsaW5nO1xuICAgICAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgbm9kZSA9IG5leHRTaWJsaW5nICE9PSBsYXN0TmV4dFNpYmxpbmcgJiYgbmV4dFNpYmxpbmc7XG4gICAgfVxuICB9XG59XG4iXX0=

  var arrayMap = new WeakMap();

  function movePlaceholder(target, previousSibling) {
    var data = dataMap.get(target);
    var startNode = data.startNode;
    var endNode = getTemplateEnd(data.endNode);
    previousSibling.parentNode.insertBefore(target, previousSibling.nextSibling);
    var prevNode = target;
    var node = startNode;

    while (node) {
      var nextNode = node.nextSibling;
      prevNode.parentNode.insertBefore(node, prevNode.nextSibling);
      prevNode = node;
      node = nextNode !== endNode.nextSibling && nextNode;
    }
  }

  function resolveArray(host, target, value) {
    var lastEntries = arrayMap.get(target);
    var entries = value.map(function (item, index) {
      return {
        id: Object.prototype.hasOwnProperty.call(item, 'id') ? item.id : index,
        value: item,
        placeholder: null,
        available: true
      };
    });
    arrayMap.set(target, entries);

    if (lastEntries) {
      var ids = new Set();
      entries.forEach(function (entry) {
        return ids.add(entry.id);
      });
      lastEntries = lastEntries.filter(function (entry) {
        if (!ids.has(entry.id)) {
          removeTemplate(entry.placeholder);
          entry.placeholder.parentNode.removeChild(entry.placeholder);
          return false;
        }

        return true;
      });
    }

    var previousSibling = target;
    var lastIndex = value.length - 1;
    var data = dataMap.get(target);
    entries.forEach(function (entry, index) {
      var matchedEntry;

      if (lastEntries) {
        for (var i = 0; i < lastEntries.length; i += 1) {
          if (lastEntries[i].available && lastEntries[i].id === entry.id) {
            matchedEntry = lastEntries[i];
            break;
          }
        }
      }

      var placeholder;

      if (matchedEntry) {
        matchedEntry.available = false;
        placeholder = matchedEntry.placeholder;

        if (placeholder.previousSibling !== previousSibling) {
          movePlaceholder(placeholder, previousSibling);
        }

        if (matchedEntry.value !== entry.value) {
          resolveValue(host, placeholder, entry.value);
        }
      } else {
        placeholder = document.createTextNode('');
        previousSibling.parentNode.insertBefore(placeholder, previousSibling.nextSibling);
        resolveValue(host, placeholder, entry.value);
      }

      previousSibling = getTemplateEnd(dataMap.get(placeholder).endNode || placeholder);
      if (index === 0) data.startNode = placeholder;
      if (index === lastIndex) data.endNode = previousSibling;
      entry.placeholder = placeholder;
    });

    if (lastEntries) {
      lastEntries.forEach(function (entry) {
        if (entry.available) {
          removeTemplate(entry.placeholder);
          entry.placeholder.parentNode.removeChild(entry.placeholder);
        }
      });
    }
  }
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZW1wbGF0ZS9yZXNvbHZlcnMvYXJyYXkuanMiXSwibmFtZXMiOlsiZGF0YU1hcCIsInJlbW92ZVRlbXBsYXRlIiwiZ2V0VGVtcGxhdGVFbmQiLCJyZXNvbHZlVmFsdWUiLCJhcnJheU1hcCIsIldlYWtNYXAiLCJtb3ZlUGxhY2Vob2xkZXIiLCJ0YXJnZXQiLCJwcmV2aW91c1NpYmxpbmciLCJkYXRhIiwiZ2V0Iiwic3RhcnROb2RlIiwiZW5kTm9kZSIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJuZXh0U2libGluZyIsInByZXZOb2RlIiwibm9kZSIsIm5leHROb2RlIiwicmVzb2x2ZUFycmF5IiwiaG9zdCIsInZhbHVlIiwibGFzdEVudHJpZXMiLCJlbnRyaWVzIiwibWFwIiwiaXRlbSIsImluZGV4IiwiaWQiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJwbGFjZWhvbGRlciIsImF2YWlsYWJsZSIsInNldCIsImlkcyIsIlNldCIsImZvckVhY2giLCJlbnRyeSIsImFkZCIsImZpbHRlciIsImhhcyIsInJlbW92ZUNoaWxkIiwibGFzdEluZGV4IiwibGVuZ3RoIiwibWF0Y2hlZEVudHJ5IiwiaSIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBLFNBQ0VBLE9BREYsRUFDV0MsY0FEWCxFQUMyQkMsY0FEM0IsUUFFTyxVQUZQLEMsQ0FJQTs7QUFDQSxPQUFPQyxZQUFQLE1BQXlCLFNBQXpCO0FBRUEsT0FBTyxJQUFNQyxRQUFRLEdBQUcsSUFBSUMsT0FBSixFQUFqQjs7QUFFUCxTQUFTQyxlQUFULENBQXlCQyxNQUF6QixFQUFpQ0MsZUFBakMsRUFBa0Q7QUFDaEQsTUFBTUMsSUFBSSxHQUFHVCxPQUFPLENBQUNVLEdBQVIsQ0FBWUgsTUFBWixDQUFiO0FBQ0EsTUFBTUksU0FBUyxHQUFHRixJQUFJLENBQUNFLFNBQXZCO0FBQ0EsTUFBTUMsT0FBTyxH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SUFBSSxDQUFDRyxPQUFMLEdBQWVKLGVBQWY7QUFFekI4QixJQUFBQSxLQUFLLENBQUNOLFdBQU4sR0FBb0JBLFdBQXBCO0FBQ0QsR0FsQ0Q7O0FBb0NBLE1BQUlWLFdBQUosRUFBaUI7QUFDZkEsSUFBQUEsV0FBVyxDQUFDZSxPQUFaLENBQW9CLFVBQUNDLEtBQUQsRUFBVztBQUM3QixVQUFJQSxLQUFLLENBQUNMLFNBQVYsRUFBcUI7QUFDbkJoQyxRQUFBQSxjQUFjLENBQUNxQyxLQUFLLENBQUNOLFdBQVAsQ0FBZDtBQUNBTSxRQUFBQSxLQUFLLENBQUNOLFdBQU4sQ0FBa0JuQixVQUFsQixDQUE2QjZCLFdBQTdCLENBQXlDSixLQUFLLENBQUNOLFdBQS9DO0FBQ0Q7QUFDRixLQUxEO0FBTUQ7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGRhdGFNYXAsIHJlbW92ZVRlbXBsYXRlLCBnZXRUZW1wbGF0ZUVuZCxcbn0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXG5pbXBvcnQgcmVzb2x2ZVZhbHVlIGZyb20gJy4vdmFsdWUnO1xuXG5leHBvcnQgY29uc3QgYXJyYXlNYXAgPSBuZXcgV2Vha01hcCgpO1xuXG5mdW5jdGlvbiBtb3ZlUGxhY2Vob2xkZXIodGFyZ2V0LCBwcmV2aW91c1NpYmxpbmcpIHtcbiAgY29uc3QgZGF0YSA9IGRhdGFNYXAuZ2V0KHRhcmdldCk7XG4gIGNvbnN0IHN0YXJ0Tm9kZSA9IGRhdGEuc3RhcnROb2RlO1xuICBjb25zdCBlbmROb2RlID0gZ2V0VGVtcGxhdGVFbmQoZGF0YS5lbmROb2RlKTtcblxuICBwcmV2aW91c1NpYmxpbmcucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGFyZ2V0LCBwcmV2aW91c1NpYmxpbmcubmV4dFNpYmxpbmcpO1xuXG4gIGxldCBwcmV2Tm9kZSA9IHRhcmdldDtcbiAgbGV0IG5vZGUgPSBzdGFydE5vZGU7XG4gIHdoaWxlIChub2RlKSB7XG4gICAgY29uc3QgbmV4dE5vZGUgPSBub2RlLm5leHRTaWJsaW5nO1xuICAgIHByZXZOb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5vZGUsIHByZXZOb2RlLm5leHRTaWJsaW5nKTtcbiAgICBwcmV2Tm9kZSA9IG5vZGU7XG4gICAgbm9kZSA9IG5leHROb2RlICE9PSBlbmROb2RlLm5leHRTaWJsaW5nICYmIG5leHROb2RlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVBcnJheShob3N0LCB0YXJnZXQsIHZhbHVlKSB7XG4gIGxldCBsYXN0RW50cmllcyA9IGFycmF5TWFwLmdldCh0YXJnZXQpO1xuICBjb25zdCBlbnRyaWVzID0gdmFsdWUubWFwKChpdGVtLCBpbmRleCkgPT4gKHtcbiAgICBpZDogT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGl0ZW0sICdpZCcpID8gaXRlbS5pZCA6IGluZGV4LFxuICAgIHZhbHVlOiBpdGVtLFxuICAgIHBsYWNlaG9sZGVyOiBudWxsLFxuICAgIGF2YWlsYWJsZTogdHJ1ZSxcbiAgfSkpO1xuXG4gIGFycmF5TWFwLnNldCh0YXJnZXQsIGVudHJpZXMpO1xuXG4gIGlmIChsYXN0RW50cmllcykge1xuICAgIGNvbnN0IGlkcyA9IG5ldyBTZXQoKTtcbiAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4gaWRzLmFkZChlbnRyeS5pZCkpO1xuXG4gICAgbGFzdEVudHJpZXMgPSBsYXN0RW50cmllcy5maWx0ZXIoKGVudHJ5KSA9PiB7XG4gICAgICBpZiAoIWlkcy5oYXMoZW50cnkuaWQpKSB7XG4gICAgICAgIHJlbW92ZVRlbXBsYXRlKGVudHJ5LnBsYWNlaG9sZGVyKTtcbiAgICAgICAgZW50cnkucGxhY2Vob2xkZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbnRyeS5wbGFjZWhvbGRlcik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH1cblxuICBsZXQgcHJldmlvdXNTaWJsaW5nID0gdGFyZ2V0O1xuICBjb25zdCBsYXN0SW5kZXggPSB2YWx1ZS5sZW5ndGggLSAxO1xuICBjb25zdCBkYXRhID0gZGF0YU1hcC5nZXQodGFyZ2V0KTtcblxuICBlbnRyaWVzLmZvckVhY2goKGVudHJ5LCBpbmRleCkgPT4ge1xuICAgIGxldCBtYXRjaGVkRW50cnk7XG4gICAgaWYgKGxhc3RFbnRyaWVzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxhc3RFbnRyaWVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChsYXN0RW50cmllc1tpXS5hdmFpbGFibGUgJiYgbGFzdEVudHJpZXNbaV0uaWQgPT09IGVudHJ5LmlkKSB7XG4gICAgICAgICAgbWF0Y2hlZEVudHJ5ID0gbGFzdEVudHJpZXNbaV07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgcGxhY2Vob2xkZXI7XG4gICAgaWYgKG1hdGNoZWRFbnRyeSkge1xuICAgICAgbWF0Y2hlZEVudHJ5LmF2YWlsYWJsZSA9IGZhbHNlO1xuICAgICAgcGxhY2Vob2xkZXIgPSBtYXRjaGVkRW50cnkucGxhY2Vob2xkZXI7XG5cbiAgICAgIGlmIChwbGFjZWhvbGRlci5wcmV2aW91c1NpYmxpbmcgIT09IHByZXZpb3VzU2libGluZykge1xuICAgICAgICBtb3ZlUGxhY2Vob2xkZXIocGxhY2Vob2xkZXIsIHByZXZpb3VzU2libGluZyk7XG4gICAgICB9XG4gICAgICBpZiAobWF0Y2hlZEVudHJ5LnZhbHVlICE9PSBlbnRyeS52YWx1ZSkge1xuICAgICAgICByZXNvbHZlVmFsdWUoaG9zdCwgcGxhY2Vob2xkZXIsIGVudHJ5LnZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgICBwcmV2aW91c1NpYmxpbmcucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUocGxhY2Vob2xkZXIsIHByZXZpb3VzU2libGluZy5uZXh0U2libGluZyk7XG4gICAgICByZXNvbHZlVmFsdWUoaG9zdCwgcGxhY2Vob2xkZXIsIGVudHJ5LnZhbHVlKTtcbiAgICB9XG5cbiAgICBwcmV2aW91c1NpYmxpbmcgPSBnZXRUZW1wbGF0ZUVuZChkYXRhTWFwLmdldChwbGFjZWhvbGRlcikuZW5kTm9kZSB8fCBwbGFjZWhvbGRlcik7XG5cbiAgICBpZiAoaW5kZXggPT09IDApIGRhdGEuc3RhcnROb2RlID0gcGxhY2Vob2xkZXI7XG4gICAgaWYgKGluZGV4ID09PSBsYXN0SW5kZXgpIGRhdGEuZW5kTm9kZSA9IHByZXZpb3VzU2libGluZztcblxuICAgIGVudHJ5LnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG4gIH0pO1xuXG4gIGlmIChsYXN0RW50cmllcykge1xuICAgIGxhc3RFbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBpZiAoZW50cnkuYXZhaWxhYmxlKSB7XG4gICAgICAgIHJlbW92ZVRlbXBsYXRlKGVudHJ5LnBsYWNlaG9sZGVyKTtcbiAgICAgICAgZW50cnkucGxhY2Vob2xkZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbnRyeS5wbGFjZWhvbGRlcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==

  function _typeof$3(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$3 = function _typeof(obj) { return typeof obj; }; } else { _typeof$3 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$3(obj); }
  function resolveValue(host, target, value) {
    var type = Array.isArray(value) ? 'array' : _typeof$3(value);
    var data = dataMap.get(target, {});

    if (data.type !== type) {
      removeTemplate(target);
      if (type === 'array') arrayMap.delete(target);
      data = dataMap.set(target, {
        type: type
      });

      if (target.textContent !== '') {
        target.textContent = '';
      }
    }

    switch (type) {
      case 'function':
        value(host, target);
        break;

      case 'array':
        resolveArray(host, target, value);
        break;

      default:
        target.textContent = type === 'number' || value ? value : '';
    }
  }
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZW1wbGF0ZS9yZXNvbHZlcnMvdmFsdWUuanMiXSwibmFtZXMiOlsiZGF0YU1hcCIsInJlbW92ZVRlbXBsYXRlIiwicmVzb2x2ZUFycmF5IiwiYXJyYXlNYXAiLCJyZXNvbHZlVmFsdWUiLCJob3N0IiwidGFyZ2V0IiwidmFsdWUiLCJ0eXBlIiwiQXJyYXkiLCJpc0FycmF5IiwiZGF0YSIsImdldCIsImRlbGV0ZSIsInNldCIsInRleHRDb250ZW50Il0sIm1hcHBpbmdzIjoiOztBQUFBLFNBQVNBLE9BQVQsRUFBa0JDLGNBQWxCLFFBQXdDLFVBQXhDLEMsQ0FDQTs7QUFDQSxPQUFPQyxZQUFQLElBQXVCQyxRQUF2QixRQUF1QyxTQUF2QztBQUVBLGVBQWUsU0FBU0MsWUFBVCxDQUFzQkMsSUFBdEIsRUFBNEJDLE1BQTVCLEVBQW9DQyxLQUFwQyxFQUEyQztBQUN4RCxNQUFNQyxJQUFJLEdBQUdDLEtBQUssQ0FBQ0MsT0FBTixDQUFjSCxLQUFkLElBQXVCLE9BQXZCLFdBQXdDQSxLQUF4QyxDQUFiO0FBQ0EsTUFBSUksSUFBSSxHQUFHWCxPQUFPLENBQUNZLEdBQVIsQ0FBWU4sTUFBWixFQUFvQixFQUFwQixDQUFYOztBQUVBLE1BQUlLLElBQUksQ0FBQ0gsSUFBTCxLQUFjQSxJQUFsQixFQUF3QjtBQUN0QlAsSUFBQUEsY0FBYyxDQUFDSyxNQUFELENBQWQ7QUFDQSxRQUFJRSxJQUFJLEtBQUssT0FBYixFQUFzQkwsUUFBUSxDQUFDVSxNQUFULENBQWdCUCxNQUFoQjtBQUV0QkssSUFBQUEsSUFBSSxHQUFHWCxPQUFPLENBQUNjLEdBQVIsQ0FBWVIsTUFBWixFQUFvQjtBQUFFRSxNQUFBQSxJQUFJLEVBQUpBO0FBQUYsS0FBcEIsQ0FBUDs7QUFFQSxRQUFJRixNQUFNLENBQUNTLFdBQVAsS0FBdUIsRUFBM0IsRUFBK0I7QUFDN0JULE1BQUFBLE1BQU0sQ0FBQ1MsV0FBUCxHQUFxQixFQUFyQjtBQUNEO0FBQ0Y7O0FBRUQsVUFBUVAsSUFBUjtBQUNFLFNBQUssVUFBTDtBQUNFRCxNQUFBQSxLQUFLLENBQUNGLElBQUQsRUFBT0MsTUFBUCxDQUFMO0FBQ0E7O0FBQ0YsU0FBSyxPQUFMO0FBQ0VKLE1BQUFBLFlBQVksQ0FBQ0csSUFBRCxFQUFPQyxNQUFQLEVBQWVDLEtBQWYsQ0FBWjtBQUNBOztBQUNGO0FBQ0VELE1BQUFBLE1BQU0sQ0FBQ1MsV0FBUCxHQUFxQlAsSUFBSSxLQUFLLFFBQVQsSUFBcUJELEtBQXJCLEdBQTZCQSxLQUE3QixHQUFxQyxFQUExRDtBQVJKO0FBVUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYXRhTWFwLCByZW1vdmVUZW1wbGF0ZSB9IGZyb20gJy4uL3V0aWxzJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tY3ljbGVcbmltcG9ydCByZXNvbHZlQXJyYXksIHsgYXJyYXlNYXAgfSBmcm9tICcuL2FycmF5JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVZhbHVlKGhvc3QsIHRhcmdldCwgdmFsdWUpIHtcbiAgY29uc3QgdHlwZSA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gJ2FycmF5JyA6IHR5cGVvZiB2YWx1ZTtcbiAgbGV0IGRhdGEgPSBkYXRhTWFwLmdldCh0YXJnZXQsIHt9KTtcblxuICBpZiAoZGF0YS50eXBlICE9PSB0eXBlKSB7XG4gICAgcmVtb3ZlVGVtcGxhdGUodGFyZ2V0KTtcbiAgICBpZiAodHlwZSA9PT0gJ2FycmF5JykgYXJyYXlNYXAuZGVsZXRlKHRhcmdldCk7XG5cbiAgICBkYXRhID0gZGF0YU1hcC5zZXQodGFyZ2V0LCB7IHR5cGUgfSk7XG5cbiAgICBpZiAodGFyZ2V0LnRleHRDb250ZW50ICE9PSAnJykge1xuICAgICAgdGFyZ2V0LnRleHRDb250ZW50ID0gJyc7XG4gICAgfVxuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgdmFsdWUoaG9zdCwgdGFyZ2V0KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIHJlc29sdmVBcnJheShob3N0LCB0YXJnZXQsIHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0YXJnZXQudGV4dENvbnRlbnQgPSB0eXBlID09PSAnbnVtYmVyJyB8fCB2YWx1ZSA/IHZhbHVlIDogJyc7XG4gIH1cbn1cbiJdfQ==

  function _typeof$4(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$4 = function _typeof(obj) { return typeof obj; }; } else { _typeof$4 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$4(obj); }

  var eventMap = new WeakMap();
  function resolveEventListener(eventType) {
    return function (host, target, value, lastValue) {
      if (lastValue) {
        target.removeEventListener(eventType, eventMap.get(lastValue), lastValue.options !== undefined ? lastValue.options : false);
      }

      if (value) {
        if (typeof value !== 'function') {
          throw Error("Event listener must be a function: ".concat(_typeof$4(value)));
        }

        eventMap.set(value, value.bind(null, host));
        target.addEventListener(eventType, eventMap.get(value), value.options !== undefined ? value.options : false);
      }
    };
  }
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZW1wbGF0ZS9yZXNvbHZlcnMvZXZlbnQuanMiXSwibmFtZXMiOlsiZXZlbnRNYXAiLCJXZWFrTWFwIiwicmVzb2x2ZUV2ZW50TGlzdGVuZXIiLCJldmVudFR5cGUiLCJob3N0IiwidGFyZ2V0IiwidmFsdWUiLCJsYXN0VmFsdWUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZ2V0Iiwib3B0aW9ucyIsInVuZGVmaW5lZCIsIkVycm9yIiwic2V0IiwiYmluZCIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsUUFBUSxHQUFHLElBQUlDLE9BQUosRUFBakI7QUFFQSxlQUFlLFNBQVNDLG9CQUFULENBQThCQyxTQUE5QixFQUF5QztBQUN0RCxTQUFPLFVBQUNDLElBQUQsRUFBT0MsTUFBUCxFQUFlQyxLQUFmLEVBQXNCQyxTQUF0QixFQUFvQztBQUN6QyxRQUFJQSxTQUFKLEVBQWU7QUFDYkYsTUFBQUEsTUFBTSxDQUFDRyxtQkFBUCxDQUNFTCxTQURGLEVBRUVILFFBQVEsQ0FBQ1MsR0FBVCxDQUFhRixTQUFiLENBRkYsRUFHRUEsU0FBUyxDQUFDRyxPQUFWLEtBQXNCQyxTQUF0QixHQUFrQ0osU0FBUyxDQUFDRyxPQUE1QyxHQUFzRCxLQUh4RDtBQUtEOztBQUVELFFBQUlKLEtBQUosRUFBVztBQUNULFVBQUksT0FBT0EsS0FBUCxLQUFpQixVQUFyQixFQUFpQztBQUMvQixjQUFNTSxLQUFLLHNEQUE4Q04sS0FBOUMsR0FBWDtBQUNEOztBQUVETixNQUFBQSxRQUFRLENBQUNhLEdBQVQsQ0FBYVAsS0FBYixFQUFvQkEsS0FBSyxDQUFDUSxJQUFOLENBQVcsSUFBWCxFQUFpQlYsSUFBakIsQ0FBcEI7QUFFQUMsTUFBQUEsTUFBTSxDQUFDVSxnQkFBUCxDQUNFWixTQURGLEVBRUVILFFBQVEsQ0FBQ1MsR0FBVCxDQUFhSCxLQUFiLENBRkYsRUFHRUEsS0FBSyxDQUFDSSxPQUFOLEtBQWtCQyxTQUFsQixHQUE4QkwsS0FBSyxDQUFDSSxPQUFwQyxHQUE4QyxLQUhoRDtBQUtEO0FBQ0YsR0F0QkQ7QUF1QkQiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBldmVudE1hcCA9IG5ldyBXZWFrTWFwKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSkge1xuICByZXR1cm4gKGhvc3QsIHRhcmdldCwgdmFsdWUsIGxhc3RWYWx1ZSkgPT4ge1xuICAgIGlmIChsYXN0VmFsdWUpIHtcbiAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICBldmVudFR5cGUsXG4gICAgICAgIGV2ZW50TWFwLmdldChsYXN0VmFsdWUpLFxuICAgICAgICBsYXN0VmFsdWUub3B0aW9ucyAhPT0gdW5kZWZpbmVkID8gbGFzdFZhbHVlLm9wdGlvbnMgOiBmYWxzZSxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IEVycm9yKGBFdmVudCBsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb246ICR7dHlwZW9mIHZhbHVlfWApO1xuICAgICAgfVxuXG4gICAgICBldmVudE1hcC5zZXQodmFsdWUsIHZhbHVlLmJpbmQobnVsbCwgaG9zdCkpO1xuXG4gICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgZXZlbnRUeXBlLFxuICAgICAgICBldmVudE1hcC5nZXQodmFsdWUpLFxuICAgICAgICB2YWx1ZS5vcHRpb25zICE9PSB1bmRlZmluZWQgPyB2YWx1ZS5vcHRpb25zIDogZmFsc2UsXG4gICAgICApO1xuICAgIH1cbiAgfTtcbn1cbiJdfQ==

  function _typeof$5(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$5 = function _typeof(obj) { return typeof obj; }; } else { _typeof$5 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$5(obj); }

  function normalizeValue(value) {
    var set = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Set();

    if (Array.isArray(value)) {
      value.forEach(function (className) {
        return set.add(className);
      });
    } else if (value !== null && _typeof$5(value) === 'object') {
      Object.keys(value).forEach(function (key) {
        return value[key] && set.add(key);
      });
    } else {
      set.add(value);
    }

    return set;
  }

  var classMap = new WeakMap();
  function resolveClassList(host, target, value) {
    var previousList = classMap.get(target) || new Set();
    var list = normalizeValue(value);
    classMap.set(target, list);
    list.forEach(function (className) {
      target.classList.add(className);
      previousList.delete(className);
    });
    previousList.forEach(function (className) {
      target.classList.remove(className);
    });
  }
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZW1wbGF0ZS9yZXNvbHZlcnMvY2xhc3MuanMiXSwibmFtZXMiOlsibm9ybWFsaXplVmFsdWUiLCJ2YWx1ZSIsInNldCIsIlNldCIsIkFycmF5IiwiaXNBcnJheSIsImZvckVhY2giLCJjbGFzc05hbWUiLCJhZGQiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwiY2xhc3NNYXAiLCJXZWFrTWFwIiwicmVzb2x2ZUNsYXNzTGlzdCIsImhvc3QiLCJ0YXJnZXQiLCJwcmV2aW91c0xpc3QiLCJnZXQiLCJsaXN0IiwiY2xhc3NMaXN0IiwiZGVsZXRlIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiOztBQUFBLFNBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQWdEO0FBQUEsTUFBakJDLEdBQWlCLHVFQUFYLElBQUlDLEdBQUosRUFBVzs7QUFDOUMsTUFBSUMsS0FBSyxDQUFDQyxPQUFOLENBQWNKLEtBQWQsQ0FBSixFQUEwQjtBQUN4QkEsSUFBQUEsS0FBSyxDQUFDSyxPQUFOLENBQWMsVUFBQUMsU0FBUztBQUFBLGFBQUlMLEdBQUcsQ0FBQ00sR0FBSixDQUFRRCxTQUFSLENBQUo7QUFBQSxLQUF2QjtBQUNELEdBRkQsTUFFTyxJQUFJTixLQUFLLEtBQUssSUFBVixJQUFrQixRQUFPQSxLQUFQLE1BQWlCLFFBQXZDLEVBQWlEO0FBQ3REUSxJQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWVQsS0FBWixFQUFtQkssT0FBbkIsQ0FBMkIsVUFBQUssR0FBRztBQUFBLGFBQUlWLEtBQUssQ0FBQ1UsR0FBRCxDQUFMLElBQWNULEdBQUcsQ0FBQ00sR0FBSixDQUFRRyxHQUFSLENBQWxCO0FBQUEsS0FBOUI7QUFDRCxHQUZNLE1BRUE7QUFDTFQsSUFBQUEsR0FBRyxDQUFDTSxHQUFKLENBQVFQLEtBQVI7QUFDRDs7QUFFRCxTQUFPQyxHQUFQO0FBQ0Q7O0FBRUQsSUFBTVUsUUFBUSxHQUFHLElBQUlDLE9BQUosRUFBakI7QUFFQSxlQUFlLFNBQVNDLGdCQUFULENBQTBCQyxJQUExQixFQUFnQ0MsTUFBaEMsRUFBd0NmLEtBQXhDLEVBQStDO0FBQzVELE1BQU1nQixZQUFZLEdBQUdMLFFBQVEsQ0FBQ00sR0FBVCxDQUFhRixNQUFiLEtBQXdCLElBQUliLEdBQUosRUFBN0M7QUFDQSxNQUFNZ0IsSUFBSSxHQUFHbkIsY0FBYyxDQUFDQyxLQUFELENBQTNCO0FBRUFXLEVBQUFBLFFBQVEsQ0FBQ1YsR0FBVCxDQUFhYyxNQUFiLEVBQXFCRyxJQUFyQjtBQUVBQSxFQUFBQSxJQUFJLENBQUNiLE9BQUwsQ0FBYSxVQUFDQyxTQUFELEVBQWU7QUFDMUJTLElBQUFBLE1BQU0sQ0FBQ0ksU0FBUCxDQUFpQlosR0FBakIsQ0FBcUJELFNBQXJCO0FBQ0FVLElBQUFBLFlBQVksQ0FBQ0ksTUFBYixDQUFvQmQsU0FBcEI7QUFDRCxHQUhEO0FBS0FVLEVBQUFBLFlBQVksQ0FBQ1gsT0FBYixDQUFxQixVQUFDQyxTQUFELEVBQWU7QUFDbENTLElBQUFBLE1BQU0sQ0FBQ0ksU0FBUCxDQUFpQkUsTUFBakIsQ0FBd0JmLFNBQXhCO0FBQ0QsR0FGRDtBQUdEIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gbm9ybWFsaXplVmFsdWUodmFsdWUsIHNldCA9IG5ldyBTZXQoKSkge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICB2YWx1ZS5mb3JFYWNoKGNsYXNzTmFtZSA9PiBzZXQuYWRkKGNsYXNzTmFtZSkpO1xuICB9IGVsc2UgaWYgKHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaChrZXkgPT4gdmFsdWVba2V5XSAmJiBzZXQuYWRkKGtleSkpO1xuICB9IGVsc2Uge1xuICAgIHNldC5hZGQodmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIHNldDtcbn1cblxuY29uc3QgY2xhc3NNYXAgPSBuZXcgV2Vha01hcCgpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlQ2xhc3NMaXN0KGhvc3QsIHRhcmdldCwgdmFsdWUpIHtcbiAgY29uc3QgcHJldmlvdXNMaXN0ID0gY2xhc3NNYXAuZ2V0KHRhcmdldCkgfHwgbmV3IFNldCgpO1xuICBjb25zdCBsaXN0ID0gbm9ybWFsaXplVmFsdWUodmFsdWUpO1xuXG4gIGNsYXNzTWFwLnNldCh0YXJnZXQsIGxpc3QpO1xuXG4gIGxpc3QuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiB7XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBwcmV2aW91c0xpc3QuZGVsZXRlKGNsYXNzTmFtZSk7XG4gIH0pO1xuXG4gIHByZXZpb3VzTGlzdC5mb3JFYWNoKChjbGFzc05hbWUpID0+IHtcbiAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICB9KTtcbn1cbiJdfQ==

  function _typeof$6(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$6 = function _typeof(obj) { return typeof obj; }; } else { _typeof$6 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$6(obj); }
  var styleMap = new WeakMap();
  function resolveStyle(host, target, value) {
    if (value === null || _typeof$6(value) !== 'object') {
      throw TypeError("Style value must be an object in ".concat(stringifyElement(target), ":"), value);
    }

    var previousMap = styleMap.get(target) || new Map();
    var nextMap = Object.keys(value).reduce(function (map, key) {
      var dashKey = camelToDash(key);
      var styleValue = value[key];

      if (!styleValue && styleValue !== 0) {
        target.style.removeProperty(dashKey);
      } else {
        target.style.setProperty(dashKey, styleValue);
      }

      map.set(dashKey, styleValue);
      previousMap.delete(dashKey);
      return map;
    }, new Map());
    previousMap.forEach(function (styleValue, key) {
      target.style[key] = '';
    });
    styleMap.set(target, nextMap);
  }
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZW1wbGF0ZS9yZXNvbHZlcnMvc3R5bGUuanMiXSwibmFtZXMiOlsiY2FtZWxUb0Rhc2giLCJzdHJpbmdpZnlFbGVtZW50Iiwic3R5bGVNYXAiLCJXZWFrTWFwIiwicmVzb2x2ZVN0eWxlIiwiaG9zdCIsInRhcmdldCIsInZhbHVlIiwiVHlwZUVycm9yIiwicHJldmlvdXNNYXAiLCJnZXQiLCJNYXAiLCJuZXh0TWFwIiwiT2JqZWN0Iiwia2V5cyIsInJlZHVjZSIsIm1hcCIsImtleSIsImRhc2hLZXkiLCJzdHlsZVZhbHVlIiwic3R5bGUiLCJyZW1vdmVQcm9wZXJ0eSIsInNldFByb3BlcnR5Iiwic2V0IiwiZGVsZXRlIiwiZm9yRWFjaCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxTQUFTQSxXQUFULEVBQXNCQyxnQkFBdEIsUUFBOEMsYUFBOUM7QUFFQSxJQUFNQyxRQUFRLEdBQUcsSUFBSUMsT0FBSixFQUFqQjtBQUVBLGVBQWUsU0FBU0MsWUFBVCxDQUFzQkMsSUFBdEIsRUFBNEJDLE1BQTVCLEVBQW9DQyxLQUFwQyxFQUEyQztBQUN4RCxNQUFJQSxLQUFLLEtBQUssSUFBVixJQUFrQixRQUFPQSxLQUFQLE1BQWlCLFFBQXZDLEVBQWlEO0FBQy9DLFVBQU1DLFNBQVMsNENBQXFDUCxnQkFBZ0IsQ0FBQ0ssTUFBRCxDQUFyRCxRQUFrRUMsS0FBbEUsQ0FBZjtBQUNEOztBQUVELE1BQU1FLFdBQVcsR0FBR1AsUUFBUSxDQUFDUSxHQUFULENBQWFKLE1BQWIsS0FBd0IsSUFBSUssR0FBSixFQUE1QztBQUVBLE1BQU1DLE9BQU8sR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlQLEtBQVosRUFBbUJRLE1BQW5CLENBQTBCLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQ3RELFFBQU1DLE9BQU8sR0FBR2xCLFdBQVcsQ0FBQ2lCLEdBQUQsQ0FBM0I7QUFDQSxRQUFNRSxVQUFVLEdBQUdaLEtBQUssQ0FBQ1UsR0FBRCxDQUF4Qjs7QUFFQSxRQUFJLENBQUNFLFVBQUQsSUFBZUEsVUFBVSxLQUFLLENBQWxDLEVBQXFDO0FBQ25DYixNQUFBQSxNQUFNLENBQUNjLEtBQVAsQ0FBYUMsY0FBYixDQUE0QkgsT0FBNUI7QUFDRCxLQUZELE1BRU87QUFDTFosTUFBQUEsTUFBTSxDQUFDYyxLQUFQLENBQWFFLFdBQWIsQ0FBeUJKLE9BQXpCLEVBQWtDQyxVQUFsQztBQUNEOztBQUVESCxJQUFBQSxHQUFHLENBQUNPLEdBQUosQ0FBUUwsT0FBUixFQUFpQkMsVUFBakI7QUFDQVYsSUFBQUEsV0FBVyxDQUFDZSxNQUFaLENBQW1CTixPQUFuQjtBQUVBLFdBQU9GLEdBQVA7QUFDRCxHQWRlLEVBY2IsSUFBSUwsR0FBSixFQWRhLENBQWhCO0FBZ0JBRixFQUFBQSxXQUFXLENBQUNnQixPQUFaLENBQW9CLFVBQUNOLFVBQUQsRUFBYUYsR0FBYixFQUFxQjtBQUFFWCxJQUFBQSxNQUFNLENBQUNjLEtBQVAsQ0FBYUgsR0FBYixJQUFvQixFQUFwQjtBQUF5QixHQUFwRTtBQUVBZixFQUFBQSxRQUFRLENBQUNxQixHQUFULENBQWFqQixNQUFiLEVBQXFCTSxPQUFyQjtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2FtZWxUb0Rhc2gsIHN0cmluZ2lmeUVsZW1lbnQgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbmNvbnN0IHN0eWxlTWFwID0gbmV3IFdlYWtNYXAoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVN0eWxlKGhvc3QsIHRhcmdldCwgdmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoYFN0eWxlIHZhbHVlIG11c3QgYmUgYW4gb2JqZWN0IGluICR7c3RyaW5naWZ5RWxlbWVudCh0YXJnZXQpfTpgLCB2YWx1ZSk7XG4gIH1cblxuICBjb25zdCBwcmV2aW91c01hcCA9IHN0eWxlTWFwLmdldCh0YXJnZXQpIHx8IG5ldyBNYXAoKTtcblxuICBjb25zdCBuZXh0TWFwID0gT2JqZWN0LmtleXModmFsdWUpLnJlZHVjZSgobWFwLCBrZXkpID0+IHtcbiAgICBjb25zdCBkYXNoS2V5ID0gY2FtZWxUb0Rhc2goa2V5KTtcbiAgICBjb25zdCBzdHlsZVZhbHVlID0gdmFsdWVba2V5XTtcblxuICAgIGlmICghc3R5bGVWYWx1ZSAmJiBzdHlsZVZhbHVlICE9PSAwKSB7XG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoZGFzaEtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldC5zdHlsZS5zZXRQcm9wZXJ0eShkYXNoS2V5LCBzdHlsZVZhbHVlKTtcbiAgICB9XG5cbiAgICBtYXAuc2V0KGRhc2hLZXksIHN0eWxlVmFsdWUpO1xuICAgIHByZXZpb3VzTWFwLmRlbGV0ZShkYXNoS2V5KTtcblxuICAgIHJldHVybiBtYXA7XG4gIH0sIG5ldyBNYXAoKSk7XG5cbiAgcHJldmlvdXNNYXAuZm9yRWFjaCgoc3R5bGVWYWx1ZSwga2V5KSA9PiB7IHRhcmdldC5zdHlsZVtrZXldID0gJyc7IH0pO1xuXG4gIHN0eWxlTWFwLnNldCh0YXJnZXQsIG5leHRNYXApO1xufVxuIl19

  function resolveProperty(attrName, propertyName, isSVG) {
    if (propertyName.substr(0, 2) === 'on') {
      var eventType = propertyName.substr(2);
      return resolveEventListener(eventType);
    }

    switch (attrName) {
      case 'class':
        return resolveClassList;

      case 'style':
        return resolveStyle;

      default:
        return function (host, target, value) {
          if (!isSVG && !(target instanceof SVGElement) && propertyName in target) {
            if (target[propertyName] !== value) {
              target[propertyName] = value;
            }
          } else if (value === false || value === undefined || value === null) {
            target.removeAttribute(attrName);
          } else {
            var attrValue = value === true ? '' : String(value);
            target.setAttribute(attrName, attrValue);
          }
        };
    }
  }
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZW1wbGF0ZS9yZXNvbHZlcnMvcHJvcGVydHkuanMiXSwibmFtZXMiOlsicmVzb2x2ZUV2ZW50TGlzdGVuZXIiLCJyZXNvbHZlQ2xhc3NMaXN0IiwicmVzb2x2ZVN0eWxlTGlzdCIsInJlc29sdmVQcm9wZXJ0eSIsImF0dHJOYW1lIiwicHJvcGVydHlOYW1lIiwiaXNTVkciLCJzdWJzdHIiLCJldmVudFR5cGUiLCJob3N0IiwidGFyZ2V0IiwidmFsdWUiLCJTVkdFbGVtZW50IiwidW5kZWZpbmVkIiwicmVtb3ZlQXR0cmlidXRlIiwiYXR0clZhbHVlIiwiU3RyaW5nIiwic2V0QXR0cmlidXRlIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxvQkFBUCxNQUFpQyxTQUFqQztBQUNBLE9BQU9DLGdCQUFQLE1BQTZCLFNBQTdCO0FBQ0EsT0FBT0MsZ0JBQVAsTUFBNkIsU0FBN0I7QUFFQSxlQUFlLFNBQVNDLGVBQVQsQ0FBeUJDLFFBQXpCLEVBQW1DQyxZQUFuQyxFQUFpREMsS0FBakQsRUFBd0Q7QUFDckUsTUFBSUQsWUFBWSxDQUFDRSxNQUFiLENBQW9CLENBQXBCLEVBQXVCLENBQXZCLE1BQThCLElBQWxDLEVBQXdDO0FBQ3RDLFFBQU1DLFNBQVMsR0FBR0gsWUFBWSxDQUFDRSxNQUFiLENBQW9CLENBQXBCLENBQWxCO0FBQ0EsV0FBT1Asb0JBQW9CLENBQUNRLFNBQUQsQ0FBM0I7QUFDRDs7QUFFRCxVQUFRSixRQUFSO0FBQ0UsU0FBSyxPQUFMO0FBQWMsYUFBT0gsZ0JBQVA7O0FBQ2QsU0FBSyxPQUFMO0FBQWMsYUFBT0MsZ0JBQVA7O0FBQ2Q7QUFDRSxhQUFPLFVBQUNPLElBQUQsRUFBT0MsTUFBUCxFQUFlQyxLQUFmLEVBQXlCO0FBQzlCLFlBQUksQ0FBQ0wsS0FBRCxJQUFVLEVBQUVJLE1BQU0sWUFBWUUsVUFBcEIsQ0FBVixJQUE4Q1AsWUFBWSxJQUFJSyxNQUFsRSxFQUEyRTtBQUN6RSxjQUFJQSxNQUFNLENBQUNMLFlBQUQsQ0FBTixLQUF5Qk0sS0FBN0IsRUFBb0M7QUFDbENELFlBQUFBLE1BQU0sQ0FBQ0wsWUFBRCxDQUFOLEdBQXVCTSxLQUF2QjtBQUNEO0FBQ0YsU0FKRCxNQUlPLElBQUlBLEtBQUssS0FBSyxLQUFWLElBQW1CQSxLQUFLLEtBQUtFLFNBQTdCLElBQTBDRixLQUFLLEtBQUssSUFBeEQsRUFBOEQ7QUFDbkVELFVBQUFBLE1BQU0sQ0FBQ0ksZUFBUCxDQUF1QlYsUUFBdkI7QUFDRCxTQUZNLE1BRUE7QUFDTCxjQUFNVyxTQUFTLEdBQUdKLEtBQUssS0FBSyxJQUFWLEdBQWlCLEVBQWpCLEdBQXNCSyxNQUFNLENBQUNMLEtBQUQsQ0FBOUM7QUFDQUQsVUFBQUEsTUFBTSxDQUFDTyxZQUFQLENBQW9CYixRQUFwQixFQUE4QlcsU0FBOUI7QUFDRDtBQUNGLE9BWEQ7QUFKSjtBQWlCRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZXNvbHZlRXZlbnRMaXN0ZW5lciBmcm9tICcuL2V2ZW50JztcbmltcG9ydCByZXNvbHZlQ2xhc3NMaXN0IGZyb20gJy4vY2xhc3MnO1xuaW1wb3J0IHJlc29sdmVTdHlsZUxpc3QgZnJvbSAnLi9zdHlsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVQcm9wZXJ0eShhdHRyTmFtZSwgcHJvcGVydHlOYW1lLCBpc1NWRykge1xuICBpZiAocHJvcGVydHlOYW1lLnN1YnN0cigwLCAyKSA9PT0gJ29uJykge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IHByb3BlcnR5TmFtZS5zdWJzdHIoMik7XG4gICAgcmV0dXJuIHJlc29sdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSk7XG4gIH1cblxuICBzd2l0Y2ggKGF0dHJOYW1lKSB7XG4gICAgY2FzZSAnY2xhc3MnOiByZXR1cm4gcmVzb2x2ZUNsYXNzTGlzdDtcbiAgICBjYXNlICdzdHlsZSc6IHJldHVybiByZXNvbHZlU3R5bGVMaXN0O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gKGhvc3QsIHRhcmdldCwgdmFsdWUpID0+IHtcbiAgICAgICAgaWYgKCFpc1NWRyAmJiAhKHRhcmdldCBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpICYmIChwcm9wZXJ0eU5hbWUgaW4gdGFyZ2V0KSkge1xuICAgICAgICAgIGlmICh0YXJnZXRbcHJvcGVydHlOYW1lXSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRhcmdldFtwcm9wZXJ0eU5hbWVdID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBmYWxzZSB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgdGFyZ2V0LnJlbW92ZUF0dHJpYnV0ZShhdHRyTmFtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgYXR0clZhbHVlID0gdmFsdWUgPT09IHRydWUgPyAnJyA6IFN0cmluZyh2YWx1ZSk7XG4gICAgICAgICAgdGFyZ2V0LnNldEF0dHJpYnV0ZShhdHRyTmFtZSwgYXR0clZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgfVxufVxuIl19

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

  function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _typeof$7(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$7 = function _typeof(obj) { return typeof obj; }; } else { _typeof$7 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$7(obj); }


  var TIMESTAMP = Date.now();
  var getPlaceholder = function getPlaceholder() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    return "{{h-".concat(TIMESTAMP, "-").concat(id, "}}");
  };
  var PLACEHOLDER_REGEXP_TEXT = getPlaceholder('(\\d+)');
  var PLACEHOLDER_REGEXP_EQUAL = new RegExp("^".concat(PLACEHOLDER_REGEXP_TEXT, "$"));
  var PLACEHOLDER_REGEXP_ALL = new RegExp(PLACEHOLDER_REGEXP_TEXT, 'g');
  var ATTR_PREFIX = "--".concat(TIMESTAMP, "--");
  var ATTR_REGEXP = new RegExp(ATTR_PREFIX, 'g');
  var preparedTemplates = new WeakMap();
  /* istanbul ignore next */

  function applyShadyCSS(template, tagName) {
    if (!tagName) return template;
    return shadyCSS(function (shady) {
      var map = preparedTemplates.get(template);

      if (!map) {
        map = new Map();
        preparedTemplates.set(template, map);
      }

      var clone = map.get(tagName);

      if (!clone) {
        clone = document.createElement('template');
        clone.content.appendChild(template.content.cloneNode(true));
        map.set(tagName, clone);
        var styles = clone.content.querySelectorAll('style');
        Array.from(styles).forEach(function (style) {
          var count = style.childNodes.length + 1;

          for (var i = 0; i < count; i += 1) {
            style.parentNode.insertBefore(document.createTextNode(getPlaceholder()), style);
          }
        });
        shady.prepareTemplate(clone, tagName.toLowerCase());
      }

      return clone;
    }, template);
  }

  function createSignature(parts, styles) {
    var signature = parts.reduce(function (acc, part, index) {
      if (index === 0) {
        return part;
      }

      if (parts.slice(index).join('').match(/^\s*<\/\s*(table|tr|thead|tbody|tfoot|colgroup)>/)) {
        return "".concat(acc, "<!--").concat(getPlaceholder(index - 1), "-->").concat(part);
      }

      return acc + getPlaceholder(index - 1) + part;
    }, '');

    if (styles) {
      signature += "<style>\n".concat(styles.join('\n/*------*/\n'), "\n</style>");
    }
    /* istanbul ignore if */


    if (IS_IE) {
      return signature.replace(/style\s*=\s*(["][^"]+["]|['][^']+[']|[^\s"'<>/]+)/g, function (match) {
        return "".concat(ATTR_PREFIX).concat(match);
      });
    }

    return signature;
  }

  function getPropertyName(string) {
    return string.replace(/\s*=\s*['"]*$/g, '').split(' ').pop();
  }

  function replaceComments(fragment) {
    var iterator = document.createNodeIterator(fragment, NodeFilter.SHOW_COMMENT, null, false);
    var node; // eslint-disable-next-line no-cond-assign

    while (node = iterator.nextNode()) {
      if (PLACEHOLDER_REGEXP_EQUAL.test(node.textContent)) {
        node.parentNode.insertBefore(document.createTextNode(node.textContent), node);
        node.parentNode.removeChild(node);
      }
    }
  }

  function createInternalWalker(context) {
    var node;
    return {
      get currentNode() {
        return node;
      },

      nextNode: function nextNode() {
        if (node === undefined) {
          node = context.childNodes[0];
        } else if (node.childNodes.length) {
          node = node.childNodes[0];
        } else if (node.nextSibling) {
          node = node.nextSibling;
        } else {
          node = node.parentNode.nextSibling;
        }

        return !!node;
      }
    };
  }

  function createExternalWalker(context) {
    return document.createTreeWalker(context, // eslint-disable-next-line no-bitwise
    NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, null, false);
  }
  /* istanbul ignore next */


  var createWalker = _typeof$7(window.ShadyDOM) === 'object' && window.ShadyDOM.inUse ? createInternalWalker : createExternalWalker;
  var container = document.createElement('div');
  function compile$1(rawParts, isSVG, styles) {
    var template = document.createElement('template');
    var parts = [];
    var signature = createSignature(rawParts, styles);
    if (isSVG) signature = "<svg>".concat(signature, "</svg>");
    /* istanbul ignore if */

    if (IS_IE) {
      template.innerHTML = signature;
    } else {
      container.innerHTML = "<template>".concat(signature, "</template>");
      template.content.appendChild(container.children[0].content);
    }

    if (isSVG) {
      var svgRoot = template.content.firstChild;
      template.content.removeChild(svgRoot);
      Array.from(svgRoot.childNodes).forEach(function (node) {
        return template.content.appendChild(node);
      });
    }

    replaceComments(template.content);
    var compileWalker = createWalker(template.content);
    var compileIndex = 0;

    var _loop = function _loop() {
      var node = compileWalker.currentNode;

      if (node.nodeType === Node.TEXT_NODE) {
        var text = node.textContent;

        if (!text.match(PLACEHOLDER_REGEXP_EQUAL)) {
          var results = text.match(PLACEHOLDER_REGEXP_ALL);

          if (results) {
            var currentNode = node;
            results.reduce(function (acc, placeholder) {
              var _acc$pop$split = acc.pop().split(placeholder),
                  _acc$pop$split2 = _slicedToArray(_acc$pop$split, 2),
                  before = _acc$pop$split2[0],
                  next = _acc$pop$split2[1];

              if (before) acc.push(before);
              acc.push(placeholder);
              if (next) acc.push(next);
              return acc;
            }, [text]).forEach(function (part, index) {
              if (index === 0) {
                currentNode.textContent = part;
              } else {
                currentNode = currentNode.parentNode.insertBefore(document.createTextNode(part), currentNode.nextSibling);
              }
            });
          }
        }

        var equal = node.textContent.match(PLACEHOLDER_REGEXP_EQUAL);

        if (equal) {
          /* istanbul ignore else */
          if (!IS_IE) node.textContent = '';
          parts[equal[1]] = [compileIndex, resolveValue];
        }
      } else {
        /* istanbul ignore else */
        // eslint-disable-next-line no-lonely-if
        if (node.nodeType === Node.ELEMENT_NODE) {
          Array.from(node.attributes).forEach(function (attr) {
            var value = attr.value.trim();
            /* istanbul ignore next */

            var name = IS_IE ? attr.name.replace(ATTR_PREFIX, '') : attr.name;
            var equal = value.match(PLACEHOLDER_REGEXP_EQUAL);

            if (equal) {
              var propertyName = getPropertyName(rawParts[equal[1]]);
              parts[equal[1]] = [compileIndex, resolveProperty(name, propertyName, isSVG)];
              node.removeAttribute(attr.name);
            } else {
              var _results = value.match(PLACEHOLDER_REGEXP_ALL);

              if (_results) {
                var partialName = "attr__".concat(name);

                _results.forEach(function (placeholder, index) {
                  var _placeholder$match = placeholder.match(PLACEHOLDER_REGEXP_EQUAL),
                      _placeholder$match2 = _slicedToArray(_placeholder$match, 2),
                      id = _placeholder$match2[1];

                  parts[id] = [compileIndex, function (host, target, attrValue) {
                    var data = dataMap.get(target, {});
                    data[partialName] = (data[partialName] || value).replace(placeholder, attrValue == null ? '' : attrValue);

                    if (_results.length === 1 || index + 1 === _results.length) {
                      target.setAttribute(name, data[partialName]);
                      data[partialName] = undefined;
                    }
                  }];
                });

                attr.value = '';
                /* istanbul ignore next */

                if (IS_IE && name !== attr.name) {
                  node.removeAttribute(attr.name);
                  node.setAttribute(name, '');
                }
              }
            }
          });
        }
      }

      compileIndex += 1;
    };

    while (compileWalker.nextNode()) {
      _loop();
    }

    return function (host, target, args) {
      var data = dataMap.get(target, {
        type: 'function'
      });

      if (template !== data.template) {
        if (data.template) removeTemplate(target);
        var fragment = document.importNode(applyShadyCSS(template, host.tagName).content, true);
        var renderWalker = createWalker(fragment);
        var clonedParts = parts.slice(0);
        var renderIndex = 0;
        var currentPart = clonedParts.shift();
        var markers = [];
        Object.assign(data, {
          template: template,
          markers: markers
        });

        while (renderWalker.nextNode()) {
          var node = renderWalker.currentNode;

          if (node.nodeType === Node.TEXT_NODE) {
            /* istanbul ignore next */
            if (PLACEHOLDER_REGEXP_EQUAL.test(node.textContent)) {
              node.textContent = '';
            } else if (IS_IE) {
              node.textContent = node.textContent.replace(ATTR_REGEXP, '');
            }
          }

          while (currentPart && currentPart[0] === renderIndex) {
            markers.push([node, currentPart[1]]);
            currentPart = clonedParts.shift();
          }

          renderIndex += 1;
        }

        var childList = Array.from(fragment.childNodes);
        data.startNode = childList[0];
        data.endNode = childList[childList.length - 1];

        if (target.nodeType === Node.TEXT_NODE) {
          var previousChild = target;
          childList.forEach(function (child) {
            target.parentNode.insertBefore(child, previousChild.nextSibling);
            previousChild = child;
          });
        } else {
          target.appendChild(fragment);
        }
      }

      data.markers.forEach(function (_ref, index) {
        var _ref2 = _slicedToArray(_ref, 2),
            node = _ref2[0],
            fn = _ref2[1];

        if (data.lastArgs && data.lastArgs[index] === args[index]) return;
        fn(host, node, args[index], data.lastArgs ? data.lastArgs[index] : undefined);
      });
      data.lastArgs = args;
    };
  }
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZW1wbGF0ZS9jb3JlLmpzIl0sIm5hbWVzIjpbInN0cmluZ2lmeUVsZW1lbnQiLCJzaGFkeUNTUyIsIklTX0lFIiwiZGF0YU1hcCIsInJlbW92ZVRlbXBsYXRlIiwicmVzb2x2ZVZhbHVlIiwicmVzb2x2ZVByb3BlcnR5IiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiZSIsIlRJTUVTVEFNUCIsIkRhdGUiLCJub3ciLCJnZXRQbGFjZWhvbGRlciIsImlkIiwiUExBQ0VIT0xERVJfUkVHRVhQX1RFWFQiLCJQTEFDRUhPTERFUl9SRUdFWFBfRVFVQUwiLCJSZWdFeHAiLCJQTEFDRUhPTERFUl9SRUdFWFBfQUxMIiwiQVRUUl9QUkVGSVgiLCJBVFRSX1JFR0VYUCIsInByZXBhcmVkVGVtcGxhdGVzIiwiV2Vha01hcCIsImFwcGx5U2hhZHlDU1MiLCJ0ZW1wbGF0ZSIsInRhZ05hbWUiLCJzaGFkeSIsIm1hcCIsImdldCIsIk1hcCIsInNldCIsImNsb25lIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY29udGVudCIsImFwcGVuZENoaWxkIiwiY2xvbmVOb2RlIiwic3R5bGVzIiwicXVlcnlTZWxlY3RvckFsbCIsIkFycmF5IiwiZnJvbSIsImZvckVhY2giLCJzdHlsZSIsImNvdW50IiwiY2hpbGROb2RlcyIsImxlbmd0aCIsImkiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiY3JlYXRlVGV4dE5vZGUiLCJwcmVwYXJlVGVtcGxhdGUiLCJ0b0xvd2VyQ2FzZSIsImNyZWF0ZVNpZ25hdHVyZSIsInBhcnRzIiwic2lnbmF0dXJlIiwicmVkdWNlIiwiYWNjIiwicGFydCIsImluZGV4Iiwic2xpY2UiLCJqb2luIiwibWF0Y2giLCJyZXBsYWNlIiwiZ2V0UHJvcGVydHlOYW1lIiwic3RyaW5nIiwic3BsaXQiLCJwb3AiLCJyZXBsYWNlQ29tbWVudHMiLCJmcmFnbWVudCIsIml0ZXJhdG9yIiwiY3JlYXRlTm9kZUl0ZXJhdG9yIiwiTm9kZUZpbHRlciIsIlNIT1dfQ09NTUVOVCIsIm5vZGUiLCJuZXh0Tm9kZSIsInRlc3QiLCJ0ZXh0Q29udGVudCIsInJlbW92ZUNoaWxkIiwiY3JlYXRlSW50ZXJuYWxXYWxrZXIiLCJjb250ZXh0IiwiY3VycmVudE5vZGUiLCJ1bmRlZmluZWQiLCJuZXh0U2libGluZyIsImNyZWF0ZUV4dGVybmFsV2Fsa2VyIiwiY3JlYXRlVHJlZVdhbGtlciIsIlNIT1dfRUxFTUVOVCIsIlNIT1dfVEVYVCIsImNyZWF0ZVdhbGtlciIsIndpbmRvdyIsIlNoYWR5RE9NIiwiaW5Vc2UiLCJjb250YWluZXIiLCJjb21waWxlIiwicmF3UGFydHMiLCJpc1NWRyIsImlubmVySFRNTCIsImNoaWxkcmVuIiwic3ZnUm9vdCIsImZpcnN0Q2hpbGQiLCJjb21waWxlV2Fsa2VyIiwiY29tcGlsZUluZGV4Iiwibm9kZVR5cGUiLCJOb2RlIiwiVEVYVF9OT0RFIiwidGV4dCIsInJlc3VsdHMiLCJwbGFjZWhvbGRlciIsImJlZm9yZSIsIm5leHQiLCJwdXNoIiwiZXF1YWwiLCJFTEVNRU5UX05PREUiLCJhdHRyaWJ1dGVzIiwiYXR0ciIsInZhbHVlIiwidHJpbSIsIm5hbWUiLCJwcm9wZXJ0eU5hbWUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJwYXJ0aWFsTmFtZSIsImhvc3QiLCJ0YXJnZXQiLCJhdHRyVmFsdWUiLCJkYXRhIiwic2V0QXR0cmlidXRlIiwiYXJncyIsInR5cGUiLCJpbXBvcnROb2RlIiwicmVuZGVyV2Fsa2VyIiwiY2xvbmVkUGFydHMiLCJyZW5kZXJJbmRleCIsImN1cnJlbnRQYXJ0Iiwic2hpZnQiLCJtYXJrZXJzIiwiT2JqZWN0IiwiYXNzaWduIiwiaW5kZXhPZiIsImN1c3RvbUVsZW1lbnRzIiwiRXJyb3IiLCJjaGlsZExpc3QiLCJzdGFydE5vZGUiLCJlbmROb2RlIiwicHJldmlvdXNDaGlsZCIsImNoaWxkIiwiZm4iLCJsYXN0QXJncyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLFNBQVNBLGdCQUFULEVB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LENBQUNzQixRQUFMLEdBQWdCcEIsSUFBaEI7QUFDRCxHQWhFRDtBQWlFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0cmluZ2lmeUVsZW1lbnQsIHNoYWR5Q1NTLCBJU19JRSB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IGRhdGFNYXAsIHJlbW92ZVRlbXBsYXRlIH0gZnJvbSAnLi91dGlscyc7XG5cbmltcG9ydCByZXNvbHZlVmFsdWUgZnJvbSAnLi9yZXNvbHZlcnMvdmFsdWUnO1xuaW1wb3J0IHJlc29sdmVQcm9wZXJ0eSBmcm9tICcuL3Jlc29sdmVycy9wcm9wZXJ0eSc7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG50cnkgeyBwcm9jZXNzLmVudi5OT0RFX0VOViB9IGNhdGNoKGUpIHsgdmFyIHByb2Nlc3MgPSB7IGVudjogeyBOT0RFX0VOVjogJ3Byb2R1Y3Rpb24nIH0gfTsgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbmNvbnN0IFRJTUVTVEFNUCA9IERhdGUubm93KCk7XG5cbmV4cG9ydCBjb25zdCBnZXRQbGFjZWhvbGRlciA9IChpZCA9IDApID0+IGB7e2gtJHtUSU1FU1RBTVB9LSR7aWR9fX1gO1xuXG5jb25zdCBQTEFDRUhPTERFUl9SRUdFWFBfVEVYVCA9IGdldFBsYWNlaG9sZGVyKCcoXFxcXGQrKScpO1xuY29uc3QgUExBQ0VIT0xERVJfUkVHRVhQX0VRVUFMID0gbmV3IFJlZ0V4cChgXiR7UExBQ0VIT0xERVJfUkVHRVhQX1RFWFR9JGApO1xuY29uc3QgUExBQ0VIT0xERVJfUkVHRVhQX0FMTCA9IG5ldyBSZWdFeHAoUExBQ0VIT0xERVJfUkVHRVhQX1RFWFQsICdnJyk7XG5cbmNvbnN0IEFUVFJfUFJFRklYID0gYC0tJHtUSU1FU1RBTVB9LS1gO1xuY29uc3QgQVRUUl9SRUdFWFAgPSBuZXcgUmVnRXhwKEFUVFJfUFJFRklYLCAnZycpO1xuXG5jb25zdCBwcmVwYXJlZFRlbXBsYXRlcyA9IG5ldyBXZWFrTWFwKCk7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5mdW5jdGlvbiBhcHBseVNoYWR5Q1NTKHRlbXBsYXRlLCB0YWdOYW1lKSB7XG4gIGlmICghdGFnTmFtZSkgcmV0dXJuIHRlbXBsYXRlO1xuXG4gIHJldHVybiBzaGFkeUNTUygoc2hhZHkpID0+IHtcbiAgICBsZXQgbWFwID0gcHJlcGFyZWRUZW1wbGF0ZXMuZ2V0KHRlbXBsYXRlKTtcbiAgICBpZiAoIW1hcCkge1xuICAgICAgbWFwID0gbmV3IE1hcCgpO1xuICAgICAgcHJlcGFyZWRUZW1wbGF0ZXMuc2V0KHRlbXBsYXRlLCBtYXApO1xuICAgIH1cblxuICAgIGxldCBjbG9uZSA9IG1hcC5nZXQodGFnTmFtZSk7XG5cbiAgICBpZiAoIWNsb25lKSB7XG4gICAgICBjbG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgICBjbG9uZS5jb250ZW50LmFwcGVuZENoaWxkKHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcblxuICAgICAgbWFwLnNldCh0YWdOYW1lLCBjbG9uZSk7XG5cbiAgICAgIGNvbnN0IHN0eWxlcyA9IGNsb25lLmNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnc3R5bGUnKTtcblxuICAgICAgQXJyYXkuZnJvbShzdHlsZXMpLmZvckVhY2goKHN0eWxlKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvdW50ID0gc3R5bGUuY2hpbGROb2Rlcy5sZW5ndGggKyAxO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpICs9IDEpIHtcbiAgICAgICAgICBzdHlsZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShnZXRQbGFjZWhvbGRlcigpKSwgc3R5bGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgc2hhZHkucHJlcGFyZVRlbXBsYXRlKGNsb25lLCB0YWdOYW1lLnRvTG93ZXJDYXNlKCkpO1xuICAgIH1cbiAgICByZXR1cm4gY2xvbmU7XG4gIH0sIHRlbXBsYXRlKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2lnbmF0dXJlKHBhcnRzLCBzdHlsZXMpIHtcbiAgbGV0IHNpZ25hdHVyZSA9IHBhcnRzLnJlZHVjZSgoYWNjLCBwYXJ0LCBpbmRleCkgPT4ge1xuICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHBhcnQ7XG4gICAgfVxuXG4gICAgaWYgKHBhcnRzLnNsaWNlKGluZGV4KS5qb2luKCcnKS5tYXRjaCgvXlxccyo8XFwvXFxzKih0YWJsZXx0cnx0aGVhZHx0Ym9keXx0Zm9vdHxjb2xncm91cCk+LykpIHtcbiAgICAgIHJldHVybiBgJHthY2N9PCEtLSR7Z2V0UGxhY2Vob2xkZXIoaW5kZXggLSAxKX0tLT4ke3BhcnR9YDtcbiAgICB9XG4gICAgcmV0dXJuIGFjYyArIGdldFBsYWNlaG9sZGVyKGluZGV4IC0gMSkgKyBwYXJ0O1xuICB9LCAnJyk7XG5cbiAgaWYgKHN0eWxlcykge1xuICAgIHNpZ25hdHVyZSArPSBgPHN0eWxlPlxcbiR7c3R5bGVzLmpvaW4oJ1xcbi8qLS0tLS0tKi9cXG4nKX1cXG48L3N0eWxlPmA7XG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKElTX0lFKSB7XG4gICAgcmV0dXJuIHNpZ25hdHVyZS5yZXBsYWNlKFxuICAgICAgL3N0eWxlXFxzKj1cXHMqKFtcIl1bXlwiXStbXCJdfFsnXVteJ10rWyddfFteXFxzXCInPD4vXSspL2csXG4gICAgICBtYXRjaCA9PiBgJHtBVFRSX1BSRUZJWH0ke21hdGNofWAsXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBzaWduYXR1cmU7XG59XG5cbmZ1bmN0aW9uIGdldFByb3BlcnR5TmFtZShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9cXHMqPVxccypbJ1wiXSokL2csICcnKS5zcGxpdCgnICcpLnBvcCgpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlQ29tbWVudHMoZnJhZ21lbnQpIHtcbiAgY29uc3QgaXRlcmF0b3IgPSBkb2N1bWVudC5jcmVhdGVOb2RlSXRlcmF0b3IoZnJhZ21lbnQsIE5vZGVGaWx0ZXIuU0hPV19DT01NRU5ULCBudWxsLCBmYWxzZSk7XG4gIGxldCBub2RlO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uZC1hc3NpZ25cbiAgd2hpbGUgKG5vZGUgPSBpdGVyYXRvci5uZXh0Tm9kZSgpKSB7XG4gICAgaWYgKFBMQUNFSE9MREVSX1JFR0VYUF9FUVVBTC50ZXN0KG5vZGUudGV4dENvbnRlbnQpKSB7XG4gICAgICBub2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG5vZGUudGV4dENvbnRlbnQpLCBub2RlKTtcbiAgICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUludGVybmFsV2Fsa2VyKGNvbnRleHQpIHtcbiAgbGV0IG5vZGU7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgY3VycmVudE5vZGUoKSB7IHJldHVybiBub2RlOyB9LFxuICAgIG5leHROb2RlKCkge1xuICAgICAgaWYgKG5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBub2RlID0gY29udGV4dC5jaGlsZE5vZGVzWzBdO1xuICAgICAgfSBlbHNlIGlmIChub2RlLmNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICAgIG5vZGUgPSBub2RlLmNoaWxkTm9kZXNbMF07XG4gICAgICB9IGVsc2UgaWYgKG5vZGUubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgbm9kZSA9IG5vZGUubmV4dFNpYmxpbmc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlLm5leHRTaWJsaW5nO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gISFub2RlO1xuICAgIH0sXG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUV4dGVybmFsV2Fsa2VyKGNvbnRleHQpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoXG4gICAgY29udGV4dCxcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxuICAgIE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5UIHwgTm9kZUZpbHRlci5TSE9XX1RFWFQsXG4gICAgbnVsbCxcbiAgICBmYWxzZSxcbiAgKTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IGNyZWF0ZVdhbGtlciA9IHR5cGVvZiB3aW5kb3cuU2hhZHlET00gPT09ICdvYmplY3QnICYmIHdpbmRvdy5TaGFkeURPTS5pblVzZSA/IGNyZWF0ZUludGVybmFsV2Fsa2VyIDogY3JlYXRlRXh0ZXJuYWxXYWxrZXI7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGUocmF3UGFydHMsIGlzU1ZHLCBzdHlsZXMpIHtcbiAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICBjb25zdCBwYXJ0cyA9IFtdO1xuXG4gIGxldCBzaWduYXR1cmUgPSBjcmVhdGVTaWduYXR1cmUocmF3UGFydHMsIHN0eWxlcyk7XG4gIGlmIChpc1NWRykgc2lnbmF0dXJlID0gYDxzdmc+JHtzaWduYXR1cmV9PC9zdmc+YDtcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKElTX0lFKSB7XG4gICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gc2lnbmF0dXJlO1xuICB9IGVsc2Uge1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgPHRlbXBsYXRlPiR7c2lnbmF0dXJlfTwvdGVtcGxhdGU+YDtcbiAgICB0ZW1wbGF0ZS5jb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lci5jaGlsZHJlblswXS5jb250ZW50KTtcbiAgfVxuXG4gIGlmIChpc1NWRykge1xuICAgIGNvbnN0IHN2Z1Jvb3QgPSB0ZW1wbGF0ZS5jb250ZW50LmZpcnN0Q2hpbGQ7XG4gICAgdGVtcGxhdGUuY29udGVudC5yZW1vdmVDaGlsZChzdmdSb290KTtcbiAgICBBcnJheS5mcm9tKHN2Z1Jvb3QuY2hpbGROb2RlcykuZm9yRWFjaChub2RlID0+IHRlbXBsYXRlLmNvbnRlbnQuYXBwZW5kQ2hpbGQobm9kZSkpO1xuICB9XG5cbiAgcmVwbGFjZUNvbW1lbnRzKHRlbXBsYXRlLmNvbnRlbnQpO1xuXG4gIGNvbnN0IGNvbXBpbGVXYWxrZXIgPSBjcmVhdGVXYWxrZXIodGVtcGxhdGUuY29udGVudCk7XG4gIGxldCBjb21waWxlSW5kZXggPSAwO1xuXG4gIHdoaWxlIChjb21waWxlV2Fsa2VyLm5leHROb2RlKCkpIHtcbiAgICBjb25zdCBub2RlID0gY29tcGlsZVdhbGtlci5jdXJyZW50Tm9kZTtcblxuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgY29uc3QgdGV4dCA9IG5vZGUudGV4dENvbnRlbnQ7XG5cbiAgICAgIGlmICghdGV4dC5tYXRjaChQTEFDRUhPTERFUl9SRUdFWFBfRVFVQUwpKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSB0ZXh0Lm1hdGNoKFBMQUNFSE9MREVSX1JFR0VYUF9BTEwpO1xuICAgICAgICBpZiAocmVzdWx0cykge1xuICAgICAgICAgIGxldCBjdXJyZW50Tm9kZSA9IG5vZGU7XG4gICAgICAgICAgcmVzdWx0c1xuICAgICAgICAgICAgLnJlZHVjZSgoYWNjLCBwbGFjZWhvbGRlcikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBbYmVmb3JlLCBuZXh0XSA9IGFjYy5wb3AoKS5zcGxpdChwbGFjZWhvbGRlcik7XG4gICAgICAgICAgICAgIGlmIChiZWZvcmUpIGFjYy5wdXNoKGJlZm9yZSk7XG4gICAgICAgICAgICAgIGFjYy5wdXNoKHBsYWNlaG9sZGVyKTtcbiAgICAgICAgICAgICAgaWYgKG5leHQpIGFjYy5wdXNoKG5leHQpO1xuICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgfSwgW3RleHRdKVxuICAgICAgICAgICAgLmZvckVhY2goKHBhcnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnROb2RlLnRleHRDb250ZW50ID0gcGFydDtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLnBhcmVudE5vZGVcbiAgICAgICAgICAgICAgICAgIC5pbnNlcnRCZWZvcmUoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocGFydCksIGN1cnJlbnROb2RlLm5leHRTaWJsaW5nKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgZXF1YWwgPSBub2RlLnRleHRDb250ZW50Lm1hdGNoKFBMQUNFSE9MREVSX1JFR0VYUF9FUVVBTCk7XG4gICAgICBpZiAoZXF1YWwpIHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgICAgaWYgKCFJU19JRSkgbm9kZS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICBwYXJ0c1tlcXVhbFsxXV0gPSBbY29tcGlsZUluZGV4LCByZXNvbHZlVmFsdWVdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqLyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9uZWx5LWlmXG4gICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgQXJyYXkuZnJvbShub2RlLmF0dHJpYnV0ZXMpLmZvckVhY2goKGF0dHIpID0+IHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IGF0dHIudmFsdWUudHJpbSgpO1xuICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgICAgY29uc3QgbmFtZSA9IElTX0lFID8gYXR0ci5uYW1lLnJlcGxhY2UoQVRUUl9QUkVGSVgsICcnKSA6IGF0dHIubmFtZTtcbiAgICAgICAgICBjb25zdCBlcXVhbCA9IHZhbHVlLm1hdGNoKFBMQUNFSE9MREVSX1JFR0VYUF9FUVVBTCk7XG4gICAgICAgICAgaWYgKGVxdWFsKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSBnZXRQcm9wZXJ0eU5hbWUocmF3UGFydHNbZXF1YWxbMV1dKTtcbiAgICAgICAgICAgIHBhcnRzW2VxdWFsWzFdXSA9IFtjb21waWxlSW5kZXgsIHJlc29sdmVQcm9wZXJ0eShuYW1lLCBwcm9wZXJ0eU5hbWUsIGlzU1ZHKV07XG4gICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyLm5hbWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHRzID0gdmFsdWUubWF0Y2goUExBQ0VIT0xERVJfUkVHRVhQX0FMTCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0cykge1xuICAgICAgICAgICAgICBjb25zdCBwYXJ0aWFsTmFtZSA9IGBhdHRyX18ke25hbWV9YDtcblxuICAgICAgICAgICAgICByZXN1bHRzLmZvckVhY2goKHBsYWNlaG9sZGVyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IFssIGlkXSA9IHBsYWNlaG9sZGVyLm1hdGNoKFBMQUNFSE9MREVSX1JFR0VYUF9FUVVBTCk7XG4gICAgICAgICAgICAgICAgcGFydHNbaWRdID0gW2NvbXBpbGVJbmRleCwgKGhvc3QsIHRhcmdldCwgYXR0clZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gZGF0YU1hcC5nZXQodGFyZ2V0LCB7fSk7XG4gICAgICAgICAgICAgICAgICBkYXRhW3BhcnRpYWxOYW1lXSA9IChkYXRhW3BhcnRpYWxOYW1lXSB8fCB2YWx1ZSkucmVwbGFjZShwbGFjZWhvbGRlciwgYXR0clZhbHVlID09IG51bGwgPyAnJyA6IGF0dHJWYWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgIGlmICgocmVzdWx0cy5sZW5ndGggPT09IDEpIHx8IChpbmRleCArIDEgPT09IHJlc3VsdHMubGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc2V0QXR0cmlidXRlKG5hbWUsIGRhdGFbcGFydGlhbE5hbWVdKTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YVtwYXJ0aWFsTmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV07XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIGF0dHIudmFsdWUgPSAnJztcblxuICAgICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICAgICAgICBpZiAoSVNfSUUgJiYgbmFtZSAhPT0gYXR0ci5uYW1lKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0ci5uYW1lKTtcbiAgICAgICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShuYW1lLCAnJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBpbGVJbmRleCArPSAxO1xuICB9XG5cbiAgcmV0dXJuIChob3N0LCB0YXJnZXQsIGFyZ3MpID0+IHtcbiAgICBjb25zdCBkYXRhID0gZGF0YU1hcC5nZXQodGFyZ2V0LCB7IHR5cGU6ICdmdW5jdGlvbicgfSk7XG5cbiAgICBpZiAodGVtcGxhdGUgIT09IGRhdGEudGVtcGxhdGUpIHtcbiAgICAgIGlmIChkYXRhLnRlbXBsYXRlKSByZW1vdmVUZW1wbGF0ZSh0YXJnZXQpO1xuXG4gICAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmltcG9ydE5vZGUoYXBwbHlTaGFkeUNTUyh0ZW1wbGF0ZSwgaG9zdC50YWdOYW1lKS5jb250ZW50LCB0cnVlKTtcblxuICAgICAgY29uc3QgcmVuZGVyV2Fsa2VyID0gY3JlYXRlV2Fsa2VyKGZyYWdtZW50KTtcbiAgICAgIGNvbnN0IGNsb25lZFBhcnRzID0gcGFydHMuc2xpY2UoMCk7XG5cbiAgICAgIGxldCByZW5kZXJJbmRleCA9IDA7XG4gICAgICBsZXQgY3VycmVudFBhcnQgPSBjbG9uZWRQYXJ0cy5zaGlmdCgpO1xuXG4gICAgICBjb25zdCBtYXJrZXJzID0gW107XG5cbiAgICAgIE9iamVjdC5hc3NpZ24oZGF0YSwgeyB0ZW1wbGF0ZSwgbWFya2VycyB9KTtcblxuICAgICAgd2hpbGUgKHJlbmRlcldhbGtlci5uZXh0Tm9kZSgpKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSByZW5kZXJXYWxrZXIuY3VycmVudE5vZGU7XG5cbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgICBpZiAoUExBQ0VIT0xERVJfUkVHRVhQX0VRVUFMLnRlc3Qobm9kZS50ZXh0Q29udGVudCkpIHtcbiAgICAgICAgICAgIG5vZGUudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICB9IGVsc2UgaWYgKElTX0lFKSB7XG4gICAgICAgICAgICBub2RlLnRleHRDb250ZW50ID0gbm9kZS50ZXh0Q29udGVudC5yZXBsYWNlKEFUVFJfUkVHRVhQLCAnJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICBpZiAobm9kZS50YWdOYW1lLmluZGV4T2YoJy0nKSA+IC0xICYmICFjdXN0b21FbGVtZW50cy5nZXQobm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgTWlzc2luZyAnJHtzdHJpbmdpZnlFbGVtZW50KG5vZGUpfScgZWxlbWVudCBkZWZpbml0aW9uIGluICcke3N0cmluZ2lmeUVsZW1lbnQoaG9zdCl9J2ApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChjdXJyZW50UGFydCAmJiBjdXJyZW50UGFydFswXSA9PT0gcmVuZGVySW5kZXgpIHtcbiAgICAgICAgICBtYXJrZXJzLnB1c2goW25vZGUsIGN1cnJlbnRQYXJ0WzFdXSk7XG4gICAgICAgICAgY3VycmVudFBhcnQgPSBjbG9uZWRQYXJ0cy5zaGlmdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVuZGVySW5kZXggKz0gMTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2hpbGRMaXN0ID0gQXJyYXkuZnJvbShmcmFnbWVudC5jaGlsZE5vZGVzKTtcblxuICAgICAgZGF0YS5zdGFydE5vZGUgPSBjaGlsZExpc3RbMF07XG4gICAgICBkYXRhLmVuZE5vZGUgPSBjaGlsZExpc3RbY2hpbGRMaXN0Lmxlbmd0aCAtIDFdO1xuXG4gICAgICBpZiAodGFyZ2V0Lm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgICBsZXQgcHJldmlvdXNDaGlsZCA9IHRhcmdldDtcbiAgICAgICAgY2hpbGRMaXN0LmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgdGFyZ2V0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNoaWxkLCBwcmV2aW91c0NoaWxkLm5leHRTaWJsaW5nKTtcbiAgICAgICAgICBwcmV2aW91c0NoaWxkID0gY2hpbGQ7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkYXRhLm1hcmtlcnMuZm9yRWFjaCgoW25vZGUsIGZuXSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChkYXRhLmxhc3RBcmdzICYmIGRhdGEubGFzdEFyZ3NbaW5kZXhdID09PSBhcmdzW2luZGV4XSkgcmV0dXJuO1xuICAgICAgZm4oaG9zdCwgbm9kZSwgYXJnc1tpbmRleF0sIGRhdGEubGFzdEFyZ3MgPyBkYXRhLmxhc3RBcmdzW2luZGV4XSA6IHVuZGVmaW5lZCk7XG4gICAgfSk7XG5cbiAgICBkYXRhLmxhc3RBcmdzID0gYXJncztcbiAgfTtcbn1cbiJdfQ==

  var setCache = new Map();
  function set$1(propertyName, value) {
    if (!propertyName) throw Error("Target property name missing: ".concat(propertyName));

    if (arguments.length === 2) {
      return function (host) {
        host[propertyName] = value;
      };
    }

    var fn = setCache.get(propertyName);

    if (!fn) {
      fn = function fn(host, _ref) {
        var target = _ref.target;
        host[propertyName] = target.value;
      };

      setCache.set(propertyName, fn);
    }

    return fn;
  }
  var promiseMap = new WeakMap();
  function resolve(promise, placeholder) {
    var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
    return function (host, target) {
      var timeout;

      if (placeholder) {
        timeout = setTimeout(function () {
          timeout = undefined;
          requestAnimationFrame(function () {
            placeholder(host, target);
          });
        }, delay);
      }

      promiseMap.set(target, promise);
      promise.then(function (template) {
        if (timeout) clearTimeout(timeout);

        if (promiseMap.get(target) === promise) {
          template(host, target);
          promiseMap.set(target, null);
        }
      });
    };
  }
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZW1wbGF0ZS9oZWxwZXJzLmpzIl0sIm5hbWVzIjpbInNldENhY2hlIiwiTWFwIiwic2V0IiwicHJvcGVydHlOYW1lIiwidmFsdWUiLCJFcnJvciIsImFyZ3VtZW50cyIsImxlbmd0aCIsImhvc3QiLCJmbiIsImdldCIsInRhcmdldCIsInByb21pc2VNYXAiLCJXZWFrTWFwIiwicmVzb2x2ZSIsInByb21pc2UiLCJwbGFjZWhvbGRlciIsImRlbGF5IiwidGltZW91dCIsInNldFRpbWVvdXQiLCJ1bmRlZmluZWQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ0aGVuIiwidGVtcGxhdGUiLCJjbGVhclRpbWVvdXQiXSwibWFwcGluZ3MiOiJBQUFBLElBQU1BLFFBQVEsR0FBRyxJQUFJQyxHQUFKLEVBQWpCO0FBQ0EsT0FBTyxTQUFTQyxHQUFULENBQWFDLFlBQWIsRUFBMkJDLEtBQTNCLEVBQWtDO0FBQ3ZDLE1BQUksQ0FBQ0QsWUFBTCxFQUFtQixNQUFNRSxLQUFLLHlDQUFrQ0YsWUFBbEMsRUFBWDs7QUFFbkIsTUFBSUcsU0FBUyxDQUFDQyxNQUFWLEtBQXFCLENBQXpCLEVBQTRCO0FBQzFCLFdBQU8sVUFBQ0MsSUFBRCxFQUFVO0FBQUVBLE1BQUFBLElBQUksQ0FBQ0wsWUFBRCxDQUFKLEdBQXFCQyxLQUFyQjtBQUE2QixLQUFoRDtBQUNEOztBQUVELE1BQUlLLEVBQUUsR0FBR1QsUUFBUSxDQUFDVSxHQUFULENBQWFQLFlBQWIsQ0FBVDs7QUFFQSxNQUFJLENBQUNNLEVBQUwsRUFBUztBQUNQQSxJQUFBQSxFQUFFLEdBQUcsWUFBQ0QsSUFBRCxRQUFzQjtBQUFBLFVBQWJHLE1BQWEsUUFBYkEsTUFBYTtBQUFFSCxNQUFBQSxJQUFJLENBQUNMLFlBQUQsQ0FBSixHQUFxQlEsTUFBTSxDQUFDUCxLQUE1QjtBQUFvQyxLQUFqRTs7QUFDQUosSUFBQUEsUUFBUSxDQUFDRSxHQUFULENBQWFDLFlBQWIsRUFBMkJNLEVBQTNCO0FBQ0Q7O0FBRUQsU0FBT0EsRUFBUDtBQUNEO0FBRUQsSUFBTUcsVUFBVSxHQUFHLElBQUlDLE9BQUosRUFBbkI7QUFDQSxPQUFPLFNBQVNDLE9BQVQsQ0FBaUJDLE9BQWpCLEVBQTBCQyxXQUExQixFQUFvRDtBQUFBLE1BQWJDLEtBQWEsdUVBQUwsR0FBSztBQUN6RCxTQUFPLFVBQUNULElBQUQsRUFBT0csTUFBUCxFQUFrQjtBQUN2QixRQUFJTyxPQUFKOztBQUVBLFFBQUlGLFdBQUosRUFBaUI7QUFDZkUsTUFBQUEsT0FBTyxHQUFHQyxVQUFVLENBQUMsWUFBTTtBQUN6QkQsUUFBQUEsT0FBTyxHQUFHRSxTQUFWO0FBRUFDLFFBQUFBLHFCQUFxQixDQUFDLFlBQU07QUFDMUJMLFVBQUFBLFdBQVcsQ0FBQ1IsSUFBRCxFQUFPRyxNQUFQLENBQVg7QUFDRCxTQUZvQixDQUFyQjtBQUdELE9BTm1CLEVBTWpCTSxLQU5pQixDQUFwQjtBQU9EOztBQUVETCxJQUFBQSxVQUFVLENBQUNWLEdBQVgsQ0FBZVMsTUFBZixFQUF1QkksT0FBdkI7QUFFQUEsSUFBQUEsT0FBTyxDQUFDTyxJQUFSLENBQWEsVUFBQ0MsUUFBRCxFQUFjO0FBQ3pCLFVBQUlMLE9BQUosRUFBYU0sWUFBWSxDQUFDTixPQUFELENBQVo7O0FBRWIsVUFBSU4sVUFBVSxDQUFDRixHQUFYLENBQWVDLE1BQWYsTUFBMkJJLE9BQS9CLEVBQXdDO0FBQ3RDUSxRQUFBQSxRQUFRLENBQUNmLElBQUQsRUFBT0csTUFBUCxDQUFSO0FBQ0FDLFFBQUFBLFVBQVUsQ0FBQ1YsR0FBWCxDQUFlUyxNQUFmLEVBQXVCLElBQXZCO0FBQ0Q7QUFDRixLQVBEO0FBUUQsR0F2QkQ7QUF3QkQiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzZXRDYWNoZSA9IG5ldyBNYXAoKTtcbmV4cG9ydCBmdW5jdGlvbiBzZXQocHJvcGVydHlOYW1lLCB2YWx1ZSkge1xuICBpZiAoIXByb3BlcnR5TmFtZSkgdGhyb3cgRXJyb3IoYFRhcmdldCBwcm9wZXJ0eSBuYW1lIG1pc3Npbmc6ICR7cHJvcGVydHlOYW1lfWApO1xuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgcmV0dXJuIChob3N0KSA9PiB7IGhvc3RbcHJvcGVydHlOYW1lXSA9IHZhbHVlOyB9O1xuICB9XG5cbiAgbGV0IGZuID0gc2V0Q2FjaGUuZ2V0KHByb3BlcnR5TmFtZSk7XG5cbiAgaWYgKCFmbikge1xuICAgIGZuID0gKGhvc3QsIHsgdGFyZ2V0IH0pID0+IHsgaG9zdFtwcm9wZXJ0eU5hbWVdID0gdGFyZ2V0LnZhbHVlOyB9O1xuICAgIHNldENhY2hlLnNldChwcm9wZXJ0eU5hbWUsIGZuKTtcbiAgfVxuXG4gIHJldHVybiBmbjtcbn1cblxuY29uc3QgcHJvbWlzZU1hcCA9IG5ldyBXZWFrTWFwKCk7XG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZShwcm9taXNlLCBwbGFjZWhvbGRlciwgZGVsYXkgPSAyMDApIHtcbiAgcmV0dXJuIChob3N0LCB0YXJnZXQpID0+IHtcbiAgICBsZXQgdGltZW91dDtcblxuICAgIGlmIChwbGFjZWhvbGRlcikge1xuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aW1lb3V0ID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgcGxhY2Vob2xkZXIoaG9zdCwgdGFyZ2V0KTtcbiAgICAgICAgfSk7XG4gICAgICB9LCBkZWxheSk7XG4gICAgfVxuXG4gICAgcHJvbWlzZU1hcC5zZXQodGFyZ2V0LCBwcm9taXNlKTtcblxuICAgIHByb21pc2UudGhlbigodGVtcGxhdGUpID0+IHtcbiAgICAgIGlmICh0aW1lb3V0KSBjbGVhclRpbWVvdXQodGltZW91dCk7XG5cbiAgICAgIGlmIChwcm9taXNlTWFwLmdldCh0YXJnZXQpID09PSBwcm9taXNlKSB7XG4gICAgICAgIHRlbXBsYXRlKGhvc3QsIHRhcmdldCk7XG4gICAgICAgIHByb21pc2VNYXAuc2V0KHRhcmdldCwgbnVsbCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59XG4iXX0=

  var helpers = /*#__PURE__*/Object.freeze({
    set: set$1,
    resolve: resolve
  });

  var PLACEHOLDER = getPlaceholder();
  var templatesMap = new Map();
  var stylesMap = new WeakMap();
  var methods = {
    define: function define$1(elements) {
      define(elements);
      return this;
    },
    key: function key(id) {
      this.id = id;
      return this;
    },
    style: function style() {
      for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {
        styles[_key] = arguments[_key];
      }

      stylesMap.set(this, styles);
      return this;
    }
  };

  function create(parts, args, isSVG) {
    var fn = function fn(host) {
      var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : host;
      var styles = stylesMap.get(fn);
      var id = "".concat(parts.join(PLACEHOLDER)).concat(styles ? styles.join(PLACEHOLDER) : '').concat(isSVG ? 'svg' : '');
      var render = templatesMap.get(id);

      if (!render) {
        render = compile$1(parts, isSVG, styles);
        templatesMap.set(id, render);
      }

      render(host, target, args);
    };

    return Object.assign(fn, methods);
  }

  function html(parts) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    return create(parts, args);
  }
  function svg(parts) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }

    return create(parts, args, true);
  }
  Object.assign(html, helpers);
  Object.assign(svg, helpers);
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZW1wbGF0ZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWZpbmVFbGVtZW50cyIsImNvbXBpbGUiLCJnZXRQbGFjZWhvbGRlciIsImhlbHBlcnMiLCJQTEFDRUhPTERFUiIsInRlbXBsYXRlc01hcCIsIk1hcCIsInN0eWxlc01hcCIsIldlYWtNYXAiLCJtZXRob2RzIiwiZGVmaW5lIiwiZWxlbWVudHMiLCJrZXkiLCJpZCIsInN0eWxlIiwic3R5bGVzIiwic2V0IiwiY3JlYXRlIiwicGFydHMiLCJhcmdzIiwiaXNTVkciLCJmbiIsImhvc3QiLCJ0YXJnZXQiLCJnZXQiLCJqb2luIiwicmVuZGVyIiwiT2JqZWN0IiwiYXNzaWduIiwiaHRtbCIsInN2ZyJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsY0FBUCxNQUEyQixXQUEzQjtBQUVBLFNBQVNDLE9BQVQsRUFBa0JDLGNBQWxCLFFBQXdDLFFBQXhDO0FBQ0EsT0FBTyxLQUFLQyxPQUFaLE1BQXlCLFdBQXpCO0FBRUEsSUFBTUMsV0FBVyxHQUFHRixjQUFjLEVBQWxDO0FBRUEsSUFBTUcsWUFBWSxHQUFHLElBQUlDLEdBQUosRUFBckI7QUFDQSxJQUFNQyxTQUFTLEdBQUcsSUFBSUMsT0FBSixFQUFsQjtBQUVBLElBQU1DLE9BQU8sR0FBRztBQUNkQyxFQUFBQSxNQURjLGtCQUNQQyxRQURPLEVBQ0c7QUFDZlgsSUFBQUEsY0FBYyxDQUFDVyxRQUFELENBQWQ7QUFDQSxXQUFPLElBQVA7QUFDRCxHQUphO0FBS2RDLEVBQUFBLEdBTGMsZUFLVkMsRUFMVSxFQUtOO0FBQ04sU0FBS0EsRUFBTCxHQUFVQSxFQUFWO0FBQ0EsV0FBTyxJQUFQO0FBQ0QsR0FSYTtBQVNkQyxFQUFBQSxLQVRjLG1CQVNHO0FBQUEsc0NBQVJDLE1BQVE7QUFBUkEsTUFBQUEsTUFBUTtBQUFBOztBQUNmUixJQUFBQSxTQUFTLENBQUNTLEdBQVYsQ0FBYyxJQUFkLEVBQW9CRCxNQUFwQjtBQUNBLFdBQU8sSUFBUDtBQUNEO0FBWmEsQ0FBaEI7O0FBZUEsU0FBU0UsTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUJDLElBQXZCLEVBQTZCQyxLQUE3QixFQUFvQztBQUNsQyxNQUFNQyxFQUFFLEdBQUcsU0FBTEEsRUFBSyxDQUFDQyxJQUFELEVBQXlCO0FBQUEsUUFBbEJDLE1BQWtCLHVFQUFURCxJQUFTO0FBQ2xDLFFBQU1QLE1BQU0sR0FBR1IsU0FBUyxDQUFDaUIsR0FBVixDQUFjSCxFQUFkLENBQWY7QUFDQSxRQUFNUixFQUFFLGFBQU1LLEtBQUssQ0FBQ08sSUFBTixDQUFXckIsV0FBWCxDQUFOLFNBQWdDVyxNQUFNLEdBQUdBLE1BQU0sQ0FBQ1UsSUFBUCxDQUFZckIsV0FBWixDQUFILEdBQThCLEVBQXBFLFNBQXlFZ0IsS0FBSyxHQUFHLEtBQUgsR0FBVyxFQUF6RixDQUFSO0FBRUEsUUFBSU0sTUFBTSxHQUFHckIsWUFBWSxDQUFDbUIsR0FBYixDQUFpQlgsRUFBakIsQ0FBYjs7QUFDQSxRQUFJLENBQUNhLE1BQUwsRUFBYTtBQUNYQSxNQUFBQSxNQUFNLEdBQUd6QixPQUFPLENBQUNpQixLQUFELEVBQVFFLEtBQVIsRUFBZUwsTUFBZixDQUFoQjtBQUNBVixNQUFBQSxZQUFZLENBQUNXLEdBQWIsQ0FBaUJILEVBQWpCLEVBQXFCYSxNQUFyQjtBQUNEOztBQUVEQSxJQUFBQSxNQUFNLENBQUNKLElBQUQsRUFBT0MsTUFBUCxFQUFlSixJQUFmLENBQU47QUFDRCxHQVhEOztBQWFBLFNBQU9RLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjUCxFQUFkLEVBQWtCWixPQUFsQixDQUFQO0FBQ0Q7O0FBRUQsT0FBTyxTQUFTb0IsSUFBVCxDQUFjWCxLQUFkLEVBQThCO0FBQUEscUNBQU5DLElBQU07QUFBTkEsSUFBQUEsSUFBTTtBQUFBOztBQUNuQyxTQUFPRixNQUFNLENBQUNDLEtBQUQsRUFBUUMsSUFBUixDQUFiO0FBQ0Q7QUFFRCxPQUFPLFNBQVNXLEdBQVQsQ0FBYVosS0FBYixFQUE2QjtBQUFBLHFDQUFOQyxJQUFNO0FBQU5BLElBQUFBLElBQU07QUFBQTs7QUFDbEMsU0FBT0YsTUFBTSxDQUFDQyxLQUFELEVBQVFDLElBQVIsRUFBYyxJQUFkLENBQWI7QUFDRDtBQUVEUSxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsSUFBZCxFQUFvQjFCLE9BQXBCO0FBQ0F3QixNQUFNLENBQUNDLE1BQVAsQ0FBY0UsR0FBZCxFQUFtQjNCLE9BQW5CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRlZmluZUVsZW1lbnRzIGZyb20gJy4uL2RlZmluZSc7XG5cbmltcG9ydCB7IGNvbXBpbGUsIGdldFBsYWNlaG9sZGVyIH0gZnJvbSAnLi9jb3JlJztcbmltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSAnLi9oZWxwZXJzJztcblxuY29uc3QgUExBQ0VIT0xERVIgPSBnZXRQbGFjZWhvbGRlcigpO1xuXG5jb25zdCB0ZW1wbGF0ZXNNYXAgPSBuZXcgTWFwKCk7XG5jb25zdCBzdHlsZXNNYXAgPSBuZXcgV2Vha01hcCgpO1xuXG5jb25zdCBtZXRob2RzID0ge1xuICBkZWZpbmUoZWxlbWVudHMpIHtcbiAgICBkZWZpbmVFbGVtZW50cyhlbGVtZW50cyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIGtleShpZCkge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgc3R5bGUoLi4uc3R5bGVzKSB7XG4gICAgc3R5bGVzTWFwLnNldCh0aGlzLCBzdHlsZXMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlKHBhcnRzLCBhcmdzLCBpc1NWRykge1xuICBjb25zdCBmbiA9IChob3N0LCB0YXJnZXQgPSBob3N0KSA9PiB7XG4gICAgY29uc3Qgc3R5bGVzID0gc3R5bGVzTWFwLmdldChmbik7XG4gICAgY29uc3QgaWQgPSBgJHtwYXJ0cy5qb2luKFBMQUNFSE9MREVSKX0ke3N0eWxlcyA/IHN0eWxlcy5qb2luKFBMQUNFSE9MREVSKSA6ICcnfSR7aXNTVkcgPyAnc3ZnJyA6ICcnfWA7XG5cbiAgICBsZXQgcmVuZGVyID0gdGVtcGxhdGVzTWFwLmdldChpZCk7XG4gICAgaWYgKCFyZW5kZXIpIHtcbiAgICAgIHJlbmRlciA9IGNvbXBpbGUocGFydHMsIGlzU1ZHLCBzdHlsZXMpO1xuICAgICAgdGVtcGxhdGVzTWFwLnNldChpZCwgcmVuZGVyKTtcbiAgICB9XG5cbiAgICByZW5kZXIoaG9zdCwgdGFyZ2V0LCBhcmdzKTtcbiAgfTtcblxuICByZXR1cm4gT2JqZWN0LmFzc2lnbihmbiwgbWV0aG9kcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBodG1sKHBhcnRzLCAuLi5hcmdzKSB7XG4gIHJldHVybiBjcmVhdGUocGFydHMsIGFyZ3MpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3ZnKHBhcnRzLCAuLi5hcmdzKSB7XG4gIHJldHVybiBjcmVhdGUocGFydHMsIGFyZ3MsIHRydWUpO1xufVxuXG5PYmplY3QuYXNzaWduKGh0bWwsIGhlbHBlcnMpO1xuT2JqZWN0LmFzc2lnbihzdmcsIGhlbHBlcnMpO1xuIl19

  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0IiwiZGVmaW5lIiwicHJvcGVydHkiLCJwYXJlbnQiLCJjaGlsZHJlbiIsInJlbmRlciIsImRpc3BhdGNoIiwiaHRtbCIsInN2ZyJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsT0FBTyxJQUFJQyxNQUFwQixRQUFrQyxVQUFsQztBQUNBLFNBQVNELE9BQU8sSUFBSUUsUUFBcEIsUUFBb0MsWUFBcEM7QUFDQSxTQUFTRixPQUFPLElBQUlHLE1BQXBCLFFBQWtDLFVBQWxDO0FBQ0EsU0FBU0gsT0FBTyxJQUFJSSxRQUFwQixRQUFvQyxZQUFwQztBQUNBLFNBQVNKLE9BQU8sSUFBSUssTUFBcEIsUUFBa0MsVUFBbEM7QUFFQSxTQUFTQyxRQUFULFFBQXlCLFNBQXpCO0FBRUEsU0FBU0MsSUFBVCxFQUFlQyxHQUFmLFFBQTBCLFlBQTFCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgZGVmYXVsdCBhcyBkZWZpbmUgfSBmcm9tICcuL2RlZmluZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHByb3BlcnR5IH0gZnJvbSAnLi9wcm9wZXJ0eSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHBhcmVudCB9IGZyb20gJy4vcGFyZW50JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY2hpbGRyZW4gfSBmcm9tICcuL2NoaWxkcmVuJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcmVuZGVyIH0gZnJvbSAnLi9yZW5kZXInO1xuXG5leHBvcnQgeyBkaXNwYXRjaCB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgeyBodG1sLCBzdmcgfSBmcm9tICcuL3RlbXBsYXRlJztcbiJdfQ==

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function memoize(fn) {
    var cache = {};
    return function (arg) {
      if (cache[arg] === undefined) cache[arg] = fn(arg);
      return cache[arg];
    };
  }

  var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

  var index = memoize(function (prop) {
    return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
    /* o */
    && prop.charCodeAt(1) === 110
    /* n */
    && prop.charCodeAt(2) < 91;
  }
  /* Z+1 */
  );

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  /* eslint-disable no-unused-vars */
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
  	if (val === null || val === undefined) {
  		throw new TypeError('Object.assign cannot be called with null or undefined');
  	}

  	return Object(val);
  }

  function shouldUseNative() {
  	try {
  		if (!Object.assign) {
  			return false;
  		}

  		// Detect buggy property enumeration order in older V8 versions.

  		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
  		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
  		test1[5] = 'de';
  		if (Object.getOwnPropertyNames(test1)[0] === '5') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test2 = {};
  		for (var i = 0; i < 10; i++) {
  			test2['_' + String.fromCharCode(i)] = i;
  		}
  		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
  			return test2[n];
  		});
  		if (order2.join('') !== '0123456789') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test3 = {};
  		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
  			test3[letter] = letter;
  		});
  		if (Object.keys(Object.assign({}, test3)).join('') !==
  				'abcdefghijklmnopqrst') {
  			return false;
  		}

  		return true;
  	} catch (err) {
  		// We don't expect any of the above to throw, but better to be safe.
  		return false;
  	}
  }

  var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  	var from;
  	var to = toObject(target);
  	var symbols;

  	for (var s = 1; s < arguments.length; s++) {
  		from = Object(arguments[s]);

  		for (var key in from) {
  			if (hasOwnProperty.call(from, key)) {
  				to[key] = from[key];
  			}
  		}

  		if (getOwnPropertySymbols) {
  			symbols = getOwnPropertySymbols(from);
  			for (var i = 0; i < symbols.length; i++) {
  				if (propIsEnumerable.call(from, symbols[i])) {
  					to[symbols[i]] = from[symbols[i]];
  				}
  			}
  		}
  	}

  	return to;
  };

  /*

  Based off glamor's StyleSheet, thanks Sunil ❤️

  high performance StyleSheet for css-in-js systems

  - uses multiple style tags behind the scenes for millions of rules
  - uses `insertRule` for appending in production for *much* faster performance

  // usage

  import { StyleSheet } from '@emotion/sheet'

  let styleSheet = new StyleSheet({ key: '', container: document.head })

  styleSheet.insert('#box { border: 1px solid red; }')
  - appends a css rule into the stylesheet

  styleSheet.flush()
  - empties the stylesheet of all its contents

  */
  // $FlowFixMe
  function sheetForTag(tag) {
    if (tag.sheet) {
      // $FlowFixMe
      return tag.sheet;
    } // this weirdness brought to you by firefox

    /* istanbul ignore next */


    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        // $FlowFixMe
        return document.styleSheets[i];
      }
    }
  }

  function createStyleElement(options) {
    var tag = document.createElement('style');
    tag.setAttribute('data-emotion', options.key);

    if (options.nonce !== undefined) {
      tag.setAttribute('nonce', options.nonce);
    }

    tag.appendChild(document.createTextNode(''));
    return tag;
  }

  var StyleSheet =
  /*#__PURE__*/
  function () {
    function StyleSheet(options) {
      this.isSpeedy = options.speedy === undefined ? "production" === 'production' : options.speedy;
      this.tags = [];
      this.ctr = 0;
      this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

      this.key = options.key;
      this.container = options.container;
      this.before = null;
    }

    var _proto = StyleSheet.prototype;

    _proto.insert = function insert(rule) {
      // the max length is how many rules we have per style tag, it's 65000 in speedy mode
      // it's 1 in dev because we insert source maps that map a single rule to a location
      // and you can only have one source map per style tag
      if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
        var _tag = createStyleElement(this);

        var before;

        if (this.tags.length === 0) {
          before = this.before;
        } else {
          before = this.tags[this.tags.length - 1].nextSibling;
        }

        this.container.insertBefore(_tag, before);
        this.tags.push(_tag);
      }

      var tag = this.tags[this.tags.length - 1];

      if (this.isSpeedy) {
        var sheet = sheetForTag(tag);

        try {
          // this is a really hot path
          // we check the second character first because having "i"
          // as the second character will happen less often than
          // having "@" as the first character
          var isImportRule = rule.charCodeAt(1) === 105 && rule.charCodeAt(0) === 64; // this is the ultrafast version, works across browsers
          // the big drawback is that the css won't be editable in devtools

          sheet.insertRule(rule, // we need to insert @import rules before anything else
          // otherwise there will be an error
          // technically this means that the @import rules will
          // _usually_(not always since there could be multiple style tags)
          // be the first ones in prod and generally later in dev
          // this shouldn't really matter in the real world though
          // @import is generally only used for font faces from google fonts and etc.
          // so while this could be technically correct then it would be slower and larger
          // for a tiny bit of correctness that won't matter in the real world
          isImportRule ? 0 : sheet.cssRules.length);
        } catch (e) {
        }
      } else {
        tag.appendChild(document.createTextNode(rule));
      }

      this.ctr++;
    };

    _proto.flush = function flush() {
      // $FlowFixMe
      this.tags.forEach(function (tag) {
        return tag.parentNode.removeChild(tag);
      });
      this.tags = [];
      this.ctr = 0;
    };

    return StyleSheet;
  }();

  function stylis_min (W) {
    function M(d, c, e, h, a) {
      for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
        g = e.charCodeAt(l);
        l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

        if (0 === b + n + v + m) {
          if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
            switch (g) {
              case 32:
              case 9:
              case 59:
              case 13:
              case 10:
                break;

              default:
                f += e.charAt(l);
            }

            g = 59;
          }

          switch (g) {
            case 123:
              f = f.trim();
              q = f.charCodeAt(0);
              k = 1;

              for (t = ++l; l < B;) {
                switch (g = e.charCodeAt(l)) {
                  case 123:
                    k++;
                    break;

                  case 125:
                    k--;
                    break;

                  case 47:
                    switch (g = e.charCodeAt(l + 1)) {
                      case 42:
                      case 47:
                        a: {
                          for (u = l + 1; u < J; ++u) {
                            switch (e.charCodeAt(u)) {
                              case 47:
                                if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                  l = u + 1;
                                  break a;
                                }

                                break;

                              case 10:
                                if (47 === g) {
                                  l = u + 1;
                                  break a;
                                }

                            }
                          }

                          l = u;
                        }

                    }

                    break;

                  case 91:
                    g++;

                  case 40:
                    g++;

                  case 34:
                  case 39:
                    for (; l++ < J && e.charCodeAt(l) !== g;) {
                    }

                }

                if (0 === k) break;
                l++;
              }

              k = e.substring(t, l);
              0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

              switch (q) {
                case 64:
                  0 < r && (f = f.replace(N, ''));
                  g = f.charCodeAt(1);

                  switch (g) {
                    case 100:
                    case 109:
                    case 115:
                    case 45:
                      r = c;
                      break;

                    default:
                      r = O;
                  }

                  k = M(c, r, k, g, a + 1);
                  t = k.length;
                  0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                  if (0 < t) switch (g) {
                    case 115:
                      f = f.replace(da, ea);

                    case 100:
                    case 109:
                    case 45:
                      k = f + '{' + k + '}';
                      break;

                    case 107:
                      f = f.replace(fa, '$1 $2');
                      k = f + '{' + k + '}';
                      k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                      break;

                    default:
                      k = f + k, 112 === h && (k = (p += k, ''));
                  } else k = '';
                  break;

                default:
                  k = M(c, X(c, f, I), k, h, a + 1);
              }

              F += k;
              k = I = r = u = q = 0;
              f = '';
              g = e.charCodeAt(++l);
              break;

            case 125:
            case 59:
              f = (0 < r ? f.replace(N, '') : f).trim();
              if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
                case 0:
                  break;

                case 64:
                  if (105 === g || 99 === g) {
                    G += f + e.charAt(l);
                    break;
                  }

                default:
                  58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
              }
              I = r = u = q = 0;
              f = '';
              g = e.charCodeAt(++l);
          }
        }

        switch (g) {
          case 13:
          case 10:
            47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
            0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
            z = 1;
            D++;
            break;

          case 59:
          case 125:
            if (0 === b + n + v + m) {
              z++;
              break;
            }

          default:
            z++;
            y = e.charAt(l);

            switch (g) {
              case 9:
              case 32:
                if (0 === n + m + b) switch (x) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    y = '';
                    break;

                  default:
                    32 !== g && (y = ' ');
                }
                break;

              case 0:
                y = '\\0';
                break;

              case 12:
                y = '\\f';
                break;

              case 11:
                y = '\\v';
                break;

              case 38:
                0 === n + b + m && (r = I = 1, y = '\f' + y);
                break;

              case 108:
                if (0 === n + b + m + E && 0 < u) switch (l - u) {
                  case 2:
                    112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                  case 8:
                    111 === K && (E = K);
                }
                break;

              case 58:
                0 === n + b + m && (u = l);
                break;

              case 44:
                0 === b + v + n + m && (r = 1, y += '\r');
                break;

              case 34:
              case 39:
                0 === b && (n = n === g ? 0 : 0 === n ? g : n);
                break;

              case 91:
                0 === n + b + v && m++;
                break;

              case 93:
                0 === n + b + v && m--;
                break;

              case 41:
                0 === n + b + m && v--;
                break;

              case 40:
                if (0 === n + b + m) {
                  if (0 === q) switch (2 * x + 3 * K) {
                    case 533:
                      break;

                    default:
                      q = 1;
                  }
                  v++;
                }

                break;

              case 64:
                0 === b + v + n + m + u + k && (k = 1);
                break;

              case 42:
              case 47:
                if (!(0 < n + m + v)) switch (b) {
                  case 0:
                    switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                      case 235:
                        b = 47;
                        break;

                      case 220:
                        t = l, b = 42;
                    }

                    break;

                  case 42:
                    47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
                }
            }

            0 === b && (f += y);
        }

        K = x;
        x = g;
        l++;
      }

      t = p.length;

      if (0 < t) {
        r = c;
        if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
        p = r.join(',') + '{' + p + '}';

        if (0 !== w * E) {
          2 !== w || L(p, 2) || (E = 0);

          switch (E) {
            case 111:
              p = p.replace(ha, ':-moz-$1') + p;
              break;

            case 112:
              p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
          }

          E = 0;
        }
      }

      return G + p + F;
    }

    function X(d, c, e) {
      var h = c.trim().split(ia);
      c = h;
      var a = h.length,
          m = d.length;

      switch (m) {
        case 0:
        case 1:
          var b = 0;

          for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
            c[b] = Z(d, c[b], e, m).trim();
          }

          break;

        default:
          var v = b = 0;

          for (c = []; b < a; ++b) {
            for (var n = 0; n < m; ++n) {
              c[v++] = Z(d[n] + ' ', h[b], e, m).trim();
            }
          }

      }

      return c;
    }

    function Z(d, c, e) {
      var h = c.charCodeAt(0);
      33 > h && (h = (c = c.trim()).charCodeAt(0));

      switch (h) {
        case 38:
          return c.replace(F, '$1' + d.trim());

        case 58:
          return d.trim() + c.replace(F, '$1' + d.trim());

        default:
          if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
      }

      return d + c;
    }

    function P(d, c, e, h) {
      var a = d + ';',
          m = 2 * c + 3 * e + 4 * h;

      if (944 === m) {
        d = a.indexOf(':', 9) + 1;
        var b = a.substring(d, a.length - 1).trim();
        b = a.substring(0, d).trim() + b + ';';
        return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
      }

      if (0 === w || 2 === w && !L(a, 1)) return a;

      switch (m) {
        case 1015:
          return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

        case 951:
          return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

        case 963:
          return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

        case 1009:
          if (100 !== a.charCodeAt(4)) break;

        case 969:
        case 942:
          return '-webkit-' + a + a;

        case 978:
          return '-webkit-' + a + '-moz-' + a + a;

        case 1019:
        case 983:
          return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

        case 883:
          if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
          if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
          break;

        case 932:
          if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
            case 103:
              return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

            case 115:
              return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

            case 98:
              return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
          }
          return '-webkit-' + a + '-ms-' + a + a;

        case 964:
          return '-webkit-' + a + '-ms-flex-' + a + a;

        case 1023:
          if (99 !== a.charCodeAt(8)) break;
          b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
          return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

        case 1005:
          return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

        case 1e3:
          b = a.substring(13).trim();
          c = b.indexOf('-') + 1;

          switch (b.charCodeAt(0) + b.charCodeAt(c)) {
            case 226:
              b = a.replace(G, 'tb');
              break;

            case 232:
              b = a.replace(G, 'tb-rl');
              break;

            case 220:
              b = a.replace(G, 'lr');
              break;

            default:
              return a;
          }

          return '-webkit-' + a + '-ms-' + b + a;

        case 1017:
          if (-1 === a.indexOf('sticky', 9)) break;

        case 975:
          c = (a = d).length - 10;
          b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

          switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
            case 203:
              if (111 > b.charCodeAt(8)) break;

            case 115:
              a = a.replace(b, '-webkit-' + b) + ';' + a;
              break;

            case 207:
            case 102:
              a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
          }

          return a + ';';

        case 938:
          if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
            case 105:
              return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

            case 115:
              return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

            default:
              return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
          }
          break;

        case 973:
        case 989:
          if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

        case 931:
        case 953:
          if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
          break;

        case 962:
          if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
      }

      return a;
    }

    function L(d, c) {
      var e = d.indexOf(1 === c ? ':' : '{'),
          h = d.substring(0, 3 !== c ? e : 10);
      e = d.substring(e + 1, d.length - 1);
      return R(2 !== c ? h : h.replace(na, '$1'), e, c);
    }

    function ea(d, c) {
      var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
      return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
    }

    function H(d, c, e, h, a, m, b, v, n, q) {
      for (var g = 0, x = c, w; g < A; ++g) {
        switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
          case void 0:
          case !1:
          case !0:
          case null:
            break;

          default:
            x = w;
        }
      }

      if (x !== c) return x;
    }

    function T(d) {
      switch (d) {
        case void 0:
        case null:
          A = S.length = 0;
          break;

        default:
          if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
            T(d[c]);
          } else Y = !!d | 0;
      }

      return T;
    }

    function U(d) {
      d = d.prefix;
      void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
      return U;
    }

    function B(d, c) {
      var e = d;
      33 > e.charCodeAt(0) && (e = e.trim());
      V = e;
      e = [V];

      if (0 < A) {
        var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
        void 0 !== h && 'string' === typeof h && (c = h);
      }

      var a = M(O, e, c, 0, 0);
      0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
      V = '';
      E = 0;
      z = D = 1;
      return a;
    }

    var ca = /^\0+/g,
        N = /[\0\r\f]/g,
        aa = /: */g,
        ka = /zoo|gra/,
        ma = /([,: ])(transform)/g,
        ia = /,\r+?/g,
        F = /([\t\r\n ])*\f?&/g,
        fa = /@(k\w+)\s*(\S*)\s*/,
        Q = /::(place)/g,
        ha = /:(read-only)/g,
        G = /[svh]\w+-[tblr]{2}/,
        da = /\(\s*(.*)\s*\)/g,
        oa = /([\s\S]*?);/g,
        ba = /-self|flex-/g,
        na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
        la = /stretch|:\s*\w+\-(?:conte|avail)/,
        ja = /([^-])(image-set\()/,
        z = 1,
        D = 1,
        E = 0,
        w = 1,
        O = [],
        S = [],
        A = 0,
        R = null,
        Y = 0,
        V = '';
    B.use = T;
    B.set = U;
    void 0 !== W && U(W);
    return B;
  }

  var weakMemoize = function weakMemoize(func) {
    // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
    var cache = new WeakMap();
    return function (arg) {
      if (cache.has(arg)) {
        // $FlowFixMe
        return cache.get(arg);
      }

      var ret = func(arg);
      cache.set(arg, ret);
      return ret;
    };
  };

  // https://github.com/thysultan/stylis.js/tree/master/plugins/rule-sheet
  // inlined to avoid umd wrapper and peerDep warnings/installing stylis
  // since we use stylis after closure compiler
  var delimiter = '/*|*/';
  var needle = delimiter + '}';

  function toSheet(block) {
    if (block) {
      Sheet.current.insert(block + '}');
    }
  }

  var Sheet = {
    current: null
  };
  var ruleSheet = function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
    switch (context) {
      // property
      case 1:
        {
          switch (content.charCodeAt(0)) {
            case 64:
              {
                // @import
                Sheet.current.insert(content + ';');
                return '';
              }
            // charcode for l

            case 108:
              {
                // charcode for b
                // this ignores label
                if (content.charCodeAt(2) === 98) {
                  return '';
                }
              }
          }

          break;
        }
      // selector

      case 2:
        {
          if (ns === 0) return content + delimiter;
          break;
        }
      // at-rule

      case 3:
        {
          switch (ns) {
            // @font-face, @page
            case 102:
            case 112:
              {
                Sheet.current.insert(selectors[0] + content);
                return '';
              }

            default:
              {
                return content + (at === 0 ? delimiter : '');
              }
          }
        }

      case -2:
        {
          content.split(needle).forEach(toSheet);
        }
    }
  };
  var removeLabel = function removeLabel(context, content) {
    if (context === 1 && // charcode for l
    content.charCodeAt(0) === 108 && // charcode for b
    content.charCodeAt(2) === 98 // this ignores label
    ) {
        return '';
      }
  };

  var isBrowser = typeof document !== 'undefined';
  var rootServerStylisCache = {};
  var getServerStylisCache = isBrowser ? undefined : weakMemoize(function () {
    var getCache = weakMemoize(function () {
      return {};
    });
    var prefixTrueCache = {};
    var prefixFalseCache = {};
    return function (prefix) {
      if (prefix === undefined || prefix === true) {
        return prefixTrueCache;
      }

      if (prefix === false) {
        return prefixFalseCache;
      }

      return getCache(prefix);
    };
  });

  var createCache = function createCache(options) {
    if (options === undefined) options = {};
    var key = options.key || 'css';
    var stylisOptions;

    if (options.prefix !== undefined) {
      stylisOptions = {
        prefix: options.prefix
      };
    }

    var stylis = new stylis_min(stylisOptions);

    var inserted = {}; // $FlowFixMe

    var container;

    if (isBrowser) {
      container = options.container || document.head;
      var nodes = document.querySelectorAll("style[data-emotion-" + key + "]");
      Array.prototype.forEach.call(nodes, function (node) {
        var attrib = node.getAttribute("data-emotion-" + key); // $FlowFixMe

        attrib.split(' ').forEach(function (id) {
          inserted[id] = true;
        });

        if (node.parentNode !== container) {
          container.appendChild(node);
        }
      });
    }

    var _insert;

    if (isBrowser) {
      stylis.use(options.stylisPlugins)(ruleSheet);

      _insert = function insert(selector, serialized, sheet, shouldCache) {
        var name = serialized.name;
        Sheet.current = sheet;

        stylis(selector, serialized.styles);

        if (shouldCache) {
          cache.inserted[name] = true;
        }
      };
    } else {
      stylis.use(removeLabel);
      var serverStylisCache = rootServerStylisCache;

      if (options.stylisPlugins || options.prefix !== undefined) {
        stylis.use(options.stylisPlugins); // $FlowFixMe

        serverStylisCache = getServerStylisCache(options.stylisPlugins || rootServerStylisCache)(options.prefix);
      }

      var getRules = function getRules(selector, serialized) {
        var name = serialized.name;

        if (serverStylisCache[name] === undefined) {
          serverStylisCache[name] = stylis(selector, serialized.styles);
        }

        return serverStylisCache[name];
      };

      _insert = function _insert(selector, serialized, sheet, shouldCache) {
        var name = serialized.name;
        var rules = getRules(selector, serialized);

        if (cache.compat === undefined) {
          // in regular mode, we don't set the styles on the inserted cache
          // since we don't need to and that would be wasting memory
          // we return them so that they are rendered in a style tag
          if (shouldCache) {
            cache.inserted[name] = true;
          }

          return rules;
        } else {
          // in compat mode, we put the styles on the inserted cache so
          // that emotion-server can pull out the styles
          // except when we don't want to cache it(just the Global component right now)
          if (shouldCache) {
            cache.inserted[name] = rules;
          } else {
            return rules;
          }
        }
      };
    }

    var cache = {
      key: key,
      sheet: new StyleSheet({
        key: key,
        container: container,
        nonce: options.nonce,
        speedy: options.speedy
      }),
      nonce: options.nonce,
      inserted: inserted,
      registered: {},
      insert: _insert
    };
    return cache;
  };

  var isBrowser$1 = typeof document !== 'undefined';
  function getRegisteredStyles(registered, registeredStyles, classNames) {
    var rawClassName = '';
    classNames.split(' ').forEach(function (className) {
      if (registered[className] !== undefined) {
        registeredStyles.push(registered[className]);
      } else {
        rawClassName += className + " ";
      }
    });
    return rawClassName;
  }
  var insertStyles = function insertStyles(cache, serialized, isStringTag) {
    var className = cache.key + "-" + serialized.name;

    if ( // we only need to add the styles to the registered cache if the
    // class name could be used further down
    // the tree but if it's a string tag, we know it won't
    // so we don't have to add it to registered cache.
    // this improves memory usage since we can avoid storing the whole style string
    (isStringTag === false || // we need to always store it if we're in compat mode and
    // in node since emotion-server relies on whether a style is in
    // the registered cache to know whether a style is global or not
    // also, note that this check will be dead code eliminated in the browser
    isBrowser$1 === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
      cache.registered[className] = serialized.styles;
    }

    if (cache.inserted[serialized.name] === undefined) {
      var stylesForSSR = '';
      var current = serialized;

      do {
        var maybeStyles = cache.insert("." + className, current, cache.sheet, true);

        if (!isBrowser$1 && maybeStyles !== undefined) {
          stylesForSSR += maybeStyles;
        }

        current = current.next;
      } while (current !== undefined);

      if (!isBrowser$1 && stylesForSSR.length !== 0) {
        return stylesForSSR;
      }
    }
  };

  /* eslint-disable */
  // murmurhash2 via https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
  function murmurhash2_32_gc(str) {
    var l = str.length,
        h = l ^ l,
        i = 0,
        k;

    while (l >= 4) {
      k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
      k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
      k ^= k >>> 24;
      k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;
      l -= 4;
      ++i;
    }

    switch (l) {
      case 3:
        h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

      case 2:
        h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

      case 1:
        h ^= str.charCodeAt(i) & 0xff;
        h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    }

    h ^= h >>> 13;
    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    h ^= h >>> 15;
    return (h >>> 0).toString(36);
  }

  var unitlessKeys = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    // SVG-related properties
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
  };

  var hyphenateRegex = /[A-Z]|^ms/g;
  var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
  var processStyleName = memoize(function (styleName) {
    return styleName.replace(hyphenateRegex, '-$&').toLowerCase();
  });

  var processStyleValue = function processStyleValue(key, value) {
    if (value == null || typeof value === 'boolean') {
      return '';
    }

    switch (key) {
      case 'animation':
      case 'animationName':
        {
          if (typeof value === 'string') {
            value = value.replace(animationRegex, function (match, p1, p2) {
              cursor = {
                name: p1,
                styles: p2,
                next: cursor
              };
              return p1;
            });
          }
        }
    }

    if (unitlessKeys[key] !== 1 && key.charCodeAt(1) !== 45 && // custom properties
    typeof value === 'number' && value !== 0) {
      return value + 'px';
    }

    return value;
  };

  function handleInterpolation(mergedProps, registered, interpolation, couldBeSelectorInterpolation) {
    if (interpolation == null) {
      return '';
    }

    if (interpolation.__emotion_styles !== undefined) {

      return interpolation;
    }

    switch (typeof interpolation) {
      case 'boolean':
        {
          return '';
        }

      case 'object':
        {
          if (interpolation.anim === 1) {
            cursor = {
              name: interpolation.name,
              styles: interpolation.styles,
              next: cursor
            };
            return interpolation.name;
          }

          if (interpolation.styles !== undefined) {
            var next = interpolation.next;

            if (next !== undefined) {
              // not the most efficient thing ever but this is a pretty rare case
              // and there will be very few iterations of this generally
              while (next !== undefined) {
                cursor = {
                  name: next.name,
                  styles: next.styles,
                  next: cursor
                };
                next = next.next;
              }
            }

            var styles = interpolation.styles;

            return styles;
          }

          return createStringFromObject(mergedProps, registered, interpolation);
        }

      case 'function':
        {
          if (mergedProps !== undefined) {
            var previousCursor = cursor;
            var result = interpolation(mergedProps);
            cursor = previousCursor;
            return handleInterpolation(mergedProps, registered, result, couldBeSelectorInterpolation);
          }
        }
      // eslint-disable-next-line no-fallthrough

      default:
        {
          if (registered == null) {
            return interpolation;
          }

          var cached = registered[interpolation];

          return cached !== undefined && !couldBeSelectorInterpolation ? cached : interpolation;
        }
    }
  }

  function createStringFromObject(mergedProps, registered, obj) {
    var string = '';

    if (Array.isArray(obj)) {
      for (var i = 0; i < obj.length; i++) {
        string += handleInterpolation(mergedProps, registered, obj[i], false);
      }
    } else {
      for (var _key in obj) {
        var value = obj[_key];

        if (typeof value !== 'object') {
          if (registered != null && registered[value] !== undefined) {
            string += _key + "{" + registered[value] + "}";
          } else {
            string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
          }
        } else {
          if (_key === 'NO_COMPONENT_SELECTOR' && "production" !== 'production') {
            throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
          }

          if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
            for (var _i = 0; _i < value.length; _i++) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          } else {
            string += _key + "{" + handleInterpolation(mergedProps, registered, value, false) + "}";
          }
        }
      }
    }

    return string;
  }

  var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
  // keyframes are stored on the SerializedStyles object as a linked list


  var cursor;
  var serializeStyles = function serializeStyles(args, registered, mergedProps) {
    if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
      return args[0];
    }

    var stringMode = true;
    var styles = '';
    cursor = undefined;
    var strings = args[0];

    if (strings == null || strings.raw === undefined) {
      stringMode = false;
      styles += handleInterpolation(mergedProps, registered, strings, false);
    } else {
      styles += strings[0];
    } // we start at 1 since we've already handled the first arg


    for (var i = 1; i < args.length; i++) {
      styles += handleInterpolation(mergedProps, registered, args[i], styles.charCodeAt(styles.length - 1) === 46);

      if (stringMode) {
        styles += strings[i];
      }
    }


    labelPattern.lastIndex = 0;
    var identifierName = '';
    var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

    while ((match = labelPattern.exec(styles)) !== null) {
      identifierName += '-' + // $FlowFixMe we know it's not null
      match[1];
    }

    var name = murmurhash2_32_gc(styles) + identifierName;

    return {
      name: name,
      styles: styles,
      next: cursor
    };
  };

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  var isBrowser$2 = typeof document !== 'undefined';

  var EmotionCacheContext = React.createContext(isBrowser$2 ? createCache() : null);
  var ThemeContext = React.createContext({});
  var CacheProvider = EmotionCacheContext.Provider;

  var withEmotionCache = function withEmotionCache(func) {
    var render = function render(props, ref) {
      return React.createElement(EmotionCacheContext.Consumer, null, function ( // $FlowFixMe we know it won't be null
      cache) {
        return func(props, cache, ref);
      });
    }; // $FlowFixMe


    return React.forwardRef(render);
  };

  if (!isBrowser$2) {
    var BasicProvider =
    /*#__PURE__*/
    function (_React$Component) {
      _inheritsLoose(BasicProvider, _React$Component);

      function BasicProvider(props, context, updater) {
        var _this;

        _this = _React$Component.call(this, props, context, updater) || this;
        _this.state = {
          value: createCache()
        };
        return _this;
      }

      var _proto = BasicProvider.prototype;

      _proto.render = function render() {
        return React.createElement(EmotionCacheContext.Provider, this.state, this.props.children(this.state.value));
      };

      return BasicProvider;
    }(React.Component);

    withEmotionCache = function withEmotionCache(func) {
      return function (props) {
        return React.createElement(EmotionCacheContext.Consumer, null, function (context) {
          if (context === null) {
            return React.createElement(BasicProvider, null, function (newContext) {
              return func(props, newContext);
            });
          } else {
            return func(props, context);
          }
        });
      };
    };
  }

  var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
  var hasOwnProperty$1 = Object.prototype.hasOwnProperty;

  var render$1 = function render(cache, props, theme, ref) {
    var type = props[typePropName];
    var registeredStyles = [];
    var className = '';
    var cssProp = theme === null ? props.css : props.css(theme); // so that using `css` from `emotion` and passing the result to the css prop works
    // not passing the registered cache to serializeStyles because it would
    // make certain babel optimisations not possible

    if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
      cssProp = cache.registered[cssProp];
    }

    registeredStyles.push(cssProp);

    if (props.className !== undefined) {
      className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
    }

    var serialized = serializeStyles(registeredStyles);

    var rules = insertStyles(cache, serialized, typeof type === 'string');
    className += cache.key + "-" + serialized.name;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty$1.call(props, key) && key !== 'css' && key !== typePropName && ("production" === 'production')) {
        newProps[key] = props[key];
      }
    }

    newProps.ref = ref;
    newProps.className = className;
    var ele = React.createElement(type, newProps);

    if (!isBrowser$2 && rules !== undefined) {
      var _ref;

      var serializedNames = serialized.name;
      var next = serialized.next;

      while (next !== undefined) {
        serializedNames += ' ' + next.name;
        next = next.next;
      }

      return React.createElement(React.Fragment, null, React.createElement("style", (_ref = {}, _ref["data-emotion-" + cache.key] = serializedNames, _ref.dangerouslySetInnerHTML = {
        __html: rules
      }, _ref.nonce = cache.sheet.nonce, _ref)), ele);
    }

    return ele;
  };

  var Emotion = withEmotionCache(function (props, cache, ref) {
    // use Context.read for the theme when it's stable
    if (typeof props.css === 'function') {
      return React.createElement(ThemeContext.Consumer, null, function (theme) {
        return render$1(cache, props, theme, ref);
      });
    }

    return render$1(cache, props, null, ref);
  });

  var classnames = function classnames(args) {
    var len = args.length;
    var i = 0;
    var cls = '';

    for (; i < len; i++) {
      var arg = args[i];
      if (arg == null) continue;
      var toAdd = void 0;

      switch (typeof arg) {
        case 'boolean':
          break;

        case 'object':
          {
            if (Array.isArray(arg)) {
              toAdd = classnames(arg);
            } else {
              toAdd = '';

              for (var k in arg) {
                if (arg[k] && k) {
                  toAdd && (toAdd += ' ');
                  toAdd += k;
                }
              }
            }

            break;
          }

        default:
          {
            toAdd = arg;
          }
      }

      if (toAdd) {
        cls && (cls += ' ');
        cls += toAdd;
      }
    }

    return cls;
  };

  function merge(registered, css$$1, className) {
    var registeredStyles = [];
    var rawClassName = getRegisteredStyles(registered, registeredStyles, className);

    if (registeredStyles.length < 2) {
      return className;
    }

    return rawClassName + css$$1(registeredStyles);
  }

  var ClassNames = withEmotionCache(function (props, context) {
    return React.createElement(ThemeContext.Consumer, null, function (theme) {
      var rules = '';
      var serializedHashes = '';
      var hasRendered = false;

      var css$$1 = function css$$1() {
        if (hasRendered && "production" !== 'production') {
          throw new Error('css can only be used during render');
        }

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var serialized = serializeStyles(args, context.registered);

        if (isBrowser$2) {
          insertStyles(context, serialized, false);
        } else {
          var res = insertStyles(context, serialized, false);

          if (res !== undefined) {
            rules += res;
          }
        }

        if (!isBrowser$2) {
          serializedHashes += " " + serialized.name;
        }

        return context.key + "-" + serialized.name;
      };

      var cx = function cx() {
        if (hasRendered && "production" !== 'production') {
          throw new Error('cx can only be used during render');
        }

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return merge(context.registered, css$$1, classnames(args));
      };

      var content = {
        css: css$$1,
        cx: cx,
        theme: theme
      };
      var ele = props.children(content);
      hasRendered = true;

      if (!isBrowser$2 && rules.length !== 0) {
        var _ref;

        return React.createElement(React.Fragment, null, React.createElement("style", (_ref = {}, _ref["data-emotion-" + context.key] = serializedHashes.substring(1), _ref.dangerouslySetInnerHTML = {
          __html: rules
        }, _ref.nonce = context.sheet.nonce, _ref)), ele);
      }

      return ele;
    });
  });

  var testOmitPropsOnStringTag = index;

  var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
    return key !== 'theme' && key !== 'innerRef';
  };

  var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
    return typeof tag === 'string' && // 96 is one less than the char code
    // for "a" so this is checking that
    // it's a lowercase character
    tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
  };

  var isBrowser$3 = typeof document !== 'undefined';

  var createStyled = function createStyled(tag, options) {

    var identifierName;
    var shouldForwardProp;
    var targetClassName;

    if (options !== undefined) {
      identifierName = options.label;
      targetClassName = options.target;
      shouldForwardProp = tag.__emotion_forwardProp && options.shouldForwardProp ? function (propName) {
        return tag.__emotion_forwardProp(propName) && // $FlowFixMe
        options.shouldForwardProp(propName);
      } : options.shouldForwardProp;
    }

    var isReal = tag.__emotion_real === tag;
    var baseTag = isReal && tag.__emotion_base || tag;

    if (typeof shouldForwardProp !== 'function' && isReal) {
      shouldForwardProp = tag.__emotion_forwardProp;
    }

    var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
    var shouldUseAs = !defaultShouldForwardProp('as');
    return function () {
      var args = arguments;
      var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];

      if (identifierName !== undefined) {
        styles.push("label:" + identifierName + ";");
      }

      if (args[0] == null || args[0].raw === undefined) {
        styles.push.apply(styles, args);
      } else {
        styles.push(args[0][0]);
        var len = args.length;
        var i = 1;

        for (; i < len; i++) {
          styles.push(args[i], args[0][i]);
        }
      }

      var Styled = withEmotionCache(function (props, context, ref) {
        return React.createElement(ThemeContext.Consumer, null, function (theme) {
          var finalTag = shouldUseAs && props.as || baseTag;
          var className = '';
          var classInterpolations = [];
          var mergedProps = props;

          if (props.theme == null) {
            mergedProps = {};

            for (var key in props) {
              mergedProps[key] = props[key];
            }

            mergedProps.theme = theme;
          }

          if (typeof props.className === 'string') {
            className += getRegisteredStyles(context.registered, classInterpolations, props.className);
          }

          var serialized = serializeStyles(styles.concat(classInterpolations), context.registered, mergedProps);
          var rules = insertStyles(context, serialized, typeof finalTag === 'string');
          className += context.key + "-" + serialized.name;

          if (targetClassName !== undefined) {
            className += " " + targetClassName;
          }

          var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(finalTag) : defaultShouldForwardProp;
          var newProps = {};

          for (var _key in props) {
            if (shouldUseAs && _key === 'as') continue;

            if ( // $FlowFixMe
            finalShouldForwardProp(_key)) {
              newProps[_key] = props[_key];
            }
          }

          newProps.className = className;
          newProps.ref = ref || props.innerRef;

          var ele = React.createElement(finalTag, newProps);

          if (!isBrowser$3 && rules !== undefined) {
            var _ref;

            var serializedNames = serialized.name;
            var next = serialized.next;

            while (next !== undefined) {
              serializedNames += ' ' + next.name;
              next = next.next;
            }

            return React.createElement(React.Fragment, null, React.createElement("style", (_ref = {}, _ref["data-emotion-" + context.key] = serializedNames, _ref.dangerouslySetInnerHTML = {
              __html: rules
            }, _ref.nonce = context.sheet.nonce, _ref)), ele);
          }

          return ele;
        });
      });
      Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
      Styled.defaultProps = tag.defaultProps;
      Styled.__emotion_real = Styled;
      Styled.__emotion_base = baseTag;
      Styled.__emotion_styles = styles;
      Styled.__emotion_forwardProp = shouldForwardProp;
      Object.defineProperty(Styled, 'toString', {
        value: function value() {
          if (targetClassName === undefined && "production" !== 'production') {
            return 'NO_COMPONENT_SELECTOR';
          } // $FlowFixMe


          return "." + targetClassName;
        }
      });

      Styled.withComponent = function (nextTag, nextOptions) {
        return createStyled(nextTag, nextOptions !== undefined ? objectAssign({}, options || {}, nextOptions) : options).apply(void 0, styles);
      };

      return Styled;
    };
  };

  var global$1 = (typeof global !== "undefined" ? global :
              typeof self !== "undefined" ? self :
              typeof window !== "undefined" ? window : {});

  /*

  Tailwind - The Utility-First CSS Framework

  A project by Adam Wathan (@adamwathan), Jonathan Reinink (@reinink),
  David Hemphill (@davidhemphill) and Steve Schoger (@steveschoger).

  Welcome to the Tailwind config file. This is where you can customize
  Tailwind specifically for your project. Don't be intimidated by the
  length of this file. It's really just a big JavaScript object and
  we've done our very best to explain each section.

  View the full documentation at https://tailwindcss.com.


  |-------------------------------------------------------------------------------
  | The default config
  |-------------------------------------------------------------------------------
  |
  | This variable contains the default Tailwind config. You don't have
  | to use it, but it can sometimes be helpful to have available. For
  | example, you may choose to merge your custom configuration
  | values with some of the Tailwind defaults.
  |
  */
  // let defaultConfig = require('tailwindcss/defaultConfig')()

  /*
  |-------------------------------------------------------------------------------
  | Colors                                    https://tailwindcss.com/docs/colors
  |-------------------------------------------------------------------------------
  |
  | Here you can specify the colors used in your project. To get you started,
  | we've provided a generous palette of great looking colors that are perfect
  | for prototyping, but don't hesitate to change them for your project. You
  | own these colors, nothing will break if you change everything about them.
  |
  | We've used literal color names ("red", "blue", etc.) for the default
  | palette, but if you'd rather use functional names like "primary" and
  | "secondary", or even a numeric scale like "100" and "200", go for it.
  |
  */
  var colors = {
    'transparent': 'transparent',
    'black': '#22292f',
    'grey-darkest': '#3d4852',
    'grey-darker': '#606f7b',
    'grey-dark': '#8795a1',
    'grey': '#b8c2cc',
    'grey-light': '#dae1e7',
    'grey-lighter': '#f1f5f8',
    'grey-lightest': '#f8fafc',
    'white': '#ffffff',
    'red-darkest': '#3b0d0c',
    'red-darker': '#621b18',
    'red-dark': '#cc1f1a',
    'red': '#e3342f',
    'red-light': '#ef5753',
    'red-lighter': '#f9acaa',
    'red-lightest': '#fcebea',
    'orange-darkest': '#462a16',
    'orange-darker': '#613b1f',
    'orange-dark': '#de751f',
    'orange': '#f6993f',
    'orange-light': '#faad63',
    'orange-lighter': '#fcd9b6',
    'orange-lightest': '#fff5eb',
    'yellow-darkest': '#453411',
    'yellow-darker': '#684f1d',
    'yellow-dark': '#f2d024',
    'yellow': '#ffed4a',
    'yellow-light': '#fff382',
    'yellow-lighter': '#fff9c2',
    'yellow-lightest': '#fcfbeb',
    'green-darkest': '#0f2f21',
    'green-darker': '#1a4731',
    'green-dark': '#1f9d55',
    'green': '#38c172',
    'green-light': '#51d88a',
    'green-lighter': '#a2f5bf',
    'green-lightest': '#e3fcec',
    'teal-darkest': '#0d3331',
    'teal-darker': '#20504f',
    'teal-dark': '#38a89d',
    'teal': '#4dc0b5',
    'teal-light': '#64d5ca',
    'teal-lighter': '#a0f0ed',
    'teal-lightest': '#e8fffe',
    'blue-darkest': '#12283a',
    'blue-darker': '#1c3d5a',
    'blue-dark': '#2779bd',
    'blue': '#3490dc',
    'blue-light': '#6cb2eb',
    'blue-lighter': '#bcdefa',
    'blue-lightest': '#eff8ff',
    'indigo-darkest': '#191e38',
    'indigo-darker': '#2f365f',
    'indigo-dark': '#5661b3',
    'indigo': '#6574cd',
    'indigo-light': '#7886d7',
    'indigo-lighter': '#b2b7ff',
    'indigo-lightest': '#e6e8ff',
    'purple-darkest': '#21183c',
    'purple-darker': '#382b5f',
    'purple-dark': '#794acf',
    'purple': '#9561e2',
    'purple-light': '#a779e9',
    'purple-lighter': '#d6bbfc',
    'purple-lightest': '#f3ebff',
    'pink-darkest': '#451225',
    'pink-darker': '#6f213f',
    'pink-dark': '#eb5286',
    'pink': '#f66d9b',
    'pink-light': '#fa7ea8',
    'pink-lighter': '#ffbbca',
    'pink-lightest': '#ffebef'
  };
  var _tailwind = {
    /*
    |-----------------------------------------------------------------------------
    | Colors                                  https://tailwindcss.com/docs/colors
    |-----------------------------------------------------------------------------
    |
    | The color palette defined above is also assigned to the "colors" key of
    | your Tailwind config. This makes it easy to access them in your CSS
    | using Tailwind's config helper. For example:
    |
    | .error { color: config('colors.red') }
    |
    */
    colors: colors,

    /*
    |-----------------------------------------------------------------------------
    | Screens                      https://tailwindcss.com/docs/responsive-design
    |-----------------------------------------------------------------------------
    |
    | Screens in Tailwind are translated to CSS media queries. They define the
    | responsive breakpoints for your project. By default Tailwind takes a
    | "mobile first" approach, where each screen size represents a minimum
    | viewport width. Feel free to have as few or as many screens as you
    | want, naming them in whatever way you'd prefer for your project.
    |
    | Tailwind also allows for more complex screen definitions, which can be
    | useful in certain situations. Be sure to see the full responsive
    | documentation for a complete list of options.
    |
    | Class name: .{screen}:{utility}
    |
    */
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px'
    },

    /*
    |-----------------------------------------------------------------------------
    | Fonts                                    https://tailwindcss.com/docs/fonts
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your project's font stack, or font families.
    | Keep in mind that Tailwind doesn't actually load any fonts for you.
    | If you're using custom fonts you'll need to import them prior to
    | defining them here.
    |
    | By default we provide a native font stack that works remarkably well on
    | any device or OS you're using, since it just uses the default fonts
    | provided by the platform.
    |
    | Class name: .font-{name}
    | CSS property: font-family
    |
    */
    fonts: {
      'sans': ['system-ui', 'BlinkMacSystemFont', '-apple-system', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
      'serif': ['Constantia', 'Lucida Bright', 'Lucidabright', 'Lucida Serif', 'Lucida', 'DejaVu Serif', 'Bitstream Vera Serif', 'Liberation Serif', 'Georgia', 'serif'],
      'mono': ['Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace']
    },

    /*
    |-----------------------------------------------------------------------------
    | Text sizes                         https://tailwindcss.com/docs/text-sizing
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your text sizes. Name these in whatever way
    | makes the most sense to you. We use size names by default, but
    | you're welcome to use a numeric scale or even something else
    | entirely.
    |
    | By default Tailwind uses the "rem" unit type for most measurements.
    | This allows you to set a root font size which all other sizes are
    | then based on. That said, you are free to use whatever units you
    | prefer, be it rems, ems, pixels or other.
    |
    | Class name: .text-{size}
    | CSS property: font-size
    |
    */
    textSizes: {
      'xs': '.75rem',
      // 12px
      'sm': '.875rem',
      // 14px
      'base': '1rem',
      // 16px
      'lg': '1.125rem',
      // 18px
      'xl': '1.25rem',
      // 20px
      '2xl': '1.5rem',
      // 24px
      '3xl': '1.875rem',
      // 30px
      '4xl': '2.25rem',
      // 36px
      '5xl': '3rem' // 48px

    },

    /*
    |-----------------------------------------------------------------------------
    | Font weights                       https://tailwindcss.com/docs/font-weight
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your font weights. We've provided a list of
    | common font weight names with their respective numeric scale values
    | to get you started. It's unlikely that your project will require
    | all of these, so we recommend removing those you don't need.
    |
    | Class name: .font-{weight}
    | CSS property: font-weight
    |
    */
    fontWeights: {
      'hairline': 100,
      'thin': 200,
      'light': 300,
      'normal': 400,
      'medium': 500,
      'semibold': 600,
      'bold': 700,
      'extrabold': 800,
      'black': 900
    },

    /*
    |-----------------------------------------------------------------------------
    | Leading (line height)              https://tailwindcss.com/docs/line-height
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your line height values, or as we call
    | them in Tailwind, leadings.
    |
    | Class name: .leading-{size}
    | CSS property: line-height
    |
    */
    leading: {
      'none': 1,
      'tight': 1.25,
      'normal': 1.5,
      'loose': 2
    },

    /*
    |-----------------------------------------------------------------------------
    | Tracking (letter spacing)       https://tailwindcss.com/docs/letter-spacing
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your letter spacing values, or as we call
    | them in Tailwind, tracking.
    |
    | Class name: .tracking-{size}
    | CSS property: letter-spacing
    |
    */
    tracking: {
      'tight': '-0.05em',
      'normal': '0',
      'wide': '0.05em'
    },

    /*
    |-----------------------------------------------------------------------------
    | Text colors                         https://tailwindcss.com/docs/text-color
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your text colors. By default these use the
    | color palette we defined above, however you're welcome to set these
    | independently if that makes sense for your project.
    |
    | Class name: .text-{color}
    | CSS property: color
    |
    */
    textColors: colors,

    /*
    |-----------------------------------------------------------------------------
    | Background colors             https://tailwindcss.com/docs/background-color
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your background colors. By default these use
    | the color palette we defined above, however you're welcome to set
    | these independently if that makes sense for your project.
    |
    | Class name: .bg-{color}
    | CSS property: background-color
    |
    */
    backgroundColors: colors,

    /*
    |-----------------------------------------------------------------------------
    | Background sizes               https://tailwindcss.com/docs/background-size
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your background sizes. We provide some common
    | values that are useful in most projects, but feel free to add other sizes
    | that are specific to your project here as well.
    |
    | Class name: .bg-{size}
    | CSS property: background-size
    |
    */
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain'
    },

    /*
    |-----------------------------------------------------------------------------
    | Border widths                     https://tailwindcss.com/docs/border-width
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your border widths. Take note that border
    | widths require a special "default" value set as well. This is the
    | width that will be used when you do not specify a border width.
    |
    | Class name: .border{-side?}{-width?}
    | CSS property: border-width
    |
    */
    borderWidths: {
      "default": '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
      '8': '8px'
    },

    /*
    |-----------------------------------------------------------------------------
    | Border colors                     https://tailwindcss.com/docs/border-color
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your border colors. By default these use the
    | color palette we defined above, however you're welcome to set these
    | independently if that makes sense for your project.
    |
    | Take note that border colors require a special "default" value set
    | as well. This is the color that will be used when you do not
    | specify a border color.
    |
    | Class name: .border-{color}
    | CSS property: border-color
    |
    */
    borderColors: global$1.Object.assign({
      "default": colors['grey-light']
    }, colors),

    /*
    |-----------------------------------------------------------------------------
    | Border radius                    https://tailwindcss.com/docs/border-radius
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your border radius values. If a `default` radius
    | is provided, it will be made available as the non-suffixed `.rounded`
    | utility.
    |
    | If your scale includes a `0` value to reset already rounded corners, it's
    | a good idea to put it first so other values are able to override it.
    |
    | Class name: .rounded{-side?}{-size?}
    | CSS property: border-radius
    |
    */
    borderRadius: {
      'none': '0',
      'sm': '.125rem',
      "default": '.25rem',
      'lg': '.5rem',
      'full': '9999px'
    },

    /*
    |-----------------------------------------------------------------------------
    | Width                                    https://tailwindcss.com/docs/width
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your width utility sizes. These can be
    | percentage based, pixels, rems, or any other units. By default
    | we provide a sensible rem based numeric scale, a percentage
    | based fraction scale, plus some other common use-cases. You
    | can, of course, modify these values as needed.
    |
    |
    | It's also worth mentioning that Tailwind automatically escapes
    | invalid CSS class name characters, which allows you to have
    | awesome classes like .w-2/3.
    |
    | Class name: .w-{size}
    | CSS property: width
    |
    */
    width: {
      'auto': 'auto',
      'px': '1px',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '24': '6rem',
      '32': '8rem',
      '48': '12rem',
      '64': '16rem',
      '1/2': '50%',
      '1/3': '33.33333%',
      '2/3': '66.66667%',
      '1/4': '25%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.66667%',
      '5/6': '83.33333%',
      'full': '100%',
      'screen': '100vw'
    },

    /*
    |-----------------------------------------------------------------------------
    | Height                                  https://tailwindcss.com/docs/height
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your height utility sizes. These can be
    | percentage based, pixels, rems, or any other units. By default
    | we provide a sensible rem based numeric scale plus some other
    | common use-cases. You can, of course, modify these values as
    | needed.
    |
    | Class name: .h-{size}
    | CSS property: height
    |
    */
    height: {
      'auto': 'auto',
      'px': '1px',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '24': '6rem',
      '32': '8rem',
      '48': '12rem',
      '64': '16rem',
      'full': '100%',
      'screen': '100vh'
    },

    /*
    |-----------------------------------------------------------------------------
    | Minimum width                        https://tailwindcss.com/docs/min-width
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your minimum width utility sizes. These can
    | be percentage based, pixels, rems, or any other units. We provide a
    | couple common use-cases by default. You can, of course, modify
    | these values as needed.
    |
    | Class name: .min-w-{size}
    | CSS property: min-width
    |
    */
    minWidth: {
      '0': '0',
      'full': '100%'
    },

    /*
    |-----------------------------------------------------------------------------
    | Minimum height                      https://tailwindcss.com/docs/min-height
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your minimum height utility sizes. These can
    | be percentage based, pixels, rems, or any other units. We provide a
    | few common use-cases by default. You can, of course, modify these
    | values as needed.
    |
    | Class name: .min-h-{size}
    | CSS property: min-height
    |
    */
    minHeight: {
      '0': '0',
      'full': '100%',
      'screen': '100vh'
    },

    /*
    |-----------------------------------------------------------------------------
    | Maximum width                        https://tailwindcss.com/docs/max-width
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your maximum width utility sizes. These can
    | be percentage based, pixels, rems, or any other units. By default
    | we provide a sensible rem based scale and a "full width" size,
    | which is basically a reset utility. You can, of course,
    | modify these values as needed.
    |
    | Class name: .max-w-{size}
    | CSS property: max-width
    |
    */
    maxWidth: {
      'xs': '20rem',
      'sm': '30rem',
      'md': '40rem',
      'lg': '50rem',
      'xl': '60rem',
      '2xl': '70rem',
      '3xl': '80rem',
      '4xl': '90rem',
      '5xl': '100rem',
      'full': '100%'
    },

    /*
    |-----------------------------------------------------------------------------
    | Maximum height                      https://tailwindcss.com/docs/max-height
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your maximum height utility sizes. These can
    | be percentage based, pixels, rems, or any other units. We provide a
    | couple common use-cases by default. You can, of course, modify
    | these values as needed.
    |
    | Class name: .max-h-{size}
    | CSS property: max-height
    |
    */
    maxHeight: {
      'full': '100%',
      'screen': '100vh'
    },

    /*
    |-----------------------------------------------------------------------------
    | Padding                                https://tailwindcss.com/docs/padding
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your padding utility sizes. These can be
    | percentage based, pixels, rems, or any other units. By default we
    | provide a sensible rem based numeric scale plus a couple other
    | common use-cases like "1px". You can, of course, modify these
    | values as needed.
    |
    | Class name: .p{side?}-{size}
    | CSS property: padding
    |
    */
    padding: {
      'px': '1px',
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '32': '8rem'
    },

    /*
    |-----------------------------------------------------------------------------
    | Margin                                  https://tailwindcss.com/docs/margin
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your margin utility sizes. These can be
    | percentage based, pixels, rems, or any other units. By default we
    | provide a sensible rem based numeric scale plus a couple other
    | common use-cases like "1px". You can, of course, modify these
    | values as needed.
    |
    | Class name: .m{side?}-{size}
    | CSS property: margin
    |
    */
    margin: {
      'auto': 'auto',
      'px': '1px',
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '32': '8rem'
    },

    /*
    |-----------------------------------------------------------------------------
    | Negative margin                https://tailwindcss.com/docs/negative-margin
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your negative margin utility sizes. These can
    | be percentage based, pixels, rems, or any other units. By default we
    | provide matching values to the padding scale since these utilities
    | generally get used together. You can, of course, modify these
    | values as needed.
    |
    | Class name: .-m{side?}-{size}
    | CSS property: margin
    |
    */
    negativeMargin: {
      'px': '1px',
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '32': '8rem'
    },

    /*
    |-----------------------------------------------------------------------------
    | Shadows                                https://tailwindcss.com/docs/shadows
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your shadow utilities. As you can see from
    | the defaults we provide, it's possible to apply multiple shadows
    | per utility using comma separation.
    |
    | If a `default` shadow is provided, it will be made available as the non-
    | suffixed `.shadow` utility.
    |
    | Class name: .shadow-{size?}
    | CSS property: box-shadow
    |
    */
    shadows: {
      "default": '0 2px 4px 0 rgba(0,0,0,0.10)',
      'md': '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
      'lg': '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
      'inner': 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
      'outline': '0 0 0 3px rgba(52,144,220,0.5)',
      'none': 'none'
    },

    /*
    |-----------------------------------------------------------------------------
    | Z-index                                https://tailwindcss.com/docs/z-index
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your z-index utility values. By default we
    | provide a sensible numeric scale. You can, of course, modify these
    | values as needed.
    |
    | Class name: .z-{index}
    | CSS property: z-index
    |
    */
    zIndex: {
      'auto': 'auto',
      '0': 0,
      '10': 10,
      '20': 20,
      '30': 30,
      '40': 40,
      '50': 50
    },

    /*
    |-----------------------------------------------------------------------------
    | Opacity                                https://tailwindcss.com/docs/opacity
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your opacity utility values. By default we
    | provide a sensible numeric scale. You can, of course, modify these
    | values as needed.
    |
    | Class name: .opacity-{name}
    | CSS property: opacity
    |
    */
    opacity: {
      '0': '0',
      '25': '.25',
      '50': '.5',
      '75': '.75',
      '100': '1'
    },

    /*
    |-----------------------------------------------------------------------------
    | SVG fill                                   https://tailwindcss.com/docs/svg
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your SVG fill colors. By default we just provide
    | `fill-current` which sets the fill to the current text color. This lets you
    | specify a fill color using existing text color utilities and helps keep the
    | generated CSS file size down.
    |
    | Class name: .fill-{name}
    | CSS property: fill
    |
    */
    svgFill: {
      'current': 'currentColor'
    },

    /*
    |-----------------------------------------------------------------------------
    | SVG stroke                                 https://tailwindcss.com/docs/svg
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your SVG stroke colors. By default we just provide
    | `stroke-current` which sets the stroke to the current text color. This lets
    | you specify a stroke color using existing text color utilities and helps
    | keep the generated CSS file size down.
    |
    | Class name: .stroke-{name}
    | CSS property: stroke
    |
    */
    svgStroke: {
      'current': 'currentColor'
    },

    /*
    |-----------------------------------------------------------------------------
    | Modules                  https://tailwindcss.com/docs/configuration#modules
    |-----------------------------------------------------------------------------
    |
    | Here is where you control which modules are generated and what variants are
    | generated for each of those modules.
    |
    | Currently supported variants:
    |   - responsive
    |   - hover
    |   - focus
    |   - focus-within
    |   - active
    |   - group-hover
    |
    | To disable a module completely, use `false` instead of an array.
    |
    */
    modules: {
      appearance: ['responsive'],
      backgroundAttachment: ['responsive'],
      backgroundColors: ['responsive', 'hover', 'focus'],
      backgroundPosition: ['responsive'],
      backgroundRepeat: ['responsive'],
      backgroundSize: ['responsive'],
      borderCollapse: [],
      borderColors: ['responsive', 'hover', 'focus'],
      borderRadius: ['responsive'],
      borderStyle: ['responsive'],
      borderWidths: ['responsive'],
      cursor: ['responsive'],
      display: ['responsive'],
      flexbox: ['responsive'],
      "float": ['responsive'],
      fonts: ['responsive'],
      fontWeights: ['responsive', 'hover', 'focus'],
      height: ['responsive'],
      leading: ['responsive'],
      lists: ['responsive'],
      margin: ['responsive'],
      maxHeight: ['responsive'],
      maxWidth: ['responsive'],
      minHeight: ['responsive'],
      minWidth: ['responsive'],
      negativeMargin: ['responsive'],
      objectFit: false,
      objectPosition: false,
      opacity: ['responsive'],
      outline: ['focus'],
      overflow: ['responsive'],
      padding: ['responsive'],
      pointerEvents: ['responsive'],
      position: ['responsive'],
      resize: ['responsive'],
      shadows: ['responsive', 'hover', 'focus'],
      svgFill: [],
      svgStroke: [],
      tableLayout: ['responsive'],
      textAlign: ['responsive'],
      textColors: ['responsive', 'hover', 'focus'],
      textSizes: ['responsive'],
      textStyle: ['responsive', 'hover', 'focus'],
      tracking: ['responsive'],
      userSelect: ['responsive'],
      verticalAlign: ['responsive'],
      visibility: ['responsive'],
      whitespace: ['responsive'],
      width: ['responsive'],
      zIndex: ['responsive']
    },

    /*
    |-----------------------------------------------------------------------------
    | Plugins                                https://tailwindcss.com/docs/plugins
    |-----------------------------------------------------------------------------
    |
    | Here is where you can register any plugins you'd like to use in your
    | project. Tailwind's built-in `container` plugin is enabled by default to
    | give you a Bootstrap-style responsive container component out of the box.
    |
    | Be sure to view the complete plugin documentation to learn more about how
    | the plugin system works.
    |
    */
    plugins: [],

    /*
    |-----------------------------------------------------------------------------
    | Advanced Options         https://tailwindcss.com/docs/configuration#options
    |-----------------------------------------------------------------------------
    |
    | Here is where you can tweak advanced configuration options. We recommend
    | leaving these options alone unless you absolutely need to change them.
    |
    */
    options: {
      prefix: '',
      important: false,
      separator: ':'
    }
  };

  var Header = createStyled("h1", {
    target: "e1sobnor0",
    label: "Header"
  })("color:aqua;", _extends({}, [{
    color: _tailwind.textColors["large"]
  }, {
    fontSize: _tailwind.textSizes["large"]
  }].filter(function (x) {
    return typeof x[Object.keys(x)[0]] !== "undefined" && x[Object.keys(x)[0]] !== "";
  })[0], [{
    backgroundColor: _tailwind.backgroundColors["black"]
  }, {
    backgroundSize: _tailwind.backgroundSize["black"]
  }].filter(function (x) {
    return typeof x[Object.keys(x)[0]] !== "undefined" && x[Object.keys(x)[0]] !== "";
  })[0]), "");

  var HelloWorld = function HelloWorld(props) {
    var _React$useState = React__default.useState(props.message),
        message = _React$useState[0],
        setState = _React$useState[1];

    React__default.useEffect(function (_) {
      return setState(props.message || "Hello World");
    }, [props.message]);
    return React__default.createElement("div", null, React__default.createElement(Header, null, message), React__default.createElement("input", {
      onChange: function onChange(e) {
        return setState(e.target.value);
      },
      value: message
    }));
  };

  // This function creates update callback, which uses react-dom
  // to render content in shadowRoot of the custom element.
  // For production use it should support ShadyCSS polyfill
  // to properly distribute styles in custom element rendered by React

  function reactify(fn) {
    return function (host) {
      var Component = fn(host);
      return function (_, target) {
        return ReactDOM.render(Component, target);
      };
    };
  }

  var ReactComponent = {
    message: "",
    render: render(reactify(function (_ref) {
      var message = _ref.message;
      return React__default.createElement(HelloWorld, {
        message: message
      });
    }), {
      shadowRoot: false
    }) // Needed because style macro fails otherwise

  };
  define('react-web-component', ReactComponent);

}));
