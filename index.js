function hasTargetSum(array, target) {
  // Write your algorithm here

  // Initialize an empty hash table
  let complementMap = {};

  // Iterate through the array elements
  for (let element of array) {
    // Calculate the complement by subtracting the current element from the target sum
    let complement = target - element;

    // Check if the complement exists in the hash table
    if (complementMap.hasOwnProperty(complement)) {
      return true;
    }

    // Otherwise, add the current element to the hash table
    complementMap[element] = true;
  }

  // If no complement is found after iterating through all the elements, return false
  return false;
}

/* 
  Write the Big O time complexity of your function here
  The time complexity of this function is O(n), where n is the size of the input array. 
  This is because we iterate through the array once, performing constant-time operations for each element.
*/

/* 
  Add your pseudocode here
  - Initialize an empty hash table.
  - Iterate through the array elements:
    - Calculate the complement by subtracting the current element from the target sum.
    - Check if the complement exists in the hash table. If it does, return true.
    - Otherwise, add the current element to the hash table.
  - If no complement is found after iterating through all the elements, return false.
*/

/*
  Add written explanation of your solution here
  The solution uses a hash table to store the complements of the numbers encountered so far. 
  By subtracting each element from the target sum, we can check if the complement exists in the hash table. 
  If it does, it means we have found two numbers that add up to the target sum. 
  If no complement is found after iterating through all the elements, it means there are no such numbers in the array.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
