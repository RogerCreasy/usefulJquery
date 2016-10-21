/**
 * Name: CSS Stylesheet Analyser
 * Author: Daan van Ham
 * Author Email: daan@vanham.io
 * Created : 10/21/16
 * Description: Walk through all document.styleSheets
 				- get all the rules with `getRules`
 				- get all rules matching a string (regex supported)
 				- get all rules matching for a DOMNode
 */

function getRules() {
	return Array.prototype.concat.apply([], Array.prototype.map.call(document.styleSheets, function(sheet) {
		return sheet.cssRules && Array.prototype.filter.call(sheet.cssRules, function(rule) {
			return rule.type === 1;
		})
	}));
}

function getSelectorRules(selector) {
	return getRules().filter(function(rule) {
		return new RegExp(selector).test(rule.selectorText);
	});
}

function getMatchingCSSRules(node) {
	return getRules().filter(function(rule) {
		return node.matches(rule.selectorText);
	});
}
