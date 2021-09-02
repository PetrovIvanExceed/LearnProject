let array = [2, 8, 9, 5, 4, 2, 7, 4, 12, 5, 2, 8, 244, 5];
const testFunction = (arr, val) => {
  let count = arr.reduce((accum, value, index) => {
    if(value === val){
      accum.push(index)
    }
    return accum
  },[])
  console.log(count)
}

testFunction(array, 5)
