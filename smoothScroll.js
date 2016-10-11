/**
 * Name: Smooth Scroll
 * Author: Shivasheesh Yadav
 * Author Email: shivasheeshyadav@gmail.com
 * Created : 10/11/16
 * Description: It makes the webpage scroll smoothly to the href attribute of the link which is clicked.
                Most preferably used in single page websites, attached to the navigation bar.
 */

// This needs a link in the Navigation Menu which is within a div having class="nav"
$(".nav a").click(function(){
  //href attribute of the clicked link is stored in target variable.
  var target = $(this).attr('href');
  //Scrolls smoothly to the target taking 0.8 second 
  $('html, body').animate({scrollTop: $(target).offset().top}, 800);
});