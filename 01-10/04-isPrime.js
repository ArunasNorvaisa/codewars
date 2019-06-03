/*
Is Prime
Define a function isPrime/is_prime() that takes one integer argument and returns true/True
or false/False depending on if the integer is a prime.

Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no
positive divisors other than 1 and itself.
*/

const isPrime = num => {
  if(num > 1) {
    for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
      if(num % i === 0) return false;
    }
    return true;
  }
  return false;
};

isPrime(1);
isPrime(2);
isPrime(39);
isPrime(120);
isPrime(102111111);
isPrime(1);
