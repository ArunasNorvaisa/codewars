/*
Given the string representations of two integers, return the string representation of the sum of
those integers.

  For example:
  sumStrings('1','2') // => '3'

A string representation of an integer will contain no characters besides the ten numerals "0" to "9".
*/

const sumStrings = (a, b) => {
  let sum = '',
      tmp = 0;
  // Calculating length difference
  const diff = a.length - b.length;
  // Making lengths equal by adding leading zeros where necessary
  if (diff < 0) a = '0'.repeat(Math.abs(diff)) + a;
  if (diff > 0) b = '0'.repeat(diff) + b;
  for (let i = a.length - 1; i >= 0; i--) {
    tmp = Number(a[i]) + Number(b[i]) + tmp;
    if (tmp.toString().length === 1) {
      sum = tmp.toString() + sum;
      tmp = 0;
    }
    else {
      sum = tmp.toString()[1] + sum;
      tmp = 1;
    }
  }
  if (tmp === 1) sum = '1' + sum;
  // Removing leading zeros, if any
  return sum.replace(/^0+/, '');
};

console.log('L35 sumStrings(967567273657864998918637863471567236575671642536,' +
  ' 2385786726745671563269365786273657273656757936547) ===', sumStrings('967567273657864998918637863471567236575671642536', '2385786726745671563269365786273657273656757936547'));
