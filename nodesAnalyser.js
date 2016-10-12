/**
 * Name: Nodes Analyser
 * Author: Daan van Ham
 * Author Email: daan@vanham.io
 * Created : 10/12/16
 * Description: Analyse some properties of your page
 				- depth of the deepest DOMNode
 				- amount of DOMNodes on the page
 				- sets a box-shadow around all DOMNodes
 */

var depth = 0,
	nodes = 0;

function walk(node, level) {
	node.children().each(function() {
		++nodes;

		// set a border so we can see the size of the DOMNode on the page
		$(this).css({
			'box-shadow': '0 0 5px rgba(255, 0, 0, .7)'
		});

		// increment depth only when we go one level deeper
		if (level > depth) {
			++depth;
		}

		// recursiveness ftw
		walk($(this), level + 1);
	});
};

// invoke it like this (or use `depth` as the second argument)
// walk($(document.body), 0);
