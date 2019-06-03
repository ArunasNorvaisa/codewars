/*
Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept
it, is to score a throw according to these rules. You will always be given an array with five
six-sided dice values.

Three 1's => 1000 points
Three 6's =>  600 points
Three 5's =>  500 points
Three 4's =>  400 points
Three 3's =>  300 points
Three 2's =>  200 points
One   1   =>  100 points
One   5   =>   50 point

A single die can only be counted once in each roll. For example, a "5" can only count as part of a
triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

  Example scoring

Throw       Score
---------   ------------------
5 1 3 4 1   50 + 2 * 100 = 250
1 1 1 3 1   1000 + 100 = 1100
2 4 4 5 4   400 + 50 = 450
*/

const score = dice => {
  let ones   = 0,
      twos   = 0,
      threes = 0,
      fours  = 0,
      fives  = 0,
      sixes  = 0;
  dice.forEach(die => {
    switch (die) {
      case 1:
        ones += 1;
        break;
      case 2:
        twos += 1;
        break;
      case 3:
        threes += 1;
        break;
      case 4:
        fours += 1;
        break;
      case 5:
        fives += 1;
        break;
      case 6:
        sixes += 1;
    }
  });
  let result = Math.floor(ones / 3) * 1000 + (ones % 3) * 100;
  result += Math.floor(twos / 3) * 200;
  result += Math.floor(threes / 3) * 300;
  result += Math.floor(fours / 3) * 400;
  result += Math.floor(fives / 3) * 500 + (fives % 3) * 50;
  result += Math.floor(sixes / 3) * 600;

  return result;
};

console.log(score([2, 3, 4, 6, 2]));// == 0,   "Should be 0 :-("
console.log(score([4, 4, 4, 3, 3]));// == 400, "Should be 400"
console.log(score([2, 4, 4, 5, 4]));// == 450, "Should be 450"
console.log(score([6, 6, 6, 3, 3]));// == 600, "Should be 600"
