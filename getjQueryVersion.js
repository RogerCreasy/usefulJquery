/**
 * Get jQuery version it's very easy
 */

$.fn.jquery //will return for instance "1.11.3"

/**
 * the fn function in jQuery is a reference to jQuery's prototype where all the functions are registered
 * for instance if you want to see how the css function is implementd in jQuery just run
 */

console.log($.fn.css)

/**
 * and it will return something like
 */

function (name, value) {
    return access(this, function(elem, name, value) {
        var styles,
            len,
            map = {},
            i = 0;

        if (jQuery.isArray(name)) {
            styles = getStyles(elem);
            len = name.length;

            for (; i < len; i++) {
                map[name[i]] = jQuery.css(elem, name[i], false, styles);
            }

            return map;
        }

        return value !== undefined
            ? jQuery.style(elem, name, value)
            : jQuery.css(elem, name);
    }, name, value, arguments.length > 1);
}

/**
 * The plugin system in jQuery uses the fn.extend to add more function to the already rich eco-system
 * you can of course define your own
 */

$.fn.extend({
    printTest: function() {
        console.log("test")
    }
})

/**
 * and now calling $().printTest() will print in the console "test"
 */
