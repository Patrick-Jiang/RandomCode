/**
 *An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

Your goal is to find that missing element.

Write a function:

function solution(A);

that, given an array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
the elements of A are all distinct;
each element of array A is an integer within the range [1..(N + 1)].
Copyright 2009–2021 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or di
 */
function badSolution(A) {
  let res = [];
  for (let i = 1; i <= A.length + 1; i++) {
    res.push(i);
  }
  res = res.filter((item) => !A.includes(item));
  return res;
}

function goodSolution(A) {
  if (A.length === 0) {
    return 1;
  }
  let sum = A.reduce((accumulator, currentValue) => accumulator + currentValue);
  let res = ((1 + A.length + 1) * (A.length + 1)) / 2 - sum;
  return res;
}

// console.log(badSolution([1, 2, 3, 5]));
console.log(goodSolution([]));
