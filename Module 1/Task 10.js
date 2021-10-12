// В функцию передаем коллекцию и 2 значения. По результату выполнения
// вывести true, если у всех объектов одно свойство равно второму параметру,
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
]

testFunction = (arr, val, val2) => {
   return arr.every(value => value.name === val && value.age === val2
  );
}

const t = testFunction(collectionArr, 'west', 23);
console.log(t);
