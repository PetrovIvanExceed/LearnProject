// Напишите функцию, которая преобразует массив вида
// let arr = [{name: 'width', value: 300}, {name: 'height', value: 100}];
// в объект let obj = {width:300, height: 100}; Количество объектов в массиве неограниченно

let array = [{name: 'width', value: 300}, {name: 'height', value: 100}];

function testFunc(arr) {
  let obj = {}
  arr.forEach((val) => {
    obj[val.name] = val.value
  })
  return obj
}
console.log(testFunc(array))
