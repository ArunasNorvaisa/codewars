/*
Write a function which makes a list of strings representing all of the ways you
can balance n pairs of parentheses

Examples
balancedParens(0) => [""]
balancedParens(1) => ["()"]
balancedParens(2) => ["()()","(())"]
balancedParens(3) => ["()()()","()(())","(())()","(()())","((()))"]
*/

const balancedParens = n => {
  let result = [];
  const recursion = (length = n * 2, tmp = '') => {
    if (length === 0) result.push(tmp);
  };
  return result;
};
