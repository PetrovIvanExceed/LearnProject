let array = [5, 7, 2, 9, 4, 2, 8, 9, 4, 2, 7, 4, 12, 754, 2345, 2, 8, 244, 2545, 6, 3, 9];

lengthFunction = (arr) => {
  let count = 1;
  let i = 0;
  while (arr[i+1]) {
    i++;
    count++;
  }

  return count;
}

const t = lengthFunction(array);
console.log(t);
