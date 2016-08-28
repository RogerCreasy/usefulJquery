/**
 * Name; New Window
 * Author: Roger Creasy
 * Author Email: roger@RogerCreasy.com
 * Created : 8/27/16
 * Description: Make all external links on a site target="_balnk"
 */

$(document.links).filter(function() {
    return this.hostname != window.location.hostname;
}).attr('target', '_blank');
