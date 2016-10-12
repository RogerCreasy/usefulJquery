$('.element-with-tooltip').hover(function() {
    // get tooltip text
    var title = $(this).data('tooltip');

    //make tooltip element
    $('<p class="tooltip"></p>')
        .text(title)
        .appendTo('body')
        .fadeIn('slow');
}, function() {
    // Hover out code
    $('.tooltip').remove();
}).mousemove(function(e) {
    //position tooltip
    var mousex = e.pageX
    var mousey = e.pageY
    $('.tooltip')
        .css({
            top: mousey,
            left: mousex
        })
});

/**
* Example
http://jsbin.com/xilunog/edit?html,css,js,output

* html
<button data-tooltip="When clicked I will do this" class="element-with-tooltip">Click Me</button>

* css
.tooltip {
  color: white;
  background: black;
  padding: 5px;
  display: inline;
  border-radius: 25px;
  font-size: 10px
}
*/