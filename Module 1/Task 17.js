// В функцию подается название свойства. Если свойство присутствует в объекте
// вывести "Exist", если отсутсвует вывести сообщение "No exist".

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

testFunction = (arrVal, keyVal) => {
  for (let i = 0; i < arrVal.length; i++) {
    if(arrVal[i][keyVal]) {
      return 'Exist'
    }
  }
  return 'No exist'
}

const t = testFunction(collectionArr, 'name');
console.log(t);
