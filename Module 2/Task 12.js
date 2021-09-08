// Сгруппировать объекты заказов по имени

let array = [
  {name: 'test', price: 200},
  {name: 'test1', price: 300},
  {name: 'test', price: 100},
  {name: 'test', price: 600}
]

function testFunc(arr) {
  return arr.reduce((accum, object) => {
    let result = accum.find(p => p.name === object.name);
    if (result) {
      result.price += object.price
    } else {
      accum.push(object);
    }
    return accum
  }, [])
}

console.log(testFunc(array))
