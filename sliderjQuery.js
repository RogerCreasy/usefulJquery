el = document.getElementById("simple-ss");
el.onclick = links;

function links() {
  left = parseInt(getComputedStyle(el).getPropertyValue("background-position").split(" ", 1));
   
  /* DEFINE POSITIONS FOR CLICK EVENTS */
  if (left >= -400) {
  
    // First until about half way scrolled over
    alert("first");
    //window.open("http://www.google.com");
  
  } else if (left >= -1200) {
  
    // Second when half way scrolled either side
    alert("second");
    //window.open("http://www.google.com");
    
  } else if (left >= -1600) {
    
    // Third when over half way into banner
    alert("third");
    //window.open("http://www.google.com");
    
  }
   
}
