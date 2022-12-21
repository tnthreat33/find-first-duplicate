
function findFirstDuplicate(arr) {
  let seen = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (seen.has(arr[i])) {
      return arr[i];
    } else {
      seen.add(arr[i]);
    }
  }
  return -1;
}

if (require.main === module) {
  // add your own tests in here
console.log("Expecting: -1")
console.log("=>", findFirstDuplicate([1,-1,0]))

  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
//look through array and find the first number that is duplicated. 
//iterate through the irray with the each number until you find a match 

// And a written explanation of your solution
