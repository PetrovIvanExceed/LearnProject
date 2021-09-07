// Дана строка. Если она начинается на 'abc', то заменить их на 'www', иначе
// добавить в конец строки 'zzz'.

let text1 = 'abctestabctext'

function testFunc(text){
  if(text.substring(0, 3) === 'abc') {
    let arrStr = text.split('')
    arrStr.splice(0, 3, 'w', 'w', 'w')
    return arrStr.join('')
  }
  let arrStr = text.split('')
  arrStr.splice(arrStr.length - 3, 3, 'z', 'z', 'z')
  return arrStr.join('')
}

console.log(testFunc(text1))
