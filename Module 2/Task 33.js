// Реализуйте функцию, котора параметром принимает строку. Выведите
// сформированный объект из параметров строки браузера

let string = 'https://underscorejs.org?id=123&limit=5&offset=0'

function testFunc(str) {
  let result = []
  let x = str.split('?')
  let y = x[1].split('&')
  for(i = 0; i < y.length; i++) {
    result.push(y[i].split('='))
  }
  return Object.fromEntries(result)
}

console.log(testFunc(string))
