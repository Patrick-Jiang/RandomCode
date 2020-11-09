#!/usr/bin/node
let a = {
  value: 0,
  next: {
    value: 1,
    next: {
      value: 2,
      next: undefined,
    },
  },
};
console.log('value of a');
console.log(a.value);
console.log('value of 2nd element');
console.log(a.next.value);
console.log('value of last element');
console.log(a.next.next.value);

console.log('remove 2nd item, use a.next = a.next.next');
a.next = a.next.next;
console.log('value of a');
console.log(a.value);
console.log('value of 2nd element');
console.log(a.next.value);
