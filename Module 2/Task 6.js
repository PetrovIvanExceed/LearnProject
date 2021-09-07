// Удалить из массива значение с конкретным индексом

let array = [5, 3, 8, 2, 9, 4, 1, 7];

function testFunc(arr, val) {
  arr.splice(val, 1)
  return arr
}

console.log(testFunc(array, 4))
