function isPrime(n) {
  for (i = 2; i < n; i++) {
    if (n % i == 0) {
      console.log(n + ". is not a prime number");
      break;
    } else {
      console.log(n + " is a prime number");
      break;
    }
  }
}

let n = 19;
isPrime(n);
