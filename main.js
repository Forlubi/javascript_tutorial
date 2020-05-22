let Phrase = require('mhartl-palindrome');

//alert(new Phrase("Madam, I'm Adam.").palindrome());

function palindromeTester(event) {
	// prevent default form submission
	event.preventDefault();
	let phrase = new Phrase(event.target.phrase.value);
	let palindromeResult = document.querySelector('#palindromeResult');

	if (phrase.palindrome()) {
		palindromeResult.innerHTML = `"${phrase.content}" is a palindrome!`;
	} else {
		palindromeResult.innerHTML = `"${phrase.content}" is not a palindrome.`;
	}
}

document.addEventListener('DOMContentLoaded', function() {
	let tester = document.querySelector('#palindromeTester');
	tester.addEventListener('submit', function(event) {
		palindromeTester(event);
	});
});
