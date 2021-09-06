let array = [12, 42, 63, 56, 122, 17, 117, 25, 645, 722, 964];

function isBigEnough(arr) {
  return arr.every(elem => elem >= 0)
}

console.log(isBigEnough(array))
