'use strict';

var domNative = function domNative(selector) {
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

    var elements = typeof selector === 'string' ? [].slice.call(context.querySelectorAll(selector)) : selector;

    return {
        elements: elements,

        // innerHTML
        html: function html(newHtml) {
            this.elements.forEach(function (element) {
                return element.innerHTML = newHtml;
            });
            return this;
        },


        // change css styles
        css: function css(newCss) {
            this.elements.forEach(function (element) {
                return Object.assign(element.style, newCss);
            });
            return this;
        },


        // remove class
        removeClass: function removeClass(className) {
            this.elements.forEach(function (element) {
                return element.classList.remove(className);
            });
            return this;
        },


        // add class
        addClass: function addClass(className) {
            this.elements.forEach(function (element) {
                return element.classList.add(className);
            });
            return this;
        },


        // add event listener
        on: function on(event, handler, options) {
            this.elements.forEach(function (element) {
                return element.addEventListener(event, handler, options);
            });
            return this;
        },


        // remove event listener
        off: function off(event, handler) {
            this.elements.forEach(function (element) {
                return element.removeEventListener(event, handler);
            });
            return this;
        },
        filter: function filter(selector) {
            return this.elements.filter(typeof selector === 'function' ? selector : function (element) {
                return element.matches(selector);
            });
        }
    };
};