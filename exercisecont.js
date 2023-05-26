console.log("No.9");

function prime(n) {
  if (n < 0) {
    return [];
  }

  const primes = [2];
  if (n === 1) return primes;

  let at = 3;
  while (primes.length < n) {
    let isPrime = true;
    for (let i = 0; i < primes.length; i++) {
      const p = primes[i];
      if (at % p === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(at);
    }
    at++;
  }
  return primes;
}

console.log(prime(6));
console.log("================================================");
console.log("No.10");
const chart = [110, 105, 95, 9, 80, 17, 120, 115, 11];

function drawDown(chart) {
  const peak = Math.max.apply(Math, chart);
  const maxDown = 0;
  for (let i = chart.indexOf(peak); i < chart.length; i++) {
    const down = peak - chart[i];
    if (down > maxDown) {
      maxDown = down;
      continue;
    }
  }
  return maxDown;
}

console.log("================================================");
console.log("No.16");

function mean(arr) {
  const checkIsNumber = (a) => typeof a === "number";
  const avgNum = arr.reduce((acc, curr) => acc + curr) / arr.length;
  arr.every(checkIsNumber) ? console.log(avgNum) : console.log("null");

  // arr.every((a) => typeof a === "number")
  // ? console.log(avgNum)
  // : console.log("null");
}

mean([10, 20, 30]);
mean([1, "null", 3]);
mean([1, "null", true]);
mean([1, 33434, 546, 76, 45453]);

console.log("================================================");
console.log("No.18");

function mid(arr) {
  const results = [];
  if (arr.length % 2 !== 0) {
    console.log(arr[Math.floor(arr.length / 2)]);
  } else if (arr.length % 2 === 0) {
    console.log(
      arr[Math.floor(arr.length / 2 - 1)],
      arr[Math.floor(arr.length / 2)]
    );
  } else console.log(arr);
}

mid(["hi", "1212", "0000"]);
mid([1, 2, 3, 4, 5, 6]);
mid(["d"]);

console.log("================================================");
console.log("No.21");
// const arr = [
//     [1, 2, 3],
//     [100, 200],
//     [10, 20],
//   ];

function flatMap(arr) {
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      results.push(arr[i][j]);
    }
  }
  return console.log(results);
}
flatMap([
  [1, 2, 3],
  [100, 200],
  [10, 20],
]);

console.log("================================================");
console.log("No.22");

function mapMean(arr) {
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    const a = arr[i].reduce((acc, curr) => acc + curr) / arr.length;
    results.push(a);
  }
  return console.log(results);
}
mapMean([
  [1, 2, 3],
  [100, 200],
  [10, 20],
]);

console.log("================================================");
console.log("No.24");

function mapRevertSign(arr) {
  const results = [];
  if (arr.every((a) => typeof a === "number")) {
    console.log(arr.map((a) => a * -1));
  } else
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== "number") {
        results.push(arr[i]);
        continue;
      }

      results.push(arr[i] * -1);
    }

  return results;
}

console.log(mapRevertSign([1, -4, 2, 0]));
console.log(mapRevertSign([1, -4, 2, "y", "u", "k"]));
console.log(mapRevertSign([1, false, { name: "hi" }, "y"]));

console.log("================================================");
console.log("No.27");

function toBytes(s) {
  const results = [];
  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) > 255) {
      continue;
    }
    const a = s.charCodeAt(i);
    results.push(a);
  }
  return results;
}

console.log(toBytes("Hello"));
console.log(toBytes("Hello🎢"));
console.log(toBytes("Foo🔥"));
console.log(toBytes("Foo"));

console.log("================================================");
console.log("No.26");

function isMember(val, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (val === arr[i]) {
      return true;
    }
  }

  return false;
}

console.log(isMember(112, [1, 2, 3, 4, 5]));

function unique(arr) {
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    if (isMember(arr[i], results)) {
      continue;
    }
    results.push(arr[i]);
  }
  return results;
}

console.log(unique([10, 20, 10, 20, 30, 50, 60, 100]));

console.log("================================================");
console.log("No.17");

function isNull(arr) {
  const results = [];
  const indexMode = [];
  for (let i = 0; i < arr.length; i++) {
    results.push(arr.filter((b) => b === arr[i]).length);
  }
  for (let j = 0; j < results.length; j++) {
    if (results[j] === Math.max.apply(Math, results)) {
      continue;
    }
    indexMode.push(results[j]);
  }
  return indexMode;
}

function mode(arr) {
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    results.push(arr.filter((b) => b === arr[i]).length);
  }
  return arr[results.indexOf(Math.max.apply(Math, results))];
}

console.log(mode([1, 2, 1, 4, 335, 6, 2]));
console.log(isNull([1, 2, 1, 4, 335, 6, 2]));
// console.log([1, 2, 1, 4, 335, 6, 2].keys());
// console.log([1, 2, 1, 4, 5, 6, 2, 1].filter((a) => a === 1).length, "No.1");

console.log("================================================");
console.log("No.15");

function compoundedReturn(amount, interest, n) {
  const newAmount = amount * ((100 + interest) / 100) ** n;
  return newAmount;
}

console.log(compoundedReturn(100, 1, 1)); // 101
console.log(compoundedReturn(100, 10, 1)); // 110
console.log(compoundedReturn(100, 10, 2)); // 121
