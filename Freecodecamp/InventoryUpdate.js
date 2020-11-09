/**
 *    Algorithms: Inventory Update
 * Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery.
 * Update the current existing inventory item quantities (in arr1).
 * If an item cannot be found, add the new item and quantity into the inventory array.
 * The returned inventory array should be in alphabetical order by item.
 *
 */

function updateInventory(arr1, arr2) {
  arr2.forEach((arr2Element) => {
    arr1.forEach((arr1Element) => {
      if (arr2Element[1] === arr1Element[1]) {
        arr1Element[0] += arr2Element[0];
      } else {
        let foundInArr1 = false;
        arr1.forEach((element) => {
          if (element[1] === arr2Element[1]) {
            foundInArr1 = true;
          }
        });
        if (!arr1.includes(arr2Element) && !foundInArr1) {
          arr1.push(arr2Element);
        }
      }
    });
  });
  return arr1;
}

// Example inventory lists
var curInv = [
  [21, 'Bowling Ball'],
  [2, 'Dirty Sock'],
  [1, 'Hair Pin'],
  [5, 'Microphone'],
];

var newInv = [
  [2, 'Hair Pin'],
  [3, 'Half-Eaten Apple'],
  [67, 'Bowling Ball'],
  [7, 'Toothpaste'],
];

console.log(updateInventory(curInv, newInv));
