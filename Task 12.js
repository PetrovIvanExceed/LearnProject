// Вернуть true, если в массиве или массиве объектов есть значение
// В функцию передаем массив и значение. По результату выполнения вывести true,
// если в массиве есть значение равное второму параметру.

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
];

testFunction = (arr, val) => {
  return arr.some(value => value.name === val)
};

const t = testFunction(collectionArr, 'west');
console.log(t);
