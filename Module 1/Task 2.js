// В функцию передаем массив и значение. По результату выполнения вывести все
// элементы массива, которые равны второму параметру.

let array = [5, 7, 2, 9, 4, 2, 8, 9, 4, 2, 7, 4, 12,
  754, 2345, 2, 8, 244, 2545, 6, 3, 9];

testFunction = (arr, val) => {
  let newArray = [];

  array.forEach((value, index) => {
    if(value === val) {
      newArray.push(value)
    }
  });
  return newArray;
}

const t = testFunction(array, 5);
console.log(t);
