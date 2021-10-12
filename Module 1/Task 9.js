// Вернуть все элементы, которые противоположны предоставленному условию
// В функцию передаем массив и значение. По результату выполнения вывести
// все элементы массива, которые не равны второму параметру.

let collectionArr = [
  {
    name: 'test',
    age: 9
  },
  {
    name: 'rest',
    age: 89
  },
  {
    name: 'west',
    age: 23
  },
  {
    name: 'test',
    age: 34
  }
]

testFunction = (arr, val, val2) => {
  return arr.filter(value => value.name !== val)
  };

const t = testFunction(collectionArr, 'rest', 18);
console.log(t);
