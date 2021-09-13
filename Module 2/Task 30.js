// Переставить местами максимальный и минимальный элемент в массиве

let array = [5, 7, 2, 9, 5, 6, 3, 1, 8]

function testFunc(arr) {
  let i1 = arr.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
  let i2 = arr.reduce((iMax, x, i, arr) => x < arr[iMax] ? i : iMax, 0);
  let x = arr[i1]
  arr[i1] = arr[i2];
  arr[i2] = x
  return arr
}

console.log(testFunc(array))
