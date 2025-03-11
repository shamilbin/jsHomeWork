function countEvenOrOdd(ar) {
  let odd = 0;
  let even = 0;
  let n = arr.length;

  for (i = 0; i < n; i++) {
    if (arr[i] % 2 == 0) {
      even++;
    } else {
      odd++;
    }
  }

  console.log("The number of occurance of even Number =" + even);
  console.log("The number of occarance of odd Number  =" + odd);
}
let ar = [2, 3, 4, 5, 6, 7, 8, 9, 1];
countEvenOrOdd(arr);



function countEvenOrOdd(arr){
  let odd=0
  let even=0

  let limit =arr.length

  for(i=0;i<limit;i++){
    if(arr[i]%2==0)
    {
      even++
    }
    else {
      odd++
    }
    
  }

}
let arr =[2,3,4,5,6,7,8,9,11,23]
countEvenOrOdd(n)