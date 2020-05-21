// suppose we had an array of mixed-case strings, and we wanted
// to create a corresponding array of lower-case strings joined
// on a hyphen, like this:
// "North Dakota" -> "north-dakota"

// my version

function toHyphenString(string) {
	let lowerCased = new Array();
	string.split(' ').forEach(function(word) {
		lowerCased.push(word.toLowerCase());
	});
	console.log(lowerCased);
	return lowerCased.join('-');
}

let input = 'North Dakota';
console.log(toHyphenString(input));

// sample answer
let states = [ 'Kansas', 'Nebraska', 'North Dakota', 'South Dakota' ];

// Returns a URL-friendly version of a string.
//   Example: "North Dakota" -> "north-dakota"
function urlify(string) {
	return string.toLowerCase().split(/\s+/).join('-');
}

// urls: Imperative version
function imperativeUrls(elements) {
	let urls = [];
	elements.forEach(function(element) {
		urls.push(urlify(element));
	});
	return urls;
}
console.log(imperativeUrls(states));

// urls: Functional version
function functionalUrls(elements) {
	return elements.map((element) => urlify(element));
}
console.log(functionalUrls(states));
