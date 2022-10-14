// Declare a variable named challenge

let challenge = '30 Days Of JavaScript'

// print out string 
console.log(challenge)

//print out length of string
console.log(challenge.length)

//print out string to upper case
console.log(challenge.toUpperCase())

//print out string to lower case
console.log(challenge.toLowerCase())

// print of slice of first word
console.log(challenge.slice(0,2))

//print out "days of javascript only from string"
console.log(challenge.slice(3, 21))

//check is word "script" is in string
console.log(challenge.includes("Script"))

//split string using split method
console.log(challenge.split(""))

//split string at "," using split(",") method
let app = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(app.split(","))

//Replace a word in a string using replace method
console.log(challenge.replace("JavaScript","Python" ))



