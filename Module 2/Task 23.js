// Реализуйте функцию, которая параметром принимает строку вида
// '__|----|_|-|____|--'. Где '_' - обозначает 0, а '-' - обозначает 1. Нужно
// вернуть конвертированную строку вида '00111101000011'. Длина строки может
// быть различной и повторений 1 символа тоже не ограниченно.

const string = '__|----|_|-|____|--'

function testFunc(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '_') {
      result = result + '0'
    }
    if (str[i] === '-') {
      result = result + '1'
    }
  }
  return result
}

console.log(testFunc(string))
