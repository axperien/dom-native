const domNative = (selector, context = document) => {    
    const elements = typeof(selector) === 'string' ? [].slice.call(context.querySelectorAll(selector)) : selector;

    return {
        elements,

        // innerHTML
        html(newHtml) {
            this.elements.forEach(element => element.innerHTML = newHtml);
            return this;
        },

        // change css styles
        css(newCss) {
            this.elements.forEach(element => Object.assign(element.style, newCss));
            return this;
        },

        // remove class
        removeClass(className) {
            this.elements.forEach(element => element.classList.remove(className));
            return this;
        },

        // add class
        addClass(className) {
            this.elements.forEach(element => element.classList.add(className));
            return this;
        },

        // add event listener
        on(event, handler, options) {
            this.elements.forEach(element => element.addEventListener(event, handler, options));
            return this;
        },

        // remove event listener
        off(event, handler) {
            this.elements.forEach(element => element.removeEventListener(event, handler));
            return this;
        },

        filter(selector) {
            return this.elements.filter(typeof selector === 'function' ?
                selector :
                element => element.matches(selector)
            )
        }
    }
}