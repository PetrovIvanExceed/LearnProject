// Вывод всех элементов, где совпадает сразу несколько значений из массива
// В функцию передаем массив и 2 значения. По результату выполнения вывести все
// элементы массива, которые равны или второму, или третьему параметру.

let array = [5, 7, 2, 9, 4, 2, 8, 9, 4, 2, 7, 4, 12, 754, 2345, 2, 8, 244,
  2545, 6, 3, 9];

testFunction = (arr, val, val2) => {
  let result = [];
  arr.forEach(value => {
  if(value === val || value === val2) {
  result.push(value)
  }
  })
  return result
}

const t = testFunction(array, 4, -1);
console.log(t);
