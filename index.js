// Step 1: Require the datejs library at the top of the file
require('datejs');

// Step 2: Define the combineUsers function using the rest parameter (...args)
function combineUsers(...args) {
  // Step 3: Initialize the object to hold the merged array
  const combinedObject = {
    users: []
  };

  // Step 4: Loop through each array passed in args and merge using spread syntax
  for (const userArray of args) {
    combinedObject.users = [...combinedObject.users, ...userArray];
  }

  // Step 5: Assign today's date formatted as M/d/yyyy using datejs
  combinedObject.merge_date = Date.today().toString('M/d/yyyy');

  // Step 6: Return the completed object
  return combinedObject;
}

// Step 7: Export the function safely for automated testing (Jest/CodeGrade)
module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};