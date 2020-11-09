#!/usr/bin/node

const testArr = [7, 5, 2, 4, 3, -9];
const textArrTwo = [20, 23, -23, 123, 45, 78, 88];
const textArrThree = [-2, -31, 100, 12, 1, 2, 3, 4, 5, 6];
const merge = (arr1, arr2) => {
  let sorted = [];
  while (arr1.length > 0 && arr2.length > 0) {
    arr1[0] < arr2[0] ? sorted.push(arr1.shift()) : sorted.push(arr2.shift());
  }
  return [...sorted, ...arr1, ...arr2];
};
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort(testArr));
console.log(mergeSort(textArrTwo));
console.log(mergeSort(textArrThree));

// console.log(merge([2, 5, 10, 57], [9, 12, 13]));
