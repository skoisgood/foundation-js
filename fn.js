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

console.log(
  filter([-1, -2, -3, 4, 5, 6, 8, 3434, 235, 9, -23123, -324], isNeg)
);

console.log("-------------------------------------------");
