// Вернуть массив ключей объекта

let object = {
  name: 'test',
  age: 34,
  country: 'RF'
}

function testFunc(obj) {
  return Object.keys(obj)
}

console.log(testFunc(object))
