/**
 * Node creation using fluent syntax
 */

/**
 * A new node in jQuery can be created by passing to the jQuery call
 * the string representation of the node that needs to be created and a configuration
 * literal object
 */

$("<div/>", {
    id: "divID",
    class: "class-1 class-2",
    foo: "bar"
});

/**
 * the call above will create a in-memory node, its HTML will be
 * <div id="divID" class="class-1 class-2" foo="bar"></div>
 *
 * Beacuse of jQuery's fluent syntax, any $ function can be called on that node:
 */

$("<p/>", {
    id: "testP",
    text: "Click me to change colour"
}).on("click", function() {
    $(this).css("color", "#" + Math.random().toString(16).slice(2, 8));
});

/**
 * The code above will create a p tag that will change its colour every time is clicked
 */
