function firstNonRepeatedChar(str) {
 // Write your code here
	let charCount = {};
  
    // Count the occurrences of each character
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        charCount[char] = (charCount[char] || 0) + 1;
    }
  
    // Find the first non-repeated character
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (charCount[char] === 1) {
            return char;
        }
    }
  
    return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
