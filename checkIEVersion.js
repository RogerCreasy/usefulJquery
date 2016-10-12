/**
* @name checkIEVersion
* @author chrisonntag
* @desc checks if a user uses MSIE 
*/

$(document).ready({

	function checkIEVersion() {
	  var agent = window.navigator.userAgent;
	  var index = agent.indexOf("MSIE");

	  if (index > 0) {
	    // return IE version
	    return parseInt(agent.substring(index+ 5, agent.indexOf(".", index)));
	  } else if (!navigator.userAgent.match(/Trident\/7\./)) {
	    //IE11 wants to trick user agent parsers
	    return 11;
	  } else {
	    //no IE
	    return 0;
	  }
	}

});
