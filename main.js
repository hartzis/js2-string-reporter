var userInput = prompt('Please enter a single word');

var returnInfo = "You entered: " +userInput+
				"\nThere are " +userInput.length +" characters in the word."+
				"\nThe third character is \'"+userInput[2]+"\'"+
				"\nLowercase: "+userInput.toLowerCase()+
				"\nUppercase: "+userInput.toUpperCase()+
				"\nExample: I have wanted a "+userInput+" since I was a little dude."+
				"\nSubword: "+userInput.substring(1,4);

console.log(returnInfo);

alert(returnInfo);