/*
There is a secret string which is unknown to you. Given a collection of random triplets from
the string, recover the original string.

A triplet here is defined as a sequence of three letters such that each letter occurs
somewhere before the next in the given string. "whi" is a triplet for the string "whatisup".

As a simplification, you may assume that no letter occurs more than once in the secret string.

You can assume nothing about the triplets given to you other than that they are valid
triplets and that they contain sufficient information to deduce the original string. In
particular, this means that the secret string will never contain letters that do not occur
in one of the triplets given to you.
*/

const recoverSecret = triplets => {
  let result = '',
      log = true;
  // We are getting list of all chars as result variable
  for (let i = 0; i < triplets.length; i++) {
    for (let j = 0; j < triplets[i].length; j++) {
      if(result.indexOf(triplets[i][j]) === -1) result += triplets[i][j];
    }
  }
  // We iterate through all chars and arranging them in result
  while(log) {
    log = false;
    for (let i = 0; i < triplets.length; i++) {
      for (let j = 0; j < triplets[i].length - 1; j++) {
        if(result.indexOf(triplets[i][j]) > result.indexOf(triplets[i][j + 1])) {
          result = result
            .replace(triplets[i][j], triplets[i][j + 1])
            .replace(triplets[i][j + 1], triplets[i][j]);
          log = true;
        }
      }
    }
  }
  return result;
};

const triplets = [
  ['t','u','p'],
  ['w','h','i'],
  ['t','s','u'],
  ['a','t','s'],
  ['h','a','p'],
  ['t','i','s'],
  ['w','h','s']
];

console.log(recoverSecret(triplets));
