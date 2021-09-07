// Добавить все значения из второго массива в первый

let array = [4, 1, 8, 5, 23];
let array1 = [654, 2, 8, 4, 7];

function testFunc(arr, arr1) {
  return arr.concat(arr1)
}

console.log(testFunc(array, array1))
