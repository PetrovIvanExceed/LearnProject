// Дана строка. Вывести первые три символа и последний три символа, если длина
// строки больше 5. Иначе вывести первый символ столько раз, какова длина строки

let text = 'text education part 2'

function testFunc(str) {
  if (str.length > 5) {
    return (str.substring(0, 3) + str.substring(str.length - 3))
  }
  return str[0].repeat(str.length)
}
console.log(testFunc(text))
