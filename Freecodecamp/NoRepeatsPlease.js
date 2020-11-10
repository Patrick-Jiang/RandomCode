/**
 *    Algorithms: No Repeats Please
 * Return the number of total permutations of the provided string that don't have repeated consecutive letters.
 * Assume that all characters in the provided string are each unique.
 * For example, aab should return 2 because it has 6 total permutations
 * (aab, aab, aba, aba, baa, baa),
 * but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.
 */

var permArr = [],
  usedChars = [];

function permAlone(str) {
  var arr = [...str];
  var regex = /(.)\1+/g;
  var i, ch;
  for (i = 0; i < arr.length; i++) {
    ch = arr.splice(i, 1)[0];
    usedChars.push(ch);
    if (arr.length == 0) {
      permArr.push(usedChars.slice());
    }
    permAlone(arr);
    arr.splice(i, 0, ch);
    usedChars.pop();
  }
  let result = [];
  permArr.forEach((element) => result.push(element.join('')));

  var filtered = result.filter(function (string) {
    return !string.match(regex);
  });
  return filtered.length;
}

console.log(permAlone('zzzzzzzz'));
