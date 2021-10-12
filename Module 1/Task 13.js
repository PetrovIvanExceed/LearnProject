// Вернуть массив значений соответствующих ключу из массива объектов
// В функцию передаем коллекцию и название ключа. По результату выполнения
// вывести массив значений по этому ключу всех объектов.

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

const testFunction = (arr, val) => {
  return collectionArr.reduce((accum, collectionArr) => {
    accum.push(collectionArr[val]);
    return accum;
  }, []);

};

const t = testFunction(collectionArr, 'name');
console.log(t);
