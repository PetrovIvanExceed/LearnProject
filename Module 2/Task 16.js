// Отсортировать коллекцию по конкретному свойству объекта и переданным
// параметром (asc, desc)

let array = [
  {name: 'test', age: 34, country: 'RF'},
  {name: 'test2', age: 12, country: 'RF'},
  {name: 'test1', age: 54, country: 'RF'}
];

function testFunc(arr, val, action) {
  return arr.sort(function (a, b) {
    switch (action) {
      case 'asc':
        return a[val] - b[val]
      case 'desc':
        return b[val] - a[val]
      default:
        return a[val] - b[val]
    }
  })
}

console.log(testFunc(array, 'age', 'deassc'))
