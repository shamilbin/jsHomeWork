

function printValue(n){
  switch (n) 
  {
    case "1":
      console.log("One");
      break;
    case "2":
      console.log("Two");
      break;

    case "3":
      console.log("Three");
      break;
    case "4":
      console.log("Four");
      break;
    case "5":
      console.log("Five");
      break;
    case "6":
      console.log("Six");
      break;
    case "7":
      console.log("seven");
      break;
    case "8":
      console.log("Eight");
      break;
    case "9":
      console.log("Nine");
      break;
    case "0":
      console.log("Zero");
      break;

    default:
      console.log("__");
      break;
  }
}

  function numToWord(arr) {
  let num = arr.length;
   
      for(i=0;i<num;i++){
        printValue(arr[i])
      }
  
}

let arr = "3232";
numToWord(arr);
