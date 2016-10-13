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
	    return parseInt(agent.substring(index + 5, agent.indexOf(".", index)));
	  } else if (agent.indexOf("Trident/7.0") > 0) {
	    //IE11 wants to trick user agent parsers
	    return 11;
	  } else if(agent.indexOf("Edge/") > 0) {
	  	//return Edge version
	  	var index = agent.indexOf("Edge/");
		return parseInt(agent.substring(index + 5, agent.indexOf(".", index)));
	  } else {
	    //no IE
	    return 0;
	  }
	}

});
