/*
This time we want to write calculations using functions and get the results. Let's have a look
 at some examples:

JavaScript:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

Requirements:

  There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times,
 dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Divison should be integer division, e.g eight(dividedBy(three())) should return 2, not 2.666666...
*/

const fnn = digit => temp => temp ? temp(digit) : digit;
const zero = fnn(0);
const one = fnn(1);
const two = fnn(2);
const three = fnn(3);
const four = fnn(4);
const five = fnn(5);
const six = fnn(6);
const seven = fnn(7);
const eight = fnn(8);
const nine = fnn(9);

const plus = y => x => x + y;
const minus = y => x => x - y;
const times = y => x => x * y;
const dividedBy = y => x => Math.floor(x / y);

console.log(seven(times(five()))); //35;
console.log(four(plus(nine()))); //13;
console.log(eight(minus(three()))); //5;
console.log(six(dividedBy(two()))); //3;
