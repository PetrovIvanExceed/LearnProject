// Отфильтровать коллекцию, где у свойства есть хоть какое-то значение

let array = [
  {name: 'test', age: 34, country: 'RF'},
  {name: '', age: null, country: ''},
  {name: 'test1', age: null, country: ''},
  {name: '', age: 12, country: ''},
  {name: '', age: null, country: 'RF'}
];

function testFunc(arr) {
  return arr.filter(function(object) {
  return object.name || object.age || object.country
  })
}

console.log(testFunc(array))
