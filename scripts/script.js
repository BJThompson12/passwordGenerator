// Assignment code here
// Array of selections to be included in password
var upperCaseCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];

var lowerCaseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
]

var numberCharacters = ['0','1','2','3','4','5','6','7','8','9','@'

]

var symbolCharacters = ['!','#','$','%','&','(',',',')','*','+',',','-','.','/',',:',';','<','=','>','?','@','[',']','^','_','{','|','}','~'

]
// Functions to generate choices

function getRandomUpperCase () {
  var upperCaseChoice = window.confirm('Would you like to use lower case letters in your password?')
  console.log(upperCaseChoice);
  }
  
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

function generatePassword () {
  console.log('Button clicked')

// 1. Prompt for password criteria
//  a. Password Length 8 < 128
  var lengthChoice = window.prompt('Please select enter your password length between 8 and 128 characters')
  console.log(lengthChoice);
  if (lengthChoice > 7 && lengthChoice < 129){
    window.confirm('You have selected ' + lengthChoice + ' Character Length')}
    else {
      window.alert('Password must be between 8 and 128 characters');
      generatePassword();

    getRandomUpperCase();
  
  }

    var passwordChoices = {
      lengthChoice: lengthChoice,

    }

//  b. lowercase, uppercase, numbers, special characters (confirm prompt) look up parse int bc it has to convert the srting into an integer [arse int before the prompt to convert to a integer has to be a number to loop through ] click ok if want speacial if yes loop through array abd randomly pick 


// 2. validate input
// 3. generate password based on criteria
// 4. display on page

    // generated password will go here
    return passwordChoices;
  }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);