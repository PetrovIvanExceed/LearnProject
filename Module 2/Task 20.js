// Проверьте, что строка начинается на http://

let string = 'http://www.figma.com'

function testFunc(str, val) {
  return str.substring(0, val.length) === val
}

console.log(testFunc(string, 'http://'))
