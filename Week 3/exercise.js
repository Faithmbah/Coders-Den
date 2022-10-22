/*Declare firstName, lastName, country, city, age, isMarried, year variable and 
assign value to it and use the typeof operator to check different data types.*/

let firstName = "Ogechi"
let lastName = "Mbah"
let country = "Nigeria"
let city = "Abuja"
let age = 16
let isMarried = false

typeof(firstName) === "string"
typeof(lastName) === "string"
typeof(country) === "string"
typeof(city) === "string"
typeof(age) === "number" 
typeof(isMarried) === "boolean"


//Check if type of '10' is equal to 10
let num = "10"
console.log( num == 10)

//Check if parseInt('9.8') is equal to 10
let int = parseInt("9.8")
console.log( int == 10)

//Boolean value is either true or false.

//Write three JavaScript statement which provide truthy value.
let A = 4 == 4
let B = 10 < 12
let C = 4 < 6

console.log(`${A}`)
console.log(`${B}`)
console.log(`${C}`)

//Write three JavaScript statement which provide falsy value.

let D = 0 > 1
let E = 0 * 2
let F = 3 === "3"
console.log(`${D}`)
console.log(`${E} is a falsy valus`)
console.log(`${F}`)

/*Figure out the result of the following comparison expression first without 
using console.log(). After you decide the result confirm it using console.log()*/

let num1 = 4 > 3
// true
let num2 = 4 >= 3
// true
let num3 = 4 < 3
// false
let num4 = 4 <= 3
// false
let num5 = 4 == 4
// true
let num6 = 4 === 4
// true
let num7 = 4 != 4
// false
let num8 = 4 != "4"
//false
let num9 = 4 == "4"
//true
let num10 = 4 === "4"
//false
console.log(num4)


let firstlan = "python"
firstlan = firstlan.length

let secondlan = "jargon"
secondlan = secondlan.length

console.log( ! (`${firstlan} == ${secondlan}`))

/*Figure out the result of the following expressions first without using console.log().
 After you decide the result confirm it by using console.log()*/

let a = 4 > 3 && 10 < 12
// true
let b = 4 > 3 && 10 > 12
// false
let c = 4 > 3 || 10 < 12
// true
let d = 4 > 3 || 10 > 12
// true
let e = !(4 > 3)
//false
let f = !(4 < 3)
// true
let g = !(false)
//true
let h = !(4 > 3 && 10 < 12)
//false
let i = !(4 > 3 && 10 > 12)
//false
let j = !(4 === '4')
//true
console.log(h)

let firstlan1 = 'python'
let secondlan1 = "jargon"
console.log(!(` ${firstlan1} && ${secondlan1}`))

//Use the Date object to do the following activities
const now = new Date()
console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getDate())
console.log(now.getDay())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getTime())
