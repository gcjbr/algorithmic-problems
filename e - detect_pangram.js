// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  for (let i = 0; i < alphabet.length; i++) {
    if (string.toLowerCase().indexOf(alphabet[i]) < 0) {
      return false;
    }
  }

  return true;
}

var string = 'The quick brown fox jumps over the lazy dog.';
console.log(isPangram(string));
var string = 'This is not a pangram.';
console.log(isPangram(string));
