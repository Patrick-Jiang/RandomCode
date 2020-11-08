#!/usr/bin/node

const testArr = [7, 5, 2, 4, 3, -9];
const textArrTwo = [20, 23, -23, 123, 45, 78, 88];
const textArrThree = [-2, -31, 100, 12, 1, 2, 3, 4, 5, 6];

const countingSort = (arr, max, min) => {
  const counts = new Array(max - min + 1).fill(0);
  const offset = Math.abs(min);

  arr.forEach((item) => {
    counts[item + offset]++;
  });

  const sortedArr = [];
  for (let i = min; i <= max; i++) {
    let count = counts[i + offset];

    while (count > 0) {
      sortedArr.push(i);

      count--;
    }
  }
  return sortedArr;
};

console.log(countingSort(testArr, 7, -9));
console.log(countingSort(textArrTwo, 123, -23));
console.log(countingSort(textArrThree, 100, -31));
