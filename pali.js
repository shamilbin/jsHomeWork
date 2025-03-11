// function isPalindrome(str) {
//     let rev = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         rev += str[i];
//     }
//     if (rev == str) {
//         return true
//     } else {
//         return false;
//     }
// }

// let str1 = "racecar";
// let str2 = "nitin";
// let str3 = "Rama";

// console.log(isPalindrome(str1));
// console.log(isPalindrome(str2));
// console.log(isPalindrome(str3));

function isPalindrome(str) {
  let rev = "";
  let limit = str.length;
  for (i = limit - 1; i >= 0; i--) {
    //  let rev = str.split("").reverse().join("");

    rev = rev + str[i];
  }
  if (rev === str) {
    console.log(str + "     is Palindrom");
  } else {
    console.log(str + "    is not palindrom");
  }
}
str1 = "malayalam";
str2 = "saas";
str3 = "amuma";
str4 = "hisham";
isPalindrome(str1);
isPalindrome(str2);
isPalindrome(str3);
isPalindrome(str4);
