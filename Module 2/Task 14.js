// Напишите код, который находит наиболее часто встречаемый элемент массива

let array = [6, 3, 8, 2, 6, 8, 2, 5, 7, 2, 6, 8, 6, 2, 6];

function testFunc(arr){
  let result = arr.reduce(function (accum, value) {
    return accum[value] ? accum[value]++ : accum[value] = 1, accum;
  }, {});
  let result1 = Object.entries(result).sort((a,b)=>(b[1]-a[1]));
  console.log(result1[0][0]);
}
console.log(testFunc(array));
