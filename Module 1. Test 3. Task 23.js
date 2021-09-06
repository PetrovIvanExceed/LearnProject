let array = [5, 7, 2, 9, 4, 2, 8, 9, 4, 2, 7, 4, 12, 754, 2345, 2, 8, 244,
  2545, 6, 3, 9];
let array1 = [5, 7, 2, 9, -3, 435, 67, -25, 12, 754, 2345, 2, 8, 244,
  2545, 6, 3, 9];

function testFunc(arr, arr1) {
  arr1.forEach(elem => arr.push(elem))
  return [...new Set(arr)]
}

console.log(testFunc(array, array1))
