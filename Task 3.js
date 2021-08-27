// В функцию передаем массив и значение. По результату выполнения вывести все
// элементы массива, которые больше второго параметра.

let array = [5, 7, 2, 9, 4, 2, 8, 9, 4, 2, 7, 4, 12, 754, 2345, 2, 8,
  244, 2545, 6, 3, 9];

testFunction = (arr, val) => {
  let newArray = array.filter(value => value > val);
  return newArray.length;
}

const t = testFunction(array, 5);
console.log(t);
