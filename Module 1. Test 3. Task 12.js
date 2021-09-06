let arr = [12, 42, 63, 56, 122, 17, 117, 25, 645, 722, 964];
let result1 = [];

for(let i = 0; i < arr.length; i++)
{
  if ((arr[i] % 2) === 0)
  {
    result1.push(arr[i]);
  }
}

let result2 = arr.filter(n => result1.indexOf(n) === -1);

console.log(result2)
