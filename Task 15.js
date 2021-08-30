// Найти максимальный/минимальный элемент в массиве объектов
// В функцию передаем коллекцию. По результату выполнения вывести объект,
// определенное свойство которого, максимальное.

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

testFunction = (arr) => {
  return {
    min: arr.reduce((prev, curr) => prev.age < curr.age ? prev : curr),
    max: arr.reduce((prev, curr) => prev.age > curr.age ? prev : curr)
  }
}

const t = testFunction(collectionArr);
console.log(t);
