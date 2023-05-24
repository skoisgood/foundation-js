//1.
// function draw(n) {
//   let s = "";
//   for (let i = 0; i < n; i++) {
//     s += "*";
//   }

//   for (let i = 0; i < n; i++) {
//     console.log(s);
//   }
// }

// draw(5);

//3.
console.log("No.3");
const arr = [12, -13, 14, 4, 1, -9, -99];
const arrNegative = [];
const arrPositive = [];

const maxNegMinPos = () => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arrNegative.push(arr[i]);
    }
  }
  console.log("MaxNeg is " + Math.max.apply(Math, arrNegative));

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      arrPositive.push(arr[i]);
    }
  }
  console.log("MinPos is " + Math.min.apply(Math, arrPositive));
};

maxNegMinPos(arr);

//5.
console.log("No.5");
const class1 = ["Alice", "Bob", "John", "Jane", "Foobar"];
const class2 = ["John", "Foobar", "Barbaz", "Foobaz", "Bob"];
const arrMutual = [];

const mutual = (arr1, arr2) => {
  for (i = 0; i < class1.length; i++) {
    if (class2.includes(class1[i])) {
      arrMutual.push(class1[i]);
    }
  }
  return arrMutual;
};

console.log(mutual(class1, class2));

//6.
console.log("No.6");

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(20);

//12.
console.log("No.12");
const arrNo12 = [120, 112, 111, 130, 169, 101];
const newArrNo12 = [];

function filterLt(n, arr) {
  for (let i = 0; i < arrNo12.length; i++) {
    if (arrNo12[i] < n) {
      newArrNo12.push(arrNo12[i]);
    }
  }
  return newArrNo12;
}

console.log(filterLt(112, arrNo12));

//13.
console.log("No.13");
const arrNo13 = [120, 112, 111, 130, 169, 101];
const newArrNo13 = [];

function filterGt(n, arr) {
  for (let i = 0; i < arrNo13.length; i++) {
    if (arrNo13[i] > n) {
      newArrNo13.push(arrNo13[i]);
    }
  }
  return newArrNo13;
}

console.log(filterGt(112, arrNo13));

//16.
console.log("No.16");

function mean(arr) {
  const checkIsNumber = (currentValue) => typeof currentValue === "number";
  avgNum = arr.reduce((acc, curr) => acc + curr) / arr.length;
  arr.every(checkIsNumber) ? console.log(avgNum) : console.log("null");
}

mean([10, 20, 30]);
mean([1, "null", 3]);
mean([1, "null", true]);
mean([1, 33434, 546, 76, 45453]);
