/**
 * Name; Toggle Visibility
 * Author: Prakhar Srivastava
 * Author Email: srivastavaprakhar1@gmail.com
 * Created : 10/27/16
 * Description: toogles visibility of any element
 * example: https://jsfiddle.net/0keL32h3/
 */


$(".fader").on("click", function(){
  $(".toFade").fadeToggle("slow", "linear");
});
