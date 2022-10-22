
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

let num = "10"
console.log( num == 10)

let int = parseInt("9.8")
console.log( int == 10)


let str = "Data types are devided into two types"




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


const now = new Date()
console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getDate())
console.log(now.getDay())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getTime())
