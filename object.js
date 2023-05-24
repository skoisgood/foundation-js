const personArr = [
  ["art", 26, true],
  ["tiger", 22, false],
  ["build", 30, true],
];

function personFactory(arr) {
  return {
    name: arr[0],
    age: arr[1],
    isHandsome: arr[2],
  };
}

// function peopleFactory(arr){
//     return arr.map(v) => personFactory(arr)
// }

console.log(personFactory(personArr[0]));
console.log("name" in personFactory(personArr[0]));
console.log(personFactory(personArr[0]).foobar);
console.log(personFactory(personArr[0]).name);
