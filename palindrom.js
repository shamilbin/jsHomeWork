function checkPalindrom(str) {
  let j = str.length -1;
  for (i = 0; i < j / 2; i++) {
    let x = str[i];
    let y = str[j-1];
     if (x != y)
        
        {
            return true
        }
        {
            return false
        }
    }
//       console.log("The given word is not Palindrom");
//     } else {
//       console.log("The given word is palindrom");
//     }
// }

function isPalindrom(str){
    
    
       
        let ans = check_palindrome(str);
        
       
        if (ans == true) {
            console.log("passed string is palindrome ");
        }
        else {
            console.log("passed string not a palindrome");
        }
    }
    
}
let str = 'malayalam'
isPalindrom(str)
