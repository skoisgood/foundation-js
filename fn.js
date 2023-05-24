console.log("Fn Filter / Call Back");

function filter(arr, condFn) {
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    if (condFn(arr[i])) {
      results.push(arr[i]);
    }
  }
  return results;
}

function isNeg(n) {
  return n < 0;
}

function isPos(n) {
  return n >= 0;
}

//create function outside
console.log(filter([-1, -2, -3, 4, 5, 6, 8, 344, 235, 9, -324], isNeg));

//create function inside
console.log(
  filter([-1, -2, -3, 4, 5, 6, 8, 344, 235, 9, -324], function (n) {
    return n < 0;
  })
);
console.log(filter([-1, -2, -3, 4, 5, 6, 8, 344, 235, 9, -324], (n) => n < 0));
console.log("-------------------------------------------");
