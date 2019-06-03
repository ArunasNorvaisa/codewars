/*
The new "Avengers" movie has just been released! There are a lot of people
at the cinema box office standing in a huge line. Each of them has a single
100, 50 or 25 dollars bill. An "Avengers" ticket costs 25 dollars.

  Vasya is currently working as a clerk. He wants to sell a ticket to every
  single person in this line.

  Can Vasya sell a ticket to each person and give the change if he initially
  has no money and sells the tickets strictly in the order people follow in
  the line?

  Return YES, if Vasya can sell a ticket to each person and give the change
  with the bills he has at hand at that moment. Otherwise return NO.

  Examples:

tickets([25, 25, 50]) // => YES
tickets([25, 100]) // => NO.
tickets([25, 25, 50, 50, 100]) // => NO

*/

const tickets = peopleInLine => {
  const bank = [0, 0];
  for(let i = 0; i < peopleInLine.length; i++) {
    if(peopleInLine[i] === 25) bank[0]++;
    if(peopleInLine[i] === 50) {
      bank[1]++;
      bank[0]--;
    }
    if(peopleInLine[i] === 100){
      bank[0]--;
      bank[1] > 0 ? bank[1]-- : bank[0] -= 2;
    }
    if (bank.some(i => i < 0)) return 'NO';
  }
  return 'YES';
};

tickets([25, 25, 50]); // => YES
tickets([25, 100]); // => NO.
tickets([25, 25, 50, 50, 100]); // NO
