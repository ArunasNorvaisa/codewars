/*
Consider having a cow that gives a child every year from her fourth year
of life on and all her subsequent children do the same.
After n years how many cows will you have?

countCows(0); // should equal 1
countCows(1); // should equal 1
countCows(3); // should equal 2
countCows(4); // should equal 3
countCows(10);// should equal 28
Return null if n is not an integer.

Note: Assume all the cows are alive after n years.
*/

const countCows = years => {
  const cowsByAge = [1, 0, 0, 0];
  let cowsTotal = 0;
  for(let i = 0; i <= years; i++) {
    cowsTotal = cowsByAge.reduce((total, num) => total + num);
    cowsByAge[3] += cowsByAge[2];
    cowsByAge[2] = cowsByAge[1];
    cowsByAge[1] = cowsByAge[0];
    cowsByAge[0] = cowsByAge[3];
  }
  console.log('cows', cowsTotal);
  return cowsTotal;
};

countCows(0);
countCows(1);
countCows(3);
countCows(4);
countCows(6);
countCows(10);
countCows(30);
