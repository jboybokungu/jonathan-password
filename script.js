// Assignment Code
var generateBtn = document.querySelector("#generate");
var letters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "123456789";
var specialCharacter = "~`!@#$%^&*()-_=+[{]}\|;:,<.>/?";
var upperCase = true;
var lowerCase = true;
var specialCase = true;
var number = true;
var storedValue = [];

function createPassword() {


  var result = prompt("Choose a length of at least 8 characters and no more than 128 characters");
  var length = parseInt(result);
  var password = "";
  var possiblePassword = "";

  if (!isNaN(length) && length >= 8 && length <= 128) {

    upperCase = confirm('Do you want uppercase letters in your generated password?');
    lowerCase = confirm('Do you want lowercase letters in your generated password?');
    specialCase = confirm('Do you want special character in your generated password?');
    number = confirm('Do you want numbers in your generated password?');

    if (upperCase) {
      var randomPick = Math.floor(Math.random() * upperCaseLetters.length);
      var upperCasePick = upperCaseLetters[randomPick];
      possiblePassword = possiblePassword.concat(upperCaseLetters);
      storedValue.push(upperCasePick);
    }

    if (lowerCase) {
      var randomPick = Math.floor(Math.random() * letters.length);
      var lowerCasePick = letters[randomPick];
      possiblePassword = possiblePassword.concat(letters);
      storedValue.push(lowerCasePick);
    }

    if (specialCase) {
      var randomPick = Math.floor(Math.random() * specialCharacter.length);
      var specialPick = specialCharacter[randomPick];
      possiblePassword = possiblePassword.concat(specialCharacter);
      storedValue.push(specialPick);
    }

    if (number) {
      var randomPick = Math.floor(Math.random() * num.length);
      var numberPick = num[randomPick];
      possiblePassword = possiblePassword.concat(num);
      storedValue.push(numberPick);

    }

    var value = length - storedValue.length;
    if (possiblePassword) {

      for (var i = 0; i < value; i++) {
        var randomPick = Math.floor(Math.random() * possiblePassword.length);
        password += possiblePassword[randomPick];
      }
    } else {
      return "";
    }

    console.log(storedValue);
    password += storedValue.join('');

    console.log(password);
    storedValue = [];

    return password;
  } else {
    alert("Please Enter a valid value");
  }
}
// Write password to the #password input
function writePassword() {
  var password = createPassword();
  var passwordText = document.querySelector("#password");

  if (password) {
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
