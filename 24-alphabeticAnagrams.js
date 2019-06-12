/*
Consider a "word" as any sequence of capital letters A-Z (not limited to just "dictionary
words"). For any word with at least two different letters, there are other words composed of
the same letters but in a different order (for instance, STATIONARILY/ANTIROYALIST, which
happen to both be dictionary words; for our purposes "AAIILNORSTTY" is also a "word"
composed of the same letters as these two).

We can then assign a number to every word, based on where it falls in an alphabetically sorted
list of all words made up of the same group of letters. One way to do this would be to
generate the entire list of words and find the desired one, but this would be slow if the
word is long.

Given a word, return its number. Your function should be able to accept any word 25 letters
or less in length (possibly with some letters repeated), and take no more than 500
milliseconds to run. To compare, when the solution code runs the 27 test cases in JS, it takes 101ms.

For very large words, you'll run into number precision issues in JS (if the word's position
is greater than 2^53). For the JS tests with large positions, there's some leeway
(.000000001%). If you feel like you're getting it right for the smaller ranks, and only
failing by rounding on the larger, submit a couple more times and see if it takes.

Sample words, with their rank:
ABAB = 2
AAAB = 1
BAAA = 4
QUESTION = 24572
BOOKKEEPER = 10743
*/

const listPosition = word => {
  let pos = 1;

  // Calculate counts of each character
  let charCounts = {};
  for (let i = 0; i < word.length; i++) {
    charCounts[word[i]] = charCounts[word[i]] || 0;
    charCounts[word[i]] += 1;
  }

  // Iterate over each character in the word
  for (let i = 0; i < word.length; i++) {
    let result = 0;

    // Calculate the number of smaller characters to the right of the current character
    let smallerChars = 0;
    for (let j = i; j < word.length; j++) {
      if (word.charCodeAt(j) < word.charCodeAt(i)) {
        smallerChars += 1;
      }
    }

    // If the number of smaller characters is 0, the result is going to be 0.
    // Skip to the next iteration
    if (smallerChars === 0) {
      // Remove the current character from the counters
      charCounts[word[i]] -= 1;
      continue;
    }

    // Otherwise calculate part of the result
    result = factorial(word.length - i - 1) * smallerChars;

    // Iterate over the character counts, to find any characters which repeat
    // more than once
    for (let char in charCounts) {
      if (charCounts[char] > 1) {
        result = result / factorial(charCounts[char]);
      }
    }

    // Add the result of this iteration to the final result
    pos += result;

    // Remove the current character from the counters
    charCounts[word[i]] -= 1;
  }
  return pos;
};

const factorial = n => {
  let result = 1;
  while (n > 1) {
    result = result * n;
    n -= 1;
  }
  return result;
};

console.log('L56 listPosition("QUESTION") ===', listPosition("QUESTION")); // 24572
console.log('L56 listPosition("CDAB") ===', listPosition("CDAB")); // 17
console.log('L56 listPosition("BBAA") ===', listPosition("BBAA")); // 6
console.log('L56 listPosition("bookkeeper") ===', listPosition("BOOKKEEPER")); // 10743