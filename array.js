function arraySum(arr) {
  

  n = arr.length;
  sum = 0;

  for (i = 0; i < n; i++) {
    sum = sum + arr[i];
  }

  console.log(sum);
}
let arr = [1, 2, 3, 4, 5, 65, 56, 56];
arraySum(arr);
