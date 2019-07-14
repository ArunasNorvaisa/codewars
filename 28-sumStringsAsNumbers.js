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
  // Making lengths equal by adding leading zeros where necessary
  a = a.padStart(b.length, '0');
  b = b.padStart(a.length, '0');
  for (let i = a.length - 1; i >= 0; i--) {
    tmp += +a[i] + +b[i];
    sum = tmp % 10 + sum;
    tmp = +(tmp >= 10);
  }
  if (tmp) sum = '1' + sum;
  // Removing leading zeros, if any
  return sum.replace(/^0+/, '');
};

console.log('L27 sumStrings(96756727365786499891863786347156723657567164,' +
  ' 238578672674567156326936578627365727365675793) ===', sumStrings('96756727365786499891863786347156723657567164', '238578672674567156326936578627365727365675793'));

console.log('L30 sumStrings(99, 000777) ===', sumStrings('99', '000777'));
