/*
A friend of mine takes a sequence of numbers from 1 to n (where n > 0).
Within that sequence, he chooses two numbers, a and b.
He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
Given a number n, could you tell me the numbers he excluded from the sequence?

  The function takes the parameter: n (n is always strictly greater than 0) and returns an
   array or a string of the form:

  [[a, b], ...] with all (a, b) which are the possible removed numbers in the sequence 1 to n.

  [[a, b]] will be sorted in increasing order of the "a".

  It happens that there are several possible (a, b). The function returns an empty array (or an
  empty string) if no possible numbers are found which will prove that my friend has not told
  the truth.

(See examples of returns for each language in "RUN SAMPLE TESTS")

Examples:

removeNb(26) should return [[15, 21], [21, 15]]
*/

const removeNb = n => {
  //Sum of all numbers from 1 to n, w/o removing anything
  const totalSum = n * (n + 1) / 2;

  // For each possible value of y, calculate x if it exists.
  let results =  [];
  for (let y = 1; y <= n; y++) {
    const a = totalSum - y;
    const b = y + 1;
    if (a % b === 0) {
      const x = a / b;
      if (x < n && x !== y) {
        results = [[x, y], ...results];
      }
    }
  }
  return results;
};

console.log(removeNb(10)); // [[6,7],[7,6]]
console.log(removeNb(26)); // [[15,21], [21,15]]
console.log(removeNb(100)); // []
console.log(removeNb(1000003)); // [[550320,908566],[559756,893250],[893250,559756],[908566,550320]]
