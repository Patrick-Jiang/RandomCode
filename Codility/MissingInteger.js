/**
 *This is a demo task.

Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
 */
function soulution1(A) {
  let i = 1;
  while (true) {
    const found = A.find((element) => element === i);
    if (!found) {
      break;
    } else {
      i++;
    }
  }
  return i;
}

function soulution2(A) {
  const set = new Set(A);
  let i = 1;
  while (true) {
    if (!set.has(i)) return i;
    i++;
  }
}

console.log(soulution2([1, 2, 3]));
