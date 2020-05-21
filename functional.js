// suppose we had an array of mixed-case strings, and we wanted
// to create a corresponding array of lower-case strings joined
// on a hyphen, like this:
// "North Dakota" -> "north-dakota"

///////////////// my version

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

///////////////// textbook version
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

// singles: Functional version
function functionalSingles(elements) {
	return elements.filter((element) => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));

///////////// reduce function

let numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

// sum: Imperative solution
function imperativeSum(elements) {
	let total = 0;
	elements.forEach(function(n) {
		total += n;
	});
	return total;
}
console.log(imperativeSum(numbers));

// sum: Functional solution
function functionalSum(elements) {
	return elements.reduce((total, n) => {
		return (total += n);
	});
}
console.log(functionalSum(numbers));

// lengths: Imperative solution
function imperativeLengths(elements) {
	let lengths = {};
	elements.forEach(function(element) {
		lengths[element] = element.length;
	});
	return lengths;
}
console.log(imperativeLengths(states));

// lengths: Functional solution
function functionalLengths(elements) {
	return elements.reduce((lengths, element) => {
		lengths[element] = element.length;
		return lengths;
	}, {});
}
console.log(functionalLengths(states));
