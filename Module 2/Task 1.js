// Отсортировать массив чисел по возрастанию или убыванию

let array = [5, -1, 4, 8, -13, 0];

function sortFunc(arr) {
  return arr.sort((a, b) => a - b)
}

console.log(sortFunc(array))
