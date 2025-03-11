// const nums = [1,2,3,4,5,6,7,8,9,13,17]
// const prime = nums.filter(item=>{
//     if (item <= 1) return false;
//     for(let i=2;i<item;i++){
//         if(item%i==0) return false
//     }return true
// })
// console.log(prime);




// const str1 = 'listen'
// const str2 = 'silent'
// let arr1 = str1.split('').sort()
// let arr2 = str2.split('').sort()
// if(arr1.join()===arr2.join()){
//     console.log(true);
// }else{
//     console.log(false);
// }


//vowel 
// const str = 'abhijith'
// const arr= str.split('')
// const vow = ['a','e','i','o','u']
// let count = 0
// for(let i=0;i<arr.length;i++){
//     if(vow.includes(arr[i])){
//         count++
//     }
// }

// find longest in a sentence using reduce


// let sent = 'a bb ccc dddd eeeee fff'
// let arr = sent.split(' ')
// console.log(arr);
// const res = arr.reduce((acc,curr)=>{
//    return curr.length>acc.length?curr:acc
// },'')
// console.log(res);

//----------reversing strings
// const str = 'hello world'
// const arr = str.split('')
// console.log(arr);
// const limit = arr.length;

// for(let i=0;i<limit/2;i++){
//    let temp = arr[i];
//    arr[i]=arr[limit-i-1];
//    arr[limit-1-i]=temp
// }

// console.log(arr.join(''));

let nums = [8,34,545,7,7]
let sl = 0
let fl = 0
for(let i=0 ;i<nums.length;i++){
    if(nums[i]>fl){
        sl = fl
        fl = nums[i];     
    }else if( nums [i] >sl && nums[i] < fl){
        sl = nums[i]
    }
}
console.log(sl);
console.log(fl);
// second largest kaanan ee oru methode ullu