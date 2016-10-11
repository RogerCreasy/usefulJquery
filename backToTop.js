
/**
 * Name; Back To Top Button
 * Author: Rahul Jain
 * Author Email: rahul_jain@live.in
 * Created : 10/11/16
 * Description: Link to scroll to top on a webpage
 */

// This needs an HTML tag with class="backToTop"
$('.backToTop').click(function(){
  // scroll to top with animation taking 1 second
  $(document.body).animate({scrollTop : 0},1000);
});
