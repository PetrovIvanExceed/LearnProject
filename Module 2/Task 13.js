// Реализуйте функцию, которая принимает на вход массив и число, которое задает
// размер чанка (куска). Функция должна вернуть массив, состоящий из чанков
// указанной размерности

let array = ['a', 'b', 'c', 'd'];

function testFunc(arr, size) {
  let subarray = [];
  for (let i = 0; i < Math.ceil(arr.length/size); i++){
    subarray[i] = array.slice((i*size), (i*size) + size)
  }
  return subarray
}

console.log(testFunc(array, 3))
