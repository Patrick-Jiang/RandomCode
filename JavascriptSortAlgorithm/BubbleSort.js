#!/usr/bin/node

const testArr = [7, 5, 2, 4, 3, 9];
const textArrTwo = [20, 23, -23, 123, 45, 78, 88];
const textArrThree = [1, 2, 3, 4, 5, 6];
function bubbleSort(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort(testArr));
console.log(bubbleSort(textArrTwo));
console.log(bubbleSort(textArrThree));
