// Using console.log() print out the following statement:

console.log('There is no exercise better for the heart than reaching down and lifting people up.', 'by John Holmes teaches us to help one another.')

// Using console.log() print out the following quote by Mother Teresa:

console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

let myNum = "10"
let myNum2 = 10
let toNum = Number(myNum)
console.log(toNum)

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

let parseFloat = '9.8'
let newParseFloat = Number(parseFloat), newNum = Math.round(newParseFloat)
console.log(newNum)

// Check if 'on' is found in both python and jargon

let includes = "python", include2  = "jargon"
console.log(includes.includes("on"))
console.log(include2.includes('on'))

// I hope this course is not full of jargon. Check if jargon is in the sentence.

let sentence = "I hope this course is not full of jargon"
console.log(sentence.includes("jargon"))

// Generate a random number between 0 and 100 inclusively.

let randomNum = Math.random()
let newRandon = randomNum * 101
console.log(newRandon)

// Generate a random number between 50 and 100 inclusively.

let randomNumm = Math.random()
let newRandonn = randomNumm * 101
console.log(newRandonn)
let randomNumRoundToFloor = Math.floor(newRandonn > 50)
console.log(randomNumRoundToFloor)

// Generate a random number between 0 and 255 inclusively.

let randomNum1 = Math.random()
let newRandon1 = randomNum1 * 256 
console.log(newRandon1)

// Access the 'JavaScript' string characters using a random number.

let randomNum2 = "JavaScript"
let newRnadom2 = Math.random()* 9

let roundUp = Math.ceil(newRnadom2)
console.log(roundUp)
let nums = Number (roundUp)
console.log(randomNum2[nums])

// Use console.log() and escape characters to print the following pattern.

let characters = "1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125"
console.log(characters)

// Use substr to slice out the phrase because because because from the following sentence

let character = 'You cannot end a sentence with because because because is a conjunction'
let characterLength = character.length
console.log(characterLength)
console.log(character.slice(31, 54))