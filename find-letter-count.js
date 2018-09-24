
// Function to take an input string and return an object with 
// keys of the initial letters of the words in the string,
// and values of the number of words starting with each letter.

function letterCount (inputParagraph) {
    const words = inputParagraph.split(' ')
    const lettersObj = {}
    for (let i = 0; i < words.length; i++) {
        // for each word, find the first letter
        const letter = words[i].split('')[0]
        // Add the letter to the object or increment the letter's count
        if (lettersObj[letter]) {
            lettersObj[letter] += 1
        } else {
            lettersObj[letter] = 1
        }
    }
    return lettersObj
}