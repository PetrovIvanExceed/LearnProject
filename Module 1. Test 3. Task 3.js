let array = [10, 20, 30];
let count = 0;
let double = array.map(
  function doubleNumber( currentValue ) {
    count += 1;
    return currentValue * 2;
  }
);
console.log( count );
