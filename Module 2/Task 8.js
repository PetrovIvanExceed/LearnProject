// Возвращает рандомный элемент массива

let array = [11, 8, 2, 9, 15, 6, 5, 1, 7, 4];

function testFunc(arr) {
  let i = Math.floor(Math.random() * arr.length)
  return arr[i]
}

console.log(testFunc(array))
