// Вернуть true, если все значения массива "положительные"

let array = [9, 5, 2, 6, 23, 6, 8, 1, 9, 2];

function testFunc(arr) {
  return arr.every(elem => elem >= 0)
}

console.log(testFunc(array));
