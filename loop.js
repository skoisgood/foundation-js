// for (let i = 1; i <= 3; i++){
//     console.log('hello world')
// }

// let i = 1
// while (i <= 5){
//     console.log('hello world')
//     i++
// }

// let count = 1
// while (count < 1000){
//     count = count + 2
// }
// console.log(count)

// *mini exercise

// For loop Exercise:
// Write a code that will loop from 0 to 15. For each loop,
// it will check if the current index number is odd or even,
// and display a message to the console.

//  Example Output:
// 0 is even
// 1 is odd
// 2 is even

//for loop
for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}

//while loop
let j = 0
while (j <= 15){
    j % 2 === 0 ? console.log(j + " is even"):
      console.log(j + " is odd");
    j++    
}



