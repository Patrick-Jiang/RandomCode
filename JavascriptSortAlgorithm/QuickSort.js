#!/usr/bin/node

const testArr = [7, 5, 2, 4, 3, -9];
const textArrTwo = [20, 23, -23, 123, 45, 78, 88];
const textArrThree = [-2, -31, 100, 12, 1, 2, 3, 4, 5, 6];
function quickSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  const piovt = arr[arr.length - 1];
  const leftArr = [];
  const rightArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > piovt) {
      rightArr.push(arr[i]);
    } else {
      leftArr.push(arr[i]);
    }
  }
  if (leftArr.length > 0 && rightArr.length > 0) {
    return [...quickSort(leftArr), piovt, ...quickSort(rightArr)];
  } else if (leftArr.length > 0) {
    return [...quickSort(leftArr), piovt];
  } else {
    return [piovt, ...quickSort(rightArr)];
  }
}

console.log(quickSort(testArr));
console.log(quickSort(textArrTwo));
console.log(quickSort(textArrThree));
