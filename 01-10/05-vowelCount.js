/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.

The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
  let vowelsCount = 0;  
  for(let j = 0; j <= str.length; j++) {
    if(['a', 'e', 'i', 'o', 'u'].some(item => item === str[j])) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}

getCount('ready to support open source? github will match your contribution to developers during their first year in github sponsors');
