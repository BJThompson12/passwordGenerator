// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  console.log("Button clicked")


// 1. Prompt for password criteria
//  a. Password Length 8 < 128
//  b. lowercase, uppercase, numbers, special characters
// 2. validate input
// 3. generate password based on criteria
// 4. display on page


  return "generated password will go here!"

}







// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
