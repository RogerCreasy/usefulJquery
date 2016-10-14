/**
 * Name; Table Strips (Zebra)
 * Author: Kartik Gupta
 * Author Email: kartik13050@iiitd.ac.in	
 * Created : 10/12/16
 * Description: Alternating colors on each row of a table to increase readability
 */

 $(document).ready(function(){                             
     $("table tr:even").addClass('stripe');
});