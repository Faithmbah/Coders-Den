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

//print the index of 15 in string 
console.log(challenge.charAt(15))

//print the character of "j" code in string
console.log(challenge.charCodeAt("j"))

//print the indexOf first occurence in string
console.log(challenge.indexOf("a"))

//print the indexOf first occurence of the word in the given string
let firstWord = "You cannot end a with because because because is a conjunction"
console.log(firstWord.indexOf('because'))

//print the indexOf last occurence of the word because in the given string
console.log(firstWord.lastIndexOf("because"))

//print the position of the first of the work because
 console.log(firstWord.search("because"))

 //Remove spacing from string
 let firstWord1 = " 30 Days Of javascript  "
 console.log(firstWord1.trim())

//Finds the first word with startsWith
console.log(challenge.startsWith("30"))

//Finds the last word with endsWith
console.log(challenge.endsWith("JavaScript"))

//finds all a's in string
let course = '30 Days of JavaScript'
console.log(course.match('a'))

//Use concate to merge multiple strings to a single string
let num = "30"
let duration = 'Days'
let adjective = "of"
let language = "JavaScript"
console.log(num + ' ' + duration + ' ' + adjective + ' ' + ' ' + language)

//Use repeat to repeat string twice
console.log(challenge.repeat(2))

 



