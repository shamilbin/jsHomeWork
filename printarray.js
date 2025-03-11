function printArray(n) {
  for (i = 0; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("Fizz_Buzz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
}
let n = 95;
printArray(n);
