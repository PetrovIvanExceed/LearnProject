// Вернуть true, если хотя бы 1 элемент соответсвует условию
// В функцию передаем коллекцию и 2 значения. По результату выполнения
// вывести true, если хотя бы у одного одно свойство равно второму параметру,
// а другое свойство равно третьему параметру.

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

testFunction = (arr, val, val2) => {
  return arr.some(value => value.name === val && value.age === val2)
  };

const t = testFunction(collectionArr, 'test', 9);
console.log(t);
