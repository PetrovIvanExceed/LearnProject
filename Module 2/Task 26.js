// Взять определенное количество элементов из массива

let array = [6, 8, 3, 6, 2, 9, 5, 3, 8, 8, 3]

function testFunc(arr, val) {
  return arr.slice(0, val)
}

console.log(testFunc(array, 5))
