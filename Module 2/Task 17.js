// Вернуть массив тех значений, которые есть и в первом и во втором

let array = [5, 2, 7, 3, 6, 8, 2, 9, 1]
let array1 = [4, 2, 9, 4, 5, 4]

function testFunc(arr, arr1) {
  let result = arr.filter(x => arr1.includes(x))
  return result.filter((item, index) => {
    return result.indexOf(item) === index
  })
}

console.log(testFunc(array, array1))
