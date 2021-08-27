// Вывод всех объектов, где совпадает сразу несколько полей  значений из
// массива объектов
// В функцию передаем коллекцию и 2 значения. По результату выполнения вывести
// все объекты массива, у которых одно свойство ('name' )равно первому параметру
// или другое свойство ('age') равно второму параметру.

let collectionArr = [
  {
    name: 'test',
    age: 18
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
  let newArray = collectionArr.filter(value =>
    value.name === val || value.age === val2);
    return newArray
};

const t = testFunction(collectionArr, 'rest', 18);
console.log(t);
