/*Write a script that prompt the user to enter base and height of the triangle 
and calculate an area of a triangle (area = 0.5 x b x h).*/
let triangleBase = 7
// prompt("Enter Triangle base")
let triangleHeight = 9
// prompt("Enter Triangle height")

let area = 0.5 * triangleHeight * triangleBase
console.log(`the are of the triangle is ${area}`)


/*Write a script that prompt the user to enter side a, side b, and side c of the triangle and 
and calculate the perimeter of triangle (perimeter = a + b + c)*/
let sideA = 7
// prompt("Enter Triangle base")
let sideB = 9
// prompt("Enter Triangle height")
let sideC = 5
// prompt("Enter Triangle base")
let perimeter = sideA + sideB + sideC
console.log(`The perimeter of the triangle is ${perimeter}`)


/*Get length and width using prompt and calculate an area of rectangle 
(area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))*/
let length = 5
// prompt("Enter length")
let width = 5
// prompt("Enter width")
let areaOfRectangle = length * width
console.log(`The area of the triangle is ${areaOfRectangle}`)

let perimeterOfRectangle = 2 * (length + width)
console.log(`The perimeter of the rectangle is ${perimeterOfRectangle}`)

/*Get radius using prompt and calculate the area of a circle (area = pi x r x r)
 and circumference of a circle(c = 2 x pi x r) where pi = 3.14.*/
let radius = 7
// prompt("Enter radius")
const PI = 3.14
let areaOfCircle = PI * radius * radius
console.log(`The area of the circle is ${areaOfCircle}`)

let circomference = 2 * PI * radius
console.log(`The circomference is ${circomference}`)

//Calculate the slope, x-intercept and y-intercept of y = 2x -2
let xIntercept = 7
// prompt("Enter x-intercept")
let yIntercept = 7
// prompt("Enter y-intercept")
let slopeY = 2 * xIntercept - 2
console.log(`Your slope is ${slopeY}`)

//Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let y1 = 5
// prompt("Enter x-intercept")
let y2 = 15
// prompt("Enter x-intercept")
let x1 = 5
// prompt("Enter x-intercept")
let x2 = 10
// prompt("Enter x-intercept")
let slopeM = y2 - y1 / x2 - x1
console.log(slopeM)

//Compare the slope of above two questions.
let slopes = slopeY == slopeM 
console.log(slopes)

//Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
let x = 0
//prompt("enter number")
let y = x**2 + 6*x + 9
console.log(y)

//Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let hours = 12
//prompt("enter number")
let ratePerHour = 98
//prompt("enter number")
let weeklyEarning = hours * ratePerHour
console.log(`Your weekly earning is ${weeklyEarning}`)


//If the length of your name is greater than 7 say, your name is long else say your name is short.
let myName = "Onyinyechi"
let newName = myName.length > 7? console.log(`Your name is long`): console.log(`Your name is short`)

//Compare your first name length and your family name length and you should get this output.
let firstName = "faith"
//prompt("enter first name")
let lastName = "Mbah"
//prompt("enter last name")
let newfirstname = firstName.length
let newlastname = lastName.length

if (newfirstname > newlastname){
    console.log(`your first name is ${firstName} is longer than ${lastName}`)
} else {
    console.log(`your last name is ${lastName} is longer than ${firstName}`)
}


//Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 29
//prompt("enter first name")
let yourAge = 16
//prompt("enter last name")
let ageDiff = myAge - yourAge
console.log(`I am ${ageDiff} years older than you`)

//Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
let age = 14
const ageToDrive = 18
let underAge = ageToDrive - age

// prompt ("Enter age")
console.log(age >= 18? "You are old enough to drive" 
: ` you are ${age} years. You will be allowed to drive after ${underAge} years`)


//Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
const years = new Date() 
let numberOfYears = 100
//prompt("Number of years you woould to live to know the time in seconds")
let yearsInSeconds = years.getSeconds() * numberOfYears
console.log(`You lived ${yearsInSeconds} seconds`)


//Create a human readable time format using the Date time object
const now= new Date()
const year = now.getFullYear()
const month = now.getMonth() + 1 
const date = now.getDate() 
const hours1 = now.getHours()
const minutes = now.getMinutes() 

console.log(`${year}-${date}-${month} ${hours}:${minutes}`) 
console.log(`${date}-${month}-${year} ${hours}:${minutes}`)
console.log(`${date}/${month}/${year} ${hours}:${minutes}`)

