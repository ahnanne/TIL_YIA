// 특별한 정렬
function specialSort(array) {
  const negative = [];
  const positive = [];
  const newArray = [];

  array.forEach(num => {
    if (num < 0) negative.push(num);
    else if (num >= 0) positive.push(num);
  });

  negative.sort((a, b) => b - a);
  positive.sort((a, b) => a - b);

  newArray.push(negative);
  newArray.push(positive);

  return newArray.flat();
}

const testArray = [-1, 1, 3, -2, 2, 0];

console.log(testArray); // [ -1, 1, 3, -2, 2, 0 ]
console.log(specialSort(testArray)); // [ -1, -2, 0, 1, 2, 3 ]
