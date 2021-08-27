// Вывести номер элемента в массиве.
// В функцию передаем массив и значение. По результату выполнения вывести все
// номер элементов массива, которые меньше второго параметра.

let array = [5, 7, 2, 9, 4, 2, 8, 9, 4, 2, 7, 4, 12, 754, 2345, 2, 8, 244,
  2545, 6, 3, 9];

testFunction = (arr, val) => {
  let newArray = [];

  arr.forEach((value, index) => {
    if(value < val) {
      newArray.push(index)
    }
  });

  return(newArray);
}

const t = testFunction(array, 5);
console.log(t);
