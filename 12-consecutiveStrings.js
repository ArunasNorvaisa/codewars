/*
You are given an array strarr of strings and an integer k. Your task is
to return the first longest string consisting of k consecutive strings
taken in the array.

Example:
longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) -->
 "abigailtheta"

fnn being the length of the string array, if fnn = 0 or k > fnn or k <= 0 return "".

Note
consecutive strings : follow one after another without an interruption
*/

const longestConsec = (strarr, k) => {
  const length = strarr.length;
  let long = [];
  if(length === 0 || k > length || k <= 0) return '';
  for (let i = 0; i < length; i++) {
    long[i] = strarr.slice(i, i + k).join('');
  }
  return long.reduce((x, y) => x.length >= y.length ? x : y);
};

longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2);
longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1);
longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2);
longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2)
