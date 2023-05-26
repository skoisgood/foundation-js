//For Each
const cities = ["Bangkok", "London", "Paris"];

for (let i = 0; i < cities.length; i++) {
  console.log(cities[i]);
}

cities.forEach(function (city, idx) {
  console.log(city, idx);
});

console.log("======================================");

[1, 2, 3].forEach((n) => {
  console.log(n + 100);
});

console.log("======================================");

[0, 1, 2, 3, 4, 5, 6, 7, 8].forEach((v, i) => {
  if (i % 2 === 0) {
    console.log(v);
  }
});

console.log("======================================");

["Beagie", "Banana", "Mr Donut", "Mr Eiei"].forEach((a, i) => {
  if (a.startsWith("Mr")) {
    console.log(a, i);
  }
});

//Map
console.log("MAP");
["Beagie", "Banana", "Mr Donut", "Mr Eiei"].map((a, i) => {
  if (a.startsWith("Mr")) {
    console.log(a);
  }
});
console.log("======================================");
//Create Function Map

console.log("CREATE FUNCTION MAP");
const name2 = ["Beagie", "Banana", "Mr Donut", "Mr Eiei"];

function map(arr, condFn) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (condFn(arr[i])) {
      newArr.push(condFn(arr[i]));
    } else {
      newArr.push(condFn(arr[i]));
    }
  }
  return newArr;
}

function condCheckName(n) {
  return n.startsWith("Mr");
}
console.log(map(name2, condCheckName));

console.log("======================================");

["Beagie", "Banana", "Mr Donut", "Mr Eiei"].map((a) => {
  const arr = [];
  if (a.startsWith("Mr")) {
    console.log(a.startsWith("Mr"));
  } else {
    console.log(a.startsWith("Mr"));
  }
});

const mapped = ["Beagie", "Banana", "Mr Donut", "Mr Eiei"].map((a) => {
  return a.startsWith("Mr");
});
console.table(mapped);

console.log("======================================");

//Filter

const arr = [1, 2, 3, 4, 5, 6, 13, 39];

const newArr = arr.filter((a, i) => {
  return a % 3 === 0 || a % 13 === 0;
});

console.log(newArr);
console.log("======================================");
//Object
console.log("Object Function");
