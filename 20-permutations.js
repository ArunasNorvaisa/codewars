/*
In this kata you have to create all permutations of an input string and remove duplicates, if
 present. This means, you have to shuffle all letters from the input in all possible orders.

  Examples:

permutations('a'); // ['a']
permutations('ab'); // ['ab', 'ba']
permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

The order of the permutations doesn't matter.
*/

const permutations = string => {
  let results = [];
  if(string.length <= 1) return [...string];

  for (let i = 0; i < string.length; i++) {
    const first = string[i];
    const charsLeft = string.replace(string[i], '');
    const recurse = permutations(charsLeft);
    for (let j = 0; j < recurse.length; j++) {
      results = [...results, (first + recurse[j])];
    }
  }
  return Array.from(new Set(results));
};

console.log(permutations('a')); // ['a']
console.log(permutations('ab')); // ['ab', 'ba']
console.log(permutations('aabb')); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
