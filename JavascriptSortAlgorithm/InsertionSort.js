#!/usr/bin/node

const testArr = [7, 5, 2, 4, 3, -9];
const textArrTwo = [20, 23, -23, 123, 45, 78, 88];
const textArrThree = [-2, -31, 100, 12, 1, 2, 3, 4, 5, 6];

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    let j;

    for (j = i - 1; j >= 0 && arr[j] > curr; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = curr;
  }
  return arr;
};

console.log(insertionSort(testArr));
console.log(insertionSort(textArrTwo));
console.log(insertionSort(textArrThree));
