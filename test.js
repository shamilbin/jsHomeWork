// let arr = [1, 4, 3, 6, 59, 2, 5, 9, 8, 7];

// let x = 12;

// let pair = [];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] + arr[j] === x) {
//       pair.push([arr[i], arr[j]]);
//     }
//   }
// }
// console.log(pair);

// let arr = [2, 3, 65, 4, 7, 1, 7, 2, 9];
// let aar2 = aar.sort();
// console.log(arr2);

//========= second largestt ============
let arr = [12,34,2,4,7,150,12,54,23,100]

// let sl = -Infinity
// let fl = -Infinity
// for(let i=0;i<arr.length;i++){
//     if(arr[i] > fl){
//         sl = fl
//         fl = arr[i]
//     }else if( arr[i] >sl && arr[i]<fl){
//         sl = arr[i]
//     }
// }

// console.log('sl',sl);
// console.log('fl',fl);

let sl = 0;
let fl = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > fl) {
    sl = fl;
   fl= arr[i]  ;
  } else if (arr[i] > sl && arr[i] < fl) {
    sl = arr[i];
  }
}
console.log("Second largest. ="+sl)
console.log("first largest. ="+fl)


// // ========= second largestt with sort============
// let arr2 = [12,34,2,4,7,150,12,54,23,100]

// arr.sort((a,b)=>a-b);
// let range=arr.length;
// console.log(arr[range-2])
