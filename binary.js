


// sum();
// add();
// function sum(){
//   console.log("normal fuction")
// }

// var add= function (){
//   console.log("FUction Expresion");
// }
// var kootta =()=>{
//   console.log("Arrow Funtion")
// }

// kootta()




//  ( function sum(){
//   let count =0;
//   console.log("Called "+count)
//  })();




// // IIFE that returns a function
// const laterFunction = (function() {
//   let count = 0;
//   return function() {
//     count++;
//     console.log(count);
//   };
// })();

// laterFunction(); // Output: 1
// laterFunction(); // Output: 2
// laterFunction(); // Output: 3




// const myPromise = new Promise((resolve, reject) => {
//   let isSuccess = true; // Simulate success or failure

//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Operation successful!"); // Fulfill the promise
//       console.log("Operation successful!")

//     } else {
//       reject("Operation failed."); // Reject the promise
//       console.log("Operation failed.!")

//     }
//   }, 1000);
// });