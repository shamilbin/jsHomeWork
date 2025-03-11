function findSecondLargest(arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;
  
    for (let num of arr) {
      if (num > largest) {
        secondLargest = largest; // Update second largest
        largest = num;          // Update largest
      } else if (num > secondLargest && num < largest) {
        secondLargest = num;    // Update second largest if it's smaller than largest
      }
    }
  
    return secondLargest === -Infinity ? null : secondLargest; // Return null if no second largest exists
  }
  
  // Example usage
  let arr = [3, 5, 7, 2, 8, 8, 1];
  console.log(findSecondLargest(arr)); // Output: 7