/**
 * Name; Tooltip
 * Author: Arturo Romero
 * Author Email: artromero801@gmail.com
 * Created : 10/12/16
 * Description: Add a text tooltip to any element with a data attribute
 * example: http://jsbin.com/xilunog/edit?html,css,js,output
 */
$('.element-with-tooltip').hover(function() {
    // get tooltip text
    var title = $(this).data('tooltip');

    //make tooltip element
    $('<p class="tooltip"></p>')
        .text(title)
        .appendTo('body')
        .fadeIn('slow');
}, function() {
    // Hover out remove tooltip
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