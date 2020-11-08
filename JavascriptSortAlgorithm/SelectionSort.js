#!/usr/bin/node

const testArr = [7, 5, 2, 4, 3, -9];
const textArrTwo = [20, 23, -23, 123, 45, 78, 88];
const textArrThree = [1, 2, 3, 4, 5, 6];
function selectionSort(arr) {
  let minIndex, temp;
  for (let i = 0; i < arr.length; i++) {
    minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}

console.log(selectionSort(testArr));
console.log(selectionSort(textArrTwo));
console.log(selectionSort(textArrThree));
