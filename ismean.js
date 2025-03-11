function isMean(arr) {
  let n = arr.length;

  let sum = 0;
  for (i = 0; i < n; i++) {
    sum = sum + arr[i];
  }
  let mean = sum / n;
  console.log("mean of array element =" + mean);
}
let arr = [3, 4, 5, 6, 2, 3, 4];

isMean(arr);
