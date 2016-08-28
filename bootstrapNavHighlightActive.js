/**
 * Name; Bootstrap Nav Highlight
 * Author: Roger Creasy
 * Author Email: roger@RogerCreasy.com
 * Created : 8/27/16
 * Description: Highlight active element in Bootstrap nav
 */

// manage active state of nav
$(document).ready(function () {
    $(".nav li").removeClass("active");//this will remove the active class from
                                       //previously active menu item
    $('a[href="' + this.location.pathname + '"]').parents('li,ul').addClass('active');
});